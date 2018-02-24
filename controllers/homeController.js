calculator.controller('homeController', ['$scope', 'itemsService', function($scope, itemsService) {
  $scope.addItem = function(item) {
    $scope.totalNutrition = itemsService.calculateAddItem($scope.totalNutrition, item);
    $scope.totalDV = itemsService.calculateDV($scope.totalNutrition, $scope.totalDV);
    // $scope.addToList(item);
    item.quantity = item.quantity + 1;
    //if item is already on the list, it'll just update that item's quantity
    for (i = 0; i < $scope.itemObjects.length; i++) {
      if ($scope.itemObjects[i].name == item.name) {
        $scope.itemObjects[i].quantity = $scope.itemObjects[i].quantity + 1;
          $scope.itemNumber = $scope.itemNumber + 1;
      }
    };
  };

  $scope.removeItem = function(item) {
    $scope.totalNutrition = itemsService.calculateRemoveItem($scope.totalNutrition, item);
    $scope.totalDV = itemsService.calculateDV($scope.totalNutrition, $scope.totalDV);
    // $scope.addToList(item);
    item.quantity = item.quantity - 1;
    //if item is already on the list, it'll just update that item's quantity
    for (i = 0; i < $scope.itemObjects.length; i++) {
      if ($scope.itemObjects[i].name == item.name) {
        $scope.itemObjects[i].quantity = $scope.itemObjects[i].quantity - 1;
        $scope.itemNumber = $scope.itemNumber - 1;
      }
    };
  };

  /*ARRAY OF ITEMS AND THEIR NUTRITION DATA*/
  $scope.itemObjects = itemsService.itemObjects;

  /*NUMBER OF ITEMS ADDED*/
  $scope.itemNumber = 0;
  $scope.qtyNumber = 0;

  /*TOTAL NUTRITION DATA*/
  $scope.totalNutrition = itemsService.totalNutrition;

  /*DAILY VALUE PERCENTAGES*/
  $scope.totalDV = itemsService.totalDV;

  /*ITEM DATA*/
  $scope.flavors = itemsService.flavors;
  $scope.toppings = itemsService.toppings;
  $scope.cones = itemsService.cones;

}]);
