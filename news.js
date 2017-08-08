function showMe(checkbox, twitterfeed) {
    var chboxs = document.getElementsByName("newsSource");
    var columns = 0;
    for(i=0;i<chboxs.length;i++){
        if(chboxs[i].checked){
            columns = columns + 1;
        }
    }
    document.getElementById("newsfeed").getElementsByTagName("ul")[0].style.columns = columns;
    var vis = "none";
    if(checkbox.checked){
        vis = "block";
    }
    document.getElementById(twitterfeed).style.display = vis;
}