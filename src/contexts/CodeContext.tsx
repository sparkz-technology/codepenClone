/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react"
import { CodeContextAction, CodeContextType } from "../types"

const initialState: CodeContextType = {
   state: {
      html: "",
      css: "",
      js: "",
   },
   dispatch: () => {},
}

const CodeContext = createContext<typeof initialState>(initialState)

const reducer = (state: typeof initialState, action: CodeContextAction) => {
   switch (action.type) {
      case "setHtml":
         return { ...state, html: action.payload }
      case "setCss":
         return { ...state, css: action.payload }
      case "setJs":
         return { ...state, js: action.payload }
      default:
         return state
   }
}

export const CodeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
   const [state, dispatch] = useReducer(reducer, initialState)

   return <CodeContext.Provider value={{ ...state, dispatch }}>{children}</CodeContext.Provider>
}

// custom hook to use the code context
export const useCode = () => {
   const context = useContext(CodeContext)
   if (context === undefined) {
      throw new Error("useCode must be used within a CodeProvider")
   }
   return context
}
