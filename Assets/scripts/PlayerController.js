#pragma strict

var rb: Rigidbody;
var speed = 10;
var score = 0;
var scoreText;

function Start() {
	rb = GetComponent.<Rigidbody>();
}

function FixedUpdate() {
	var moveHorizontal = Input.GetAxis('Horizontal');
	var moveVertical = Input.GetAxis('Vertical');

	var vector = new Vector3(moveHorizontal, 0, moveVertical);

	rb.AddForce(vector * speed);
}

function OnTriggerEnter(other: Collider) {
	if (other.gameObject.CompareTag('Pick Up')) {
		other.gameObject.SetActive(false);

		score++;
		Debug.Log(score);
	}
}
