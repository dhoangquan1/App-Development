import { createContext, useState, useContext, useEffect } from "react";

const FormContext = createContext();

const categories = ["All", "Swimming", "Fishing", "Paddling", "Boating and Sailing", "Hiking, Walk, & Run"];

export const FormProvider = ({children}) => {
    const [isFiltering, setIsFiltering] = useState(false);
    const [isResetingSearch, setIsResetingSearch] = useState(false)
    const [form, setForm] = useState({
        name: null,
        activity: "All", 
        river_id: null,
        town: null,
        tags: []
    });


    return (
        <FormContext.Provider value={{isFiltering, setIsFiltering, isResetingSearch, setIsResetingSearch, form, setForm}}>
            {children}
        </FormContext.Provider>
    )
}

export const useForm = () => useContext(FormContext);