sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Zonbewust.controller.GameScreen", {
		
		
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
		
		onAction  : function() {
			
			this.getView().byId("gameCharacter").setSrc('images/body/1.svg');
			this.getView().byId("gameTube").setVisible(false);
			
		}
		
	

	});

});