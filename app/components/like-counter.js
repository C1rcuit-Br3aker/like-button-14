import Ember from 'ember';

export default Ember.Component.extend({
  score: 0,

  up(score, movieId) {
    const scoreNew = this.set(`score`, this.score + 1);

    const url = `http://tiny-tn.herokuapp.com/collections/movies/${this.movieId}`;
    return fetch(url, {
      method: `PUT`,
        headers: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
        },
        body: JSON.stringify({score: scoreNew})
    }).then((response) => response.json())
    .then((scoreUpdate) => {
      Object.assign(this.score, scoreUpdate)
    });
  },

  down(score, movieId) {
    const scoreNew = this.set(`score`, this.score - 1);

    const url = `http://tiny-tn.herokuapp.com/collections/movies/${this.movieId}`;
    return fetch(url, {
      method: `PUT`,
        headers: {
          Accept: `application/json`,
          'Content-Type': `application/json`,
        },
        body: JSON.stringify({score: scoreNew})
    }).then((response) => response.json())
    .then((scoreUpdate) => {
      Object.assign(this.score, scoreUpdate)
    });
  },
});
