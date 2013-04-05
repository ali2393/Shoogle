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
		if(GetComponent("sObjectClick").iWork<7)
		{
			stress = stress + (7 - GetComponent("sObjectClick").iWork);
		}
	}
	
	if(oEnd.tag=="SocialEvent")
	{
		if(GetComponent("sObjectClick").iSocial<7)
		{
			stress = stress + (7 - GetComponent("sObjectClick").iSocial);
		}
	}
	
	if(oEnd.tag=="StudyEvent")
	{
		if(GetComponent("sObjectClick").iStudy<7)
		{
			stress = stress + (7 - GetComponent("sObjectClick").iStudy);
		}
	}
	
	
	//When you hit the end of an event (the wall) then do the following code
	if(oEnd.tag==("WorkEvent")||("SocialEvent")||("StudyEvent"))
	{
		if (stress==10)
		{
			Application.Loadlevel("mainMenu");
		}
		
		// Generate a random number
		num=Random.Range(1,4);
		
		//If the random number is 1 then spawn a clone of the Social Event
		if (num==1)
		{			
			Destroy (GameObject.FindWithTag("WorkEvent"));
			Destroy (GameObject.FindWithTag("SocialEvent"));
			Destroy (GameObject.FindWithTag("StudyEvent"));
			
			//Spawning Code
			//pEvent.child.tag="StudyEvent";
			var clonepSocialEvent : GameObject = Instantiate(pStudyEvent, new Vector3(-9.908167,0.188241,0.09814334), pStudyEvent.transform.rotation) as GameObject;
		}
		
		//If the random number is 2 then spawn a clone of the Study Event
		if (num==2)
		{
			Destroy (GameObject.FindWithTag("WorkEvent"));
			Destroy (GameObject.FindWithTag("SocialEvent"));
			Destroy (GameObject.FindWithTag("StudyEvent"));
			
			//Spawning Code
			//pEvent.child.tag="StudyEvent";
			var clonepStudyEvent : GameObject = Instantiate(pSocialEvent, new Vector3(-9.908167,0.188241,0.09814334), pStudyEvent.transform.rotation) as GameObject;
		}
		
		//If the random number is 3 then spawn a clone of the Social Event
		if (num==3)
		{
			Destroy (GameObject.FindWithTag("WorkEvent"));
			Destroy (GameObject.FindWithTag("SocialEvent"));
			Destroy (GameObject.FindWithTag("StudyEvent"));
			
			//Spawning Code	
			var clonepWorkEvent : GameObject = Instantiate(pWorkEvent, new Vector3(-9.908167,0.188241,0.09814334), pStudyEvent.transform.rotation) as GameObject;
		}
		
		iCount++;
	}
}

function Update()
{
	//counting the number of levels to be placed
	if (iCount==amountOfLevels)
	{
		//after set amount of levels are done then go back o the main menu
		Application.LoadLevel("mainMenu");

	}
}

function StressIncrease()
{
	stress ++;
}