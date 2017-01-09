angular
	.module("x1.ui.bootstrap")
	.config([
		"$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("tables", {
					url: "/bootstrap/tables",
					templateUrl: "tables/tables.demo.html"
				});
		}
	]);
