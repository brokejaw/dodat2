window.Dodat2.Views.BoardShow = Backbone.View.extend({
	template: JST['boards/show'],
	
	initialize: function () {
		
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
			
			selectorSubViews.push(subview);
			
			var $selectorEl = this.$(selector);
			$selectorEl.append(subview.$el);
	},
	
  subviews: function () {
    if (!this._subviews) {
      this._subviews = {};
    }
    return this._subviews;
  }
});