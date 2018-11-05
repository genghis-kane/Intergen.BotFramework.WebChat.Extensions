(function () {
    var iframeSrc = './src/webchat.html';

    // append open icon and iframe
    var div = document.createElement("div");
    document.getElementById('chatbot-embed').appendChild(div);
    div.outerHTML = 
        "<span id='webchatOpenContainer' class='webchat-open-container'>" + 
            "<i id='webchatOpenIcon' class='webchat-open-icon far fa-comment-alt'></i>" +
        "</span>"
        +
        "<div id='webchatContainer' class='webchat-container'>" +
            "<div id='webchatTitleBar' class='webchat-title-bar'></div>" +
            "<iframe src='" + iframeSrc + "' class='webchatFrame'></iframe>" +
        "</div>"; 


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
        if (e.target.matches('#webchatTitleBar')) { 
            webchatOpenContainer.style.visibility = 'visible';
            webchatContainer.style.visibility = 'hidden';
        };
    });
}());