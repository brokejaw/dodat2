window.Dodat2.Models.List = Backbone.Model.extend({
	// urlRoot: "/api/lists",
	
	parse: function (json) {
		if (json.cards) {
			this.cards().set(json.cards, { parse: true } );
			delete json.cards;
		}
		return json
	},
	
	cards: function () {
		if (!this._cards) {
			this._cards = new Dodat2.Collections.ListCards([], { list: this });
		}
		return this._cards
	},
});