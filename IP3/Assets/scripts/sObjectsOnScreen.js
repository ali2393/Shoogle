#pragma strict

var pSpawningObject1: GameObject;
var pSpawningObject2: GameObject;
var pSpawningObject3: GameObject;
var num : int = 0;

var numberOfEnemies : int = 4;
var spawnTime: float = 2.0;
var currentTime: float = 0;

var SocialLevels:sSocialGUI;
var WorkLevels:sWorkGUI;
var StudyLevels:sStudyGUI;
var StressLevels:sGUI;


var eventSpawn:sEventSpawn;
var recentlyClicked:sObjectClick;

var gettingstress : int;
function Start()
{
}

function Update()
{
	
	if (WorkLevels.work<=0)
	{
		WorkLevels.work=0;
	}
	
	if (SocialLevels.social<=0)
	{
		SocialLevels.social=0;
	}
	
	if (StudyLevels.study<=0)
	{
		StudyLevels.study=0;
	}
	
	if (WorkLevels.work>=10)
	{
		WorkLevels.work=10;
	}
	
	if (SocialLevels.social>=10)
	{
		SocialLevels.social=10;
	}
	
	if (StudyLevels.study>=10)
	{
		StudyLevels.study=10;
	}
	
	if(StressLevels.stress==10)
	{
		Application.LoadLevel("endScene");
	}
	
	//generate a random number
	numberOfEnemies=Random.Range(3,6);
	
	//Respect to time
	currentTime+=Time.deltaTime;
	
	// spawn after set amount of time
	if(currentTime > spawnTime)
	{
		
		if (recentlyClicked.recentlyClicked == 0 && gettingstress==0)
		{
			StressLevels.stress --;
			//SocialLevels.social --;
			//StudyLevels.study --;
			//WorkLevels.work --;
		}
		
		recentlyClicked.recentlyClicked = 0;
		
		if(SocialLevels.social < 2 || WorkLevels.work < 2 || StudyLevels.study < 2)
		{
			gettingstress=1;
			StressLevels.stress ++;
		}
		
		if(SocialLevels.social > 2 && WorkLevels.work > 2 && StudyLevels.study > 2)
		{
			gettingstress=0;
		}
		
		//reset time
		currentTime = 0;
		for (var i=0; i< numberOfEnemies;i ++)
		{			
		// generate another random number
		num=Random.Range(1,4);
		
		// if number = 1 then the corect obejct which is allocated to pSpawningOject1
		if (num==1)
		{			
			var clonepSpawningObject1 : GameObject = Instantiate(pSpawningObject1, new Vector3(-21, Random.Range(2.5f, 0.0f),Random.Range(4.5f, -4.0f)), pSpawningObject1.transform.rotation) as GameObject;
		}
		
		// if number = 1 then the corect obejct which is allocated to pSpawningOject1
		if (num==2)
		{
			
			var clonepSpawningObject2 : GameObject = Instantiate(pSpawningObject2, new Vector3(-21, Random.Range(2.5f, 0.0f),Random.Range(4.5f, -4.0f)), pSpawningObject2.transform.rotation) as GameObject;

		}
		
		// if number = 1 then the corect obejct which is allocated to pSpawningOject1
		if (num==3)
		{
			var clonepSpawningObject3 : GameObject = Instantiate(pSpawningObject3, new Vector3(-21, Random.Range(2.5f, 0.0f),Random.Range(4.5f, -4.0f)), pSpawningObject3.transform.rotation) as GameObject;

		}
	}

		
	}
	
	
	
}
