var num: int=0;
var pSocialEvent: GameObject;
var pStudyEvent: GameObject;
var pWorkEvent: GameObject;

var WorkBox : GameObject;
var SocialBox : GameObject;
var StudyBox : GameObject;

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

var SocialLevels:sSocialGUI;
var WorkLevels:sWorkGUI;
var StudyLevels:sStudyGUI;
var StressLevels:sGUI;

var workTag : int = 0;
var socialTag : int = 0;
var studyTag : int = 0;

function Start()
{
	studyTag = 1;
}

function OnTriggerEnter(oEnd:Collider)
{
	
	if(oEnd.tag=="WorkEvent")
	{
		if(WorkLevels.work<7)
		{
			StressLevels.stress = StressLevels.stress + (6 - WorkLevels.work);
		}
	}
	
	if(oEnd.tag=="SocialEvent")
	{
		if(SocialLevels.social<7)
		{
			StressLevels.stress = StressLevels.stress + (6 - SocialLevels.social);
		}
	}
	
	if(oEnd.tag=="StudyEvent")
	{
		if(StudyLevels.study<7)
		{
			StressLevels.stress = StressLevels.stress + (6 - StudyLevels.study);
		}
	}
	
	
	//When you hit the end of an event (the wall) then do the following code
	if(oEnd.tag==("WorkEvent")||("SocialEvent")||("StudyEvent"))
	{
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
			
			workTag = 0;
			socialTag = 0;
			studyTag = 1;
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
			
			workTag = 0;
			socialTag = 1;
			studyTag = 0;			
		}
		
		//If the random number is 3 then spawn a clone of the Social Event
		if (num==3)
		{
			Destroy (GameObject.FindWithTag("WorkEvent"));
			Destroy (GameObject.FindWithTag("SocialEvent"));
			Destroy (GameObject.FindWithTag("StudyEvent"));
			
			//Spawning Code	
			var clonepWorkEvent : GameObject = Instantiate(pWorkEvent, new Vector3(-9.908167,0.188241,0.09814334), pStudyEvent.transform.rotation) as GameObject;
			workTag = 1;
			socialTag = 0;
			studyTag = 0;			
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
	
	if (workTag == 0)
	{
		iTween.MoveTo(WorkBox,{"y":-10});
	}	
	if (workTag == 1)
	{
		iTween.MoveTo(WorkBox,{"y":0.9});
	}
	
	if (socialTag == 0)
	{
		iTween.MoveTo(SocialBox,{"y":-10});
	}	
	if (socialTag == 1)
	{
		iTween.MoveTo(SocialBox,{"y":0.9});
	}
	
	if (studyTag == 0)
	{
		iTween.MoveTo(StudyBox,{"y":-10});
	}	
	if (studyTag == 1)
	{
		iTween.MoveTo(StudyBox,{"y":0.9});
	}
}