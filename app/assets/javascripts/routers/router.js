window.Dodat2.Router = Backbone.Router.extend({
	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},
	
	routes: {
		'': "boardsIndex"
	},
	
	boardsIndex: function () {
	  var view = new Dodat2.Views.BoardsIndex({
	  	collection: allBoards
	  });
	  
	  allBoards.fetch();
		this._swapView(view);
	},
	
  _swapView: function (view) {
    if (this._currentView) {
      this._currentView.remove();
    }
    this._currenView = view;
    this.$rootEl.html(view.render().$el);
  }
}); 


//every view has this.$el. default = <div>...</div>window.Dodat2.Router.Router = Backbone.Routers.extend({
