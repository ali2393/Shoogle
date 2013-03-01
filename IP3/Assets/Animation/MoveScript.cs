using UnityEngine;
using System.Collections;

public class MoveScript : MonoBehaviour {
	
	public AnimationManager animations;
	
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (Input.GetKeyDown("1"))
		{
			animations.PlayAnimation("WalkRight");
		}
		else if (Input.GetKeyDown("2"))
		{
			animations.PlayAnimation("WalkLeft");
		}
	}
}
