import './styles.css';

function Button({name, type}) {
  return <button className='main-button' type={type}>{name}</button>;
}

export default Button;
