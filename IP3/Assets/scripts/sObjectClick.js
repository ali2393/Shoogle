#pragma strict
var hit : RaycastHit;
var other : Collider;

var stress : sGUI;
var work : sWorkGUI;
var social : sSocialGUI;
var study : sStudyGUI;

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
stress=GameObject.Find("Cube3").GetComponent("sGUI");
work=GameObject.Find("Cube6").GetComponent("sWorkGUI");
social=GameObject.Find("Cube9").GetComponent("sSocialGUI");
study=GameObject.Find("Cube12").GetComponent("sStudyGUI");

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
					if (iWork != 0)
					{
						iWork=iWork-iWorkDo;
					}
					Destroy(other.gameObject);
					print(iSocial);
					social.Social();
					work.NotWork();
				}
				
				 if (hit.collider.tag=="Study")
				{
					other=hit.collider;
					print("Study");
					iStudy=iStudy+iStudyUp;
					if (iSocial != 0)
					{
						iSocial=iSocial-iSocialDo;
					}
					Destroy(other.gameObject);
					study.Study();
					social.NotSocial();
				}
				
				 if (hit.collider.tag=="Work")
				{
					other=hit.collider;
					print("Work");
					iWork=iWork+iWorkUp;
					if (iStudy != 0)
					{
						iStudy=iStudy-iStudyDo;
					}
					Destroy(other.gameObject);
					work.Work();
					study.NotStudy();
				}		
				
			}
		}		
}