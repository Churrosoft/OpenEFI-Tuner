<script lang="ts" setup>
/* eslint-disable @typescript-eslint/no-unused-vars */

import {onMounted, ref} from 'vue';
import {
  select,
  line,
  scaleLinear,
  axisBottom,
  axisLeft,
  drag,
  extent,
  NumberValue,
  max,
  EnterElement,
} from 'd3';

interface LineChartProps {
  size?: { width: number; height: number };
  dataKeyA: string;
  dataKeyB: string;
  onUpdate?: () => void;
  data: Array<{ [key: string]: number }>;
  margins?: {
    x: Array<number>;
    y: Array<number>;
  };
  axisLabel?: {
    x: string;
    y: string;
  };
}

type LineChartData = LineChartProps['data'] & { LineChartIndex: number };

const svgRef = ref<Element | null>(null);
const props = defineProps<LineChartProps>();

onMounted((iterable: Iterable<string>) => {
  const {dataKeyA, dataKeyB, size, data} = props;

  const margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = size?.width ?? 460 - margin.left - margin.right,
    height = size?.height ?? 400 - margin.top - margin.bottom;

  const svg = select(svgRef.value)
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

  let dataWithKey = data.map((d, i) => {
    return {...d, LineChartIndex: i} as LineChartData;
  });

  const dereferencedData = JSON.parse(JSON.stringify(dataWithKey));

  const updateData = (key: number, x: number, y: number) => {
    dataWithKey = dataWithKey.map((el) => {
      if (el.LineChartIndex === key) {
        el[dataKeyA as unknown as number] = x as unknown as {
          [key: string]: number;
        };
        el[dataKeyB as unknown as number] = y as unknown as {
          [key: string]: number;
        };
      }
      return el;
    });
  };

  extent(dataWithKey, (d) => d['d' as unknown as number] as unknown as number);

  // TODO: prop for max/min/extent
  const customX = scaleLinear()
    .domain(
      props.margins?.x ?? [
        0,
        max(
          dataWithKey,
          (d) => d[dataKeyA as unknown as number] as unknown as number
        ) as number,
      ]
    )
    .range([0, width]);

  svg
    .append('g')
    .attr('transform', `translate(0, ${height})`)
    .call(axisBottom(customX));

  const customY = scaleLinear()
    .domain(
      props.margins?.y ?? [
        max(dataWithKey, (d) => d[dataKeyB as unknown as number] as unknown as number) as number,
        0,
      ]
    )
    .range([0, height]);

  /*   const customYLine = scaleLinear()
    .domain(
      extent(
        dataWithKey,
        (d) => d[dataKeyB as unknown as number] as unknown as number
      ) as Iterable<NumberValue>
    )
    .range([height, 0]);
 */
  svg.append('g').call(axisLeft(customY));

  const myLine = line()
    .x((d) => customX(d[dataKeyA as unknown as number]))
    .y((d) => customY(d[dataKeyB as unknown as number]));

  interface ICordinate {
    x: number;
    y: number;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function dragstarted(this: any) {
    select(this).raise().attr('stroke', 'white');
    select(this).raise().attr('fill', 'red');
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function dragged(this: any, event: unknown, d: unknown) {
    const ld = d as LineChartData & ICordinate;
    const levent = event as ICordinate;

    select(this)
      .attr('cx', (ld.x = levent.x))
      .attr('cy', (ld.y = levent.y));

    const newX = customX.invert(levent.x);
    const newY = customY.invert(levent.y);

    updateData(ld.LineChartIndex, newX, newY);

    svg
      .transition()
      .select('.line-g')
      .duration(0)
      .attr('d', myLine(dataWithKey as unknown));
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function dragended(this: any, _event: unknown, _d: unknown) {
    select(this).attr('stroke', null);
    select(this).raise().attr('fill', '#69b3a2');
  }

  let dragHandler = drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended);

  // Add grid
  const x = scaleLinear().range([0, width]).nice();

  const y = scaleLinear().range([height, 0]);

  const grid = (g) =>
    g
      .attr('stroke', 'currentColor')
      .attr('stroke-opacity', 0.1)
      .call((g) =>
        g
          .append('g')
          .selectAll('line')
          .data(x.ticks())
          .join('line')
          .attr('x1', (d) => 0.5 + x(d))
          .attr('x2', (d) => 0.5 + x(d))
          .attr('y1', 0 /* margin.top */)
          .attr('y2', height /* - margin.bottom */)
      )
      .call((g) =>
        g
          .append('g')
          .selectAll('line')
          .data(y.ticks())
          .join('line')
          .attr('y1', (d) => 0.5 + y(d))
          .attr('y2', (d) => 0.5 + y(d))
          .attr('x1', 0 /* margin.left */)
          .attr('x2', width /* - margin.right */)
      );
  // Add the points

  svg.append('g').call(grid);

  svg
    .append('path')
    .datum(dereferencedData)
    .attr('fill', 'none')
    .attr('stroke', '#acacac')
    .attr('stroke-width', 1.5)
    .style('stroke-dasharray', '5,5')
    .attr('d', myLine as unknown as string);

  svg
    .append('g')
    .selectAll('dot')
    .data(dereferencedData)
    .join('circle')
    .attr('cx', (d) =>
      customX(d[dataKeyA as unknown as number] as unknown as number)
    )
    .attr('cy', (d) =>
      customY(d[dataKeyB as unknown as number] as unknown as number)
    )
    .attr('r', 3)
    .attr('fill', '#acacac');

  svg
    .append('path')
    .datum(dataWithKey)
    .attr('fill', 'none')
    .attr('stroke', '#69b3a2')
    .attr('stroke-width', 1.5)
    .attr('class', 'line-g')
    .attr('d', myLine as unknown as string);

  svg
    .append('g')
    .selectAll('dot')
    .data(dataWithKey)
    .join('circle')
    .attr('cx', (d) =>
      customX(d[dataKeyA as unknown as number] as unknown as number)
    )
    .attr('cy', (d) =>
      customY(d[dataKeyB as unknown as number] as unknown as number)
    )
    .attr('r', 5)
    .attr('fill', '#69b3a2')
    .call(dragHandler);

  props.axisLabel &&
  svg
    .append('text')
    .style('text-anchor', 'end')
    .attr('x', width - 4)
    .attr('y', height - 8)
    .attr('fill', 'currentColor')
    .attr('class', 'text-h6')
    .text(props.axisLabel.x);

  props.axisLabel &&
  svg
    .append('text')
    //.attr('transform', 'rotate(-90)') // TODO:Add prop for rotate Y Label
    .attr('x', 5)
    .attr('y', 4)
    .attr('dy', '1em')
    .attr('fill', 'currentColor')
    .attr('class', 'text-h6')
    .style('text-anchor', 'start')
    .text(props.axisLabel.y);
});
</script>

<template>
  <div ref="resizeRef" id="svgRef">
    <svg ref="svgRef">
      <g class="x-axis"/>
      <g class="y-axis"/>
    </svg>
  </div>
</template>
