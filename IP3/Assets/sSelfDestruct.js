#pragma strict

var fDeathTime: float=1.0;
var fTime: float=0;

function Update () 
{
	fTime+=Time.deltaTime;
	
	if(fTime > fDeathTime)
	{
		Destroy(gameObject);
	}
}