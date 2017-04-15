$(document).ready(function() {

  setInterval(function() {
    $('.mainH').css('visibility', 'visible').addClass('animated zoomIn');

  }, 755);

  $('#mainB').on('click', function() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {

        var resp = JSON.parse(xhttp.responseText);
        var text = resp.quoteText;
        var auth = resp.quoteAuthor;

        var field1 = '<h3>' + '"' + text + '"' + '</h3>';
        var field2 = '<h6>' + '- ' + auth + '</h6>';

        document.getElementById('quote').innerHTML = field1;
        document.getElementById('author').innerHTML = field2;

        $('.content').css('visibility', 'visible');
      }
    };

    xhttp.open("GET", "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", true);
    xhttp.send();

  });

});