function OnTriggerEnter(oPlayer:Collider)
{
	
	
	if(oPlayer.tag=="Player")
	{
		//GetPrefabParent (GameObject.this : Object) : Object
		Destroy(gameObject);
	}
}