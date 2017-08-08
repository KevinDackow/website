// Determines if feed should be hidden or unhidden and does it
function feedChecker(icon, twitterfeed) {
    var feed = document.getElementById(twitterfeed);
    if(feed.style.display == "none"){
        feed.style.display = "block";
        icon.style.opacity = 1;
    } else {
        feed.style.display = "none";
        icon.style.opacity = .6;
    }
    modifyFeedSizes();
}

// Modifies the sizes of twitter feeds based on number of open feeds
function modifyFeedSizes() {
    var feeds = document.getElementsByClassName("twitterfeed");
    var columns = 0;
    for(i=0;i<feeds.length;i++){
        if(feeds[i].style.display == "block"){
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