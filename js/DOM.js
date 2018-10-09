// 1) Define a function to run the DOM functions after the page has loaded
 window.onload = function runDomFns() {
     alert('Page is loaded. Replace This alert as directed in the comments.');
     //TO DO: Add the calls from the bottom of the HTML page.      
}

// 2) How many direct child elements does the article element have?
function getArticles() {
    var articles =document.getElementsByTagName("article");
    console.log("Number of artilce elements: " + articles.length);
}

// 3) Get the answer for 1 using the querySelectorAll call.
function getArticlesByQuery() {
    var articles = document.querySelectorAll("article"); 
    console.log("Number of artilce elements (Query): " + articles.length);
}

// 4) Get the number of div elements in the document.
function getDivCount() {
   var divs = document.getElementsByTagName("div");
   console.log("The number of divs in the document: " + divs.length);
}

// 5) Get the number of divs in the article element using querySelectorAll.
function getDivsInArticle() {
    var divsInArticle = document.querySelectorAll("article div");
    console.log("Number of divs in article: " + divsInArticle.length);
}

// 6) Print the children of Article.
function getChildrenOfArticle() {
    var articles = document.getElementsByTagName("article");
    var childrenOfArticle = articles[0].children;
    console.log("Number of Children of Article: " + childrenOfArticle.length);
    console.log("Children of Article are:");
    for (var i = 0; i < childrenOfArticle.length; i++) {
        console.log(childrenOfArticle[i].tagName);
    }
}

// 7) Write a function that finds all the sibilings of a given element.
//    The selector parameter is used to "select" the node whose sibilings
//    are reported.
function findSibilings(selector) {
    var selectedNode = document.querySelector(selector);
    console.log("Node Selected => " + selectedNode.tagName);
    
    // loop through the sibilings
    var nextSib = selectedNode.nextSibling;
    while (nextSib != null) {
        nType = nextSib.nodeType;
        console.log("Sibling type is => " + nType);
        if (nType==3) {
            // node is a text node
            console.log("Sibiling is a text node. nodeName => " + 
                       nextSib.nodeName);
        }
        else if (nType == 1) {
            // node is an element node
            console.log("Sibiling is => " + nextSib.tagName);
        }
        else if (nType == 2 ) {
            // node is an attribute node
            console.log("Sibiling is an attribute node. nodeName => " +
                       nextSib.nodeName);
        }
        
        // go to the next node
        nextSib = nextSib.nextSibling;
    }
    console.log("All sibilings of " + selectedNode.tagName +
                " are listed.")
}