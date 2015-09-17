/**
 * Created by Naoki on 9/15/2015.
 */
(function() {
    function Routes($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'modules/home/home.html'
                // controller:
            })
            .state('resume', {
                url: '/resume',
                templateUrl: 'modules/resume/resume.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'modules/contact/contact.html'
            });
    }

    angular
        .module('Routes',[])
        .config(['$stateProvider', '$urlRouterProvider', Routes]);
}) ();