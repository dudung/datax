/*
	2020xxyy-0.js
	Soybean with type Anjasmoro grown in SITH, ITB, Indonesia
	
	Shinta Palupi (water?)
	.. (..)
	.. (..)
	Pingkan Aditiawati (supervisor)
	Sparisoma Viridi (JS conversion)
	
	20200425
	1549 Make this as template for easy updating.
*/

var soybean = {
	species: "Glycine max",
	variety: "Anjasmoro",
	environment: "screen house",
	place: "Jatinangor, Indonesia",
	date: "10 Dec 2018",
	age: {
		unit: "week",
		value: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
	},
	height: {
		unit: "cm",
		value: [0, 11.95, 20.41, 31.25, 60.75, 98.67, 111.83, 135.66, 152.33, 181.50, 190.83, 197.75, 202.94, 208.14],
		sample: 3,
	},
	leaf: {
		unit: "leaves",
		value: [0, 2, 8.66, 14.83, 29.66, 48.50, 33.16, 68.66, 88.16, 119.16, 144,00, 169.50, 137.41, 105.33],
		sample: 2,
	},
	nodules: {
		unit: "g",
		value: [0, 0, 0, 0.14, 0.23, 0.79, 0.49, 0.86, 0.93, 1.93, 6.19, 13.10, 12.55, 12.00],
	},
};


// Push it to main array of Soybean
Soybean.push(soybean);

