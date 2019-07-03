<template>
    <div style="width:100%">
      <location v-show="show"></location>
      <dashboard v-show="!show"></dashboard>
    
   

    </div>
</template>

<script>
import location from './location.vue'
import dashboard from './dashboardFarm.vue'
import { setInterval } from 'timers';
export default {

  data () {
    return {
      show:true,
      switch:true
    }
  },

    sockets: {
   connect(){
     console.log("Client from crab demo page connecting server....");

   },
   switchAction(data){
     console.log("Data from server:" + data);

     this.switch= data;
   }
}, 
  mounted(){
    this.intev = setInterval(()=>{
      if(this.switch){
        this.show = !this.show
      }
     
    },10000)

  },
  components:{
    location,
    dashboard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
