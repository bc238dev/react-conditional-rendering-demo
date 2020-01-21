import React, { Component } from "react"
import "./main.scss"

export interface IProps {
  panelName?: string
}

export interface IState {
  visiblePanelName?: string
}

export default class DemoComponent extends Component<IProps, IState> {
  state = { visiblePanelName: undefined }

  panel1 = (
    <div className="panel1">
      Panel1
      <hr />
      <button onClick={e => this.setState({ visiblePanelName: "panel1" })}>Panel1</button>
      <button onClick={e => this.setState({ visiblePanelName: "panel2" })}>Panel2</button>
      <button onClick={e => this.setState({ visiblePanelName: "panel3" })}>Panel3</button>
    </div>
  )
  panel2 = (
    <div className="panel2">
      Panel2
      <hr />
      <button onClick={e => this.setState({ visiblePanelName: "panel1" })}>Panel1</button>
      <button onClick={e => this.setState({ visiblePanelName: "panel2" })}>Panel2</button>
      <button onClick={e => this.setState({ visiblePanelName: "panel3" })}>Panel3</button>
    </div>
  )
  panel3 = (
    <div className="panel3">
      Panel3
      <hr />
      <button onClick={e => this.setState({ visiblePanelName: "panel1" })}>Panel1</button>
      <button onClick={e => this.setState({ visiblePanelName: "panel2" })}>Panel2</button>
      <button onClick={e => this.setState({ visiblePanelName: "panel3" })}>Panel3</button>
    </div>
  )

  panelMap: { [key: string]: any } = {
    panel1: this.panel1,
    panel2: this.panel2,
    panel3: this.panel3,
  }

  render() {
    let { panelName } = this.props
    let { visiblePanelName } = this.state
    let name = visiblePanelName || panelName || "panel1"
    let selectedPanel = this.panelMap[name] || this.panel1

    return selectedPanel
  }
}
