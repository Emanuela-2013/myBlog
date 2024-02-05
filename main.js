 canvas = document.getElementById('Mycanvas');
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); 
	img_imgTag.onload = uploadimg; 
	img_imgTag.src = img_image;   
}

function uploadimg() {
	ctx.clearRect(0, 0, canvas.width, canvas.height); 
    ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

 window.addEventListener("keydown",my_keydown);

	function my_keydown(e) {
		var keyPressed = e.keyCode;
		console.log(keyPressed);
	
		if ((keyPressed >= 65 && keyPressed <= 90) || (keyPressed >= 97 && keyPressed <= 122)) {
			alphabetkey();
			document.getElementById("d1").innerHTML = "You pressed Alphabet Key";
			console.log("alphabet key");
		} else {
			otherkey();
			document.getElementById("d1").innerHTML = "You pressed symbol or other key";
		}
	}

	if (keyPressed >= 48 && keyPressed <= 57) {
        numberkey();
        document.getElementById("d1").innerHTML = "You pressed Number Key";
    } else if (keyPressed >= 37 && keyPressed <= 40) {
        arrowkey();
        document.getElementById("d1").innerHTML = "You pressed Arrow Key";
    } else if (keyPressed === 32 || (keyPressed >= 33 && keyPressed <= 36)) {
        specialkey();
        document.getElementById("d1").innerHTML = "You pressed Special Key";
    } else {
        otherkey();
        document.getElementById("d1").innerHTML = "You pressed symbol or other key";
    }

function alphabetkey()
{ 
	 img_image = "Alpkey.png";
add();

}
function numberkey()
{
	img_image = "numkey.png";
    add();
}
function arrowkey()
{
	img_image = "Arrkey.png";
    add();
}
function specialkey()
{
	img_image = "spkey.png";
    add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
{}
