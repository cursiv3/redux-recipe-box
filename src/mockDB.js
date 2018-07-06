/*export const database = () => {
  let db = {
    recipes: [
      {
        id: 1,
        name: "PB & J",
        ingredients: "2 slices Bread, Peanut Butter, Jam",
        directions:
          "Lay bread out, spread peanut butter on BOTH pieces of bread, spread jam on one slice, combine slices of bread, enjoy"
      },
      {
        id: 2,
        name: "Grilled Cheese",
        ingredients: "2 slices Bread, Cheddar cheese, butter",
        directions:
          "Lay bread out, spread butter on both pieces of bread, place sliced cheese on bread, combine slices of bread, place in pan over medium heat, cover, flip after 4 min, wait 4 min, then remove and eat"
      }
    ],
    idIncrement: 2
  };

  let inc = 0;

  return (update, idIncrement) => {
    if (update !== undefined && idIncrement == true) {
      console.log("update and increment");
      update.id = idIncrement + 1;
      db.recipes = update;
      db.idIncrement += 1;
    } else if (update !== undefined && update !== null) {
      console.log("just update");
      db.recipes = update;
    }
    return db;
  };
};
*/

module.exports = {
  recipes: [
    {
      id: 1,
      name: "PB & J",
      ingredients: "2 slices Bread\n Peanut Butter\n Jam",
      directions:
        "Lay bread out\n spread peanut butter on BOTH pieces of bread\n spread jam on one slice\n combine slices of bread\n enjoy"
    },
    {
      id: 2,
      name: "Grilled Cheese",
      ingredients: "2 slices Bread\n Cheddar cheese\n butter",
      directions:
        "Lay bread out\n spread butter on both pieces of bread\n place sliced cheese on bread\n combine slices of bread\n place in pan over medium heat, cover\n flip after 4 min\n wait 4 min, then remove and eat"
    }
  ],
  idIncrement: 2
};
