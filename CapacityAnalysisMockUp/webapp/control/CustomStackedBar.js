sap.ui.define([
	"sap/ui/core/Control",
	"sap/suite/ui/microchart/StackedBarMicroChart",
	"sap/suite/ui/microchart/StackedBarMicroChartBar",
	"sap/m/Label",
	"sap/m/HBox"
], function ( Control, StackedBarMicroChart,StackedBarMicroChartBar,  Label, HBox) {
	"use strict";
	return Control.extend("sap.com.CapacityAnalysisMockUp.control.CustomStackedBar", {
		metadata : {
			properties : {
				leftLabelText: 	{type : "string"/*, defaultValue : "default"*/},
				count: 	{type : "int", defaultValue : 0}
			},
			aggregations : {
                    
				_hBox : {type : "sap.m.HBox", multiple: false, visibility : "hidden"}/*,
				_leftLabel : {type : "sap.m.Label", multiple: false, visibility : "hidden"},
				_stackedBar : {type : "sap.suite.ui.microchart.StackedBarMicroChart", multiple: false, visibility : "hidden"},
				_rightLabel : {type : "sap.m.Label", multiple: false, visibility : "hidden"}*/
			},
			events : {
				
			}
		},
		init : function () {
			
			var leftLabel =  new Label({
				/*text: "valueEnd"*/
				width: "4em" // temp for alignment of charts when in Vbox, how to handle long labels?
			}).addStyleClass("sapUiSmallMargin");
			
			var rightLabel =  new Label({
				text: "Novice"
			}).addStyleClass("sapUiSmallMargin");
			
			
			
			var stackedBar =  new StackedBarMicroChart({
				maxValue: 100,
				bars: [
					new StackedBarMicroChartBar({
						value: 50
					}),
					new StackedBarMicroChartBar({
						value: 50
					})
					]
				
			});
			
			this.setAggregation("_hBox", new HBox({
                items: [
                    leftLabel,
                    stackedBar,
                    rightLabel
                ]
            }));
			
		},
		//https://www.nabisoft.com/tutorials/sapui5/why-initializing-properties-on-prototypes-can-have-nasty-side-effects-in-sapui5
		//https://stackoverflow.com/questions/32520705/custom-control-how-to-encapsulate-aggregation-in-another-control 
		setLeftLabelText: function (value) {
			this.setProperty("leftLabelText", value, true);
			this.getAggregation("_hBox").getAggregation("items")[0].setText(value);
			
		},
		
		/*renderer: function(oRm,oControl){
                //first up, render a div for the ShadowBox
                oRm.write("<div");
                //render width & height properties
                //oRm.write(" style=\"width: " + oControl.getWidth() + "; height: " + oControl.getHeight() + ";\"");
                //next, render the control information, this handles your sId (you must do this for your control to be properly tracked by ui5).
                oRm.writeControlData(oControl);
                oRm.write(">");
      
                //next, iterate over the content aggregation, and call the renderer for each control
                $(oControl.getContent()).each(function(){
                    oRm.renderControl(this);
                });
      
                //and obviously, close off our div
                oRm.write("</div>");
            },*/
		renderer : function (oRM, oControl) {
			oRM.write("<div");
			oRM.writeControlData(oControl);
			//oRM.addClass("myAppDemoWTProductRating");
			oRM.writeClasses();
			oRM.write(">");
			
			
			oRM.renderControl(oControl.getAggregation("_hBox"));
			oRM.write("</div>");
		}
	});
});