function getArticleGenerator(articles) {
    let articlesArray = Array.from(articles);
    let content = document.getElementById('content');

    return function() {
        let first = articlesArray.shift();
        if(first != undefined){
            let article = document.createElement('article');
            article.textContent = first;
            content.appendChild(article);
        }
    }
}
