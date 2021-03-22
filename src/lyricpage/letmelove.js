import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Letmelove =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Let Me Love You Lyrics</h2>
            <div className="prediv">
            <pre className="pretag">
     {`I used to believe
We were burning on the edge of something beautiful
Something beautiful
Selling a dream
Smoke and mirrors keep us waiting on a miracle
On a miracle
Say, go through the darkest of days
Heaven's a heartbreak away
Never let you go, never let me down
Oh, it's been a hell of a ride
Driving the edge of a knife
Never let you go, never let me down
Don't you give up, nah-nah-nah
I won't give up, nah-nah-nah
Let me love you
Let me love you
Don't you give up, nah-nah-nah
I won't give up, nah-nah-nah
Let me love you
Let me love you
Oh, baby, baby
Don't fall asleep
At the wheel, we've got a million miles ahead of us
Miles ahead of us
All that we need
Is a rude awakening to know we're good enough
Know we're good enough
Say, go through the darkest of days
Heaven's a heartbreak away
Never let you go, never let me down
Oh, it's been a hell of a ride
Driving the edge of a knife
Never let you go, never let me down
Don't you give up, nah-nah-nah
I won't give up, nah-nah-nah
Let me love you
Let me love you
Don't you give up, nah-nah-nah
I won't give up, nah-nah-nah
Let me love you
Let me love you
Oh, baby, baby
Never let you go, never let you down, girl
Never let you go, never let you down, girl
Never let you go (whoa)
Girl, never let you go (wooh)
Never let you go, never let you down, girl
Never let you go... (Oh, nah-nah-nah-nah)
Never let you go
Yeah, yeah (girl, never let you go)
Don't you give up, nah-nah-nah
I won't give up, nah-nah-nah
Let me love you
Let me love you
Don't you give up, nah-nah-nah
I won't give up, nah-nah-nah
Let me love you
Let me love you`}
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

export default Letmelove;