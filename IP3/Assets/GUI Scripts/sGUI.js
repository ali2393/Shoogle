#pragma strict

var stress : int;

var Cube1 : GameObject;
var Cube2 : GameObject;
var Cube3 : GameObject;
stress = 0;

function Start () {

}

function Update () {
	
	//stress=GameObject.Find("oPlayer").GetComponent("sEventSpawn").stress;
	
	
	if (stress >= 0)
	{
		iTween.MoveTo(Cube1,{"y":0.5});
	}
	if (stress < 0)
	{
		iTween.MoveTo(Cube1,{"y":-10});
	}
	
	if (stress >= 1)
	{
		iTween.MoveTo(Cube2,{"y":0.75});
	}
	if (stress < 1)
	{
		iTween.MoveTo(Cube2,{"y":-10});
	}
	
	if (stress >= 2)
	{
		iTween.MoveTo(Cube3,{"y":1});
	}
	if (stress < 2)
	{
		iTween.MoveTo(Cube3,{"y":-10});
	}
	stress--;

}

function Stress()
{
	stress++;
}