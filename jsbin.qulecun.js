var app = new Vue({
  el:".app",
  data: {
    NT:0,
    JPY:0,
    USD:0
  },
  methods:{
    rate(){
      this.JPY = this.NT/0.2762;
      this.USD = this.NT/30.332;
    }
  }
})