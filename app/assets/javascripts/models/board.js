window.Dodat2.Models.Board = Backbone.Model.extend({
	initialize: function() {
		
	},
	
	urlRoot: "/api/boards", 
	
	// server-side root location
	// collections refer to this, models add the :id
	
	// overriding default. 
	parse: function (json) {
		
		if (json.lists) {
			this.lists().set(json.lists, { parse: true } );
			delete json.lists;
		}
		return json;
	},
	
	lists: function () {
		if (!this._lists) {
			this._lists = new Dodat2.Collections.BoardLists([], { 
				board: this 
			});
		}
		return this._lists;
	}
});