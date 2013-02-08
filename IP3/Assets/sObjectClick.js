#pragma strict
var hit : RaycastHit;
var other : Collider;

public var iWorkUp : int;
public var iSocialUp : int;
public var iStudyUp : int;

public var iWorkDo : int;
public var iSocialDo : int;
public var iStudyDo : int;

public var iWork : int;
public var iSocial : int;
public var iStudy : int;

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
					Destroy(other.gameObject);
					print(iSocial);
				}
				
				 if (hit.collider.tag=="Study")
				{
					other=hit.collider;
					print("Study");
					iStudy=iStudy+iStudyUp;
					iSocial=iSocial-iSocialDo;
					Destroy(other.gameObject);
				}
				
				 if (hit.collider.tag=="Work")
				{
					other=hit.collider;
					print("Work");
					iWork=iWork+iWorkUp;
					iStudy=iStudy-iStudyDo;
					Destroy(other.gameObject);
				}		
				
			}
		}		
}