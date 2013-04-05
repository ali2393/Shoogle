#pragma strict

var stress : int;

var Stress1 : GameObject;
var Stress2 : GameObject;
var Stress3 : GameObject;
var Stress4 : GameObject;
var Stress5 : GameObject;
var Stress6 : GameObject;
var Stress7 : GameObject;
var Stress8 : GameObject;
var Stress9 : GameObject;
var Stress10 : GameObject;


stress = 3;

function Start () {

}

function Update () {	
	
	if (stress >= 1)
	{
		iTween.MoveTo(Stress1,{"y":0.5});
	}
	if (stress < 1)
	{
		iTween.MoveTo(Stress1,{"y":-10});
	}
	
	if (stress >= 2)
	{
		iTween.MoveTo(Stress2,{"y":0.6});
	}
	if (stress < 2)
	{
		iTween.MoveTo(Stress2,{"y":-10});
	}
	
	if (stress >= 3)
	{
		iTween.MoveTo(Stress3,{"y":0.7});
	}
	if (stress < 3)
	{
		iTween.MoveTo(Stress3,{"y":-10});
	}
	
	if (stress >= 4)
	{
		iTween.MoveTo(Stress4,{"y":0.8});
	}
	if (stress < 4)
	{
		iTween.MoveTo(Stress4,{"y":-10});
	}
	
	if (stress >= 5)
	{
		iTween.MoveTo(Stress5,{"y":0.9});
	}
	if (stress < 5)
	{
		iTween.MoveTo(Stress5,{"y":-10});
	}
	
	if (stress >= 6)
	{
		iTween.MoveTo(Stress6,{"y":1.0});
	}
	if (stress < 6)
	{
		iTween.MoveTo(Stress6,{"y":-10});
	}
	
	if (stress >= 7)
	{
		iTween.MoveTo(Stress7,{"y":1.1});
	}
	if (stress < 7)
	{
		iTween.MoveTo(Stress7,{"y":-10});
	}
	
	if (stress >= 8)
	{
		iTween.MoveTo(Stress8,{"y":1.2});
	}
	if (stress < 8)
	{
		iTween.MoveTo(Stress8,{"y":-10});
	}
	
	if (stress >= 9)
	{
		iTween.MoveTo(Stress9,{"y":1.3});
	}
	if (stress < 9)
	{
		iTween.MoveTo(Stress9,{"y":-10});
	}
	
	if (stress >= 10)
	{
		iTween.MoveTo(Stress10,{"y":1.4});
	}
	if (stress < 10)
	{
		iTween.MoveTo(Stress10,{"y":-10});
	}

}

function Stress()
{
	stress = stress + 1;
}