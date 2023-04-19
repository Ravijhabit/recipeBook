const Footer = ()=>{
    return(
        <div style={{position:'realtive', bottom:'0',width:'100%', display:'flex',flexDirection:"column", padding:'30px 10px', alignItems:'center', justifyContent:'space-around', background:'grey', height:'100px'}}>
            <h1>Contact Me</h1>
            <div style={{display:'flex', width:'80%', justifyContent:'space-between',padding:'20px 10px 20px 10px'}}>
                <a style={{textDecoration:'none', color:"white"}} target="_blank" href="https://github.com/Ravijhabit">Github</a>
                <a style={{textDecoration:'none', color:"white"}} target="_blank" href="https://www.linkedin.com/in/jha-shankar-ravi">Linkedin</a>
                <a style={{textDecoration:'none', color:"white"}} href="mailto:ravi.jha3369@gmail.com">Mail</a>
            </div>
        </div>
    )
}
export default Footer;
