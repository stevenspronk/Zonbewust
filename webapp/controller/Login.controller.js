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

		onAddAccount: function() {
			//Nieuw account toevoegen
			//Resource bundle ophalen
			var resourceBundle = sap.ui.getCore().getModel("i18n").getResourceBundle();

			//Account toevoegen Dialog popup
			this._oDialog = null;

			if (!this._oDialog) {
				this._oDialog = sap.ui.xmlfragment("Zonbewust.view.AddAccount", this);

			}
			this.getView().addDependent(this._oDialog);
			this._oDialog.open();
		},
		
		onCloseAccount: function() {
			//Sluiten van de AddAccount Dialog
			this._oDialog.close();
			this._oDialog.destroy();
		},
		
		onStart: function(oEvent) {
			//Start Event dat leidt naar het GameScreen
			//Dit kan via de AddAccount Dialog of door direct een van de bestaande accounts te kiezen
			if (this._oDialog) {
				this.onCloseAccount();	
			}
			
			//Event voor navigatie-routing naar Gamescreen
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("gamescreen");
			
	
		
		},
		
		onCheck: function() {
			//Quiz Dialog verificatie event
		}
	});
});