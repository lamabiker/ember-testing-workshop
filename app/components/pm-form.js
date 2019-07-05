import Component from '@ember/component';

export default Component.extend({

  actions: {
    checkForm() {
      this.get('submitForm')();
    }
  }

});
