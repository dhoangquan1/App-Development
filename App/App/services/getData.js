import { useState, act } from "react";
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

const river_prefix = 'river_id.eq.';
const comma = ',';
const ipswich = '09cec781-00d8-4ec2-8217-dea3243f0d48';
const nashua = 'a43ddb01-654a-4f7c-a288-d16732a842ce';

const land = 'Hiking, Walk, & Run';
const swimming = 'Swimming';
const paddling = 'Paddling';
const fishing = 'Fishing';

let filterByRivers = null;
let filterByActivities = null;

export async function getFilteredActivities () {
    const rivers = [];
    const activities = [];
    const riverQuery = riverString(rivers);
    const activityQuery = activityString(activities);
    console.log(riverQuery);
    console.log(activityQuery);

    try {
        let query = supabase
        .from('activities')
        .select(`
            *, 
            rivers( name ),
            activities_tags( tag )`)
         
        if (riverQuery) { query = query.or(riverQuery) }
        if (activityQuery) { query = query.filter('activity', 'in', activityQuery) }
        
        const {data, error} = await query
        
        return data;
    } catch (error) {
        return {
            success: false,
            error: error.message
        }
    }
}

function riverString(riversArray) {
    let riverString = null;
    if (riversArray.length > 0) {
        riverString = riversArray
        .map(river => river_prefix + river)
        .join();
    }
    return riverString;
}

function activityString(activitiesArray) {
    let activityString = null;

    if (activitiesArray.length > 0) {
        activityString = activitiesArray
        .map(activity => `"${activity}"`)
        .join();
    
        activityString = `(${activityString})`
    }
  
    return activityString;
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