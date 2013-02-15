#pragma strict

var stress : int;

var Cube1 : GameObject;
var Cube2 : GameObject;
var Cube3 : GameObject;
stress = 0;

function Start () {

}

function Update () {
	
	if (stress >= 0)
	{
		iTween.MoveTo(Cube1,{"y":0});
	}
	if (stress < 0)
	{
		iTween.MoveTo(Cube1,{"y":-10});
	}
	
	if (stress >= 100)
	{
		iTween.MoveTo(Cube2,{"y":1});
	}
	if (stress < 100)
	{
		iTween.MoveTo(Cube2,{"y":-9});
	}
	
	if (stress >= 200)
	{
		iTween.MoveTo(Cube3,{"y":2});
	}
	if (stress < 200)
	{
		iTween.MoveTo(Cube3,{"y":-8});
	}
	stress--;

}

function Stress()
{
	stress = stress + 100;
}