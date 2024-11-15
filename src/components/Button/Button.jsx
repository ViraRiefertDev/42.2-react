import './styles.css';

function Button({ name, type = 'button', onClick, children }) {
  return (
    <button onClick={onClick} className='main-button' type={type}>
      {children}
    </button>
  );
}

export default Button;
