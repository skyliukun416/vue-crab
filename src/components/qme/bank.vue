<template>

    <div>
      <div class="common-title">银行</div>
      <div class="category-articleWrap">
        <div style="margin-top:10px;">
          
           <el-table :data='orders'
      
      style="width: 100%">
      <el-table-column
        prop="ID"
        label="仓单号"
        width="120">
      </el-table-column>
      <el-table-column
        prop="name"
        label="仓储物"
        width="100">
      </el-table-column>
      <el-table-column
        prop="owner"
        label="货主"
        >
      </el-table-column>
      <el-table-column
        label="货值"
        prop="value">
      </el-table-column>
      <el-table-column
        label="状态"
        prop="status">
      </el-table-column>
      
      <el-table-column
        label="申请额度"
        prop="applyValue">
      </el-table-column>
      <el-table-column
        label="授信状态"
        prop="approval">
      </el-table-column>
      <el-table-column 
      
      label="操作"
     >
      <template slot-scope="scope">
        <el-button
          @click='pickOrder(scope.row.ID)' 
          v-if="scope.row.approval!='已批准'"
          type="text"
          size="small">
          审批
        </el-button>
      </template>
    </el-table-column>
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
        <el-dialog title="入库单审批" :visible.sync="dialogFormVisible">

            <el-table :data="order">
                <el-table-column property="name" label="仓储物名称" width="150"></el-table-column>
                <el-table-column property="spec" label="规格" width="200"></el-table-column>
                <el-table-column property="unit" label="单位"></el-table-column>
                <el-table-column property="quantity" label="数量"></el-table-column>
                <el-table-column property="notes" label="标记"></el-table-column>
            </el-table>
            
            <div slot="footer" class="dialog-footer">
                <el-button type="warning">查看监控</el-button>
                <el-button @click="dialogFormVisible = false, decline()">拒绝</el-button>
                <el-button type="primary" @click="dialogFormVisible = false, approve()">同意</el-button>
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
        }
    },
    mounted(){
        this.orders = JSON.parse(localStorage.getItem('qmeOrders')||'[]');
        this.orders = this.orders.filter(e=>{return e.applyValue!=''})
    },
    methods: {
      
       pickOrder(index){
           this.selected = index;
           let temp = this.orders.filter(e=>{return e.ID==index});
           this.order[0] = temp[0];
           this.dialogFormVisible = true;
           this.index = index;
       },

       approve(){
          let temp = JSON.parse(localStorage.getItem('qmeOrders')||'[]');
          temp.map(e=>{
            if(e.ID==this.selected){
            
              e.approval = "审批通过"
              return e
            }
          });
    
          this.orders = temp.filter(e=>{return e.applyValue!=''});
          localStorage.setItem('qmeOrders', JSON.stringify(temp));
       },

       decline(){
          let temp = JSON.parse(localStorage.getItem('qmeOrders')||'[]');
          temp.map(e=>{
            if(e.ID==this.selected){
            
              e.approval = "拒绝"
              return e
            }
          });
          
          this.orders = temp.filter(e=>{return e.applyValue!=''});
          
          localStorage.setItem('qmeOrders', JSON.stringify(temp));
       }
    
    }
}
</script>


<style scoped>

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

