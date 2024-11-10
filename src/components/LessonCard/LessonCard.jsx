import Button from "../Button/Button.jsx";
import './styles.css'
import {lessonData} from './data.js';

function LessonCard(){

   return (
      <div className="lesson-card">
      <h3>Lesson {lessonData.lesson_number}</h3>
      <p>{lessonData.teacher}</p>
      <Button />
      </div>
   );
}

export default LessonCard;