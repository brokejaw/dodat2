window.Dodat2.Views.CardNew = Backbone.View.extend({
	
	events: {
		'submit form': 'create'
	},	
	
	template: JST['cards/cardnew'],
	
	render: function () {
		var content = this.template({
			list: this.model
		});
		this.$el.html(content);
		return this;
	},
	
	create: function (event) {
		event.preventDefault();
		var params = $(event.currentTarget).serializeJSON()["card"];
		this.model.cards().create(params, {
			wait: true, 
		})
	},
});