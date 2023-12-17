document.getElementById('image').addEventListener('mouseover', function() {
  this.src = '2222.webp'; // Change the image source on mouseover
});

document.getElementById('image').addEventListener('mouseout', function() {
  this.src = '1111.webp'; // Revert the image back to original source on mouseout
});

document.getElementById('text').addEventListener('mouseover', function() {
  this.style.color = 'blue'; // Change text color to blue on mouseover
});

document.getElementById('text').addEventListener('mouseout', function() {
  this.style.color = 'black'; // Change text color back to black on mouseout
});

document.getElementById('text').addEventListener('click', function() {
  alert('Text clicked!'); // Show an alert when text is clicked
});

