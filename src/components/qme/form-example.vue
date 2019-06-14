<template>

    <div>
      <div class="common-title">仓单创建</div>
      <div class="category-articleWrap">
        <div style="margin-top:10px;">
          
            <el-form :rules="model.rules" :model="model"  ref="form">
                <!-- 表布局 -->
                <el-table
                border
                :data="model.tableData"
                style="width: 100%;"
           
                >
                <el-table-column
                    width="140px"
                    label="仓储物名称">
                    <template slot-scope="scope">
                            <el-form-item  :rules='rules.name'>
                                <el-input style="width:120px"  v-model="scope.row.name" ></el-input>
                                
                            </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                    width="100px"
                    label="规格">
                    <template slot-scope="scope">
                            <el-form-item  :rules='rules.name'>
                                <el-input style="width:80px"  v-model="scope.row.spec" ></el-input>
                            </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                    width="100px"
                    label="包装">
                    <template slot-scope="scope">
                            <el-form-item  :rules='rules.name'>
                                <el-input style="width:80px"  v-model="scope.row.pack" ></el-input>
                            </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                    width="100px"
                    label="单位">
                    <template slot-scope="scope">
                            <el-form-item  :rules='rules.name'>
                                <el-select v-model="scope.row.unit" placeholder="">
                                    <el-option label="件" value="p"></el-option>
                                    <el-option label="吨" value="t"></el-option>
                                    <el-option label="立方米" value="m"></el-option>
                                </el-select>
                            </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                    width="100px"
                    label="数量">
                    <template slot-scope="scope">
                            <el-form-item :rules='rules.name'>
                                <el-input style="width:80px"  v-model="scope.row.quantity" ></el-input>
                            </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                    width="100px"
                    label="标记">
                    <template slot-scope="scope">
                            <el-form-item  :rules='rules.name'>
                                <el-input style="width:80px"  v-model="scope.row.notes" ></el-input>
                            </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                    width="100px"
                    label="仓储物损耗标准">
                    <template slot-scope="scope">
                            <el-form-item  :rules='rules.name'>
                                <el-input style="width:80px"  v-model="scope.row.loss" ></el-input>
                            </el-form-item>
                    </template>
                </el-table-column>
                <el-table-column
                    width="100px"
                    label="仓储费率">
                    <template slot-scope="scope">
                            <el-form-item  :rules='rules.name'>
                                <el-input style="width:80px"  v-model="scope.row.rate" ></el-input>
                            </el-form-item>
                    </template>
                </el-table-column>
                
            </el-table>
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
                    name:{ type:"string",required:false,message:"必填字段",trigger:"change"},
                
                },
            model:{
                
                owner:'Owner',
                status:'',
                approval:'',
                ID:'',
                tableData:{
                    name:"",
                    spec:"",
                    pack:"",
                    unit:"",
                    quantity:"",
                    notes:"",
                    loss:"",
                    rate:""
                }
            }
        }
    },
    mounted(){
      this.model.ID = Math.ceil(Math.random()*999999999999);
    },
    methods: {
        add () {
            console.log(this.form);
        },
        save () {
            this.$refs["form"].validate((valid,model2)=>{
                console.log(valid);
                console.log(model2);
                if(valid){
                  this.$store.state.QMEorders.push(this.model)
                  this.$notify({
                    title: '成功',
                    message: 'submit success.',
                    type: 'success'
                });
                }
            })
        },
        resetForm(formName) {
          this.$refs["form"].resetFields();
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
</style>

