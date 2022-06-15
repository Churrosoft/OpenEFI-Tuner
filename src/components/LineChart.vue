<template>
  <div ref="resizeRef" id="svgRef">
    <svg ref="svgRef">
      <g class="x-axis" />
      <g class="y-axis" />
    </svg>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue';
import {
  select,
  line,
  scaleLinear,
  axisBottom,
  axisLeft,
  drag,
  extent,
  NumberValue,
  timeParse,
  scaleTime,
  csv,
} from 'd3';

export default {
  name: 'ResponsiveLineChart',
  props: ['data'],
  setup(props: any) {
    const svgRef = ref<Element | null>(null);

    onMounted(() => {
      const margin = { top: 10, right: 30, bottom: 30, left: 60 },
        width = 460 - margin.left - margin.right,
        height = 400 - margin.top - margin.bottom;

      const svg = select(svgRef.value)
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left},${margin.top})`);

      let i = 0;

      void csv(
        'https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/connectedscatter.csv',

        function (d) {
          i++;
          return {
            date: timeParse('%Y-%m-%d')(d.date as string) ?? new Date(),
            value: d.value ?? '0',
            ref: i - 1,
          };
        }
      ).then(function (data) {
        const customX = scaleTime()
          .domain(extent(data, (d) => d.date) as Array<Date>)
          .range([0, width]);

        svg.append('g').attr('transform', `translate(0, ${height})`).call(axisBottom(customX));

        const customY = scaleLinear().domain([8000, 9200]).range([height, 0]);

        svg.append('g').call(axisLeft(customY));

        customX({ date: new Date(), value: '12' }.date);

        interface FuckD3 {
          date: Date;
          value: string;
        }

        const myLine = line()
          .x((d) => customX((d as unknown as FuckD3).date))
          .y((d) => customY((d as unknown as FuckD3).value as unknown as NumberValue));

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
          select(this)
            .attr('cx', ((d as ICordinate).x = (event as ICordinate).x))
            .attr('cy', ((d as ICordinate).y = (event as ICordinate).y));
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        function dragended(this: any, _event: unknown, d: any) {
          select(this).attr('stroke', null);
          select(this).raise().attr('fill', '#69b3a2');
          console.log((d as ICordinate).x, (d as ICordinate).y, d);
        }

        let dragHandler = drag().on('start', dragstarted).on('drag', dragged).on('end', dragended);

        // Add the points
        svg
          .append('g')
          .selectAll('dot')
          .data(data)
          .join('circle')
          .attr('cx', (d) => customX(d.date))
          .attr('cy', (d) => customY(d.value as unknown as NumberValue))
          .attr('r', 5)
          .attr('fill', '#69b3a2')
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .call(dragHandler as any);

        svg
          .append('path')
          .datum(data)
          .attr('fill', 'none')
          .attr('stroke', '#69b3a2')
          .attr('stroke-width', 1.5)
          .attr('d', myLine as unknown as string);

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        // svg.selectAll('path').call(dragHanlder as any);
      });
    });

    return { svgRef };
  },
};
</script>
