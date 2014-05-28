window.Dodat2.Views.ListShow = Backbone.CompositeView.extend({
	template: JST['lists/listshow'],
	
	initialize: function () {
		this.listenTo(this.model.cards(), "remove sync", this.render);
	},
	
	events: {
		'click button.deleteList': 'deleteList',
		'click .addCard': 'addCard'
	},
	
	render: function () {
		var content = this.template({
			list: this.model,
			cards: this.model.cards()
		});
		
		this.$el.html(content);
		this.renderCards();
		return this;
	},
	
	renderCards: function () {
		var that = this;
	
		this.model.cards().each(function (card) {
			var view = new Dodat2.Views.CardShow({
				model: card
			});
			that.addSubView('#cards', view.render());
		});
	},
	
	deleteList: function (event) {
		event.preventDefault();
		
		this.model.destroy();
	},
	
	addCard: function(event) {
		event.preventDefault();
		var view = new Dodat2.Views.CardNew({
			model: this.model
		});
		$(event.currentTarget).replaceWith(view.render().$el);
	}
});
