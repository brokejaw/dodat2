window.Dodat2 = {
  Models: {},
  Collections: {},
  Views: {},
	Routers: {},
  initialize: function() {
	  Dodat2.Router = new Dodat2.Router({
	  	$rootEl: $('#content')
	  });
		Backbone.history.start(); 
}
};

Backbone.CompositeView = Backbone.View.extend({
	addSubView: function (selector, subview) {
		
		//key is the selector, which is a string like '#lists'
		//we look in our _subviews POJO, if a key already exists, use that,
		//otherwise assign a new empty array to they key
		
		var selectorSubViews;
		this.subviews()[selector] || (this.subviews()[selector] = []);
			
		if (this.subviews()[selector]){
			//if we have already created an array for this selector
			selectorSubViews = this.subviews()[selector];
		} else {
			//we need to create a new array for this selector
			this.subviews()[selector] = [];
			selectorSubViews = this.subviews()[selector];
		}
	
		// [].push("")
		//we add our new subview to the array that is the value in our 
		//subviews POJO
		selectorSubViews.push(subview);
			
		//this.$(selector)  ===  this.$el.find(selector)
		// here we actually get the jQuery selector for the selector
		// note that we are looking in our internal $el, NOT the dom
		// because it might not be in the DOM.
		var $selectorEl = this.$(selector);
			
		//subview.$el = <div><h3>To do</h3> "Clean the house" </div>
		// we actually add our subview to our internal $el
		$selectorEl.append(subview.$el);
	},
		
	subviews: function () {
		if (!this._subviews) {
			this._subviews = {};
		}
		return this._subviews;
	}
});