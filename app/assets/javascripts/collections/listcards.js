window.Dodat2.Collections.ListCards = Backbone.Collection.extend({
	initialize: function (models, options) {
		this.list = options.list;
	},
	
	model: Dodat2.Models.Card,
	
	url: function () {
		return this.list.url() + "/cards";
	},	

});