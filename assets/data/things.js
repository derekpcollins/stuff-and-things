const things = [
	{
		"title": "Stagg Double Wall Carafe",
		"price": 39,
		"tags": [
			"Kitchen"
		],
		"url": "https://fellowproducts.com/products/stagg-double-wall-carafe"
	},
	{
		"title": "KitchenAid Artisan Stand Mixer",
		"price": 399,
		"tags": [
			"Kitchen"
		],
		"url": "https://www.kitchenaid.com/countertop-appliances/color-of-the-year/stand-mixers/p.artisan-series-5-quart-tilt-head-stand-mixer.ksm150psbm.html",
		"special": true
	},
	{
		"title": "Acacia Pearl Model S Scale",
		"price": 195,
		"tags": [
			"Kitchen"
		],
		"url": "https://acaia.co/products/pearl-model-s",
		"special": true
	},
	{
		"title": "Hario V60 Drip Scale",
		"price": 60,
		"tags": [
			"Kitchen"
		],
		"url": "https://www.hario-usa.com/products/v60-drip-scale"
	},
	{
		"title": "Fellow Ode Coffee Grinder",
		"price": 299,
		"tags": [
			"Kitchen"
		],
		"url": "https://fellowproducts.com/products/ode-brew-grinder",
		"special": true
	},
	{
		"title": "Kiehls Midnight Recovery Oil",
		"price": 52,
		"tags": [
			"Bathroom",
			"Self Care"
		],
		"url": "https://www.kiehls.com/skincare/face-oils/midnight-recovery-concentrate-face-oil/819.html?dwvar_819_size=1.0%20fl.%20oz%20Bottle",
		"favorite": true,
		"recurring": true
	},
	{
		"title": "Bell Bullitt Carbon Helmet",
		"price": 630,
		"tags": [
			
		],
		"url": "https://www.bellhelmets.com/motorcycle/p/bullitt-carbon-cruiser-motorcycle-helmet/250030000100000003.html",
		"special": true
	},
	{
		"title": "JCrew T-shirt",
		"price": 30,
		"tags": [
			"Clothing"
		],
		"url": "https://www.jcrew.com/p/mens_category/tshirts/slubcotton/garmentdyed-slub-cotton-nopocket-tshirt/AU015?color_name=black",
		"favorite": true,
		"purchased": true
	},
	{
		"title": "Levis Premium 511 Jeans",
		"price": 90,
		"tags": [
			"Clothing"
		],
		"url": "https://uncrate.com/levis-premium-511-black-rinse-jeans/",
		"favorite": true,
		"purchased": true
	},
	{
		"title": "7 For All Mankind Slimmy Jeans",
		"price": 178,
		"tags": [
			"Clothing"
		],
		"url": "https://www.7forallmankind.com/slimmy-in-hillside.html",
		"favorite": true,
		"purchased": true
	},
	{
		"title": "Mack Weldon AIRKNITx Boxer Brief",
		"price": 28,
		"tags": [
			"Clothing"
		],
		"url": "https://mackweldon.com/collections/boxer-briefs/products/airknitx-boxer-brief",
		"favorite": true,
		"purchased": true
	},
	{
		"title": "Nike Blazer Low",
		"price": 75,
		"tags": [
			"Shoes",
			"Clothing"
		],
		"url": "https://www.nike.com/t/blazer-low-leather-mens-shoe-4w5Mgj",
		"purchased": true
	},
	{
		"title": "Sondors Metacycle",
		"price": 5000,
		"tags": [
			"Transportation"
		],
		"url": "https://sondorsx.com/pages/metacycle",
		"favorite": true,
		"purchased": true
	},
	{
		"title": "Mazma Crater Lake Mug",
		"price": 32,
		"tags": [
			"Kitchen"
		],
		"url": "https://www.tannergoods.com/collections/tableware/products/crater-lake-mug-2"
	},
	{
		"title": "Balmuda The Toaster",
		"price": 329,
		"tags": [
			"Kitchen"
		],
		"url": "https://us.balmuda.com/products/balmuda-the-toaster",
		"special": true
	},
	{
		"title": "The Essential Cocktail Book",
		"price": 80,
		"tags": [
			"Books"
		],
		"url": "https://uncrate.com/the-essential-cocktail-book/"
	},
	{
		"title": "Shaken",
		"price": 25,
		"tags": [
			"Books"
		],
		"url": "https://uncrate.com/shaken-drinking-with-james-bond-ian-fleming/"
	},
	{
		"title": "Viva Mezcal",
		"price": 80,
		"tags": [
			"Books"
		],
		"url": "https://uncrate.com/viva-mezcal/"
	},
	{
		"title": "Coravin Pivot",
		"price": 99,
		"tags": [
			"Kitchen"
		],
		"url": "https://www.coravin.com/products/pivot"
	},
	{
		"title": "Tom Ford Marko Aviator Sunglasses",
		"price": 405,
		"tags": [
			"Sunglasses",
			"Clothing",
			"Accessories"
		],
		"url": "https://www.tomford.com/on/demandware.store/Sites-tomford-Site/default/Product-Variation?pid=FT0144&dwvar_FT0144_color=18V&dwvar_FT0144_size=OS",
		"description": "The Tom Ford Marko FT0144 (sometimes named TF144) sunglasses are worn by James Bond (Daniel Craig) in the movie SkyFall (2012)."
	},
	{
		"title": "Vuarnet Legend 06 Sunglasses",
		"price": 240,
		"tags": [
			"Sunglasses",
			"Clothing",
			"Accessories"
		],
		"url": "https://us.vuarnet.com/products/legend-06",
		"description": "Once again, Daniel Craig has chosen a Vuarnet model for the next opus of James Bond: No Time to Die. This time, our favorite super spy has hand-selected the iconic Legend 06, already worn by Alain Delon in the early 70s."
	},
	{
		"title": "Omega Seamaster Diver 300M 007 Edition",
		"price": 6500,
		"tags": [
			"Watch",
			"Clothing",
			"Accessories"
		],
		"special": true,
		"url": "https://www.omegawatches.com/en-us/watch-omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21022422001004",
		"description": "007 has worn a Seamaster since 1995. Limited to just 7,007 pieces, it is crafted with plenty of secret surprises."
	},
	{
		"title": "Walther PPK",
		"price": 800,
		"tags": [
			"Accessories"
		],
		"url": "https://waltherarms.com/ppk-2/",
		"description": ".380 ACP"
	}
];

/* REMOVED ITEMS */
/*
{
	"title": "Atoms Model 000",
	"price": 129,
	"tags": [
		"Shoes",
		"Clothing"
	],
	"url": "https://www.atoms.com/products/atoms-black"
},
{
	"title": "Nike ZoomX VaporFly NEXT 2",
	"price": "TBA",
	"tags": [
		"Shoes",
		"Clothing"
	],
	"url": "https://www.werd.com/57555/nike-trots-out-zoomx-vaporfly-next-2/"
},
{
	"title": "Omega Seamasater Diver 300M",
	"price": 8100,
	"tags": [
		"Watch",
		"Clothing",
		"Accessories"
	],
	"special": true,
	"url": "https://www.omegawatches.com/watch-omega-seamaster-diver-300m-co-axial-master-chronometer-42-mm-21092422001001",
	"description": "Identical to 007's watch in No Time To Die this 42mm Seamaster, in strong yet lightweight Grade 2 Titanium, sports a brown tropical aluminium bezel ring and dial."
},
{
	"title": "Tom Ford Snowdon Sunglasses",
	"price": 430,
	"tags": [
		"Sunglasses",
		"Clothing",
		"Accessories"
	],
	"url": "https://www.tomford.com/snowdon-sunglasses/FT0237.html",
	"description": "In SPECTRE Bond wears two pair of Tom Ford sunglasses, the Henry Vintage Wayfarer and the Snowdon."
},
*/