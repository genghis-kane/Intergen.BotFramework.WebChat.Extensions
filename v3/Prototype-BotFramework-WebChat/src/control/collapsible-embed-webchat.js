/* Icons are licensed under the Creative Commons Attribution 4.0 International license. See https://fontawesome.com/license/free for details. */
(function () {
    var webchatMountId = 'chatbot-embed';
    var iframeSrc = './src/iframe/webchat.html';
    var styleSrc = './src/control/collapsible-embed-webchat.css';

    embedStyleSheet();
    embedWebChat();
    initVisibilityToggle();

    function embedStyleSheet() {
        var style = document.createElement('link');
        style.type = 'text/css';
        style.href = styleSrc;
        style.rel = 'stylesheet';
        document.getElementsByTagName("head")[0].appendChild(style);
    }

    function embedWebChat() {
        var div = document.createElement("div");
        document.getElementById(webchatMountId).appendChild(div);
        div.outerHTML = 
            "<span id='webchatOpenContainer' class='webchat-open-container'>" + 
                "<svg id='webchatOpenIcon' aria-hidden='true' data-prefix='far' data-icon='comment-alt' class='webchat-open-icon svg-inline--fa fa-comment-alt fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>" +
                    "<path fill='currentColor' d='M448 0H64C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h96v84c0 7.1 5.8 12 12 12 2.4 0 4.9-.7 7.1-2.4L304 416h144c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm16 352c0 8.8-7.2 16-16 16H288l-12.8 9.6L208 428v-60H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16h384c8.8 0 16 7.2 16 16v288z'></path>" + 
                "</svg>" +
            "</span>"
            +
            "<div id='webchatContainer' class='webchat-container'>" +
                "<div id='webchatTitleBar' class='webchat-title-bar'>" +             
                    "<svg id='webchatCloseIcon' aria-hidden='true' data-prefix='fas' data-icon='times' class='webchat-close-icon svg-inline--fa fa-times fa-w-11' role='img' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 352 512'>" + 
                        "<path fill='currentColor' d='M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z'></path>" + 
                    "</svg>" +    
                "</div>" +
                "<iframe src='" + iframeSrc + "' class='webchatFrame'></iframe>" +
            "</div>"; 
    }

    function initVisibilityToggle() {
        // set initial visibility
        var webchatOpenContainer = document.querySelector('#webchatOpenContainer');
        var webchatContainer = document.querySelector('#webchatContainer');

        webchatOpenContainer.style.visibility = 'visible';
        webchatContainer.style.visibility = 'hidden';


        // set onclick handlers   
        document.querySelector('body').addEventListener('click', function (e) {
            e.target.matches = e.target.matches || e.target.msMatchesSelector;

            if (e.target.matches('#webchatOpenContainer') || e.target.matches('#webchatOpenIcon')) {
                webchatOpenContainer.style.visibility = 'hidden';
                webchatContainer.style.visibility = 'visible';
            }
            if (e.target.matches('#webchatCloseIcon')) { 
                webchatOpenContainer.style.visibility = 'visible';
                webchatContainer.style.visibility = 'hidden';
            };
        });
    }
}());