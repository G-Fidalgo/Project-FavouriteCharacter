<template>
  <div id="app">
    <div class="navbarContainer">
      <NavBar />
    </div>
    <div class="cardsContainer">
      <VotedList />
    </div>
    <div class="chartContainer">
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
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  margin: 0;
  padding: 0;

}
.navbarContainer{
    background-color:#536878; 
    width: 100vw;
    color: aliceblue;
  }
.chartContainer{
  background-color:#536878;
  color: aliceblue;
}
.cardsContainer{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
