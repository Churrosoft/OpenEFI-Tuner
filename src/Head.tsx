import React from "react";
import "./css/layout.scss";

interface Props2 {
  Init: any;
  GetVer: any;
  isConected: any;
}

class Head extends React.Component<Props2> {
  readonly state = {
    Ver: "0",
    state: false
  };
  constructor(props: Props2) {
    super(props);
    this.state = {
      Ver: "0",
      state: false
    };
  }

  preclick = () => {
    this.props.Init();
    setTimeout(this.setInf, 4500);
  };
  setInf = () => {
    this.setState({ Ver: this.props.GetVer("inf") });
    this.setState({ state: this.props.isConected() });
    setTimeout(this.setInf, 4500);
  };
  render() {
    return (
      <div id="head">
        <div id="head-titulo">
          <h1>OpenEFI || Tunner</h1>
          <p id="head-inf"> </p>
        </div>
        {
        !this.state.state ? (
          <div id="head-inf">
            <button onClick={this.preclick}>CONECTAR</button>
            <p>Version: {this.state.Ver}</p>
          </div>
        ) : (
          <div id="head-inf">
            <button onClick={this.preclick}>DESCONECTAR</button>
            <p>Version: {this.state.Ver}</p>
          </div>
        )}
      </div>
    );
  }
}

export default Head;
