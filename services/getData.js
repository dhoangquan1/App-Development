import { supabase } from "../lib/supabase"

/**
 * Retrieves user data from the database
 * @param {*} userId - The ID of the user to retrieve data for
 * @returns 
 */
export async function getUserData (userId) {
    try {
        const {data, error} = await supabase
        .from('users')
        .select('*')
        .eq('id', userId)
        .single();
        if(error){
            return {
                success: false,
                error: error?.message
            }
        }
        return {success: true, data};
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function getAllRivers () {
    try {
        const {data, error} = await supabase
        .from('rivers')
        .select(`*, activities(count)`);
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function getAllActivities () {
    try {
        const {data, error} = await supabase
        .from('activities')
        .select(`
            *, 
            rivers( name ),
            activities_tags( tag )`);
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function getRiver (riverId) {
    try {
        const {data, error} = await supabase
        .from('rivers')
        .select('*')
        .eq('id', riverId)
        .single();
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function getOrganizations (riverId) {
    try {
        const {data, error} = await supabase
        .from('organizations')
        .select('*')
        .eq('river_id', riverId);
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}
// do userID instead of activityID, and .from('bookmark') for bookmark
export async function getActivity (activityId) {
    try {
        const {data, error} = await supabase
        .from('activities')
        .select(`*, activities_tags( tag )`)
        .eq('id', activityId)
        .single();
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}
//My bookmark function:
//  export async function getBookmark (userID) {
//     try {
//         const {data, error} = await supabase
//         .from('bookmark')
//         .select(`*, activities(*)`)
//         .eq('id', activityId)
//         .single();
//         return data;
//     } catch (error) {
//         return {
//             success: false,
//             error: error.message
//         }
//     }
// }

export async function getActivityByCategory(category) {
    try {
        const {data, error} = await supabase
        .from('activities')
        .select(`*, activities_tags( tag )`)
        .eq('activity', category);
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function getActivityByCategoryAndRiver(category, riverID) {
    try {
        const {data, error} = await supabase
        .from('activities')
        .select(`
            *, 
            rivers( name ),
            activities_tags( tag )`)
        .eq('river_id', riverID)
        .eq('activity', category);
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}