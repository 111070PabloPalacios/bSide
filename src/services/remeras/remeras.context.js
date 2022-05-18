import React, {useState, useEffect,createContext} from "react";
import { RemerasService, SearchService } from "./remeras.service";

export const RemerasContext = createContext();

export const RemerasContextProvider = ({children}) => {
    const [remeras, setRemeras] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const data = () => {
        if(remeras.length === 0) {
            RemerasService('remeras', setRemeras);
        }
    };

    const search = (value) => {
        if(searchResults.length === 0){
            SearchService(value, setSearchResults);
        }
        else{
            setSearchResults([]);
            SearchService(value, setSearchResults);
        }
        
    };

    useEffect(() =>{
        data();
        setTimeout(() => {
            setIsLoading(false);
        }, 5000);
    },[]);

    return(
        <RemerasContext.Provider value={{
            remeras, 
            isLoading,
            searchResults,
            search
        }}>
            {children}
        </RemerasContext.Provider>
    );
}