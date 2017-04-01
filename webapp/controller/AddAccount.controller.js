sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Zonbewust.controller.AddAccount", {

		onInit: function() {
		
		},

		onAfterRendering: function() {
			// var data = {
			// 	"name": "null",
			// 	"age": null,
			// 	"panda_gender": null,
			// 	"panda_name": null,
			// 	"bamboo": null
			// };
			var oUsers = this.getView().getModel("oUsers");
			oUsers.refresh(true, true);
				
			var oContext = oUsers.createEntry("/Z_User");

			this.getView().byId("formChangeAccount").setBindingContext(oContext, "oUsers");
		},
		
		onSave: function(oEvent) {
			var oUsers = this.getView().getModel("oUsers");

			if (oUsers.hasPendingChanges()) {
				oUsers.submitChanges({
					success: function(oData) {
						sap.m.MessageToast.show("Succesfully saved");
					},
					error: function(oError) {
						sap.m.MessageToast.show(oError.message);
					}
				});
			}
		}

	});
});