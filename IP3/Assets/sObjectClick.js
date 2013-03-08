#pragma strict
var hit : RaycastHit;
var other : Collider;

//The values that go up for the work social and study bars
public var iWorkUp : int;
public var iSocialUp : int;
public var iStudyUp : int;

//The values that go down for the work social and study bars
public var iWorkDo : int;
public var iSocialDo : int;
public var iStudyDo : int;

public var iWork : int;
public var iSocial : int;
public var iStudy : int;

function Start () 
{
}

function Update () 
{
	//Checked to see if the mouse has been clicked at a set location 
	if (Input.GetButtonDown("Fire1")){
			print("mouse clicked");
			var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			if (Physics.Raycast(ray, hit, Mathf.Infinity))
			{
				//if the ray cast hits an object with the tag social then change the variable
				print("hit");
				if (hit.collider.tag=="Social")
				{
					other=hit.collider;
					iSocial=iSocial+iStudyUp;
					iWork=iWork-iWorkDo;
					Destroy(other.gameObject);
					print("Social="+iSocial);
				}
				
				//if the ray cast hits an object with the tag study then change the variable
				if (hit.collider.tag=="Study")
				{
					other=hit.collider;
					iStudy=iStudy+iStudyUp;
					iSocial=iSocial-iSocialDo;
					Destroy(other.gameObject);
					print("Study="+iStudy);
				}
				
				//if the ray cast hits an object with the tag study then change the variable
				if (hit.collider.tag=="Work")
				{
					other=hit.collider;
					iWork=iWork+iWorkUp;
					iStudy=iStudy-iStudyDo;
					Destroy(other.gameObject);
					print("Work="+iWork);		
				}		
				
			}
		}		
}