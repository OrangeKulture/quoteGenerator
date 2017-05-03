$(document).ready(function() {
  $.ajaxSetup({ cache: false });
  setInterval(function() {
    $(".mainH").css("visibility", "visible").addClass("animated zoomIn");
  }, 755);
  function getQuote() {
    var url =
        "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=";
    $.ajax({
      url: url,
      type: "GET",
      async: false,
      dataType: "json",
      success: function(data, status) {
        var post = data.shift();
        $("#quote").html(post.content);
        $("#author p").text(post.title);
      }
    });
  }

  $("#mainB").on("click", function() {
    getQuote();
  });

  getQuote();
});