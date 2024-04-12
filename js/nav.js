window.addEventListener("scroll", function(){
    var navbar = this.document.querySelector("nav")
    navbar.classList.toggle("navsticky", window.scrollY > 0)
})



// Get the modal
var modal = document.getElementById("myModal");

// Get the link that opens the modal
var link = document.getElementById("openModal");

// When the user clicks the link, open the modal
link.onclick = function() {
    modal.style.display = "block";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// When the user clicks the link, open the modal
link.onclick = function() {
    modal.style.display = "block";
    // Render the Tableau visualization
    renderTableauViz();
}

// Function to render Tableau visualization
function renderTableauViz() {
    var containerDiv = document.getElementById("tableauContainer");
    var url = 'https://public.tableau.com/views/VolleyballRound2/TimeSeriesRemoved?:language=en-US&:sid=&:display_count=n&:origin=viz_share_link';
    var options = {
        hideTabs: true
    };
    var viz = new tableau.Viz(containerDiv, url, options);
}
