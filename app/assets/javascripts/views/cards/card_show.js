window.Dodat2.Views.CardShow = Backbone.View.extend({
	template: JST['cards/show'],
	
	events: {
		'click button.deleteCard': 'deleteCard'
	},
	
	render: function () {
		var content = this.template({
			card: this.model
		});
		
		this.$el.html(content);
		return this;
	},
	
	deleteCard: function (event) {
		event.preventDefault();
		debugger
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