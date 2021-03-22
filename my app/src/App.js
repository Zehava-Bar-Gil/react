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
      <Quiz1/>
      <Buttons name="Important"/>
      <Buttons name="Not Important"/>
      <Card/>
      <ClassCard/>
      <Increment/>
      <Hide_Seek/>
      <LifeCycleMethods/>
      <BoxAnimation/>
      <ChildToParent/>
      <Checkboxes/>
      <ChuckNoriss/>
      
    </div>
  );
}

export default App;
