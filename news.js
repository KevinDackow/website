function showMe(checkbox, newsfeed) {
    var vis = "none";
    if(checkbox.checked){
        vis = "block";
    }
    document.getElementById(newsfeed).style.display = vis;
}