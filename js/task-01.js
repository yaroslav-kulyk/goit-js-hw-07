const categoryItemsRef = document.querySelectorAll('#categories .item');
console.log(`В списке ${categoryItemsRef.length} категории`);

const categoryDescription = categoryItemsRef.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const categoryEntries = item.querySelector('ul').children.length;

  console.log(
    `Категория: ${categoryName}\nКоличество элементов: ${categoryEntries}`,
  );
});
