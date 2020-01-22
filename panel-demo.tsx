import React, { Component } from "react"

export interface IProps {
  panelName: string
}

export interface IPanelProps {
  txt?: string
}

export class Panel1 extends Component<IPanelProps, {}> {
  render() {
    let { txt } = this.props
    return <div className="panel1">{txt || "Panel1"}</div>
  }
}

export class Panel2 extends Component<IPanelProps, {}> {
  render() {
    let { txt } = this.props
    return <div className="panel2">{txt || "Panel2"}</div>
  }
}

export class Panel3 extends Component<IPanelProps, {}> {
  render() {
    let { txt } = this.props
    return <div className="panel3">{txt || "Panel3"}</div>
  }
}

export class PanelDemo1 extends Component<IProps, {}> {
  render() {
    let { panelName } = this.props

    return <div>{panelName === "panel1" ? <Panel1 /> : <Panel2 />}</div>
  }
}

export class PanelDemo2 extends Component<IProps, {}> {
  selectPanel = (panelName: string) => {
    switch (panelName) {
      case "panel1":
        return <Panel1 />

      case "panel2":
        return <Panel2 />
        break

      default:
        return <div>Unknown!</div>
    }
  }

  render() {
    let { panelName } = this.props
    return this.selectPanel(panelName)
  }
}

export class PanelDemo3 extends Component<IProps, {}> {
  selectPanel = (panelName: string) => {
    const map: { [key: string]: any } = {
      panel1: <Panel1 />,
      panel2: <Panel2 />,
      panel3: <Panel3 />,
    }
    return map[panelName] || <Panel1 /> // Panel1 is our default panel!
  }

  render() {
    let { panelName } = this.props
    return this.selectPanel(panelName)
  }
}

export enum StatusKey {
  SUCCESS = "success",
  WARNING = "warning",
  ERROR = "error",
}

export interface IInfoPanelProps {
  statusKey: StatusKey
  info: string
}

export class InfoPanel extends Component<IInfoPanelProps, {}> {
  selectPanel = (statusKey: StatusKey, info: string) => {
    const defaultPanel = <Panel3 txt="Unknown" /> // Panel3 is default panel!
    const map: { [key: string]: any } = {
      success: <Panel1 txt={info} />,
      warning: <Panel2 txt={info} />,
      error: <Panel3 txt={info} />,
    }
    return map[statusKey] || defaultPanel
  }

  render() {
    let { statusKey, info } = this.props
    return this.selectPanel(statusKey, info)
  }
}
