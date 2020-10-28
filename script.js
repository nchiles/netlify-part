var images = [
	{ src: 'img/balloon.jpg', val: 'balloon' },
	{ src: 'img/car1.jpg', val: 'car' },
	{ src: 'img/car2.jpg', val: 'car' },
	{ src: 'img/kazoo.jpg', val: 'kazoo' },
	{ src: 'img/vacation1.jpg', val: 'vacation' },
	{ src: 'img/vacation2.jpg', val: 'vacation' },
	{ src: 'img/vacation3.jpg', val: 'vacation' },
	{ src: 'img/vacation4.jpg', val: 'vacation' },
	{ src: 'img/stickyhand.jpg', val: 'sticky hands' }
]

function shuffle(arr) {
	for (var i = arr.length - 1; i > 0; i--) {
		var j = Math.floor(Math.random() * (i + 1));
		var temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}

function loadImages() {
	shuffle(images);
	document.getElementById('imageOne').src = images[0].src;
	document.getElementById('optionOne').value = images[0].val;
	document.getElementById('imageTwo').src = images[1].src;
	document.getElementById('optionTwo').value = images[1].val;
	document.getElementById('imageThree').src = images[2].src;
	document.getElementById('optionThree').value = images[2].val;
}

function disableForm() {
	document.getElementById('submitButton').disabled = true;
	document.getElementById('nameInput').value = 'congrats?';
	document.getElementById('nameInput').disabled = true;
	document.getElementById('optionOne').disabled = true;
	document.getElementById('optionTwo').disabled = true;
	document.getElementById('optionThree').disabled = true;
}

loadImages();

function addName(data) {
 	var li = document.createElement('li');
		// var inputValue = document.getElementById('nameInput').value;
		// var winningImage = $('input[type="radio"]:checked').siblings('.image');
		// var radioValue = document.querySelector('input[type="radio"]:checked').value;
  	var newLine = document.createTextNode(data);
	li.appendChild(newLine);
	document.getElementById('winnersList').appendChild(li);
		// $('.image').css('filter', 'blur(0px) grayscale(1) opacity(0.5)');
		// $(winningImage).css('filter', 'grayscale(0)');
		// $('#playAgain').css('display', 'unset');
		// disableForm()
}

$('#submitButton').click(function(){
	var url = 'https://sheltered-cove-25929.herokuapp.com';
    fetch(url)
      .then(function(response){        
        return response.json();
      })
      .then(function(data){
		console.log(data);
		let winnersArr = data.results;
		let winnersRow = winnersArr.join(' ');
		console.log(winnersRow)
		addName(winnersRow)
      })
      .catch(function(err){
		console.log(err);
      })
});