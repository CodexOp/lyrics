import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Superhero =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Superhero Lyrics</h2>
            <div className="prediv">
            <pre className="pretag">
     {`Like you, be strong
To hold the power of the sun
To dream, believe
In strength now I'm the only one, only one
I was an ordinary boy
Until I broke the rules, my life destroyed
Life destroyed
Until I woke awake, scream my mind I shout the ground shakes
How much can I take? My mind will break
Will it break? Can I take?
Can I be your superhero?
Superhero
Can I be your superhero?
Superhero
Superhero
Superhero
Fly up, away
It's the first time of today, today
To dream, believe
You are the strength, you're all I need, need, need
Ooh, gonna give it a shot, only one of me
To shoot you off from the enemy
Your superhero
Your superhero
Can I be your superhero?
Superhero
Superhero
Superhero
Can I be your superhero?`}
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

export default Superhero;