import React from 'react';
import '../css/dtc.scss';

class DTC extends React.Component {

    render() {
        return (
            <div id="container-DTC">

                <div id="cards-DTC">
                    <div id="DTC-title" >
                        <img src="../img/bat.png" alt="" id="DTC-icon"/>
                     P2503
                    </div>
                    <div id="DTC-txt"> 
                    Charging System Voltage Low <br></br>
                    Possible Causes:
                    <ul>
                        <li>Faulty Generator (Alternator)</li>
                        <li>Generator circuit poor electrical connection</li>
                        <li>Generator harness is open or shorted</li>
                    </ul>
                    
                    </div>
                </div>

                <div id="cards-DTC">
                    <div id="DTC-title" >
                        <img src="../img/abs.png" alt="" id="DTC-icon" />
                        C1095
                    </div>
                    <div id="DTC-txt">
                        ABS Hydraulic Pump Motor Circuit Failure
                    </div>
                </div>

                <div id="cards-DTC">
                    <div id="DTC-title" >
                        <img src="../img/airbag.png" alt="" id="DTC-icon" />
                        B0050
                    </div>
                    <div id="DTC-txt">
                        Driver Seatbelt Sensor
                    </div>
                </div>
                <div id="cards-DTC">
                    <div id="DTC-title" >
                        <img src="../img/temp.png" alt="" id="DTC-icon" />
                        P2503
                    </div>
                    <div id="DTC-txt">
                        Charging System Voltage Low
                    </div>
                </div>
                <div id="cards-DTC">
                    <div id="DTC-title" >
                        <img src="../img/lock1.png" alt="" id="DTC-icon" />
                        P2503
                    </div>
                    <div id="DTC-txt">
                        Charging System Voltage Low
                    </div>
                </div>
                <div id="cards-DTC">
                    <div id="DTC-title" >
                        <img src="../img/pgr_mnt1.png" alt="" id="DTC-icon" />
                        P2503
                    </div>
                    <div id="DTC-txt">
                        Charging System Voltage Low
                    </div>
                </div>

            </div>
        );
    };
}

export default DTC;