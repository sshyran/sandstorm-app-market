var searchTermLocal = '';

Template.appsByMe_standard.onCreated(function() {

  this.searchTerm = new ReactiveVar('');

});

Template.appsByMe_standard.helpers({

  searchTerm: function() {

    return Template.instance().searchTerm.get();

  }

});

Template.appsByMe_standard.events({

  'keyup [data-field="search-by"], click [data-action="apply-search"]': function(evt) {

    if (evt.keyCode === 13 || !evt.keyCode)
      Template.instance().searchTerm.set(searchTermLocal);
    else
      searchTermLocal = $(evt.currentTarget).val();

  }

});
