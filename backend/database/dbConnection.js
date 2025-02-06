import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    // .connect(process.env.MONGO_URI, {
    .connect(
      "mongodb+srv://rahulkumar20010702:8Q4YK6yUtwyNUKJd@cluster0.vhf4a.mongodb.net/jobseeker?retryWrites=true&w=majority&appName=Cluster0",
      {
        dbName: "MERN_JOB_SEEKING_WEBAPP",
      }
    )
    .then(() => {
      console.log("Connected to database.");
    })
    .catch((err) => {
      console.log(`Some Error occured ${err}`);
    });
};
