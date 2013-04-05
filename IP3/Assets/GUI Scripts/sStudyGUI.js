#pragma strict

var stress : sGUI;

var study : int;

var Study1 : GameObject;
var Study2 : GameObject;
var Study3 : GameObject;
var Study4 : GameObject;
var Study5 : GameObject;
var Study6 : GameObject;
var Study7 : GameObject;
var Study8 : GameObject;
var Study9 : GameObject;
var Study10 : GameObject;


study = 3;

function Start () 
{
	stress=GameObject.Find("Stress3").GetComponent("sGUI");
}

function Update () {
	
	
	if (study >= 1)
	{
		iTween.MoveTo(Study1,{"y":0.5});
	}
	if (study < 1)
	{
		iTween.MoveTo(Study1,{"y":-10});
	}
	
	if (study >= 2)
	{
		iTween.MoveTo(Study2,{"y":0.6});
	}
	if (study < 2)
	{
		iTween.MoveTo(Study2,{"y":-10});
	}
	
	if (study >= 3)
	{
		iTween.MoveTo(Study3,{"y":0.7});
	}
	if (study < 3)
	{
		iTween.MoveTo(Study3,{"y":-10});
	}
	
	if (study >= 4)
	{
		iTween.MoveTo(Study4,{"y":0.8});
	}
	if (study < 4)
	{
		iTween.MoveTo(Study4,{"y":-10});
	}
	
	if (study >= 5)
	{
		iTween.MoveTo(Study5,{"y":0.9});
	}
	if (study < 5)
	{
		iTween.MoveTo(Study5,{"y":-10});
	}
	
	if (study >= 6)
	{
		iTween.MoveTo(Study6,{"y":1.0});
	}
	if (study < 6)
	{
		iTween.MoveTo(Study6,{"y":-10});
	}
	
	if (study >= 7)
	{
		iTween.MoveTo(Study7,{"y":1.1});
	}
	if (study < 7)
	{
		iTween.MoveTo(Study7,{"y":-10});
	}
	
	if (study >= 8)
	{
		iTween.MoveTo(Study8,{"y":1.2});
	}
	if (study < 8)
	{
		iTween.MoveTo(Study8,{"y":-10});
	}
	
	if (study >= 9)
	{
		iTween.MoveTo(Study9,{"y":1.3});
	}
	if (study < 9)
	{
		iTween.MoveTo(Study9,{"y":-10});
	}
	
	if (study >= 10)
	{
		iTween.MoveTo(Study10,{"y":1.4});
	}
	if (study < 10)
	{
		iTween.MoveTo(Study10,{"y":-10});
	}
}

function Study()
{
	study = study + 1;
}

function NotStudy()
{
	study = study - 0.5;
}