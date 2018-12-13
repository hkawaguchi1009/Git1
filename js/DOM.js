// 1) How many direct child elements does the article element have?
function getArticles() {
    var articles = document.getElementsByTagName("article");
    console.log("Number of article elements: "+articles.length);
}

// 2) Get the answer for 1 using the querySelectorAll call.
function getArticlesByQuery() {
    var articles = document.querySelectorAll("article");
    console.log("Number of article elements (Query): "+articles.length);
}

// 3) Get the number of div elements in the document.
function getDivCount() {
    var divs = document.getElementsByTagName("div");
    console.log("Number of divs: "+divs.length);
}

// 4) Get the number of divs in the article element using querySelectorAll.
function getDivsInArticle() {
    var divsInArticle = document.querySelectorAll("article div");
    console.log("Number of divs in article: "+divsInArticle.length);
}

// 5) Print the children of Article.
function getChildrenOfArticle() {
    var childOfArticle = document.getElementsByTagName("article")[0].children;
    console.log("Number of children of articles: "+childOfArticle.length);
    for (var i = 0; i<childOfArticle.length; i++){
        console.log(childOfArticle[i]);
    }
}

// 6) Write a function that finds all the sibilings of a given element.
//    The selector parameter is used to "select" the node whose sibilings
//    are reported.
function findSibilings(selector) {
    var sibOfSelector = document.querySelectorAll(selector);
    console.log("Number of siblings of given selector is: "+sibOfSelector.length);
}
