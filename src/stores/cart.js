import { defineStore } from "pinia";
import axios from 'axios'
import router from "@/router";

const {VITE_URL, VITE_PATH} = import.meta.env   

const cartStore = defineStore ("cart",{
  state: () => {
    return {
      carts: [],
      total: 0,
      final_total: 0,
      qty:0,
      form : {    
        user: {
            name: "",
            email: "",
            tel: "",
            address: "",
        },
        message: ""                
      }, 
    }
  },
  actions: {
    getCart(){
      axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)  
        .then((res) => { 
          this.carts = res.data.data.carts
          this.total = res.data.data.total
          this.final_total = res.data.data.final_total       
        })
        .catch((err) => {
            alert(err.response.data.message);
        });
    },
    addToCart(product_id, qty = 1) {    
      const data = {
          product_id,
          qty,
      };  
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data })
          .then(res => {                                        
            alert(res.data.message);
              this.getCart(); 
          })
          .catch(err => {
            alert(err.response.data.message);
          })
    },
    updateCart(cart) {  
      const data = {
          "product_id" : cart.product.id,
          "qty": cart.qty
      }
      axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${cart.id}`, { data })
          .then(res => {                                  
              alert(res.data.message);       
              this.getCart(); 
          })
          .catch(err => {
              alert(err.response.data.message);
          })
    },
    deleteCartItem(cart) {  
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${cart.id}`)
          .then(res => {                                    
              alert(res.data.message);   
              this.getCart(); 
          })
          .catch(err => {
              alert(err.response.data.message);
          })
    },
    createOrder(){ 
      const data = this.form;   
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`, { data })
        .then((res) => {  
          alert(res.data.message)     
          this.getCart();                                                 
          router.push("/order-finish")   
        })
        .catch(err => {
          alert(err.response.data.message);
      })      
     
    } , 
  },
 

})
export default cartStore