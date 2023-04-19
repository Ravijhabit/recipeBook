import css from './singleRecipe.module.css';
import image from '../../assets/chola.png';
// const SingleRecipe = ({name, type, rating, ingredient, instructions, image, cookingTime })=>{
const SingleRecipe = ({
        name='CholaBhatura', 
        type='Starters', 
        rating='4.3', 
        ingredient=['chola','Maida','spices','salt','oil'], 
        instructions=['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet iure suscipit aliquid laudantium magni distinctio ','quia optio corrupti necessitatibus. Itaque sit in doloribus molestias provident necessitatibus quibusdam placeat, ','Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam consequuntur possimus tenetur! Alias, ratione eum facere ipsum optio sequi itaque nam, incidunt nostrum saepe maiores consequuntur aut. Est, quos?','Nam magnam ipsum illum dolor praesentium nostrum sequi corporis quibusdam, facere, facilis nulla! Autem, fugiat? ','Non excepturi vel corporis repellat consectetur in voluptate ipsa, enim nesciunt voluptatum debitis placeat possimus!','Atque eum et ipsam quo modi deleniti odio qui, laborum necessitatibus iure dolorem mollitia, similique vel earum tenetur itaque. Porro similique recusandae nostrum tempore eius, fugit aut impedit sed aspernatur.'],
        image='../../assets/chola.png', 
        cookingTime='15',
        saveRecipe,
        isRecipeSaved,
        id,
        savedRecipe
     })=>{
    return(
        <div className={css.container}>
            <section className={css.left}>
                <section className={css.recipeHeader}>
                    <small>{type.toUpperCase()}</small>
                    <h1>{name}</h1>
                    {/* starRating */}{rating}
                </section>
                <section className={css.instructionContainer}>
                    <h2>Method</h2>
                    <section className={css.instructions}>
                        {instructions.map((single,index)=>(
                            <section className={css.steps}>
                                <h4>Step {index+1}</h4>
                                <p key={index}>{single}</p>
                            </section>))}
                    </section>
                </section>
            </section>
            <section className={css.imageContainer}>
                <img className={css.foodImage} src={image} alt=""/>
            </section>
            <section className={css.right}>
                <h3>Cooking Time</h3>
                <section className={css.cookingTime}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p>{cookingTime}</p>
                </section>
                <h3>Ingredients</h3>
                {ingredient.map((every,index)=>(
                    <section className={css.cookingTime}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="orange" className="w-6 h-6">
                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                        </svg>

                        <h6 key={index}>{every}</h6>
                    </section>
                ))}
                {!savedRecipe && 
                    <button className={css.saveButton}
                        onClick={()=>{
                            saveRecipe(id)
                        }}
                        disabled={isRecipeSaved(id)}   
                    >
                    {isRecipeSaved(id)? 'Saved':'Save'}
                </button>}
                {/* Save button */}
                {/* Expected calories */}
                {/* {ingredient.map()} */}
            </section>
        </div>
    );
}
export default SingleRecipe;