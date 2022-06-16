import { useState } from "react"
import FormInput from "../../form-input/form-input.component"
import './sign-in-form.styles.scss'
import Button from "../../button/button-component"
import {auth, signInWithGooglePopUp,createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils"

const defaultFormFields={
   
    email:'',
    password:'',
   
}

const signInWithGoogle=async()=>{
    const {user}=await signInWithGooglePopUp()
    const userDocRef=createUserDocumentFromAuth(user)
    console.log('user', user)

}

const SignInForm=()=>{
    const[formFields, setFormFields]=useState(defaultFormFields)
    const {email, password,}=formFields

    const handleSubmit=async(event)=>{
        event.preventDefault()
        
        try{
            const response=await signInAuthUserWithEmailAndPassword(email, password)
            console.log('awaiting response ',response)
            resetFormFields()
           
        }catch(error){

            switch(error.code){
                case 'auth/email-already-in-use':
                    alert('Failed, email already in use')
                break;

                case 'auth/wrong-password':
                    alert('incorrect password for email')
                break;

                default:
                alert('Sign in failed')

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
            <h2>Already have an account</h2>
            <p> Sign in with email and password</p>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" required type='text' name='email' value={email} onChange={handleChange}/>
                <FormInput label="Password" required type='password' name='password' value={password} onChange={handleChange}/>
                <div className="buttons-container">
                <Button type= 'submit'>Submit </Button>
                <Button type='button' buttonType='google' onClick={signInWithGoogle}>Google Sign In</Button>
                </div>
            </form>
            </div>
    )
}

export default SignInForm