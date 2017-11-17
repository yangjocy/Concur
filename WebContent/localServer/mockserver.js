sap.ui.define([
	"sap/ui/core/util/MockServer"
], function (MockServer) {
	"use strict";
	return {
		init: function () {
			// create
			var oMockServer = new MockServer({
				rootUri: "/"
			}); 

			// configure
			MockServer.config({
				autoRespond: true
			});

			// simulate
			oMockServer.simulate("localServer/metadata.xml", {
				sMockdataBaseUrl:"localServer/mockData",
				bGenerateMissingMockData: true
			});

			// start
			oMockServer.start();
			jQuery.sap.log.info("Running the app with mock data");
		}
	};
});