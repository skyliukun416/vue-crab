
<template>
  <div id="db">
    <div id="nav">
      <img class="logo" src="@/assets/nav/EY_Logo.png">
      <div style="display: flex;
    align-items: center;">
          <i class="el-icon-message"></i>
          <i class="el-icon-download"></i>
          <i class="el-icon-share"></i>
        
          <span style="margin-right:15px">Administrator</span>
      </div>
    </div>
  <div class="content">
  <div class="left" style="width:80%">
       <div>
         <p class="fl" style="margin-left:10px">已上链订单</p>
       </div>
       <div class="cards">
         <div class="card">
           <div class="tit">供应商</div>
           <div class="num">{{card.supplier}}</div>
         </div>
         <div class="card">
           <div class="tit">上海代理</div>
           <div class="num">{{card.agency}}</div>
         </div>
         <div class="card">
           <div class="tit">上海海关</div>
           <div class="num">{{card.custom}}</div>
         </div>
       </div>
       <div style="width:80%">
         <p class="fl" style="margin-left:10px">退货/损坏</p>
       </div>
       <div>
         <highcharts id="return" class="returnchart" :option="return1" ref="returnRef"></highcharts>
       </div>
       <div style="width:80%">
         <p class="fl" style="margin-left:10px">实时交易情况</p>
       </div>
       <div class="cards">
         <div class="transactions">
           
           <div style="font-size:14px;border-bottom:1px solid" v-for='t in transaction_data'>
             <span style="">{{t.msg}}</span>
             <span style="float:right">{{t.time}}</span>
           </div>
           
        

         </div>
       </div>
  </div>
  <div>
      <div id="bp">
      <highcharts id="orders" class="linechart" :option="orders"></highcharts>
      
    </div>
    <div id="bp">
      <highmap id="singaporemap" class="piechart" :option="map1"></highmap> 
      <highcharts id="sales" class="piechart" :option="pie2"></highcharts>
     
    </div>
  </div>

</div>
    
    
  </div>
</template>

<script>
  // 导入chart组件
  //var myvue = {};
  import Highcharts from '@/components/barChart'
  import Highmap from '@/components/highmap'
  import mapdata from '@/assets/js/sl-all'
import { setInterval } from 'timers';
  
  export default {
  name:'dashboard-Farm',
    data() {
      return {
        card:{
          supplier:300,
          agency:350,
          custom:200
        },
        data1:[{"hc-key": "sg-6400", value: 220},
        {"hc-key": "sg-6401", value: 280},
        {"hc-key": "sg-6402", value: 250},
        {"hc-key": "sg-6403", value: 130},
        {"hc-key": "sg-3595", value:120}],
    

        top1:{},
        map1:{},
        ctime:"",
        transaction_data:[],
        orders:{
          chart: {
              type: 'line',
              width:905,
              height:320,
              spacingTop:20,

          },
          credits:{
          enabled: false // 禁用版权信息
          },
          title: {
              text: '供应商订单量'
          },
          subtitle: {
              text: ''
          },
          xAxis: {
              categories: [ '九月', '十月', '十一月', '十二月']
          },
          yAxis: {
              title: {
                  text: 'Orders'
              }
          },
          plotOptions: {
              line: {
                  dataLabels: {
                      // 开启数据标签
                      enabled: true          
                  },
                  // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                  enableMouseTracking: false
              }
          },
          series: [
              {name: '苏蟹阁',data: [220]},
              {name: '蟹都汇',data: [450]},
              {name: '王氏水产',data: [310]},
              {name: '上海允卿商贸',data: [500]}]
      },
      return1:{
            chart: {
                type: 'bar',
                height:345,
                width:490, 

            },
            credits:{
                 enabled: false // 禁用版权信息
          },
            title: {
                text: ''
            },
            xAxis: {
                categories: ['苏蟹阁', '蟹都汇', '王氏水产', '上海允卿商贸']
            },
            yAxis: {
                min: 0,
                title: {
                    text: ''
                }
            },
            
            legend: {
                
                reversed: true 
            },
            plotOptions: {
                series: {
                    stacking: 'normal',
                    pointWidth: 10,
                    
                    
                },
                pointPadding:1
                
            },
            series: [{
                name: '退货',
                data: [11,7,5,1],
            }, {
                name: '死亡',
                data: [9,1,13,4],
            }]
        },

      map:{
          chart:{
            width:450,
        
            spacingTop:40,
          },
          credits:{
          enabled: false // 禁用版权信息
          },
          title : {
            text : '新加坡区域销售情况'
          },
          subtitle : {
            text : ''
          },
        
          colorAxis: {
            min: 0,
            stops: [
				[0, '#8eccca'],
				[0.5, '#478684'],
				[1, '#1b4c4b']
			]
          },
  
          series : [{
            data : this.data1,
            mapData: mapdata,
            joinBy: 'hc-key',
            name: '随机数据',
            states: {
              hover: {
                color: '#a4edba'
              }
            },
            dataLabels: {
              enabled: true,
              format: '{point.properties.name}'
            }
          }]
      },
      pie2:{
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          width:450,
          
          spacingTop:40,
        },
        title: {
              text: '九月礼盒销售情况'
          },
          subtitle: {
              text: ''
          },
        credits:{
          enabled: false // 禁用版权信息
          },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '<b>{point.name}</b>: {point.percentage:.1f} %',
              style: {
                color:  'black'
              }
            }
          }
        },
        
        series: [{
          name: 'Brands',
          colorByPoint: true,
          data: [{
            name: '188 Pack',
            y: 40.41,
          //	sliced: true,
          //	selected: true
          }, {
            name: '488 Pack',
            y: 11.84
          }, {
            name: '688 Pack',
            y: 10.85
          }, {
            name: '888 Pack',
            y: 4.67
          }, {
            name: '1088 Pack',
            y: 4.18
          }, 
          {
            name: '1288 Pack',
            y: 4.18
          }, 
          {
            name: '1688 Pack',
            y: 4.18
          }, 
          {
            name: '2888 Pack',
            y: 1.18
          },
          ]
        }]
      },
            }
          },
         
    mounted:function(){
      /*
            this.top1 = this.sales;
            this.top1.series.push({
                  name: '苏蟹阁',
                  data: [100]
                });
            
            this.top1.series.push({
                        name: '蟹都汇',
                        data: [300]
                      });
        
            this.top1.series.push({
                        name: '王氏水产',
                        data: [140]
                      });
            this.top1.series.push({
                        name: '上海允卿商贸',
                        data: [240]
                      });
            */
            this.map1 = this.map;
            this.map1.series[0].data = this.data1;

            let c1 = setInterval(()=>{
              let time = Date().split(" ");
              let rand = this.getRndInteger(-20,20);
              this.card.custom += rand
              this.transaction_data.unshift({msg:"上海海关已发货",time: time[4]})
              if(this.card.custom>1000||this.card.custom<0){
                this.card.custom = 200
              }
              if(this.transaction_data.length == 6){
                this.transaction_data.pop()
              }
            },9000)

            let c2 = setInterval(()=>{
              let time = Date().split(" ");
              let rand = this.getRndInteger(-20,20);
              this.card.supplier += rand
             this.transaction_data.unshift({msg:"供应商已发货",time: time[4]})
              if(this.card.supplier>1000||this.card.supplier<0){
                this.card.supplier = 200
              }
              if(this.transaction_data.length == 6){
                this.transaction_data.pop()
              }
            },12000)

            let c3 = setInterval(()=>{
              let time = Date().split(" ");
              let rand = this.getRndInteger(-20,20);
              this.card.agency += rand
              this.transaction_data.unshift({msg:"上海代理已发货",time: time[4]})
              if(this.card.agency>1000||this.card.agency<0){
                this.card.agency = 200
              }
              if(this.transaction_data.length == 6){
                this.transaction_data.pop()
              }
            },15000)
          

          },

  sockets: {
        /* use fake data instead */
},
  methods:{
  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

  },



          components: {
            Highcharts,
            Highmap
          }
  }
</script>
<style scoped>

#db{
  width:100%;
  /*height:725px;*/
  background-color:#3a3a3c;
}

.content{
display: flex;
justify-content: space-between;

}
#nav{
    width: 100%;
  height:45px;
  background-color:#2d2d2e;
  color: #E0E0E3;
  display:flex;
      align-items: center;
          justify-content: space-between;
         
}

.left{
  display: flex;
  width:100%;
      margin: 10px;
  color: #E0E0E3;

    flex-direction: column;
}
.logo{
  margin-left:17px;
  height:35px;
}

i{
  margin-right:10px;
   font-size:24px;
}
#bp{
  display: flex;  
}

.linechart{  
  margin:10px;
}

.piechart{  
  margin:5px;
}

.cards{
  display: flex;
  justify-content: space-around;  
}

.tit{
  height:50px;
  line-height:50px;
 
  border-bottom:1px solid;
}

.num{
  height:50px;
  line-height:50px;

  
}

.card{
  background-color: #2d2d2e;
  width:31%;  
  height:100px;
}

.transactions{
 
  width:100%;  
  min-height:190px;
  text-align: left;
  padding:10px;
}

.death{
  
}
</style>