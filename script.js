const input = document.querySelector('input');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');
const meals = document.getElementById('meals');
const favorites = document.getElementById('favorites');
const fav = document.getElementsByClassName('fa-heart');


const APP_ID = 'e5c1acb2';
const APP_KEY = '5c91d83a3ababdb29dd7e38df582eff3';






async function fetchData(term) {
    const url = `https://api.edamam.com/search?q=${term}&app_id=${APP_ID}&app_key=${APP_KEY}`;

    const response = await fetch(url);
    const data = await response.json();
    generateHtml(data.hits);
    console.log(data);

}


function generateHtml(results) {
    let html = '';
    results.map(result => {
        html += `
        <div class="meal">
        <img src="${result.recipe.image}"
            alt="" />
        <h3>${result.recipe.label}</h3>
        <p>Calories: ${result.recipe.calories.toFixed(2)}</p>
        
        <a href="${result.recipe.url}" target="_blank">More Info</a>
        <i class="fa-regular fa-heart"></i>
        

        
    </div>
        `
    })

    meals.innerHTML = html;
}



submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let term = input.value;
    fetchData(term);
});

console.log(fav);






























