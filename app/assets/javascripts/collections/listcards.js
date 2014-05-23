window.Dodat2.Collections.Cards = Backbone.Collection.extend({
	model: Dodat2.Models.Card,
	
	url: function () {
		return this.card.url() + "/cards";
	},	
	
	initialize: function (models, options) {
		this.list = options.list;
	}
});