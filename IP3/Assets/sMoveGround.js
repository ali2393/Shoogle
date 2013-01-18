#pragma strict
//(AL) The set rate at which he ground will move
var fScrollSpeed :float=0.01;

function Update () 
{
	//(AL) Moving the ground at a set rate
	transform.Translate(fScrollSpeed,0.0,0.0);
}