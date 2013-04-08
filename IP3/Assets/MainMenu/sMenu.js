#pragma strict
var hit : RaycastHit;

function Start () {

}

function Update () {
 
var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
if (Input.GetButtonDown("Fire1"))
{
 
	if (Physics.Raycast(ray, hit, Mathf.Infinity))
	{
		if (hit.collider.tag=="Game")
		{	
			Application.LoadLevel ("Level1");
		}
		
		if (hit.collider.tag=="How")
		{	
			Application.LoadLevel ("Level1");
		}
		
		if (hit.collider.tag=="Exit")
		{	
			Application.LoadLevel ("Level1");
		}
		
		if (hit.collider.tag=="Credits")
		{	
			Application.LoadLevel ("Level1");
		}
		
		if (hit.collider.tag=="Tips")
		{	
			Application.LoadLevel ("Level1");
		}
				
 
	}
}
}
