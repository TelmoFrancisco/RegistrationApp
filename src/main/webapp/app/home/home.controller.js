(function() {
    'use strict';

    angular
        .module('regPlatApp')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$scope', 'Principal', 'LoginService', '$state'];

    function HomeController ($scope, Principal, LoginService, $state) {
        var vm = this;

        vm.account = null;
        vm.isAuthenticated = null;
        vm.login = LoginService.open;
        vm.register = register;
        $scope.$on('authenticationSuccess', function() {
            getAccount();
        });

        getAccount();

        function getAccount() {
            Principal.identity().then(function(account) {
                vm.account = account;
                vm.isAuthenticated = Principal.isAuthenticated;
            });
        }
        function register () {
            $state.go('register');
        }
        
        "use strict";
        $(".number-counters").appear(function () {
            $(".number-counters [data-to]").each(function () {
                var e = $(this).attr("data-to");
                $(this).delay(6e3).countTo({
                    from: 50,
                    to: e,
                    speed: 3e3,
                    refreshInterval: 50
                })
            })
        });
        
        var slideHeight = $(window).height();
    	
    	$('#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);
    	
    	$(window).resize(function(){'use strict',
    		$('#container,#container,#slider, .carousel.slide, .carousel-inner, .carousel-inner .item').css('height',slideHeight);
    	});
    }
})();
