let pantryContents = {
  pancakeMixBags: 1,
  chocolateChips: 20
};

let refrigeratorContents = {
  eggs: 4,
  baconStrips: 8,
  chocolateChips: 200,
  cheeseSlices: 6,
  tomatoes: 1,
  onions: 1,
};

// You shouldn't need to change anything above this line initially
// You may change it to test different scenarios, but it should work as is

function breakfastChecker(contents, howManyEaters) {
  // Your code goes here
  const requiredNumberOfEggs = 2;
  const requiredNumberofBaconSlices = 3;
  const requiredChocolateChipsPerPancake = 15;

  const requiredNumberofPancakesPerPerson = 3;
  const pancakeServingsPerMixBox = 10;
  const servingsPerMixBox = pancakeServingsPerMixBox/requiredNumberofPancakesPerPerson
  const totalServings = servingsPerMixBox*howManyEaters
  

  const totalChocolateChips = requiredChocolateChipsPerPancake*requiredNumberofPancakesPerPerson*howManyEaters
  const totalEggs = howManyEaters*requiredNumberOfEggs
  const totalBaconSlices = howManyEaters*requiredNumberofBaconSlices
  const totalMixBags = totalServings/pancakeServingsPerMixBox

  if ((contents.eggs >= totalEggs
    && contents.baconStrips >= totalBaconSlices)
    || (contents.pancakeMixBags >= totalMixBags
    && contents.chocolateChips >= totalChocolateChips)) {
    return 'yes'
  } else {
    return 'no'
  }

}


// Your function should return 'yes' or 'no'
console.log('Does the pantry have enough food for breakfast?', breakfastChecker(pantryContents, 2));
console.log('Does the refrigerator have enough food for breakfast?', breakfastChecker(refrigeratorContents, 2));