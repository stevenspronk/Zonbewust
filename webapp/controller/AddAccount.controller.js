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
				"bamboo": null,
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

		}

	});
});