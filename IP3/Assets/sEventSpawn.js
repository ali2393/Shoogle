var num: int=0;
var pSocialEvent: GameObject;
var pStudyEvent: GameObject;
var pWorkEvent: GameObject;

var iCount : int;

var stress : int;

var studyLevel : int;
var socialLevel : int;
var workLevel : int;
var amountOfLevels : int;

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
			
			var clonepSocialEvent : GameObject = Instantiate(pSocialEvent, new Vector3(0,0,0), pSocialEvent.transform.rotation) as GameObject;
		}
		
		if (num==2)
		{
			Destroy (GameObject.FindWithTag("WorkEvent"));
			Destroy (GameObject.FindWithTag("SocialEvent"));
			Destroy (GameObject.FindWithTag("StudyEvent"));
			
			var clonepStudyEvent: GameObject = Instantiate(pStudyEvent, new Vector3(0,0,0), pStudyEvent.transform.rotation) as GameObject;

		}
		
		if (num==3)
		{
			Destroy (GameObject.FindWithTag("WorkEvent"));
			Destroy (GameObject.FindWithTag("SocialEvent"));
			Destroy (GameObject.FindWithTag("StudyEvent"));
			
			var clonepWorkEvent : GameObject = Instantiate(pWorkEvent, new Vector3(0,0,0), pWorkEvent.transform.rotation) as GameObject;

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