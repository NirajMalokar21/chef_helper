"use server"

import User from "@/database/user.model";
import { connectToDatabse } from "../mongoose";
import { CreateUserParams } from "./shared.types";

export async function createUser(userData: CreateUserParams){
    try {
        await connectToDatabse();
        console.log("Creating user")
        const newUser = await User.create(userData)
        console.log("User created")
        return newUser;
    } catch (error) {
        console.log(error)
    }
}