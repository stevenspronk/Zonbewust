sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Zonbewust.controller.AddAccount", {

		onInit: function() {

			var data = {
				"name": null,
				"age": null,
				"panda_gender": null,
				"panda_name": null,
				"bamboo": 0,
				"panda_color": "green"
			};

			var oModel = new sap.ui.model.json.JSONModel(data);
			this.getView().setModel(oModel);
		},

		onSave: function(oEvent) {
			var self = this;
			var oUsers = this.getView().getModel("oUsers");
			var oModel = this.getView().getModel();

			oUsers.createEntry("/Z_User", {
				properties: oModel.getData()
			});

			if (oUsers.hasPendingChanges()) {
				oUsers.submitChanges({
					success: function(oData) {
						sap.m.MessageToast.show("Succesfully saved");
						var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
						oRouter.navTo("login");
					},
					error: function(oError) {
						sap.m.MessageToast.show(oError.message);
						var oRouter = sap.ui.core.UIComponent.getRouterFor(self);
						oRouter.navTo("login");
					}
				});
			} else {
				sap.m.MessageToast.show("No changes");
			}

		},
		
				onBack  : function() {
				//Start Event dat leidt naar het GameScreen
			//Dit kan via de AddAccount Dialog of door direct een van de bestaande accounts te kiezen
			if (this._oDialog) {
				this.onCloseAccount();	
			}
			
			//Event voor navigatie-routing naar Gamescreen
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("login");
		}

	});
});