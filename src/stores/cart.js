import { defineStore } from "pinia";
import axios from 'axios'
import router from "@/router";
import Swal from 'sweetalert2'

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
      loadingItem: "",
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
    addToCart(product_id, qty = 1, linkToCart = false) {    
      const data = {
          product_id,
          qty,
      };  
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, { data })
          .then(res => {  
            if (linkToCart) {
              router.push("/cart")   
              this.getCart();
            }else {
              Swal.fire({
                icon: 'success',
                title: '成功加入購物車',
                showConfirmButton: false,
                timer: 1500
              })                                          
              this.getCart(); 
            }
            
          })
          .catch(err => {
            Swal.fire({
              icon: 'error',
              title: err.response.data.message,
              showConfirmButton: false,
              timer: 1500
            })     
          })
    },
    updateCart(cart) {  
      this.loadingItem = cart.id;
      const data = {
          "product_id" : cart.product.id,
          "qty": cart.qty
      }
      axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${cart.id}`, { data })
          .then(res => {     
            Swal.fire({
              icon: 'success',
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500
            })           
            this.getCart(); 
            this.loadingItem = "";                             
          })
          .catch(err => {
              Swal.fire({
                icon: 'error',
                title: err.response.data.message,
                showConfirmButton: false,
                timer: 1500
              }) 
          })
    },
    deleteCartItem(cart) {  
      this.loadingItem = cart.id;
      axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${cart.id}`)
          .then(res => {                                    
               
              this.getCart(); 
              this.loadingItem = "";    
              Swal.fire({
                icon: 'success',
                title: res.data.message,
                showConfirmButton: false,
                timer: 1500
              })  
          })
          .catch(err => {
              Swal.fire({
                icon: 'error',
                title: err.response.data.message,
                showConfirmButton: false,
                timer: 1500
              }) 
          })
    },
    createOrder(){ 
      const data = this.form;   
      axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`, { data })
        .then((res) => {  
          Swal.fire({
            icon: 'success',
            title: "訂單已成立",
            showConfirmButton: false,
            timer: 1500
          })    
          this.getCart();                                                 
          router.push("/order-finish")   
        })
        .catch(err => {
          Swal.fire({
            icon: 'error',
            title: err.response.data.message,
            showConfirmButton: false,
            timer: 1500
          }) 
      })      
     
    } , 
  },
 

})
export default cartStore