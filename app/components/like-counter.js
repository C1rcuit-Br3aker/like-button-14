import Ember from 'ember';

export default Ember.Component.extend({
  num: 0,

  up(num) {
    this.set(`num`, this.num + 1);
  },

  down(num) {
    this.set(`num`, this.num - 1);
  },
});
