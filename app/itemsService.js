calculator.service('itemsService', function() {
  this.calculateAddItem = function(totalNutrition, item) {
    console.log(totalNutrition);
    totalNutrition.calorieTotal = totalNutrition.calorieTotal + item.calories;
    totalNutrition.fatCalTotal = totalNutrition.fatCalTotal + item.fatCalories;
    totalNutrition.totalFatGrams = totalNutrition.totalFatGrams + item.fatGrams;
    totalNutrition.totalSatFat = totalNutrition.totalSatFat + item.satFatGrams;
    totalNutrition.totalTransFat = totalNutrition.totalTransFat + item.transFatGrams;
    totalNutrition.totalCholesterol = totalNutrition.totalCholesterol + item.cholesterolMg;
    totalNutrition.totalSodium = totalNutrition.totalSodium + item.sodiumMg;
    totalNutrition.totalCarbs = totalNutrition.totalCarbs + item.carbTotal;
    totalNutrition.totalFiber = totalNutrition.totalFiber + item.fiberGrams;
    totalNutrition.totalSugar = totalNutrition.totalSugar + item.sugarGrams;
    totalNutrition.totalProtein = totalNutrition.totalProtein + item.proteinGrams;

    totalNutrition.totalVitaminA = (item.vitaminA / 1000) * 100;
    totalNutrition.totalVitaminC = (item.vitaminC / 60) * 100;
    totalNutrition.totalCalcium = (item.calcium / 1100) * 100;
    totalNutrition.totalIron = (item.iron / 14) * 100;
    return totalNutrition;
  };

  this.calculateRemoveItem = function(totalNutrition, item) {
    totalNutrition.calorieTotal = totalNutrition.calorieTotal - item.calories;
    totalNutrition.fatCalTotal = totalNutrition.fatCalTotal - item.fatCalories;
    totalNutrition.totalFatGrams = totalNutrition.totalFatGrams - item.fatGrams;
    totalNutrition.totalSatFat = totalNutrition.totalSatFat - item.satFatGrams;
    totalNutrition.totalTransFat = totalNutrition.totalTransFat - item.transFatGrams;
    totalNutrition.totalCholesterol = totalNutrition.totalCholesterol - item.cholesterolMg;
    totalNutrition.totalSodium = totalNutrition.totalSodium - item.sodiumMg;
    totalNutrition.totalCarbs = totalNutrition.totalCarbs - item.carbTotal;
    totalNutrition.totalFiber = totalNutrition.totalFiber - item.fiberGrams;
    totalNutrition.totalSugar = totalNutrition.totalSugar - item.sugarGrams;
    totalNutrition.totalProtein = totalNutrition.totalProtein - item.proteinGrams;

    totalNutrition.totalVitaminA = (item.vitaminA / 1000) * 100;
    totalNutrition.totalVitaminC = (item.vitaminC / 60) * 100;
    totalNutrition.totalCalcium = (item.calcium / 1100) * 100;
    totalNutrition.totalIron = (item.iron / 14) * 100;
    return totalNutrition;
  };

this.calculateDV= function(totalNutrition, totalDV){
  console.log(totalDV);
  totalDV.totalFatDV = (totalNutrition.totalFatGrams / 65) * 100;
  totalDV.totalSatFatDV = (totalNutrition.totalSatFat / 20) * 100;
  totalDV.totalCholesterolDV = (totalNutrition.totalCholesterol / 300) * 100;
  totalDV.totalSodiumDV = (totalNutrition.totalSodium / 2400) * 100;
  totalDV.totalCarbDV = (totalNutrition.totalCarbs / 300) * 100;
  totalDV.totalDietFiberDV = (totalNutrition.totalFiber / 25) * 100;
  return totalDV;
}

  this.itemObjects = [{
      name: "Mint Chocolate Chip",
      quantity: 0
    },
    {
      name: "Strawberry",
      quantity: 0
    },
    {
      name: "Chocolate",
      quantity: 0
    },
    {
      name: "Vanilla",
      quantity: 0
    },
    {
      name: "Whipped Cream",
      quantity: 0
    },
    {
      name: "Hot Fudge",
      quantity: 0
    },
    {
      name: "Nuts",
      quantity: 0
    },
    {
      name: "Sprinkles",
      quantity: 0
    },
    {
      name: "Waffle Cone",
      quantity: 0
    },
    {
      name: "Wafer Cone",
      quantity: 0
    },
    {
      name: "Chocolate Covered Cone",
      quantity: 0
    },
    {
      name: "No Cone",
      quantity: 0
    }
  ];

this.totalNutrition ={
  calorieTotal: 0,
  fatCalTotal: 0,
  totalFatGrams: 0,
  totalSatFat: 0,
  totalTransFat: 0,
  totalCholesterol: 0,
  totalSodium: 0,
  totalCarbs: 0,
  totalFiber: 0,
  totalSugar: 0,
  totalProtein: 0,
  totalVitaminA: 0,
  totalVitaminC: 0,
  totalCalcium: 0,
  totalIron: 0
};

this.totalDV={
  totalFatDV:0,
  totalSatFatDV:0,
  totalCholesterolDV:0,
  totalSodiumDV:0,
  totalCarbDV:0,
  totalDietFiberDV:0
};

  this.flavors = [{
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
      calcium: 200,
      iron: 2,
      quantity: 0
    },
    {
      name: "Strawberry",
      calories: 300,
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
      calcium: 300,
      iron: 3,
      quantity: 0
    },
    {
      name: "Chocolate",
      calories: 400,
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
      calcium: 400,
      iron: 4,
      quantity: 0
    },
    {
      name: "Vanilla",
      calories: 500,
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
      calcium: 500,
      iron: 5,
      quantity: 0
    }
  ];
  this.toppings = [{
      name: "Whipped Cream",
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
      calcium: 200,
      iron: 2,
      quantity: 0
    },
    {
      name: "Hot Fudge",
      calories: 300,
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
      calcium: 300,
      iron: 3,
      quantity: 0
    },
    {
      name: "Nuts",
      calories: 400,
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
      calcium: 400,
      iron: 4,
      quantity: 0
    },
    {
      name: "Sprinkles",
      calories: 500,
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
      calcium: 500,
      iron: 5,
      quantity: 0
    }
  ];

  this.cones = [{
      name: "Waffle Cone",
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
      calcium: 200,
      iron: 2,
      quantity: 0
    },
    {
      name: "Wafer Cone",
      calories: 300,
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
      calcium: 300,
      iron: 3,
      quantity: 0
    },
    {
      name: "Chocolate Covered Cone",
      calories: 400,
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
      calcium: 400,
      iron: 4,
      quantity: 0
    },
    {
      name: "No Cone",
      calories: 500,
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
      calcium: 500,
      iron: 5,
      quantity: 0
    }
  ];
});
