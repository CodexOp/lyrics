
import Landing from "./Landing";
import Songlist from "./Songlist";
import Hotpicks from "./Hotpicks";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Astranaut from "./lyricpage/astranaut";
import Letmelove from "./lyricpage/letmelove";
import Whoofty from "./lyricpage/whoofty";
import Nights from "./lyricpage/Nights";
import Light from "./lyricpage/Light";
import Ilomilo from "./lyricpage/Ilomilo";
import Badboy from "./lyricpage/Badboy";
import Cradles from "./lyricpage/Cradles";
import Radioactive from "./lyricpage/Radioactive";
import Playdate from "./lyricpage/Playdate";
import Demons from "./lyricpage/Demons";
import Roses from "./lyricpage/Roses";
import Superhero from "./lyricpage/Superhero";
import Safari from "./lyricpage/Safari";
import Grateful from "./lyricpage/Grateful";
import Falling from "./lyricpage/Falling";
import Shadow from "./lyricpage/Shadow";


function App() {
  return (
<Router>
  
   <Switch>
   <Route exact path="/" >
      <Landing />
   < Songlist />
   <Hotpicks />
      </Route>
     <Route path="/hot">
       <Hotpicks />
      </Route>
      <Route path="/astranaut">
       <Astranaut />
      </Route>
      <Route path="/letmelove">
       <Letmelove />
      </Route>
      <Route path="/Whoofty">
       <Whoofty />
      </Route>
      <Route path="/Nights">
       <Nights />
      </Route>
      <Route path="/Light">
       <Light />
      </Route>
      <Route path="/Ilomilo">
       <Ilomilo />
      </Route>
      <Route path="/Badboy">
       <Badboy />
      </Route>

      <Route path="/Cradles">
       <Cradles />
      </Route>

      <Route path="/Radioactive">
       <Radioactive />
      </Route>

      <Route path="/Demons">
       <Demons />
      </Route>

      <Route path="/Playdate">
       <Playdate />
      </Route>

      <Route path="/Roses">
       <Roses />
      </Route>

      <Route path="/Superhero">
       <Superhero />
      </Route>
 
      <Route path="/Safari">
       <Safari />
      </Route>


      <Route path="/Grateful">
       <Grateful />
      </Route>
 

      <Route path="/Falling">
       <Falling />
      </Route>
 

      <Route path="/Shadow">
       <Shadow />
      </Route>
 
    
   </Switch>

   </Router>
  );
}

export default App;
