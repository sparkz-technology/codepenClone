import { useState } from "react"
import CodeEditor from "./features/Editer/CodeEditor"

const App: React.FC = () => {
   const [code, setCode] = useState("")
   return (
      <div>
         <h1>App</h1>
         <CodeEditor code={code} onChange={setCode} />
      </div>
   )
}

export default App
