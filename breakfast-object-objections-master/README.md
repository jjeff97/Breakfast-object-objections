# Breakfast Object Objections

You are responsible for making breakfast for a group of 4 picky eaters. If you can't feed them, you will have to go out to eat. Ideally, you want to eat at home (it's less expensive), but you'd rather go out to eat than listen to them whine.

Here are the demands from the picky eaters:

1. They all want to eat the same thing.
2. They each want `2 eggs and 3 slices of bacon` OR `3 chocolate chip pancakes`.

A few notes:

- A bag of pancake mix can make 10 pancakes.
- A single pancake must have at least 15 chocolate chips to be chocolatey enough for the picky eaters.

Your function `breakfastChecker` should be able to determine if a *single* object with a list of supplies has enough ingredients (contents) to make breakfast. You do not need to worry about multiple objects (you will make breakfast from only ingredients in the refrigerator OR pantry).

Be sure to change the values in the objects to test your function in multiple conditions.

> Hint: Just check eggs and bacon first. Take small steps!

## Stretch

The picky eaters might invite some picky friends, but you won't know until seconds before you have to make a decision. Allow the function to accept a second parameter - the total number of picky eaters - to allow you to make the calculation at the last second.