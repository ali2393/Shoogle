#pragma strict
//Global Script Variables
var hit : RaycastHit;
var other : Collider;
//Values to go up in work, social and study
var iWorkUp : int;
var iSocialUp : int;
var iStudyUp : int;
//Values to down up in work, social and study
var iWorkDo : int;
var iSocialDo : int;
var iStudyDo : int;

var iWork : int;
var iSocial : int;
var iStudy : int;

function Start () 
{
}

function Update () 
{
	//Checking to see if the mouse is clicked and sends out a ray cast at the point of click
	if (Input.GetButtonDown("Fire1")){
			print("mouse clicked");
			var ray = Camera.main.ScreenPointToRay(Input.mousePosition);
			if (Physics.Raycast(ray, hit, Mathf.Infinity))
			{
				//Registering a hit
				print("hit");
				//If the raycast hits a social tagged object then do the following
				 if (hit.collider.tag=="Social")
				{
					other=hit.collider;
					iSocial=iSocial+iStudyUp;
					iWork=iWork-iWorkDo;
					print("Social = " + iSocial);
					print("Work= " +iWork);
				}
				//If the raycast hits a study tagged object then do the following
				 if (hit.collider.tag=="Study")
				{
					other=hit.collider;
					iStudy=iStudy+iStudyUp;
					iSocial=iSocial-iSocialDo;
					print("Study = " + iStudy);
					print("Social= " +iSocial);
				}
				//If the raycast hits a work tagged object then do the following
				 if (hit.collider.tag=="Work")
				{
					other=hit.collider;
					iWork=iWork+iWorkUp;
					iStudy=iStudy-iStudyDo;
					print("Work = "+ iWork);
					print("Study= " +iStudy);
				}		
				
			}
		}		
}