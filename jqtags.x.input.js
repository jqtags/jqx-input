_tag_("jqtags.x.input", function (select) {

  var jq = module("jQuery");

  return {
    tagName: "jqx-input",
    events: {
    },
    accessors: {
      value: {
        type: "string",
        default: "",
        onChange: "valueOnChange"
      },
      popup: {
        type: "boolean",
        default: true
      }
    },
    attachedCallback: function () {
      var self = this;
      this.$a =
        this.$.innerHTML = '<a href=# >' + this.$.value + '</a>';
      this.$a = jQuery(this.$).find("a");
      this.$a.editable({
        send: 'never',
        type: "text",
        mode: (this.$.popup ? 'popup' : 'inline'),
        title: 'Enter username'
      }).on("save", function (e, params) {
        self.$.value = params.newValue;
        self.trigger("change");
        self.trigger("input");
      });
    },
    detachedCallback: function () {
      this.$a.editable("destroy");
    },
    valueOnChange: function (e, oldValue, newValue) {
      this.$a.text(newValue);
    }
  };
});