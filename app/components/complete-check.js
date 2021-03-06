import Ember from 'ember';
import inject from 'ember-cli-injection/inject';

export default Ember.Component.extend({
  classNames: ["check-in"],
  activity: null,
  activityList: null,

  completed: function () {
    var didComplete = false;
    var activityList = this.get('activityList');

    if (activityList) {
      return !!activityList.find((activity) => {
        return activity.get('id') === this.get('activity.id');
      });
    }
    return didComplete;
  }.property('activityList', 'activity'),

  actions: {
    checkIn: function() {
      this.sendAction('checkIn', this.get('activity'));
    }
  }
});
