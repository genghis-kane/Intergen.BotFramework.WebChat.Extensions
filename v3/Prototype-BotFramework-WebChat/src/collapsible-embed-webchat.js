(function () {
    var iframeSrc = './src/webchat.html';
    var iframeHeight = '590px'
    var iframeWidth = '370px';

    var div = document.createElement("div");
    document.getElementById('chatbot-embed').appendChild(div);
    div.outerHTML = 
        "<span id='webchatOpenContainer' class='webchat-open-container'>" + 
            "<i id='webchatOpenIcon' class='webchat-open-icon fas fa-comment-alt'></i>" +
        "</span>"
        +
        "<div id='webchatContainer' class='webchat-container'>" +
            "<div id='webchatTitleBar' class='webchat-title-bar'></div>" +
            "<iframe src='" + iframeSrc + "' height='" + iframeHeight + "' width='" + iframeWidth + "'></iframe>" +
        "</div>"; 

    document.querySelector('body').addEventListener('click', function (e) {
        e.target.matches = e.target.matches || e.target.msMatchesSelector;
        
        var webchatOpenContainer = document.querySelector('#webchatOpenContainer');
        var webchatContainer = document.querySelector('#webchatContainer');

        if (e.target.matches('#webchatOpenContainer')) {
            webchatContainer.style.height = iframeHeight;
            webchatContainer.style.visibility = 'visible';
            webchatOpenContainer.style.visibility = 'hidden';
        }
        if (e.target.matches('#webchatTitleBar')) { 
            webchatContainer.style.height = '0px';
            webchatContainer.style.visibility = 'hidden';
            webchatOpenContainer.style.visibility = 'visible';
        };
    });
}());