import { useState } from "react"
import Pseudo from "./Pseudo"
import PassWord from "./PassWord"
import PasswordConfirmation from "./PasswordConfirmation"


const Validations = () => {
    const [inputsState,setInputsState] = useState(
        {
            pseudo:"",
            password:"",
            passwordConfirmation:"",
        }
    )
    const [showValidation, setShowValidation ] = useState({
            pseudo:false,
            password:false,
            passwordConfirmation:false
    })
    const handleSubmit = (e) => {
      e.preventDefault()

      if(Validation()){
        console.log("envoi formular")
      }
    }
    function Validation(){
        const areValid ={
            pseudo:false,
            password:false,
            passwordConfirmation:false
        }
        if(inputsState.pseudo.length  < 3 || inputsState.password.length > 64){
            setShowValidation(state =>({...state, pseudo: true}))
        }
        else{
            areValid.pseudo = true
            setShowValidation(state =>({...state, pseudo: false}))
        }
        if(inputsState.password.length  < 6 || !/\d/.test(inputsState.password)){
            setShowValidation(state =>({...state, password: true}))
        }
        else{
            areValid.password = true
            setShowValidation(state =>({...state, password: false}))
        }
        if(inputsState.passwordConfirmation !== inputsState.password){
            setShowValidation(state =>({...state, passwordConfirmation: true}))
        }
        else{
            areValid.passwordConfirmation = true
            setShowValidation(state =>({...state, passwordConfirmation: false}))
        }
        //console.log(areValid)
        // pour verifier que tous les propriete d un objet est true ,on peut utiliser Object.values
        //console.log(Object.values(areValid))
        // la methode every() permet de verifier si tous les elements d un tableau respecte le retour de la condition(ou une certaine condition)
       // console.log(Object.values(areValid).every(value => value))
       if(Object.values(areValid).every(value => value)){
        return true
       }else{
        false
       }

    }
  return (
    <form className="max-w-xl mx-auto border p-10 rounded" onSubmit={handleSubmit}>
       <p className="text-slate-100 text-xl mb-6">Erstellen Sie Ihren Benutzernamen und Ihr Password </p>
        <Pseudo  inputsStates={inputsState} setInputsStates={setInputsState} showValidations={showValidation}/> 
        <PassWord inputsStates={inputsState} setInputsStates={setInputsState} showValidations={showValidation}/> 
        <PasswordConfirmation inputsStates={inputsState} setInputsStates={setInputsState} showValidations={showValidation}/> 
       <button className="mt-10 bg-slate-100 px-4 py-2 min-w-[125px] rounded">Bestätigen</button>
    </form>
  )
}
export default Validations