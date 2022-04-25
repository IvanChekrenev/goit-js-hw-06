const listOfCategories = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${listOfCategories.length}`);


const valueTitleCategory = listOfCategories.forEach((item) => {
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(item.querySelectorAll('ul li').length);
});

