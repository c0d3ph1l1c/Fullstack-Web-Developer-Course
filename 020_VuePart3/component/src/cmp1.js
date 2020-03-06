import Vue from 'vue/dist/vue.esm';

export default Vue.component('cmp1', {
  props: ['name', 'list'],
  data() {
    return {
      a: 77,
      b: 55
    };
  },
  template: `
    <div>
      result={{ a + b }}<br>
      Name: {{ name }}<br>
      <ul>
        <li v-for="item in list">{{ item }}</li>
      </ul>
    </div>
  `
});