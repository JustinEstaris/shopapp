(function(){
    angular
        .module ('shopApp')
        .controller ('CheckOutCtrl', CheckOutCtrl);

    function CheckOutCtrl(productSrv) {
        CheckOutCtrl = this;

        this.products = productSrv.cart; // data in the cart

        // var fakeCart = [{
        //   "name": 'One',
        //   "image": 'One',
        //   "description": 'One',
        //   "category": 'One',
        //   "price": 3.00,
        //   "quantity": 1
        // },
        // {
        //   "name": 'Two',
        //   "image": 'Two',
        //   "description": 'Two',
        //   "category": 'Two',
        //   "price":  4.00,
        //   "quantity": 2
        // }];

        // this.products = fakeCart; // to use fake data

        this.invoice = {
            items: [{
                qty: 10,
                description: 'item',
                cost: 9.95}]
        };

        this.addItem = function() {
            this.invoice.items.push({
                qty: 1,
                description: '',
                cost: 0
            });
        },

        this.removeItem = function(index) {
            this.invoice.items.splice(index, 1);
        },

        this.total = function() {
            var total = 0;
            angular.forEach($scope.invoice.items, function(item) {
                total += item.qty * item.cost;
            })

            return total;
        }
    }
})();