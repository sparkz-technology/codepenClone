export type CodeContextType = {
   state: {
      html: string
      css: string
      js: string
   }
   dispatch: React.Dispatch<CodeContextAction>
}
export type CodeContextAction = {
   type: "setHtml" | "setCss" | "setJs"
   payload: string
}
