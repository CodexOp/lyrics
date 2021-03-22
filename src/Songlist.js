import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Songlist = () =>{
    return( 
        <>
        <Container id="songlist">
<div className="songs_heading">
<h2>Some Top Picks</h2>
</div>

<div className="songs_container">


<div className="song2">
<div className="column11">S.NO</div>
<div className="column21">Title</div>
<div className="column31">Artist</div>
<div className="column41"> Album</div>
<div className="column51"> Length</div>
</div>

<Link to="./astranaut">
<div className="song1">
<div className="column1">1</div>
<div className="column2">Astranaut In The Ocean</div>
<div className="column3">Masked Wolf</div>
<div className="column4"> Astranaut</div>
<div className="column5"> 4:31</div>
</div>
</Link>



<Link to="./Radioactive">
<div className="song1">
<div className="column1">2</div>
<div className="column2">RadioActive</div>
<div className="column3">Imagine Dragons</div>
<div className="column4"> Night Vision</div>
<div className="column5"> 3:07</div>
</div>
</Link>



<Link to="./Playdate">
<div className="song1">
<div className="column1">3</div>
<div className="column2">Play Date</div>
<div className="column3">Melanie</div>
<div className="column4"> Cry Baby</div>
<div className="column5">3:00</div>
</div>
</Link>



<Link to="./Demons">
<div className="song1">
<div className="column1">4</div>
<div className="column2">Demons</div>
<div className="column3">Alec Benjamin</div>
<div className="column4"> Two Windows</div>
<div className="column5"> 2:43</div>
</div>
</Link>


<Link to="./Roses">
<div className="song1">
<div className="column1">5</div>
<div className="column2">Roses</div>
<div className="column3">Saint</div>
<div className="column4"> Roses</div>
<div className="column5"> 2:57</div>
</div>
</Link>



<Link to="./Superhero">
<div className="song1">
<div className="column1">6</div>
<div className="column2">Superhero</div>
<div className="column3">Unknown Brain</div>
<div className="column4"> Superhero</div>
<div className="column5"> 2:59</div>
</div>
</Link>




<Link to="./Safari">
<div className="song1">
<div className="column1">7</div>
<div className="column2">Safari</div>
<div className="column3">Sarena</div>
<div className="column4"> Safari</div>
<div className="column5"> 3:07</div>
</div>
</Link>


<Link to="./Grateful">
<div className="song1">
<div className="column1">8</div>
<div className="column2">Grateful</div>
<div className="column3">Neffex</div>
<div className="column4"> Best Of Me</div>
<div className="column5"> 3:02</div>
</div>
</Link>


<Link to="./Falling">
<div className="song1">
<div className="column1">9</div>
<div className="column2">Falling</div>
<div className="column3">Trevor Daniel</div>
<div className="column4"> Falling</div>
<div className="column5"> 2:39</div>
</div>
</Link>

<Link to="./Shadow">
<div className="song1">
<div className="column1">10</div>
<div className="column2">Shadow</div>
<div className="column3">Triplo Max</div>
<div className="column4"> Shadow</div>
<div className="column5"> 2:57</div>
</div>
</Link>
</div>
</Container>
</>
    );


}

const Container = styled.div`
width:80%;
padding:0;
margin:auto;

.songs_heading{
    text-align:center;
    margin-bottom:20px;
}

.song1, .song2{
    display:flex;
    justify-content:space-around;

}

a{
    text-decoration:none;
    color:black;
}

.song1{
    padding:5px 0;
}

.song1:hover{
    background:rgba(0,0,0,0.8);
    color:white;
    transition:all 0.3s ease;
}

  

.column2, .column3, .column4{
    width:20%;
  }


  .column1, .column11{
      5%;
  }


  .column5{
      width:5%;
  }


  .column51{
    width:5%;
}

  
.column21, .column31, .column41{
    width:20%;
  }


.song2{
    background:rgba(0,0,0,0.8);
    padding:5px 0;
    color:white;
}

.song1{
    border-bottom:1px solid grey;
}

@media(max-width:500px){
    .column4, .column41, .column5, .column51{
        display:none;
    }

    .column3,.column2 {
        width:45%;
    }

    .column21, .column31{
        width:40%;
    }

    .column1 {
        width:10%;
    }

    .column11{
        display:none;
    }
}


`

export default Songlist;