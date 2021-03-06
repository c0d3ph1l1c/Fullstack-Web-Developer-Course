import Vue from 'vue/dist/vue.esm';
import Axios from 'axios';

let vm = new Vue({
  el: '#div1',
  data: {
    name: '',
    age: 0,
    loaded: false
  },
  async created() {
    try {
      let { data } = await Axios.get('./data/user.json')

      this.name = data.name;
      this.age = data.age;

      this.loaded = true;
    } catch(e) {
      alert('Data Loading Error! Please refresh webpage.');
    } 
  },
  template: `
    <div v-if="loaded">
      <label>Name: </label><span>{{ name }}</span><br>
      <label>Age: </label><span>{{ age }}</span>
    </div>
  `
});