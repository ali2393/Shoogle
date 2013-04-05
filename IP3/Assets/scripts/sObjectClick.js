#pragma strict
var hit : RaycastHit;
var other : Collider;

var stress : sGUI;
var work : sWorkGUI;
var social : sSocialGUI;
var study : sStudyGUI;

var click : GameObject;

public var iWorkUp : int;
public var iSocialUp : int;
public var iStudyUp : int;

public var iWorkDo : int;
public var iSocialDo : int;
public var iStudyDo : int;

public var iWork : int;
public var iSocial : int;
public var iStudy : int;


var workcount : int;
var studycount : int;
var socialcount: int;

var recentlyClicked : int;

function Start () {
stress=GameObject.Find("Stress3").GetComponent("sGUI");
work=GameObject.Find("Work1").GetComponent("sWorkGUI");
social=GameObject.Find("Social1").GetComponent("sSocialGUI");
study=GameObject.Find("Study1").GetComponent("sStudyGUI");

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
					recentlyClicked = 1;
					other=hit.collider;
					Destroy(other.gameObject);
					social.Social();
					work.NotWork();
					click.audio.Play();
					socialcount++;
				}
				
				if (hit.collider.tag=="Study")
				{
					recentlyClicked = 1;
					other=hit.collider;
					Destroy(other.gameObject);
					study.Study();
					social.NotSocial();
					click.audio.Play();
					studycount++;
				}
				
				if (hit.collider.tag=="Work")
				{
					recentlyClicked = 1;
					other=hit.collider;
					Destroy(other.gameObject);
					work.Work();
					study.NotStudy();
					click.audio.Play();
					workcount++;
				}		
				
			}
			
			
		}		
}