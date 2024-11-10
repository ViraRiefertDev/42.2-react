import person from './person.js';
import './styles.css';

function ProfileCard() {

   return (
      <div className='profile-card'>
         <img  className="profile-avatar" src={person.avatar} alt="" />
         <p  className="profile-name">
            {person.firstName} {person.lastName}
         </p>
         <h3 className="profile-occupation">Occupation: {person.occupation}</h3>
         <h5 className="profile-hobbies-title">Hobbies:</h5>
         <ul className="profile-hobbies-list">
            {person.hobbies.map(hobby => <li>{hobby}</li>)}
         </ul>
      </div>
   );
}

export default ProfileCard;