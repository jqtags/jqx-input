define({
	name : "jqtags.x.input.test",
	extend : "spamjs.view",
	modules : ["jqtags.select"]
}).as(function() {
	
	return {
		src : [
		       "jqtags.x.input.test.html"
		],
		events : {
			"change jq-slider" : "dropdownChanged"
		},
		_init_ : function(){
			_importStyle_("jqtags/jqx-input");
			var self = this;
			this.view("jqtags.x.input.test.html").done(function(){
				self.model({
					testvalue : ["amr","akb"],
					rangeValue : [3,6],
					input : "My def"
				});
			});
		},
		dropdownChanged : function(a,b,c){
			console.log("dropdownChanged",a,b,c);
		},
		_remove_ : function(){
			
		}
	};
	
});