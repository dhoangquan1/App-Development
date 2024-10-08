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

export async function getAllRiversForFilters () {
    try {
        const {data, error} = await supabase
        .from('rivers')
        .select(`name, id`);
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}


export async function getAllActivities( longitude, latitude, activeTab, userID) {
    try {
        const { data, error } = await supabase.rpc('filter_activities', {
            param_name_search: null,
            param_activity: (activeTab === "Nearby" ? null : activeTab), 
            param_river_id: null, 
            param_user_id: (userID ? userID : null),
            param_town: null,
            param_tags: null,
            param_lat: latitude, 
            param_long: longitude

          });
          if (error) {
            console.error("Supabase RPC Error:", error.message);
            throw new Error(error.message);
          }
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function getFilteredActivities(longitude, latitude, form, userID) {
    try {
        const { data, error } = await supabase.rpc('filter_activities', {
            param_name_search: (form.name ? form.name : null),
            param_activity: (form.activity === "All" ? null : form.activity), 
            param_river_id: (form.river_id ? form.river_id : null), 
            param_user_id: (userID ? userID : null),
            param_town: (form.town ? form.town : null),
            param_tags: (form.tags.length > 0 ? form.tags : null),
            param_lat: latitude, 
            param_long: longitude

          });
          if (error) {
            console.error("Supabase RPC Error:", error.message);
            throw new Error(error.message);
          }
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

export async function getActivity (activityId) {
    try {
        const {data, error} = await supabase
        .from('activities')
        .select(`
            *, 
            activities_tags( tag )`)
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

export async function getPost (postID) {
    try {
        const {data, error} = await supabase
        .from('users_posts')
        .select(`
            *, 
            users_posts_tags( tag ),
            users ( * )`)
        .eq('id', postID)
        .single();
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function getActivityByCategory(category) {
    try {
        let query = supabase
        .from('activities')
        .select(`
            *, 
            rivers( name ),
            activities_tags( tag )`);

        if(category !== "Nearby"){
            query = query.eq('activity', category);
        }
        
        const {data, error} = await query;

        if(error){
            return {
                success: false,
                error: error?.message
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

export async function getAllUserContents() {
    try {
        const { data, error } = await supabase.rpc('get_user_contents');
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function getBookmark(userID, latitude, longitude) {
    try {
        const { data, error } = await supabase.rpc('get_bookmark', {
            param_user_id: userID,
            param_lat: latitude,
            param_long: longitude
        });
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function getUserContents(userID) {
    try {
        const { data, error } = await supabase.rpc('get_user_contents_by_user_id', {
            param_user_id: userID
        });
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

export async function getActivityReviews(activityId) {
    try {
        const {data, error} = await supabase
        .from('activities_reviews')
        .select(`*, users!inner(*)`)
        .eq('activity_id', activityId)
        .order('created_at', { ascending: false });
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

