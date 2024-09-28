import { supabase } from "../lib/supabase";
import uuid from "react-native-uuid"

export async function uploadReviewImage (event, userID, activityID) {
    let file = event.target.files[0];

    try {
        const {data, error} = await supabase
        .storage
        .from('images')
        .upload('reviews/' + activityID + '/' + userID, file);
        if(error){
            return {
                success: false,
                error: error.message
            }
        }
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function uploadPost (form, userID, postID ) {
    try {
        const {data, error} = await supabase
        .from('images')
        .insert({
            id: postID,
            user_id: userID,
            river_id: form.river_id,
            activity: form.activity,
            name: form.name,
            town: form.town,
            description: form.description,
            address: form.address,
            wc_entrance: form.wc_entrance,
            wc_parking: form.wc_parking,
            pet: form.pet,
            image: form.image,
            note: form.note,
            latitude: form.latitude,
            longitude: form.longitude,
        })
        .select();
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function uploadPostImageToStorage (event, userID, postID) {
    let file = event.target.files[0];

    try {
        const {data, error} = await supabase
        .storage
        .from('images')
        .upload('posts/' + userID + '/' + postID + '/' + uuid.v4, file);
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function uploadAvatarImageToStorage (event, userID) {
    let file = event.target.files[0];

    try {
        const {data, error} = await supabase
        .storage
        .from('images')
        .upload('avatars/' + userID, file);
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function uploadPost (form, userID, postID ) {
    try {
        const {data, error} = await supabase
        .from('images')
        .insert({
            id: postID,
            user_id: userID,
            river_id: form.river_id,
            activity: form.activity,
            name: form.name,
            town: form.town,
            description: form.description,
            address: form.address,
            wc_entrance: form.wc_entrance,
            wc_parking: form.wc_parking,
            pet: form.pet,
            image: form.image,
            note: form.note,
            latitude: form.latitude,
            longitude: form.longitude,
        })
        .select();
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}