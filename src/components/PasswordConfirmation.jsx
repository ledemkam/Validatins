const PasswordConfirmation = ({inputsStates,setInputsStates,showValidations}) => {
  return (
    <>
    <label htmlFor="passwordConfirmation" className="text-slate-50 inline-block mt-5">ihr password Bestatigen</label>
    <input
     type="text"
     id="passwordConfirmation"  
     className="rounded w-full p-1 mt-2"
     value={inputsStates.passwordConfirmation}
     onChange={(e)=>setInputsStates({...inputsStates, passwordConfirmation: e.target.value})}/>
     {showValidations.passwordConfirmation && (
        <p className="text-red-400 font-semibold">
          password stimmt nicht ubereimmnt
        </p>
      ) }
   </>
  )
}
export default PasswordConfirmation