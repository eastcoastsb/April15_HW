//$(document).ready(function() {

var gallery = [
	{
		title: "title1",
		image: "Images/coverPic.jpg"
	},
	{
		title: "title2",
		image: "Images/coverPic.jpg"
	},
	{
		title: "title3",
		image: "Images/coverPic.jpg"
	}

];

var galleryTemplate = function(data) {
	var markup = "";
	var i;

	for(i = 0; i < data.length; i++) {
		markup += "<h1>" + data[i].title + "</h1>" + "<img src=" + data[i].image + ">";
	}
	return markup;
};

$("body").append(galleryTemplate(gallery));

var mountains = [
	{
		mountain: "Park City",
		location: "Park City, Utah"
	},
	{
		mountain: "The Canyons",
		location: "Park City, Utah"
	},
	{
		mountain: "Mt. Hood",
		location: "Oregon"
	},
	{
		mountain: "Mountain Creek",
		location: "Vernon, New Jersey"
	}

];

var mountainTemplate = function(data) {
	var markup = "";
	var i;

	for(i = 0; i < data.length; i++) {
		markup += "<h2>" + data[i].mountain + "</h2>" + "<p>" + data[i].location + "</p>";
	}
	return markup;
};

$("body").append(mountainTemplate(mountains));


function Snowboard(company, name, type, isBroken) {
	this.company = company;
	this.name = name;
	this.type = type;
	this.isBroken = isBroken;
	this.crashed = function() {
		this.isBroken = true;
	};

}

var firstBoard = new Snowboard("Capita", "Horrorscope", "Park", false);
var secondBoard = new Snowboard("Capita", "Slasher", "Powder", false);






















//});