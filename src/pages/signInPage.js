import React,{useState,useEffect} from "react"
import SignInLevel1 from "./components/signInlevel1"
import {useNavigate } from "react-router-dom"

function SigninPage(){
    let navigate=useNavigate();
    const [emailName,setEmailName]=useState(null);//user login details submited
    const [userObj,setUserObj]=useState(false);// get local storage user
    const [switchPage,setSwitchPage]=useState(false);
 
    const storage=window.localStorage;
   useEffect(()=>{
       setUserObj(JSON.parse(storage.getItem(emailName?.userId)));
    },[emailName,storage]);
if(userObj){
const switchPage=Object.values(userObj);
if(switchPage.includes(emailName.name)&& switchPage.includes(emailName.surname)&&switchPage.includes(emailName.email)&&switchPage.includes(emailName.password)){
console.log("Set for redirect atcheived",switchPage,true);

window.localStorage.setItem("userProfile",JSON.stringify(userObj.profilePic))
navigate("/pages/todopage",{replace:true});
}
}


    console.log(userObj,"personal info excepted");
    console.log(switchPage,"switch pages");
   
    return (
        <div className="containerSignIN">
    <SignInLevel1 passAndEmail={setEmailName}/>

        </div>
    )
}

export default SigninPage
