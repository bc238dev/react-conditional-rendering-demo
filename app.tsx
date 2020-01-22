import React from "react"
import { render } from "react-dom"
import DemoComponent from "./demo-comp"
import { PanelDemo1, PanelDemo2, PanelDemo3, InfoPanel, StatusKey } from "./panel-demo"

export function App() {
  return (
    <div>
      <h1>React Conditional Rendering Demo</h1>
      <hr />
      <DemoComponent panelName="panel1" />
      <DemoComponent panelName="panel2" />
      <DemoComponent panelName="panel3" />
      <hr />
      <h3>Panels:</h3>
      <PanelDemo1 panelName="panel1" />
      <PanelDemo2 panelName="panel2" />
      <PanelDemo3 panelName="panel3" />
      <hr />
      Info Panel:
      <InfoPanel statusKey={StatusKey.SUCCESS} info="Bravo, great job." />
      <InfoPanel statusKey={StatusKey.WARNING} info="Something is not right..." />
      <InfoPanel statusKey={StatusKey.ERROR} info="Opps. There is a problem!" />
    </div>
  )
}

render(<App />, document.getElementById("root"))
