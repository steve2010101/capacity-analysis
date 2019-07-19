sap.ui.define(["sap/ui/core/XMLComposite"], function(XMLComposite) {
	var CompStackedBar = XMLComposite.extend("sap.com.CapacityAnalysisMockUp.control.CompStackedBar", {
		metadata: {
			properties: {
				leftLabel: "string",
				rightLabel: "string",
				leftValue: "int",
				rightValue: "int"
			},
			events: {
				help: {}
			}
		},
		handleHelp: function() {
			this.fireEvent("help", {});
		}
	});
	return CompStackedBar;
}, true);