const container = document.getElementById('things-container');

const createCard = (data) => {
	let card = document.createElement('div');
	card.classList.add('card');
	
	let imageName = (data.title).split(' ').join('-');
	let image = document.createElement('img');
	//image.classList.add('lazy');
	image.src = 'assets/img/' + imageName + '.jpg';
	card.appendChild(image);
	
	let cardHeader = document.createElement('header');
	card.appendChild(cardHeader);
	
	let title = document.createElement('h1');
	title.innerText = data.title;
	cardHeader.appendChild(title);
	
	if(data.url) {
		let link = document.createElement('a');
		link.href = data.url;
		
		if(Number.isInteger(data.price)) {
			link.innerText = '$' + data.price;
		} else {
			link.innerText = data.price;
		}
		
		cardHeader.appendChild(link);
	} else {
		let price = document.createElement('span');
		if(Number.isInteger(data.price)) {
			price.innerText = '$' + data.price;
		} else {
			price.innerText = data.price;
		}
		
		cardHeader.appendChild(price);
	}
	
	return card;
}

// Loop over the things array
// See data/things.js
for(const thing of things) {
	console.log(thing.title);
	
	let card = createCard(thing);
	
	container.appendChild(card);
}

// Lazy load images
// Source: https://css-tricks.com/the-complete-guide-to-lazy-loading-images/
document.addEventListener('DOMContentLoaded', function() {
	  let lazyloadImages;
	  
	  lazyloadImages = document.querySelectorAll('.lazy');
	  let imageObserver = new IntersectionObserver(function(entries, observer) {
		entries.forEach(function(entry) {
		  if (entry.isIntersecting) {
			let image = entry.target;
			image.src = image.dataset.src;
			image.classList.remove('lazy');
			imageObserver.unobserve(image);
		  }
		});
	  });
  
	  lazyloadImages.forEach(function(image) {
		imageObserver.observe(image);
	  });
})