import React from "react";
import "./css/layout.scss";
// @ts-ignore
import { RadialGauge } from "./react-canvas-gauges/dist";
import mystore from "./redux-serial";
let timer: NodeJS.Timeout;
interface Props2 {
  getTemp: Function;
  getValues: Function;
}
class Panel extends React.Component<Props2> {
  readonly state = {
    temp: 0,
    rpm: 0
  };
  constructor(props: Props2) {
    super(props);
    const tempstate = mystore.getState();
    this.state = {
      temp: 0,
      rpm: parseInt(tempstate.cmd.rpm.value)
    };
  }
  componentDidMount() {
    timer = setInterval(() => this.tick(), 1500);
   
    mystore.subscribe(() => {
      const state = mystore.getState();
      this.setState({
         rpm: parseInt(state.cmd.rpm.value),
         temp: parseInt(state.cmd.temp.value) 
        });
    });
  }
  componentWillUnmount() {
    clearInterval(timer);
  }

  tick() {
    /* this.setState({
      temp: this.props.getTemp()
    }); */
  }
  render() {
    return (
      <div id="container-2">
        <div id="cards-panel-gauge">
          <RadialGauge
            units="°C"
            title="Temperature"
            value={this.state.temp}
            minValue={0}
            maxValue={50}
            majorTicks={[
              "0",
              "5",
              "15",
              "20",
              "25",
              "30",
              "35",
              "40",
              "45",
              "50"
            ]}
            minorTicks={2}
            animation="true"
            animationDuration="600"
            data-animation="true"
          ></RadialGauge>
        </div>
        <div id="cards-panel-gauge-max">
          <RadialGauge
            units="RPM"
            value={this.state.rpm}
            minValue={250}
            maxValue={8000}
            majorTicks={[
              "500",
              "1500",
              "2000",
              "2500",
              "3000",
              "4000",
              "5000",
              "6500",
              "7000",
              "8000"
            ]}
            minorTicks={2}
            data-animation="true"
            animation="true"
            animationDuration="100"
            colorMinorTicks="rgba(255,0,0,1)"
            highlights={[
              {
                from: 4000,
                to: 6500,
                color: "rgba(200, 180, 65, .75)"
              },
              {
                from: 6500,
                to: 8000,
                color: "rgba(200, 50, 50, .75)"
              }
            ]}
          ></RadialGauge>
        </div>
      </div>
    );
  }
}

export default Panel;
