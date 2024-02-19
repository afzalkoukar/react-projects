import { useCallback, useState, useEffect, useRef} from 'react'

import './App.css'

function App() {

  const passwordRef = useRef(null)

  const [lenght, setLenght] = useState(8);
  const [numbers_allowed, set_numbers_allowed] = useState(false);
  const [char_allowed, set_char_allowed] = useState(false);
  const [password, Set_passowrd] = useState("");

  const password_generator = useCallback(()=>{
    let pass = ""

    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers_allowed) str += "0123456789";
    if (char_allowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < lenght; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str[char];
      
    }

    Set_passowrd(pass);

  },[lenght, numbers_allowed, char_allowed, Set_passowrd])


  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    password_generator()
  }, [lenght, numbers_allowed, char_allowed, password_generator])


  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-500 text-black">
    <h1 className=' text-black text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={20}
        value={lenght}
         className='cursor-pointer'
         onChange={(e) => {setLenght(e.target.value)}}
          />
          <label>Length: {lenght}</label>
</div>

<div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numbers_allowed}
          id="numberInput"
          onChange={() => {
              set_numbers_allowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char_allowed}
              id="characterInput"
              onChange={() => {
                  set_char_allowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>

</div>
</div>
    </>
  )
}

export default App
