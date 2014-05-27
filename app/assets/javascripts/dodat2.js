window.Dodat2 = {
  Models: {},
  Collections: {},
  Views: {},
	Routers: {},
  initialize: function() {
	  Dodat2.Router = new Dodat2.Router({
	  	$rootEl: $('#content')
	  });
		Backbone.history.start();
}
};

Backbone.CompositeView = Backbone.View.extend({
	
}),