var YoutubeDelayed = {
    initPlayer: function(node){
        //initialise the player in specified node
        var videoId = node.getAttribute('data-videoid');
        var image = node.getAttribute('data-image') || "0.jpg";

        node.style.backgroundImage = "url(http://img.youtube.com/vi/" + videoId + "/" + image +")";
        node.innerHTML = '<a class="YoutubeDelayedPlay" href="http://www.youtube.com/watch?v=' + videoId +'" target="_blank"></a>';
        node.firstChild.onclick = YoutubeDelayed.loadPlayer;
    },
    init: function(){
        //initialise the players
        var players = document.getElementsByClassName("YoutubeDelayed");
        var i;
        for (i = 0; i < players.length; i++){
            YoutubeDelayed.initPlayer(players[i]);
        }
    },
    loadPlayer: function(e){
        //load player when user clicked play button
        e.preventDefault();
        this.parentNode.innerHTML = '<iframe class="YoutubeDelayedPlayer" src="http://www.youtube.com/embed/' + this.parentNode.getAttribute('data-videoid') + '?autoplay=1" frameborder="0" allowfullscreen></iframe>';
        //console.log('<iframe class="YoutubeDelayedPlayer" src="http://www.youtube.com/embed/' + this.parentNode.getAttribute('data-videoid') + '?autoplay=1" frameborder="0" allowfullscreen></iframe>')
    }
};
//set cross-browser onload event
window[addEventListener ? 'addEventListener' : 'attachEvent'](addEventListener ? 'load' : 'onload', YoutubeDelayed.init);
