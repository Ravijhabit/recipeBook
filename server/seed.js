import mongoose from 'mongoose';
import { RecipeModel } from './models/Recipes.js';
import * as dotenv from 'dotenv';
dotenv.config();
mongoose.connect(process.env.MONGO_URL);
const db= mongoose.connection;
db.on('error',console.error.bind(console,'Error Connection'));
db.once('open', function(){
    console.log("Connected Successfully");
});

const recipes=[];
const recipe={
    name:'CholaBhatura', 
    type:'Starters', 
    rating:'4.3', 
    ingredients:['chola','Maida','spices','salt','oil'], 
    instructions:['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet iure suscipit aliquid laudantium magni distinctio ','quia optio corrupti necessitatibus. Itaque sit in doloribus molestias provident necessitatibus quibusdam placeat, ','Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam consequuntur possimus tenetur! Alias, ratione eum facere ipsum optio sequi itaque nam, incidunt nostrum saepe maiores consequuntur aut. Est, quos?','Nam magnam ipsum illum dolor praesentium nostrum sequi corporis quibusdam, facere, facilis nulla! Autem, fugiat? ','Non excepturi vel corporis repellat consectetur in voluptate ipsa, enim nesciunt voluptatum debitis placeat possimus!','Atque eum et ipsam quo modi deleniti odio qui, laborum necessitatibus iure dolorem mollitia, similique vel earum tenetur itaque. Porro similique recusandae nostrum tempore eius, fugit aut impedit sed aspernatur.'],
    imageUrl:'https://static.vecteezy.com/system/resources/previews/015/933/288/large_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg', 
    cookingTime:'15',
    userID:''
};
async function createRecipes(){
    recipes.push(recipe);
    recipes.push(recipe);
    recipes.push(recipe);
    await RecipeModel.insertMany(recipes)
        .then(res=>{
            console.log(res);
        }).catch(e=>{
            console.log(e);
        });
    await mongoose.connection.close();
}
createRecipes();