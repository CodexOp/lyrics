import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Light =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Light It Up</h2>
            <div className="prediv">
            <pre className="pretag">
     {`Stand up like a soldier baby
Yeah, I know you're built like that
Gun it like a holster babe
Shouldn't see you weaken like that
Whenever the war is raging
Chasing our crazy dreams
Hoping that the bridge won't cave in
Tonight we'll let it all go free
Gimme the thing and let me rock in my Benz
Gimme the thing and let me rock in my Benz
Mash it up and step in my Benz
Gimme the thing and let me rock
Gimme the thing and let me rock in my Benz
Gimme the thing and let me rock in my Benz
Mash it up and step in my Benz
Gimme the thing and let me rock
Set it ablaze like a candle we lit, hotter
Yeah light it up, set it a
Light it up, light it up
Light it up
Fire like a soldier baby
No retreating when I treat that
Never make them hold ya baby
Hot like a fever when I take shots
Whenever when the war is raging
Chasing our crazy dreams
Hoping that the bridge won't cave in
Tonight we'll let it all go free
Gimme the thing and let me rock in my Benz
Gimme the thing and let me rock in my Benz
Mash it up and step in my Benz
Gimme the thing and let me rock
Gimme the thing and let me rock in my Benz
Gimme the thing and let me rock in my Benz
Mash it up and step in my Benz
Gimme the thing and let me rock
Set it ablaze like a candle we lit, hotter
Light it up, yeah light it up
Set it ablaze like a candle we lit, hotter
Yeah light it up, light it up
Light it up, light it up
(Light it up, mash it up)`}
         </pre>
         </div>
        </Astranauts>
        </>
    );
}

const Astranauts = styled.div`
widtH:80%;
margin:auto;

.astranaut_heading{
    text-align:center;
    margin:30px 0 20px 0;
}


pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    text-align: justify;
    justify-content:center;
    display:flex;
    font-size:18px;
  
  }

.prediv{

}

`

export default Light;