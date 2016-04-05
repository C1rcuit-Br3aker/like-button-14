import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const url = `http://tiny-tn.herokuapp.com/collections/movies`;
    return fetch(url).then((response) => {return response.json();});
  }
})
