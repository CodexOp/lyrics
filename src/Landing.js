import React, {useEffect} from "react";
import myimage from "./hero.png";
import "./landing.css";
import Nav from "./Navbar";
import AOS from 'aos';
import 'aos/dist/aos.css';





const Landing = () => {
useEffect(() => {
       AOS.init({duration:1500});
   }, [])

    return(
        <>
        <Nav/>
    
        <div className="landing" id="homee">
        
        <div className="landing_main">
            
        <div className="content">
        <div className="heading">
        <h2 className="heading1"  >Find The Lyric's</h2>
        <h2 className="heading2"  data-aos="fade-in">Of Any Songs</h2>    
        </div>
        <div className="description">
            
<p>While Hearing Song Did You Want To Understand The Lyrics, So Here We Put The Lyrics Of Best Songs, So Now Enjoy Songs While Reading Lyrics </p>
<p>We have a large, legal, every day growing universe of lyrics where stars of all genres and ages shine.</p>
        </div>
        <div className="button">
 <button className="primary_button1"><a href="#songlist">Show Songs </a></button>

        </div>
        </div>
        <div className="image_box" >
<div className="image_content" >
<img className="image" src={myimage} alt="my"></img>
</div>
        </div>

        </div>
        </div>
</>
    );

}


  

export default Landing;