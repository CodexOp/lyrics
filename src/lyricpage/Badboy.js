import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Badboy =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Badboy Lyrics</h2>
            <div className="prediv">
            <pre className="pretag">
     {`Rolled up sleeves and a
24k smile to match his red eyes 
Commas in his hair and a
Chain with a saint, but he ain't none
Inked up neck and the
Letters on his fingers speak of trouble 
Trouble, trouble, trouble
Don't go flexing boy you'll get trouble

Oh, bad boy messing with the boom, boom
Oh, bad boy riding on the vroom, vroom
Oh, bad boy, bad boy ha
Bad boy, bad boy ha

Oh, bad boy messing with the boom, boom
Oh, bad boy riding on the vroom, vroom
Oh, bad boy, bad boy ha
Bad boy, bad boy ha

(On the vroom, vroom)
(On the vroom, vroom)
(On the vroom, vroom)
(Messing with the boom, boom)
(Riding on the vroom, vroom)

(On the vroom, vroom)
(On the vroom, vroom)
(On the vroom, vroom)
(Messing with the boom, boom)
(Riding on the vroom, vroom)

Rolled up sleeves and he's, yeah
Coming on hard
He's gonna hurt the ones he love
'Cause no savage can be trusted no, no, no 
Yeah, riding Lambos
Hitting bandos yeah, yeah 
Trappin' and hustle, trouble, trouble (trouble, trouble)
Don't go flexing boy you'll get trouble

Oh, bad boy messing with the boom, boom
Oh, bad boy riding on the vroom, vroom
Oh, bad boy, bad boy, ha
Bad boy, bad boy, ha

Oh, bad boy messing with the boom, boom
Oh, bad boy riding on the vroom, vroom
Oh, bad boy, bad boy, ha
Bad boy, bad boy, ha

(On the vroom, vroom)
(On the vroom, vroom)
(On the vroom, vroom)
(Messing with the boom, boom)
(Riding on the vroom, vroom)

(On the vroom, vroom)
(On the vroom, vroom)
(On the vroom, vroom)
(Messing with the boom, boom)
(Riding on the vroom, vroom)

He's involved in a ba-bad man thing (bad man thing)
Hot steppa thinks he's the next big thing (next big thing)
No long talking
Just cut them all straight
Never gonna give it up
Never gonna change no no, uh

(On the vroom, vroom)
(On the vroom, vroom)
(On the vroom, vroom)
(Messing with the boom, boom)
(Riding on the vroom, vroom)

Oh, bad boy messing with the boom boom
Oh, bad boy riding on the vroom vroom
Oh, bad boy, oh, bad boy
Bad boy, bad boy ha`}
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

export default Badboy;