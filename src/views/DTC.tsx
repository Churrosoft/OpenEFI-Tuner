import React from 'react';
import '../css/dtc.scss';

interface DTCProps{
    CODE: string,
    TXT: any
}

let test = 
<div>
<p>  
    Charging System Voltage Low <br></br>
    Possible Causes:</p>
 <ul>
    <li>Faulty Generator (Alternator)</li>
    <li>Generator circuit poor electrical connection</li>
    <li>Generator harness is open or shorted</li>
 </ul></div>;

class DTCItem extends React.Component <DTCProps>{

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: DTCProps){
        super(props);
    }

    render(){
        return(
            <div id="cards-DTC">
                    
                <div id="DTC-title" >
                    <img src="../img/bat.png" alt="" id="DTC-icon"/>
                    {this.props.CODE}
                </div>
                <div id="DTC-txt"> 
                   {this.props.TXT}
                </div>
            </div>
        );
    }
}

class DTC extends React.Component {

    render() {
        return (
          <div id="container-DTC">
            <DTCItem CODE={"F2312"} TXT={test} />

            <div id="cards-DTC">
              <div id="DTC-title">
                <img src="../img/abs.png" alt="" id="DTC-icon" />
                C1095
              </div>
              <div id="DTC-txt">ABS Hydraulic Pump Motor Circuit Failure</div>
            </div>

            <div id="cards-DTC">
              <div id="DTC-title">
                <img src="../img/airbag.png" alt="" id="DTC-icon" />
                B0050
              </div>
              <div id="DTC-txt">Driver Seatbelt Sensor</div>
            </div>
            <div id="cards-DTC">
              <div id="DTC-title">
                <img src="../img/temp.png" alt="" id="DTC-icon" />
                P0118
              </div>
              <div id="DTC-txt">
                high voltage input from the Coolant Temperature Circuit
              </div>
            </div>
            <div id="cards-DTC">
              <div id="DTC-title">
                <img src="../img/lock1.png" alt="" id="DTC-icon" />
                ----
              </div>
              <div id="DTC-txt">***</div>
            </div>
            <div id="cards-DTC">
              <div id="DTC-title">
                <img src="../img/pgr_mnt1.png" alt="" id="DTC-icon" />
                ----
              </div>
              <div id="DTC-txt">****</div>
            </div>
          </div>
        );
    };
}

export default DTC;