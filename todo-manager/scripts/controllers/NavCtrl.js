define([
    'controllers/controllers'
    ],
    function(controllers) {
        controllers.controller('NavCtrl', 
            [
                '$scope',
                
                /**
                 * Controller for the nav element. Adds new todo lists to
                 * the model and toggles visibility of the nav list input
                 * field.
                 *
                 * @param {Object} $scope - The nav element's scope
                 */
                function($scope) {
                    $scope.todoLists = $scope.$parent.todoLists;
                    $scope.newListName = '';
                    $scope.showInput = $scope.todoLists.length ? false : true;

                    /**
                     * Adds a new list object to the model.
                     */
                    $scope.addNewList = function() {
                        toggleInputVisibility();

                        if($scope.newListName !== '') {
                            $scope.$parent.todoLists.push({
                                list: $scope.newListName,
                                details: []
                            });
                            $scope.$parent.setRoute($scope.newListName);
                            $scope.newListName = '';
                            $scope.showInput = false;
                        }
                    };

                    /**
                     * Toggles the visibility state of the nav input.
                     */
                    var toggleInputVisibility = function() {
                        $scope.showInput = !$scope.showInput;
                    };
                }
            ]
        );
    }
);