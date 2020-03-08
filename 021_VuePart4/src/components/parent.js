import Vue from 'vue';
import Child from './child';

export default Vue.component('parent', {
  // Parent controls child
  /*
  methods: {
    // Error if there is no a() on child
    fn() {
      this.$refs.c1.a();
    }
  },
  template: `
    <div>
      <div>
        Parent
        <input type="button" value="+1" @click="fn()"/>
      </div> 

      <child ref="c1"/>
    </div>
  `
  */
  // Child controls parent
  /*
  data() {
    return {num: 0};
  },
  methods: {
    add() {
      this.num += 5;
    }
  },
  template: `
    <div>
      <div>
        Parent: {{ num }}
      </div> 

      <child :parent="this"/>
    </div>
  `
  */
  // Parent controls child 2
  data() {
    return {};
  },
  methods: {
    // No error even if there is no $on('add_num') on child
    fn() {
      this.$refs.c1.$emit('add_num', 7);
    }
  },
  template: `
    <div>
      <div>
        Parent
        <input type="button" value="+1" @click="fn()"/>
      </div> 

      <child ref="c1"/>
    </div>
  `
});