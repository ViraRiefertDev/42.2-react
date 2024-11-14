import "./App.css";
/* import Lesson03 from "./lessons/Lesson03/Lesson03"; */
import Homework03 from "./homeworks/homework03/Homework03";

//lesson imports
/* import Lesson02 from "./lessons/Lesson02/Lesson02"; */
/* import Lesson03 from "./lessons/Lesson03/Lesson03"; */

//homework imports
/* import Homework02 from "./homeworks/Homework02/Homework02"; */

//consultation imports
import Consult02 from "./consultations/Consult02/Consult02";

function App() {
  return (
    <div className="App">
      {/* <Lesson02 /> */}
      {/* <Homework02 /> */}
      {/* <Lesson03 /> */}
      <Homework03/>
      <Consult02 />
    </div>
  );
}
export default App;