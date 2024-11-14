import './styles.css'
import Input from "../Input/Input"
import Button from "../Button/Button"

function LoginForm(){
  return(
    <form className="login-form-wrapper" method='POST'>
      <h4 className="login-form-title">Login form</h4>
      <Input name='email' type='email' placeholder='Enter your email' label='Email'/>
      <Input name='password' type='password' placeholder='Enter your password' label='Password'/>
      <Button name='Login' type='submit'/>
    </form>
  )
}

export default LoginForm