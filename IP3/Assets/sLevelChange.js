function OnTriggerEnter(oEnd:Collider)
{
	//if the tag on oEnd is level2
	if(oEnd.tag=="Level2")
	{
		//Take the player to level 2
		Application.LoadLevel("level2");
	}
	
	//if the tag on oEnd is level3
	if(oEnd.tag=="Level3")
	{
		//Take the player to level 3
		Application.LoadLevel("level3");
	}
	
	//if the tag on oEnd is level4
	if(oEnd.tag=="Level4")
	{
		//Take the player to level 4
		Application.LoadLevel("level4");
	}
	
	//(if the tag on oEnd is MainMenu
	if(oEnd.tag=="MainMenu")
	{
		//Take the player to the Main Menu
		Application.LoadLevel("mainMenu");
	}
}