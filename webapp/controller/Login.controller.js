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

					var pandaContent = self.getView().byId("PandaContent");

					for (var i = 0; i < oData.results.length; i++) {

						var data = new sap.ui.model.json.JSONModel(oData.results[i]);

						var oFragment = sap.ui.xmlfragment("Zonbewust.view.PandaTile", this);
						 oFragment.setModel(data); 
						pandaContent.addContent(oFragment);

					}

				},
				error: function(oError) {
					sap.m.MessageToast.show(oError.message);
				}
			});

		},

		toGameScreen: function(oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			
			// oEvent.getSource().
			oRouter.navTo("gamescreen", {
				// name: navName
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
		sap.m.MessageToast.show("Jeeh");

		},

		onCheck: function() {
			//Quiz Dialog verificatie event
		}
	});
});