(function(){
	angular
		.module('shopApp')
		.controller('ShopCtrl',ShopCtrl)

	function ShopCtrl($scope,productSrv){
		var shopVm = this;

		//TODO #3 Capture resolved products for view
<<<<<<< HEAD
		shopVm.products;
=======

		// Get array of products from service and assign it
		shopVm.products = productSrv.products;


		// Function to retrieve all the products using the products service
		shopVm.getAllProducts = getAllProducts;
		function getAllProducts(){
				// Get array and store it in local variable
				var allProducts = productSrv.products;
				console.log("allProducts",allProducts);
		};
>>>>>>> origin/master

		//watch for any changes to model data
		$scope.$watch(function(){
	    	return productSrv.products;
		}, function (newValue) {
		    shopVm.products = productSrv.products;
		});
	}

})();


