public var SplashTime:int=5;
public var SceneName:String;

function Update () {

	if(Time.time > SplashTime){
		Application.LoadLevel(SceneName);
	}

}

function OnMouseDown () {
    Application.LoadLevel (SceneName);
}