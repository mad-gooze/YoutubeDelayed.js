import './youtube-delayed.css';
const CLASSNAME = 'youtube-delayed';
const INITED_CLASSNAME = `${CLASSNAME}_inited`;
const BTN_CLASSNAME = `${CLASSNAME}__play-btn`;
const BTN_HOVER_CLASSNAME = `${BTN_CLASSNAME}_hover`;
const LINK_CLASSNAME = `${CLASSNAME}__link`;

/**
 * Creates HTMLElement with specified class and optional tag
 * @param className
 * @param {string} [tagName] - tag name for created element
 * @param {object} [props] - props for node
 * @returns {HTMLElement}
 */
const createNodeWithClass = (className, tagName = 'div', props = {}) => {
    const el = document.createElement(tagName);
    el.classList.add(className);
    for (let key in props) {
        el[key] = props[key];
    }
    return el;
};


/**
 * Creates YouTubeDelayed object
 * @constructor
 */
function YouTubeDelayed() {

    /**
     * Handles click on YouTubeDelayed
     * @param {Event} e
     */
    const clickHandler = function (e) {
        e.preventDefault();
        if (e.ctrlKey) {
            window.open(this.href, '_blank');
        } else {
            loadYTPlayer(this.parentNode);
        }
    };

    /**
     * Loads YouTube video with videoId to specified node
     * @param {HTMLElement} node
     * @param {string} [videoId] - default value is taken from 'data-video-id'
     */
    const loadYTPlayer = function (node, videoId = node.getAttribute('data-video-id')) {
        node.replaceChild(
            createNodeWithClass(`${CLASSNAME}__player`, 'iframe', {
                src: `//youtube.com/embed/${videoId}?autoplay=1`,
                frameBorder: 0,
                allowfullscreen: true
            }),
            node.firstChild
        );
        node.classList.add(INITED_CLASSNAME);
        node.style.backgroundImage = null;
    };

    /**
     * Initializes YouTube Delayed in specified nodes
     * @param {NodeList|[HTMLElement]} [nodes] - nodes to init YouTubeDelayed in
     * (default - all nodes with .youtube-delayed class)
     */
    this.initNewPlayers = function (
        nodes = document.querySelectorAll(`.${CLASSNAME}:not(.${INITED_CLASSNAME})`)
    ) {
        [].map.call(nodes, node => this.initPlayer(node));
    }.bind(this);

    /**
     * Initializes YouTube Delayed in specified node
     * @param {HTMLElement} node
     * @param {string} [videoId] - default is taken from 'data-video-id';
     * @param {string} [img] - preview image, default is '0.jpg'
     */
    this.initPlayer = function (
        node,
        videoId = node.getAttribute('data-video-id'),
        img = node.getAttribute('data-image') || '0.jpg'
    ) {
        node.classList.add(CLASSNAME);
        node.style.backgroundImage = `url(//img.youtube.com/vi/${videoId}/${img})`;

        const link = createNodeWithClass(LINK_CLASSNAME, 'a', {
            href: `//youtube.com/watch?v=${videoId}`
        });

        const playBtn = createNodeWithClass(BTN_CLASSNAME);
        const playBtnHover = playBtn.cloneNode();
        playBtnHover.classList.add(BTN_HOVER_CLASSNAME);

        link.appendChild(playBtn);
        link.appendChild(playBtnHover);
        link.addEventListener('click', clickHandler);

        node.appendChild(link);
    }.bind(this);
}

export default new YouTubeDelayed();
