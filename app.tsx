import React from "react"
import { render } from "react-dom"
import DemoComponent from "./demo-comp"

export function App() {
  return (
    <div>
      <h1>React Conditional Rendering Demo</h1>
      <hr />
      <DemoComponent panelName="panel1" />
      <DemoComponent panelName="panel2" />
      <DemoComponent panelName="panel3" />
    </div>
  )
}

render(<App />, document.getElementById("root"))
