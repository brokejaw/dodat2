window.Dodat2 = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
	  alert("initialization worked");
	  var view = new Dodat2.Views.BoardsIndex({
	  	collection: allBoards
	  });
	  
	  
	  allBoards.fetch({
			alert("allBoards fetched");
		  success: function () {
		  	$("body").append(view.render().$el);
		  }
	  });
  }
};