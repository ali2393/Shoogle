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

var pauseClicking: sPauseGame;

function Start () 
{
	pauseClicking = GameObject.Find("oPlayer").GetComponent("sPauseGame");
}

function Update () 
{
	if (pauseClicking.paused == false)
	{
	if (Input.GetButtonDown("Fire1"))
		{
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
					print("Social="+iSocial);
				}
				
				 if (hit.collider.tag=="Study")
				{
					other=hit.collider;
					iStudy=iStudy+iStudyUp;
					iSocial=iSocial-iSocialDo;
					Destroy(other.gameObject);
					print("Study="+iStudy);
				}
				
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
}

/*function Pause ()
{
	if (pauseClicking==false)
	{
		pauseClicking==true
	}
	if (pauseClicking==true)
	{
		pauseClicking==false
	}
}*/