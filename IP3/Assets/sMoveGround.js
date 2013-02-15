#pragma strict
//(AL) The set rate at which he ground will move
var fScrollSpeed : float=0.01;

var pauseMovement : sPauseGame;

function Start()
{
	pauseMovement = GameObject.Find("oPlayer").GetComponent("sPauseGame");
}

function Update () 
{
	if (pauseMovement.paused == false)
	{
	//(AL) Moving the ground at a set rate
		transform.Translate(fScrollSpeed,0.0,0.0);
	}
}

/*function Pause ()
{
	if (pauseMovement==false)
	{
		pauseMovement==true
	}
	if (pauseMovement==true)
	{
		pauseMovement==false
	}
}*/