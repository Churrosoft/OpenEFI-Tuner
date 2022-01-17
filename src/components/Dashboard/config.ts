import { RadialGaugeOptions } from 'canvas-gauges';

export const RPMGaugeConfig: RadialGaugeOptions = {
  renderTo: 'canvas-id',
  width: 400,
  height: 400,
  units: '',
  title: 'RPM',
  minValue: 0,
  maxValue: 8500,
  majorTicks: [0,750,1000,1500,3000,4000,4500,5000,6000,7000,8000],
  minorTicks: 2,
  strokeTicks: true,
  highlights: [
   /*  {
      from: -15,
      to: 0,
      color: 'rgba(0,0, 255, .3)',
    },
    {
      from: 0,
      to: 50,
      color: 'rgba(255, 0, 0, .3)',
    }, */
  ],
  ticksAngle: 225,
  startAngle: 67.5,
  colorMajorTicks: '#ddd',
  colorMinorTicks: '#ddd',
  colorTitle: '#eee',
  colorUnits: '#ccc',
  colorNumbers: '#eee',
  colorPlate: '#222',
  borderShadowWidth: 0,
  borders: true,
  needleType: 'arrow',
  needleWidth: 2,
  needleCircleSize: 7,
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 100,
  animationRule: 'linear',
  colorBorderOuter: '#333',
  colorBorderOuterEnd: '#111',
  colorBorderMiddle: '#222',
  colorBorderMiddleEnd: '#111',
  colorBorderInner: '#111',
  colorBorderInnerEnd: '#333',
  colorNeedleShadowDown: '#333',
  colorNeedleCircleOuter: '#333',
  colorNeedleCircleOuterEnd: '#111',
  colorNeedleCircleInner: '#111',
  colorNeedleCircleInnerEnd: '#222',
  valueBoxBorderRadius: 0,
  colorValueBoxRect: '#222',
  colorValueBoxRectEnd: '#333',
};
