#pragma strict
var paused : boolean ;



function Start () 
{
	paused = false;
	//GameObject.Find("oPlayer").GetComponent("sPauseGame")
	//GameObject.Find("oPlayer").GetComponent("sPauseGame")
	//GameObject.Find("oPlayer").GetComponent("sPauseGame")
	//GameObject.Find("oPlayer").GetComponent("sPauseGame")
}

function Update () 
{
	if (Input.GetKeyDown(KeyCode.Escape))	
	{//GameObject.Find("oPlayer").GetComponent("sPauseGame")
		
        print ("Escape was pressed");
	}
	   
	if(Input.GetKeyDown(KeyCode.Escape))	 
	{   
		if (paused == false)
		{     
			paused=true;   
			print ("Game Is paused");
		}
	}
	
	if (Input.GetKeyDown("a"))
	{	
	if (paused == true)
		{
			paused=false;
			print ("game is Unpaused");
		}
	}
	
}