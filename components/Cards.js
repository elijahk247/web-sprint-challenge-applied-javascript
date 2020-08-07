// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function cardCreator(articleObj) {
    const card = document.createElement('div');

    const headline = document.createElement('div');
    const author = document.createElement('div');

    const imgContainer = document.createElement('div');
    const authorPic = document.createElement('img');
    const authorName = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(author);

    author.appendChild(imgContainer);
    imgContainer.appendChild(authorPic);
    author.appendChild(authorName);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = articleObj.headline
    authorPic.src = articleObj.authorPhoto;
    authorName.textContent = articleObj.authorName;

    card.addEventListener('click', console.log(headline));
    return card;
}

const cardContainer = document.querySelector('.cards-container');

axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then (response => {
        const articles = response.data.articles;

        const bootstrap = articles['bootstrap'];
        const javascript = articles['javascript'];
        const jQueryArticles = articles['jquery'];
        const nodeArticles = articles['nodes'];
        const technology = articles['technology'];

        console.log(articles);
        console.log(bootstrap);
        console.log(javascript);
        console.log(jQueryArticles);
        console.log(nodeArticles);
        console.log(technology);
        console.log('hello');

        bootstrap.forEach(function(obj) {
            const currentArticle = cardCreator(obj)
            cardContainer.appendChild(currentArticle);
        });
        javascript.forEach(function(obj) {
            const currentArticle = cardCreator(obj)
            cardContainer.appendChild(currentArticle);
        });
        jQueryArticles.forEach(function(obj) {
            const currentArticle = cardCreator(obj)
            cardContainer.appendChild(currentArticle);
        });
        nodeArticles.forEach(function(obj) {
            const currentArticle = cardCreator(obj)
            cardContainer.appendChild(currentArticle);
        });
        technology.forEach(function(obj) {
            const currentArticle = cardCreator(obj)
            cardContainer.appendChild(currentArticle);
        });
        
    })
    .catch (err => {
        console.log('Error: ', err);
    })

