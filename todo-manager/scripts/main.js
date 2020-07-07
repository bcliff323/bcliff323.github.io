require.config({
    paths: {
        angular: 'lib/angular.min',
        domReady: 'lib/domReady',
        app: 'app'
    },
    shim: {
        angular: {
            exports: 'angular'
        }
    }
});

require([
    'angular',
    'app',
    'domReady',
    'controllers/RootCtrl',
    'controllers/InputCtrl',
    'controllers/ListCtrl',
    'controllers/NavCtrl',
    'services/Lists'
    ],
    function(angular, app, domReady) {
        domReady(function() {
            angular.bootstrap(document, ['RootApp']);
        });
    }
);