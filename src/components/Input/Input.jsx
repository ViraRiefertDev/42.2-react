import './styles.css'

function Input({name,type,placeholder, label}){
  return(
    <div className='input-wrapper'>
      <label className='input-label' htmlFor={name+'_'}>{label}</label>
      <input id={name+'_'} type={type} name={name} placeholder={placeholder} />
    </div>
  )
}

export default Input;