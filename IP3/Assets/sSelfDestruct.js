#pragma strict

var fDeathTime: float=1.0;
var fTime: float=0;

var pauseSpawning: sPauseGame;

function Start()
{
	pauseSpawning = GameObject.Find("oPlayer").GetComponent("sPauseGame");
}

function Update () 
{
	if (pauseSpawning.paused == false)
	{
	fTime+=Time.deltaTime;
	
	if(fTime > fDeathTime)
	{
		Destroy(gameObject);
	}
	}
}

/*function Pause ()
{
	if (pauseSpawning==false)
	{
		pauseSpawning==true
	}
	if (pauseSpawning==true)
	{
		pauseSpawning==false
	}
}*/
