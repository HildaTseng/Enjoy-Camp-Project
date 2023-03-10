<template>  
    <main>
        <section>
            <div class="container my-md-10 ">
                <div class="row justify-content-center">
                    <h2 class="fs-28 px-5 my-md-10 my-5 text-center">填寫訂購資料</h2>
                    <v-form ref="form" class="col-xl-6 col-md-8 rounded-0" v-slot="{errors}" @submit="createForm">
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <v-field id="email" name="email" type="email" class="form-control rounded-0" placeholder="請輸入 Email"
                                    rules="email|required" 
                                    :class="{ 'is-invalid': errors['email'] }"
                                    v-model="form.user.email"></v-field>     
                            
                            <error-message name="email" class="invalid-feedback"></error-message>
                        </div>
                
                        <div class="mb-3">
                            <label for="name" class="form-label">收件人姓名</label>
                            <v-field id="name" name="姓名" type="text" class="form-control rounded-0" placeholder="請輸入姓名"
                                    :class="{ 'is-invalid': errors['姓名'] }"
                                    rules="required" 
                                    v-model="form.user.name"></v-field>    
                             
                            <error-message name="姓名" class="invalid-feedback"></error-message>
                        </div>
                
                        <div class="mb-3">
                            <label for="tel" class="form-label">收件人電話</label>
                            <v-field id="tel" name="電話" type="tel" class="form-control rounded-0" placeholder="請輸入電話" 
                                    :class="{ 'is-invalid': errors['電話'] }"
                                    :rules="isPhone" 
                                    v-model="form.user.tel"></v-field>    
                             
                            <error-message name="電話" class="invalid-feedback"></error-message>
                        </div>
                
                        <div class="mb-3">
                            <label for="address" class="form-label">收件人地址</label>
                            <v-field id="address" name="地址" type="text" class="form-control rounded-0" placeholder="請輸入地址"
                                    :class="{ 'is-invalid': errors['地址'] }"
                                    rules="required" 
                                    v-model="form.user.address"></v-field>    
                             
                            <error-message name="地址" class="invalid-feedback"></error-message>
                        </div>
                
                        <div class="mb-3">
                            <label for="message" class="form-label">留言</label>
                            <textarea id="message" class="form-control rounded-0" cols="30" rows="5" style="resize: none;"  
                                    v-model="form.message"></textarea>
                        </div> 
                        <div class="text-center my-10">
                            <button type="submit"  class="btn btn-primary rounded-0 px-12 py-2"  >確認訂單</button>
                        </div>
                    </v-form>
                </div>
                   
            </div>
        </section>
    </main>

</template>
<script>
import { mapState , mapActions } from "pinia";
import cartStore from "@/stores/cart.js";

export default {    
    computed: {
        ...mapState(cartStore, ['form']),
    },    
    methods: {
        // ...mapActions(cartStore, ['checkOrder']),
        isPhone(value) {
            const phoneNumber = /^(09)[0-9]{8}$/
            return phoneNumber.test(value) ? true : '需為正確的手機號碼格式'
        },
        createForm(){
            this.$router.push("/check-order")   
        },
    },
}
</script>