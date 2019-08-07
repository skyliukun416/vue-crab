
<template>
  <div>
    <div style="width:80%">
      <p class="fl" style="margin-left:10px">{{title}}</p>
    </div>
    <div class="left-chart" @click="editLeftChart()">
      <highcharts id="return" class="returnchart" :option="return1" ref="return"></highcharts>
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
          <el-form-item label="xAxis" :label-width="formLabelWidth">
            <el-input v-model="xAxis.item1" width="50%" autocomplete="off"></el-input>
            <el-input v-model="xAxis.item2" width="50%" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="yAxis" :label-width="formLabelWidth">
            <el-input class="v" v-model="yAxis.item1" autocomplete="off"></el-input>
            <el-input class="v" v-model="yAxis.item2" autocomplete="off"></el-input>
            <el-input class="v" v-model="yAxis.item3" autocomplete="off"></el-input>
            <el-input class="v" v-model="yAxis.item4" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Range" :label-width="formLabelWidth">
            <el-input width="50%" v-model="min" autocomplete="off" placeholder="min"></el-input>-
            <el-input width="50%" v-model="max" autocomplete="off" placeholder="max"></el-input>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          <el-button plain size="mini" type="warning" @click="submit()">确认</el-button>
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
      min: 10,
      max: 20,

      xAxis: {
        item1: "",
        item2: ""
      },
      yAxis: {
        item1: "",
        item2: "",
        item3: "",
        item4: ""
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
        series: [
          {
            name: "退货",
            data: [11, 7, 5, 1]
          },
          {
            name: "死亡",
            data: [9, 1, 13, 4]
          }
        ]
      }
    };
  },

  methods: {
    getRndInteger(min, max) {
      min = min * 1;
      max = max * 1;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    editLeftChart() {
      if (this.$parent.editSwitch) {
        this.visible = true;
      }
    },

    submit() {
      this.visible = false;
      let hc = this.$refs.return.chart;
      let d1 = [
        this.getRndInteger(this.min, this.max),
        this.getRndInteger(this.min, this.max),
        this.getRndInteger(this.min, this.max),
        this.getRndInteger(this.min, this.max)
      ];
      let d2 = [
        this.getRndInteger(this.min, this.max),
        this.getRndInteger(this.min, this.max),
        this.getRndInteger(this.min, this.max),
        this.getRndInteger(this.min, this.max)
      ];
      console.log(d1, d2);
      hc.update({
        series: [
          {
            name: this.xAxis.item1,
            data: d1
          },
          {
            name: this.xAxis.item2,
            data: d2
          }
        ],
        xAxis: {
          categories: [
            this.yAxis.item1,
            this.yAxis.item2,
            this.yAxis.item3,
            this.yAxis.item4
          ]
        }
      });
    }
  },
  mounted() {
    let hc = this.$refs.return.chart;
    let that = this;
    /*
    if (that.min != "" && that.max != "") {
      this.interval = setInterval(() => {
        hc.series[0].setData([that.getRndInteger(that.min, that.max),that.getRndInteger(that.min, that.max),that.getRndInteger(that.min, that.max),that.getRndInteger(that.min, that.max)]);
        hc.series[1].setData([that.getRndInteger(that.min, that.max),that.getRndInteger(that.min, that.max),that.getRndInteger(that.min, that.max),that.getRndInteger(that.min, that.max)]);
      }, 10000);
    }else{
      this.interval = setInterval(() => {
      hc.series[0].setData([that.getRndInteger(1, 20),that.getRndInteger(1, 20),that.getRndInteger(1, 20),that.getRndInteger(1, 20),])
      hc.series[1].setData([that.getRndInteger(1, 20),that.getRndInteger(1, 20),that.getRndInteger(1, 20),that.getRndInteger(1, 20),])
    },10000)
    }*/
    this.interval = setInterval(() => {
      hc.series[0].setData([
        that.getRndInteger(that.min, that.max),
        that.getRndInteger(that.min, that.max),
        that.getRndInteger(that.min, that.max),
        that.getRndInteger(that.min, that.max)
      ]);
      hc.series[1].setData([
        that.getRndInteger(that.min, that.max),
        that.getRndInteger(that.min, that.max),
        that.getRndInteger(that.min, that.max),
        that.getRndInteger(that.min, that.max)
      ]);
    }, 10000);
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
  width: 45%;
  margin-right: 10px;
  margin-top: 5px;
}
</style>

