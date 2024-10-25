"use server"

import ShopList from "@/database/shopList.model";
import { connectToDatabse } from "../mongoose";
import { addShopListParams, UpdateIngredientsParams } from "./shared.types";
import User from "@/database/user.model";

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

export async function getShopListIdByTitle(title: string){
    try {
        await connectToDatabse();

        console.log("getting shop lists");
        if(!title){
            return null;
        }

        const shopList = await ShopList.findOne({ title })

        return shopList._id

    } catch (error) {
        console.log(error)
    }
}

export async function getShopListById(id: string){
    try {
        await connectToDatabse();

        console.log("getting shop lists");
        if(!id){
            return null;
        }

        const shopList = await ShopList.findById(id);

        return shopList;

    } catch (error) {
        console.log(error)
    }
}

export async function deleteShopLists(title: string){
    try {
        await connectToDatabse();

        console.log("getting shop lists");
        if(!title){
            return null;
        }

        await ShopList.findOneAndDelete({ title });
        console.log("Shop List deleted.")
        return;

    } catch (error) {
        console.log(error)
    }
}

export async function updateIngredients(params: UpdateIngredientsParams){
    try {
        const { id, ingredients } = params
        await connectToDatabse();

        if(!id){
            return null;
        }

        console.log("updating shop list...")

        const updatedShopList = await ShopList.findByIdAndUpdate(
            id,                           
            { ingredients: ingredients },  
            { new: true }                  
        );

        if (!updatedShopList) {
            throw new Error('Shop list not found');
        }

        console.log("Shop List Updated")

        return updatedShopList;

    } catch (error) {
        console.log(error)
    }
}






