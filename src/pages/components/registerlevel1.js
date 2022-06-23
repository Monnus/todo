import React,{useRef} from "react";
import "../styles/registration.css"
import {Link} from "react-router-dom";

function RightSide(){
    // validation

    const name=useRef(null);
    const surname=useRef(null);
    const email=useRef(null);
    const profilePic=useRef(null);
    const password=useRef(null)


    const user={
        name:"",
        surname:"",
        email:"",
        profilePic:"",
        fullObj:false,
        allcheckspassed:false,
        loginName:"",
      
    };
    
    function clear(input){
      input.value="";
    }
  


    

// ======================name==========================
function valifname(input){
    input.focus();
    if(input.value===""){
        user.allcheckspassed=false;
        return alert("please fill out Name");
    }
    if(input.value.length <2){
        user.allcheckspassed=false;
        return alert("name can't be less then 2 letters");
    }
    let str = input.value;

    let matches2=str.match(/.[%$#@!()^*,/;'|</>\s]/);
    if(matches2){
        user.allcheckspassed=false;
        return alert("Oops your using spacial cheracters");
    }
    let  matches = str.match(/(\d+)/);
    console.log(str,matches);
    if (matches){
        user.allcheckspassed=false;
        return alert("Oops you used numbers in the Name feild :-D ");
    }
    user.allcheckspassed=true;
  user.name=input.value.toLowerCase();
  valiSurname(surname.current);
  clear(input);
};
// ===========================================surname======================
function valiSurname(input){
    input.focus();
    if(input.value===""){
        user.allcheckspassed=false;
        return alert("please fill out Surname");
    }
    if(input.value.length <2){
        user.allcheckspassed=false;
        return alert("Surname can't be less then 2 letters");
    }
    let str = input.value;
    let  matches = str.match(/(\d+)/);
    let matches2=str.match(/.[%$#@!()^*,/;'|</>\s]/);
    if(matches2){
        user.allcheckspassed=false;
        return alert("Oops your using spacial cheracters");
        
    }
        
    console.log(str,matches);
    if (matches){
        user.allcheckspassed=false;
        return alert("Oops you used numbers in the Name feild :-D ");
    }
    user.allcheckspassed=true;
    user.surname=input.value.toLowerCase();
    imgValidate(profilePic.current);
  clear(input)
  }

// =========================================================image=================================
function imgValidate(input){
    console.log(input.files[0]);
      switch(input.files[0].type){
          case "image/jpeg":
    console.log("jpep image loaded");
         console.log(input.files[0].name);
         break
         case "image/png":
            console.log("png image loaded");
         console.log(input.files[0].name);
         break;
         default:
          user.allcheckspassed=false;
             return alert("Oops we dont support this file format");
      }
      user.allcheckspassed=true;
      user.profilePic=input.files[0].name;
    validatPass(password.current);
      clear(input);
    }

    function validatPass(input){
        input.focus();
        if(input.value===""){
            user.allcheckspassed=false;
            return alert("please fill out password");
        }
        if(input.value.length <8){
            user.allcheckspassed=false;
            return alert("password can't be less then 8 chracters");
        }
      
    
        user.allcheckspassed=true;
      user.password=input.value;
    emailValidate(email.current)
      clear(input);
    
    }
    function emailValidate(input) {
        const emailRegexp = new RegExp(
      /^[a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1}([a-zA-Z0-9][\-_\.\+\!\#\$\%\&\'\*\/\=\?\^\`\{\|]{0,1})*[a-zA-Z0-9]@[a-zA-Z0-9][-\.]{0,1}([a-zA-Z][-\.]{0,1})*[a-zA-Z0-9]\.[a-zA-Z0-9]{1,}([\.\-]{0,1}[a-zA-Z]){0,}[a-zA-Z0-9]{0,}$/i )  // eslint-disable-line
      
        if(emailRegexp.test(input.value)===false){
            user.allcheckspassed=false;
            return alert("Email format not accepted ");
        }
        user.allcheckspassed=true;
        user.email=input.value.toLowerCase();
        clear(input);
      }
      function submitBtn(e){
        e.preventDefault();
        valifname(name.current);
      
      if(user.allcheckspassed && user.name && user.surname  && user.email && user.profilePic){
          user.fullObj=true;
          user.loginName=`${user.name[0]}${user.surname[0]}`;
      window.localStorage.setItem(`${user.name[0]}${user.surname[0]}`,JSON.stringify(user));
      alert("congrates your information was accepter");
   window.location.href="/pages/signin";

      }
      user.fullObj=false;
      console.log(user)
      }
      
      
      console.log(user);
      














    return(
        <div className="rightside-container">
            <h2 style={{color:"white"}}>Sign form</h2>
                <form>
<label>Name*</label>
<br></br>

<input type="text" name="fname" className="imputsSize" placeholder="Name" ref={name} />
<br></br>
<br></br>
<label>Surname*</label>
<br></br>

<input type="text" name="Surname" className="imputsSize" placeholder="Surname" ref={surname}/>
<br></br>
<br></br>
<label>Email*</label>
<br></br>

<input type="Email" name="Email" className="imputsSize" placeholder="....@outlook" ref={email}/>
<br></br>
<br></br>
<label>Password*</label>
<br></br>

<input type="Password" name="password" className="imputsSize" placeholder="Password" ref={password}/>
<br></br>
<br></br>
<label>IMAGE*</label>
<input type="file" name="file" className="File" style={{color:"rgba(0,0,0,0)"}} ref={profilePic}/>
<br></br>
<br></br>
<input type="submit" onClick={submitBtn}/>
                </form>

            <Link to="/pages/signin"><button className="btn1">SignIN</button>        </Link>
         <Link to=''><button className="btn2">SignUP</button></Link>  

        </div>
    )
};

function LeftSide(){
    return(
        <div className="leftside-container">
            <div>

            </div>

        </div>
    )
}

function Registrationlevel1(){
    return (
<div className="container">
<RightSide/>
<LeftSide/>
</div>

    )
}

export default Registrationlevel1;