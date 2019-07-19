sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("sap.com.CapacityAnalysisMockUp.controller.View1", {
		onInit: function () {
			var dataModel = this.getOwnerComponent().getModel("tableData");
			this.getView().setModel(dataModel, "DataModel");
			this.getView().addStyleClass("sapUiSizeCompact");
		}
	});
});