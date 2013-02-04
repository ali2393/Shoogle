#pragma strict
var hit : RaycastHit;
var other : Collider;
function Start () {

}

function Update () 
{
	if (Input.GetButtonDown("Fire1")){
			print("mouse clicked");
			var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			if (Physics.Raycast(ray, hit, Mathf.Infinity))
			{
				print("hit");
				 if (hit.collider.tag=="Social")
				{
					other=hit.collider;
					print("Social");
					Destroy(other.gameObject);
				}
				
				 if (hit.collider.tag=="Study")
				{
					other=hit.collider;
					print("Study");
					Destroy(other.gameObject);
				}
				
				 if (hit.collider.tag=="Work")
				{
					other=hit.collider;
					print("Work");
					Destroy(other.gameObject);
				}		
				
			}
		}		
}