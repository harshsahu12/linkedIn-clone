import "./Login.scss"
import Form from "../../features/authentication/authForm"
import Header from "../../components/header/Header"
import { useState } from "react";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <>
      <Header handleFunction={(e) => e.preventDefault(setSignIn(!signIn))} />
      <div className='loginpage'>
        <Form signIn={signIn} setSignIn={setSignIn} />
        <img className="linked_bg" src="assets/linkedinbg.svg" alt="" />
      </div>
    </>

  )
}

export default Login