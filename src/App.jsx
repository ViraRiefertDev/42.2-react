import './App.css';
/* import Button from './components/Button/Button';
import LessonCard from './components/LessonCard/LessonCard'; */
import ProfileCard from './components/ProfileCard/ProfileCard';

function App() {
   return (
      <div className="App">
         {/* <LessonCard />
         <Button />
         <Button /> */}
         <div className='cards-container'>
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
         </div>
      </div>
   );
}

export default App;
