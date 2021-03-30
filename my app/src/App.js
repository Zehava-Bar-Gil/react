import logo from './logo.svg';
import './App.css';
import First from './Components/Basic/index2'
import Box1 from './Components/Boxes/box1'
import Quiz1 from './Components/Quiz/Quiz'
import Buttons from './Components/Buttons/Btn'
import Card from './Components/Card/Cards'
import ClassCard from './Components/6.1 ClassComponents/Cards'
import Increment from './Components/7.1 Increment/Increment'
import Hide_Seek from './Components/7.2 Hide_Seek/Hide_Seek'
import LifeCycleMethods from './Components/8.1 LifeCycleMethods/LifeCycleMethods'
import BoxAnimation from './Components/8.2 BoxAnimation/BoxAnimation'
import ChildToParent from './Components/11.1 ChildToParent/ChildToParent'
import Checkboxes from './Components/11.2 Checkbox/Checkboxes'
import ChuckNoriss from './Components/12.1 ChuckNoriss/ChuckNoriss'
import FormReview from './Components/11.3 FormReview/FormReview'
import Data_Massage from './Components/13.1 DataMassaging/Data_Massage'
import AvatarsHooks from './Components/13.2 Avatars/AvatarsHooks'
// import Router from './Components/16.1 Router/ProductDetail'
import ReadMore from './Components/18.1 Text/ReadMore.jsx'
import ToDo from './Components/18.2 ToDo/ToDo.jsx'
import Time from './Components/18.3 Time/Time.jsx'
import Marking from './Components/18.4 Marking&Deleting/Marking.jsx'

function App() {
  return (
    <div className="App">
    
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click me!
        </a>
   
      <First/>
      <Box1/>
      <hr />
      <Quiz1/>
      <hr />
      <Buttons name="Important"/>
      <Buttons name="Not Important"/>
      <hr />
      <Card/>
      <ClassCard/>
      <hr />
      <Increment/>
      
      <Hide_Seek/>
      
      <LifeCycleMethods/>
      
      <BoxAnimation/>
      <hr />
      <ChildToParent/>
      <hr />
      <Checkboxes/>
      <hr />
      <FormReview/>
     
      <ChuckNoriss/>
      <hr />
      <Data_Massage/>
      <hr />
      <AvatarsHooks/>
      <hr />
      {/* <Router/> */}
      <ReadMore/>
      <hr />
      <ToDo />
      <hr />
      <Time />
      <hr />
      <Marking />
      
    </div>
  );
}

export default App;
