const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientListRef = document.querySelector('#ingredients');

const createIngredientsEls = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientItemEl = document.createElement('li');
    ingredientItemEl.textContent = ingredient;

    return ingredientItemEl;
  });
};

const elements = createIngredientsEls(ingredients);
ingredientListRef.append(...elements);
