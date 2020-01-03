
<template>
  <div>
    <div class="rightBottomPie" @click="editRightBottomPie()">
      <highcharts id="pie" class="linechart" :option="pie" ref="pie"></highcharts>
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
          <el-form-item
            v-for="(i,k) in view"
            :key="k"
            :label="'View'+(k+1)"
            :label-width="formLabelWidth"
          >
            <el-input width="50%" autocomplete="off" v-model="view[k]"></el-input>
          </el-form-item>
          <el-divider></el-divider>
          <header id="el-drawer__title" class="el-drawer__header">
            <span role="heading"></span>
            <button aria-label="close drawer" type="button" class="el-drawer__close-btn" @click="addType()">
              <i class="el-dialog__close el-icon el-icon-plus"></i>
            </button>
          </header>

          <el-form-item
            v-for="(i,k) in data"
            :key="k"
            :label="'Type'+(k+1)"
            :label-width="formLabelWidth"
          >
            <el-input width="50%" autocomplete="off" v-model="data[k].name"></el-input>
            <i class="el-icon-close" style="cursor:pointer" @click.prevent="remove(i)"></i>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          
          <el-button type="warning" plain size="mini" @click="submit()">OK</el-button>
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

      visible: false,
      view: ["", "", "", ""],
      data: [
        {
          name: "",
          y: "",
          sliced: true,
          selected: true
        }
      ],
      exampledata: [
        {
          name: "188 Pack",
          y: 33.41,
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
      ],
      pie: {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: "pie",
          width: 450,

          spacingTop: 40
        },
        title: {
          text: ""
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
            data: this.exampledata
          }
        ]
      }
    };
  },

  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    editRightBottomPie() {
      if (this.$parent.editSwitch) {
        this.visible = true;
      }
    },

    submit() {
      let hc = this.$refs.pie.chart;
      this.visible = false;
     
      let arr = [];
      this.data.map(i => {
        i.y = Math.floor(Math.random() * 100 + 1);
      });

      hc.update({
        series: [
          {
            data: this.data
          }
        ]
      });
    },
    remove(item) {
      var index = this.data.indexOf(item);
      if (index !== -1) {
        this.data.splice(index, 1);
      }
    },
    addType() {
      this.data.push({
        name: "",
        y: ""
      });
    }
  },
  mounted() {
    let hc = this.$refs.pie.chart;
    let that = this
    hc.setTitle({ text: "月销售情况" });

    hc.update({
      series: [
        {
          name: "Brands",
          colorByPoint: true,
          data: this.exampledata
        }
      ]
    });

    var count = 1;
    setInterval(() => {
      if (count>4){
        count = 1
      }
      if (that.data.length > 1) {
        let arr = [];
        that.data.map(i => {
          i.y = Math.floor(Math.random() * 100 + 1);
        });

        hc.update({
          series: [
            {
              data: that.data
            }
          ]
        });
      } else {
        that.exampledata.map(i => {
          i.y = Math.floor(Math.random() * 100 + 1);
        });

        hc.update({
          series: [
            {
              data: that.exampledata
            }
          ]
        });
      }

      if (that.view[count - 1] != "") {
        hc.title.update({ text: that.view[count - 1] });
      }
      count++
    }, 10000);
  },
  components: {
    Highcharts
  }
};
</script>
<style scoped>
.el-drawer__body > * {
  padding: 3%;
}

.el-input {
  width: 36%;
  margin-right: 10px;
}

.v {
  width: 34% !important;
  margin-right: 20px;
  color: white;
}
</style>
