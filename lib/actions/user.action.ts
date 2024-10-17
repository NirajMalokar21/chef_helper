"use server"

import User from "@/database/user.model";
import { connectToDatabse } from "../mongoose";
import { addShopListParams, CreateUserParams } from "./shared.types";
import ShopList from "@/database/shopList.model";

// export async function getShopLists(clerkId: string | null){
//     try {
//         await connectToDatabse();

//         console.log("getting shop lists");
//         if(!clerkId){
//             return null;
//         }

//     } catch (error) {
//         console.log(error)
//     }
// }

export async function getUser(clerkId: string | null){
    try {
        await connectToDatabse();
        console.log("getting user");
        if(!clerkId){
            return null;
        }
        const user = await User.findOne({ clerkId: clerkId });

        return user;

    } catch (error) {
        console.log(error)
    }
}

export async function getShopLists(clerkId: string | null){
    try {
        await connectToDatabse();

        console.log("getting shop lists");
        if(!clerkId){
            return null;
        }

        const user = await User.findOne({ clerkId }).select('shopLists').populate("shopLists");

        if (user && user.shopLists) {
            return user.shopLists;
        } else {
            console.log("User not found or no shop lists");
            return [];
        }
    } catch (error) {
        console.error("Error retrieving shop lists:", error);
    }
}

export async function addShopList(listData: addShopListParams){
    try {
        await connectToDatabse();

        const { clerkId, title, description, ingredients } = listData;

        console.log("Adding shop list");
        if(!clerkId){
            return null;
        }

        const newShopList =  await ShopList.create({
            title, 
            description,
            ingredients
        })

        const user = await User.findOneAndUpdate(
            { clerkId },
            { $push: { shopLists: newShopList._id }},
            { new: true }
        );

        console.log('Shop list added');
        return user?.shopLists;

    } catch (error) {
        console.log(error)
    }
}

export async function createUser(userData: CreateUserParams){
    try {
        await connectToDatabse();
        console.log("Creating user");

        const newUser = await User.create(userData);
        console.log("User created");

        return newUser;

    } catch (error) {
        console.log(error)
    }
}