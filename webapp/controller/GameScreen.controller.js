sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("Zonbewust.controller.GameScreen", {


		onInit: function() {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.getRoute("gamescreen").attachMatched(this._onRouteMatched, this);
			
			
			
		},
		_onRouteMatched: function(oEvent) {

			var	oArgs = oEvent.getParameter("arguments");

			var oUsers = this.getView().getModel("oUsers");
			var path = "/Z_User(name='" + oArgs.name + "')";

			oUsers.read(path, {
				success: function(oData, response) {
					console.log(oData);
				},
				error: function(oError) {
					sap.m.MessageToast.show(oError.message);
				}
			});

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
		
		onAction  : function() {
			
			this.getView().byId("gameCharacter").setSrc('images/body/1.svg');
			this.getView().byId("gameTube").setVisible(false);
			
		}
		
	
	});

});