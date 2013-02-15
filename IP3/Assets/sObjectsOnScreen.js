#pragma strict

var pSpawningObject1: GameObject;
var pSpawningObject2: GameObject;
var pSpawningObject3: GameObject;
var num : int = 0;

var numberOfEnemies : int = 4;
var spawnTime: float = 2.0;
var currentTime: float = 0;

var pauseSpawning: sPauseGame;

function Start()
{
	pauseSpawning = GameObject.Find("oPlayer").GetComponent("sPauseGame");
}

function Update()
{
	if (pauseSpawning.paused == false)
	{
	numberOfEnemies=Random.Range(3,6);
	
	currentTime+=Time.deltaTime;
	
	if(currentTime > spawnTime)
	{
		currentTime = 0;
		for (var i=0; i< numberOfEnemies;i ++)
		{
			
	
		num=Random.Range(1,4);
		
		if (num==1)
		{			
						var clonepSpawningObject1 : GameObject = Instantiate(pSpawningObject1, new Vector3(-21, Random.Range(2.5f, 0.0f),Random.Range(4.5f, -4.0f)), pSpawningObject1.transform.rotation) as GameObject;
		}
		
		if (num==2)
		{
			
			var clonepSpawningObject2 : GameObject = Instantiate(pSpawningObject2, new Vector3(-21, Random.Range(2.5f, 0.0f),Random.Range(4.5f, -4.0f)), pSpawningObject2.transform.rotation) as GameObject;

		}
		
		if (num==3)
		{
						var clonepSpawningObject3 : GameObject = Instantiate(pSpawningObject3, new Vector3(-21, Random.Range(2.5f, 0.0f),Random.Range(4.5f, -4.0f)), pSpawningObject3.transform.rotation) as GameObject;

		}
	}

		
	}
	}
	
	
	
}

/*function Pause ()
{
	if (pauseSpawning==false)
	{
		pauseSpawning==true
	}
	if (pauseSpawning==true)
	{
		pauseSpawning==false
	}
}*/
