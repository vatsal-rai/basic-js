var lbar = document.getElementById("leftbar");
var rbar = document.getElementById("rightbar");
window.lctx = lbar.getContext("2d");                       //Note : I used window in place of var .
window.rctx = rbar.getContext("2d");                        
lctx.fillStyle = "#0000FF";
lctx.fillRect(0,0,250,150);
rctx.fillStyle = "#0000FF";
rctx.fillRect(0,0,250,150);                               /*We finished making health bar here and from next line we are going to make rectangle canvases for
                                                            both the players .*/
window.addEventListener("keydown",check,false);
function check(key)
{
	if(key.keyCode=="65")
	{
		left1()
	}
	if(key.keyCode == "68")
	{
		right1()
	}
	if(key.keyCode=="37")
	{
		left2()
	}
	if(key.keyCode=="39")
	{
		right2()
	}
}
var posx1 = 300;
var posx2 = 900;
function left1()
{
	    var elem = document.getElementById("player1");
	    posx1 = posx1 - 10 ;
	    elem.style.left = posx1 + 'px';
} 
function right1()
{
	var elem = document.getElementById("player1");
	posx1 = posx1 + 10 ;
	elem.style.left = posx1 + 'px';
}
function left2()
{
	var elem = document.getElementById("player2");
	posx2 = posx2 -10;
	elem.style.left = posx2 + 'px';
}
function right2()
{
	var elem = document.getElementById("player2");
	posx2 = posx2 + 10;
	elem.style.left = posx2 + 'px';
}                      

