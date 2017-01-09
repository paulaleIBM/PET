angular
	.module("x1.ui.bootstrap")
	.config([
		"$stateProvider",
		function($stateProvider) {
			"use strict";

			$stateProvider
				.state("tooltips", {
					url: "/bootstrap/tooltips",
					templateUrl: "tooltips/tooltips.demo.html"
				});
		}
	]);
