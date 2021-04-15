const container = document.getElementById('things-container');

const createCard = (data) => {
	
	let card = document.createElement('div');
	card.classList.add('card');
	
	let imageName = (data.title).split(' ').join('-');
	let image = document.createElement('img');
	//image.classList.add('lazy');
	image.setAttribute('loading', 'lazy');
	image.src = 'assets/img/' + imageName + '.jpg';
	card.appendChild(image);
	
	let cardHeader = document.createElement('header');
	card.appendChild(cardHeader);
	
	let title = document.createElement('h1');
	title.innerText = data.title;
	cardHeader.appendChild(title);
	
	let price = document.createElement('span');
	price.classList.add('price');
	if(Number.isInteger(data.price)) {
		price.innerText = '$' + data.price.toLocaleString('en');
	} else {
		price.innerText = data.price;
	}
	cardHeader.appendChild(price);
	
	let buyButton = document.createElement('a');
	buyButton.href = data.url;
	buyButton.target = "_blank";
	buyButton.innerText	= 'Buy';
	buyButton.classList.add('buy-button');
	cardHeader.appendChild(buyButton);
	
	
	if(data.favorite) {
		let el = document.createElement('span');
		el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>';
		el.classList.add('favorite');
		card.appendChild(el);
	}
	
	if(data.recurring) {
		let el = document.createElement('span');
		el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-refresh-cw"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>';
		el.classList.add('recurring');
		card.appendChild(el);
	}
	
	if(data.purchased) {
		let el = document.createElement('span');
		el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check"><polyline points="20 6 9 17 4 12"></polyline></svg>';
		el.classList.add('purchased');
		card.appendChild(el);
	}
	
	if(data.special) {
		let el = document.createElement('span');
		el.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>';
		el.classList.add('special');
		card.appendChild(el);
	}
	
	return card;
}

// Loop over the things array
// See data/things.js
for(const thing of things) {
	let card = createCard(thing);
	container.appendChild(card);
}

// Lazy load images
// Source: https://css-tricks.com/the-complete-guide-to-lazy-loading-images/
/*document.addEventListener('DOMContentLoaded', function() {
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
});*/