
<template>
  <div>
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
          </el-form-item>
          <el-form-item label="Item2" :label-width="formLabelWidth">
            <el-input width="50%" v-model="card.item2name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Item3" :label-width="formLabelWidth">
            <el-input width="50%" v-model="card.item3name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="Range" :label-width="formLabelWidth">
            <el-input width="50%" v-model="card.min" autocomplete="off" placeholder="min"></el-input>-
            <el-input width="50%" v-model="card.max" autocomplete="off" placeholder="max"></el-input>
          </el-form-item>
        </el-form>
        <div class="demo-drawer__footer">
          
          <el-button plain size="mini" type="warning" @click="card.visible=false">OK</el-button>
        </div>
      </div>
    </el-drawer>
    <!-- Right Top -->
  </div>
</template>

<script>
import { setInterval } from "timers";

export default {
  name: "leftTable",
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
        title: "已上链订单",
        min: 400,
        max: 800
      }
    };
  },

  methods: {
    getRndInteger(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    editCards() {
      if (this.$parent.editSwitch) {
     
        this.card.visible = true;
      }
    }
  },

  mounted() {
    let that = this
    setInterval(() => {
      if (that.card.min != "" && that.card.max != "") {
        that.card.item1value = that.getRndInteger(that.card.min*1, that.card.max*1);
        that.card.item2value = that.getRndInteger(that.card.min*1, that.card.max*1);
        that.card.item3value = that.getRndInteger(that.card.min*1, that.card.max*1);
      } else {
        this.card.item1value = this.getRndInteger(400, 800);
        this.card.item2value = this.getRndInteger(400, 800);
        this.card.item3value = this.getRndInteger(400, 800);
      }
    }, 5000);
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
  clear: both;
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

