import { supabase } from "../lib/supabase";
import {decode} from "base64-arraybuffer"
import { Alert } from "react-native";
import uuid from "uuid"

export async function uploadBookmark (userID, activityID) {

    try {
        const { error } = await supabase
        .from('bookmark')
        .insert({
            user_id: userID,
            activity_id: activityID,
        });
        if(error){
            return {
                success: false,
                error: error.message
            }
        }
        return {success: true};
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function uploadReviewImage (file, userID, activityID) {

    try {
        const {data: uploadData, error: uploadError} = await supabase
        .storage
        .from('images')
        .upload(`${userID}/reviews/${activityID}.jpg`, decode(file), {
            contentType: 'image/jpeg'
        })

        // Check for any errors during upload
        if (uploadError) {
            Alert.alert(uploadError.message);
        }

        const { data: url } = supabase
        .storage
        .from('images')
        .getPublicUrl(`${uploadData.path}`)
        
        return url;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function uploadReview (form, imageURL) {

    try {
        const { error } = await supabase
        .from('activities_reviews')
        .insert({
            user_id: form.user_id,
            activity_id: form.activity_id,
            rating: form.rating,
            title: form.title,
            description: form.description,
            image: imageURL,
        });
        if(error){
            return {
                success: false,
                error: error.message
            }
        }
        return {success: true};
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

export async function uploadPostImage (file, userID, postID) {
    try {
        const {data: uploadData, error: uploadError} = await supabase
        .storage
        .from('images')
        .upload(`${userID}/posts/${postID}.jpg`, decode(file), {
            contentType: 'image/jpeg'
        })

        // Check for any errors during upload
        if (uploadError) {
            Alert.alert(uploadError.message);
        }

        const { data: url } = supabase
        .storage
        .from('images')
        .getPublicUrl(`${uploadData.path}`)
        
        return url;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function uploadPost (form, imageURL, userID, postID ) {
    try {
        const {error} = await supabase
        .from('users_posts')
        .insert({
            id: postID,
            river_id: form.river_id,
            activity: form.activity_type,
            name: form.post_name,
            town: form.town,
            description: form.description,
            address: `${form.street}, ${form.town}, MA ${form.zip_code}`,
            image: imageURL,
            latitude: form.latitude,
            longitude: form.longitude,
            user_id: userID
        });
        if(error){
            return {
                success: false,
                error: error.message
            }
        }
        return {success: true};
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function uploadPostTags (updatedTags) {
    try {
        const {error} = await supabase
        .from('users_posts_tags')
        .insert(updatedTags);
        if(error){
            return {
                success: false,
                error: error.message
            }
        }
        return {success: true};
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}