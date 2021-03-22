import React from "react";
import styled from 'styled-components';
// import logo from './logo.png'
import { FaBars } from "react-icons/fa";
import "./index.css";
import {Link} from "react-router-dom";




const Nav = () => {


return(
<Navbar>
<nav className="navbar" id="nav">
      <input type="checkbox" id="check"/>
      <label for="check" className="checkbtn">
       <FaBars />
      </label>
      <label className="logo"><h2>Lyrical</h2></label>
      <ul>
       <Link to="/"> <li><a className="active" href="#homee">Home</a></li> </Link>
       <li><a href="#songlist">List</a></li>
        <li><a href="#hotpicks">HotPicks</a></li>
        <li><a href="https://www.linkedin.com/in/tushar-nagar-web/">Contact</a></li>
      </ul>
</nav>

</Navbar>
);



}

const Navbar = styled.div`
margin:none;
padding:none;
background:#0B0B0C;

@media(max-width:850px){
  position: sticky;
  z-index: 10;
  top: 0; 
}

a{
  text-decoration:none;
}



.logo h2{
    display:inline;
    color:white;
    line-height:2.5;
}
.container{
  width:75%;
  margin:auto;
  display:flex;
  justify-content:space-around;
}



  nav{
    background: none;
    height: 60px;
    width: 90%;
    margin:auto;
    margin-top: -3px;

  }

  

  label.logo{
    padding: 0 100px;
  }
   


  nav ul{
    float: right;
    margin-right: 40px;
  }

  nav ul li{
    display: inline-block;
    line-height: 60px;
    margin: 0 5px;
  }


  nav ul li a{
    color: white;
    font-size: 16px;
    padding: 6px 15px;
    border-radius: 3px;
    text-transform: uppercase;
    text-decoration:none;
    font-weight:normal;
  }


  a.active,a:hover{
    background: #01e4c1;
    transition: .5s;
    color:black;
  }


  .checkbtn{
    font-size: 25px;
    color: white;
    float: right;
    line-height: 60px;
    margin-right: 30px;
    cursor: pointer;
    display: none;
  }

  
  #check{
    display: none;
  }

  

.logo img{
  width:40px;
  margin-top:10px;
  }
  

  @media (max-width: 858px){
  
    ul{
     position:absolute;
      width: 100%;
      height: 100vh;
      background: #0B0B0C;
      top: 60px;
      left: -100%;
      text-align: center;
      transition: all .5s;
      z-index:2;
    }
    nav ul li{
      display: block;
      margin: 50px 0;
      line-height: 30px;
    }
    nav ul li a{
      font-size: 20px;
    }
    a:hover,a.active{
      background: none;
      color: #01e4c1;
    }
    #check:checked ~ ul{
      left: 0;
    }
 
    .menu{
        display:none;
    }


    label.logo{
        padding: 0 20px;
      }

    .bars{
        display:block;
    }

    .container{
        justify-content:space-between;
    }

    .menu{
        position:fixed;
        z-index:3;
        display:block;
        top:0px;
    
    }

  
    .container ul{
        flex-direction:column;
        text-align:center;
        justify-content:center;
    }

    #check:checked + .menu{
        display:none;
    }
    
}

@media(max-width:1000px){
  .checkbtn{
    display: block;
  }
}

`;


export default Nav;