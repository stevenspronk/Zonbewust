sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Zonbewust.controller.Leaderboard", {
		onAfterRendering: function() {
			var oModel = this.getView().getModel("oUsers");
			this.getView().setModel(oModel);
			oModel.updateBindings();
		}
	});

});