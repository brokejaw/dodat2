window.Dodat2.Collections.Lists = Backbone.Collection.extend({
	model: Dodat2.Models.List
	
	url: function () {
		return "api/boards/" + ??? + "lists";
	},
	
});