import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Playdate =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Playdate Lyrics</h2>
            <div className="prediv">
            <pre className="pretag">
     {`You call me on the telephone, you feel so far away
You tell me to come over, there's some games you want to play
I'm walking to your house, nobody's home
Just me and you and you and me alone
We're just playing hide and seek
It's getting hard to breathe under the sheets with you
I don't want to play no games
I'm tired of always chasing, chasing after you
I don't give a fuck about you anyways
Whoever said I gave a shit 'bout you?
You never share your toys or communicate
I guess I'm just a play date to you
Wake up in your bedroom and there's nothing left to say
When I try to talk you're always playing board games
I wish I had monopoly over your mind
I wish I didn't care all the time
We're just playing hide and seek
It's getting hard to breathe under the sheets with you
I don't want to play no games
I'm tired of always chasing, chasing after you
I don't give a fuck about you anyways
Whoever said I gave a shit 'bout you?
You never share your toys or communicate
I guess I'm just a play date to you
Ring around the rosy
I never know, I never know what you need
Ring around the rosy, I want to give you, want to give you
What you need
I don't give a fuck about you anyways
Whoever said I gave a shit 'bout you?
You never share your toys or communicate
I guess I'm just a play date to you
You know I give a fuck about you everyday
Guess it's time that I tell you the truth
If I share my toys, will you let me stay?
Don't want to leave this play date with you`}
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

export default Playdate;