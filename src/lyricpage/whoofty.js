import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Whoofty =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Whoofty By CJ Lyrics</h2>
            <div className="prediv">
            <pre className="pretag">
     {`Heavy on the SSO shit, man
Loyalty over royalty, y'all niggas know the vibes
Pxcoyo killed this beat, bitch
Whoopty, bitch, I'm outside, it's a movie, huh (whoopty)
Blue cheese, I swear, I'm addicted to blue cheese
I gotta stick to this paper-like loose leaf
Bitch, I'm 'bout my chicken like it's a two-piece
You can have your bitch back, she a groupie
She just swallowed all my kids in the two-seat (skrrt)
Swagged out, for Milly we bringing them gats out
I still got some racks stuffed in the trap house
Off the '42, I'm blowing her back out (blowing her back out)
I'm back on my bullshit, swing back with a full clip
They say I'm moving ruthless, and my shooters, they shooting
I don't shake 'til thеy Ruth Chris (my shooters, my shooters, they shooting)
I get the breesh, then it's adiós
If I'm with your treesh, thеn she's giving throat
When I see police, then we getting low
That's another piece, that's another Zoe
Ice in the VV's, now she's down to get treeshy
I got all this water on me like FIJI
Bitch, I'm posted up with Hats and the Sleezys
Smokin' the zaza, it go straight to the māthā
Then I'm uppin' the choppa
I'm hittin' the cha-cha, open his lata
Then he dancin' bachata
Smokin' the zaza, it go straight to the māthā
Then I'm uppin' the choppa
I'm hittin' the cha-cha, then I open his lata
Then he dancin' bachata
Whoopty, bitch, I'm outside, it's a movie, huh (whoopty)
Blue cheese, I swear, I'm addicted to blue cheese
I gotta stick to this paper-like loose leaf
Bitch, I'm 'bout my chicken like it's a two-piece
You can have your bitch back, she a groupie
She just swallowed all my kids in the two-seat (skrrt)
Swagged out, for Milly we bringing them gats out
I still got some racks stuffed in the trap house
Off the '42, I'm blowing her back out (blowing her back out)
I'm back on my bullshit, swing back with a full clip
They say I'm moving ruthless, and my shooters, they shooting
I don't shake 'til thеy Ruth Chris (shooters, they shooting)
Swagged out, for Milly we bringing them gats out
I still got some racks stuffed in the trap house
Off the '42, I'm blowing her back out (blowing her back out)
I'm back on my bullshit, swing back with a full clip
They say I'm moving ruthless, and my shooters, they shooting
I won't take her to Ruth's Chris (and my shooters, they shootin')`}
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

export default Whoofty;