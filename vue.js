const { createApp } = Vue

  createApp({
    data() {
      return {
        hist:'',
        digit:'',
        num1:0,
        num2:0,
        op:''
      }
    }
  }).mount('#app');