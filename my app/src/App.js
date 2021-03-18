import logo from './logo.svg';
import './App.css';
import First from './Components/Basic/index2'
import Box1 from './Components/Boxes/box1'
import Quiz1 from './Components/Quiz/Quiz'
import Buttons from './Components/Buttons/Btn'
import Card from './Components/Card/Cards'
import ClassCard from './Components/6.1 ClassComponents/Cards'

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
      
    </div>
  );
}

export default App;
