// in search area user types in info
// we need to take the value of that info and add it to the api url
// then we can make our fetch request 
// it will return all of the api's with the seacrh criteria
// figure out how to get it onto screen
// and what we want to show of that info


var searchInput = $('#search-area');
var searchBtnElement = $('.searchbtn');

searchBtnElement.on("click", function(event) {
    event.preventDefault();
    var userInput = searchInput.val();
    var baseUrl = "https://www.loc.gov/search?q=" + userInput;
    console.log(baseUrl)
    
})
