_tag_("jqtags.x.input",function(select){
	
	var jq = module("jQuery");
	
	//$.fn.editable.defaults.mode = 'inline';
	$.fn.editable.defaults.validate = function(v){
		//console.log("validating",v);
		//return "Fuck you"
	};
	
	return {
	    tagName: "jqx-input",
	    events: {
	    },
	    accessors: {
	        value: {
	            type: "string",
	            default : "",
	            onChange : "valueOnChange"
	        },
	        popup : {
	        	type : "boolean",
	        	default : true
	        }
	    },
	    attachedCallback : function () {
	    	var self = this;
	    	this.$a = 
	    	this.$.innerHTML = '<a href=# >'+ this.$.value+'</a>';
	    	this.$a =jQuery(this.$).find("a");
	    	this.$a.editable({
	    		send : 'never',
	    		type : "text",
	    		mode : (this.$.popup ? 'popup' : 'inline'),
    		    title: 'Enter username'
	    	}).on("save",function(e,params){
	    		self.$.value = params.newValue;
	    		self.trigger("change");
	    		self.trigger("input");
	    	});
	    },
	    detachedCallback : function(){
	    	this.$select.selectpicker("destroy");
	    },
	    oMyChange : function(e){
	    	//console.info("oMyChange",e);
	    },
	    valueOnChange : function(e,oldValue,newValue){
	    	//console.info("valueOnChange",e,oldValue,newValue);
	    	this.$a.text(newValue);
	    	//this.$select.selectpicker("val",(newValue+"").split(","));
	    }
	};
});