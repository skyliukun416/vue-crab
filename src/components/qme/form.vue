<template>

    <div>
      <div class="common-title">仓单创建</div>
      <div class="category-articleWrap">
        <div style="margin-top:10px;">
          
      <el-form  label-width="120px"  :model="fdata" ref="form" :rules='rules'>
          <el-form-item label="货主" prop="owner">
                 <el-select v-model="fdata.owner" placeholder="">
                                    <el-option label="货主甲" value="货主甲"></el-option>
                                    <el-option label="货主乙" value="货主乙"></el-option>
                                 
                                </el-select>
            </el-form-item>
            <el-form-item label="仓储物名称"  prop="name">
                <el-input v-model="fdata.name" ></el-input>
            </el-form-item>
            <el-form-item label="规格" prop="spec">
                <el-input v-model="fdata.spec"></el-input>
            </el-form-item>
            <el-form-item label="包装" prop="pack">
                <el-input v-model="fdata.pack"></el-input>
            </el-form-item>
            <el-form-item label="单位" prop="unit">
                 <el-select v-model="fdata.unit" placeholder="">
                                    <el-option label="件" value="件"></el-option>
                                    <el-option label="吨" value="吨"></el-option>
                                    <el-option label="立方米" value="立方米"></el-option>
                                </el-select>
            </el-form-item>
            <el-form-item label="数量" prop="quantity">
                <el-input v-model="fdata.quantity"></el-input>
            </el-form-item>
            <el-form-item label="标记" prop="notes">
                <el-input v-model="fdata.notes"></el-input>
            </el-form-item>
            <el-form-item label="仓储物损耗标准" prop="loss">
                <el-input v-model="fdata.loss"></el-input>
            </el-form-item>
            <el-form-item label="仓储费率" prop="rate">
                <el-input v-model="fdata.rate"></el-input>
            </el-form-item>
            <el-form-item label="货值" prop="value">
                <el-input v-model="fdata.value"></el-input>
            </el-form-item>            
            

             <el-button type="primary" plain @click='save()'>提交</el-button>
             <el-button type="success" plain @click='resetForm()'>重置</el-button>
            </el-form>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                supplier2:"",
                type:"",
                desc:"",
                input:""
            },
            rules: {
                    owner:{ type:"string",required:true,message:"必填字段",trigger:"change"},
                    name:{ type:"string",required:true,message:"必填字段",trigger:"change"},
                    spec:{ type:"string",required:true,message:"必填字段",trigger:"change"},
                    pack:{ type:"string",required:true,message:"必填字段",trigger:"change"},
                    unit:{ type:"string",required:true,message:"必填字段",trigger:"change"},
                    quantity:{ type:"string",required:true,message:"必填字段",trigger:"change"},
                    notes:{ type:"string",required:true,message:"必填字段",trigger:"change"},
                    loss:{ type:"string",required:true,message:"必填字段",trigger:"change"},
                    rate:{ type:"string",required:true,message:"必填字段",trigger:"change"},
                    value:{ type:"string",required:true,message:"必填字段",trigger:"change"},

                
                },
            fdata:{
                
                owner:'',
                status:'',
                approval:'未申请',
                ID:'',
                value:'',
                applyValue:'',
                
                    name:"",
                    spec:"",
                    pack:"",
                    unit:"",
                    quantity:"",
                    notes:"",
                    loss:"",
                    rate:"",
                ifpurchased:false,
                
            }
        }
    },
    mounted(){
      this.fdata.ID = Math.ceil(Math.random()*199999999911);
    
    },
    methods: {
       
        save () {
            this.$refs["form"].validate((valid,model)=>{
                console.log(valid);
               
             
                if(valid){
                  /*this.$store.commit('pushOrder',this.fdata);*/

                  let temp = JSON.parse(localStorage.getItem('qmeOrders')||'[]');
                  this.fdata.status = '在库';
                  temp.push(this.fdata);
                  localStorage.setItem('qmeOrders', JSON.stringify(temp));


                  this.$alert('仓单号:'+this.fdata.ID,'仓单创建成功',  {
                        confirmButtonText: '确定',
                        callback: action => {
                            this.$router.push({path: '/qme/home/warehouse'})
                        }
                        });

                    this.resetForm();
                }
            })
        },
        resetForm(formName) {
          this.$refs["form"].resetFields();
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
    width:50%;
    margin: 30px 0 0;
    padding: 0 3% 3%;
}

.el-select {
    width: 100%
}
</style>

