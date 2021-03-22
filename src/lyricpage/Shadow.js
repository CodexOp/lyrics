import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Shadow =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Shadow Lyrics</h2>
            <div className="prediv">
            <pre className="pretag">
     {`I feel so good, why you so mad?
And I'm so happy, and you hate that
But I love love, and I love life
And I love tripping in the desert with my best friends
Seeing spaceships in the sky
And I love singing "fuck" in all my songs
'Cause the only people who got time to get offended
Are the ones who've probably never gotten off
So get your shadow out of my sunshine
Out of my blue skies, out of my good times
So get your darkness out of my champagne
I'll be dancing in the rain
I'ma love you even though you hate me
I'ma love you even though you hate
We all got shit, who's to throw stones?
Live and let live, or just stay the fuck home (Home, oh)
So if you love love (If you love love)
If you love life (If you love life)
Then we can share this blue Dodge van and end…`}
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

export default Shadow;