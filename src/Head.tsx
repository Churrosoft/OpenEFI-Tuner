import React from 'react';
import './css/layout.scss';

interface Props2 {
    Init: any;
    GetVer: any;
    isConected: any;
}

class Head extends React.Component<Props2>{
    readonly state = {
        Ver: '0'
    }
    constructor(props: Props2) {
        super(props);
        this.state = {
            Ver: '0'
        };
    }

    preclick= () =>{
        this.props.Init();
        setTimeout(this.setInf, 6000);
    }
    setInf = () =>{
        this.setState({ Ver: this.props.GetVer() });
    }
    render() {
        return (
            <div id="head">
                <div id="head-titulo">
                    <h1>OpenEFI || Tunner</h1>
                    <p id="head-inf"> </p>
                </div>
                <div id="head-inf">
                    <button onClick={this.preclick}>CONECTAMEEE</button>
                    <p>Version: {this.state.Ver}</p>
                </div>
            </div>
        );
    };
}

/* const App: React.FC = () => {

} */
export default Head;
