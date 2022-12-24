import React, {useState, useEffect} from "react";
import {signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword} from "firebase/auth";
import {auth} from "../firebase.js";
import {useNavigate, useNavigation} from "react-router-dom";

const Welcome=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    const [registerInformation, setRegisterInformartion] = useState({
        email : "",
        confirmEmail : "", 
        password : "",
        confirmPassword : ""
    })
    const navigate = useNavigate();

    useEffect(()=>{
        auth.onAuthStateChanged((user) =>{
            if(user){
                navigate('./product');
            }
        })
    },[])

    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }

    const handlePasswordChange=(e)=>{
        setPassword(e.target.value)
    }

    const handleSignIn=()=>{
        signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('/product')
        }).catch((err) => alert(err.message)); 

    }

    const handleeRegister = () =>{
        if(registerInformation.email !== registerInformation.confirmEmail){
            alert("Enter email are not same")
            return;
        }
        else if(registerInformation.password  !== registerInformation.confirmPassword){
            alert("Enter password are not same")
            return;
        }
            
        createUserWithEmailAndPassword(auth, registerInformation.email, registerInformation.password).then(() =>  {
            navigate('/product')
        }).catch((err) => alert(err.message)); 

    }
    return(<div className="welcome">
        <h1>React-Test-App</h1>
        <div className="login-register-container">
            {isRegistering ?( 
                <>
                <input type="email" placeholder="Email" value={registerInformation.email} onChange={(e)=> setRegisterInformartion({...registerInformation, email: e.target.value})}/>
                <input type="email" placeholder="ConfirmEmail" value={registerInformation.confirmEmail} onChange={(e)=> setRegisterInformartion({...registerInformation, confirmEmail: e.target.value})}/>
                <input type="password" placeholder="password" value={registerInformation.password} onChange={(e)=> setRegisterInformartion({...registerInformation, password: e.target.value})}/>
                <input type="password" placeholder="Confrim Password" value={registerInformation.confirmPassword} onChange={(e)=> setRegisterInformartion({...registerInformation, confirmPassword: e.target.value})}/>
                    <button onClick={handleeRegister}>Register</button>
                    <button onClick={()=>{setIsRegistering(false)}}>Go Back</button>

                </> ):(

                <>
                <input type="email" onChange={handleEmailChange} value={email}/>
        <input type="password" onChange={handlePasswordChange} value={password}/>
        <button onClick={handleSignIn}>Signin</button>
        <button onClick={()=>{setIsRegistering(true)}}>Create an account</button>
                </>
                )
            }



        
        </div>
    </div>)
};

export default Welcome;