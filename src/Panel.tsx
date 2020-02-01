import React from 'react';
import './css/layout.scss';
// @ts-ignore
import { RadialGauge } from './react-canvas-gauges/dist'

interface Props2 {
  getRPM: Function;
  getTemp: Function;
}

class Panel extends React.Component <Props2>{
  readonly state ={
    temp: 0,
    rpm: 0
  }
  constructor(props: Props2) {
    super(props);
    this.state = {
      temp: 0,
      rpm: 0,
    };
  }
  componentDidMount() {
    setInterval(
      () => this.tick(),
      1500
    );
  }

  tick() {
    this.setState({
      temp: this.props.getTemp(),
      rpm: this.props.getRPM()
    });
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
                title=""
                value={this.state.rpm}
                minValue={0}
                maxValue={5000}
                majorTicks={[
                  "500",
                  "1500",
                  "2000",
                  "2500",
                  "3000",
                  "3500",
                  "4000",
                  "4500",
                  "5000"
                ]}
                minorTicks={2}
                data-animation="true"
                animation="true"
                animationDuration="600"
                colorMinorTicks='rgba(255,0,0,1)'
              ></RadialGauge>
            </div>
          </div>
    );
  };
}

/* const App: React.FC = () => {

} */
export default Panel;
