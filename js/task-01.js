const categoriesRef = document.querySelectorAll('#categories .item');

console.log(`В списке ${categoriesRef.length} категории.`);

const categoriesDescription = categoriesRef.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const categoryEntries = category.querySelector('ul').children.length;
  console.log(
    `Категория: ${categoryName}\nКоличество элементов: ${categoryEntries}`,
  );
}, '');
