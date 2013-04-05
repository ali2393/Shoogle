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
	
	//swork=GameObject.Find("oPlayer").GetComponent("sObjectClick").iWork ;

	if (work >= 0)
	{
		iTween.MoveTo(Cube4,{"y":0.5});
	}
	if (work < 0)
	{
		iTween.MoveTo(Cube4,{"y":-10});
	}
	
	if (work >= 1)
	{
		iTween.MoveTo(Cube5,{"y":0.75});
	}
	if (work < 1)
	{
		iTween.MoveTo(Cube5,{"y":-9});
	}
	
	if (work >= 2)
	{
		iTween.MoveTo(Cube6,{"y":1});
	}
	if (work < 2)
	{
		iTween.MoveTo(Cube6,{"y":-8});
	}
	if (work <= 5)
	{
		stress.Stress();
	}
}

function Work()
{
	work = work + 1;
}

function NotWork()
{
	work = work - 0.5;
}