window.Dodat2.Models.Board = Backbone.Model.extend({
	urlRoot: "/api/boards", 
	// server-side root location
	// collections refer to this, models add the :id
	
	parse: function (json) {
		if (json.lists) {
			this.lists().set(json.lists, { parse: true } );
			delete json.lists;
		}
		return json;
	},
	// method automatically called when data returned by the server, fetch, save
	// json == raw response object. 
	
	lists: function () {
		if (!this._lists) {
			this._lists = new Dodat2.Collections.BoardLists([], { 
				board: this 
			});
		}
		return this._lists;
	}
});