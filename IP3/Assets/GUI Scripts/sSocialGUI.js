#pragma strict

var stress : sGUI;

var social : int;

var Cube7 : GameObject;
var Cube8 : GameObject;
var Cube9 : GameObject;
social = 0;

function Start () {
	stress=GameObject.Find("Cube3").GetComponent("sGUI");
}

function Update () {
	
	//social=GameObject.Find("oPlayer").GetComponent("sObjectClick").iSocial;
	
	if (social >= 0)
	{
		iTween.MoveTo(Cube7,{"y":0.5});
	}
	if (social < 0)
	{
		iTween.MoveTo(Cube7,{"y":-10});
	}
	
	if (social >= 1)
	{
		iTween.MoveTo(Cube8,{"y":0.75});
	}
	if (social < 1)
	{
		iTween.MoveTo(Cube8,{"y":-9});
	}
	
	if (social >= 2)
	{
		iTween.MoveTo(Cube9,{"y":1});
	}
	if (social < 2)
	{
		iTween.MoveTo(Cube9,{"y":-8});
	}
	if (social <= 50)
	{
		stress.Stress();
	}
}

function Social()
{
	social = social + 1;
}

function NotSocial()
{
	social = social - 0.5;
}