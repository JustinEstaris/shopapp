// controller for shopping cart modal
angular
    .module('shopApp')
    .controller('ModalInstanceCtrl', function ($uibModalInstance, items, $state) {

    var modalVm = this;

    var fakeCart = [{
      "name": 'One',
      "image": 'One',
      "description": 'One',
      "category": 'One',
      "price": 3.00,
      "quantity": 1
    },
    {
      "name": 'Two',
      "image": 'Two',
      "description": 'Two',
      "category": 'Two',
      "price":  4.00,
      "quantity": 2
    }];

    // modalVm.items = items; // use REAL data
    modalVm.items = fakeCart; // use FAKE data
    modalVm.selected = {
      item: modalVm.items[0]
    };

    console.log(modalVm.items);

    modalVm.ok = function () {
      $state.go('shop.checkout');
      $uibModalInstance.close(modalVm.selected.item);
    };

    modalVm.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };

    // modalVm.checkOut = checkout;
    // function checkOut (){

    // }
});
