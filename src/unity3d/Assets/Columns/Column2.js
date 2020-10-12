static var sL_Column2:String;
static var sP_Column2:String;
static var sW_Column2:String;
static var sS_Column2:String;
static var sD_Column2:String;

public var fColumn2Height:float;//altura de la gate
public var fColumn2HeightOffset:float;//hi sumo un petit offset per a que no es vegi la gate quan estic a SB...

static var goColumn2;
var v3_traslacio:Vector3;

public var offsetX:float=0;
public var offsetY:float=0;
public var offsetZ:float=0;

function Awake () {
	goColumn2=GameObject.Find("Column2");//El poso aquí pq a vegades peta. 
}

function Start () {
	if(Board.isRECOLECTlevel){
		fColumn2HeightOffset=0.1;
		fColumn2Height=goColumn2.transform.localScale.y/2+fColumn2HeightOffset;
		moveColumn2To(goColumn2,sP_Column2,sW_Column2,sS_Column2,fColumn2Height);
	}
}

function Update(){
	if(Board.isRECOLECTlevel){
		moveColumn2To(goColumn2,sP_Column2,sW_Column2,sS_Column2,fColumn2Height);
	}
	/*
	if (Input.GetKeyDown (KeyCode.G)){
		offsetX=offsetX+5;
		print("offsetX: "+offsetX);
	}
	
	if (Input.GetKeyDown (KeyCode.H)){
		offsetY=offsetY+5;
		print("offsetY: "+offsetY);
	}
	
	if (Input.GetKeyDown (KeyCode.J)){
		offsetZ=offsetZ+5;
		print("offsetZ: "+offsetZ);
	}
	
	if (Input.GetKeyDown (KeyCode.B)){
		offsetX=offsetX-5;
		print("offsetX: "+offsetX);
	}
	
	if (Input.GetKeyDown (KeyCode.N)){
		offsetY=offsetY-5;
		print("offsetY: "+offsetY);
	}
	
	if (Input.GetKeyDown (KeyCode.M)){
		offsetZ=offsetZ-5;
		print("offsetZ: "+offsetZ);
	}
	*/
}

function moveColumn2To(goColumn2,sPTo,sWTo,sSTo,fColumn2Height){
    
	v3Column2=goColumn2.transform.position;//Respecte Space.World (a vegades peta????????????????)
	sPTo=sPTo.ToString();
	sWTo=sWTo.ToString();
	sSTo=sSTo.ToString();
	
	//1- Traslació del GO: 
	if(sSTo=="SA"){
		goColumn2.transform.Translate(GameObject.Find("/Board/"+sPTo+"/"+sWTo+"SA").transform.position-v3Column2,Space.World);    
	} else if(sSTo=="SB"){
		goColumn2.transform.Translate(GameObject.Find("/Board/"+sPTo+"/"+sWTo+"SA/"+sWTo+"SB").transform.position-v3Column2,Space.World);
	}

	//Rotació del GO
	if(sD_Column2=="DN"){
		if(sW_Column2=="W1"){
			if(sS_Column2=="SB"){
				goColumn2.transform.eulerAngles=Vector3(0+45,180-115,0-65);
			} else if(sS_Column2=="SA"){
				goColumn2.transform.eulerAngles=Vector3(0+220,90+125,180+105);			
			}
		} else if(sW_Column2=="W2"){
			if(sS_Column2=="SB"){
				goColumn2.transform.eulerAngles=Vector3(0+40,180-135,270-85);
			} else if(sS_Column2=="SA"){
				goColumn2.transform.eulerAngles=Vector3(0-45,180+45,90-90);			
			}
		} else if(sW_Column2=="W3"){
			if(sS_Column2=="SB"){
				goColumn2.transform.eulerAngles=Vector3(0+140,270+120,270+70);
			} else if(sS_Column2=="SA"){
				goColumn2.transform.eulerAngles=Vector3(0-45,270+120,90-75);		
			}
		} 		
	} else if(sD_Column2=="DE"){
		if(sW_Column2=="W1"){
			if(sS_Column2=="SB"){
				goColumn2.transform.eulerAngles=Vector3(0+45,180-115,0-65);
			} else if(sS_Column2=="SA"){
				goColumn2.transform.eulerAngles=Vector3(0+220,90+125,180+105);		
			}
		} else if(sW_Column2=="W2"){
			if(sS_Column2=="SB"){
				goColumn2.transform.eulerAngles=Vector3(0+40,180-135,270-85);
			} else if(sS_Column2=="SA"){
				goColumn2.transform.eulerAngles=Vector3(0-45,180+45,90-90);				
			}
		} else if(sW_Column2=="W3"){
			if(sS_Column2=="SB"){
				goColumn2.transform.eulerAngles=Vector3(0+140,270+120,270+70);
			} else if(sS_Column2=="SA"){
				goColumn2.transform.eulerAngles=Vector3(0-45,270+120,90-75);			
			}
		} 
	} else if(sD_Column2=="DS"){
		if(sW_Column2=="W1"){
			if(sS_Column2=="SB"){
				goColumn2.transform.eulerAngles=Vector3(0+45,180-115,0-65);
			} else if(sS_Column2=="SA"){
				goColumn2.transform.eulerAngles=Vector3(0+220,90+125,180+105);			
			}
		} else if(sW_Column2=="W2"){
			if(sS_Column2=="SB"){
				goColumn2.transform.eulerAngles=Vector3(0+40,180-135,270-85);
			} else if(sS_Column2=="SA"){
				goColumn2.transform.eulerAngles=Vector3(0-45,180+45,90-90);				
			}
		} else if(sW_Column2=="W3"){
			if(sS_Column2=="SB"){
				goColumn2.transform.eulerAngles=Vector3(0+140,270+120,270+70);
			} else if(sS_Column2=="SA"){
				goColumn2.transform.eulerAngles=Vector3(0-45,270+120,90-75);			
			}
		} 
	} else if(sD_Column2=="DO"){
		if(sW_Column2=="W1"){
			if(sS_Column2=="SB"){
				goColumn2.transform.eulerAngles=Vector3(0+45,180-115,0-65);
			} else if(sS_Column2=="SA"){
				goColumn2.transform.eulerAngles=Vector3(0+220,90+125,180+105);		
				//goColumn2.transform.eulerAngles=Vector3(0+offsetX,90+offsetY,180+offsetZ);
			}		
		} else if(sW_Column2=="W2"){
			if(sS_Column2=="SB"){
				goColumn2.transform.eulerAngles=Vector3(0+40,180-135,270-85);
			} else if(sS_Column2=="SA"){
				goColumn2.transform.eulerAngles=Vector3(0-45,180+45,90-90);		
			}
		} else if(sW_Column2=="W3"){
			if(sS_Column2=="SB"){
				goColumn2.transform.eulerAngles=Vector3(0+140,270+120,270+70);
			} else if(sS_Column2=="SA"){
				goColumn2.transform.eulerAngles=Vector3(0-45,270+120,90-75);			
			}
		} 
	}
	
	//Posiciona la columna en "contra-percepció": 
	//Calcula el vector origen el centre del Board i destí la posicó de la càmera de la SA: 
	//var v3_SAcamera:Vector3=GameObject.Find("SA_camera").transform.position;
	//var v3_BoardCenter:Vector3=GameObject.Find("BoardCenter").transform.position;
	//var v3_ColTranslDir:Vector3=v3_SAcamera-v3_BoardCenter;
	//Resultat del càlcul anterior (s'ha de posar harcoded pq sinó canvi de valor quan es canvia de Side): 
	if(sS_Column2=="SA"){
		//v3_traslacio=Vector3(-36.5,49.5,36.5);
		v3_traslacio=Vector3(-38,37.6,40.4);
	} else if(sS_Column2=="SB"){
		//v3_traslacio=Vector3(36.5,-49.5,-36.5);
		v3_traslacio=Vector3(38,-37.6,-40.4);
	}
	//En realitat el que vull moure la columna és una fracció d'aquest vector: 
	v3_traslacio=Vector3.Scale(v3_traslacio,Vector3(0.2,0.2,0.2));//el 20%
	//Faig efectiva la traslació: 
	goColumn2.transform.Translate(v3_traslacio,Space.World);
	
	//AQUI NO CAL PQ EL CENTRE DE COORDENADES DE LA COLUMNA 
	//COMENÇA A LA SEVA BASE I NO AL SEU CENTRE DE MASSES!!!
	//3- Traslació vertical de l'Column2 per posicionar-se just a sobre de la W: 
	/*
	if(sWTo=="W1" && sSTo=="SA"){
		goColumn2.transform.Translate(0,fColumn2Height,0,Space.World);
	} else if(sWTo=="W1" && sSTo=="SB"){
		goColumn2.transform.Translate(0,-fColumn2Height,0,Space.World);
	} else if(sWTo=="W2" && sSTo=="SA"){
		goColumn2.transform.Translate(-fColumn2Height,0,0,Space.World);
	} else if(sWTo=="W2" && sSTo=="SB"){
		goColumn2.transform.Translate(fColumn2Height,0,0,Space.World);
	} else if(sWTo=="W3" && sSTo=="SA"){
		goColumn2.transform.Translate(0,0,fColumn2Height,Space.World);
	} else if(sWTo=="W3" && sSTo=="SB"){
		goColumn2.transform.Translate(0,0,-fColumn2Height,Space.World);
	}
	*/
	
}
