#pragma strict
var hit : RaycastHit;

function Start () {

}

function Update () {
 
var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
if (Input.GetButtonUp("Fire1"))
{
 
	if (Physics.Raycast(ray, hit, Mathf.Infinity))
	{
		if (hit.collider.tag=="Game")
		{	
			Application.LoadLevel ("Level1");
		}
		
		if (hit.collider.tag=="How")
		{	
			Application.LoadLevel ("how");
		}
		
		if (hit.collider.tag=="Exit")
		{	
			 Application.Quit();
		}
		
		if (hit.collider.tag=="Credits")
		{	
			Application.OpenURL("http://www.hyparc.net/p/crunch-credits.html");
		}
		
		if (hit.collider.tag=="Tips")
		{	
			Application.OpenURL("http://www.nhs.uk/Conditions/stress-anxiety-depression/Pages/understanding-stress.aspx");
		}
		
		if (hit.collider.tag=="Back")
		{	
			Application.LoadLevel ("MainMenu");
		}
			
				
 
	}
}
}
