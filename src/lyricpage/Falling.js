import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Falling =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Falling Lyrics</h2>
            <div className="prediv">
            <pre className="pretag">
     {`My last made me feel like I would never try again
But when I saw you, I felt something I never felt
Come closer, I'll give you all my love
If you treat me right, baby, I'll give you everything
My last made me feel like I would never try again
But when I saw you, I felt something I never felt
Come closer, I'll give you all my love
If you treat me right, baby, I'll give you everything
Talk to me, I need to hear you need me like I need ya
Fall for me, I wanna know you feel how I feel for you, love
Before you, baby, I was numb, drowned out pain by pouring up
Speeding fast on the run, never want to get caught up
Now you the one that I'm calling
Swore that I'd never fall again, don't think I'm just talking
I think I might go all in, no exceptions, girl, I need ya
Think I'm out of my mind, 'cause I can't get enough
Only one that I give my time, 'cause I got eyes for ya
Might make an exception for ya, 'cause I been feeling ya
Think I might be out of my mind, I think that you're the one
My last made me feel like I would never try again
But when I saw you, I felt something I never felt
Come closer, I'll give you all my love
If you treat me right, baby, I'll give you everything
My last made me feel like I would never try again
But when I saw you, I felt something I never felt
Come closer, I'll give you all my love
If you treat me right, baby, I'll give you everything
I'll never give my all again
'Cause I'm sick of falling down
When I open up and give my trust
They find a way to break it down
Tear me up inside, and you break me down`}
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

export default Falling;