<template>
    <div class="chartContainer">
      <h1>Votes counter</h1>
      <svg width="1300" height="300" id="chart"></svg>

    </div>
</template>

<script>
import * as d3 from 'd3';
import { mapGetters } from 'vuex'

export default {
  name:'VotesChart',
  data (){
    return { }
  },

  computed: {
    ...mapGetters(['characters'])
  },
  mounted(){
      var svg = d3.select('svg');
      var width = +svg.attr('width');
      var height = +svg.attr('height');
      var data = [
        {name: 'IronMan', val: 10},
        {name: 'Punisher', val: 8},
        {name: 'Deadpool', val: 20},
        {name: 'Venom', val: 14}

     ];
    var x = d3.scaleBand()
      .rangeRound([0, width*0.5]).padding(0.05)
      .domain(data.map(d => d.name));
    var y = d3.scaleLinear()
      .rangeRound([height * 0.3 - 20, 0])
      .domain([0, d3.max(data, d => d.val)])
    function addRectsWithName(elem, name) {
      elem.selectAll('rect')
        .data(data)
        .enter()
          .append('rect')
          .attr('x', d => x(d.name))
          .attr('class', d => d.name)
          .attr('y', d =>  y(d.val))
          .attr('width', x.bandwidth())
          .attr('height', d => y.range()[0] - y(d.val))
    }

    svg
      .append('g')
      .attr('id', 'bars-style')
      .attr('transform', `translate(0, 20)`)
      .call(addRectsWithName, 'Votes');
    }
    
  
};

</script>

<style>
#bars-style .IronMan {
  fill: #ffc300
}
#bars-style .Punisher {
  fill: #465A64
}
#bars-style .Deadpool {
  fill: #571845
}
#bars-style .Venom {
  fill: #374750
}
#chart{
  padding-top: 20px;
  
}
.chartContainer{
  padding-top: 20px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;


}
</style>


