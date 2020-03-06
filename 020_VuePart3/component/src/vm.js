import Vue from 'vue/dist/vue.esm';

// For Component
// import './cmp1';

// For Testing
// import Cmp1 from './cmp1';

// For Slot
import Dialog from './my-dialog';

// For Component
/*
let vm = new Vue({
  el: '#div1',
  data: {
    type: ''
  },
  // Add ':' if need to pass prop other than string
  template: `
    <div>
      <cmp1 name="blue" :list="[12,5,8,99]"/>
      <input type="text" v-model="type">
      <component :is="type" name="blue" :list="[12,5,8,99]"/>
    </div>
  `,
  // Local Components
  // components: {
  //   cmp1: {
  //     data() {
  //       return {
  //         a: 77,
  //         b: 55
  //       };
  //     },
  //     template: `
  //       <div>
  //         result={{ a + b }}<br>
  //       </div>
  //     `
  //   }
  // }
});
*/

// For Testing
/*
let cmp = new Cmp1({
  propsData: {
    name: '张三',
    list: [88, 99, 27]
  }
});

let vm = cmp.$mount();

console.log(vm.$el);

if(vm.$el.querySelector('li').innerHTML == '88') {
  console.log('Correct');
} else {
  console.log('Fail');
}
*/

// For Slot
let vm = new Vue({
  el: '#div1',
  data: {
    type: ''
  },
  // Use v-slot:title for Vue 2.6.0+
  template: `
    <div>
      <my-dialog>
        <template slot="title">Heading</template>
        Some Text Here
        <ul>
          <li>asdfas</li>
          <li>asdfas</li>
        </ul>
      </my-dialog>
    </div>
  `
});