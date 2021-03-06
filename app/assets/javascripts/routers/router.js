window.Dodat2.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},
	
	routes: {
		'': 'boardsIndex',
		'boards/:id': 'boardShow',
	},
	
	boardsIndex: function () {
	  var view = new Dodat2.Views.BoardsIndex({ collection: allBoards });
	  
	  allBoards.fetch();
		this._swapView(view);
	},
	
	boardShow: function (id) {
		// pull the board from the collection, or request from server
		var board = allBoards.getOrFetch(id);
		
		var view = new Dodat2.Views.BoardShow({
			model: board
		});
		
		this._swapView(view);
	},
		
  _swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});
