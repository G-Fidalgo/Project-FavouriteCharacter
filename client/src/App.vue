<template>
  <div id="app">
    <div>
      <NavBar />
    </div>
    <div>
      <VotedList />
    </div>
    <div>
      <VotesChart />  
    </div>    
  </div>

</template>

<script>
import NavBar from './components/NavBar.vue'
import VotedList from './components/VotedList.vue'
import VotesChart from './components/VotesChart.vue'


export default {
  name: 'app',
  // mounted(){
  //   this.$store.dispatch('GetLocation')
  // },
  components: {
    NavBar,
    VotedList,
    VotesChart,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
