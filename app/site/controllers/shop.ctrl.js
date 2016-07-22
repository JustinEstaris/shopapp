(function(){
	angular
		.module('shopApp')
		.controller('ShopCtrl',ShopCtrl)

	function ShopCtrl($scope,productSrv,$uibModal){
	var productsVm = this;

		// productsVm.items = ['item1', 'item2', 'item3']; // data that gets passed into shopping cart modal

		productsVm.animationsEnabled = true;

		productsVm.open = open;

		productsVm.open = function (size) {
		  	console.log('open');

		    var modalInstance = $uibModal.open({
		      animation: productsVm.animationsEnabled,
		      templateUrl: 'site/partials/modal.html',
		      controller: 'ModalInstanceCtrl as ctrl',
		      size: size,
		      resolve: {
		        items: function() {
		          return productSrv.cart; // how we pass data into shopping cart controller
		        }
		      }
		    });
		}

		  productsVm.toggleAnimation = function () {
		    productsVm.animationsEnabled = !productsVm.animationsEnabled;
		};


	}

})();


