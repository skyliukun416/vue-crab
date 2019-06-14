<template>
  <div class="x-bar">
    <div :id="id"  :option="option"></div>
  </div>
</template>
<script>
import HighCharts from 'highcharts'
import Highmaps from 'highcharts/modules/map'
import { setInterval } from 'timers';
 Highmaps(HighCharts);
export default {
  // 验证类型
  props: {
    id: {
      type: String
    },
    option: {
      type: Object
    }
  },
  watch: {
    option () {
         HighCharts.Map(this.id,this.option);
    }
},
mounted(){
  //console.log(HighCharts);
  
   let hm = HighCharts.mapChart(this.id,this.option);

   if(this.id=="singaporemap"){
     var count = 1;
      hm.series[0].setData([330,330,330,330])  
            hm.title.update({text:"十二月礼盒销售情况"}) 
     
      /*setInterval(()=>{
        
          if(count==4){
            hm.series[0].setData([330,330,330,330])  
            hm.title.update({text:"九月礼盒销售情况"})        
          }
          if(count == 1){
            hm.series[0].setData([330,330,330,330])          
            hm.title.update({text:"十月礼盒销售情况"}) 
          }
          if(count == 2){
            hm.series[0].setData([330,330,330,330])         
            hm.title.update({text:"十一月礼盒销售情况"}) 
          }
          if(count == 3){
            hm.series[0].setData([330,330,330,330])  
            hm.title.update({text:"十二月礼盒销售情况"})   
          }
          if(count==5){
            count = 0
          }
          count++
        
      },6000)*/
      
   }
   
}


}
</script>

<style scoped>


</style>