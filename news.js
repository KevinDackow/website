//For the scroll to top button
window.onscroll = function() {scrollFun()};

function dropDown() {
 document.getElementById("newsfeedDropDown").classList.toggle("show");
}

//Displays scroll to top button if scrolled below 20 px
function scrollFun() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

//Determines the current Y position of the screen as to promote smooth scrolling
function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}

//Smoothly scrolls up to the top of the page
function smoothScroll(){
    var int = setInterval(function(){
        var y = currentYPosition()
        if (y == 0) {
            clearInterval(int);
        }
        var dist = currentYPosition()/200;
        if(dist > 1){
            window.scrollTo(0, y - dist);
        } else {
            window.scrollTo(0, y - 1);
        }
    }, 1);
}



// Determines if feed should be hidden or unhidden and does it
function feedChecker(icon, twitterfeed) {
    var feed = document.getElementById(twitterfeed);
    if(getComputedStyle(feed, null).display === "none"){
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