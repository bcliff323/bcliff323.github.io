define([
    'controllers/controllers'
    ],
    function(controllers) {
        controllers.controller('InputCtrl', 
            [
                '$scope',
                
                /**
                 * The Input Controller Manages addition and deletion of list
                 * items to the app's active list.
                 *
                 * @param {Object} $scope - The Input Controller's scope.
                 */
                function($scope) {
                    $scope.newItem = '';

                    /**
                     * Adds a new todo item to the model. Saves to local storage.
                     */
                    $scope.addNewItem = function() {
                        if($scope.newItem !== '') { 
                            $scope.$parent.activeList.details.unshift({
                                item: $scope.newItem,
                                statusCode: 0
                            });
                            $scope.$parent.save();
                            $scope.newItem = '';
                        }
                    };

                    /**
                     * Changes the status of a todo item. Saves updates to the
                     * model.
                     *
                     * @param {Object} todo - The todo item object
                     * @param {Number} index - The new status code
                     */
                    $scope.changeStatus = function(todo, index) {
                        todo.statusCode = index;
                        $scope.$parent.save();
                    };

                    /**
                     * Removes the active list from the model. Sets the route
                     * and saves to local storage.
                     */
                    $scope.removeActiveList = function() {
                        for(var i = 0, len = $scope.$parent.todoLists.length; i < len; i++) {
                            if($scope.$parent.todoLists[i].list === $scope.$parent.activeList.list) {
                                $scope.$parent.todoLists.splice(i, 1);

                                if($scope.$parent.todoLists[i-1] !== undefined) {
                                    $scope.$parent.activeList = $scope.$parent.todoLists[i-1];
                                    $scope.$parent.setRoute($scope.$parent.todoLists[i-1].list);
                                } else {
                                    if($scope.$parent.todoLists.length) {
                                        $scope.$parent.activeList = $scope.$parent.todoLists[i];
                                        $scope.$parent.setRoute($scope.$parent.todoLists[i].list);
                                    } else {
                                        $scope.$parent.activeList = {};
                                        $scope.$parent.setRoute('/');
                                    }
                                    
                                }
                                break;
                            }
                        }
                    };
                }
            ]
        );
    }
);