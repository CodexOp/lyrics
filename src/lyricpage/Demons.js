import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Demons =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Demons Lyrics</h2>
            <div className="prediv">
            <pre className="pretag">
     {`When the days are cold and the cards all fold
And the saints we see are all made of gold
When your dreams all fail and the ones we hail
Are the worst of all and the blood's run stale
I want to hide the truth, I want to shelter you
But with the beast inside, there's nowhere we can hide
No matter what we breed, we still are made of greed
This is my kingdom come, this is my kingdom come
When you feel my heat, look into my eyes
It's where my demons hide, it's where my demons hide
Don't get too close, it's dark inside
It's where my demons hide, it's where my demons hide
At the curtain's call is the last of all
When the lights fade out, all the sinners crawl
So they dug your grave and the masquerade
Will come callin' out at the mess you've made
Don't want to let you down, but I am hell bound
Though this is all for you, don't want to hide the truth
No matter what we breed, we still are made of greed
This is my kingdom come, this is my kingdom come
When you feel my heat, look into my eyes
It's where my demons hide, it's where my demons hide
Don't get too close, it's dark inside
It's where my demons hide, it's where my demons hide
They say it's what you make, I say it's up to fate
It's woven in my soul, I need to let you go
Your eyes, they shine so bright, I want to save that light
I can't escape this now, unless you show me how
When you feel my heat, look into my eyes
It's where my demons hide, it's where my demons hide
Don't get too close, it's dark inside
It's where my demons hide, it's where my demons hide`}
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

export default Demons;