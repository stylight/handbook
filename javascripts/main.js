document.addEventListener("DOMContentLoaded", function(event) {
  SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: 'docs/search.json',
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>'
  })
});
