#pragma strict

var pSpawningObject: GameObject;
var numberOfEnemies = 4;
var spawnTime: float = 2.0;
var currentTime: float = 0;

function Start()
{
}

function Update()
{
	currentTime+=Time.deltaTime;
	
	if(currentTime > spawnTime)
	{
		currentTime = 0;
		for (var i=0; i< numberOfEnemies;i ++)
		{
			var clonepSpawningObject : GameObject = Instantiate(pSpawningObject, new Vector3(-21, Random.Range(2.5f, 0.0f),Random.Range(4.5f, -4.0f)), pSpawningObject.transform.rotation) as GameObject;
		}
	}
	
	
	
}
