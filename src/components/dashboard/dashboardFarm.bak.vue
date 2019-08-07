
<template>
  <div id="db">
    <div id="nav">
      <img class="logo" src="@/assets/nav/EY_Logo.png">
      <div style="display: flex; align-items: center;">
        <i class="el-icon-message"></i>
        <i class="el-icon-download"></i>
        <i class="el-icon-share"></i>

        <span style="margin-right:15px">Administrator</span>
      </div>
    </div>
    <div class="content">
      <div class="left" style="width:80%">
        <div>
          <p class="fl" style="margin-left:10px">{{card.title}}</p>
        </div>
        <div class="cards" @click="editCards()">
          <div class="card">
            <div class="tit">{{card.item1name}}</div>
            <div class="num">{{card.item1value}}</div>
          </div>
          <div class="card">
            <div class="tit">{{card.item2name}}</div>
            <div class="num">{{card.item2value}}</div>
          </div>
          <div class="card">
            <div class="tit">{{card.item3name}}</div>
            <div class="num">{{card.item3value}}</div>
          </div>
        </div>
        <div style="width:80%">
          <p class="fl" style="margin-left:10px">退货/损坏</p>
        </div>
        <div class="left-chart" @click="editLeftChart()">
          <highcharts id="return" class="returnchart" :option="return1" ref="returnRef"></highcharts>
        </div>
        <div style="width:80%">
          <p class="fl" style="margin-left:10px">实时交易情况</p>
        </div>
        <div class="cards">
          <div class="transactions">
            <div style="font-size:14px;border-bottom:1px solid" v-for="t in transaction_data">
              <span style>{{t.msg}}</span>
              <span style="float:right">{{t.time}}</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="rightTop" @click="editRightTop()">
          <highcharts id="orders" class="linechart" :option="orders"></highcharts>
        </div>
        <div class="rightBottom">
          <div class="rightBottomLeft" @click="editRightBottomLeft()">
            <highmap id="singaporemap" class="piechart" :option="map1" @click="editRightBottomLeft"></highmap>
          </div>
          <div class="rightBottomRight" @click="editRightBottomRight()">
            <highcharts id="sales" class="piechart" :option="pie2"></highcharts>
          </div>
        </div>
      </div>
    </div>
    <!-- card config -->
    <el-drawer
      :visible.sync="card.visible"
      direction="ltr"
      custom-class="demo-drawer"
      ref="card-drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="card">
          <el-form-item label="Title" :label-width="formLabelWidth">
            <el-input v-model="card.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Item1" :label-width="formLabelWidth">
            <el-input width="50%" v-model="card.item1name" autocomplete="off"></el-input>
            <el-input v-model="card.item1value" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Item2" :label-width="formLabelWidth">
            <el-input width="50%" v-model="card.item2name" autocomplete="off"></el-input>
            <el-input v-model="card.item2value" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Item3" :label-width="formLabelWidth">
            <el-input width="50%" v-model="card.item3name" autocomplete="off"></el-input>
            <el-input v-model="card.item3value" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="dialog = false">取 消</el-button>
          <el-button type="primary" @click="card.visible=false">ok</el-button>
        </div>
      </div>
    </el-drawer>
    <!-- Right Top -->

    <el-drawer
      :visible.sync="card.visible"
      direction="ltr"
      custom-class="demo-drawer"
      ref="rightTop-drawer"
    >
      <div class="demo-drawer__content">
        <el-form :model="card">
          <el-form-item label="Title" :label-width="formLabelWidth">
            <el-input v-model="card.title" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Item1" :label-width="formLabelWidth">
            <el-input width="50%" v-model="card.item1name" autocomplete="off"></el-input>
            <el-input v-model="card.item1value" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Item2" :label-width="formLabelWidth">
            <el-input width="50%" v-model="card.item2name" autocomplete="off"></el-input>
            <el-input v-model="card.item2value" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Item3" :label-width="formLabelWidth">
            <el-input width="50%" v-model="card.item3name" autocomplete="off"></el-input>
            <el-input v-model="card.item3value" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button @click="dialog = false">取 消</el-button>
          <el-button type="primary" @click="card.visible=false">ok</el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
// 导入chart组件
//var myvue = {};
import Highcharts from "@/components/barChart";
import Highmap from "@/components/highmap";
import mapdata from "@/assets/js/sl-all";
import { setInterval } from "timers";

export default {
  name: "dashboard-Farm",
  data() {
    return {
      formLabelWidth: "50px",
      card: {
        item1name: "供应商",
        item2name: "上海代理",
        item3name: "上海海关",
        item1value: 300,
        item2value: 350,
        item3value: 200,
        visible: false,
        title: "已上链订单"
      },
      rightTop:{
        visible: false,
        title: "供应商订单量",
        series:[{
            name: "退货",
            data: [11, 7, 5, 1]
          },
          {
            name: "死亡",
            data: [9, 1, 13, 4]
          }],
  
      },
      data1: [
        { "hc-key": "sg-6400", value: 220 },
        { "hc-key": "sg-6401", value: 280 },
        { "hc-key": "sg-6402", value: 250 },
        { "hc-key": "sg-6403", value: 130 },
        { "hc-key": "sg-3595", value: 120 }
      ],

      top1: {},
      map1: {},
      ctime: "",
      transaction_data: [],
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
          { name: "苏蟹阁", data: [220] },
          { name: "蟹都汇", data: [450] },
          { name: "王氏水产", data: [310] },
          { name: "上海允卿商贸", data: [500] }
        ]
      },
      return1: {
        chart: {
          type: "bar",
          height: 345,
          width: 490
        },
        credits: {
          enabled: false // 禁用版权信息
        },
        title: {
          text: ""
        },
        xAxis: {
          categories: ["苏蟹阁", "蟹都汇", "王氏水产", "上海允卿商贸"]
        },
        yAxis: {
          min: 0,
          title: {
            text: ""
          }
        },

        legend: {
          reversed: true
        },
        plotOptions: {
          series: {
            stacking: "normal",
            pointWidth: 10
          },
          pointPadding: 1
        },
        series: [{
            name: "退货",
            data: [11, 7, 5, 1]
          },
          {
            name: "死亡",
            data: [9, 1, 13, 4]
          }]
      },

      map: {
        chart: {
          width: 450,

          spacingTop: 40
        },
        credits: {
          enabled: false // 禁用版权信息
        },
        title: {
          text: "新加坡区域销售情况"
        },
        subtitle: {
          text: ""
        },

        colorAxis: {
          min: 0,
          stops: [[0, "#8eccca"], [0.5, "#478684"], [1, "#1b4c4b"]]
        },

        series: [
          {
            data: this.data1,
            mapData: mapdata,
            joinBy: "hc-key",
            name: "随机数据",
            states: {
              hover: {
                color: "#a4edba"
              }
            },
            dataLabels: {
              enabled: true,
              format: "{point.properties.name}"
            }
          }
        ]
      },
      pie2: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          width: 450,

          spacingTop: 40
        },
        title: {
          text: "九月礼盒销售情况"
        },
        subtitle: {
          text: ""
        },
        credits: {
          enabled: false // 禁用版权信息
        },
        tooltip: {
          pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: "pointer",
            dataLabels: {
              enabled: true,
              format: "<b>{point.name}</b>: {point.percentage:.1f} %",
              style: {
                color: "black"
              }
            }
          }
        },

        series: [
          {
            name: "Brands",
            colorByPoint: true,
            data: [
              {
                name: "188 Pack",
                y: 40.41,
                	sliced: true,
                	selected: true
              },
              {
                name: "488 Pack",
                y: 11.84
              },
              {
                name: "688 Pack",
                y: 10.85
              },
              {
                name: "888 Pack",
                y: 4.67
              },
              {
                name: "1088 Pack",
                y: 4.18
              },
              {
                name: "1288 Pack",
                y: 4.18
              },
              {
                name: "1688 Pack",
                y: 4.18
              },
              {
                name: "2888 Pack",
                y: 1.18
              }
            ]
          }
        ]
      }
    };
  },
  mounted: function() {
    this.map1 = this.map;
    this.map1.series[0].data = this.data1;



    let c1 = setInterval(() => {
      let time = Date().split(" ");
      let rand = this.getRndInteger(-20, 20);
      this.card.custom += rand;
      this.transaction_data.unshift({ msg: "上海海关已发货", time: time[4] });
      if (this.card.custom > 1000 || this.card.custom < 0) {
        this.card.custom = 200;
      }
      if (this.transaction_data.length == 6) {
        this.transaction_data.pop();
      }
    }, 9000);

    let c2 = setInterval(() => {
      let time = Date().split(" ");
      let rand = this.getRndInteger(-20, 20);
      this.card.supplier += rand;
      this.transaction_data.unshift({ msg: "供应商已发货", time: time[4] });
      if (this.card.supplier > 1000 || this.card.supplier < 0) {
        this.card.supplier = 200;
      }
      if (this.transaction_data.length == 6) {
        this.transaction_data.pop();
      }
    }, 12000);

    let c3 = setInterval(() => {
      let time = Date().split(" ");
      let rand = this.getRndInteger(-20, 20);
      this.card.agency += rand;
      this.transaction_data.unshift({ msg: "上海代理已发货", time: time[4] });
      if (this.card.agency > 1000 || this.card.agency < 0) {
        this.card.agency = 200;
      }
      if (this.transaction_data.length == 6) {
        this.transaction_data.pop();
      }
    }, 15000);
  },

  sockets: {
    /* use fake data instead */
  },
  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    editCards() {
      this.card.visible = true;
    },

    editLeftChart() {
      alert("editLeftChart");
    },

    editRightTop() {
      alert("editRightTop");
    },

    editRightBottomLeft() {
      alert("editRightBottomLeft");
    },

    editRightBottomRight() {
      alert("editRightBottomRight");
    }
  },

  components: {
    Highcharts,
    Highmap
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
}
</style>

<style>
.el-drawer__container {
  font-family: "EYInterstate", sans-serif;
  color: white;
}

.el-drawer {
  background-color: #2d2d2e;
}

.el-input__inner {
  background-color: #3a3a3c;
  border: 1px solid #3a3a3c;
  color: white;
}

.el-form-item__label {
  color: white;
}
</style>