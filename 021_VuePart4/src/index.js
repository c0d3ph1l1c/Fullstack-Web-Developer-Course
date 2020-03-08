import Vue from 'vue';
import Parent from './components/parent';
// import Child from './components/child';

let vm = new Vue({
  el: '#div1',
  data: {},
  // created() {
  //   alert('created');
  // },
  // mounted() {
  //   alert('mounted');
  // },
  components: {
    Parent,
    // Child
  },
  template: `
    <div>
      <parent/>
    </div>
  `
});