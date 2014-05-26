window.Dodat2.Models.Board = Backbone.Model.extend({
	urlRoot: "/api/boards",
	
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
	},
});



// MODEL FETCH
// BackboneExample.Models.Example = Backbone.Model.extend({
//   urlRoot: 'api/examples/'
// });
// 
// var example = new BackboneExample.Models.Example({ id: 1 });
// // The model must have an id - otherwise Rails doesn't know what to fetch
// example.fetch({
//   success: function(model, response, options){
//   //the success callback recieves the model itself as it's first argument
//   },
//   error: function(model, response, options){
//   //in the error callback, the response argument will have info about the error
//   }
// 
// 
// MODEL SAVE
// BackboneExample.Models.Example = Backbone.Model.extend({
//   urlRoot: 'api/examples/'
// });
// 
// var example = new BackboneExample.Models.Example();
// example.save({ title: "Example title" }, {
//   success: function(model, response, options){
//   //the success callback recieves the model itself as it's first argument
//   },
//   error: function(model, response, options){
//   //in the error callback, the response argument will have info about the error
//   }
// });
// 
// MODEL DELETE
// var example = new BackboneExample.Models.Example({ id: 1});
// example.delete();
// 
// save on a model with no id	POST	controller#create
// save on a model that has an id	PUT	controller#update
// save on model with id using { patch: true } option	PATCH	controller#update
// fetch on a model that has an id	GET	controller#show
// destroy on a model that has an id	DELETE	controller#destroy