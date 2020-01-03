
<template>
  <div id="db">
    <div id="nav">
      <img class="logo" src="@/assets/nav/EY_Logo.png">
      <div style="display: flex; align-items: center;">
        <i class="el-icon-edit" @click="editMode"></i>
        <i class="el-icon-download"></i>
        <i class="el-icon-share"></i>

        <span style="margin-right:15px">Administrator</span>
      </div>
    </div>
    <div class="content">
      <div class="left" style="width:80%">
        <leftTable ref="leftTable"></leftTable>
        <div>
          <leftChart ref="leftChart"></leftChart>
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
        <rightTopChart></rightTopChart>

        <div class="rightBottom">
          <div class="rightBottomLeft">
            <highmap id="singaporemap" class="piechart" :option="map1"></highmap>
          </div>
          <div class="rightBottomRight">
            <rightBottomPie></rightBottomPie>
          </div>
        </div>
      </div>
    </div>
    <!-- card config -->
  </div>
</template>

<script>
// 导入chart组件
//var myvue = {};
import Highcharts from "@/components/dashboard/barChart";
import leftTable from "@/components/dashboard/LeftTable";
import leftChart from "@/components/dashboard/LeftChart";
import rightTopChart from "@/components/dashboard/RightTopChart";
import rightBottomPie from "@/components/dashboard/RightBottomPie";
import Highmap from "@/components/highmap";
import mapdata from "@/assets/js/sl-all";
import { setInterval } from "timers";

export default {
  name: "dashboard",
  data() {
    return {
      editSwitch: false,
      formLabelWidth: "50px",

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
      }
    };
  },
  mounted: function() {
    this.map1 = this.map;
    this.map1.series[0].data = this.data1;

    let card = this.$refs.leftTable.card;

    let c1 = setInterval(() => {
      let time = Date().split(" ");
      let rand = this.getRndInteger(-20, 20);

      this.transaction_data.unshift({
        msg: card.item1name + "已发货",
        time: time[4]
      });

      if (this.transaction_data.length == 6) {
        this.transaction_data.pop();
      }
    }, 9000);

    let c2 = setInterval(() => {
      let time = Date().split(" ");
      let rand = this.getRndInteger(-20, 20);

      this.transaction_data.unshift({
        msg: card.item2name + "已发货",
        time: time[4]
      });

      if (this.transaction_data.length == 6) {
        this.transaction_data.pop();
      }
    }, 12000);

    let c3 = setInterval(() => {
      let time = Date().split(" ");
      let rand = this.getRndInteger(-20, 20);

      this.transaction_data.unshift({
        msg: card.item3name + "已发货",
        time: time[4]
      });

      if (this.transaction_data.length == 6) {
        this.transaction_data.pop();
      }
    }, 15000);
  },

  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    editMode(event) {
      if (this.editSwitch == false) {
        event.target.style.color = "#f1990d";
        this.editSwitch = true;
      } else {
        event.target.style.color = "white";
        this.editSwitch = false;
      }
    }
  },

  components: {
    Highcharts,
    Highmap,
    leftTable,
    leftChart,
    rightTopChart,
    rightBottomPie
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
  margin-right: 18px;
  font-size: 24px;
  cursor: pointer;
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
  overflow: scroll;
}

.el-input__inner {
  background-color: #56522c;
  border: 1px solid #3a3a3c;
  color: white;
  height: 30px;
}

.el-form-item__label {
  color: white;
}

.el-drawer__header {
  margin-bottom: 0;
}

.el-form-item {
  margin-bottom: 1px;
}

.demo-drawer__footer {
  margin-top: 20px;
}
</style>