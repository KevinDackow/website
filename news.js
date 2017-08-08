// Determines if feed should be hidden or unhidden and does it
function feedChecker(checkbox, twitterfeed) {
    if(checkbox.checked){
        document.getElementById(twitterfeed).style.display = "block";
    } else {
        document.getElementById(twitterfeed).style.display = "none";
    }
    modifyFeedSizes();
}

// Modifies the sizes of twitter feeds based on number of open feeds
function modifyFeedSizes() {
    var chboxs = document.getElementsByName("newsSource");
    var columns = 0;
    for(i=0;i<chboxs.length;i++){
        if(chboxs[i].checked){
            columns = columns + 1;
        }
    }
    document.getElementById("newsfeed").getElementsByTagName("ul")[0].style.columns = columns;
}


//Shows all feeds
function showAll() {
    var chboxs = document.getElementsByName("newsSource");
    for(i=0;i<chboxs.length;i++){
        chboxs[i].checked = true;
    }
    var tweets = document.getElementsByClassName("twitterfeed");
    for(i=0;i<tweets.length;i++){
        tweets[i].style.display = "block";
    }
    modifyFeedSizes();
}

//Hides all feeds
function hideAll() {
    var chboxs = document.getElementsByName("newsSource");
    for(i=0;i<chboxs.length;i++){
        chboxs[i].checked = false;
    }
    var tweets = document.getElementsByClassName("twitterfeed");
    for(i=0;i<tweets.length;i++){
        tweets[i].style.display = "none";
    }
    modifyFeedSizes();
}