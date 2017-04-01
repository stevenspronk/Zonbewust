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
			
			jQuery.sap.require("sap.ui.commons.MessageBox");
			sap.ui.commons.MessageBox.show(
    			"Wist je dat je in de zomer om de drie uur jezelf moet insmeren?",
    			sap.ui.commons.MessageBox.Icon.INFORMATION,
    			"Tip van de dag",
    			[sap.ui.commons.MessageBox.Action.OK],
    			function() { }
			);
		},

		onAfterRendering: function() {
			var self = this;
			var oUsers = this.getView().getModel("oUsers");
			var path = "/Z_User";
			oUsers.read(path, {
				success: function(oData, response) {

					var pandaContent = self.getView().byId("PandaContent");
					pandaContent.destroyContent();
					for (var i = 0; i < oData.results.length; i++) {

						var data = new sap.ui.model.json.JSONModel(oData.results[i]);
						var oFragment = sap.ui.xmlfragment("Zonbewust.view.PandaTile", self);
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

		var navName = sap.ui.getCore().byId(oEvent.getParameters().id).getModel().getData().name;
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);

			oRouter.navTo("gamescreen", {
				name: navName
			});
		},

		onDonate: function() {
			var url = "https://secure.kwf.nl/ikdoneervoor?utm_source=il-64#donate_form";
			window.open(url);
		},
		
		imageFormatter : function(value) {
    		var imageSrc = "images/faces/1_" + value + ".svg";
    		return imageSrc;
		},

		onAddAccount: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("addaccount");
		},

		onLeaderBoard: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("leaderboard");
		},

		onCheck: function() {
			//Quiz Dialog verificatie event
		}
	});
});