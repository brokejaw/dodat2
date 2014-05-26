window.Dodat2.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],
	
	//this.model = board(:id)
	
	initialize: function () {
		this.listenTo(this.model, "sync", this.render);
		this.listenTo(this.model.lists(), "sync", this.render);
		this.listenTo(allBoards, 'add', this.render)
	},
	
	render: function () {
		var content = this.template({
			board: this.model,
			lists: this.model.lists()
		});
		
		this.$el.html(content);
		this.renderLists();

		return this;
		
	},
	
	renderLists: function () {
		this.model.lists().each(function (list) {
			view = new Dodat2.Views.ListShow({
				model: list
			});
			this.addSubView('#lists', view.render());
		}, this);
	},
	
	addSubView: function (selector, subview) {
		var selectorSubViews = 
			this.subviews()[selector] || (this.subviews()[selector] = []);
	
			// [].push("")
			selectorSubViews.push(subview);
			
			var $selectorEl = this.$(selector);
			
			//subview.$el = <div><h3>To do</h3> "Clean the house" </div>
			$selectorEl.append(subview.$el);
	},
	
  subviews: function () {
    if (!this._subviews) {
      this._subviews = {};
    }
    return this._subviews;
  }
});