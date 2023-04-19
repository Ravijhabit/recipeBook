import { useState, useEffect } from "react";
import axios from 'axios';
import {useGetUserID} from '../hooks/useGetUserID';
import { useCookies } from "react-cookie";
import SingleRecipe from "../components/SingleRecipe/SingleRecipe";
import css from '../components/Home/home.module.css';
import NotFound from "../components/NotFound";

export const SavedRecipes = () =>{
    const [savedRecipes,setSavedRecipes] = useState([]);
    const userID = useGetUserID();
    const [cookies,_] =useCookies();
    useEffect(()=>{
        const fetchSavedRecipe = async()=>{
            try{
                const response = await axios.get('http://localhost:3001/recipes/savedRecipes/'+userID,{
                    headers:{authorization:cookies.access_token}
                });
                setSavedRecipes(response.data.savedRecipes);
            }catch(err){
                console.error(err);
            }
        };

        fetchSavedRecipe();
    },[]);

    return(
        <div className={css.container}>
            <h1>Saved Recipes</h1>
            {savedRecipes.length===0 && <NotFound content={'Didn\'t saved any recipe go and save some'}/>}
            {savedRecipes?.map( recipe => (
                    <SingleRecipe key={recipe._id} id={recipe._id} name={recipe.name} type={recipe.type} rating={recipe.rating} ingredient={recipe.ingredient} instructions={recipe.instructions} image={recipe.imageUrl} cookingTime={recipe.cookingTime} 
                    savedRecipe/>)
            )}
        </div>
    );
}; 