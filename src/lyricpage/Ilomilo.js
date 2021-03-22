import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Ilomilo =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Ilomilo Lyrics</h2>
            <div className="prediv">
            <pre className="pretag">
     {`Told you not to worry
But maybe that's a lie
Honey, what's your hurry?
Won't you stay inside?
Remember not to get too close to stars
They're never gonna give you love like ours
Where did you go?
I should know, but it's cold
And I don't wanna be lonely
So show me the way home
I can't lose another life
Hurry, I'm worried
The world's a little blurry
Or maybe it's my eyes
The friends I've had to bury
They keep me up at night
Said I couldn't love someone
'Cause I might break
If you're gonna die, not by mistake
So, where did you go?
I should know, but it's cold
And I don't wanna be lonely
So tell me you'll come home
Even if it's just a lie
I tried not to upset you
Let you, rescue, me the day I met you
I just wanted to protect you
But now I'll never get to
Hurry, I'm worried
Where did you go?
I should know, but it's cold
And I don't wanna be lonely
Was hoping you'd come home
I don't care if it's a lie`}
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

export default Ilomilo;