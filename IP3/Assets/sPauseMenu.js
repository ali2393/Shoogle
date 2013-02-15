#pragma strict
var dplay : float ;
var dquit : float ;


function Start () 
{
	dplay = 3.5f;
	dquit = 0.429f;
}

function Update () 
{
		
}

function OnGUI()
{
			//(AL) If he button is pressed
		if (GUI.Button(new Rect(Screen.width/dplay + (Screen.width/5.0f) + 10.0f, Screen.height*dquit, Screen.width/5.0f, Screen.height/5.0f), "Exit"))
		{
			//(AL) Exit the game
			Application.LoadLevel("MainMenu");
		}
}