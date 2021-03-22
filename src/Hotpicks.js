import React from 'react';
import styled from 'styled-components';
import one from "./images/1.jfif"
import two from "./images/2.jfif"
import three from "./images/3.jfif"
import four from "./images/4.jfif"
import five from "./images/5.jfif"
import six from "./images/6.jfif"
import seven from "./images/7.jfif"
import eight from "./images/8.jfif"
import { Link } from 'react-router-dom';

const Hotpicks =  () => {
    return(
        <Hot>
            <div  id="hotpicks" className="hotpicks_heading">
<h2>HotPicks</h2>
            </div>
            <div className="container">

                <div className="container1">
                <Link to="/letmelove"> 
                <div className="box">
                    <div className="box_image">
<img src={eight} alt="asd" />
                    </div>
                    <div className = "content_hotpicks">
<p className="song_title">Let Me Love</p>
<p className="song_artist">DJ Snake</p>
                    </div>
                    </div>
                    </Link>

                    <Link to="/Whoofty"> 
                    <div className="box">
                    <div className="box_image">
<img src={two} alt="asd" />
                    </div>
                    <div className = "content_hotpicks">
<p className="song_title">Whoofty</p>
<p className="song_artist">CJ</p>
                    </div>
                    </div>
                    </Link>

                    <Link to="/Nights"> 
                    <div className="box">
                    <div className="box_image">
<img src={three} alt="asd" />
                    </div>
                    <div className = "content_hotpicks">
<p className="song_title">The Nights</p>
<p className="song_artist">Avicii</p>
                    </div>
                    </div>
                    </Link>


                    <Link to="/Light"> 
                    <div className="box">
                    <div className="box_image">
<img src={four} alt="asd" />
                    </div>
                    <div className = "content_hotpicks">
<p className="song_title">Light It Up</p>
<p className="song_artist">Major Lazer</p>
                    </div>
                    </div>

</Link>
                    
                </div>

                <div className="container1">



                <Link to="/Ilomilo"> 
                <div className="box">
                    <div className="box_image">
<img src={five} alt="asd" />
                    </div>
                    <div className = "content_hotpicks">
<p className="song_title">Ilomilo</p>
<p className="song_artist">Billie Elish</p>
                    </div>
                    </div>
                    </Link>



                    <Link to="/Badboy"> 
                    <div className="box">
                    <div className="box_image">
<img src={six} alt="asd" />
                    </div>
                    <div className = "content_hotpicks">
<p className="song_title">Bad Boy</p>
<p className="song_artist">Raaban</p>
                    </div>
                    </div>
                    </Link>



                    <Link to="/Cradles"> 
                    <div className="box">
                    <div className="box_image">
<img src={seven} alt="asd" />
                    </div>
                    <div className = "content_hotpicks">
<p className="song_title">Cradles</p>
<p className="song_artist">Sub Urban</p>
                    </div>
                    </div>


                    </Link>



                    <Link to="/astranaut"> 
                    <div className="box">
                    <div className="box_image">
<img src={one} alt="asd" />
                    </div>
                    <div className = "content_hotpicks">
<p className="song_title">Astranaut In The Ocean</p>
<p className="song_artist">Masked Wolf</p>
                    </div>
                    </div>
</Link>

                    
                </div>
            </div>
        </Hot>
    );
}

const Hot = styled.div`
widtH:80%;
margin:auto;


a{
    text-decoration: none;
    color:black;
}

.hotpicks_heading{
text-align:center;
margin:20px 0;
}

.container1{
   
    justify-content:space-around;
}


img{
    width:100%;
}

.content_hotpicks{
    margin:0 !important;
}


.song_artist{
    text-align:center;
}

.song_title{
    text-align:center;
    font-weight:600;
}

.box{
    width:25%;
    float: left;
    padding: 10px;

}


.box:hover{
transform:scale(1.05);
transition:all 0.4s ease;
}


.box:hover .play{display:block}
.play{
  position : absolute;
    display:none;
    top:20%; 
    width:40px;
    margin:0 auto; left:0px;
    right:0px;
    z-index:100
} 


@media(max-width:800px){
    .box{
        width:50%;
        float: left;
        width: 50%;
        padding: 10px;

    }

    .container1{
        flex: 50%
    }
}

`

export default Hotpicks;