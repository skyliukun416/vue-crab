<template>

    <div>
      <div class="common-title">货主甲</div>
      <div class="category-articleWrap">
        <div style="margin-top:10px;">
          
           <el-table :data='orders'
      
      style="width: 100%">
      <el-table-column
        prop="ID"
        width='130'
        label="仓单号"
      >
      </el-table-column>
      <el-table-column
        prop="owner"
        label="货主"
        width='130'
        >
      </el-table-column>
      <el-table-column
        prop="name"
        label="仓储物"
        width='130'
      >
      </el-table-column>
      <el-table-column
        label="货值"
        prop="value"
        width='130'
      >
      </el-table-column>
      <el-table-column
        label="状态"
        width='130'
        prop="status">
      </el-table-column>
      <el-table-column
        label="申请额度"
        width='130'
        prop="applyValue">
        
      </el-table-column>
      <el-table-column
        label="授信状态"
        width='130'
        prop="approval">
        <!--
        <template slot-scope="scope">
        
          {{scope.row.approval}}
       
        
      </template>
      -->
      </el-table-column>
      <el-table-column
      width='120'
      label="操作"
     >
      <template slot-scope="scope">
        <el-button 
          v-if="scope.row.approval=='未申请'"
          @click='pickOrder(scope.row.ID)' 
          type="text"
          size="small">
          申请授信
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
           <el-form :model="form" style="margin-top:30px">
              <el-form-item label="申请额度" style="justify-content:flex-end">
                <el-input v-model="aValue" autocomplete="off"></el-input>
              </el-form-item>
             
            </el-form>
            
            <div slot="footer" class="dialog-footer">
                <el-button type="warning">查看监控</el-button>
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false, apply()">申请</el-button>
            </div>
            </el-dialog>

    </div>
    <div class="common-title">仓单</div>
      <div class="category-articleWrap">
        <div style="margin-top:10px;">
          
           <el-table :data='borders'
      
      style="width: 100%">
      <el-table-column
        prop="ID"
        width='130'
        label="仓单号"
      >
      </el-table-column>
      <el-table-column
        prop="owner"
        width='130'
        label="货主"
        >
      </el-table-column>
      <el-table-column
        prop="name"
        width='130'
        label="仓储物"
      >
      </el-table-column>
      <el-table-column
        label="货值"
        width='130'
        prop="value"
      >
      </el-table-column>
      <el-table-column
        label="状态"
        width='130'
        prop="status">
      </el-table-column>
      <el-table-column
        label="申请额度"
        width='130'
        prop="applyValue">
      </el-table-column>
      <el-table-column
        label="授信状态"
        width='130'
        prop="approval"
        >
      </el-table-column>
      <el-table-column
     
      label="操作"
      width="120">
      <template slot-scope="scope" >
        <el-button
          @click='pickOrder2(scope.row.ID)' 
          v-if='scope.row.ifpurchased==false'
          type="text"
          size="small">
          购买
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
             
         <el-dialog title="提示" :visible.sync="buyFormVisible" width="30%">

            <span>确定购买？</span>
            
            <div slot="footer" class="dialog-footer">
                
                <el-button @click="buyFormVisible = false">取消</el-button>
                <el-button type="primary" @click="buyFormVisible = false, buy()">确定</el-button>
            </div>
            </el-dialog>
        </div>
     

    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
          aValue:'',
          formLabelWidth: '120px',
            selected:'',
            dialogFormVisible: false,
            buyFormVisible: false,
            form:{
                supplier2:"",
                type:"",
                desc:"",
                input:""
            },
            orders:[],
            borders:[],
            order:[],
            index:'',
            user:'货主甲'
        }
    },
    mounted(){
        let o  = JSON.parse(localStorage.getItem('qmeOrders')||'[]');
        this.orders = o.filter(e=>{return e.owner=='货主甲'});
        this.borders = o.filter(e=>{return e.owner!='货主甲'});
        localStorage.setItem('user', '货主甲');
        console.log(localStorage.getItem('user'))

    },
    methods: {
       pickOrder(index){
           this.selected = index;
           let temp = this.orders.filter(e=>{return e.ID==index});
           this.order[0] = temp[0];
           this.dialogFormVisible = true;
           this.index = index;
       },

       apply(){
          let temp = JSON.parse(localStorage.getItem('qmeOrders')||'[]');
          temp.map(e=>{
            if(e.ID==this.selected){
              e.applyValue = this.aValue;
              e.approval = "申请中"
              return e
            }
          });


          this.orders = temp.filter(e=>{return e.owner=='货主甲'});
          localStorage.setItem('qmeOrders', JSON.stringify(temp));
       },
       pickOrder2(index){
           this.selected = index;
           let temp = this.orders.filter(e=>{return e.ID==index});
           this.order[0] = temp[0];
           this.buyFormVisible = true;
           this.index = index;
       },

       buy(){
          let temp = JSON.parse(localStorage.getItem('qmeOrders')||'[]');
          
          temp.map(e=>{
            console.log(this.index)
            if(e.ID==this.index){
              e.ifpurchased = true;
              e.applyValue = 0;
              e.approval = "未申请";
              if(e.owner=='货主甲'){
                e.owner = '货主乙'
              }else{
                e.owner = '货主甲'
              }
              return e;
            }
          })
          this.orders  = temp.filter(e=>{return e.owner=='货主甲'});
          this.borders  = temp.filter(e=>{return e.owner!='货主甲'});
          localStorage.setItem('qmeOrders', JSON.stringify(temp));
       },
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

.el-form{
     /* margin-top: 30px;
   
    display: flex;*/
    justify-content: flex-end;

}
.el-form-item {
    display: flex;

}
.el-form-item{
      height: 0px;

    display: flex;
}
</style>

