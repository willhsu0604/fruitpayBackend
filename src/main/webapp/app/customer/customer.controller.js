(function(){
    'use strict';

    angular
        .module('customer')
        .controller('CustomerController',CustomerController);
    CustomerController.$inject = ['CustomerService','$routeParams'];

    function CustomerController(CustomerService,$routeParams){
        var vm = this ;	//view model
        var customerId = $routeParams.customerId;
        vm.customer ;
        vm.update = update;

        activate();

        function activate(){
        	console.log("123");
        	CustomerService.findAll();
        }

        function update(customer){

        }

    }
})();