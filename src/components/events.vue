<template>
  <div id="events">
    <el-card shadow="always" v-for='e in eventsList' style="margin-bottom:15px;">
      <div class="tit"><span>Block Number:</span><span> {{e.blockNumber}}</span></div>
      <div class="tit"><span>Contract:</span><span> {{e.address}}</span></div>
      <div class="tit"><span>TransactionHash:</span><span> {{e.transactionHash}}</span></div>
      <div class="tit"><span>TokenHolder:</span><span> {{e.args.currentTokenHolder}}</span></div>
    </el-card>
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
        this.eventsList = res.data.reverse().slice(0,5);
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

span:first-child{
  font-weight: 600;
}



.el-collapse-item__header{
  font-size:16px;
}
</style>
