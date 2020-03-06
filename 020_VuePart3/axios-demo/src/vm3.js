import Vue from 'vue/dist/vue.esm';

let vm = new Vue({
  el: '#div1',
  data: {
    name: '',
    age: 0
  },
  async created() {
    let res = await fetch('./data/user.json');
    let data = await res.json();
    
    this.name = data.name;
    this.age = data.age;
  },
  template: `
    <div>
      Name: {{ name }}<br>
      Age: {{ age }}
    </div>
  `
});