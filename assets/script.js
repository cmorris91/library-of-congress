var searchResultsElement = $(".search-results");
var searchInput = $('#search-area');
var searchBtnElement = $('.searchbtn');
searchBtnElement.on("click", function(event) {
    event.preventDefault();
    var userInput = searchInput.val();
    var baseUrl = "https://www.loc.gov/search?fo=json&per_page=10&q=" + userInput;
    console.log(baseUrl);
    fetch(baseUrl) 
      .then(function (response) {
          return response.json();
      })
      .then(function(data) {
          var myData = data.results
          for (var i = 0; i< myData.length; i++ ) {
            console.log(myData[i])
            var myTitle = $("<h1>");
            var myDate = $("<h2>");
            var myDescription = $("<h3>");
            var myUrl = $("<h4>");
            myTitle.text(myData[i].title);
            myDate.text(myData[i].date);
            myDescription.text(myData[i].description[0]);
            myUrl.text(myData[i].url);
            searchResultsElement.append(myTitle);
            searchResultsElement.append(myDate);
            searchResultsElement.append(myDescription);
            searchResultsElement.append(myUrl);
            
          }
      });
})




