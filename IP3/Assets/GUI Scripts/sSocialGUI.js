#pragma strict

var stress : sGUI;

var social : int;

var Social1 : GameObject;
var Social2 : GameObject;
var Social3 : GameObject;
var Social4 : GameObject;
var Social5 : GameObject;
var Social6 : GameObject;
var Social7 : GameObject;
var Social8 : GameObject;
var Social9 : GameObject;
var Social10 : GameObject;


social = 3;

function Start () {
	stress=GameObject.Find("Stress3").GetComponent("sGUI");
}

function Update () {
		
	
	if (social >= 1)
	{
		iTween.MoveTo(Social1,{"y":0.5});
	}
	if (social < 1)
	{
		iTween.MoveTo(Social1,{"y":-10});
	}
	
	if (social >= 2)
	{
		iTween.MoveTo(Social2,{"y":0.6});
	}
	if (social < 2)
	{
		iTween.MoveTo(Social2,{"y":-10});
	}
	
	if (social >= 3)
	{
		iTween.MoveTo(Social3,{"y":0.7});
	}
	if (social < 3)
	{
		iTween.MoveTo(Social3,{"y":-10});
	}
	
	if (social >= 4)
	{
		iTween.MoveTo(Social4,{"y":0.8});
	}
	if (social < 4)
	{
		iTween.MoveTo(Social4,{"y":-10});
	}
	
	if (social >= 5)
	{
		iTween.MoveTo(Social5,{"y":0.9});
	}
	if (social < 5)
	{
		iTween.MoveTo(Social5,{"y":-10});
	}
	
	if (social >= 6)
	{
		iTween.MoveTo(Social6,{"y":1.0});
	}
	if (social < 6)
	{
		iTween.MoveTo(Social6,{"y":-10});
	}
	
	if (social >= 7)
	{
		iTween.MoveTo(Social7,{"y":1.1});
	}
	if (social < 7)
	{
		iTween.MoveTo(Social7,{"y":-10});
	}
	
	if (social >= 8)
	{
		iTween.MoveTo(Social8,{"y":1.2});
	}
	if (social < 8)
	{
		iTween.MoveTo(Social8,{"y":-10});
	}
	
	if (social >= 9)
	{
		iTween.MoveTo(Social9,{"y":1.3});
	}
	if (social < 9)
	{
		iTween.MoveTo(Social9,{"y":-10});
	}
	
	if (social >= 10)
	{
		iTween.MoveTo(Social10,{"y":1.4});
	}
	if (social < 10)
	{
		iTween.MoveTo(Social10,{"y":-10});
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