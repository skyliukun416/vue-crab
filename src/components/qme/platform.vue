<template>

    <div>
      <div class="common-title">前海交易平台</div>
      <div class="category-articleWrap">
        <div style="margin-top:10px;">
          
           <el-table :data='orders'
      
      style="width: 100%">
      <el-table-column
        prop="ID"
        label="仓单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="owner"
        label="货主"
        width="100">
      </el-table-column>
      <el-table-column
        label="仓储物"
        prop="name">
      </el-table-column>
      <el-table-column
        label="数量"
        prop="quantity">
      </el-table-column>
      <el-table-column
        label="是否质押"
        prop="">
        <template slot-scope="scope" >
          <span v-if="scope.row.approval=='审批通过'">已质押</span>
        </template>
      </el-table-column>
      
      <el-table-column
        label="交付期限"
        prop="">一个月
      </el-table-column>
      <!--
      <el-table-column
     
      label="操作"
      width="60">
      <template slot-scope="scope" >
        <el-button
          @click='pickOrder(scope.row.ID)' 
          v-if='scope.row.owner!=user&&scope.row.ifpurchased==false'
          type="text"
          size="small">
          购买
        </el-button>
      
      
        
    </template>
    </el-table-column>

    -->
    <el-table-column
        label=""
        prop=""
        width="60">
         <template slot-scope="blockchain">
          <el-popover trigger="click" placement="left">
        
            <el-form label-position="left"  class="demo-table-expand">
                <el-form-item label="区块:">
                  <span>#70</span>
                </el-form-item>
                <el-form-item label="交易哈希:">
                  <span>0xe97ecd7c42f8c3b7c3898f3db240675032b7af06e4685554405d0a2e442c90f2</span>
                </el-form-item>
                <el-form-item label="发起方:">
                  <span>0xae0d151aa2895fce607119a445f3368da2caa66d</span>
                </el-form-item>
                <el-form-item label="接收方:">
                  <span>0xae0d151aa2895fce607119a445f3368da2caa66d</span>
                </el-form-item>
                <el-form-item label="时间:">
                  <span>Thu May 30 2019 00:44:39</span>
                </el-form-item>
            </el-form>
            <div slot="reference" class="name-wrapper">
              <i class='el-icon-info'></i>
            </div>
          </el-popover>
      </template>
      </el-table-column>
    </el-table>
             
         
        </div>
        <el-dialog title="提示" :visible.sync="dialogFormVisible" width="30%">

            <span>确定购买？</span>
            
            <div slot="footer" class="dialog-footer">
                
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false, buy()">确定</el-button>
            </div>
            </el-dialog>
    </div>
    </div>
    
</template>
<script>
export default {
    data(){
        return {
            selected:'',
            dialogFormVisible: false,
            form:{
                supplier2:"",
                type:"",
                desc:"",
                input:""
            },
            orders:[],
            order:[],
            index:'',
            user:'',
            blockchain : {
      address: "0xae0d151aa2895fce607119a445f3368da2caa66d",
      args: {currentTokenHolder: "0x09bc55a3e2d7b1394514bc9859fa3a72540f1960",
      hashToCreate: "0x953c501cfc5f3f6a47fc2c7abafdfda0b9c5e6cf42441915c46a2c777d9fd715"},
      currentTokenHolder: "0x09bc55a3e2d7b1394514bc9859fa3a72540f1960",
      hashToCreate: "0x953c501cfc5f3f6a47fc2c7abafdfda0b9c5e6cf42441915c46a2c777d9fd715",
      blockHash: "0x6624977f6de7dbc32f9439d0b29bf8c1cf86db179f3c9e88a97f1cda90c02f15",
      blockNumber: 70,
      event: "TokenHolderSet",
      logIndex: 0,
      transactionHash: "0xe97ecd7c42f8c3b7c3898f3db240675032b7af06e4685554405d0a2e442c90f2",
      transactionIndex: 0,
      type: "mined",
    },

        }
    },
    mounted(){
        this.user = localStorage.getItem('user')
        this.orders = JSON.parse(localStorage.getItem('qmeOrders')||'[]');
        //this.orders = this.orders.filter(e=>{return e.approval=='已批准'&&e.applyValue!=''&&e.owner!=o})
    },
    methods: {
      
       pickOrder(index){
           this.selected = index;
           let temp = this.orders.filter(e=>{return e.ID==index});
           this.order[0] = temp[0];
           this.dialogFormVisible = true;
           this.index = index;
       },

       buy(){
          let temp = JSON.parse(localStorage.getItem('qmeOrders')||'[]');
          
          temp.map(e=>{
            console.log(this.index)
            if(e.ID==this.index){
              e.ifpurchased = true;
              if(e.owner=='货主甲'){
                e.owner = '货主乙'
              }else{
                e.owner = '货主甲'
              }
              return e;
            }
          })
          this.orders  = temp;
          localStorage.setItem('qmeOrders', JSON.stringify(temp));
       },

    
    
    }
}
</script>


<style scoped>

.el-dialog{
  width:40%;
}
.common-title {
    border-bottom: 2px solid #cbcbcb;
    width: 96%;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 700;
    color: #666;
    padding: 12px 0 3px;

}
.category-articleWrap {
    margin: 10px 0 0;
    padding: 0 3% 3%;
}

.el-form-item{
      height: 0px;

    display: flex;
}
</style>

