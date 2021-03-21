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
      
    </div>
  );
}

export default App;
