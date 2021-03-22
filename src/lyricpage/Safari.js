import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Safari =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Superhero Lyrics</h2>
            <div className="prediv">
            <pre className="pretag">
     {`I'm sure I've seen you in my dreams
I'm feeling like ain't the first time we ever meet
You make the time fly slow, slow
Just like slow rivers flow, slow
I see the fire in your eyes
It makes me feel, it takes me high
So bring it on the dance floor
Baby, you better start this right
I'm losing it, I can't control
This must be love, love
Come on, boy, move that body
'Cause tonight I'm naughty, naughty
Dance with me like it's my party
We go wild, we're in safari
Come on, boy, move that body
'Cause tonight I'm naughty, naughty
Dance with me like it's my party
We go wild, we're in safari
We go wild, we're in safari
You better keep your eyes on me
I know you're not the only one who's watching me
When all the night stars glow, glow
We dance among them slow, slow
I see the fire in your eyes
It makes me feel, it takes me high
So bring it on the dance floor
Baby, you better start this right
I'm losing it, I can't control
This must be love, love
Come on, boy, move that body
'Cause tonight I'm naughty, naughty
Dance with me like it's my party
We go wild, we're in safari
Come on, boy, move that body
'Cause tonight I'm naughty, naughty
Dance with me like it's my party
We go wild, we're in safari
Come on, boy, move that body
'Cause tonight I'm naughty, naughty
Dance with me like it's my party
We go wild, we're in safari
Come on, boy, move that body
Come on, boy, move that body
We go wild, we're in safari
We go wild, we're in safari`}
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

export default Safari;