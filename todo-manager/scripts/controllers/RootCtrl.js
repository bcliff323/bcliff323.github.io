define([
    'controllers/controllers'
    ],
    function(controllers) {
        controllers.controller('RootCtrl', 
            [
                '$scope', 
                'Lists',
                '$location',
                
                /**
                 * The Root Controller manages the model state for all sub-components.
                 * It is makes a reference to the Lists service available to the rest of
                 * the app, it sets routes and saves updates to the model.
                 *
                 * @param {Object} $scope - The root scope object.
                 * @param {Object} Lists - The Lists service.
                 * @param {Object} $location - The location object, includes url path.
                 */
                function($scope, Lists, $location) {
                    $scope.todoLists = Lists.query();
                    $scope.activeList = $scope.todoLists[Lists.getIndex($location.path())] || {};

                    /**
                     * Sets the route when a user switches between list views, adds,
                     * or deletes a list. Updates the application's `activeList` when
                     * any navigation between lists occurs.
                     */
                    $scope.setRoute = function(route) {
                        var lists = $scope.todoLists;
                        
                        $location.path(route);

                        for(var i=0, len = lists.length; i < len; i++) {
                            if(lists[i].list === route) {
                                $scope.activeList = lists[i];
                            }
                        }

                        $scope.save();
                    };

                    /**
                     * Saves the model state given a change in the model, or 
                     * navigation between lists.
                     */
                    $scope.save = function() {
                        Lists.update();
                    };

                    /**
                     * Searches the todo lists for a list matching the route
                     *
                     * @param { String } route - The route path from the URL
                     * @returns { Boolean } True, if the route matches a list,
                     *      false otherwise.
                     */
                    var matchList = function(route) {
                        var routeName = route.replace('/','');

                        for(var i = 0, len = $scope.todoLists.length; i < len; i++) {
                            if($scope.todoLists[i].list === routeName) {
                                return true;
                            }
                        }

                        return false;
                    };

                    /**
                     * If a route is specified on page load, and the value
                     * matches a todo list, load that list in the List view.
                     * Otherwise, change the route to the first available list.
                     */
                    if($location.path().length > 1) {
                        if(matchList($location.path())) {
                            $scope.setRoute($location.path());
                        } else {
                            $scope.setRoute($scope.todoLists[0].list);
                        }
                    } else {
                        if($scope.todoLists[0] !== undefined) {
                            $scope.setRoute($scope.todoLists[0].list);
                        }
                    }
                }
            ]
        );
    }
);