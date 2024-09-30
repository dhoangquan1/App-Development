import { supabase } from "../lib/supabase";

export async function deleteBookmark (userID, activityID) {

    try {
        const response = await supabase
        .from('bookmark')
        .delete()
        .eq('user_id', userID)
        .eq('activity_id', activityID,);
            
        return {success: true};
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}