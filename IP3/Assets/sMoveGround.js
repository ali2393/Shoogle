#pragma strict
//The set rate at which he ground will move
var fScrollSpeed :float=0.01;

function Update () 
{
	//Moving the ground at a set rate
	transform.Translate(fScrollSpeed,0.0,0.0);
}