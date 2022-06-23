import React,{useRef} from "react"
import {Link} from "react-router-dom"
import "../styles/signInlevel1.css"
function SignInLevel1(props){
    const loginName=useRef(null);
    const loginSurname=useRef(null);
    const loginEmail=useRef(null);
    const loginPassword=useRef(null);
function loginBtn(e){
    e.preventDefault();
const userId=`${loginName.current.value[0]+loginSurname.current.value[0]}`
return props.passAndEmail(
    {userId,
        name:loginName.current.value,
        surname:loginSurname.current.value,
        email:loginEmail.current.value,
        password:loginPassword.current.value})
}

    return(
        <div className="signincontainer">

                <form>
                <lable>Email*</lable>
                    <input type="email" name="email" className="Email" ref={loginEmail}/>
                    <lable>Name*</lable>
                    <input type='text' name="name" className="name"ref={loginName}/>
                    <lable>Surname*</lable>
                    <input type='text' name="surname" className="surname" ref={loginSurname}/>
                    <lable>Password*</lable>
                    <input type='password' name="password" className="password" ref={loginPassword}/>
                    <input type="Submit" className="submitbtn" onClick={loginBtn}/>
                </form>

<p>want to register click: <Link to="/" >Here</Link></p>
        </div>
    )
}

export default SignInLevel1;