import { useState,useCallback,useEffect,useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [symbolAllowed, setSymbolAllowed] = useState(false);
  //useRef hook
const passwordRef=useRef(null);
  const passwordGenerator=useCallback(()=>{
    let pass="";
    let stringSet="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let numberSet="0123456789";
    let symbolSet="!@#$%^&*()_+";
    if(numberAllowed) stringSet+=numberSet;
    if(symbolAllowed) stringSet+=symbolSet;

    for (let i=1;i<=length;i++){
      let char= Math.floor(Math.random()*stringSet.length+1);

      pass+=stringSet.charAt(char);
    }
    setPassword(pass);
      
  },[length,numberAllowed,symbolAllowed,setPassword]);
  useEffect(() => {
    passwordGenerator();
  },[numberAllowed,symbolAllowed,length,passwordGenerator]);
const copyPasswordToClipBoard=useCallback(()=>{
  passwordRef.current?.select();
  window.navigator.clipboard.writeText(password)

},[password]);
  return (
    <>
      <div className="w-full rounded-lg px-4 my-8 text-orange-500 bg-gray-800 max-w-md mx-auto shadow-md">
<h1 className="text-white text-center text-3xl font-bold my-10">Password Generator</h1>
<div className="flex shadow rounded-lg overflow-hidden mb-4">
<input 
type="text"
value={password}
className="outlne-none w-full py-1 px-3"
placeholder="password"
readOnly
ref={passwordRef}
/>
<button onClick={copyPasswordToClipBoard} className="border-2 p-2 border-white bg-blue-200">Copy</button>
</div>
<div className="flex text-sm gap-x-2">
  <div className="flex items-center  gap-x-1">
    <input
     type="range" 
     min={8}
     max ={100}
     value={length}
     className="cursor-pointer"
     onChange={(e)=>setLength(e.target.value)}

    
    />
    <label  >Length: {length}</label>
    <div className="flex ml-2">
      <input type="checkbox"
      defaultChecked={numberAllowed}
      onChange={()=>{setNumberAllowed((prev)=>!prev)}} />
      <label >Include Numbers</label>
    </div>
    <div className="flex ml-2">
      <input type="checkbox"
      defaultChecked={symbolAllowed}
      onChange={()=>{setSymbolAllowed((prev)=> !prev)}} />
      <label >Include Symbols</label>
    </div>
  </div>
</div>
        
      </div>
    </>
  );
}

export default App;
