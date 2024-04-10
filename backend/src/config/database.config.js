import { connect, set } from "mongoose";
import { UserModel } from "../models/user.model.js";
import { SemesterModel } from "../models/semester.model.js";
import { sample_users } from "../data.js";
import { sub_list } from "../data.js";
import bcrypt from "bcryptjs";
const PASSWORD_HASH_SALT_ROUNDS = 10;
set("strictQuery", true);

export const dbconnect = async () => {
  try {
    connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await seedUsers();
    await seedSems();
    console.log("Connected Successfully---");
  } catch (error) {
    console.log(error);
  }
};

async function seedUsers() {
  const usersCount = await UserModel.countDocuments();
  if (usersCount > 0) {
    console.log("Users seed is already done!");
    return;
  }

  for (let user of sample_users) {
    user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
    await UserModel.create(user);
  }

  console.log("Users seed is done!");
}

async function seedSems() {
  const sems = await SemesterModel.countDocuments();
  if (sems > 0) {
    console.log("Semesters seed is already done!");
    return;
  }

  for (const sem of sub_list) {
    await SemesterModel.create(sem);
  }

  console.log("Semesters seed Is Done!");
}
