const things = [
	{
		"title": "Bevel Trimmer",
		"price": 220,
		"tags": [
			"Grooming",
			"Bathroom",
			"Hygiene"
		],
		"url": "https://getbevel.com/trimmer?featured=true&list=beard&v=black"
	},
	{
		"title": "Crest Pro-Health Advanced Gum Restore Toothpaste",
		"price": 7,
		"tags": [
			"Bathroom",
			"Hygiene"
		],
		"url": "https://www.target.com/p/crest-pro-health-advanced-gum-restore-toothpaste-deep-clean-mint-3-7oz/-/A-80137830",
		"notes": "I like the Deep Clean - Mint version",
		"recurring": true,
		"favorite": true
	},
	{
		"title": "West Elm Organic Waffle Towels",
		"price": 30,
		"tags": [
			"Bathroom"
		],
		"url": "https://www.westelm.com/products/organic-waffle-towels-b2782/?_br_psugg_q=waffle+towel",
		"notes": "I really like the Frost Gray color -- I just wish it was a bath sheet instead of a regular sized towel. I'd also like to compare them to the Onsen towels."
	},
	{
		"title": "Onsen Bath Robe",
		"price": 195,
		"tags": [
			"Bathroom"
		],
		"url": "https://onsentowel.com/collections/all/products/bath-robe?variant=32682606231631",
		"notes": "Cinder Grey, Large"
	},
	{
		"title": "Onsen Bath Sheet Set",
		"price": 105,
		"tags": [
			"Bathroom"
		],
		"url": "https://onsentowel.com/collections/all/products/bath-sheet-set?variant=53630476747",
		"notes": "I like the Cinder Grey color, but the Ochre is really growing on me."
	},
	{
		"title": "Satechi Type-C Extesnion Cable",
		"price": 6,
		"tags": [
			"Travel",
			"Work",
			"Office"
		],
		"url": "https://satechi.net/products/type-c-extension-charging-cable?variant=32041011904600"
	},
	{
		"title": "Satechi USB-C Magnetic Charging Dock",
		"price": 40,
		"tags": [
			"Travel",
			"Work"
		],
		"url": "https://satechi.net/products/usb-c-magnetic-charging-dock?variant=31972324769880"
	},
	{
		"title": "Satechi Eco-leather Deskmate",
		"price": 40,
		"tags": [
			"Office",
			"Work"
		],
		"url": "https://satechi.net/products/eco-leather-deskmate?variant=20500238532696",
		"notes": "Black"
	},
	{
		"title": "Akin Blip Gloves",
		"price": 60,
		"tags": [
			"Accessories",
			"Clothing"
		],
		"url": "https://akinmoto.com/products/blip-motorcycle-gloves?variant=7646315282487",
		"notes": "Size Large (I measured 21-23cm)"
	},
	{
		"title": "REAX Tasker Leather Gloves",
		"price": 80,
		"tags": [
			"Accessories",
			"Clothing"
		],
		"url": "https://www.revzilla.com/motorcycle/reax-tasker-leather-gloves"
	},
	{
		"title": "Happier Camper HC1",
		"price": 30000,
		"tags": [],
		"url": "https://happiercamper.com/pages/hc1-travel-trailer",
		"special": true
	},
	{
		"title": "IWC x Cafe Leather Driving Gloves",
		"price": 240,
		"tags": [
			"Accessories",
			"Clothing"
		],
		"url": "https://uncrate.com/iwc-x-cafe-leather-driving-gloves/",
		"special": true
	},
	{
		"title": "Wyze Floor Lamp",
		"price": 30,
		"tags": [
			"Furniture"
		],
		"url": "https://wyze.com/wyze-floor-lamp.html",
		"purchased": true
	},
	{
		"title": "Bellroy Classic Backpack Plus",
		"price": 180,
		"tags": [
			"Travel",
			"Accessories"
		],
		"url": "https://bellroy.com/products/classic-backpack-plus/venture/black#slide-0"
	},
	{
		"title": "Dissolve Mug",
		"price": 40,
		"tags": [
			"Kitchen",
			"Accessories"
		],
		"url": "https://ryanputn.am/ceramics-shop/dissolve-mug-01"
	},
	{
		"title": "Duck Rabbit Coffee",
		"price": 19,
		"tags": [
			"Kitchen",
		],
		"url": "https://www.duckrabbitcoffee.com/shop/86p3uuukv2ydub5qdcq30ftdtt1kcs",
		"recurring": true
	},
	{
		"title": "Matador Freerain 24 Backpack",
		"price": 65,
		"tags": [
			"Travel",
			"Accessories"
		],
		"url": "https://matadorup.com/collections/matador-products/products/freerain24-2-0?variant=18267414364273"
	},
	{
		"title": "Matador FlatPak Toiletry Bottle",
		"price": 35,
		"tags": [
			"Travel",
			"Accessories"
		],
		"url": "https://matadorup.com/products/flatpak-toiletry-bottle?variant=39249256775793&avad=248329_d20c66e1d"
	},
	{
		"title": "TSV 19\" Tesla Wheel",
		"price": 1960,
		"tags": [
			"Vehicle"
		],
		"url": "https://tsportline.com/collections/tesla-model-y-19-inch-aftermarket-tesla-wheels/products/tsv-tesla-model-y-19-inch-wheel-set-of-4?variant=32501570699324",
		"special": true,
		"notes": "Satin Black"
	},
	{
		"title": "Tesla 20\" Induction Wheel",
		"price": 4500,
		"tags": [
			"Vehicle"
		],
		"url": "https://shop.tesla.com/product/model-y-20_-induction-wheel-and-winter-tire-package",
		"special": true,
		"notes": "Waiting on the summer tire package"
	},
	{
		"title": "Stagg Double Wall Carafe",
		"price": 39,
		"tags": [
			"Kitchen"
		],
		"url": "https://fellowproducts.com/products/stagg-double-wall-carafe"
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
		"title": "Fellow Ode Coffee Grinder",
		"price": 299,
		"tags": [
			"Kitchen"
		],
		"url": "https://fellowproducts.com/products/ode-brew-grinder",
		"special": true
	},
	{
		"title": "Octopus Chopstick Rests",
		"price": 46,
		"tags": [
			"Kitchen"
		],
		"url": "https://www.artifaqt.com/metal/octopus-chopstick-rests"
	},
	{
		"title": "Sea Urchin Bowl",
		"price": 125,
		"tags": [
			"Kitchen"
		],
		"url": "https://www.artifaqt.com/metal/sea-urchin-bowl"
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
		"title": "Kiehls Daily Reviving Oil",
		"price": 52,
		"tags": [
			"Bathroom",
			"Self Care"
		],
		"url": "https://www.kiehls.com/skincare/face-oils/daily-reviving-concentrate-face-oil/KHL497.html?dwvar_KHL497_size=1.0%20fl.%20oz.",
		"favorite": true,
		"recurring": true
	},
	{
		"title": "Bell Bullitt Carbon Helmet",
		"price": 630,
		"tags": [
			"Accessories"
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
		"purchased": true,
		"numOwned": 6
	},
	{
		"title": "Levis Premium 511 Jeans",
		"price": 90,
		"tags": [
			"Clothing"
		],
		"url": "https://uncrate.com/levis-premium-511-black-rinse-jeans/",
		"favorite": true,
		"purchased": true,
		"numOwned": 2
	},
	{
		"title": "7 For All Mankind Slimmy Jeans",
		"price": 178,
		"tags": [
			"Clothing"
		],
		"url": "https://www.7forallmankind.com/slimmy-in-hillside.html",
		"favorite": true,
		"purchased": true,
		"numOwned": 3
	},
	{
		"title": "Mack Weldon AIRKNITx Boxer Brief",
		"price": 28,
		"tags": [
			"Clothing"
		],
		"url": "https://mackweldon.com/collections/boxer-briefs/products/airknitx-boxer-brief",
		"favorite": true,
		"purchased": true,
		"numOwned": 2
	},
	{
		"title": "Nike Blazer Low",
		"price": 75,
		"tags": [
			"Shoes",
			"Clothing"
		],
		"url": "https://www.nike.com/t/blazer-low-leather-mens-shoe-4w5Mgj",
		"purchased": true,
		"numOwned": 2
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
	}
];

/* RETIRED ITEMS */
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
{
	"title": "Hario V60 Drip Scale",
	"price": 60,
	"tags": [
		"Kitchen"
	],
	"url": "https://www.hario-usa.com/products/v60-drip-scale",
	"purchased": true
},
{
	"title": "Lululemon Take Form Yoga Mat",
	"price": 118,
	"tags": [
		"Fitness",
		"Accessories",
		"Equipment"
	],
	"url": "https://shop.lululemon.com/p/yoga-mats/Take-Form-Yoga-Mat-5mm/_/prod10370187?color=47749&sz=ONESIZE",
	"purchased": true
},
{
	"title": "KitchenAid Artisan Stand Mixer",
	"price": 399,
	"tags": [
		"Kitchen"
	],
	"url": "https://www.kitchenaid.com/countertop-appliances/color-of-the-year/stand-mixers/p.artisan-series-5-quart-tilt-head-stand-mixer.ksm150psbm.html",
	"special": true,
	"purchased": true
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
	"url": "https://uncrate.com/shaken-drinking-with-james-bond-ian-fleming/",
	"purchased": true
},
{
	"title": "Viva Mezcal",
	"price": 80,
	"tags": [
		"Books"
	],
	"url": "https://uncrate.com/viva-mezcal/",
	"purchased": true
},
{
	"title": "Lego NASA Space Shuttle Discovery",
	"price": 200,
	"tags": [
		"Collectibles",
		"Toys"
	],
	"url": "https://www.lego.com/en-us/product/nasa-space-shuttle-discovery-10283",
	"special": true,
	"purchased": true
},
{
	"title": "REV'IT! Bastille Gloves",
	"price": 100,
	"tags": [
		"Accessories",
		"Clothing"
	],
	"url": "https://www.revzilla.com/motorcycle/revit-bastille-gloves"
},
{
	"title": "Stadler Form Otto Fan",
	"price": 200,
	"tags": [
		"Household",
		"Furniture",
		"Appliance"
	],
	"url": "https://www.stadlerform.com/en-ch/products/fan/otto/information/",
	"notes": "In African Sapele Wood",
	"purchased": true
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
*/