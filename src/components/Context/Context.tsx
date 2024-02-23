import { createContext, useState } from "react";


type contextType={
    name:string|null,
    setName:React.Dispatch<React.SetStateAction<any>>
}
export const userContextApi=createContext<contextType|null>(null);

type providertype={
    children:React.ReactNode
}

export const ContextProvider=({children}:providertype)=>{
    let [name,setName]=useState<string|null>(null);
   
        return(
            <userContextApi.Provider value={{name,setName}}>{children}</userContextApi.Provider>
        )
       
}