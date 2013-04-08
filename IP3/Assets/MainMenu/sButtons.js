#pragma strict

var texture1 : Material;
var texture2 : Material;

function OnMouseEnter () 
{
	renderer.sharedMaterial = texture1;
}
    
function OnMouseExit () 
{
	renderer.sharedMaterial = texture2;
}