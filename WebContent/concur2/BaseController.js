sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
	], function (Controller, History) {
		"use strict";
		return Controller.extend("concur.concur2.BaseController", {

			onInit:function(){
				let oRouter = this.getRouter();
				if (oRouter) {
					oRouter.attachRoutePatternMatched(this.onRoutePatternMatched, this);
				}
			},

			getRouter : function () {
				return sap.ui.core.UIComponent.getRouterFor(this);
			},

			onNavBack: function (oEvent) {
				var oHistory, sPreviousHash;
				oHistory = History.getInstance();
				sPreviousHash = oHistory.getPreviousHash();
				if (sPreviousHash !== undefined) {
					window.history.go(-1);
				} else {
					this.getRouter().navTo("home", {}, true /*no history*/);
				}
			},

			onRoutePatternMatched:function(oEvent){}
		});
	});