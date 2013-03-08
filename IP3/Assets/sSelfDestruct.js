#pragma strict

var fDeathTime: float=1.0;
var fTime: float=0;

function Update () 
{
	//set up a curent time
	fTime+=Time.deltaTime;
	
	// if its time to destroy the game object
	if(fTime > fDeathTime)
	{
		//destroy what ever this scipt that is connected to
		Destroy(gameObject);
	}
}