const Pseudo = ({inputsStates,setInputsStates,showValidations}) => {
  return (
    <>
     <label htmlFor="username" className="text-slate-50">ihr benutzername(3-64 carachter)</label>
     <input
      type="text" 
      id="userName" 
      className="rounded w-full p-1 mt-2"
      value={inputsStates.pseudo}
      onChange={(e)=>setInputsStates({...inputsStates,pseudo: e.target.value})}/>
      {showValidations.pseudo && (
        <p className="text-red-400 font-semibold">
          ihr benutzername solle mindestens 3 caracter enthalten
        </p>
      ) }
    </>
  )
}
export default Pseudo