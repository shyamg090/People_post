import { createContext, useEffect, useState } from "react";
export const ContextData = createContext();

const Context = ({children}) => {

    const [recipes, setRecipes] = useState([]);
    const [filteredrecipes, setFilteredRecipes] = useState([]);

    useEffect(()=>{
        getRecipies()
    }, [])

    const getRecipies = async ()=>{
        const recipiesdata = await fetch("https://dummyjson.com/recipes")

        const jsonData = await recipiesdata.json();
        console.log(jsonData.recipes);
        setRecipes(jsonData.recipes)
        setFilteredRecipes(jsonData.recipes)
    }



  return (
    <ContextData.Provider value={{recipes , setRecipes, filteredrecipes, setFilteredRecipes}}>
        {children}
    </ContextData.Provider>
  )
}

export default Context;
