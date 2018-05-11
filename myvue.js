const vue = new Vue({
  el: '#app',
  data: {
    message: "jhjhj"
  },
  mounted() {
      axios.get('http://localhost:3000/add')
          .then(response => {
          this.message = response.data
    })
  }
  /*mounted() {
        axios.get(url).then(response => {
            this.results = response.data
    })
    }*/
});
