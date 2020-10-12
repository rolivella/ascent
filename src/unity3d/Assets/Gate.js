static var sL_Gate:String;
static var sP_Gate:String;
static var sW_Gate:String;
static var sS_Gate:String;
static var sD_Gate:String;

public var fGateHeight:float;//altura de la gate
public var fGateHeightOffset:float;//hi sumo un petit offset per a que no es vegi la gate quan estic a SB...

static var goGate;

function Awake () {
	goGate=GameObject.Find("Gate");//El poso aquí pq a vegades peta. 
}

function Start () {
	//goGate=GameObject.Find("Gate");
	fGateHeightOffset=0.1;
	fGateHeight=goGate.transform.localScale.y/2+fGateHeightOffset;
	moveGateTo(goGate,sP_Gate,sW_Gate,sS_Gate,fGateHeight);
}

function Update(){
	moveGateTo(goGate,sP_Gate,sW_Gate,sS_Gate,fGateHeight);
}

function moveGateTo(goGate,pto,wto,sto,fGateHeight){
    
	var v3Gate=goGate.transform.position;//Respecte Space.World (a vegades peta????????????????)
	var sPTo=pto.ToString();
	var sWTo=wto.ToString();
	var sSTo=sto.ToString();
	
	//1- Traslació del centre de l'Gate: 
	if(sSTo=="SA"){
		goGate.transform.Translate(GameObject.Find("/Board/"+sPTo+"/"+sWTo+"SA").transform.position-v3Gate,Space.World);    
	} else if(sSTo=="SB"){
		goGate.transform.Translate(GameObject.Find("/Board/"+sPTo+"/"+sWTo+"SA/"+sWTo+"SB").transform.position-v3Gate,Space.World);
	}

	if(sD_Gate=="DN"){
		if(sW_Gate=="W1"){
			if(sS_Gate=="SA"){
				goGate.transform.eulerAngles=Vector3(0,270,0);
			} else if(sS_Gate=="SB"){
				goGate.transform.eulerAngles=Vector3(0,180,180);			
			}
		} else if(sW_Gate=="W2"){
			if(sS_Gate=="SA"){
				goGate.transform.eulerAngles=Vector3(90,270,0);
			} else if(sS_Gate=="SB"){
				goGate.transform.eulerAngles=Vector3(90,270,180);			
			}
		} else if(sW_Gate=="W3"){
			if(sS_Gate=="SA"){
				goGate.transform.eulerAngles=Vector3(90,270,270);
			} else if(sS_Gate=="SB"){
				goGate.transform.eulerAngles=Vector3(90,270,90);			
			}
		} 		
	} else if(sD_Gate=="DE"){
		if(sW_Gate=="W1"){
			if(sS_Gate=="SA"){
				goGate.transform.eulerAngles=Vector3(0,0,0);
			} else if(sS_Gate=="SB"){
				goGate.transform.eulerAngles=Vector3(0,270,180);			
			}
		} else if(sW_Gate=="W2"){
			if(sS_Gate=="SA"){
				goGate.transform.eulerAngles=Vector3(0,0,90);
			} else if(sS_Gate=="SB"){
				goGate.transform.eulerAngles=Vector3(0,0,270);			
			}
		} else if(sW_Gate=="W3"){
			if(sS_Gate=="SA"){
				goGate.transform.eulerAngles=Vector3(0,90,90);
			} else if(sS_Gate=="SB"){
				goGate.transform.eulerAngles=Vector3(0,90,270);			
			}
		} 
	} else if(sD_Gate=="DS"){
		if(sW_Gate=="W1"){
			if(sS_Gate=="SA"){
				goGate.transform.eulerAngles=Vector3(0,90,0);
			} else if(sS_Gate=="SB"){
				goGate.transform.eulerAngles=Vector3(0,0,180);			
			}
		} else if(sW_Gate=="W2"){
			if(sS_Gate=="SA"){
				goGate.transform.eulerAngles=Vector3(270,90,0);
			} else if(sS_Gate=="SB"){
				goGate.transform.eulerAngles=Vector3(270,90,180);			
			}
		} else if(sW_Gate=="W3"){
			if(sS_Gate=="SA"){
				goGate.transform.eulerAngles=Vector3(270,180,0);
			} else if(sS_Gate=="SB"){
				goGate.transform.eulerAngles=Vector3(270,180,180);			
			}
		} 
	} else if(sD_Gate=="DO"){
		if(sW_Gate=="W1"){
			if(sS_Gate=="SA"){
				goGate.transform.eulerAngles=Vector3(0,180,0);
			} else if(sS_Gate=="SB"){
				goGate.transform.eulerAngles=Vector3(0,90,180);			
			}		
		} else if(sW_Gate=="W2"){
			if(sS_Gate=="SA"){
				goGate.transform.eulerAngles=Vector3(0,180,270);
			} else if(sS_Gate=="SB"){
				goGate.transform.eulerAngles=Vector3(0,180,90);			
			}
		} else if(sW_Gate=="W3"){
			if(sS_Gate=="SA"){
				goGate.transform.eulerAngles=Vector3(0,270,270);
			} else if(sS_Gate=="SB"){
				goGate.transform.eulerAngles=Vector3(0,270,90);			
			}
		} 
	}
	
	/*
	//3- Traslació vertical de l'Gate per posicionar-se just a sobre de la W: 
	if(sWTo=="W1" && sSTo=="SA"){
		goGate.transform.Translate(0,fGateHeight,0,Space.World);
	} else if(sWTo=="W1" && sSTo=="SB"){
		goGate.transform.Translate(0,-fGateHeight,0,Space.World);
	} else if(sWTo=="W2" && sSTo=="SA"){
		goGate.transform.Translate(-fGateHeight,0,0,Space.World);
	} else if(sWTo=="W2" && sSTo=="SB"){
		goGate.transform.Translate(fGateHeight,0,0,Space.World);
	} else if(sWTo=="W3" && sSTo=="SA"){
		goGate.transform.Translate(0,0,fGateHeight,Space.World);
	} else if(sWTo=="W3" && sSTo=="SB"){
		goGate.transform.Translate(0,0,-fGateHeight,Space.World);
	}
	*/
	
}
