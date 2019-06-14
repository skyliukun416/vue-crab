<template>
  <div class="x-bar">
    <div :id="id"  :option="option"></div>
  </div>
</template>
<script>
import HighCharts from 'highcharts'
import { setInterval } from 'timers';
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
         HighCharts.chart(this.id,this.option);
    }
},
  mounted() {
    let theme = {colors:"#2b908f #90ee7e #f45b5b #7798BF #aaeeee #ff0066 #eeaaee #55BF3B #DF5353 #7798BF #aaeeee".split(" "),
    chart:{
      backgroundColor:{linearGradient:{x1:0,y1:0,x2:1,y2:1},stops:[[0,"#2a2a2b"],[1,"#3e3e40"]]},
      style:{fontFamily:"'Unica One', sans-serif"},
      plotBorderColor:"#606063"},
      title:{style:{color:"#E0E0E3",textTransform:"",fontSize:"16px"}},
      subtitle:{style:{color:"#E0E0E3",textTransform:""}},
      xAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},
      lineColor:"#707073",
      minorGridLineColor:"#505053",
      tickColor:"#707073",
      title:{style:{color:"#A0A0A3"}}},
      yAxis:{gridLineColor:"#707073",labels:{style:{color:"#E0E0E3"}},
      lineColor:"#707073",
      minorGridLineColor:"#505053",
      tickColor:"#707073",
      tickWidth:1,
      title:{style:{color:"#A0A0A3"}}},
      tooltip:{backgroundColor:"rgba(0, 0, 0, 0.85)",
      style:{color:"#F0F0F0"}},
      plotOptions:{series:{dataLabels:{color:"#B0B0B3"},
      marker:{lineColor:"#333"}},
      boxplot:{fillColor:"#505053"},
      candlestick:{lineColor:"white"},
      errorbar:{color:"white"}},
      legend:{itemStyle:{color:"#E0E0E3"},
      itemHoverStyle:{color:"#FFF"},
      itemHiddenStyle:{color:"#606063"}},
      credits:{style:{color:"#666"}},
      labels:{style:{color:"#707073"}},
      drilldown:{activeAxisLabelStyle:{color:"#F0F0F3"},
      activeDataLabelStyle:{color:"#F0F0F3"}},
      navigation:{buttonOptions:{symbolStroke:"#DDDDDD",
      theme:{fill:"#505053"}}},
      rangeSelector:{buttonTheme:{fill:"#505053",
      stroke:"#000000",style:{color:"#CCC"},
      states:{hover:{fill:"#707073",stroke:"#000000",
      style:{color:"white"}},
      select:{fill:"#000003",
      stroke:"#000000",
      style:{color:"white"}}}},
      inputBoxBorderColor:"#505053",
      inputStyle:{backgroundColor:"#333",
      color:"silver"},labelStyle:{color:"silver"}},
      navigator:{handles:{backgroundColor:"#666",borderColor:"#AAA"},
      outlineColor:"#CCC",maskFill:"rgba(255,255,255,0.1)",
      series:{color:"#7798BF",lineColor:"#A6C7ED"},xAxis:{gridLineColor:"#505053"}},scrollbar:{barBackgroundColor:"#808083",barBorderColor:"#808083",buttonArrowColor:"#CCC",buttonBackgroundColor:"#606063",
      buttonBorderColor:"#606063",
      rifleColor:"#FFF",
      trackBackgroundColor:"#404043",
      trackBorderColor:"#404043"},
      legendBackgroundColor:"rgba(0, 0, 0, 0.5)",
      background2:"#505053",
      dataLabelsColor:"#B0B0B3",
      textColor:"#C0C0C0",
      contrastTextColor:"#F0F0F3",
      maskColor:"rgba(255,255,255,0.3)"
          };

    // 使主题配置生效
    HighCharts.setOptions(theme);
    let hc = HighCharts.chart(this.id,this.option)

    //return chart 
    if(this.id=="return"){
      
      setInterval(()=>{
        let random = Math.floor((Math.random()*10)+1);
        let a1 = [1,3,5,2].map(i=>{return i+random})
        let a2 = [1,2,1,4].map(i=>{return i+random})
        
        hc.series[0].setData(a1)
        hc.series[1].setData(a2)
      },10000)

    }
    //orders chart
    if(this.id=="orders"){
      var count = 1;
      setInterval(()=>{
        if(count==4){
          hc.series[0].setData([220])
          hc.series[1].setData([450])
          hc.series[2].setData([310])
          hc.series[3].setData([500])
          
        }
        if(count == 1){
          hc.series[0].setData([220,320])
          hc.series[1].setData([450,550])
          hc.series[2].setData([310,600])
          hc.series[3].setData([500,650])         
        }
        if(count == 2){
          hc.series[0].setData([220,320,400])
          hc.series[1].setData([450,550,670])
          hc.series[2].setData([310,600,500])
          hc.series[3].setData([500,650,660])         
        }
        if(count == 3){
          hc.series[0].setData([220,320,400,600])
          hc.series[1].setData([450,550,670,500])
          hc.series[2].setData([310,600,500,700])
          hc.series[3].setData([500,650,660,300])  
        }
        if(count==5){
          count = 0
        }
        count++
        
      },8000)
    }
    // sales pie 

      if(this.id=="sales"){
        var count = 1;
      setInterval(()=>{
        
        if(count==4){
          hc.series[0].setData([40.1, 23.6, 18.3, 7.6, 5, 5.1, 2, 1.1])  
          hc.title.update({text:"九月礼盒销售情况"})        
        }
        if(count == 1){
          hc.series[0].setData([42.1, 32.6, 11.3, 7.6, 5, 5.1, 2, 1.1])          
          hc.title.update({text:"十月礼盒销售情况"}) 
        }
        if(count == 2){
          hc.series[0].setData([33.1, 23.6, 18.3, 17.6, 13, 15.1, 10, 10.1])         
          hc.title.update({text:"十一月礼盒销售情况"}) 
        }
        if(count == 3){
          hc.series[0].setData([39.1, 21.6, 11.3, 11.6, 15, 9.1, 8.2, 6.1])  
          hc.title.update({text:"十二月礼盒销售情况"})   
        }
        if(count==5){
          count = 0
        }
        count++
        
      },6000)
      }
      
  }
}
</script>

<style scoped>


</style>