#pragma strict
var hit : RaycastHit;
var other : Collider;

 var iWorkUp : int;
 var iSocialUp : int;
 var iStudyUp : int;

 var iWorkDo : int;
 var iSocialDo : int;
 var iStudyDo : int;

 var iWork : int;
 var iSocial : int;
 var iStudy : int;

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
					iSocial=iSocial+iStudyUp;
					iWork=iWork-iWorkDo;
					print("Social = " + iSocial);
					print("Work= " +iWork);
				}
				
				 if (hit.collider.tag=="Study")
				{
					other=hit.collider;
					iStudy=iStudy+iStudyUp;
					iSocial=iSocial-iSocialDo;
					print("Study = " + iStudy);
					print("Social= " +iSocial);
				}
				
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