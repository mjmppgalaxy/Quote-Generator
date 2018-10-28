/*Steps for RQM

1. I would like to use an API.

2.When New Quote is clicked, the H1 value should change from default to random selected quote from API. 

3. WHen Twitter button is clicked, share link screen should pop up. (this i can do threw html i believe)

4. When refreshed it should go back to default.*/

$(document).ready(function() {

var getApi = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=1s";


var newQuote = function() {
    $("#new-quote").on("click", function(e){
   e.preventDefault();
    $.ajax({
      url: getApi,
      success: function(data) {
          addHtml(data[0]);
      },
    cache: false
    });
});
}
 newQuote();
  var addHtml = function(data) {
    $("#quote").html(data.content);
     $("#name").text(data.title);
    newQuote();
 }

  
  function tweetQuote() { 
  var url = "https://twitter.com/intent/tweet";
 var text= "\"" + document.getElementById("quote").textContent + "\" " + document.getElementById("name").textContent;

  var hashtags = "quoteoftheday";

  window.open(url + "?text=" + text + ";hashtags=" + hashtags, "width=500,heigth=300");

}
  $("#twitter").on("click", function(){
       tweetQuote();
     });
	}); 





