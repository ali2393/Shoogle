var num: int=0;
var pSpawningObject1: GameObject;
var pSpawningObject2: GameObject;
var pSpawningObject3: GameObject;

function OnTriggerEnter(oEnd:Collider)
{
	
	if(oEnd.tag=="NextEvent")
	{
		num=Random.Range(1,4);
		
		if (num==1)
		{			
			Destroy (GameObject.FindWithTag("NextEvent"));
			var clonepSpawningObject1 : GameObject = Instantiate(pSpawningObject1, new Vector3(0,0,0), pSpawningObject1.transform.rotation) as GameObject;
		}
		
		if (num==2)
		{
			Destroy (GameObject.FindWithTag("NextEvent"));
			var clonepSpawningObject2 : GameObject = Instantiate(pSpawningObject2, new Vector3(0,0,0), pSpawningObject2.transform.rotation) as GameObject;

		}
		
		if (num==3)
		{
			Destroy (GameObject.FindWithTag("NextEvent"));
			var clonepSpawningObject3 : GameObject = Instantiate(pSpawningObject3, new Vector3(0,0,0), pSpawningObject3.transform.rotation) as GameObject;

		}
	}
}