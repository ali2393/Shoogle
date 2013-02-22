var num: int=0;
var pSocialEvent: GameObject;
var pStudyEvent: GameObject;
var pWorkEvent: GameObject;

var pEvent: GameObject;

var iCount : int;

var stress : int;

var studyLevel : int;
var socialLevel : int;
var workLevel : int;
var amountOfLevels : int;

var study: Material;
var social: Material;
var work: Material;

function OnTriggerEnter(oEnd:Collider)
{
	
	if(oEnd.tag=="WorkEvent")
	{
		//GetComponent("sObjectClick");
		
		if(GetComponent("sObjectClick").iWork<=5)
		{
			stress++;
		}
	}
	
	if(oEnd.tag==("WorkEvent")||("SocialEvent")||("StudyEvent"))
	{
		num=Random.Range(1,4);
		
		if (num==1)
		{			
			Destroy (GameObject.FindWithTag("WorkEvent"));
			Destroy (GameObject.FindWithTag("SocialEvent"));
			Destroy (GameObject.FindWithTag("StudyEvent"));
			
			pEvent.tag="StudyEvent";
			pEvent.renderer.material=study;
			//pEvent.child.tag="StudyEvent";
			var clonepSocialEvent : GameObject = Instantiate(pEvent, new Vector3(0,0,0), pEvent.transform.rotation) as GameObject;
		}
		
		if (num==2)
		{
			Destroy (GameObject.FindWithTag("WorkEvent"));
			Destroy (GameObject.FindWithTag("SocialEvent"));
			Destroy (GameObject.FindWithTag("StudyEvent"));
			
			pEvent.tag="SocialEvent";
			pEvent.renderer.material=social;
			//pEvent.child.tag="StudyEvent";
			var clonepStudyEvent : GameObject = Instantiate(pEvent, new Vector3(0,0,0), pEvent.transform.rotation) as GameObject;
		}
		
		if (num==3)
		{
			Destroy (GameObject.FindWithTag("WorkEvent"));
			Destroy (GameObject.FindWithTag("SocialEvent"));
			Destroy (GameObject.FindWithTag("StudyEvent"));
			
			pEvent.tag="WorkEvent";
			pEvent.renderer.material=work;
			//pEvent.child.tag="StudyEvent";
			var clonepWorkEvent : GameObject = Instantiate(pEvent, new Vector3(0,0,0), pEvent.transform.rotation) as GameObject;
		}
		
		iCount++;
	}
}

function Update()
{
	if (iCount==amountOfLevels)
	{
		Application.LoadLevel("mainMenu");

	}
}