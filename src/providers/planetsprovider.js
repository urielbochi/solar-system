import React, { useEffect, useState } from "react";
import { mock } from "../utils/mockapi";
import MyContext from "./mycontext";

export default function planetProvider({children}) {
   const [allPlanets, setAllPlanets] = useState([])
   useEffect(() => {
       setAllPlanets(mock)
   },[])
   const globalState = {
       allPlanets,
   }
   return(
       <MyContext.Provider value={ globalState }>
           {children}
       </MyContext.Provider>
   )
}