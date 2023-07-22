const PassWord = ({inputsStates,setInputsStates,showValidations}) => {
    return (
      <>
       <label htmlFor="password" className="text-slate-50 inline-block mt-5">ihr password(mindestens 1 ziffer und 6 character )</label>
       <input
        type="text" 
        id="password"  
        className="rounded w-full p-1 mt-2"
        value={inputsStates.password}
        onChange={(e)=>setInputsStates({...inputsStates,password: e.target.value})}/>
         {showValidations.password && (
        <p className="text-red-400 font-semibold">
          ihr password sollte mindestens 5 caracter mit ein eins ziffer enthalten
        </p>
      ) }
      </>
    )
  }
  export default PassWord 