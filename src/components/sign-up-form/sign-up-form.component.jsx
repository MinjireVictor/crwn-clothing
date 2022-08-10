import { useContext,useState } from "react"
import FormInput from "../form-input/form-input.component"
import './sign-up-form.styles.scss'
import Button from "../button/button-component"
import { createAuthUserWithEmailAndPassword,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"



const defaultFormFields={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  
}

const SignUpForm=()=>{
    const[formFields, setFormFields]=useState(defaultFormFields)
    const {displayName,email,password,confirmPassword}=formFields
    console.log('hit')

    const handleSubmit=async(event)=>{
        event.preventDefault()
       
        try{
            if(confirmPassword!==password){
                alert("Passwords do not match ")
            }else{
                const {user}=await createAuthUserWithEmailAndPassword(email, password)
            
                const userDocRef=await createUserDocumentFromAuth(user,{displayName})
               
                resetFormFields() 
            }
             
        }catch(error){
            if(error.code==='auth/email-already-in-use'){
                alert('Failed, email already in use')
            }
            else{
                console.log('fatal error')
            }
          
            
        }
        
    }
    
    const resetFormFields=()=>{
        setFormFields(defaultFormFields)
    }

    const handleChange=(event)=>{
        // we destructure the name and value
        const {name,value}=event.target
        setFormFields({...formFields,[name]:value})
    }
    console.log('formfields', formFields)
 
    return(
        <div className="sign-up-container">
            <h2> Dont have an account</h2>
            <p> sign up with email and password</p>
            <form onSubmit={handleSubmit}>
                <FormInput label="Display name" required type='text' name='displayName' value={displayName} onChange={handleChange}/>
                <FormInput label="Email" required type='email' name='email' value={email} onChange={handleChange}/>
                <FormInput label="Password" required type='password' name='password' value={password} onChange={handleChange}/>
                <FormInput label="Confirm password" required type='password' name='confirmPassword' value={confirmPassword} onChange={handleChange}/>
                <Button type= 'submit'>Submit </Button>
            </form>
        </div>
    )
}

export default SignUpForm