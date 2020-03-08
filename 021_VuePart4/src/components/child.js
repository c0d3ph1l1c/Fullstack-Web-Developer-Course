import Vue from 'vue';

export default Vue.component('child', {
  // Parent controls child
  /*
  data() {
    return {
      num: 0
    };
  },
  methods: {
    a() {
      this.num++;
    }
  },
  template: `
    <div>Child: {{ num }}</div>
  `
  */
  // Child controls parent
  /*
  props: ['parent'],
  methods: {
    fn() {
      // this.parent.num++;
      this.parent.add();
    }
  },
  template: `
    <div>
      Child: 
      <input type="button" value="+1" @click="fn()" />
    </div>
  `
  */
  // Parent controls child 2
  data() {
    return {num: 0};
  },
  methods: {
    
  },
  template: `
    <div>Child: {{ num }}</div>
  `,
  created() {
    this.$on('add_num', function(n) {
      // console.log(n);
      this.num += n;
    });
  }
});