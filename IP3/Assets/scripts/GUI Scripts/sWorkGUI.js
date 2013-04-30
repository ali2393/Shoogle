#pragma strict

var stress : sGUI;

var work : int;

var Work1 : GameObject;
var Work2 : GameObject;
var Work3 : GameObject;
var Work4 : GameObject;
var Work5 : GameObject;
var Work6 : GameObject;
var Work7 : GameObject;
var Work8 : GameObject;
var Work9 : GameObject;
var Work10 : GameObject;

work = 3;

function Start () {
	stress=GameObject.Find("Stress3").GetComponent("sGUI");
}

function Update () {
	
	
	if (work >= 1)
	{
		iTween.MoveTo(Work1,{"y":0.5});
	}
	if (work < 1)
	{
		iTween.MoveTo(Work1,{"y":-10});
	}
	
	if (work >= 2)
	{
		iTween.MoveTo(Work2,{"y":0.6});
	}
	if (work < 2)
	{
		iTween.MoveTo(Work2,{"y":-10});
	}
	
	if (work >= 3)
	{
		iTween.MoveTo(Work3,{"y":0.7});
	}
	if (work < 3)
	{
		iTween.MoveTo(Work3,{"y":-10});
	}
	
	if (work >= 4)
	{
		iTween.MoveTo(Work4,{"y":0.8});
	}
	if (work < 4)
	{
		iTween.MoveTo(Work4,{"y":-10});
	}
	
	if (work >= 5)
	{
		iTween.MoveTo(Work5,{"y":0.9});
	}
	if (work < 5)
	{
		iTween.MoveTo(Work5,{"y":-10});
	}
	
	if (work >= 6)
	{
		iTween.MoveTo(Work6,{"y":1.0});
	}
	if (work < 6)
	{
		iTween.MoveTo(Work6,{"y":-10});
	}
	
	if (work >= 7)
	{
		iTween.MoveTo(Work7,{"y":1.1});
	}
	if (work < 7)
	{
		iTween.MoveTo(Work7,{"y":-10});
	}
	
	if (work >= 8)
	{
		iTween.MoveTo(Work8,{"y":1.2});
	}
	if (work < 8)
	{
		iTween.MoveTo(Work8,{"y":-10});
	}
	
	if (work >= 9)
	{
		iTween.MoveTo(Work9,{"y":1.3});
	}
	if (work < 9)
	{
		iTween.MoveTo(Work9,{"y":-10});
	}
	
	if (work >= 10)
	{
		iTween.MoveTo(Work10,{"y":1.4});
	}
	if (work < 10)
	{
		iTween.MoveTo(Work10,{"y":-10});
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