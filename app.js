angular.module('attendanceApp', ['ui.router', 'satellizer','ui.bootstrap'])
    .config(function($stateProvider, $urlRouterProvider, $authProvider) {

        $urlRouterProvider.otherwise('/Login');
        $stateProvider
            .state('Login', {
                url: '/Login',
                views: {
                    content: {
                        templateUrl: 'pages/login.html'
                    }
                }
            })
            .state('OTP', {
                url: '/OTP',
                views: {
                    content: {
                        templateUrl: 'pages/otp.html'
                    }
                }
            })
            .state('Attendance', {
                url: '/Attendance',
                views: {
                    content: {
                        templateUrl: 'pages/attendance.html'
                    }
                },
                controller: 'attendanceCtrl'
            })
            .state('Records', {
                url: '/Records',
                views: {
                    tableData: {
                        templateUrl: 'pages/record.html'
                    }
                }
            })
    });
