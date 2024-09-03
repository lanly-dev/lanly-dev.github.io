// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img =  document.getElementsByClassName("theImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
function popupModal(theNum){
    modal.style.display = "block";
    modalImg.src = img[theNum].src;
    modalImg.alt = img[theNum].alt;
    captionText.innerHTML = img[theNum].alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}