using UnityEngine;
using System.Collections;

public class sMainMenu: MonoBehaviour 
{
	//public float ButtonWidth = Screen.width/5.0f;
	//public float ButtonHeight = Screen.height/5.0f;
	public float ButtonSpacing = Screen.width/42.0f;
	public float ButtonYStart = 300.0f;
	public Texture2D MainMenuBackgroundImage;
	private float dplay = 3.5f;
	private float dquit = 0.429f;
	

	// Use this for initialization
	void Start () 
	{	
	}
	
	void OnGUI() 
	{
		//Draw the start button on the screen
		GUI.DrawTexture(new Rect(0,0,Screen.width,Screen.height),MainMenuBackgroundImage);
		//float buttonyPosition=ButtonYStart;
		
 		//If he button is pressed
		if (GUI.Button(new Rect(Screen.width/dplay, Screen.height*dquit, Screen.width/5.0f, Screen.height/5.0f), "Play"))
		{
			//Load level 1
			Application.LoadLevel("Level1");
		}
		
		//If he button is pressed
		if (GUI.Button(new Rect(Screen.width/dplay + (Screen.width/5.0f) + 10.0f, Screen.height*dquit, Screen.width/5.0f, Screen.height/5.0f), "Exit"))
		{
			//Exit the game
			Application.LoadLevel("Level4");
		}


	}		
	
	//Update is called once per frame
	void Update () 
	{
	}
}



