// Function to handle search
function handleSearch() {
    var searchTerm = document.getElementById("searchInput").value;
    // Perform search functionality, e.g., redirect to search results page or display search results.
    Example: window.location.href = "search.html?query=" + searchTerm;
    alert("Searching for: " + searchTerm);
}

// Add event listener to search button
document.getElementById("searchButton").addEventListener("click", handleSearch);


