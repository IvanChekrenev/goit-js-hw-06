const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridientsList = document.querySelector('#ingredients');

// version1

// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
  
//   const IngridientEl = document.createElement('li');
//   IngridientEl.classList.add('item');
//   IngridientEl.textContent = ingredients[i];

//   elements.push(IngridientEl);
// }

// console.log(elements);

// ingridientsList.append(...elements)

// version 2

// const listIngredients = ingredients.map(ingredient => { 

//   const IngridientEl = document.createElement('li');
//   IngridientEl.classList.add('item');
//   IngridientEl.textContent = ingredient;

//   console.log(IngridientEl);

//   return IngridientEl;
// })

// console.log(listIngredients);
// ingridientsList.append(...listIngredients);

// version 3 function

const makelistIngredients = (ingredient) => { 
  return ingredient.map(ingredient => { 

  const IngridientEl = document.createElement('li');
  IngridientEl.classList.add('item');
  IngridientEl.textContent = ingredient;

  console.log(IngridientEl);

  return IngridientEl;
})
}

const listIngredients = makelistIngredients(ingredients)
console.log(listIngredients);
ingridientsList.append(...listIngredients);




// version 4

// const itemList = ingredients.map((item) => { 
//   return `<li class="item">${item}</li>` 
// })
// console.log(itemList);

// ingridientsList.insertAdjacentHTML("afterbegin", itemList);
// console.log(ingridientsList);




