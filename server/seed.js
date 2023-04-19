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
recipes.push({
    name:'CholaBhatura', 
    type:'Starters', 
    rating:'4.3', 
    ingredients:['chola','Maida','spices','salt','oil'], 
    instructions:['First rinse 1 cup white chickpeas a couple of them in enough water overnight or for 7 to 8 hours.', 'Next day they will double in size.', 'Then drain the water.', 'In a 3 litre pressure cooker add the chickpeas pressure cooker but you can also use a pot or pan.', 'The chickpeas will take a lesser time to cook in the pressure cooker than cooking them in a pot.', 'You can also add a pinch or two of baking soda whi…ooking them. Addition of baking soda is optional.', 'Pressure cook chickpeas for 10 to 12 whistles minutes or till they are tender and cooked well.', 'Once the pressure settles down on its own then are soft and have a melt in the mouth texture.', 'If cooking them in a pan then it can take about chickpeas will depend upon their quality and age.', 'Once done then drain all the water and keep the cooked chickpeas aside.', 'chop 1 medium-sized onion, 2 medium-sized toma…o 5 medium-sized garlic cloves and 1 inch ginger.', 'Add them to a blender jar.', 'Make a fine paste in a grinder or blender. No no will help in making the paste.keep the jar aside.', 'Measure and keep all the ingredients ready for making the gravy.','Heat 2 to 3 tablespoons oil in a pan or kadai/wok.', 'Add the following whole garam masala (spices):', 'On low heat fry the whole spices till they are fragrant but don\'t burn them.', 'Next add the ground onion-tomato paste.', 'Mix well.', 'Keep stirring often. Sauté for 8 to 10 minutes…. The paste will also thicken and become glossy.', 'Stir while sautéing so that the paste does not stick to the pan.', 'Then add all the dry spice powders listed below:', 'Mix the spice powders very well and sauté for a minute or two.', 'Then add the cooked chickpeas.', 'Mix well.', 'Pour 1 to 1.5 cups water or add as required. A… much water as then the flavors will get diluted.', 'Add salt as required and stir again.', 'Simmer the gravy on a low to medium flame for 10 - 15 minutes or till the gravy thickens.', 'Don\'t cover the pan. Stir occasionally. Mash s…k of a spoon. This helps in thickening the gravy.', 'Add 1 slit green chili and 1 teaspoon garam masala powder or chole masala powder.', 'Stir and simmer the gravy for a minute or two.…a dry consistency then simmer for some more time.', 'Check the seasoning and add more salt or spice…with some slit green chilies and ginger julienne.', 'Serve chickpea curry with onion slices, lemon …atha or plain paratha or kulcha or tandoori roti.'],
    imageUrl:'https://static.vecteezy.com/system/resources/previews/015/933/288/large_2x/chole-bhature-is-a-north-indian-food-dish-a-combination-of-chana-masala-and-bhatura-or-puri-free-photo.jpg', 
    cookingTime:'15',
    userID:'643ff3b3b2a3e50cb15e1fed'
});
recipes.push({
    name:'PavBhaji',
    type:"Starters",
    rating:'4.3',
    ingredients:['Bread','Spices','Peas','Potatos','Lemon','Onions'],
    instructions:['Heat oil and melt 2 spoons of butter in a pan and add Onions, Capsicum, and Peas and cook for 2 minutes. That is, cook until the onions become soft.','Now add Ginger Garlic Paste and fry for a minute, add Tomatoes and cook again, until soft.','Now add Salt, Kasuri Methi, Mirchi Powder, and Pav Bhaji Masala and add the Potatoes fried and cooked. Mix well.','Take a Masher and smash all the cooked vegetables into a soft paste. The more you mash the vegetables, the creamier the Bhaji is.','Now add 300 ml water and cook on high flame until the vegetables come together. If the Bhaji is too thick, add some more water.','Now add Green Coriander and ¼ cup Butter and keep stirring until the whole mixture thickens and then remove from fire.','Melt 2 tsps of Butter, cut a Pav bread into half and toast until the bread soaks up the Butter and becomes Crispy.','Serve hot with Bhaji, fresh Lime slices and Onions.'],
    imageUrl:'https://static.toiimg.com/thumb/52416693.cms?imgsize=789478&width=800&height=800',
    cookingTime:'20',
    userID:'643ff3b3b2a3e50cb15e1fed'
});
recipes.push({
    name:'Masala Dosa',
    type:"Starters",
    rating:'4.3',
    ingredients:['Urad Dal', 'Rice', 'Potato','Spices','Onion'],
    instructions:['The Batter comes out nice if it is ground in a sto…one grinder ferments well and gives a rich taste.', 'For regular Dosa Batter, it is better to use Ratio…y, and the Rice Flakes give softness to the Dosa.', 'The longer the Batter is ground, the better it ferments. And the Dosa tastes better.', 'Those who use a mixie should add the Gram and Rice little by little and grind to a smooth paste.', 'The Batter needs to be fermented for at least 10 hours in summer and 12-16 hours in winters.', 'After the Potatoes are added to the Masala, sprink…ry stays soft even after cooling. Or it dries up.', 'The thinly chopped Green Chillies we add to the Ma…e flavour, better than adding earlier and frying.', 'If you want a crisp Dosa, use cast iron or iron pa…o not get really crispy Dosas on a non-stick pan.', 'While the Dosa is getting roasted, do not lift it …parated from the surface and does not roast well.', 'Masala Dosa should be roasted by adding Oil to the…ee but reduce it if you do not want too much Oil.'],
    imageUrl:'https://www.vegrecipesofindia.com/wp-content/uploads/2021/07/dosa-recipe-3.jpg',
    cookingTime:'30',
    userID:'643ff3b3b2a3e50cb15e1fed'
});
recipes.push({
    name:'Paneer Pasanda',
    type:"Main-Course",
    rating:'4.4',
    ingredients:['Paneer','cheese','green chilli','corander and mint leaves','cashews','Onions'],
    instructions:[' On a low to medium heat, stir and simmer this mixture till the tomatoes soften.','When the tomatoes soften, switch off the heat. Some stock will be left in the pan; we will use it while blending or grinding the tomatoes.Let this mixture cool enough to handle before you blend or grind.','Meanwhile, heat 2 tablespoons oil in a pan and add 1 heaping cup of chopped onions.',' Stir and sauté the onions on a low to medium-low heat. Add a pinch of salt for the onions to brown faster.','Once the onions become light golden, switch off the heat. Let the onions cool.','Add the cooled fried onions to a high-speed blender or grinder jar. Add 4 to 5 tablespoons water.   ','Blend or grind the sautéed onions to a fine, smooth paste and set aside.','In the same blender or grinder, add the cooked and cooled tomato-cashew-spice mixture along with the stock from the pan.','There is no need to add any extra water while blending or grinding.','Grind to a smooth and fine consistency. There should be no cashew chunks or small bit and pieces in the paste. Set this paste aside.','In a bowl or plate, take the ingredients listed below:2 to 2.5 tablespoons finely crumbled or grated paneer (you can substitute grated processed cheese or cheddar cheese instead of paneer),1 tablespoon raisins, chopped 6 to 8 cashews, finely chopped approximately 2 tablespoons), 1 or 2 green chilies, chopped (about 1 teaspoon),1 tablespoon chopped coriander leaves, ½ tablespoon chopped mint leaves','Now add the following ground spices: ¼ teaspoon red chili powder or cayenne pepper, ½ teaspoon cumin powder, ¼ teaspoon salt (or season to taste)','Mix everything evenly and keep aside. Check the taste and add more of the spices and salt if required.','I used a round of homemade paneer for the pasanda and sliced it into triangles, as you would cut a cake. You can also slice them in squares or rectangles.','Separate slices carefully. Add any crumbled bits of paneer that fall off to the stuffing mix.','Now hamburger bun slice each triangle into two halves, working gently to keep the paneer from breaking.','Repeat with all pieces of the paneer.',' Now place some of the stuffing on the paneer triangle and cover it with its top triangular slice gently. Don’t press. One paneer sandwich is ready.','over it with its top triangular slice gently. Don\'t press. One paneer sandwich is ready.Dip the paneer sandwich slice in the batter.'],
    imageUrl:'https://www.whiskaffair.com/wp-content/uploads/2016/09/Paneer-Pasanda-5.jpg',
    cookingTime:'40',
    userID:'643ff3b3b2a3e50cb15e1fed'
})
async function createRecipes(){
    await RecipeModel.insertMany(recipes)
        .then(res=>{
            console.log(res);
        }).catch(e=>{
            console.log(e);
        });
    await mongoose.connection.close();
}
createRecipes();