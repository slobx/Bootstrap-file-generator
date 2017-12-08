const inputNames = document.getElementById("inputNames");
const result = document.getElementById("result");
var template_html = '<!DOCTYPE html>\n' +
    '	<html lang="en">\n' +
    '		<head>\n' +
    '			<title>Bootstrap Theme Simply Me</title>\n' +
    '  			<meta charset="utf-8">\n' +
    '			<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">\n' +
    '			<link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">\n' +
    '			<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>\n' +
    '			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>\n' +
    '			<style>\n' +
    '				body {\n' +
    '					font: 20px Montserrat, sans-serif;\n' +
    '					line-height: 1.8;\n' +
    '					color: #f5f6f7;\n' +
    '					}\n' +
    '				p {font-size: 16px;}\n' +
    '				.margin {margin-bottom: 45px;}\n' +
    '				.bg-1 {\n' +
    '					background-color: #1abc9c; /* Green */\n' +
    '					color: #ffffff;\n' +
    '					}\n' +
    '				.bg-2 {\n' +
    '					background-color: #474e5d; /* Dark Blue */\n' +
    '					color: #ffffff;\n' +
    '					}\n' +
    '				.bg-3 {\n' +
    '					background-color: #ffffff; /* White */\n' +
    '					color: #555555;\n' +
    '					}\n' +
    '				.bg-4 {\n' +
    '					background-color: #2f2f2f; /* Black Gray */\n' +
    '					color: #fff;\n' +
    '					}\n' +
    '				.container-fluid {\n' +
    '					padding-top: 70px;\n' +
    '					padding-bottom: 70px;\n' +
    '					}\n' +
    '				.navbar {\n' +
    '					padding-top: 15px;\n' +
    '					padding-bottom: 15px;\n' +
    '					border: 0;\n' +
    '					border-radius: 0;\n' +
    '					margin-bottom: 0;\n' +
    '					font-size: 12px;\n' +
    '					letter-spacing: 5px;\n' +
    '					}\n' +
    '				.navbar-nav  li a:hover {\n' +
    '					color: #1abc9c !important;\n' +
    '					}\n' +
    '			</style>\n' +
    '		</head>\n' +
    '	<body>\n' +
    '\n' +
    '	<nav class="navbar navbar-default">\n' +
    '		<div class="container">\n' +
    '			<div class="navbar-header">\n' +
    '				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">\n' +
    '					<span class="icon-bar"></span>\n' +
    '					<span class="icon-bar"></span>\n' +
    '					<span class="icon-bar"></span>\n' +
    '			</button> <a class="navbar-brand" href="#">Me</a>\n' +
    '			</div>\n' +
    '				<div class="collapse navbar-collapse" id="myNavbar">\n' +
    '				<ul class="nav navbar-nav navbar-right">\n' +
    '					<li><a href="#">WHO</a></li>\n' +
    '					<li><a href="#">WHAT</a></li>\n' +
    '					<li><a href="#">WHERE</a></li>\n' +
    '				</ul>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '	</nav>\n' +
    '\n' +
    '<div class="container-fluid text-center" id="whoami" style="background: black; color:white">\n' +
    '        <h3 class="margin">Bart Simpson</h3>\n' +
    '        <img src="http://www.freepngimg.com/download/bart_simpson/5-2-bart-simpson-png-clipart.png" class="img-responsive img-circle margin" style="display:inline" alt="bart" width="350" height="350">\n' +
    '        <h3 class="margin">I am software developer.</h3>\n' +
    '    </div>\n' +
    '    <div class="container-fluid text-center" id="contact">\n' +
    '        <h3 class="margin">Contact</h3>\n' +
    '        <small>Email me: </small><a href="mailto:bart@simpsons.com">bart@simpsons.com</a>\n' +
    '    </div>\n' +
    '    <footer class="container-fluid text-center">\n' +
    '        <p>&copy SIMPOSONS 2017</p>\n' +
    '    </footer>\n' +
    '\n' +
    '</body>\n' +
    '</html>\n'

function download() {
    let downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(result.value));
    downloadLink.setAttribute('download', "BOPATG.html");
    downloadLink.style.display = 'none';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}

function generate() {
    const names = inputNames.value;
    let template = "Names: " + names + "\nStatus: Not implemented!";
    // TODO
    result.innerHTML = template_html;
}