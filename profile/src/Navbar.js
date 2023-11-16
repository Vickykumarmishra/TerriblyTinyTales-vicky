import React from 'react'

export default function Navbar() {
  return (
    <div style={{boxShadow:'1px 1px 2px white, 0 0 25px white, 0 0 5px white',backgroundColor:'black',marginBottom:'0.2rem'}}>
      
      <nav class="navbar bg-body-black" style={{backgroundColor:"black"}}>
  <div class="container-fluid">
    
    <a class="navbar-brand" style={{color:"white"}}><img src="tiny tales logo.png" style={{height:'2.5rem', width:'2.5rem'}}></img>|<b style={{}}>STORIES</b></a>
    <form class="d-flex" role="search">
      
      <button class="btn btn-outline-success" type="submit" style={{color:'black',backgroundColor:'#fcba03', boxShadow: '4px 4px 4px #fcba03'}}><b>Courses</b></button>
    </form>
  </div>
</nav>
    </div>
  )
}
