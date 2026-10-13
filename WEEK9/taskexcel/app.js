const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";

const client = new MongoClient(url);

const dbName = "studentDB";
const collectionName = "student";

async function main() {

    try {

        // Connect to MongoDB
        await client.connect();

        console.log("\nConnected to MongoDB!");
        console.log("Database:", dbName);
        console.log("Collection:", collectionName);

        // Select database
        const db = client.db(dbName);

        // Select collection
        const collection = db.collection(collectionName);

        // ---------------------------------------------
        // READ CURRENT DATA FROM MONGODB
        // ---------------------------------------------

        const students = await collection.find({}).toArray();

        console.log("\n====================================");
        console.log("CURRENT STUDENT DATA");
        console.log("====================================");

        students.forEach(student => {

            console.log("\nStudent ID:", student.studentId);
            console.log("Name:", student.name);
            console.log("Branch Code:", student.branchCode);
            console.log("Joining Year:", student.joiningYear);
            console.log("Subject:", student.subject);
            console.log("Marks:", student.marks);

        });

        // ---------------------------------------------
        // AGGREGATION
        // ---------------------------------------------

        console.log("\n====================================");
        console.log("STUDENT GRADE SUMMARY");
        console.log("====================================");

        const result = await collection.aggregate([

            {
                $group: {

                    _id: "$studentId",

                    name: {
                        $first: "$name"
                    },

                    branchCode: {
                        $first: "$branchCode"
                    },

                    joiningYear: {
                        $first: "$joiningYear"
                    },

                    totalMarks: {
                        $sum: "$marks"
                    },

                    averageMarks: {
                        $avg: "$marks"
                    },

                    highestMarks: {
                        $max: "$marks"
                    },

                    lowestMarks: {
                        $min: "$marks"
                    }
                }
            },

            {
                $project: {

                    _id: 0,

                    studentId: "$_id",

                    name: 1,

                    branchCode: 1,

                    joiningYear: 1,

                    totalMarks: 1,

                    averageMarks: {
                        $round: [
                            "$averageMarks",
                            2
                        ]
                    },

                    highestMarks: 1,

                    lowestMarks: 1
                }
            },

            {
                $sort: {
                    averageMarks: -1
                }
            }

        ]).toArray();

        result.forEach(student => {
            console.log("\nStudent ID:", student.studentId);
            console.log("Name:", student.name);
            console.log("Branch Code:", student.branchCode);
            console.log("Joining Year:", student.joiningYear);
            console.log("Total Marks:", student.totalMarks);
            console.log("Average Marks:", student.averageMarks);
            console.log("Highest Marks:", student.highestMarks);
            console.log("Lowest Marks:", student.lowestMarks);
            console.log("------------------------------------");
        });

    }

    catch (error) {

        console.error("\nMongoDB Error:");
        console.error(error);

    }

    finally {

        await client.close();

    }

}

main();