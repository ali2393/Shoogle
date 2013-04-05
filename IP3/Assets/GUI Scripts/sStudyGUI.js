#pragma strict

var stress : sGUI;

var study : int;

var Cube10 : GameObject;
var Cube11 : GameObject;
var Cube12 : GameObject;
study = 0;

function Start () 
{
	stress=GameObject.Find("Cube3").GetComponent("sGUI");
}

function Update () {
	
	
	//study=GameObject.Find("oPlayer").GetComponent("sObjectClick").iStudy;
		
		
	if (study >= 0)
	{
		iTween.MoveTo(Cube10,{"y":0.5});
	}
	if (study < 0)
	{
		iTween.MoveTo(Cube10,{"y":-10});
	}
	
	if (study >= 1)
	{
		iTween.MoveTo(Cube11,{"y":0.75});
	}
	if (study < 1)
	{
		iTween.MoveTo(Cube11,{"y":-9});
	}
	
	if (study >= 2)
	{
		iTween.MoveTo(Cube12,{"y":1});
	}
	if (study < 2)
	{
		iTween.MoveTo(Cube12,{"y":-8});
	}
	if (study <= 5)
	{
		stress.Stress();
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