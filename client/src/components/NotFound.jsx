const NotFound = ({content="Page Not Found"}) =>{
    return(
        <div style={{position:'relative', height:'60vh', display:'flex', alignItems:'center'}}>
            <h1>{content}</h1>
        </div>
    )
}

export default NotFound;