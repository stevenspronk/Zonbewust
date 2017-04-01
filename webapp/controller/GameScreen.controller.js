sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Zonbewust.controller.GameScreen", {

		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("gamescreen").attachMatched(this._onRouteMatched, this);
		},
		_onRouteMatched: function(oEvent) {

			var	oArgs = oEvent.getParameter("arguments");

			var oUsers = this.getView().getModel("oUsers");
			var path = "/Z_User(name='" + oArgs.name + "')";

			oUsers.read(path, {
				success: function(oData, response) {
					console.log(oData);
				},
				error: function(oError) {
					sap.m.MessageToast.show(oError.message);
				}
			});

		}

	});

});