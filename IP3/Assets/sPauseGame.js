#pragma strict
var paused : boolean ;



function Start () 
{
	paused = false;
}

function Update () 
{
	if (Input.GetKeyDown(KeyCode.Escape))	
	{
		
        print ("Escape was pressed");
	}
	   
	if(Input.GetKeyDown(KeyCode.Escape))	 
	{   
		if (paused == false)
		{     
			paused=true;   
			print ("Game Is paused");
			GameObject.Find("oPause").renderer.enabled = true;
			GameObject.Find("oExit").renderer.enabled = true;
			GameObject.Find("oPause").layer = 0;
		}
		
		else if (paused == true)
		{     
			paused=false;   
			print ("Game Is paused");
			GameObject.Find("oPause").renderer.enabled =false;
			GameObject.Find("oExit").renderer.enabled =false;
			GameObject.Find("oPause").layer = 2;
		}
		
	}
	
	/*if (Input.GetKeyDown("a"))
	{	
	if (paused == true)
		{
			paused=false;
			print ("game is Unpaused");
		}
	}
	*/
	
}


function pause()
{	
	/*if (paused == false)
		{     
			paused=true;   
			print ("Game Is paused");
			GameObject.Find("oPause").renderer.enabled = true;
			GameObject.Find("oExit").renderer.enabled = true;
		}*/
		
		if (paused == true)
		{    
			paused=false;   
			print ("Game Is paused");
			GameObject.Find("oPause").renderer.enabled =false;
			GameObject.Find("oExit").renderer.enabled =false;
			GameObject.Find("oPause").layer = 2;

		}
}