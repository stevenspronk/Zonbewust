sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/Button",
	"sap/m/Dialog",
	"sap/ui/model/resource/ResourceModel"
], function(Controller, MessageToast, Button, Dialog, ResourceModel) {
	"use strict";

	return Controller.extend("Zonbewust.controller.Login", {

		onInit: function() {
			//Resource model opbouwen en vastleggen in de SAP.UI Core, model i18n.
			var resourceModel = new ResourceModel({
				bundleName: "Zonbewust.controller.i18n"
			});
			sap.ui.getCore().setModel(resourceModel, "i18n");

		},

		onAfterRendering: function() {
			var oUsers = this.getView().getModel("oUsers");
			var path = "/Z_User";
			oUsers.read(path, {
				success: function(oData, response) {
				
				// oData.results[];
				for (var i = 0; i < oData.results.length; i++) { 
				
				//console.log(oData.results[i]);
}
				
				},
				error: function(oError) {
					sap.m.MessageToast.show(oError.message);
				}
			});

		},

		onDonate: function() {
			window.open("https://secure.kwf.nl/ikdoneervoor?utm_source=il-64#donate_form");
		},
		
		onAddAccount: function() {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("addaccount");

		},

		onStart: function(oEvent) {
			//Start Event dat leidt naar het GameScreen
			//Dit kan via de AddAccount Dialog of door direct een van de bestaande accounts te kiezen

			//Event voor navigatie-routing naar Gamescreen
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("gamescreen");

		},

		onCheck: function() {
			//Quiz Dialog verificatie event
		}
	});
});
