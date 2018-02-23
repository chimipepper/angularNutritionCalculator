calculator.controller('homeController', ['$scope', function($scope) {

    $scope.addItem= function(itemCalories, itemFatCalories, itemFatGrams, itemSatFat, itemTransFat, itemCholesterol, itemSodium, itemCarbs, itemFiber, itemSugar, itemProtein,itemVitA, itemVitC, itemCalcium, itemIron, qtyNumber) {
//find calorie value of the flavor seelcted
      $scope.qtyNumber = $scope.qtyNumber + 1;
      $scope.calorieTotal= $scope.calorieTotal + itemCalories;
      $scope.fatCalTotal = $scope.fatCalTotal + itemFatCalories;
      $scope.totalFatGrams = $scope.totalFatGrams + itemFatGrams;
      $scope.totalSatFat = $scope.totalSatFat + itemSatFat;
      $scope.totalTransFat = $scope.totalTransFat + itemTransFat;
      $scope.totalCholesterol = $scope.totalCholesterol + itemCholesterol;
      $scope.totalSodium = $scope.totalSodium + itemSodium;
      $scope.totalCarbs = $scope.totalCarbs + itemCarbs;
      $scope.totalFiber = $scope.totalFiber + itemFiber;
      $scope.totalSugar = $scope.totalSugar + itemSugar;
      $scope.totalProtein = $scope.totalProtein + itemProtein;
      $scope.totalFatDV = ($scope.totalFatGrams/65)*100;
      $scope.totalSatFatDV = ($scope.totalSatFat/20)*100;
      $scope.totalCholesterolDV = ($scope.totalCholesterol/300)*100;
      $scope.totalSodiumDV = ($scope.totalSodium/2400)*100;
      $scope.totalCarbDV = ($scope.totalCarbs/300)*100;
      $scope.totalDietFiberDV = ($scope.totalFiber/25)*100;
      $scope.itemNumber= $scope.itemNumber+ 1;
      $scope.totalVitaminA = (itemVitA/1000)*100;
      $scope.totalVitaminC = (itemVitC/60)*100;
      $scope.totalCalcium = (itemCalcium/1100)*100;
      $scope.totalIron = (itemIron/14)*100;
    };
    $scope.removeItem= function(itemCalories, itemFatCalories, itemFatGrams, itemSatFat, itemTransFat, itemCholesterol, itemSodium, itemCarbs, itemFiber, itemSugar, itemProtein,itemVitA, itemVitC, itemCalcium, itemIron) {
      $scope.calorieTotal= $scope.calorieTotal - itemCalories;
      $scope.fatCalTotal = $scope.fatCalTotal - itemFatCalories;
      $scope.totalFatGrams = $scope.totalFatGrams - itemFatGrams;
      $scope.totalSatFat = $scope.totalSatFat - itemSatFat;
      $scope.totalTransFat = $scope.totalTransFat - itemTransFat;
      $scope.totalCholesterol = $scope.totalCholesterol - itemCholesterol;
      $scope.totalSodium = $scope.totalSodium - itemSodium;
      $scope.totalCarbs = $scope.totalCarbs - itemCarbs;
      $scope.totalFiber = $scope.totalFiber - itemFiber;
      $scope.totalSugar = $scope.totalSugar - itemSugar;
      $scope.totalProtein = $scope.totalProtein - itemProtein;
      $scope.totalFatDV = ($scope.totalFatGrams/65)*100;
      $scope.totalSatFatDV = ($scope.totalSatFat/20)*100;
      $scope.totalCholesterolDV = ($scope.totalCholesterol/300)*100;
      $scope.totalSodiumDV = ($scope.totalSodium/2400)*100;
      $scope.totalCarbDV = ($scope.totalCarbs/300)*100;
      $scope.totalDietFiberDV = ($scope.totalFiber/25)*100;
      $scope.itemNumber= $scope.itemNumber- 1;
      $scope.totalVitaminA = (itemVitA/1000)*100;
      $scope.totalVitaminC = (itemVitC/60)*100;
      $scope.totalCalcium = (itemCalcium/1100)*100;
      $scope.totalIron = (itemIron/14)*100;
      $scope.qtyNumber = $scope.qtyNumber + 1;
    }

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
                iron:2
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
                iron:3
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
                iron:4
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
                iron:5
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
              iron:2
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
              iron:3
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
              iron:4
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
              iron:5
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
              iron:2
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
              iron:3
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
              iron:4
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
              iron:5
            }
          ];
}]);
