import React from 'react'
import data from './data.json'
export default function Profile() {
  return (
    <div >
      

  <div >
    <img src="tiny top.jpg" style={{height:"18rem",width:"100%"}}></img>
    </div>      
     
     <div class="container text-center" style={{marginBottom:"3rem"}}>
  <div class="row">

    <div class="col">
    <img src="Mr anuj gosalia.jpg" style={{borderRadius:"50%",height:"10rem",marginTop:"-3rem"}}></img>
    <h4 style={{marginTop:"1rem", marginLeft:"2rem",color:'white'}}><b>{data.name}</b></h4>
    <p  style={{color:'white'}}>{data.title}</p> 
    <p style={{color:"white"}}><a href="{data.website}">{data.website}</a></p>

    <img src="star icon.png" style={{height:"1rem",borderRadius:"100%"}}></img> <i style={{marginRight:"0.5rem",color:"white"}}>{data.star} </i><img src="like icon.jpeg" style={{height:"1rem",borderRadius:"100%"}}></img> <i style={{marginRight:"0.5rem",color:"white"}}>{data.like}</i> <img src="view icon.jpg" style={{height:"1rem",borderRadius:"100%"}}></img><i style={{marginRight:"0.5rem",color:"white"}}>{data.views} </i><img src="heart icon.png" style={{height:"1rem"}}></img><i style={{color:"white"}}>{data.hearts}</i>
    
    <br></br>
    
    </div>

    <div class="col">
    
    
 <div style={{float:"left",marginLeft:"3rem",marginTop:"1rem" ,marginBottom:"1rem",widtH:"50%"}}> <button class="btn btn-primary" style={{backgroundColor:"white",color:"grey",border:'0.1rem solid grey'}}><b>{data.followers}</b></button>
  <p style={{color:"white"}}>followers</p></div>

  <div style={{float:"left",marginLeft:'3rem',marginTop:"1rem",marginBottom:'1rem'}}><button class="btn btn-primary" style={{backgroundColor:"white",color:"grey",border:'0.1rem solid grey'}}><b>{data.following}</b></button> 
    <p style={{color:"white"}}>following</p></div>
   
    </div>
   
  </div>

 

</div>
 
  <p ><h3 style={{color:'skyblue',float:"left",marginLeft:"1rem",marginBottom:"2rem" ,borderTop:"0.1rem solid white",borderRight:"0.1rem solid white",padding:"0.3rem"}}>{data.posts} Posts </h3></p><br></br><br></br>
   <p style={{borderBottom:"0.1rem solid white",marginLeft:"11.9%",marginRight:'5%'}}></p>
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
  <img src={image} class="card-img-top" alt="..." style={{height:"25rem"}}/>
  <div class="card-body" >
    <h5 class="card-title"><b>{title}</b>  <img src="like icon.jpeg" style={{height:"1rem",float:"right",borderRadius:"100%"}}></img></h5>
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
