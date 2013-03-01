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
			

			//pEvent.child.tag="StudyEvent";
			var clonepSocialEvent : GameObject = Instantiate(pStudyEvent, new Vector3(-10.65664,0.164176,-10.5864), pStudyEvent.transform.rotation) as GameObject;
		}
		
		if (num==2)
		{
			Destroy (GameObject.FindWithTag("WorkEvent"));
			Destroy (GameObject.FindWithTag("SocialEvent"));
			Destroy (GameObject.FindWithTag("StudyEvent"));
			

			//pEvent.child.tag="StudyEvent";
			var clonepStudyEvent : GameObject = Instantiate(pStudyEvent, new Vector3(-10.65664,0.164176,-10.5864), pStudyEvent.transform.rotation) as GameObject;
		}
		
		if (num==3)
		{
			Destroy (GameObject.FindWithTag("WorkEvent"));
			Destroy (GameObject.FindWithTag("SocialEvent"));
			Destroy (GameObject.FindWithTag("StudyEvent"));
			
			//pEvent.child.tag="StudyEvent";
			var clonepWorkEvent : GameObject = Instantiate(pStudyEvent, new Vector3(-10.65664,0.164176,-10.5864), pStudyEvent.transform.rotation) as GameObject;
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