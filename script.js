// console.log('hello world')
let dogApi = 'https://api.thedogapi.com/v1/breeds';
// generates a random dog
let dogImage = document.querySelector('#dog-image');
let button = document.querySelector('#start');
let p = document.querySelector('#instructions');
let dogArray = [];
let backButton = document.querySelector('#back');
backButton.style.display = 'none';

const displayDog = () => {
	// dogImage.src = currentDog.image.url;
	p.innerText = currentDog.name;
	p.style.color = 'yellow';
	p.style.textShadow = '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black';
};

button.addEventListener('click', (event) => {
	event.preventDefault();
	button.innerText = 'next';
	backButton.style.display = 'block';
	p.innerText = 'Click image to reveal breed!';
	p.style.color = 'black';
	p.style.textShadow = 'none';
	console.log('Clicked on button');
	fetch(dogApi, {})
		.then((res) => res.json())
		.then((res) => {
			let i = Math.ceil(Math.random() * 172);
			// console.log(res[i]);
			let doge = res[i];
			dogArray.push(doge);
			// console.log(dogArray);
			currentDog = dogArray[dogArray.length - 1];
			// console.log(currentDog);
			dogImage.src = currentDog.image.url;
			dogImage.addEventListener('click', (event) => {
			event.preventDefault();
			displayDog();
			});
			document.addEventListener('keydown', (event) => {
				event.preventDefault();
				if (event.key === ' ') {
					displayDog();
				}
			});
		})
		.catch((err) => console.log(err));
});


backButton.addEventListener('click', (event) => {
	event.preventDefault;
	previousDog = dogArray[dogArray.indexOf(currentDog) - 1];
	// console.log(previousDog);
	currentDog = previousDog;
	dogImage.src = currentDog.image.url;
	displayDog();
});

document.addEventListener('keydown', (event) => {
	event.preventDefault();
	// console.log('you clicked doggy');
	if (event.key === 'ArrowRight') {
		// console.log('Clicked right arrow');
		p.innerText = 'Click image to reveal breed!';
		p.style.color = 'black';
		p.style.textShadow = 'none';
		fetch(dogApi, {})
			.then((res) => res.json())
			.then((res) => {
				let i = Math.ceil(Math.random() * 172);
				// console.log(res[i]);
				let doge = res[i];
				dogArray.push(doge);
				console.log(dogArray);
				currentDog = dogArray[dogArray.length - 1];
				dogImage.src = doge.image.url;
				dogImage.addEventListener('click', (event) => {
					event.preventDefault();
					displayDog();
				});
				document.addEventListener('keydown', (event) => {
					event.preventDefault();
					if (event.key === ' ') {
					displayDog();
					}
				});
			})
			.catch((err) => console.log(err));
	}
});

// generate a deck of ordered cards user can go back and forth between
// "save" cards or just remove the cards that user guesses right?
// multiple choice?
// 'loading' animation

// document.addEventListener('keydown', function onPress(event) {
// 	if (event.key === 'ArrowRight') {
// 		console.log('right');
// 	} else if (event.key === 'ArrowLeft') {
// 		console.log('left');
// 	}
// });

// create an array
// when you click start, or click to next dog, it will push the response to the array
// when you hit start, back button appears
// back/left arrow key will access the previous element in the array

