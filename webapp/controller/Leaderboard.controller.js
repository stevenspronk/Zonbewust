sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Zonbewust.controller.Leaderboard", {
		onAfterRendering: function() {
			var oModel = this.getView().getModel("oUsers");
			this.getView().setModel(oModel);
			oModel.updateBindings();
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
		},
		
		imageFormatter : function(value) {
    		var imageSrc = "images/faces/1_" + value + ".svg";
    		return imageSrc;
		}
	});

});