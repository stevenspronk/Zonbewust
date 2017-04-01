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
			var self = this;
			var oUsers = this.getView().getModel("oUsers");
			var path = "/Z_User(name='" + oArgs.name + "')";

			oUsers.read(path, {
				success: function(oData, response) {
					var data = new sap.ui.model.json.JSONModel(oData);
					self.getView().setModel(data); 
					self.changeScenery();                  
				},
				error: function(oError) {
					sap.m.MessageToast.show(oError.message);
				}
			});

		},
		
		changeScenery : function ()
		{
			var oModel = this.getView().getModel();
			
			if(oModel.getData().panda_color === "orange")
			{
			this.getView().byId("gamePage").removeStyleClass('gamePageBeach');		
			this.getView().byId("gamePage").addStyleClass('gamePageSoccer');
			this.getView().byId("gameCharacter").setSrc('images/body/1_orange.svg');
			this.getView().byId("gameParasol").setVisible(false);
			this.getView().byId("gameTube").setVisible(true);
			this.getView().byId("gameMessage").setVisible(false);
			} 
			else if(oModel.getData().panda_color === "red")
			{
			this.getView().byId("gamePage").removeStyleClass('gamePageSoccer');	
			this.getView().byId("gamePage").addStyleClass('gamePageBeach');
			this.getView().byId("gameCharacter").setSrc('images/body/1_red.svg');
			this.getView().byId("gameMessage").setVisible(false);
			this.getView().byId("gameParasol").setVisible(true);
			this.getView().byId("gameTube").setVisible(false);
			}
			
		//	var oModel = this.getView().getModel();
			console.log(oModel.panda_color);
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
		
		onParasol  : function() {
			this.getView().byId("gameMessage").setVisible(true);
			this.getView().byId("gameParasol").setVisible(false);
		},
		
		onTube  : function() {
			
			this.getView().byId("gameCharacter").setSrc('images/body/1_green.svg');
			this.getView().byId("gameTube").setVisible(false);
			
		}
		
	
	});

});