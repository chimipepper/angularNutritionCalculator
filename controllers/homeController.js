calculator.controller('homeController', ['$scope', function($scope) {
$scope.addItem= function(item) {
        $scope.calorieTotal= $scope.calorieTotal + item.calories;
        $scope.fatCalTotal = $scope.fatCalTotal + item.fatCalories;
        $scope.totalFatGrams = $scope.totalFatGrams + item.fatGrams;
        $scope.totalSatFat = $scope.totalSatFat + item.satFatGrams;
        $scope.totalTransFat = $scope.totalTransFat + item.transFatGrams;
        $scope.totalCholesterol = $scope.totalCholesterol + item.cholesterolMg;
        $scope.totalSodium = $scope.totalSodium + item.sodiumMg;
        $scope.totalCarbs = $scope.totalCarbs + item.carbTotal;
        $scope.totalFiber = $scope.totalFiber + item.fiberGrams;
        $scope.totalSugar = $scope.totalSugar + item.sugarGrams;
        $scope.totalProtein = $scope.totalProtein + item.proteinGrams;
        $scope.totalFatDV = ($scope.totalFatGrams/65)*100;
        $scope.totalSatFatDV = ($scope.totalSatFat/20)*100;
        $scope.totalCholesterolDV = ($scope.totalCholesterol/300)*100;
        $scope.totalSodiumDV = ($scope.totalSodium/2400)*100;
        $scope.totalCarbDV = ($scope.totalCarbs/300)*100;
        $scope.totalDietFiberDV = ($scope.totalFiber/25)*100;
        $scope.itemNumber= $scope.itemNumber + 1;
        $scope.totalVitaminA = (item.vitaminA/1000)*100;
        $scope.totalVitaminC = (item.vitaminC/60)*100;
        $scope.totalCalcium = (item.calcium/1100)*100;
        $scope.totalIron = (item.iron/14)*100;

        $scope.addToList(item);
};

    $scope.removeItem= function(item) {
      $scope.qtyNumber= $scope.qtyNumber - 1;
      $scope.calorieTotal= $scope.calorieTotal - item.calories;
      $scope.fatCalTotal = $scope.fatCalTotal - item.fatCalories;
      $scope.totalFatGrams = $scope.totalFatGrams - item.fatGrams;
      $scope.totalSatFat = $scope.totalSatFat - item.satFatGrams;
      $scope.totalTransFat = $scope.totalTransFat - item.transFatGrams;
      $scope.totalCholesterol = $scope.totalCholesterol - item.cholesterolMg;
      $scope.totalSodium = $scope.totalSodium - item.sodiumMg;
      $scope.totalCarbs = $scope.totalCarbs - item.carbTotal;
      $scope.totalFiber = $scope.totalFiber - item.fiberGrams;
      $scope.totalSugar = $scope.totalSugar - item.sugarGrams;
      $scope.totalProtein = $scope.totalProtein - item.proteinGrams;
      $scope.totalFatDV = ($scope.totalFatGrams/65)*100;
      $scope.totalSatFatDV = ($scope.totalSatFat/20)*100;
      $scope.totalCholesterolDV = ($scope.totalCholesterol/300)*100;
      $scope.totalSodiumDV = ($scope.totalSodium/2400)*100;
      $scope.totalCarbDV = ($scope.totalCarbs/300)*100;
      $scope.totalDietFiberDV = ($scope.totalFiber/25)*100;
      $scope.itemNumber= $scope.itemNumber - 1;
      $scope.totalVitaminA = (item.vitaminA/1000)*100;
      $scope.totalVitaminC = (item.vitaminC/60)*100;
      $scope.totalCalcium = (item.calcium/1100)*100;
      $scope.totalIron = (item.iron/14)*100;
      $scope.removeFromList(item);
    };

/*============================================================================================================================================*/
  $scope.addToList=function(item){
      item.quantity = item.quantity + 1;
    //if item is already on the list, it'll just update that item's quantity
          for (i = 0; i < $scope.itemObjects.length; i++) {
              if ($scope.itemObjects[i].name == item.name){
                $scope.itemObjects[i].quantity= $scope.itemObjects[i].quantity + 1;
              }
    //else make a new object
              // else {
              //   $scope.newListItem = {
              //     name:item.name,
              //     itemQuantity:item.quantity
              //   }
              // }
            };

    // alert(JSON.stringify($scope.newListItem));
      // $scope.itemObjects.push($scope.newListItem);
    };

    $scope.removeFromList=function(item){
      item.quantity = item.quantity - 1;
      for (i = 0; i < $scope.itemObjects.length; i++) {
          if ($scope.itemObjects[i].name === item.name){
            $scope.itemObjects[i].quantity= $scope.itemObjects[i].quantity - 1;
          }
      }
    };

$scope.itemObjects =[
  {
    name: "Mint Chocolate Chip",
    quantity:0
  },
  {
    name:"Strawberry",
    quantity:0
  },
  {
    name:"Chocolate",
    quantity:0
  },
  {
    name:"Vanilla",
    quantity:0
  },
  {
    name:"Whipped Cream",
    quantity:0
  },
  {
    name:"Hot Fudge",
    quantity:0
  },
  {
    name:"Nuts",
    quantity:0
  },
  {
    name:"Sprinkles",
    quantity:0
  },
  {
    name:"Waffle Cone",
    quantity:0
  },
  {
    name:"Wafer Cone",
    quantity:0
  },
  {
    name:"Chocolate Covered Cone",
    quantity:0
  },
  {
    name:"No Cone",
    quantity:0
  }
];

/*============================================================================================================================================*/

/*NUMBER OF ITEMS ADDED*/
  $scope.itemNumber=0;
  $scope.qtyNumber=0;

/*TOTAL NUTRITION*/
    $scope.calorieTotal=0;
    $scope.fatCalTotal= 0;
    $scope.totalFatGrams = 0;
    $scope.totalSatFat = 0;
    $scope.totalTransFat = 0;
    $scope.totalCholesterol = 0;
    $scope.totalSodium = 0;
    $scope.totalCarbs = 0;
    $scope.totalFiber = 0;
    $scope.totalSugar = 0;
    $scope.totalProtein = 0;
    $scope.totalVitaminA = 0;
    $scope.totalVitaminC = 0;
    $scope.totalCalcium = 0;
    $scope.totalIron = 0;

/*DAILY VALUE PERCENTAGES*/
    $scope.totalFatDV = 0;
    $scope.totalSatFatDV = 0;
    $scope.totalCholesterolDV = 0;
    $scope.totalSodiumDV = 0;
    $scope.totalCarbDV = 0;
    $scope.totalDietFiberDV = 0;

/*ITEM DATA*/
          $scope.flavors=[
              {
                name: "Mint Chocolate Chip",
                calories: 200,
                fatCalories: 200,
                fatGrams: 2,
                satFatGrams: 2,
                transFatGrams: 2,
                cholesterolMg: 2,
                sodiumMg: 2,
                carbTotal: 2,
                fiberGrams: 2,
                sugarGrams: 2,
                proteinGrams: 2,
                vitaminA: 200,
                vitaminC: 2,
                calcium:200,
                iron:2,
                quantity:0
              },
              {
                name:"Strawberry",
                calories:300,
                fatCalories: 300,
                fatGrams: 3,
                satFatGrams: 3,
                transFatGrams: 3,
                cholesterolMg: 3,
                sodiumMg: 3,
                carbTotal: 3,
                fiberGrams: 3,
                sugarGrams: 3,
                proteinGrams: 3,
                vitaminA: 300,
                vitaminC: 3,
                calcium:300,
                iron:3,
                quantity:0
              },
              {
                name:"Chocolate",
                calories:400,
                fatCalories: 400,
                fatGrams: 4,
                satFatGrams: 4,
                transFatGrams: 4,
                cholesterolMg: 4,
                sodiumMg: 4,
                carbTotal: 4,
                fiberGrams: 4,
                sugarGrams: 4,
                proteinGrams: 4,
                vitaminA: 400,
                vitaminC: 4,
                calcium:400,
                iron:4,
                quantity:0
              },
              {
                name:"Vanilla",
                calories:500,
                fatCalories: 500,
                fatGrams: 5,
                satFatGrams: 5,
                transFatGrams: 5,
                cholesterolMg: 5,
                sodiumMg: 5,
                carbTotal: 5,
                fiberGrams: 5,
                sugarGrams: 5,
                proteinGrams: 5,
                vitaminA: 500,
                vitaminC: 5,
                calcium:500,
                iron:5,
                quantity:0
              }
          ];

          $scope.toppings=[
            {
              name:"Whipped Cream",
              calories: 200,
              fatCalories: 200,
              fatGrams: 2,
              satFatGrams: 2,
              transFatGrams: 2,
              cholesterolMg: 2,
              sodiumMg: 2,
              carbTotal: 2,
              fiberGrams: 2,
              sugarGrams: 2,
              proteinGrams: 2,
              vitaminA: 200,
              vitaminC: 2,
              calcium:200,
              iron:2,
              quantity:0
            },
            {
              name:"Hot Fudge",
              calories:300,
              fatCalories: 300,
              fatGrams: 3,
              satFatGrams: 3,
              transFatGrams: 3,
              cholesterolMg: 3,
              sodiumMg: 3,
              carbTotal: 3,
              fiberGrams: 3,
              sugarGrams: 3,
              proteinGrams: 3,
              vitaminA: 300,
              vitaminC: 3,
              calcium:300,
              iron:3,
              quantity:0
            },
            {
              name:"Nuts",
              calories:400,
              fatCalories: 400,
              fatGrams: 4,
              satFatGrams: 4,
              transFatGrams: 4,
              cholesterolMg: 4,
              sodiumMg: 4,
              carbTotal: 4,
              fiberGrams: 4,
              sugarGrams: 4,
              proteinGrams: 4,
              vitaminA: 400,
              vitaminC: 4,
              calcium:400,
              iron:4,
              quantity:0
            },
            {
              name:"Sprinkles",
              calories:500,
              fatCalories: 500,
              fatGrams: 5,
              satFatGrams: 5,
              transFatGrams: 5,
              cholesterolMg: 5,
              sodiumMg: 5,
              carbTotal: 5,
              fiberGrams: 5,
              sugarGrams: 5,
              proteinGrams: 5,
              vitaminA: 500,
              vitaminC: 5,
              calcium:500,
              iron:5,
              quantity:0
            }
          ];

          $scope.cones =[
            {
              name:"Waffle Cone",
              calories: 200,
              fatCalories: 200,
              fatGrams: 2,
              satFatGrams: 2,
              transFatGrams: 2,
              cholesterolMg: 2,
              sodiumMg: 2,
              carbTotal: 2,
              fiberGrams: 2,
              sugarGrams: 2,
              proteinGrams: 2,
              vitaminA: 200,
              vitaminC: 2,
              calcium:200,
              iron:2,
              quantity:0
            },
            {
              name:"Wafer Cone",
              calories:300,
              fatCalories: 300,
              fatGrams: 3,
              satFatGrams: 3,
              transFatGrams: 3,
              cholesterolMg: 3,
              sodiumMg: 3,
              carbTotal: 3,
              fiberGrams: 3,
              sugarGrams: 3,
              proteinGrams: 3,
              vitaminA: 300,
              vitaminC: 3,
              calcium:300,
              iron:3,
              quantity:0
            },
            {
              name:"Chocolate Covered Cone",
              calories:400,
              fatCalories: 400,
              fatGrams: 4,
              satFatGrams: 4,
              transFatGrams: 4,
              cholesterolMg: 4,
              sodiumMg: 4,
              carbTotal: 4,
              fiberGrams: 4,
              sugarGrams: 4,
              proteinGrams: 4,
              vitaminA: 400,
              vitaminC: 4,
              calcium:400,
              iron:4,
              quantity:0
            },
            {
              name:"No Cone",
              calories:500,
              fatCalories: 500,
              fatGrams: 5,
              satFatGrams: 5,
              transFatGrams: 5,
              cholesterolMg: 5,
              sodiumMg: 5,
              carbTotal: 5,
              fiberGrams: 5,
              sugarGrams: 5,
              proteinGrams: 5,
              vitaminA: 500,
              vitaminC: 5,
              calcium:500,
              iron:5,
              quantity:0
            }
          ];
}]);
