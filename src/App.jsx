import { useState } from "react"

function App() {
  const [inputValue, setInputValue] = useState(5)
  const algumaCoisa = []
  for(var i = inputValue; i > 0; i--){ 
    let armazenaVolta = i - 1
    algumaCoisa.push(<div>{i} Foram passear, mas so {armazenaVolta == 0 ? "nenhum":armazenaVolta}  voltaram de lá</div>)
    if(i == 1){
      algumaCoisa.push(<div>{inputValue} voltaram de la</div>)
    }
  }

  return (
    <div>
      <input type="number" min={1} value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      {algumaCoisa}
    </div> 
  )
}
export default App
