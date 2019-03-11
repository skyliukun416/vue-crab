<template>
  <div id="events">
    <el-card shadow="always" v-for='e in eventsList' style="margin-bottom:15px;">
      <div class="tit">Block Number:<span> {{e.blockNumber}}</span></div>
      <div class="tit">Contract:<span> {{e.address}}</span></div>
      <div class="tit">TransactionHash:<span> {{e.transactionHash}}</span></div>
      <div class="tit">TokenHolder:<span> {{e.args.currentTokenHolder}}</span></div>
    </el-card>
  <el-pagination
    layout="prev, pager, next"
    :total="50">
  </el-pagination>
  </div>
</template>

<script>

export default {
  name: 'events',
  data () {
    return {
      eventsList:[],
    }
  },

  created(){
    this.getAllEvents();
  },
 
  methods:{
    
    getAllEvents(){
      this.$api.getAllEvents().then(res=>{
        this.eventsList = res.data;
      });
    }
  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#events{
    width: 360px;
    
    margin-right: 20px;
    font-size:12px;
    text-align: left;
    
}

.el-card__body {
    padding: 10px !important;
    
}

.tit{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
