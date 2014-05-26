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
// $(Dodat2.initialize);
 //  var view = new Dodat2.Views.BoardsIndex({
//   	collection: allBoards
//   });
//   
//   
//   allBoards.fetch({
// 	  success: function () {
// 	  	view.render();
// 			$("body").append(view.$el);
// 	  }
//   });
// 	
// }