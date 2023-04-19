import { useState } from "react";
import axios from 'axios';
import {useCookies} from 'react-cookie';
import {useGetUserID} from '../../hooks/useGetUserID';
import {useNavigate} from 'react-router-dom';
import css from './createRecipe.module.css';

export const CreateRecipe = () =>{
    const userID = useGetUserID();
    const navigate = useNavigate();
    const [recipe,setRecipe] = useState({
        name:"",
        type:"Starters",
        rating:"",
        ingredients:[""],
        instructions:[""],
        imageUrl:"",
        cookingTime:0,
        userOwner:userID,
    });
    const [cookies,_] = useCookies(); 


    const handleChange = (event) =>{
        const {name, value } = event.target;
        setRecipe({...recipe, [name]:value});
    };

    const handleIngredientChange = (event, idx)=>{
        const {value} = event.target;
        const ingredients = recipe.ingredients;
        ingredients[idx] = value;
        setRecipe({...recipe, ingredients});
    };

    const handleInstructionChange = (event, idx)=>{
        const {value} = event.target;
        const instructions = recipe.instructions;
        instructions[idx] = value;
        setRecipe({...recipe, instructions});
    } 
    
    const addIngredient = () =>{
        setRecipe({...recipe, ingredients:[...recipe.ingredients,""]});
    };

    const addInstructions = () =>{
        setRecipe({...recipe, instructions:[...recipe.instructions,""]})
    }

    const onSubmit = async (event) =>{
        event.preventDefault();
        try{
            await axios.post('/recipes', recipe,{
                headers: {authorization: cookies.access_token}
            });
            alert('Recipe Created');
            navigate('/');
        }catch(err){
            console.error(err);
        }
    }

    return( 
        <div className={css.container}>
            <h2>Create Recipe</h2>
            <form className={css.createForm}>
                <label htmlFor="name">
                    Name
                    <input placeholder="Recipe Name" type="text" id="name" name="name" onChange={handleChange}/>
                </label>
                <label htmlFor="type">
                    Type
                    <select id="type" name="type" onChange={handleChange}>
                        <option value="Starters">Starters</option>
                        <option value="Main-Course">Main-Course</option>
                        <option value="Dessert">Dessert</option>
                    </select>
                </label>
                {/* Rating to be added */}
                <label className={css.addContainer} htmlFor="ingredients">
                    Ingredients (one box per ingredient)
                    {recipe.ingredients.map((ingredient,idx)=>(
                        <input 
                            key={idx}
                            placeholder="Ingredient Name" 
                            type="text" 
                            name="ingredients" 
                            value={ingredient}
                            onChange={(event)=> handleIngredientChange(event, idx)}
                        /> 
                    ))}
                <button onClick={addIngredient} type="button">Add Ingredient</button>
                </label>
                <label className={css.addContainer} htmlFor="instructions">
                    Instructions (one box per step)
                    {recipe.instructions.map((instruction,idx)=>(
                        <input 
                            key={idx} 
                            placeholder="Instruction"
                            type="text" 
                            name="instructions" 
                            value={instruction}
                            onChange={(event)=> handleInstructionChange(event, idx)}
                        /> 
                    ))}
                    <button onClick={addInstructions} type="button">Add Step</button>
                </label>
                <label htmlFor="imageUrl">
                    Image URL
                    <input placeholder="image url" type="url" pattern="https://.*" id="imageUrl" name="imageUrl" onChange={handleChange}/>
                </label>
                <label htmlFor="cookingTime">
                    Cooking Time (minutes)
                    <input placeholder="time to cook" type="number" id="cookingTime" name="cookingTime" onChange={handleChange}/>
                </label>
                <button onClick={onSubmit} type="submit">Create Recipe</button>
            </form>
        </div>
    );
}; 