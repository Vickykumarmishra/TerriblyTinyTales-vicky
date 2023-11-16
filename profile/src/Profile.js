import React from 'react'
import data from './data.json'
import { motion } from 'framer-motion'
export default function Profile() {
  return (
    <div >
      

  <div >
    <img src="tiny top.jpg" style={{height:"18rem",width:"100%"}}></img>
    </div>      
     
     <div class="container text-center" style={{marginBottom:"3rem"}}>
  <div class="row">

    <div class="col">
    <motion.img src="Mr anuj gosalia.jpg" whileHover={{scale:1.1}} style={{borderRadius:"50%",height:"10rem",marginTop:"-3rem",boxShadow: '4px 4px 4px skyblue'}}></motion.img>
    <h4 style={{marginTop:"1rem", marginLeft:"2rem",color:'white',textShadow: '4px 4px 4px blue'}}><b>{data.name}</b></h4>
    <p  style={{color:'white'}}>{data.title}</p> 
    <p style={{color:"white"}}><a href="{data.website}">{data.website}</a></p>

    <motion.img whileHover={{scale:1.5}} src="star icon.png" style={{height:"1rem",borderRadius:"100%"}}></motion.img> <i style={{marginRight:"0.5rem",color:"white"}}>{data.star} </i><motion.img src="like icon.jpeg" whileHover={{scale:1.5}} style={{height:"1rem",borderRadius:"100%"}}></motion.img> <i style={{marginRight:"0.5rem",color:"white"}}>{data.like}</i> <motion.img src="view icon.jpg" whileHover={{scale:1.5}} style={{height:"1rem",borderRadius:"100%"}}></motion.img><i style={{marginRight:"0.5rem",color:"white"}}>{data.views} </i><motion.img src="heart icon.png" whileHover={{scale:1.5}} style={{height:"1rem"}}></motion.img><i style={{color:"white"}}>{data.hearts}</i>
    
    <br></br>
    
    </div>

    <div class="col">
    
    
 <div style={{float:"left",marginLeft:"3rem",marginTop:"1rem" ,marginBottom:"1rem",widtH:"50%"}}> <motion.button whileHover={{scale:1.1}} class="btn btn-primary" style={{backgroundColor:"white",color:"grey",border:'0.1rem solid grey',boxShadow: '4px 4px 4px white'}}><b>{data.followers}</b></motion.button>
  <p style={{color:"white"}}>followers</p></div>

  <div style={{float:"left",marginLeft:'3rem',marginTop:"1rem",marginBottom:'1rem'}}><motion.button  whileHover={{scale:1.1}} class="btn btn-primary" style={{backgroundColor:"white",color:"grey",border:'0.1rem solid grey',boxShadow: '4px 4px 4px white'}}><b>{data.following}</b></motion.button> 
    <p style={{color:"white"}}>following</p></div>
   
    </div>
   
  </div>

 

</div>
 
  <p ><h3 style={{color:'skyblue',float:"left", width:"auto" ,borderTop:"0.1rem solid white",borderRight:"0.1rem solid white",padding:"0.4rem",textShadow: '4px 4px 4px blue'}}>{data.posts} Posts </h3><h3 style={{borderBottom:"0.1rem solid white",padding:"0.4rem", color:"black",float:"left",width:"40%"}}>hi</h3></p><br></br><br></br>
   {/* <p style={{borderBottom:"0.1rem solid white",marginLeft:"auto",marginRight:'5%'}}></p> */}
        {
            data.latest_posts.map((soln)=>{
              //destructuring the array
             const {title,text,image,view,date}=soln
               
             return (
<>
                {/* <center><div style={{float:"left", margin:'2.5rem',borderBottom:"0.1rem light grey",boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white',backgroundColor:'black'}}>
                    <center><h4 style={{color:"blue"}}><b>{title}</b> <img src="like icon.jpeg" style={{height:"1rem",float:"right",borderRadius:"100%"}}></img> </h4></center>
                    <p style={{color:"white"}}>{text}</p>
                   
                </div> </center> */}
                <center><div class="card" style={{margin:'2.5rem'}} >
  <img src={image} class="card-img-top" alt="..."  />
  <div class="card-body" >
    <h5 class="card-title"><b>{title}</b>  <motion.img src="like icon.jpeg" whileHover={{scale:1.5}} style={{height:"1rem",float:"right",borderRadius:"100%"}}></motion.img></h5>
    <p class="card-text">{text}</p>
    <center><p style={{ color:'grey'}}><i style={{color:'skyblue',float:"left",marginLeft:"0.5rem"}}>thought</i><i style={{float:"left",marginLeft:'0.5rem'}}> by vicky mishra .</i> <i style={{float:"left",marginLeft:"0.5rem"}}>{date}. {view} views</i></p></center>
    
  </div>
  
</div></center>
                 </>
             )

            })

    
        }
    
    </div>
  )
}
