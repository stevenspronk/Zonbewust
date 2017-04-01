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
			var self = this;
			var oUsers = this.getView().getModel("oUsers");
			var path = "/Z_User";
			oUsers.read(path, {
				success: function(oData, response) {

					// oData.results[];
						self.toGameScreen(oData.results[1].name);
					// for (var i = 0; i < oData.results.length; i++) {

					// 	//console.log(oData.results[i]);
					// 	self.toGameScreen(oData.results[i].name);
					// }

				},
				error: function(oError) {
					sap.m.MessageToast.show(oError.message);
				}
			});

		},

		toGameScreen: function(navName) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("gamescreen", {
				name: navName
			});
		},
		onDonate: function() {
			var url = "https://secure.kwf.nl/ikdoneervoor?utm_source=il-64#donate_form";
			window.open(url);
		},

		onAddAccount: function() {

			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("addaccount");

		},

		onStart: function(oEvent) {
			//Start Event dat leidt naar het GameScreen
			//Dit kan via de AddAccount Dialog of door direct een van de bestaande accounts te kiezen

			//Event voor navigatie-routing naar Gamescreen

		},

		onCheck: function() {
			//Quiz Dialog verificatie event
		}
	});
});