public var camera1:Camera;

static var bMoveBoardAround:boolean=false;
var iCounter:int=0;

static var isSA:boolean=true;
static var isSB:boolean=false;

public var cameraSA_y:float;
public var bIsFlagL9:boolean=false;
public var bIsFlagOffsetCorrection:boolean=false;
public var flag:boolean=false;

public var fStepSC:float=0;
public var fStep:float=0;
public var fSecondsToRotateEnvironment:float=1.0;//temps que ha de trigar l'entorn en donar una volta
public var fStartingEulerZangle:float=0.0;
public var fAmountToMove:float=0.0;
public var fTotalAmountToMove:float=0.0;

function Start(){
	camera1.enabled=true;
	cameraSA_y=camera1.transform.position.y;
	//print("Inicialment, cameraSA_y: "+cameraSA_y+"-----");
	//camera2.enabled=false;
	//fStartingEulerZangle=transform.eulerAngles.z;
}

function Update(){
		
		//print("Monitoring camera1 pos: "+camera1.transform.position);
		
		/*
		//Per tots nivells excepte el 9:
		if(Board.bIsBoardBig && !Board.isLevelL9){
			camera1.orthographicSize=41;
		} else if(!Board.bIsBoardBig && !Board.isLevelL9){
			camera1.orthographicSize=26;
		} 
		
		//primer entra aqui:
		if(Board.isLevelL9 && !bIsFlagL9){
			camera1.orthographicSize=35;
			camera1.transform.position.y=cameraSA_y-7;
			bIsFlagOffsetCorrection=false;
			bIsFlagL9=true;
		}
		
		//Quan vaig a un altre nivell després del 9:
		if(bIsFlagL9 && !Board.isLevelL9 && !bIsFlagOffsetCorrection){
			camera1.transform.position.y=cameraSA_y;
			bIsFlagOffsetCorrection=true;
			bIsFlagL9=false;
		} 
		*/
	
	if(Board.bIsBoardBig){
		if(Board.isLevelL15 || Board.isLevelL6 || Board.isLevelL15 || Board.isLevelL16 || Board.isLevelL17 || Board.isLevelL18 || Board.isLevelL19 || Board.isLevelL20){
			camera1.orthographicSize=35;
		} else {
			camera1.orthographicSize=30;
		}
	} else if(!Board.bIsBoardBig && !Board.isLevelL9){
		camera1.orthographicSize=26;
	}

	//Tot això perquè el L9 es vegi OK (buf!): 
	if(Board.isLevelL9 && isSA && !flag){
		camera1.transform.position=Vector3(-33.0,17.0,35.4);
		if(bMoveBoardAround){
			flag=true;
		}
	} else if(!Board.isLevelL9 && isSA  && !flag){
		camera1.transform.position=Vector3(-33.0,24.0,35.4);
				if(bMoveBoardAround){
			flag=true;
		}
	} else if(Board.isLevelL9 && isSB && !flag){
		camera1.transform.position=Vector3(37.2,-55.6,-39.7);
				if(bMoveBoardAround){
			flag=true;
		}
	} else if(!Board.isLevelL9 && isSB && !flag){
		camera1.transform.position=Vector3(41.9,-53.3,-44.4);
				if(bMoveBoardAround){
			flag=true;
		}
	}
	
	//fAmountToMove=180 * Time.fixedDeltaTime;//sembla que aixi va be en comptes de Time.deltaTime. No acabo de veure-ho...
	fAmountToMove=120 * Time.fixedDeltaTime;//sembla que aixi va be en comptes de Time.deltaTime. No acabo de veure-ho...
	//print("fAmountToMove: "+fAmountToMove);
	
	if(bMoveBoardAround && fTotalAmountToMove < 179){
		
		camera1.transform.RotateAround(GameObject.Find("BoardCenter").transform.position,Vector3(1,2,-1), fAmountToMove);
		fTotalAmountToMove+=fAmountToMove;
	    
		/*if(iCounter<59){
		
			//camera1.transform.RotateAround(GameObject.Find("BoardCenter").transform.position,Vector3(1,1.5,-1), 3);
			camera1.transform.RotateAround(GameObject.Find("BoardCenter").transform.position,Vector3(1,2,-1), 3);
			//fStepSC=60.0*Time.deltaTime/fSecondsToRotateEnvironment;
			//iCounter=iCounter+fStepSC;
			//print("fStepSC: "+fStepSC);
			iCounter++;
		
		} else if(iCounter>59){
		
			bMoveBoardAround=false;
			iCounter=0;
			flag=false;
			if(isSA){
				isSA=false;
				isSB=true;
			} else if(isSB){
				isSA=true;
				isSB=false;
			}
		}*/
		
	} else if(fTotalAmountToMove >= 179){
	    fTotalAmountToMove=0;
		fAmountToMove=0;
		bMoveBoardAround=false;
		flag=false;
		if(isSA){
			isSA=false;
			isSB=true;
		} else if(isSB){
			isSA=true;
			isSB=false;
		}
	}
	
	
	//Mode test:
	/*
	if(Input.GetKeyDown(KeyCode.S)){
		if(bMoveBoardAround==false){
			bMoveBoardAround=true;
		}
	}
	*/
	
}