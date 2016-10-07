# YouTubeDelayed.js [![Build Status](https://travis-ci.org/mad-gooze/YoutubeDelayed.js.svg)](https://travis-ci.org/mad-gooze/YoutubeDelayed.js)

YouTube Delayed Loader - a  small script which allows you to load YouTube player on page only when the user wants to watch the video. This is very helpful when your page contains a lot of YouTube videos which slow down its load.

[Demo](http://mad-gooze.github.io/YouTubeDelayed.js)

## Installation
Include [youtube-delayed.min.js](https://github.com/mad-gooze/YoutubeDelayed.js/blob/master/bin/youtube-delayed.min.js):
   
```html
<script src='youtube-delayed.min.js'></script>
```
You can use hosted version from unpkg.com:
```html
<script src='//unpkg.com/youtube-delayed/bin/youtube-delayed.min.js'></script>
```
or using npm:
```shell
npm install youtube-delayed --save
```

## Usage
### Configuring in HTML
To display YouTube video with id `youtube-video-id` place this code:
```html
<div data-videoid="${youtube-video-id}" class="youtube-delayed"></div>;
```
### Complex usage
This library exposes two functions:
* `window.YouTubeDelayed.initNewPlayers([nodes])` 
    Initializes YouTube Delayed in specified `nodes`. Default value for `nodes` - all  document nodes with class `.youtube-delayed`.
    
* `window.YouTubeDelayed.initPlayers(node, [videoId], [img])` 
    Initializes YouTube Delayed in specified `node` with video id `videoId` and preview image `img`. 
    
    * Default `videoId` is taken from node's `data-video-id`.
    * Default `img` is `0.jpg`. For other supported values - see [this StackOverflow post](http://stackoverflow.com/questions/2068344/how-do-i-get-a-youtube-video-thumbnail-from-the-youtube-api)

