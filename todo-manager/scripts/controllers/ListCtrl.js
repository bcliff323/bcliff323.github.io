define([
    'controllers/controllers'
    ],
    function(controllers) {
        controllers.controller('ListCtrl', 
            [
                '$scope',
                '$routeParams',
                
                /**
                 * The List Controller is responsible for sending todo list
                 * item data to the list view. This retrieves data and updates
                 * the view whenever the Root Controller changes the active 
                 * todo list.
                 */
                function($scope, $routeParams) {
                    $scope.todoItems = $scope.$parent.activeList.details || [];

                    /**
                     * Removes items from model when the remove button is clicked.
                     *
                     * @param {Number} index - The index of the item to remove.
                     */
                    $scope.removeItem = function(index) {
                        $scope.todoItems.splice(index, 1);
                        $scope.$parent.save();
                    };
                }
            ]
        );
    }
);