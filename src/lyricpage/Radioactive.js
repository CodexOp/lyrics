import React from 'react';
import styled from 'styled-components';
import Navbar from '../Navbar';



const Radioactive =  () => {
    return(
      <>
        <Navbar />
        <Astranauts>
            
            <h2 className="astranaut_heading">Radioactive Lyrics</h2>
            <div className="prediv">
            <pre className="pretag">
     {`Whoa, oh, oh
Whoa, oh, oh
Whoa, oh, oh
Whoa
I'm waking up to ash and dust
I wipe my brow and I sweat my rust
I'm breathing in the chemicals
I'm breaking in, shaping up, then checking out on the prison bus
This is it, the apocalypse
Whoa
I'm waking up, I feel it in my bones
Enough to make my systems blow
Welcome to the new age, to the new age
Welcome to the new age, to the new age
Whoa, oh, oh, oh, oh, whoa, oh, oh, oh, I'm radioactive, radioactive
Whoa, oh, oh, oh, oh, whoa, oh, oh, oh, I'm radioactive, radioactive
I raise my flags, don my clothes
It's a revolution, I suppose
We'll paint it red to fit right in
Whoa
I'm breaking in, shaping up, then checking out on the prison bus
This is it, the apocalypse
Whoa
I'm waking up, I feel it in my bones
Enough to make my systems blow
Welcome to the new age, to the new age
Welcome to the new age, to the new age
Whoa, oh, oh, oh, oh, whoa, oh, oh, oh, I'm radioactive, radioactive
Whoa, oh, oh, oh, oh, whoa, oh, oh, oh, I'm radioactive, radioactive
All systems go, the sun hasn't died
Deep in my bones, straight from inside
I'm waking up, I feel it in my bones
Enough to make my systems blow
Welcome to the new age, to the new age
Welcome to the new age, to the new age
Whoa, oh, oh, oh, oh, whoa, oh, oh, oh, I'm radioactive, radioactive
Whoa, oh, oh, oh, oh, whoa, oh, oh, oh, I'm radioactive, radioactive`}
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

export default Radioactive;