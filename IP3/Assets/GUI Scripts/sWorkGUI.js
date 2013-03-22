#pragma strict

var stress : sGUI;

var work : int;

var Cube4 : GameObject;
var Cube5 : GameObject;
var Cube6 : GameObject;
work = 0;

function Start () {
	stress=GameObject.Find("Cube3").GetComponent("sGUI");
}

function Update () {
	
	if (work >= 0)
	{
		iTween.MoveTo(Cube4,{"y":0.5});
	}
	if (work < 0)
	{
		iTween.MoveTo(Cube4,{"y":-10});
	}
	
	if (work >= 100)
	{
		iTween.MoveTo(Cube5,{"y":0.75});
	}
	if (work < 100)
	{
		iTween.MoveTo(Cube5,{"y":-9});
	}
	
	if (work >= 200)
	{
		iTween.MoveTo(Cube6,{"y":1});
	}
	if (work < 200)
	{
		iTween.MoveTo(Cube6,{"y":-8});
	}
	if (work <= 50)
	{
		stress.Stress();
	}
}

function Work()
{
	work = work + 100;
}

function NotWork()
{
	work = work - 50;
}