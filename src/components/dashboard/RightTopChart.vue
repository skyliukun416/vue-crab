
<template>
  <div>
    <div class="rightTop" @click="editRightTop()">
      <highcharts id="orders" class="linechart" :option="orders" ref="orders"></highcharts>
    </div>

    <!-- Right Top -->

    <el-drawer
      :visible.sync="visible"
      direction="ltr"
      custom-class="demo-drawer"
      ref="rightTop-drawer"
    >
      <div class="demo-drawer__content">
        <el-form>
          <el-form-item label="Title" :label-width="formLabelWidth">
            <el-input v-model="title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Item1" :label-width="formLabelWidth">
            <el-input v-model="item1.name" width="50%" autocomplete="off"></el-input>
            
          </el-form-item>
          <el-form-item label="Item2" :label-width="formLabelWidth">
            <el-input v-model="item2.name" width="50%" autocomplete="off"></el-input>
            
          </el-form-item>
          <el-form-item label="Item3" :label-width="formLabelWidth">
            <el-input v-model="item3.name" width="50%" autocomplete="off"></el-input>
            
          </el-form-item>
          <el-form-item label="Item4" :label-width="formLabelWidth">
            <el-input v-model="item4.name" width="50%" autocomplete="off"></el-input>
            
          </el-form-item>
          <el-form-item label="Range" :label-width="formLabelWidth">
            <el-input width="50%" v-model="min" autocomplete="off" placeholder="min"></el-input>-
            <el-input width="50%" v-model="max" autocomplete="off" placeholder="max"></el-input>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
         
          <el-button plain size="mini" type="warning" @click="submit()">OK</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
// 导入chart组件
//var myvue = {};
import Highcharts from "@/components/dashboard/barChart";

import { setInterval } from "timers";

export default {
  name: "leftChart",
  data() {
    return {
      formLabelWidth: "50px",
      title: "退货/损坏",
      visible: false,
      min:400,
      max:600,
      item1: {
        name: "供应商订单量",
        v1: "7",
        v2: "5",
        v3: "11",
        v4: "1"
      },
      item2: {
        name: "蟹都汇",
        v1: "9",
        v2: "1",
        v3: "13",
        v4: "4"
      },
      item3:{
        name:"王氏水产"
      },
      item4:{
        name:"上海允卿商贸"
      },
      orders: {
        chart: {
          type: "line",
          width: 905,
          height: 320,
          spacingTop: 20
        },
        credits: {
          enabled: false // 禁用版权信息
        },
        title: {
          text: "供应商订单量"
        },
        subtitle: {
          text: ""
        },
        xAxis: {
          categories: ["九月", "十月", "十一月", "十二月"]
        },
        yAxis: {
          title: {
            text: "Orders"
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
           {},{},{},{}
        ]
       
      },


    };
  },

  methods: {
    getRndInteger(min, max) {
      min = min*1
      max = max*1
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    editRightTop() {
      if (this.$parent.editSwitch) {
        this.visible = true;
      }
    },

    submit(){
      let hc = this.$refs.orders.chart
      this.visible = false
      hc.setTitle( {text: this.title})
      hc.update({
        series: [
          { name: this.item1.name, data: [220] },
          { name: this.item2.name, data: [450] },
          { name: this.item3.name, data: [310] },
          { name: this.item4.name, data: [500] }
        ]
      })
    }
  },
  mounted() {

    let hc = this.$refs.orders.chart
    hc.setTitle( {text: "供应商订单量"})

    hc.update({
        series: [
          { name: "苏蟹阁", data: [this.getRndInteger(this.min,this.max)] },
          { name: "蟹都汇", data: [this.getRndInteger(this.min,this.max)] },
          { name: "王氏水产", data: [this.getRndInteger(this.min,this.max)] },
          { name: "上海允卿商贸", data: [this.getRndInteger(this.min,this.max)] }
        ]
      })

    var count = 1;
    setInterval(()=>{
      let that = this
      if(hc.series[0].points.length==4){
       
        hc.series[0].setData([that.getRndInteger(that.min,that.max)])
        hc.series[1].setData([that.getRndInteger(that.min,that.max)])
        hc.series[2].setData([that.getRndInteger(that.min,that.max)])
        hc.series[3].setData([that.getRndInteger(that.min,that.max)])
        
      }
      else if(hc.series[0].points.length == 1){
 
        hc.series[0].setData([that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max)])
        hc.series[1].setData([that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max)])
        hc.series[2].setData([that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max)])
        hc.series[3].setData([that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max)])         
      }
      else if(hc.series[0].points.length == 2){
       
        hc.series[0].setData([that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max)])
        hc.series[1].setData([that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max)])
        hc.series[2].setData([that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max)])
        hc.series[3].setData([that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max)])         
      }
      else if(hc.series[0].points.length == 3){
      
        hc.series[0].setData([that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max)])
        hc.series[1].setData([that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max)])
        hc.series[2].setData([that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max)])
        hc.series[3].setData([that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max),that.getRndInteger(that.min,that.max)])  
      }

      
    },10000)

  },
  components: {
    Highcharts
  }
};
</script>
<style scoped>
#db {
  width: 100%;
  min-height: 900px;
  /*height:725px;*/
  background-color: #3a3a3c;
}

.content {
  display: flex;
  justify-content: space-between;
}
#nav {
  width: 100%;
  height: 65px;
  background-color: #2d2d2e;
  color: #e0e0e3;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.left {
  display: flex;
  width: 100%;
  margin: 10px;
  color: #e0e0e3;

  flex-direction: column;
}
.logo {
  margin-left: 17px;
  height: 35px;
}

i {
  margin-right: 10px;
  font-size: 24px;
}

.rightTop,
.rightBottom {
  display: flex;
}

.linechart {
  margin: 10px;
}

.piechart {
  margin: 5px;
}

.cards {
  display: flex;
  justify-content: space-around;
}

.tit {
  height: 50px;
  line-height: 50px;

  border-bottom: 1px solid;
}

.num {
  height: 50px;
  line-height: 50px;
}

.card {
  background-color: #2d2d2e;
  width: 31%;
  height: 100px;
  cursor: pointer;
}

.left-chart,
.rightTop,
.rightBottomLeft,
.rightBottomRight {
  cursor: pointer;
  clear: both;
}
.transactions {
  width: 100%;
  min-height: 190px;
  text-align: left;
  padding: 10px;
}

.death {
}

.el-drawer__body > * {
  padding: 3%;
}

.el-input {
  width: 36%;
  margin-right: 10px;
}

.v {
  width: 8% !important;
  margin-right: 20px;
  color: white;
}
</style>

