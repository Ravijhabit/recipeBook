import { useState, useEffect } from "react";
import axios from 'axios';
import {useGetUserID} from '../../hooks/useGetUserID';
import { useCookies } from "react-cookie";
import SingleRecipe from "../SingleRecipe/SingleRecipe";
import css from './home.module.css';
import NotFound from "../NotFound";


export const Home = () =>{
    const [recipes, setRecipes] = useState([]);
    const [savedRecipes,setSavedRecipes] = useState([]);
    const [cookies,_] = useCookies();
    const userID = useGetUserID();
    useEffect(()=>{
        const fetchRecipe = async()=>{
            try{
                const response = await axios.get('/recipes');
                setRecipes(response.data);
            }catch(err){
                alert(err.message);
            }
        };

        const fetchSavedRecipe = async()=>{
            if(userID == 0){
                return ;
            }
            try{
                const response = await axios.get('/recipes/savedRecipes/ids/'+userID,{
                    headers:{authorization:cookies.access_token}
                });
                setSavedRecipes(response.data.savedRecipes);
            }catch(err){
                console.error(err);
            }
        };

        fetchRecipe();
        fetchSavedRecipe();
    },[]);

    const saveRecipe = async (recipeID)=>{
        try{
            const response = await axios.put('/recipes',
                {recipeID, userID},
                {headers:{authorization:cookies.access_token}}
            );
            setSavedRecipes(response.data.savedRecipes);
        }catch(err){
            console.error(err);
        }
    }

    const isRecipeSaved = (id) => savedRecipes.includes(id);

    return(
        <div className={css.container}>
            <h1>Recipes</h1>
            {recipes.length===0 && <NotFound content={'No recipe available at the moment create some recipe'}/>}
            {recipes?.map( recipe => (
                <SingleRecipe key={recipe._id} id={recipe._id} name={recipe.name} type={recipe.type} rating={recipe.rating} ingredient={recipe.ingredients} instructions={recipe.instructions} image={recipe.imageUrl} cookingTime={recipe.cookingTime} saveRecipe={saveRecipe} isRecipeSaved={isRecipeSaved} savedRecipe={cookies.access_token===""}/>)
            )}
            {!recipes && <NotFound content={"Loading..."}/>}
        </div>
    );
}; 