static var sL_Avatar:String;
static var sP_Avatar:String;
public var sP_Avatar_new:String;
static var sW_Avatar:String;
static var sS_Avatar:String;
static var sD_Avatar:String;

static var iLC_AvatarRow;
static var iLC_AvatarCol;

public var zero:String="0";

public var goAvatar;

static var cWallModifier:char;
static var iObjRecolCounter:int;
public var isRecolectionPossible:boolean;

public var soundFallingAvatar:AudioClip;
public var soundErrorTunel:AudioClip;
public var soundEnterTunel:AudioClip;
public var soundForbidden:AudioClip;
public var soundNextLevel:AudioClip;
public var soundColumnTouched:AudioClip;
public var soundGateAppears:AudioClip;
public var soundRunnerStep:AudioClip;

public var customGuiStyle2:GUIStyle;
public var myskin2:GUISkin;
public var showFallMsg:boolean=false;
public var showTunnelErrorMsg:boolean=false;
static var showRunnerErrorMsg:boolean=false;

public var bTurnONforbTunnel:boolean=false;
public var bPhysicalUserInterfaceON:boolean;//teclat i ratoli activats o desactivats

static var showBoxL1:boolean;
static var showBoxL2:boolean;
static var showBoxL3:boolean;
static var showBoxL4:boolean;
static var showBoxL5:boolean;
static var showBoxL6:boolean;
static var showBoxL7:boolean;
static var showBoxL8:boolean;
static var showBoxL9:boolean;
static var showBoxL10:boolean;
static var showBoxL11:boolean;
static var showBoxL12:boolean;
static var showBoxL13:boolean;
static var showBoxL14:boolean;
static var showBoxL15:boolean;
static var showBoxL16:boolean;
static var showBoxL17:boolean;
static var showBoxL18:boolean;
static var showBoxL19:boolean;
static var showBoxL20:boolean;

//public var isMuted:boolean;
//public var labelMuted:String="";
var sTextContador:String="";

static var showStartMenu:boolean;
static var showGeneralMenu:boolean;
public var showBoxForbidden:boolean;
public var showBoxForbiddenGate:boolean;
public var showBoxLevelSmall:boolean;

public var bFirstAvatarFall:boolean=false;

static var iUltimateCounter:int=0;
static var bLevelL1Loaded:boolean;
static var bLevelL2Loaded:boolean;
static var bLevelL3Loaded:boolean;
static var bLevelL4Loaded:boolean;
static var bLevelL5Loaded:boolean;
static var bLevelL6Loaded:boolean;
static var bLevelL7Loaded:boolean;
static var bLevelL8Loaded:boolean;
static var bLevelL9Loaded:boolean;
static var bLevelL10Loaded:boolean;
static var bLevelL11Loaded:boolean;
static var bLevelL12Loaded:boolean;
static var bLevelL13Loaded:boolean;
static var bLevelL14Loaded:boolean;
static var bLevelL15Loaded:boolean;
static var bLevelL16Loaded:boolean;
static var bLevelL17Loaded:boolean;
static var bLevelL18Loaded:boolean;
static var bLevelL19Loaded:boolean;
static var bLevelL20Loaded:boolean;
static var bLevelL21Loaded:boolean;
static var bLevelL22Loaded:boolean;
static var bLevelL23Loaded:boolean;
static var bLevelL24Loaded:boolean;

static var bStopLevelRunnerL10:boolean=false;//runner-fugida
static var bStopLevelRunner:boolean=false;//runner-fugida
public var wallModificatorsL10 = new Array(21);//runner-fugida
public var wallModificatorsL11 = new Array(12);//runner-fugida
public var wallModificatorsL20 = new Array(8);//runner-patro
public var wallModificatorsL14 = new Array(24);//runner-patro
public var wallModificatorsL16 = new Array(36);//runner-patro
public var wallModificatorsL19 = new Array(32);//runner-patro
public var wallModificatorsL12 = new Array(2);//runner-fugida
static var iRunnerCounter:int=0;//runner
static var iArrayCounter:int=0;//runner
public var iRandomIndexL20:int=1;
public var lastRandom:int=1;
public var counterRandom:int=1;
public var accumulatedDeltaTime:float=0;



//var windowRect : Rect = Rect (20, 20, 820, 353);
var imatgeInici:Texture2D;
public var boxwidth_START;
public var boxheight_START;
public var xrect_START;
public var yrect_START;

function Start () {
	bPhysicalUserInterfaceON=true;
	
	bLevelL1Loaded=false;
	bLevelL2Loaded=false;
	bLevelL3Loaded=false;
	bLevelL4Loaded=false;
	bLevelL5Loaded=false;
	bLevelL6Loaded=false;
	bLevelL7Loaded=false;
	bLevelL8Loaded=false;
	bLevelL9Loaded=false;
	bLevelL10Loaded=false;
	bLevelL11Loaded=false;
	bLevelL12Loaded=false;
	bLevelL13Loaded=false;
	bLevelL14Loaded=false;
	bLevelL15Loaded=false;
	bLevelL16Loaded=false;
	bLevelL17Loaded=false;
	bLevelL18Loaded=false;
	bLevelL19Loaded=false;
	bLevelL20Loaded=false;
	
	showBoxL1=true;
	showBoxL2=true;
	showBoxL3=true;
	showBoxL4=true;
	showBoxL5=true;
	showBoxL6=true;
	showBoxL7=true;
	showBoxL8=true;
	showBoxL9=true;
	showBoxL10=true;
	showBoxL11=true;
	showBoxL12=true;
	showBoxL13=true;
	showBoxL14=true;
	showBoxL15=true;
	showBoxL16=true;
	showBoxL17=true;
	showBoxL18=true;
	showBoxL19=true;
	showBoxL20=true;
	
	showStartMenu=true;
	showGeneralMenu=false;
	isMuted=false;
	showBoxForbidden=false;
	showBoxForbiddenGate=false;
	showBoxLevelSmall=true;
	isRecolectionPossible=true;
	counterRandom=1;
	iLC_AvatarRow=getLevelConfRow(sP_Avatar);
	iLC_AvatarCol=getLevelConfCol(sP_Avatar);
	goAvatar=GameObject.Find("Avatar");
	moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
}

function Update () {
	
	//Menu general
	if(Input.GetKeyDown (KeyCode.M)){
		if(Board.isLevel1){
			if(showStartMenu){
				showStartMenu=false;
			}/* else if(!showStartMenu){
				showStartMenu=true;
			}*/
		} else {
			if(showGeneralMenu){//TANCO MENU
				showGeneralMenu=false;
				bPhysicalUserInterfaceON=true;
				if(Board.isRUNNERlevel){
					bStopLevelRunner=false;
				}
			} else if(!showGeneralMenu){//OBRO MENU
				showGeneralMenu=true;
				if(Board.isRUNNERlevel){
					bStopLevelRunner=true;
				}
			}
		}
	}

	//Subrutina que efectivament mou l'avatar quan es fa un canvi de W:
	if(sP_Avatar_new!="none"){//parche: pq no peti quan es surt d'un board gran
		if(calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)!='P' 
		&& calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)!='A'
		&& calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)!='B'
		&& calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)!='C'
		){
			moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
		} 
	}
	
	//Mou l'avatar si ha caigut a una casella prohibida quan passa de SA a SB o viceversa(per marcar l'error a l'usuari):
	if(sP_Avatar_new!="none"){//parche: pq no peti quan es surt d'un board gran
		if(calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)=='P' 
		|| calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)=='A'
		|| calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)=='B'
		|| calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)=='C'){
			if(bTurnONforbTunnel){
				moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
			}
		} 
	}

	
	////////////////////////////////////
	////////////////////////////////////
	///////ASCENT ///////////////
	////////////////////////////////////
	////////////////////////////////////
    if ((Input.GetKeyUp (KeyCode.Q) || Input.GetKeyUp (KeyCode.Mouse0) || Input.GetKeyUp (KeyCode.UpArrow)) && bPhysicalUserInterfaceON){//(ascent)
		isRecolectionPossible=true;
		var sNewModif;
		
		//Sortida avatar:
		//print("Starting sP_Avatar: "+sP_Avatar);
		//print("sW_Avatar: "+sW_Avatar);
		//print("sS_Avatar: "+sS_Avatar);
		//print("sD_Avatar: "+sD_Avatar);
   	    
		sP_Avatar_new=calculateAvatarDestination(sP_Avatar,sW_Avatar,sS_Avatar,sD_Avatar);
		
		//if(sP_Avatar_new=="none"){
		//	errorFallingFunction();
		//}
		
		//Destinacio avatar:
		//print("Ending sP_Avatar_new: "+sP_Avatar_new);
		//print("sW_Avatar: "+sW_Avatar);
		//print("sS_Avatar: "+sS_Avatar);
		
		//(print("cWallModifier: "+cWallModifier);
	
		//////////////////////////////
		//******casella NORMAL******//
		//////////////////////////////
		if(cWallModifier=='1'){//
			sP_Avatar=sP_Avatar_new;
			moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
		
		////////////////////////////////////
		//******casella RECOL.LECCIo******//
		////////////////////////////////////
		} else if(cWallModifier=='M' && isRecolectionPossible){//
		
			sP_Avatar=sP_Avatar_new;
			moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
			GameObject.Find("Board").audio.PlayOneShot(soundColumnTouched);
			
			//Desapareix cadira tocada: 
			if(Board.isLevelL4 || Board.isLevelL5 || Board.isLevelL6 || Board.isLevelL13 || Board.isLevelL14 || Board.isLevelL15 || Board.isLevelL16 || Board.isLevelL17 || Board.isLevelL18 ||  Board.isLevelL19){
				//cadira 1:
				if(Avatar.sP_Avatar==Column1.sP_Column1 && Avatar.sW_Avatar==Column1.sW_Column1 && Avatar.sS_Avatar==Column1.sS_Column1){
					Column1.goColumn1.SetActiveRecursively(false);
					if(Column1.sP_Column1.Length==2){
						Board.changeWallModif(Column1.sP_Column1[1],Column1.sW_Column1[1],Column1.sS_Column1[1],"1");
					} else {
						Board.changeWallModif(Column1.sP_Column1[1].ToString()+Column1.sP_Column1[2].ToString(),Column1.sW_Column1[1],Column1.sS_Column1[1],"1");
					}
				//cadira 2:
				} else if(Avatar.sP_Avatar==Column2.sP_Column2 && Avatar.sW_Avatar==Column2.sW_Column2 && Avatar.sS_Avatar==Column2.sS_Column2){
					Column2.goColumn2.SetActiveRecursively(false);
					if(Column2.sP_Column2.Length==2){
						Board.changeWallModif(Column2.sP_Column2[1],Column2.sW_Column2[1],Column2.sS_Column2[1],"1");
					} else {
						Board.changeWallModif(Column2.sP_Column2[1].ToString()+Column2.sP_Column2[2].ToString(),Column2.sW_Column2[1],Column2.sS_Column2[1],"1");
					}
				}
			}
			
			iObjRecolCounter++;
			
			//Aparicio de la gate com per art de magia si s'han tocat 2 cadires...
			if(iObjRecolCounter==2){
				GameObject.Find("Board").audio.PlayOneShot(soundGateAppears);
				Gate.goGate.SetActiveRecursively(true);
				//Recordatori: 
				//W1='A', W2='B', W3='C'.
				//Nota: per mes seguretat incloure les tres caselles. 
				if(Board.isLevelL4==true){
					Board.changeWallModif("3","1","A","1");//P-W-S-modif
					Board.changeWallModif("3","2","A","B");
					Board.changeWallModif("3","3","A","C");
				} else if(Board.isLevelL5==true){
					Board.changeWallModif("2","1","B","A");
					Board.changeWallModif("2","2","B","1");
					Board.changeWallModif("2","3","B","C");
				} else if(Board.isLevelL6==true){
					Board.changeWallModif("19","1","A","A");
					Board.changeWallModif("19","2","A","B");
					Board.changeWallModif("19","3","A","1");
				} else if(Board.isLevelL13==true){
					Board.changeWallModif("2","1","A","A");
					Board.changeWallModif("2","2","A","B");
					Board.changeWallModif("2","3","A","1");
				} else if(Board.isLevelL15==true){
					Board.changeWallModif("1","1","A","1");
					Board.changeWallModif("1","2","A","B");
					Board.changeWallModif("1","3","A","C");
				} else if(Board.isLevelL17==true){
					Board.changeWallModif("6","1","A","1");
					Board.changeWallModif("6","2","A","B");
					Board.changeWallModif("6","3","A","C");
				} else if(Board.isLevelL18==true){
					Board.changeWallModif("13","1","A","A");
					Board.changeWallModif("13","2","A","B");
					Board.changeWallModif("13","3","A","1");
				} else if(Board.isLevelL14==true){
					Board.changeWallModif("15","1","A","A");
					Board.changeWallModif("15","2","A","B");
					Board.changeWallModif("15","3","A","1");
				} else if(Board.isLevelL16==true){
					Board.changeWallModif("8","1","B","A");
					Board.changeWallModif("8","2","B","B");
					Board.changeWallModif("8","3","B","1");
				} else if(Board.isLevelL19==true){
					Board.changeWallModif("15","1","A","A");
					Board.changeWallModif("15","2","A","B");
					Board.changeWallModif("15","3","A","1");
				}
			}

		/////////////////////
		//******TUNEL******//
		/////////////////////
		} else if(cWallModifier=='T'){
			doAvatarThroughTunnel();
		
		///////////////////////
		//******FALLING******//
		///////////////////////		
		} else if(cWallModifier=='0'){//******casella BUIDA******
				if(sP_Avatar_new!="none"){
					//print("sP_Avatar abans: "+sP_Avatar);
					sP_Avatar=sP_Avatar_new;
					//print("sP_Avatar despres: "+sP_Avatar);
					moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
				} else {
					//print("sP_Avatar_new abans: "+sP_Avatar_new);
					sP_Avatar_new=sP_Avatar;
					//print("sP_Avatar_new despres: "+sP_Avatar_new);	
				}
				errorFallingFunction();

		///////////////////////////////////////
		//******AUDIO CASELLA PROHIBIDA******//
		///////////////////////////////////////	
		} else if(calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)=='P' 
			   || calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)=='A'
			   || calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)=='B'
			   || calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)=='C'){
					GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
		} 
		
		/*
		//Missatges tutorial L1:
		if(calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)=='P' && Board.isLevelL1){
			showBoxForbidden=true;
			print("showBoxForbidden=true");
		}
		
		if((calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)=='A' || calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)=='B' || calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar)=='C')  && Board.isLevelL1){
			showBoxForbiddenGate=true;
			print("showBoxForbiddenGate=true");
		}
		*/
	}
	
	////////////////////////////////////////////
	////////////////////////////////////////////
	///////MOVIMENT PER LES WALLS///////////////
	////////////////////////////////////////////
	////////////////////////////////////////////
	if((Input.GetKeyUp (KeyCode.W) || Input.GetKeyUp (KeyCode.Mouse1) || Input.GetKeyUp (KeyCode.DownArrow)) && bPhysicalUserInterfaceON){
		//sP_Avatar_new=calculateAvatarDestination(sP_Avatar,sW_Avatar,sS_Avatar,sD_Avatar);//ULL!!! CAOS TOTAL SI ES DESCOMENTA!!!
		//print("Estic a sW_Avatar: "+sW_Avatar);
		//print("bPhysicalUserInterfaceON: "+bPhysicalUserInterfaceON);
		
		///////////////////
		//WALL ORIGEN: W1//
		///////////////////
		if(sW_Avatar=="W1"){		
		
			//Calcul casella desti:
			if(sS_Avatar=="SA"){
				sW_Avatar="W2";
			} else if(sS_Avatar=="SB"){
				sW_Avatar="W3";
			}
			
			//calcul modificador casella desti:
			cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
			
			//Si la casella desti esta prohibida: BYPASS!
			if(cWallModifier=='P' || cWallModifier=='A' || cWallModifier=='B'|| cWallModifier=='C'){
				if(!bTurnONforbTunnel){	
					if(sS_Avatar=="SA"){
						sW_Avatar="W3";
						//Torna a calcular el modif de la casella: 
						cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
						//CASELLA TUNEL: 
						if(cWallModifier=='T'){
							doAvatarThroughTunnelFromW3();				
						} 
					} else if(sS_Avatar=="SB"){
						sW_Avatar="W2";
						//Torna a calcular el modif de la casella: 
						cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
						//CASELLA TUNEL: 
						if(cWallModifier=='T'){
							doAvatarThroughTunnelFromW2();				
						} 
					}
				}
				
			//Si es una CASELLA TUNEL, som-hi!
			} else if(cWallModifier=='T'){
				if(sW_Avatar=="W2"){
					doAvatarThroughTunnelFromW2();		
				} else if(sW_Avatar=="W3"){
					doAvatarThroughTunnelFromW3();		
				}			
			} else if(cWallModifier=='0'){
				moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
				errorFallingFunction();	
			} 
			
		
		///////////////////
		//WALL ORIGEN: W2//
		///////////////////
		} else if(sW_Avatar=="W2"){
		
			//Calcul casella desti
			if(sS_Avatar=="SA"){
				sW_Avatar="W3";
			} else if(sS_Avatar=="SB"){
				sW_Avatar="W1";
			}
			
			//calcul modificador casella desti:
			cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
			
			//Si la casella desti esta prohibida: BYPASS!
			if(cWallModifier=='P' || cWallModifier=='A' || cWallModifier=='B'|| cWallModifier=='C'){
				if(!bTurnONforbTunnel){	
					if(sS_Avatar=="SA"){
						sW_Avatar="W1";
						//Torna a calcular el modif de la casella: 
						cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
						//CASELLA TUNEL: 
						if(cWallModifier=='T'){
							doAvatarThroughTunnelFromW1();				
						} 
					} else if(sS_Avatar=="SB"){
						sW_Avatar="W3";
						//Torna a calcular el modif de la casella: 
						cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
						//CASELLA TUNEL: 
						if(cWallModifier=='T'){
							doAvatarThroughTunnelFromW3();				
						} 
					}
				}
				
			//Si es una CASELLA TUNEL, som-hi!
			} else if(cWallModifier=='T'){
				if(sW_Avatar=="W3"){
					doAvatarThroughTunnelFromW3();		
				} else if(sW_Avatar=="W1"){
					doAvatarThroughTunnelFromW1();		
				}			
			
			//******casella BUIDA******
			} else if(cWallModifier=='0'){
				moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
				errorFallingFunction();	
			} 
		
		///////////////////
		//WALL ORIGEN: W3//
		///////////////////
		} else if(sW_Avatar=="W3"){
			//Calcul casella desti:
			if(sS_Avatar=="SA"){
				sW_Avatar="W1";
			} else if(sS_Avatar=="SB"){
				sW_Avatar="W2";
			}
			//Si la casella desti esta prohibida: BYPASS!
			cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
			if(cWallModifier=='P' || cWallModifier=='A' || cWallModifier=='B'|| cWallModifier=='C'){
				if(!bTurnONforbTunnel){	
					if(sS_Avatar=="SA"){
						sW_Avatar="W2";
						//Torna a calcular el modif de la casella: 
						cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
						//CASELLA TUNEL: 
						if(cWallModifier=='T'){
							doAvatarThroughTunnelFromW2();				
						} 
					} else if(sS_Avatar=="SB"){
						sW_Avatar="W1";
						//Torna a calcular el modif de la casella: 
						cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
						//CASELLA TUNEL: 
						if(cWallModifier=='T'){
							doAvatarThroughTunnelFromW1();				
						} 
					}
				}
				
			//Si es una CASELLA TUNEL, som-hi!
			} else if(cWallModifier=='T'){
				if(sW_Avatar=="W1"){
					doAvatarThroughTunnelFromW1();		
				} else if(sW_Avatar=="W2"){
					doAvatarThroughTunnelFromW2();		
				}			
			} else if(cWallModifier=='0'){
				moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
				errorFallingFunction();	
			}	 
		} 
	}

	///////////////////////////////////////
	//******DIRECcIo ON MIRA AVATAR*******//
	///////////////////////////////////////
	//Canvi de direccó quan apreta Espai:
	if(Input.GetKeyUp (KeyCode.Space) && bPhysicalUserInterfaceON){
		if(sD_Avatar=="DN"){
			print("DE!");
			sD_Avatar="DE";
		} else if(sD_Avatar=="DE"){
			print("DS!");
			sD_Avatar="DS";
		} else if(sD_Avatar=="DS"){
			print("DO!");
			sD_Avatar="DO";
		} else if(sD_Avatar=="DO"){
			print("DN!");
			sD_Avatar="DN";
		}
	}
	//Canvi de direcció amb ratolí:
    if((Input.GetAxisRaw("Mouse ScrollWheel")>0 || Input.GetKeyUp (KeyCode.LeftArrow)) && bPhysicalUserInterfaceON){
		if(sD_Avatar=="DN"){
			sD_Avatar="DO";
		} else if(sD_Avatar=="DE"){
			sD_Avatar="DN";
		} else if(sD_Avatar=="DS"){
			sD_Avatar="DE";
		} else if(sD_Avatar=="DO"){
			sD_Avatar="DS";
		}
	} else if((Input.GetAxisRaw("Mouse ScrollWheel")<0 || Input.GetKeyUp (KeyCode.RightArrow)) && bPhysicalUserInterfaceON){
		if(sD_Avatar=="DN"){
			sD_Avatar="DE";
		} else if(sD_Avatar=="DE"){
			sD_Avatar="DS";
		} else if(sD_Avatar=="DS"){
			sD_Avatar="DO";
		} else if(sD_Avatar=="DO"){
			sD_Avatar="DN";
		}
	}
	
    //////////////////////////////
	//******WIN*****************//
	//////////////////////////////
	if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L1" && Gate.goGate.active==true){
		goToNextLevelL2();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L2"&& Gate.goGate.active==true){
		goToNextLevelL3();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L3"&& Gate.goGate.active==true){
		goToNextLevelL4();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L4"&& Gate.goGate.active==true){
		goToNextLevelL5();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L5"&& Gate.goGate.active==true){
		goToNextLevelL6();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L6"&& Gate.goGate.active==true){
		goToNextLevelL7();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L7"&& Gate.goGate.active==true){
		goToNextLevelL8();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L8"&& Gate.goGate.active==true){
		goToNextLevelL9();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L9"&& Gate.goGate.active==true){
		goToNextLevelL10();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L10"&& Gate.goGate.active==true){
		goToNextLevelL11();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L11"&& Gate.goGate.active==true){
		goToNextLevelL12();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L12"&& Gate.goGate.active==true){
		goToNextLevelL13();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L13"&& Gate.goGate.active==true){
		goToNextLevelL14();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L14"&& Gate.goGate.active==true){
		goToNextLevelL15();
	}  else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L15"&& Gate.goGate.active==true){
		goToNextLevelL16();
	}  else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L16"&& Gate.goGate.active==true){
		goToNextLevelL17();
	}  else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L17"&& Gate.goGate.active==true){
		goToNextLevelL18();
	}  else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L18"&& Gate.goGate.active==true){
		goToNextLevelL19();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L19"&& Gate.goGate.active==true){
		goToNextLevelL20();
	} else if(sP_Avatar==Gate.sP_Gate && sW_Avatar==Gate.sW_Gate && sS_Avatar==Gate.sS_Gate && sL_Avatar=="L20"&& Gate.goGate.active==true){
		goToNextLevelL1();
	}
	
	/////////////////////////////////////////////
	//Nivell fugida (desaparicio de caselles):///
	/////////////////////////////////////////////
	if(Board.isRUNNERlevel){
		if(Board.isLevelL10 && !showBoxL10){//     
			doRunnerLevelL10();
		} else if(Board.isLevelL11 && !showBoxL11){//
			doRunnerLevelL11();
		} else if(Board.isLevelL12 && !showBoxL12){//
			doRunnerLevelL12();
		} else if(Board.isLevelL14 && !showBoxL14){
			doRunnerLevelL14();
		} else if(Board.isLevelL16 && !showBoxL16){
			doRunnerLevelL16();
		} else if(Board.isLevelL19 && !showBoxL19){
			doRunnerLevelL19();
		} else if(Board.isLevelL20 && !showBoxL20){//
			doRunnerLevelL20();
		}
	}
	
	
}//update avatar


function OnGUI () {

	GUI.skin=myskin2;

	var xgui=(Screen.width/3)+30;
	var ygui=(Screen.height/12)+50;
	
	//Contador nivells
	if(Board.isLevelL1){
		sTextContador="Nivel 1";
	} else if(Board.isLevelL2){
		sTextContador="Nivel 2";
	} else if(Board.isLevelL3){
		sTextContador="Nivel 3";
	} else if(Board.isLevelL4){
		sTextContador="Nivel 4";
	} else if(Board.isLevelL5){
		sTextContador="Nivel 5";
	} else if(Board.isLevelL6){
		sTextContador="Nivel 6";
	} else if(Board.isLevelL7){
		sTextContador="Nivel 7";
	} else if(Board.isLevelL8){
		sTextContador="Nivel 8";
	} else if(Board.isLevelL9){
		sTextContador="Nivel 9";
	} else if(Board.isLevelL10){
		sTextContador="Nivel 10";
	} else if(Board.isLevelL11){
		sTextContador="Nivel 11";
	} else if(Board.isLevelL12){
		sTextContador="Nivel 12";
	} else if(Board.isLevelL13){
		sTextContador="Nivel 13";
	} else if(Board.isLevelL14){
		sTextContador="Nivel 14";
	} else if(Board.isLevelL15){
		sTextContador="Nivel 15";
	} else if(Board.isLevelL16){
		sTextContador="Nivel 16";
	} else if(Board.isLevelL17){
		sTextContador="Nivel 17";
	} else if(Board.isLevelL18){
		sTextContador="Nivel 18";
	} else if(Board.isLevelL19){
		sTextContador="Nivel 19";
	} else if(Board.isLevelL20){
		sTextContador="Nivel 20";
	}
	
	if(!showStartMenu){
		
		//Cartell nivell
		GUI.Box(Rect (Screen.width-110, 20, 100, 50),sTextContador);		
		
		//Recordatori menu: 
		GUI.Box(Rect (Screen.width-160, Screen.height-60, 150, 50),"Menú tecla 'M'");
	}
	
	/////////////////////////////
	////L1 - regles generiques///////////////////////
	/////////////////////////////
	
	var boxwidth_TUTO=480;
	var boxheight_TUTO=500;
	var xrect_TUTO=Screen.width/3;
	var yrect_TUTO=80;
	if(Board.isLevelL1==true && !showStartMenu){ 
		if(showBoxL1){
			Screen.showCursor = true;
			bPhysicalUserInterfaceON=false;
			
			/*
			var sReglas="BREVE TUTORIAL:\n\nEl objetivo del juego es llevar el avatar a la casilla \ndonde se encuentra la salida.\n\nEntre hexágonos, el avatar sólo sabe avanzar hacia \narriba, siempre ascendiendo. Debes adaptarte a su \npunto de vista y encontrar posibles peldaños \ndonde subir.\n\nControles y tipos de movimiento: \n\n- Ascender: Botón izquierdo ratón o tecla 'Arriba'. \n\n- Mover el avatar dentro de cada hexágono: botón \nderecho ratón o tecla 'Abajo'. \n\n- Cambiar la dirección hacia donde mira el avatar, \nrueda ratón o teclas 'Izquierda' y 'Derecha'";
			var sTextL1b=sReglas+"\n\n!Recuerda que hay 20 niveles!\n\n¡Ya puedes empezar a jugar al NIVEL 1!";
			GUI.Box(Rect (xrect_TUTO, yrect_TUTO, boxwidth_TUTO, boxheight_TUTO),sTextL1b);
			*/

			var sReglas="El objetivo del juego es llevar el avatar a la casilla \ndonde se encuentra la salida.\n\nEntre hexágonos, el avatar sólo sabe avanzar hacia \narriba, siempre ascendiendo. Debes adaptarte a su \npunto de vista y encontrar posibles peldaños \ndonde subir.\n\nControles y tipos de movimiento: \n\n- Ascender: Botón izquierdo ratón o tecla 'Arriba'. \n\n- Mover el avatar dentro de cada hexágono: botón \nderecho ratón o tecla 'Abajo'. \n\n- Cambiar la dirección hacia donde mira el avatar, \nrueda ratón o teclas 'Izquierda' y 'Derecha'";
			
			GUI.Box(Rect (xrect_TUTO, yrect_TUTO, boxwidth_TUTO, boxheight_TUTO),sReglas);			
			if(GUI.Button(Rect (xrect_TUTO+160, yrect_TUTO+425, 150, 35),"Asciende!")){
				resumeBoxL1();
			}
		
		}
	}
	
	
	var boxwidth_AYUDA=300;
	var boxheight_AYUDA=250;
	var xrect_AYUDA=Screen.width-boxwidth_AYUDA-20;
	var yrect_AYUDA=boxheight_AYUDA+20;

	//L1- Ajuda 1
	if(Board.isLevelL1 && showBoxForbidden){
			Screen.showCursor = true;
			bPhysicalUserInterfaceON=false;
			var sTextL1c="_______  AYUDA  _______\n\nMovimiento prohibido. \n\nPrueba con cambiar la direc-\nción hacia donde mira el avatar\n(ruedecita ratón o teclado).";
			GUI.Box(Rect(xrect_AYUDA, yrect_AYUDA, boxwidth_AYUDA, boxheight_AYUDA),sTextL1c);
			if (GUI.Button(Rect(xrect_AYUDA+100,yrect_AYUDA+200,100,35),"OK")){
				resumeBoxForbidden();
			}	
	}
	
	//L1- Ayuda 2
	if(Board.isLevelL1 && showBoxForbiddenGate){
			Screen.showCursor = true;
			bPhysicalUserInterfaceON=false;
			var sTextL1d="_______  AYUDA  _______\n\nEl último ascenso debe llevar  \ndirectamente a la casilla   \ndonde se encuentra la salida.\n";
			GUI.Box(Rect (xrect_AYUDA, yrect_AYUDA, boxwidth_AYUDA, boxheight_AYUDA),sTextL1d);
			if (GUI.Button(Rect(xrect_AYUDA+100,yrect_AYUDA+200,100,35),"OK")){
				resumeBoxForbiddenGate();
			}	
	}
	
	var boxwidth_LEVEL=350;
	var boxheight_LEVEL=300;
	var xrect_LEVEL=(Screen.width/2)-(boxwidth_LEVEL/2);
	var yrect_LEVEL=Screen.height/8;

	//////L2
	if(Board.isLevelL2){ 
		if(showBoxL2){
			Screen.showCursor = true;
			bPhysicalUserInterfaceON=false;
			var sTextL2="_________  NIVEL 2  _______\n\nNuevos elementos en el juego:\n\nNo se puede ubicar el avatar encima\nde las casillas-muro (marrón claro).\n\nUsa las casillas-túnel (cian) \npara pasar al otro lado del entorno.";
			GUI.Box(Rect (xrect_LEVEL, yrect_LEVEL, boxwidth_LEVEL, boxheight_LEVEL),sTextL2);
			if (GUI.Button(Rect(xrect_LEVEL+120,yrect_LEVEL+250,100,35),"OK")){
				resumeBoxL2();
			}
		}
	}
	
	//////L3
	var boxwidth_LEVEL_SMALL=310;
	var boxheight_LEVEL_SMALL=70;
	var xrect_LEVEL_SMALL=(Screen.width/2)-(boxwidth_LEVEL_SMALL/2);
	var yrect_LEVEL_SMALL=Screen.height/3;
	if(Board.isLevelL3){ 
		if(showBoxL3){
			Screen.showCursor = true;
			bPhysicalUserInterfaceON=false;
			var sTextL3="  _______  NIVEL 3  _______";
			GUI.Box(Rect (xrect_LEVEL_SMALL, yrect_LEVEL_SMALL, boxwidth_LEVEL_SMALL, boxheight_LEVEL_SMALL),sTextL3);
			resumeBoxL3();
		}
	}
	
	
	////L4///////////////////////Primer recoleccio
	if(Board.isLevelL4==true){ 
		if(showBoxL4){
			bPhysicalUserInterfaceON=false;
			var sTextL4="  _______  NIVEL 4  _______\n\nPara recolectar las sillas, debes \nascender directamente a la casilla \ndonde se ubican.\n\nCuando las hayas recogido todas,\nla salida al siguiente nivel aparecerá.\n\n";
			GUI.Box(Rect (xrect_LEVEL, yrect_LEVEL, boxwidth_LEVEL, boxheight_LEVEL),sTextL4);
			if (GUI.Button(Rect(xrect_LEVEL+120,yrect_LEVEL+230,100,35),"OK")){
				resumeBoxL4();
			}
		}
		
		if(!showBoxL4){
			var sTextL4b=Avatar.iObjRecolCounter+" de 2 sillas recolectadas";
			GUI.Box(Rect (25, 25, 250, 50),sTextL4b);
		}
	}
	
	//////L5
	if(Board.isLevelL5){ 
		if(showBoxL5){
			Screen.showCursor = true;
			bPhysicalUserInterfaceON=false;
			var sTextL5="  _______  NIVEL 5  _______";
			GUI.Box(Rect (xrect_LEVEL_SMALL, yrect_LEVEL_SMALL, boxwidth_LEVEL_SMALL, boxheight_LEVEL_SMALL),sTextL5);
			resumeBoxL5();
		}
	}
	
	//////L6
	if(Board.isLevelL6){ 
		if(showBoxL6){
			Screen.showCursor = true;
			bPhysicalUserInterfaceON=false;
			var sTextL6="  _______  NIVEL 6  _______";
			GUI.Box(Rect (xrect_LEVEL_SMALL, yrect_LEVEL_SMALL, boxwidth_LEVEL_SMALL, boxheight_LEVEL_SMALL),sTextL6);
			resumeBoxL6();
		}
	}
	
	////L7///////////////////////Primer construcció
	if(Board.isLevelL7==true){
		if(showBoxL7){
			Board.bPhysicalUserInterfaceON=false;
			bPhysicalUserInterfaceON=false;
			var sTextL7a=" _______  NIVEL 7  _______\n\nUbica tu mismo la posición de los \ntúneles con el puntero del ratón y \nla tecla 'T'. \n\nSi el nivel se queda sin solución,\npulsa la tecla 'M' y reinicia el nivel.";
			GUI.Box(Rect (xrect_LEVEL, yrect_LEVEL, boxwidth_LEVEL, boxheight_LEVEL),sTextL7a);
			if (GUI.Button(Rect(xrect_LEVEL+120,yrect_LEVEL+230,100,35),"OK")){
				resumeBoxL7();
			}
		}
		
		if(!showBoxL7){
			var sTextL7b="Ubicar un túnel: tecla 'T'\n\nTúneles disponibles: "+Board.iTunelsLeft+".";
			Board.iTunelsLeft=Board.iLevelTunelMax+1-Board.iTunelsCounter;
			GUI.Box(Rect (25, 25, 240, 100),sTextL7b);
		}
	}
	
	////L8///////////////////////
	if(Board.isLevelL8==true){
		if(showBoxL8){
			Board.bPhysicalUserInterfaceON=false;/////////////////////Posar aixo als de CONSTRUCCIO! PARCHE!
			bPhysicalUserInterfaceON=false;
			var sTextL8="  _______  NIVEL 8  _______";
			GUI.Box(Rect (xrect_LEVEL_SMALL, yrect_LEVEL_SMALL, boxwidth_LEVEL_SMALL, boxheight_LEVEL_SMALL),sTextL8);
			resumeBoxL8();
		}
		
		if(!showBoxL8){	
			var sTextL8b="Ubicar un túnel: tecla 'T'\n\nTúneles disponibles: "+Board.iTunelsLeft+"";
			Board.iTunelsLeft=Board.iLevelTunelMax+1-Board.iTunelsCounter;
			GUI.Box(Rect (25, 25, 240, 100),sTextL8b);
		}
	}
	
	////L9///////////////////////
	if(Board.isLevelL9==true){
		if(showBoxL9){
			Board.bPhysicalUserInterfaceON=false;/////////////////////Posar aixo als de CONSTRUCCIO! PARCHE!
			bPhysicalUserInterfaceON=false;
			var sTextL9="  _______  NIVEL 9  _______";
			GUI.Box(Rect (xrect_LEVEL_SMALL, yrect_LEVEL_SMALL, boxwidth_LEVEL_SMALL, boxheight_LEVEL_SMALL),sTextL9);
			resumeBoxL9();
		}
		
		if(!showBoxL9){	
			var sTextL9b="Ubicar un túnel: tecla 'T'\n\nTúneles disponibles: "+Board.iTunelsLeft+"";
			Board.iTunelsLeft=Board.iLevelTunelMax+1-Board.iTunelsCounter;
			GUI.Box(Rect (25, 25, 240, 100),sTextL9b);
		}
	}
	
	////L10////////////////////// Primer fugida
	if(Board.isLevelL10==true){
		if(showBoxL10){
			Board.bPhysicalUserInterfaceON=false;
			bPhysicalUserInterfaceON=false;
			var sTextL10a=" _______  NIVEL 10  ______\n\n\nEl vacío avanza...¡escapa de él!";
			GUI.Box(Rect (xrect_LEVEL, yrect_LEVEL, boxwidth_LEVEL, boxheight_LEVEL-100),sTextL10a);
			if (GUI.Button(Rect(xrect_LEVEL+120,yrect_LEVEL+130,100,35),"OK")){
				resumeBoxL10();
			}
		}
	}
		
	////L11//////////////////////
	if(Board.isLevelL11==true){
		if(showBoxL11){
			Board.bPhysicalUserInterfaceON=false;
			bPhysicalUserInterfaceON=false;
			var sTextL11a=" _______  NIVEL 11  ______\n\nIntenta pasar por el hexágono-puente \nevitando caer...";
			GUI.Box(Rect (xrect_LEVEL, yrect_LEVEL, boxwidth_LEVEL, boxheight_LEVEL-100),sTextL11a);
			if (GUI.Button(Rect(xrect_LEVEL+120,yrect_LEVEL+130,100,35),"OK")){
				resumeBoxL11();
			}
		}
	}

	////L12//////////////////////
	if(Board.isLevelL12==true){
		if(showBoxL12){
			Board.bPhysicalUserInterfaceON=false;
			bPhysicalUserInterfaceON=false;
			var sTextL12a=" _______  NIVEL 12  ______\n\nPara llegar a la salida, debes deducir\nel patrón de vaciado/llenado de las \ncasillas...";
			GUI.Box(Rect (xrect_LEVEL, yrect_LEVEL, boxwidth_LEVEL, boxheight_LEVEL-100),sTextL12a);
			if (GUI.Button(Rect(xrect_LEVEL+120,yrect_LEVEL+150,100,35),"OK")){
				resumeBoxL12();
			}
		}
	}
	
	////L13//////////////////////
	if(Board.isLevelL13==true){
		if(showBoxL13){
			Board.bPhysicalUserInterfaceON=false;
			bPhysicalUserInterfaceON=false;
			var sTextL13=" _______  NIVEL 13  ______\n\nRecuerda que para recolectar las \nsillas, debes ascender directamente \na la casilla donde se ubican.\n\nCuando las hayas recogido todas,\nla salida al siguiente nivel aparecerá.\n\n";
			GUI.Box(Rect (xrect_LEVEL, yrect_LEVEL, boxwidth_LEVEL, boxheight_LEVEL),sTextL13);
			if (GUI.Button(Rect(xrect_LEVEL+120,yrect_LEVEL+230,100,35),"OK")){
				resumeBoxL13();
			}
		}
		
		if(!showBoxL13){
			var sTextL13b=Avatar.iObjRecolCounter+" de 2 sillas recolectadas";
			GUI.Box(Rect (25, 25, 250, 50),sTextL13b);
		}
		
		if(!showBoxL13){
			var sTextL13c="Ubicar un túnel: tecla 'T'\n\nTúneles disponibles: "+Board.iTunelsLeft+".";
			Board.iTunelsLeft=Board.iLevelTunelMax+1-Board.iTunelsCounter;
			GUI.Box(Rect (25, 150, 240, 100),sTextL13c);
		}
	}
	
	////L14//////////////////////
	if(Board.isLevelL14==true){
		if(showBoxL14){
			Board.bPhysicalUserInterfaceON=false;
			bPhysicalUserInterfaceON=false;
			var sTextL14=" _______  NIVEL 14  ______";
			//GUI.Box(Rect (xrect_LEVEL, yrect_LEVEL, boxwidth_LEVEL, boxheight_LEVEL-100),sTextL14);
			GUI.Box(Rect (xrect_LEVEL_SMALL, yrect_LEVEL_SMALL, boxwidth_LEVEL_SMALL, boxheight_LEVEL_SMALL),sTextL14);
			//if (GUI.Button(Rect(xrect_LEVEL+120,yrect_LEVEL+150,100,35),"OK")){
				resumeBoxL14();
			//}
		}
		
			
		if(!showBoxL14){
			var sTextL14b=Avatar.iObjRecolCounter+" de 2 sillas recolectadas";
			GUI.Box(Rect (25, 25, 250, 50),sTextL14b);
		}
		
		if(!showBoxL14){
			var sTextL14c="Ubicar un túnel: tecla 'T'\n\nTúneles disponibles: "+Board.iTunelsLeft+".";
			Board.iTunelsLeft=Board.iLevelTunelMax+1-Board.iTunelsCounter;
			GUI.Box(Rect (25, 150, 240, 100),sTextL14c);
		}
	}
	
	////L15//////////////////////
	if(Board.isLevelL15==true){
		if(showBoxL15){
			Board.bPhysicalUserInterfaceON=false;
			bPhysicalUserInterfaceON=false;
			var sTextL15=" _______  NIVEL 15  ______";
			//GUI.Box(Rect (xrect_LEVEL, yrect_LEVEL, boxwidth_LEVEL, boxheight_LEVEL-100),sTextL15);
			GUI.Box(Rect (xrect_LEVEL_SMALL, yrect_LEVEL_SMALL, boxwidth_LEVEL_SMALL, boxheight_LEVEL_SMALL),sTextL15);
			//if (GUI.Button(Rect(xrect_LEVEL+120,yrect_LEVEL+150,100,35),"OK")){
				resumeBoxL15();
			//}
		}
		
		if(!showBoxL15){
			var sTextL15b=Avatar.iObjRecolCounter+" de 2 sillas recolectadas";
			GUI.Box(Rect (25, 25, 250, 50),sTextL15b);
		}
		
		if(!showBoxL15){
			var sTextL15c="Ubicar un túnel: tecla 'T'\n\nTúneles disponibles: "+Board.iTunelsLeft+".";
			Board.iTunelsLeft=Board.iLevelTunelMax+1-Board.iTunelsCounter;
			GUI.Box(Rect (25, 150, 240, 100),sTextL15c);
		}
	}
	
	////L16//////////////////////
	if(Board.isLevelL16==true){
		if(showBoxL16){
			Board.bPhysicalUserInterfaceON=false;
			bPhysicalUserInterfaceON=false;
			var sTextL16=" _______  NIVEL 16  ______";
			//GUI.Box(Rect (xrect_LEVEL, yrect_LEVEL, boxwidth_LEVEL, boxheight_LEVEL-100),sTextL16);
			GUI.Box(Rect (xrect_LEVEL_SMALL, yrect_LEVEL_SMALL, boxwidth_LEVEL_SMALL, boxheight_LEVEL_SMALL),sTextL16);
			//if (GUI.Button(Rect(xrect_LEVEL+120,yrect_LEVEL+150,100,35),"OK")){
				resumeBoxL16();
			//}
		}
		
		if(!showBoxL16){
			var sTextL16b=Avatar.iObjRecolCounter+" de 2 sillas recolectadas";
			GUI.Box(Rect (25, 25, 250, 50),sTextL16b);
		}
	}
	
	////L17//////////////////////
	if(Board.isLevelL17==true){
		if(showBoxL17){
			Board.bPhysicalUserInterfaceON=false;
			bPhysicalUserInterfaceON=false;
			var sTextL17=" _______  NIVEL 17  ______";
			//GUI.Box(Rect (xrect_LEVEL, yrect_LEVEL, boxwidth_LEVEL, boxheight_LEVEL-100),sTextL17);
			GUI.Box(Rect (xrect_LEVEL_SMALL, yrect_LEVEL_SMALL, boxwidth_LEVEL_SMALL, boxheight_LEVEL_SMALL),sTextL17);
			//if (GUI.Button(Rect(xrect_LEVEL+120,yrect_LEVEL+150,100,35),"OK")){
				resumeBoxL17();
			//}
		}
		
		if(!showBoxL17){
			var sTextL17b=Avatar.iObjRecolCounter+" de 2 sillas recolectadas";
			GUI.Box(Rect (25, 25, 250, 50),sTextL17b);
		}
		
		if(!showBoxL17){
			var sTextL17c="Ubicar un túnel: tecla 'T'\n\nTúneles disponibles: "+Board.iTunelsLeft+".";
			Board.iTunelsLeft=Board.iLevelTunelMax+1-Board.iTunelsCounter;
			GUI.Box(Rect (25, 150, 240, 100),sTextL17c);
		}
	}
	
	////L18//////////////////////
	if(Board.isLevelL18==true){
		if(showBoxL18){
			Board.bPhysicalUserInterfaceON=false;
			bPhysicalUserInterfaceON=false;
			var sTextL18=" _______  NIVEL 18  ______";
			//GUI.Box(Rect (xrect_LEVEL, yrect_LEVEL, boxwidth_LEVEL, boxheight_LEVEL-100),sTextL18);
			GUI.Box(Rect (xrect_LEVEL_SMALL, yrect_LEVEL_SMALL, boxwidth_LEVEL_SMALL, boxheight_LEVEL_SMALL),sTextL18);
			//if (GUI.Button(Rect(xrect_LEVEL+120,yrect_LEVEL+150,100,35),"OK")){
				resumeBoxL18();
			//}
		}
		
		if(!showBoxL18){
			var sTextL18b=Avatar.iObjRecolCounter+" de 2 sillas recolectadas";
			GUI.Box(Rect (25, 25, 250, 50),sTextL18b);
		}
		
		if(!showBoxL18){
			var sTextL18c="Ubicar un túnel: tecla 'T'\n\nTúneles disponibles: "+Board.iTunelsLeft+".";
			Board.iTunelsLeft=Board.iLevelTunelMax+1-Board.iTunelsCounter;
			GUI.Box(Rect (25, 150, 240, 100),sTextL18c);
		}
	}
	
	////L19//////////////////////
	if(Board.isLevelL19==true){
		if(showBoxL19){
			Board.bPhysicalUserInterfaceON=false;
			bPhysicalUserInterfaceON=false;
			var sTextL19=" _______  NIVEL 19  ______";
			//GUI.Box(Rect (xrect_LEVEL, yrect_LEVEL, boxwidth_LEVEL, boxheight_LEVEL-100),sTextL19);
			GUI.Box(Rect (xrect_LEVEL_SMALL, yrect_LEVEL_SMALL, boxwidth_LEVEL_SMALL, boxheight_LEVEL_SMALL),sTextL19);
			//if (GUI.Button(Rect(xrect_LEVEL+120,yrect_LEVEL+150,100,35),"OK")){
				resumeBoxL19();
			//}
		}
		
		if(!showBoxL19){
			var sTextL19b=Avatar.iObjRecolCounter+" de 2 sillas recolectadas";
			GUI.Box(Rect (25, 25, 250, 50),sTextL19b);
		}
		
		if(!showBoxL19){
			var sTextL19c="Ubicar un túnel: tecla 'T'\n\nTúneles disponibles: "+Board.iTunelsLeft+".";
			Board.iTunelsLeft=Board.iLevelTunelMax+1-Board.iTunelsCounter;
			GUI.Box(Rect (25, 150, 240, 100),sTextL19c);
		}
	}
	
	////L20//////////////////////
	if(Board.isLevelL20==true){
		if(showBoxL20){
			Board.bPhysicalUserInterfaceON=false;
			bPhysicalUserInterfaceON=false;
			var sTextL20a=" _______  NIVEL 20  ______";
			//GUI.Box(Rect (xrect_LEVEL, yrect_LEVEL, boxwidth_LEVEL, boxheight_LEVEL-100),sTextL20a);
			GUI.Box(Rect (xrect_LEVEL_SMALL, yrect_LEVEL_SMALL, boxwidth_LEVEL_SMALL, boxheight_LEVEL_SMALL),sTextL20a);
			//if (GUI.Button(Rect(xrect_LEVEL+120,yrect_LEVEL+150,100,35),"OK")){
				resumeBoxL20();
			//}
		}
	}
		
	//Missatges d'error
	var xrect_ERR=Screen.width-boxwidth_AYUDA-20;
	var yrect_ERR=boxheight_AYUDA+20;
	var boxwidth_ERR=250;
	var boxheight_ERR=94;
	
	if(showFallMsg){
		//var textERR="_______  ERROR!  _______\n\nEl avatar cayó al vacío!\n\nReiniciando nivel...";
		var textERR="El avatar cayó al vacío!\n\nReiniciando nivel...";
		GUI.Box(Rect (xrect_ERR, yrect_ERR, boxwidth_ERR, boxheight_ERR),textERR);
	} 
	
	if(showTunnelErrorMsg){
		//var textERR2="_______  ERROR!  _______\n\nEl avatar se encuentra en una\ncasilla prohibida!\n\nReiniciando nivel...";
		var textERR2="El avatar se encuentra en una\ncasilla prohibida!\n\n Reiniciando nivel...";
		GUI.Box(Rect (xrect_ERR, yrect_ERR+50, boxwidth_ERR+40, boxheight_ERR+20),textERR2);
	}   
	
	if(showRunnerErrorMsg){
		//var textERR3="_______  ERROR!  _______\n\nDemasiado tarde!\n\nReiniciando nivel...";
		var textERR3="Demasiado tarde!\n\nReiniciando nivel...";
		GUI.Box(Rect (xrect_ERR, yrect_ERR, boxwidth_ERR, boxheight_ERR),textERR3);
	}		 
	
	//Muting:
	/*if(isMuted){
			labelMuted="Volumen OFF";
	} else if(!isMuted){
			labelMuted="Volumen ON";
	}*/
	
	////MENU GENERAL INICIAL
	boxwidth_START=620;
	boxheight_START=253;
	xrect_START=Screen.width/4;
	yrect_START=Screen.height/4;
	if(showStartMenu && Board.isLevelL1){
		Screen.showCursor = true;
		bPhysicalUserInterfaceON=false;
		//GUI.Window (0, Rect (xrect_START, yrect_START, boxwidth_START, boxheight_START), DoMyWindow, imatgeInici);
		showStartMenu=false;
	}
	
	////MENU GENERAL
	var boxwidth_MG=300;
	var boxheight_MG=500;
	var xrect_MG=(Screen.width/3)+70;
	var yrect_MG=boxheight_MG/10;
	if(showGeneralMenu && !showStartMenu){
		Screen.showCursor = true;
		bPhysicalUserInterfaceON=false;
		
		//Recuadre:
		GUI.Label (Rect (xrect_MG, yrect_MG, boxwidth_MG, boxheight_MG), "          Menú principal");
		
		if (GUI.Button(Rect(xrect_MG+50,yrect_MG+100,200,50),"Continuar (o M)")){
			resume();
		}
		
		if (GUI.Button(Rect(xrect_MG+50,yrect_MG+200,200,50),"Reiniciar nivel")){
			restart();
		} 
		
		if (GUI.Button(Rect(xrect_MG+50,yrect_MG+300,200,50),"Saltar nivel")){
			showGeneralMenu=false;
			if(Board.isLevelL1){
				goToNextLevelL2();
			} else if(Board.isLevelL2){
				goToNextLevelL3();
			} else if(Board.isLevelL3){
				goToNextLevelL4();
			} else if(Board.isLevelL4){
				goToNextLevelL5();
			} else if(Board.isLevelL5){
				goToNextLevelL6();
			} else if(Board.isLevelL6){
				goToNextLevelL7();
			} else if(Board.isLevelL7){
				goToNextLevelL8();
			} else if(Board.isLevelL8){
				goToNextLevelL9();
			} else if(Board.isLevelL9){
				goToNextLevelL10();
			} else if(Board.isLevelL10){
				goToNextLevelL11();
			} else if(Board.isLevelL11){
				goToNextLevelL12();
			} else if(Board.isLevelL12){
				goToNextLevelL13();
			}  else if(Board.isLevelL13){
				goToNextLevelL14();
			} else if(Board.isLevelL14){
				goToNextLevelL15();
			} else if(Board.isLevelL15){
				goToNextLevelL16();
			} else if(Board.isLevelL16){
				goToNextLevelL17();
			} else if(Board.isLevelL17){
				goToNextLevelL18();
			} else if(Board.isLevelL18){
				goToNextLevelL19();
			} else if(Board.isLevelL19){
				goToNextLevelL20();
			}else if(Board.isLevelL20){
				goToNextLevelL1();
			}
			
			
		} 
		
		/*if (GUI.Button(Rect(xrect_MG+50,yrect_MG+400,200,50),labelMuted)){
			if(isMuted){
				GameObject.Find("Board").audio.volume = 1.0;
				isMuted=false;
			} else if(!isMuted){
				GameObject.Find("Board").audio.volume = 0.0;
				isMuted=true;
			}
		}*/
		
		if (GUI.Button(Rect(xrect_MG+50,yrect_MG+400,200,50),"Salir")){
			Application.Quit();
		}
			
	}



	
}

// Make the contents of the window
function DoMyWindow (windowID : int) {
	 if (GUI.Button(Rect(Screen.width/4,Screen.height/4,220,50), "Empieza el ascenso...")){
		showStartMenu=false;
	}    
}

static function calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar):char{
	
	sP_Avatar=sP_Avatar.ToString();
	var sWallModifier="";
	var cCode:char;
	
	if(sP_Avatar=="P1"){
		sWallModifier=Board.sP1_modif;
	} else if(sP_Avatar=="P2"){
		sWallModifier=Board.sP2_modif;	
	} else if(sP_Avatar=="P3"){
		sWallModifier=Board.sP3_modif;	
	} else if(sP_Avatar=="P4"){
		sWallModifier=Board.sP4_modif;	
	} else if(sP_Avatar=="P5"){
		sWallModifier=Board.sP5_modif;	
	} else if(sP_Avatar=="P6"){
		sWallModifier=Board.sP6_modif;	
	} else if(sP_Avatar=="P7"){
		sWallModifier=Board.sP7_modif;	
	} else if(sP_Avatar=="P8"){
		sWallModifier=Board.sP8_modif;	
	} else if(sP_Avatar=="P9"){
		sWallModifier=Board.sP9_modif;	
	} else if(sP_Avatar=="P10"){
		sWallModifier=Board.sP10_modif;	
	} else if(sP_Avatar=="P11"){
		sWallModifier=Board.sP11_modif;	
	} else if(sP_Avatar=="P12"){
		sWallModifier=Board.sP12_modif;	
	} else if(sP_Avatar=="P13"){
		sWallModifier=Board.sP13_modif;	
	} else if(sP_Avatar=="P14"){
		sWallModifier=Board.sP14_modif;	
	} else if(sP_Avatar=="P15"){
		sWallModifier=Board.sP15_modif;	
	} else if(sP_Avatar=="P16"){
		sWallModifier=Board.sP16_modif;	
	} else if(sP_Avatar=="P17"){
		sWallModifier=Board.sP17_modif;	
	} else if(sP_Avatar=="P18"){
		sWallModifier=Board.sP18_modif;	
	} else if(sP_Avatar=="P19"){
		sWallModifier=Board.sP19_modif;	
	}
	
	//e.g. "111-111"
	if(sW_Avatar=="W1" && sS_Avatar=="SA"){
		cCode=sWallModifier[0];
	} else if(sW_Avatar=="W2" && sS_Avatar=="SA"){
		cCode=sWallModifier[1];
	} else if(sW_Avatar=="W3" && sS_Avatar=="SA"){
		cCode=sWallModifier[2];
	} else if(sW_Avatar=="W1" && sS_Avatar=="SB"){
		cCode=sWallModifier[4];
	} else if(sW_Avatar=="W2" && sS_Avatar=="SB"){
		cCode=sWallModifier[5];
	} else if(sW_Avatar=="W3" && sS_Avatar=="SB"){
		cCode=sWallModifier[6];
	}
	return cCode;
}

function calculateAvatarDestination(sP_Avatar,sW_Avatar,sS_Avatar,sD_Avatar):String{
	
	sP_Avatar=sP_Avatar.ToString();
	sW_Avatar=sW_Avatar.ToString();
	sS_Avatar=sS_Avatar.ToString();
	sD_Avatar=sD_Avatar.ToString();
	var sDestinationStep="";
			
	////////////////////
	/////////W1/////////
	////////////////////
	if(sW_Avatar=="W1" && (sS_Avatar=="SA" || sS_Avatar=="SB") && sD_Avatar=="DN"){
		GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
		if(Board.isLevelL1){
			showBoxForbidden=true;
		} else if(Board.isLevelL4 || Board.isLevelL5 || Board.isLevelL6 || Board.isLevelL13 || Board.isLevelL14 || Board.isLevelL15 || Board.isLevelL16 || Board.isLevelL17 || Board.isLevelL18 ||  Board.isLevelL19){
			isRecolectionPossible=false;
		}
		cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
		return sP_Avatar;
	} else if(sW_Avatar=="W1" && sS_Avatar=="SA" && sD_Avatar=="DS"){
		//la row queda igual
		iLC_AvatarCol=iLC_AvatarCol-1;
		sDestinationStep=Board.aSteps[iLC_AvatarRow][iLC_AvatarCol];
		//cWallModifier=calculateWallModificator(sDestinationStep,sW_Avatar,sS_Avatar);
		if(sDestinationStep!="none"){//perque no peti quan surt del board gran (parche)
			cWallModifier=calculateWallModificator(sDestinationStep,sW_Avatar,sS_Avatar);
		} else {
			cWallModifier=zero[0];
		}
		//Reversio del canvi si no hi ha step:
		if(sDestinationStep=="none"
		|| cWallModifier=='P' 
		|| cWallModifier=='0'
		|| cWallModifier=='A'
		|| cWallModifier=='B'
		|| cWallModifier=='C'){
			if(cWallModifier!='0'){
				GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
			} else if(cWallModifier=='0'){
				return sDestinationStep;
			} else {
				return sP_Avatar;
			}
			if ((cWallModifier=='A' || cWallModifier=='B' || cWallModifier=='C') && Board.isLevelL1){
				showBoxForbiddenGate=true;
			} 
			iLC_AvatarCol=iLC_AvatarCol+1;
			//La row queda igual
			return sP_Avatar;
		} else {
			return sDestinationStep;
		}
	} else if(sW_Avatar=="W1" && sS_Avatar=="SB" && sD_Avatar=="DS"){
		iLC_AvatarRow=iLC_AvatarRow+1;
		sDestinationStep=Board.aSteps[iLC_AvatarRow][iLC_AvatarCol];
		if(sDestinationStep!="none"){//perque no peti quan surt del board gran (parche)
			cWallModifier=calculateWallModificator(sDestinationStep,sW_Avatar,sS_Avatar);
		} else {
			cWallModifier=zero[0];
		}
		//Reversi del canvi si no hi ha step:
		if(sDestinationStep=="none"
		|| cWallModifier=='P' 
		|| cWallModifier=='0'
		|| cWallModifier=='A'
		|| cWallModifier=='B'
		|| cWallModifier=='C'){
			if(cWallModifier!='0'){
				GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
			} else if(cWallModifier=='0'){
				return sDestinationStep;
			} else {
				return sP_Avatar;
			}
			if ((cWallModifier=='A' || cWallModifier=='B' || cWallModifier=='C') && Board.isLevelL1){
				showBoxForbiddenGate=true;
			} 
			iLC_AvatarRow=iLC_AvatarRow-1;
			//La row queda igual
			return sP_Avatar;
		} else {
			return sDestinationStep;
		}
	} else if(sW_Avatar=="W1" && sS_Avatar=="SA" && sD_Avatar=="DO"){
		//la col queda igual
		iLC_AvatarRow=iLC_AvatarRow-1;
		sDestinationStep=Board.aSteps[iLC_AvatarRow][iLC_AvatarCol];
		if(sDestinationStep!="none"){//perqu no peti quan surt del board gran (parche)
			cWallModifier=calculateWallModificator(sDestinationStep,sW_Avatar,sS_Avatar);
		} else {
			cWallModifier=zero[0];
		}
		if(sDestinationStep=="none"
		|| cWallModifier=='P' 
		|| cWallModifier=='0'
		|| cWallModifier=='A'
		|| cWallModifier=='B'
		|| cWallModifier=='C'){
			iLC_AvatarRow=iLC_AvatarRow+1;
			if(cWallModifier!='0'){
				GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
			} else if(cWallModifier=='0'){
				return sDestinationStep;
			} else {
				return sP_Avatar;
			}
			if ((cWallModifier=='A' || cWallModifier=='B' || cWallModifier=='C') && Board.isLevelL1){
				showBoxForbiddenGate=true;
			} 
		} else {
			return sDestinationStep;
		}
	} else if(sW_Avatar=="W1" && sS_Avatar=="SA" && sD_Avatar=="DE"){
		GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
		if(Board.isLevelL1){
			showBoxForbidden=true;
		} else if(Board.isLevelL4 || Board.isLevelL5 || Board.isLevelL6 || Board.isLevelL13 || Board.isLevelL14 || Board.isLevelL15 || Board.isLevelL16 || Board.isLevelL17 || Board.isLevelL18 ||  Board.isLevelL19){
			isRecolectionPossible=false;
		}
		cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
		return sP_Avatar;
	} else if(sW_Avatar=="W1" && sS_Avatar=="SB" && sD_Avatar=="DE"){
		//la row queda igual
		iLC_AvatarCol=iLC_AvatarCol+1;
		sDestinationStep=Board.aSteps[iLC_AvatarRow][iLC_AvatarCol];
		if(sDestinationStep!="none"){//perqu no peti quan surt del board gran (parche)
			cWallModifier=calculateWallModificator(sDestinationStep,sW_Avatar,sS_Avatar);
		} else {
			cWallModifier=zero[0];
		}
		//Reversi del canvi si no hi ha step:
		if(sDestinationStep=="none"
		|| cWallModifier=='P' 
		|| cWallModifier=='0'
		|| cWallModifier=='A'
		|| cWallModifier=='B'
		|| cWallModifier=='C'){
			if(cWallModifier!='0'){
				GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
			} else if(cWallModifier=='0'){
				return sDestinationStep;
			} else {
				return sP_Avatar;
			}
			if ((cWallModifier=='A' || cWallModifier=='B' || cWallModifier=='C') && Board.isLevelL1){
				showBoxForbiddenGate=true;
			} 
			iLC_AvatarCol=iLC_AvatarCol-1;
			//La col queda igual
			return sP_Avatar;
		} else {
			return sDestinationStep;
		}	
	} else if(sW_Avatar=="W1" && sS_Avatar=="SB" && sD_Avatar=="DO"){
		GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
		if(Board.isLevelL1){
			showBoxForbidden=true;
		} else if(Board.isLevelL4 || Board.isLevelL5 || Board.isLevelL6 || Board.isLevelL13 || Board.isLevelL14 || Board.isLevelL15 || Board.isLevelL16 || Board.isLevelL17 || Board.isLevelL18 ||  Board.isLevelL19){
			isRecolectionPossible=false;
		}
		cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
		return sP_Avatar;
		
		
	////////////////////
	/////////W2/////////
	////////////////////
	} else if(sW_Avatar=="W2" && sS_Avatar=="SA" && sD_Avatar=="DN"){
		iLC_AvatarCol=iLC_AvatarCol+1;
		//La row queda igual
		sDestinationStep=Board.aSteps[iLC_AvatarRow][iLC_AvatarCol];
		if(sDestinationStep!="none"){//perqu no peti quan surt del board gran (parche)
			cWallModifier=calculateWallModificator(sDestinationStep,sW_Avatar,sS_Avatar);
		} else {
			cWallModifier=zero[0];
		}
		//Reversi del canvi si no hi ha step:
		if(sDestinationStep=="none"
		|| cWallModifier=='P' 
		|| cWallModifier=='0'
		|| cWallModifier=='A'
		|| cWallModifier=='B'
		|| cWallModifier=='C'){
			if(cWallModifier!='0'){
				GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
			} else if(cWallModifier=='0'){
				return sDestinationStep;
			} else {
				return sP_Avatar;
			}
			if ((cWallModifier=='A' || cWallModifier=='B' || cWallModifier=='C') && Board.isLevelL1){
				showBoxForbiddenGate=true;
			} 
			iLC_AvatarCol=iLC_AvatarCol-1;
			//La row queda igual
			return sP_Avatar;
		} else {
			return sDestinationStep;
		}if ((cWallModifier=='A' || cWallModifier=='B' || cWallModifier=='C') && Board.isLevelL1){
				showBoxForbiddenGate=true;
			} 
	} else if(sW_Avatar=="W2" && sS_Avatar=="SB" && sD_Avatar=="DN"){
		GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
		if(Board.isLevelL1){
			showBoxForbidden=true;
		} else if(Board.isLevelL4 || Board.isLevelL5 || Board.isLevelL6 || Board.isLevelL13 || Board.isLevelL14 || Board.isLevelL15 || Board.isLevelL16 || Board.isLevelL17 || Board.isLevelL18 ||  Board.isLevelL19){
			isRecolectionPossible=false;
		}
		cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
		return sP_Avatar;
	
	} else if(sW_Avatar=="W2" && sS_Avatar=="SA" && sD_Avatar=="DS"){
		GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
		if(Board.isLevelL1){
			showBoxForbidden=true;
		} else if(Board.isLevelL4 || Board.isLevelL5 || Board.isLevelL6 || Board.isLevelL13 || Board.isLevelL14 || Board.isLevelL15 || Board.isLevelL16 || Board.isLevelL17 || Board.isLevelL18 ||  Board.isLevelL19){
			isRecolectionPossible=false;
		}
		cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
		return sP_Avatar;
		
	} else if(sW_Avatar=="W2" && sS_Avatar=="SB" && sD_Avatar=="DS"){
		iLC_AvatarCol=iLC_AvatarCol-1;
		sDestinationStep=Board.aSteps[iLC_AvatarRow][iLC_AvatarCol];
		if(sDestinationStep!="none"){//perqu no peti quan surt del board gran (parche)
			cWallModifier=calculateWallModificator(sDestinationStep,sW_Avatar,sS_Avatar);
		} else {
			cWallModifier=zero[0];
		}
		//Reversi del canvi si no hi ha step:
		if(sDestinationStep=="none"
		|| cWallModifier=='P' 
		|| cWallModifier=='0'
		|| cWallModifier=='A'
		|| cWallModifier=='B'
		|| cWallModifier=='C'){
			if(cWallModifier!='0'){
				GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
			} else if(cWallModifier=='0'){
				return sDestinationStep;
			} else {
				return sP_Avatar;
			}
			if ((cWallModifier=='A' || cWallModifier=='B' || cWallModifier=='C') && Board.isLevelL1){
				showBoxForbiddenGate=true;
			} 
			iLC_AvatarCol=iLC_AvatarCol+1;
			//La row queda igual
			return sP_Avatar;
		} else {
			return sDestinationStep;
		}
		
	} else if(sW_Avatar=="W2" && sS_Avatar=="SA" && sD_Avatar=="DO"){
		iLC_AvatarRow=iLC_AvatarRow-1;
		iLC_AvatarCol=iLC_AvatarCol+1;
		sDestinationStep=Board.aSteps[iLC_AvatarRow][iLC_AvatarCol];
		if(sDestinationStep!="none"){//perqu no peti quan surt del board gran (parche)
			cWallModifier=calculateWallModificator(sDestinationStep,sW_Avatar,sS_Avatar);
		} else {
			cWallModifier=zero[0];
		}
		//Reversi del canvi si no hi ha step:
		if(sDestinationStep=="none"
		|| cWallModifier=='P' 
		|| cWallModifier=='0'
		|| cWallModifier=='A'
		|| cWallModifier=='B'
		|| cWallModifier=='C'){
			if(cWallModifier!='0'){
				GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
			} else if(cWallModifier=='0'){
				return sDestinationStep;
			} else {
				return sP_Avatar;
			}
			if ((cWallModifier=='A' || cWallModifier=='B' || cWallModifier=='C') && Board.isLevelL1){
				showBoxForbiddenGate=true;
			} 
			iLC_AvatarRow=iLC_AvatarRow+1;
			iLC_AvatarCol=iLC_AvatarCol-1;
			//La row queda igual
			return sP_Avatar;
		} else {
			return sDestinationStep;
		}
		
	} else if(sW_Avatar=="W2" && sS_Avatar=="SB" && sD_Avatar=="DO"){
		GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
		if(Board.isLevelL1){
			showBoxForbidden=true;
		} else if(Board.isLevelL4 || Board.isLevelL5 || Board.isLevelL6 || Board.isLevelL13 || Board.isLevelL14 || Board.isLevelL15 || Board.isLevelL16 || Board.isLevelL17 || Board.isLevelL18 ||  Board.isLevelL19){
			isRecolectionPossible=false;
		}
		cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
		return sP_Avatar;
		
	} else if(sW_Avatar=="W2" && sS_Avatar=="SA" && sD_Avatar=="DE"){
		GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
		if(Board.isLevelL1){
			showBoxForbidden=true;
		} else if(Board.isLevelL4 || Board.isLevelL5 || Board.isLevelL6 || Board.isLevelL13 || Board.isLevelL14 || Board.isLevelL15 || Board.isLevelL16 || Board.isLevelL17 || Board.isLevelL18 ||  Board.isLevelL19){
			isRecolectionPossible=false;
		}
		cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
		return sP_Avatar;
	} else if(sW_Avatar=="W2" && sS_Avatar=="SB" && sD_Avatar=="DE"){
		iLC_AvatarRow=iLC_AvatarRow+1;
		iLC_AvatarCol=iLC_AvatarCol-1;
		sDestinationStep=Board.aSteps[iLC_AvatarRow][iLC_AvatarCol];
		if(sDestinationStep!="none"){//perqu no peti quan surt del board gran (parche)
			cWallModifier=calculateWallModificator(sDestinationStep,sW_Avatar,sS_Avatar);
		} else {
			cWallModifier=zero[0];
		}
		//Reversi del canvi si no hi ha step:
		if(sDestinationStep=="none"
		|| cWallModifier=='P' 
		|| cWallModifier=='0'
		|| cWallModifier=='A'
		|| cWallModifier=='B'
		|| cWallModifier=='C'){
			if(cWallModifier!='0'){
				GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
			} else if(cWallModifier=='0'){
				return sDestinationStep;
			} else {
				return sP_Avatar;
			}
			if ((cWallModifier=='A' || cWallModifier=='B' || cWallModifier=='C') && Board.isLevelL1){
				showBoxForbiddenGate=true;
			} 
			iLC_AvatarRow=iLC_AvatarRow-1;
			iLC_AvatarCol=iLC_AvatarCol+1;
			//La row queda igual
			return sP_Avatar;
		} else {
			return sDestinationStep;
		}	
		
		
	////////////////////
	/////////W3/////////
	////////////////////
	} else if(sW_Avatar=="W3" && sS_Avatar=="SA" && sD_Avatar=="DN"){
	
		iLC_AvatarRow=iLC_AvatarRow+1;
		sDestinationStep=Board.aSteps[iLC_AvatarRow][iLC_AvatarCol];
		
		if(sDestinationStep!="none"){//perqu no peti quan surt del board gran (parche)
			cWallModifier=calculateWallModificator(sDestinationStep,sW_Avatar,sS_Avatar);
		} else {
			cWallModifier=zero[0];
		}
		
		//Reversi del canvi si no hi ha step:
		if(sDestinationStep=="none"
		|| cWallModifier=='P' 
		|| cWallModifier=='0'
		|| cWallModifier=='A'
		|| cWallModifier=='B'
		|| cWallModifier=='C'){
			if(cWallModifier!='0'){
				GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
			} else if(cWallModifier=='0'){
				return sDestinationStep;
			} else {
				return sP_Avatar;
			}
			if ((cWallModifier=='A' || cWallModifier=='B' || cWallModifier=='C') && Board.isLevelL1){
				showBoxForbiddenGate=true;
			} 
			iLC_AvatarRow=iLC_AvatarRow-1;
			return sP_Avatar;
		} else {
			return sDestinationStep;
		}
	} else if(sW_Avatar=="W3" && sS_Avatar=="SB" && sD_Avatar=="DN"){
		GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
		if(Board.isLevelL1){
			showBoxForbidden=true;
		} else if(Board.isLevelL4 || Board.isLevelL5 || Board.isLevelL6 || Board.isLevelL13 || Board.isLevelL14 || Board.isLevelL15 || Board.isLevelL16 || Board.isLevelL17 || Board.isLevelL18 ||  Board.isLevelL19){
			isRecolectionPossible=false;
		}
		cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
		return sP_Avatar;		
	} else if(sW_Avatar=="W3" && sS_Avatar=="SB" && sD_Avatar=="DE"){
		GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
		if(Board.isLevelL1){
			showBoxForbidden=true;
		} else if(Board.isLevelL4 || Board.isLevelL5 || Board.isLevelL6 || Board.isLevelL13 || Board.isLevelL14 || Board.isLevelL15 || Board.isLevelL16 || Board.isLevelL17 || Board.isLevelL18 ||  Board.isLevelL19){
			isRecolectionPossible=false;
		}
		cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
		return sP_Avatar;
	} else if(sW_Avatar=="W3" && sS_Avatar=="SA" && sD_Avatar=="DS"){
		GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
		if(Board.isLevelL1){
			showBoxForbidden=true;
		} else if(Board.isLevelL4 || Board.isLevelL5 || Board.isLevelL6 || Board.isLevelL13 || Board.isLevelL14 || Board.isLevelL15 || Board.isLevelL16 || Board.isLevelL17 || Board.isLevelL18 ||  Board.isLevelL19){
			isRecolectionPossible=false;
		}
		cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
		return sP_Avatar;
	}  else if(sW_Avatar=="W3" && sS_Avatar=="SA" && sD_Avatar=="DO"){
		GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
		if(Board.isLevelL1){
			showBoxForbidden=true;
		} else if(Board.isLevelL4 || Board.isLevelL5 || Board.isLevelL6 || Board.isLevelL13 || Board.isLevelL14 || Board.isLevelL15 || Board.isLevelL16 || Board.isLevelL17 || Board.isLevelL18 ||  Board.isLevelL19){
			isRecolectionPossible=false;
		}
		cWallModifier=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
		return sP_Avatar;
	}  else if(sW_Avatar=="W3" && sS_Avatar=="SA" && sD_Avatar=="DE"){
		//La row queda igual
		iLC_AvatarCol=iLC_AvatarCol-1;
		iLC_AvatarRow=iLC_AvatarRow+1;
		sDestinationStep=Board.aSteps[iLC_AvatarRow][iLC_AvatarCol];
		if(sDestinationStep!="none"){//perqu no peti quan surt del board gran (parche)
			cWallModifier=calculateWallModificator(sDestinationStep,sW_Avatar,sS_Avatar);
		} else {
			cWallModifier=zero[0];
		}
		//Reversi del canvi si no hi ha step:
		if(sDestinationStep=="none"
		|| cWallModifier=='P' 
		|| cWallModifier=='0'
		|| cWallModifier=='A'
		|| cWallModifier=='B'
		|| cWallModifier=='C'){
			if(cWallModifier!='0'){
				GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
			} else if(cWallModifier=='0'){
				return sDestinationStep;
			} else {
				return sP_Avatar;
			}
			if ((cWallModifier=='A' || cWallModifier=='B' || cWallModifier=='C') && Board.isLevelL1){
				showBoxForbiddenGate=true;
			} 
			iLC_AvatarCol=iLC_AvatarCol+1;
			iLC_AvatarRow=iLC_AvatarRow-1;
			//La row queda igual
			return sP_Avatar;
		} else {
			return sDestinationStep;
		}
	} else if(sW_Avatar=="W3" && sS_Avatar=="SB" && sD_Avatar=="DS"){
		//La row queda igual
		iLC_AvatarRow=iLC_AvatarRow-1;
		sDestinationStep=Board.aSteps[iLC_AvatarRow][iLC_AvatarCol];
		if(sDestinationStep!="none"){//perqu no peti quan surt del board gran (parche)
			cWallModifier=calculateWallModificator(sDestinationStep,sW_Avatar,sS_Avatar);
		} else {
			cWallModifier=zero[0];
		}
		//Reversi del canvi si no hi ha step:
		if(sDestinationStep=="none"
		|| cWallModifier=='P' 
		|| cWallModifier=='0'
		|| cWallModifier=='A'
		|| cWallModifier=='B'
		|| cWallModifier=='C'){
			if(cWallModifier!='0'){
				GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
			} else if(cWallModifier=='0'){
				return sDestinationStep;
			} else {
				return sP_Avatar;
			}
			if ((cWallModifier=='A' || cWallModifier=='B' || cWallModifier=='C') && Board.isLevelL1){
				showBoxForbiddenGate=true;
			} 
			iLC_AvatarRow=iLC_AvatarRow+1;
			//La row queda igual
			return sP_Avatar;
		} else {
			return sDestinationStep;
		}
	}  else if(sW_Avatar=="W3" && sS_Avatar=="SB" && sD_Avatar=="DO"){
		//print("iLC_AvatarCol: "+iLC_AvatarCol);
		//print("iLC_AvatarRow: "+iLC_AvatarRow);
		iLC_AvatarCol=iLC_AvatarCol+1;
		iLC_AvatarRow=iLC_AvatarRow-1;
		sDestinationStep=Board.aSteps[iLC_AvatarRow][iLC_AvatarCol];
		if(sDestinationStep!="none"){//perqu no peti quan surt del board gran (parche)
			cWallModifier=calculateWallModificator(sDestinationStep,sW_Avatar,sS_Avatar);
		} else {
			cWallModifier=zero[0];
		}
		//Reversi del canvi si no hi ha step:
		if(sDestinationStep=="none"
		|| cWallModifier=='P' 
		|| cWallModifier=='0'
		|| cWallModifier=='A'
		|| cWallModifier=='B'
		|| cWallModifier=='C'){
			if(cWallModifier!='0'){
				GameObject.Find("Board").audio.PlayOneShot(soundForbidden);
			} else if(cWallModifier=='0'){
				return sDestinationStep;
			} else {
				return sP_Avatar;
			}
			if ((cWallModifier=='A' || cWallModifier=='B' || cWallModifier=='C') && Board.isLevelL1){
				showBoxForbiddenGate=true;
			} 
			iLC_AvatarCol=iLC_AvatarCol-1;
			iLC_AvatarRow=iLC_AvatarRow+1;
			//La row queda igual
			return sP_Avatar;
		} else {
			return sDestinationStep;
		}
	}
}

function moveAvatarTo(goAvatar,sPTo,sWTo,sSTo){
    
	v3Avatar=goAvatar.transform.position;//Respecte Space.World
	sPTo=sPTo.ToString();
	sWTo=sWTo.ToString();
	sSTo=sSTo.ToString();
	
	//1- Traslacio del centre de l'avatar: 
	if(sSTo=="SA"){
		goAvatar.transform.Translate(GameObject.Find("/Board/"+sPTo+"/"+sWTo+"SA").transform.position-v3Avatar,Space.World);    
	} else if(sSTo=="SB"){
		goAvatar.transform.Translate(GameObject.Find("/Board/"+sPTo+"/"+sWTo+"SA/"+sWTo+"SB").transform.position-v3Avatar,Space.World);
	}

	if(sD_Avatar=="DN"){
		if(sW_Avatar=="W1"){
			if(sS_Avatar=="SA"){
				goAvatar.transform.eulerAngles=Vector3(0,270,0);
			} else if(sS_Avatar=="SB"){
				goAvatar.transform.eulerAngles=Vector3(0,180,180);			
			}
		} else if(sW_Avatar=="W2"){
			if(sS_Avatar=="SA"){
				goAvatar.transform.eulerAngles=Vector3(90,270,0);
			} else if(sS_Avatar=="SB"){
				goAvatar.transform.eulerAngles=Vector3(90,270,180);			
			}
		} else if(sW_Avatar=="W3"){
			if(sS_Avatar=="SA"){
				goAvatar.transform.eulerAngles=Vector3(90,270,270);
			} else if(sS_Avatar=="SB"){
				goAvatar.transform.eulerAngles=Vector3(90,270,90);			
			}
		} 		
	} else if(sD_Avatar=="DE"){
		if(sW_Avatar=="W1"){
			if(sS_Avatar=="SA"){
				goAvatar.transform.eulerAngles=Vector3(0,0,0);
			} else if(sS_Avatar=="SB"){
				goAvatar.transform.eulerAngles=Vector3(0,270,180);			
			}
		} else if(sW_Avatar=="W2"){
			if(sS_Avatar=="SA"){
				goAvatar.transform.eulerAngles=Vector3(0,0,90);
			} else if(sS_Avatar=="SB"){
				goAvatar.transform.eulerAngles=Vector3(0,0,270);			
			}
		} else if(sW_Avatar=="W3"){
			if(sS_Avatar=="SA"){
				goAvatar.transform.eulerAngles=Vector3(0,90,90);
			} else if(sS_Avatar=="SB"){
				goAvatar.transform.eulerAngles=Vector3(0,90,270);			
			}
		} 
	} else if(sD_Avatar=="DS"){
		if(sW_Avatar=="W1"){
			if(sS_Avatar=="SA"){
				goAvatar.transform.eulerAngles=Vector3(0,90,0);
			} else if(sS_Avatar=="SB"){
				goAvatar.transform.eulerAngles=Vector3(0,0,180);			
			}
		} else if(sW_Avatar=="W2"){
			if(sS_Avatar=="SA"){
				goAvatar.transform.eulerAngles=Vector3(270,90,0);
			} else if(sS_Avatar=="SB"){
				goAvatar.transform.eulerAngles=Vector3(270,90,180);			
			}
		} else if(sW_Avatar=="W3"){
			if(sS_Avatar=="SA"){
				goAvatar.transform.eulerAngles=Vector3(270,180,0);
			} else if(sS_Avatar=="SB"){
				goAvatar.transform.eulerAngles=Vector3(270,180,180);			
			}
		} 
	} else if(sD_Avatar=="DO"){
		if(sW_Avatar=="W1"){
			if(sS_Avatar=="SA"){
				goAvatar.transform.eulerAngles=Vector3(0,180,0);
			} else if(sS_Avatar=="SB"){
				goAvatar.transform.eulerAngles=Vector3(0,90,180);			
			}		
		} else if(sW_Avatar=="W2"){
			if(sS_Avatar=="SA"){
				goAvatar.transform.eulerAngles=Vector3(0,180,270);
			} else if(sS_Avatar=="SB"){
				goAvatar.transform.eulerAngles=Vector3(0,180,90);			
			}
		} else if(sW_Avatar=="W3"){
			if(sS_Avatar=="SA"){
				goAvatar.transform.eulerAngles=Vector3(0,270,270);
			} else if(sS_Avatar=="SB"){
				goAvatar.transform.eulerAngles=Vector3(0,270,90);			
			}
		} 
	}
	
	
}

static function getLevelConfRow(sP_Avatar):int{
	//Veure taula matri nivells (Excel del Google Docs). 

	if(sP_Avatar=="P1"){
		return 3;
	} else if(sP_Avatar=="P2"){
		return 4;
	} else if(sP_Avatar=="P3"){
		return 3;
	} else if(sP_Avatar=="P4"){
		return 2;
	} else if(sP_Avatar=="P5"){
		return 4;
	} else if(sP_Avatar=="P6"){
		return 2;
	} else if(sP_Avatar=="P7"){
		return 3;
	} else if(sP_Avatar=="P7"){
		return 3;
	} else if(sP_Avatar=="P8"){
		return 1;
	} else if(sP_Avatar=="P9"){
		return 1;
	} else if(sP_Avatar=="P10"){
		return 2;
	} else if(sP_Avatar=="P11"){
		return 1;
	} else if(sP_Avatar=="P12"){
		return 5;
	} else if(sP_Avatar=="P13"){
		return 5;
	} else if(sP_Avatar=="P14"){
		return 4;
	} else if(sP_Avatar=="P15"){
		return 3;
	} else if(sP_Avatar=="P16"){
		return 2;
	} else if(sP_Avatar=="P17"){
		return 5;
	} else if(sP_Avatar=="P18"){
		return 4;
	} else if(sP_Avatar=="P19"){
		return 3;
	} else {
		return 0;
	}
}

static function getLevelConfCol(sP_Avatar):int{
	//Veure taula matriu nivells (Excel del Google Docs).
	
	if(sP_Avatar=="P1"){
		return 3;
	} else if(sP_Avatar=="P2"){
		return 2;
	} else if(sP_Avatar=="P3"){
		return 2;
	} else if(sP_Avatar=="P4"){
		return 3;
	} else if(sP_Avatar=="P5"){
		return 1;
	} else if(sP_Avatar=="P6"){
		return 2;
	} else if(sP_Avatar=="P7"){
		return 1;
	} else if(sP_Avatar=="P8"){
		return 3;
	} else if(sP_Avatar=="P9"){
		return 4;
	} else if(sP_Avatar=="P10"){
		return 4;
	} else if(sP_Avatar=="P11"){
		return 5;
	} else if(sP_Avatar=="P12"){
		return 1;
	} else if(sP_Avatar=="P13"){
		return 2;
	} else if(sP_Avatar=="P14"){
		return 3;
	} else if(sP_Avatar=="P15"){
		return 4;
	} else if(sP_Avatar=="P16"){
		return 5;
	} else if(sP_Avatar=="P17"){
		return 3;
	} else if(sP_Avatar=="P18"){
		return 4;
	} else if(sP_Avatar=="P19"){
		return 5;
	} else {
		return 0;
	}
}

function errorTunelFunction(){
	bPhysicalUserInterfaceON=false;
	Board.iTunelsCounter=1;
	Board.iLevelTunelMax=2;
	yield WaitForSeconds(2.0);
	GameObject.Find("Board").audio.PlayOneShot(soundErrorTunel);
	showTunnelErrorMsg=true;
	yield WaitForSeconds(4.0);
	Board.reloadPresentLevel();
	showTunnelErrorMsg=false;
	bTurnONforbTunnel=false;
	bPhysicalUserInterfaceON=true;
}

function errorFallingFunction(){
	bPhysicalUserInterfaceON=false;
	if(Board.isPORTALlevel){
		if(Board.isLevelL7){
			Board.iTunelsCounter=1;//no canviar
			Board.iLevelTunelMax=2;//si canviar
		} else if(Board.isLevelL8){
			Board.iTunelsCounter=1;//no canviar
			Board.iLevelTunelMax=3;//si canviar
		} else if(Board.isLevelL9){
			Board.iTunelsCounter=1;//no canviar
			Board.iLevelTunelMax=2;//si canviar
		}  else if(Board.isLevelL14){
			Board.iTunelsCounter=1;//no canviar
			Board.iLevelTunelMax=3;//si canviar
		} else if(Board.isLevelL15){
			Board.iTunelsCounter=1;//no canviar
			Board.iLevelTunelMax=3;//si canviar
		} else if(Board.isLevelL17){
			Board.iTunelsCounter=1;//no canviar
			Board.iLevelTunelMax=3;//si canviar
		} else if(Board.isLevelL18){
			Board.iTunelsCounter=1;//no canviar
			Board.iLevelTunelMax=4;//si canviar
		} else if(Board.isLevelL19){
			Board.iTunelsCounter=1;//no canviar
			Board.iLevelTunelMax=3;//si canviar
		}
	} /*else if(Board.isRECOLECTlevel){
		Board.iRunnerCounter=0;
		Board.iArrayCounter=0;
	} */else if(Board.isRUNNERlevel){
		bStopLevelRunner=true;
		iRunnerCounter=0;
		iArrayCounter=0;
	}
	GameObject.Find("Board").audio.PlayOneShot(soundErrorTunel);
	showFallMsg=true;
	yield WaitForSeconds(4.0);
	bStopLevelRunner=false;
	showFallMsg=false;
	bPhysicalUserInterfaceON=true;
	Board.reloadPresentLevel();
}

function doRunnerLevelL10(){
   if(!bStopLevelRunner){
		var sCodeModif:String;	
		wallModificatorsL10[0]="11A0";//PWS & newmodif
		wallModificatorsL10[1]="12A0";
		wallModificatorsL10[2]="13A0";
		wallModificatorsL10[3]="152A0";
		wallModificatorsL10[4]="143A0";
		wallModificatorsL10[5]="23A0";
		wallModificatorsL10[6]="31A0";
		wallModificatorsL10[7]="41A0";
		wallModificatorsL10[8]="102A0";
		wallModificatorsL10[9]="101A0";
		wallModificatorsL10[10]="153A0";
		wallModificatorsL10[11]="151A0";
		wallModificatorsL10[12]="141A0";
		wallModificatorsL10[13]="142A0";
		wallModificatorsL10[14]="21A0";
		wallModificatorsL10[15]="22A0";
		wallModificatorsL10[16]="32A0";
		wallModificatorsL10[17]="33A0";
		wallModificatorsL10[18]="42A0";
		wallModificatorsL10[19]="432A0";
		wallModificatorsL10[20]="103A0";

		if(iArrayCounter<wallModificatorsL10.length){	
		
			accumulatedDeltaTime=accumulatedDeltaTime+Time.deltaTime;
			
			if(accumulatedDeltaTime >= Board.fPeriodTimeL10){
			
				sCodeModif=wallModificatorsL10[iArrayCounter];
				
				if(sCodeModif.Length==4){
					Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],sCodeModif[3]);
					if("P"+sCodeModif[0]==Avatar.sP_Avatar 
					&& "W"+sCodeModif[1]==Avatar.sW_Avatar 
					&& "S"+sCodeModif[2]==Avatar.sS_Avatar){
						bStopLevelRunner=true;
						Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],'0');
						errorRunnerFunction();
					}
					GameObject.Find("Board").audio.PlayOneShot(soundRunnerStep);//FA COSES RARES!
				} else {
					Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],sCodeModif[4]);
					if(("P"+sCodeModif[0].ToString()+sCodeModif[1].ToString())==Avatar.sP_Avatar 
					&& "W"+sCodeModif[2]==Avatar.sW_Avatar 
					&& "S"+sCodeModif[3]==Avatar.sS_Avatar){
						bStopLevelRunner=true;
						Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],'0');
						errorRunnerFunction();
					}
					Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],sCodeModif[4]);
					GameObject.Find("Board").audio.PlayOneShot(soundRunnerStep);//FA COSES RARES!
				}
				iArrayCounter++;
				accumulatedDeltaTime=0;
			}
	
		}

	}
}

function doRunnerLevelL11(){
	if(!bStopLevelRunner){
		var sCodeModif:String;	
		wallModificatorsL11[0]="11A0";//P-W-S-newmodif
		wallModificatorsL11[1]="12A0";
		wallModificatorsL11[2]="13A0";
		wallModificatorsL11[3]="11B0";//P-W-S-newmodif
		wallModificatorsL11[4]="12B0";
		wallModificatorsL11[5]="13B0";
		wallModificatorsL11[6]="11A1";//P-W-S-newmodif
		wallModificatorsL11[7]="12A1";
		wallModificatorsL11[8]="13A1";
		wallModificatorsL11[9]="11B1";//P-W-S-newmodif
		wallModificatorsL11[10]="12B1";
		wallModificatorsL11[11]="13B1";
		
		var iRandomIndex=Random.Range(0,12);
		
		//if(iRunnerCounter % 5 == 0){
		
		accumulatedDeltaTime=accumulatedDeltaTime+Time.deltaTime;
			
		if(accumulatedDeltaTime >= Board.fPeriodTimeL11){
		
			sCodeModif=wallModificatorsL11[iRandomIndex];
			if(sCodeModif.Length==4){
				Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],sCodeModif[3]);
				if("P"+sCodeModif[0]==Avatar.sP_Avatar 
				&& "W"+sCodeModif[1]==Avatar.sW_Avatar 
				&& "S"+sCodeModif[2]==Avatar.sS_Avatar){
					bStopLevelRunner=true;
					Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],'0');
					errorRunnerFunction();
				}
			} else {
				Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],sCodeModif[4]);
				if(("P"+sCodeModif[0].ToString()+sCodeModif[1].ToString())==Avatar.sP_Avatar 
				&& "W"+sCodeModif[2]==Avatar.sW_Avatar 
				&& "S"+sCodeModif[3]==Avatar.sS_Avatar){
					bStopLevelRunner=true;
					Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],'0');
					errorRunnerFunction();
				}
			}
			iArrayCounter++;
			accumulatedDeltaTime=0;
		}
		//iRunnerCounter++;	
	}	
}

function doRunnerLevelL20(){
	if(!bStopLevelRunner){
		var sCodeModif:String;	
		
		if(counterRandom==1){
				iRandomIndexL20=1;
			} else if(counterRandom==2){
				iRandomIndexL20=2;
			} else if(counterRandom==3){
				iRandomIndexL20=3;
			} else if(counterRandom==4){
				iRandomIndexL20=4;
			} else if(counterRandom==5){
				iRandomIndexL20=5;
				counterRandom=0;
		} 

		if(iRandomIndexL20==1){
			wallModificatorsL20[0]="141A1";
			wallModificatorsL20[1]="142A1";
			wallModificatorsL20[2]="141A0";
			wallModificatorsL20[3]="142A0";	
			wallModificatorsL20[4]="41A1";
			wallModificatorsL20[5]="42A1";
			wallModificatorsL20[6]="41A0";
			wallModificatorsL20[7]="42A0";	
		} else if(iRandomIndexL20==2){
			wallModificatorsL20[0]="103A1";
			wallModificatorsL20[1]="101A1";
			wallModificatorsL20[2]="103A0";
			wallModificatorsL20[3]="101A0";
			wallModificatorsL20[4]="32A1";
			wallModificatorsL20[5]="33A1";
			wallModificatorsL20[6]="32A0";
			wallModificatorsL20[7]="33A0";
		} else if(iRandomIndexL20==3){
			wallModificatorsL20[0]="81A1";
			wallModificatorsL20[1]="82A1";
			wallModificatorsL20[2]="81A0";
			wallModificatorsL20[3]="82A0";
			wallModificatorsL20[4]="131A1";
			wallModificatorsL20[5]="132A1";
			wallModificatorsL20[6]="132A0";
			wallModificatorsL20[7]="131A0";
		} else if(iRandomIndexL20==4){
			wallModificatorsL20[0]="73A1";
			wallModificatorsL20[1]="71A1";
			wallModificatorsL20[2]="73A0";
			wallModificatorsL20[3]="71A0";
			wallModificatorsL20[4]="163A1";
			wallModificatorsL20[5]="161A1";
			wallModificatorsL20[6]="163A0";
			wallModificatorsL20[7]="161A0";
		} else if(iRandomIndexL20==5){
			wallModificatorsL20[0]="53A1";
			wallModificatorsL20[1]="51A1";
			wallModificatorsL20[2]="53A0";
			wallModificatorsL20[3]="51A0";
			wallModificatorsL20[4]="91A1";
			wallModificatorsL20[5]="92A1";
			wallModificatorsL20[6]="91A0";
			wallModificatorsL20[7]="92A0";
		}

		if(iArrayCounter<wallModificatorsL20.length){	
		
			accumulatedDeltaTime=accumulatedDeltaTime+Time.deltaTime;
			
			if(accumulatedDeltaTime >= Board.fPeriodTimeL20){
		
			//var modRunnerCounter=iRunnerCounter % 20;
			//if(modRunnerCounter==0){

				sCodeModif=wallModificatorsL20[iArrayCounter];
				
				if(sCodeModif.Length==4){
					Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],sCodeModif[3]);
					if("P"+sCodeModif[0]==Avatar.sP_Avatar 
					&& "W"+sCodeModif[1]==Avatar.sW_Avatar 
					&& "S"+sCodeModif[2]==Avatar.sS_Avatar){
						bStopLevelRunner=true;
						Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],'0');
						errorRunnerFunction();
					}
					//GameObject.Find("Board").audio.PlayOneShot(soundRunnerStep);
				} else {
					Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],sCodeModif[4]);
					if(("P"+sCodeModif[0].ToString()+sCodeModif[1].ToString())==Avatar.sP_Avatar 
					&& "W"+sCodeModif[2]==Avatar.sW_Avatar 
					&& "S"+sCodeModif[3]==Avatar.sS_Avatar){
						bStopLevelRunner=true;
						Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],'0');
						errorRunnerFunction();
					}
					Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],sCodeModif[4]);
					//GameObject.Find("Board").audio.PlayOneShot(soundRunnerStep);
				}
				iArrayCounter++;
				accumulatedDeltaTime=0;
			}
			//iRunnerCounter++;	
			
		} else {
			iArrayCounter=0;
			counterRandom++;
		}

	}
}

function doRunnerLevelL14(){


	if(!bStopLevelRunner){
	
		//Hi ha 2 sCodeModif doncs les caselles s'iluminen i enfosqueixen PER PARELLES i no soles com als altres nivells
		var sCodeModif:String;	
		var sCodeModif_b:String;	
		
		
		wallModificatorsL14[0]="31A1";
		wallModificatorsL14[1]="31B1";
		wallModificatorsL14[2]="152A1";
		wallModificatorsL14[3]="152B1";
		wallModificatorsL14[4]="31A0";
		wallModificatorsL14[5]="31B0";
		wallModificatorsL14[6]="152A0";
		wallModificatorsL14[7]="152B0";
		
		wallModificatorsL14[8]="41A1";
		wallModificatorsL14[9]="41B1";
		wallModificatorsL14[10]="143A1";
		wallModificatorsL14[11]="143B1";		
		wallModificatorsL14[12]="41A0";
		wallModificatorsL14[13]="41B0";
		wallModificatorsL14[14]="143A0";
		wallModificatorsL14[15]="143B0";
		
		wallModificatorsL14[16]="23A1";
		wallModificatorsL14[17]="23B1";
		wallModificatorsL14[18]="102A1";
		wallModificatorsL14[19]="102B1";		
		wallModificatorsL14[20]="23A0";
		wallModificatorsL14[21]="23B0";
		wallModificatorsL14[22]="102A0";
		wallModificatorsL14[23]="102B0";
		
		
		accumulatedDeltaTime=accumulatedDeltaTime+Time.deltaTime;
		if(accumulatedDeltaTime >= Board.fPeriodTimeL14){
		//if(iRunnerCounter % 20 ==0){//velocitat execucio patrons
		
			if(iArrayCounter<wallModificatorsL14.length){	
		
				if(iArrayCounter % 2 == 0){//index parells
			

					sCodeModif=wallModificatorsL14[iArrayCounter];
					sCodeModif_b=wallModificatorsL14[iArrayCounter+1];
					
					if(sCodeModif.Length==4 && sCodeModif_b.Length==4){
					
						Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],sCodeModif[3]);
						Board.changeWallModif(sCodeModif_b[0],sCodeModif_b[1],sCodeModif_b[2],sCodeModif_b[3]);
						
						if(("P"+sCodeModif[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif[2]==Avatar.sS_Avatar) ||
						("P"+sCodeModif_b[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif_b[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_b[2]==Avatar.sS_Avatar)){
							bStopLevelRunner=true;
							Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],'0');
							Board.changeWallModif(sCodeModif_b[0],sCodeModif_b[1],sCodeModif_b[2],'0');
							errorRunnerFunction();
						}
					} else if(sCodeModif.Length==4 && sCodeModif_b.Length>4){
					
						Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],sCodeModif[3]);
						Board.changeWallModif(sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString(),sCodeModif_b[2],sCodeModif_b[3],sCodeModif_b[4]);
						
						if(("P"+sCodeModif[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif[2]==Avatar.sS_Avatar) ||
						(("P"+sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif_b[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_b[3]==Avatar.sS_Avatar)){
							bStopLevelRunner=true;
							Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],'0');
							Board.changeWallModif(sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString(),sCodeModif_b[2],sCodeModif_b[3],'0');
							errorRunnerFunction();
						}
					} else if(sCodeModif.Length>4 && sCodeModif_b.Length==4){
					
						Board.changeWallModif(sCodeModif_b[0],sCodeModif_b[1],sCodeModif_b[2],sCodeModif_b[3]);
						Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],sCodeModif[4]);
						
						if(("P"+sCodeModif_b[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif_b[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_b[2]==Avatar.sS_Avatar) ||
						(("P"+sCodeModif[0].ToString()+sCodeModif[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif[3]==Avatar.sS_Avatar)){
							bStopLevelRunner=true;
							Board.changeWallModif(sCodeModif_b[0],sCodeModif_b[1],sCodeModif_b[2],'0');
							Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],'0');
							errorRunnerFunction();
						}
					} else if(sCodeModif.Length>4 && sCodeModif_b.Length>4){
					
						Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],sCodeModif[4]);
						Board.changeWallModif(sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString(),sCodeModif_b[2],sCodeModif_b[3],sCodeModif_b[4]);
						
						if((("P"+sCodeModif[0].ToString()+sCodeModif[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif[3]==Avatar.sS_Avatar) ||
						(("P"+sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif_b[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_b[3]==Avatar.sS_Avatar)){
							bStopLevelRunner=true;
							Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],'0');
							Board.changeWallModif(sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString(),sCodeModif_b[2],sCodeModif_b[3],'0');
							errorRunnerFunction();
						}
					}
						
				}
				
				iArrayCounter++;
					
			} else {
				iArrayCounter=0;
			}//end
			
			accumulatedDeltaTime=0;
		}
		//iRunnerCounter++;
	}
}

function doRunnerLevelL16(){

	if(!bStopLevelRunner){
	
		//Hi ha 2 sCodeModif doncs les caselles s'iluminen i enfosqueixen PER PARELLES i no soles com als altres nivells
		var sCodeModif:String;	
		var sCodeModif_b:String;	
		
		wallModificatorsL16[0]="101B1";
		wallModificatorsL16[1]="102B1";
		wallModificatorsL16[2]="103B1";
		
		wallModificatorsL16[3]="101B0";
		wallModificatorsL16[4]="102B0";
		wallModificatorsL16[5]="103B0";
		
		wallModificatorsL16[6]="141B1";
		wallModificatorsL16[7]="142B1";
		wallModificatorsL16[8]="143B1";
		
		wallModificatorsL16[9]="141B0";
		wallModificatorsL16[10]="142B0";
		wallModificatorsL16[11]="143B0";

		wallModificatorsL16[12]="183B1";
		wallModificatorsL16[13]="152B1";
		wallModificatorsL16[14]="153B1";
		
		wallModificatorsL16[15]="183B0";
		wallModificatorsL16[16]="152B0";
		wallModificatorsL16[17]="153B0";
		
		wallModificatorsL16[18]="31B1";
		wallModificatorsL16[19]="33B1";
		wallModificatorsL16[20]="62B1";
		
		wallModificatorsL16[21]="31B0";
		wallModificatorsL16[22]="33B0";
		wallModificatorsL16[23]="62B0";
		
		wallModificatorsL16[24]="41B1";
		wallModificatorsL16[25]="42B1";
		wallModificatorsL16[26]="43B1";
		
		wallModificatorsL16[27]="41B0";
		wallModificatorsL16[28]="42B0";
		wallModificatorsL16[29]="43B0";
		
		wallModificatorsL16[30]="141B1";
		wallModificatorsL16[31]="142B1";
		wallModificatorsL16[32]="143B1";
		
		wallModificatorsL16[33]="141B0";
		wallModificatorsL16[34]="142B0";
		wallModificatorsL16[35]="143B0";
		
		
		//if(iRunnerCounter % 10 ==0){//velocitat execucio patrons
		accumulatedDeltaTime=accumulatedDeltaTime+Time.deltaTime;
		if(accumulatedDeltaTime >= Board.fPeriodTimeL16){
		
			if(iArrayCounter<wallModificatorsL16.length){	
		
				if(iArrayCounter % 3 == 0){//index senars

					sCodeModif=wallModificatorsL16[iArrayCounter];
					sCodeModif_b=wallModificatorsL16[iArrayCounter+1];
					sCodeModif_c=wallModificatorsL16[iArrayCounter+2];
					
					if(sCodeModif.Length==4){
					
						Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],sCodeModif[3]);
						Board.changeWallModif(sCodeModif_b[0],sCodeModif_b[1],sCodeModif_b[2],sCodeModif_b[3]);
						Board.changeWallModif(sCodeModif_c[0],sCodeModif_c[1],sCodeModif_c[2],sCodeModif_c[3]);
						
						if(("P"+sCodeModif[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif[2]==Avatar.sS_Avatar) ||
						("P"+sCodeModif_b[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif_b[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_b[2]==Avatar.sS_Avatar) ||
						("P"+sCodeModif_c[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif_c[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_c[2]==Avatar.sS_Avatar)){
							bStopLevelRunner=true;
							Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],'0');
							Board.changeWallModif(sCodeModif_b[0],sCodeModif_b[1],sCodeModif_b[2],'0');
							Board.changeWallModif(sCodeModif_c[0],sCodeModif_c[1],sCodeModif_c[2],'0');
							errorRunnerFunction();
						}
					} else if(sCodeModif.Length>4){
					
						Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],sCodeModif[4]);
						Board.changeWallModif(sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString(),sCodeModif_b[2],sCodeModif_b[3],sCodeModif_b[4]);
						Board.changeWallModif(sCodeModif_c[0].ToString()+sCodeModif_c[1].ToString(),sCodeModif_c[2],sCodeModif_c[3],sCodeModif_c[4]);
						
						if((("P"+sCodeModif[0].ToString()+sCodeModif[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif_b[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_b[3]==Avatar.sS_Avatar) ||
						(("P"+sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif_b[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_b[3]==Avatar.sS_Avatar) || 
						(("P"+sCodeModif_c[0].ToString()+sCodeModif_b[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif_c[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_c[3]==Avatar.sS_Avatar)){
							bStopLevelRunner=true;
							Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],'0');
							Board.changeWallModif(sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString(),sCodeModif_b[2],sCodeModif_b[3],'0');
							Board.changeWallModif(sCodeModif_c[0].ToString()+sCodeModif_c[1].ToString(),sCodeModif_c[2],sCodeModif_c[3],'0');
							errorRunnerFunction();
						}
					}
						
				}
				
				iArrayCounter++;
					
			} else {
				iArrayCounter=0;
			}//end
			
			accumulatedDeltaTime=0;
		}
		//iRunnerCounter++;
	}
}


function doRunnerLevelL19(){

	if(!bStopLevelRunner){
	
		//Hi ha 2 sCodeModif doncs les caselles s'iluminen i enfosqueixen PER PARELLES i no soles com als altres nivells
		var sCodeModif:String;	
		var sCodeModif_b:String;
		var sCodeModif_c:String;
		var sCodeModif_d:String;
		
		wallModificatorsL19[0]="31A1";
		wallModificatorsL19[1]="31B1";
		wallModificatorsL19[2]="32A1";
		wallModificatorsL19[3]="32B1";
		
		wallModificatorsL19[4]="31A0";
		wallModificatorsL19[5]="31B0";
		wallModificatorsL19[6]="32A0";
		wallModificatorsL19[7]="32B0";

		wallModificatorsL19[8]="101A1";
		wallModificatorsL19[9]="101B1";
		wallModificatorsL19[10]="103A1";
		wallModificatorsL19[11]="103B1";
	
		wallModificatorsL19[12]="101A0";
		wallModificatorsL19[13]="101B0";
		wallModificatorsL19[14]="103A0";
		wallModificatorsL19[15]="103B0";

		wallModificatorsL19[16]="91A1";
		wallModificatorsL19[17]="91B1";
		wallModificatorsL19[18]="92A1";
		wallModificatorsL19[19]="92B1";
		
		wallModificatorsL19[20]="91A0";
		wallModificatorsL19[21]="91B0";
		wallModificatorsL19[22]="92A0";
		wallModificatorsL19[23]="92B0";
	
		wallModificatorsL19[24]="141A1";
		wallModificatorsL19[25]="141B1";
		wallModificatorsL19[26]="142A1";
		wallModificatorsL19[27]="142B1";

		wallModificatorsL19[28]="141A0";
		wallModificatorsL19[29]="141B0";
		wallModificatorsL19[30]="142A0";
		wallModificatorsL19[31]="142B0";
		
	    accumulatedDeltaTime=accumulatedDeltaTime+Time.deltaTime;
		if(accumulatedDeltaTime >= Board.fPeriodTimeL19){
		//if(iRunnerCounter % 20 ==0){//velocitat execucio patrons
		
			if(iArrayCounter<wallModificatorsL19.length){	
		
				if(iArrayCounter % 4 == 0){//multiples 4

					sCodeModif=wallModificatorsL19[iArrayCounter];
					sCodeModif_b=wallModificatorsL19[iArrayCounter+1];
					sCodeModif_c=wallModificatorsL19[iArrayCounter+2];
					sCodeModif_d=wallModificatorsL19[iArrayCounter+3];
					
					if(sCodeModif.Length==4){
					
						Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],sCodeModif[3]);
						Board.changeWallModif(sCodeModif_b[0],sCodeModif_b[1],sCodeModif_b[2],sCodeModif_b[3]);
						Board.changeWallModif(sCodeModif_c[0],sCodeModif_c[1],sCodeModif_c[2],sCodeModif_c[3]);
						Board.changeWallModif(sCodeModif_d[0],sCodeModif_d[1],sCodeModif_d[2],sCodeModif_d[3]);
						
						if(("P"+sCodeModif[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif[2]==Avatar.sS_Avatar) ||
						("P"+sCodeModif_b[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif_b[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_b[2]==Avatar.sS_Avatar) ||
						("P"+sCodeModif_c[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif_c[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_c[2]==Avatar.sS_Avatar) ||
						("P"+sCodeModif_d[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif_d[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_d[2]==Avatar.sS_Avatar)){
							bStopLevelRunner=true;
							Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],'0');
							Board.changeWallModif(sCodeModif_b[0],sCodeModif_b[1],sCodeModif_b[2],'0');
							Board.changeWallModif(sCodeModif_c[0],sCodeModif_c[1],sCodeModif_c[2],'0');
							Board.changeWallModif(sCodeModif_d[0],sCodeModif_d[1],sCodeModif_d[2],'0');
							errorRunnerFunction();
						}
					} else if(sCodeModif.Length>4){
					
						Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],sCodeModif[4]);
						Board.changeWallModif(sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString(),sCodeModif_b[2],sCodeModif_b[3],sCodeModif_b[4]);
						Board.changeWallModif(sCodeModif_c[0].ToString()+sCodeModif_c[1].ToString(),sCodeModif_c[2],sCodeModif_c[3],sCodeModif_c[4]);
						Board.changeWallModif(sCodeModif_d[0].ToString()+sCodeModif_d[1].ToString(),sCodeModif_d[2],sCodeModif_d[3],sCodeModif_d[4]);
						
						if((("P"+sCodeModif[0].ToString()+sCodeModif[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif[3]==Avatar.sS_Avatar) ||
						(("P"+sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif_b[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_b[3]==Avatar.sS_Avatar) ||
						(("P"+sCodeModif_c[0].ToString()+sCodeModif_c[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif_c[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_c[3]==Avatar.sS_Avatar) ||
						(("P"+sCodeModif_d[0].ToString()+sCodeModif_d[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif_d[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_d[3]==Avatar.sS_Avatar)){
							bStopLevelRunner=true;
							Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],'0');
							Board.changeWallModif(sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString(),sCodeModif_b[2],sCodeModif_b[3],'0');
							Board.changeWallModif(sCodeModif_c[0].ToString()+sCodeModif_c[1].ToString(),sCodeModif_c[2],sCodeModif_c[3],'0');
							Board.changeWallModif(sCodeModif_d[0].ToString()+sCodeModif_d[1].ToString(),sCodeModif_d[2],sCodeModif_d[3],'0');
							errorRunnerFunction();
						}
					}
						
				}
				
				iArrayCounter++;
					
			} else {
				iArrayCounter=0;
			}//end
			
			accumulatedDeltaTime=0;
		}
		//iRunnerCounter++;
	}
}

function doRunnerLevelL12(){

	if(!bStopLevelRunner){
	
		//Hi ha 2 sCodeModif doncs les caselles s'iluminen i enfosqueixen PER PARELLES i no soles com als altres nivells
		var sCodeModif:String;	
		var sCodeModif_b:String;	
		

		wallModificatorsL12[10]="103B1";
		wallModificatorsL12[11]="103A1";
		
		wallModificatorsL12[8]="143B1";
		wallModificatorsL12[9]="153A1";
		
		wallModificatorsL12[6]="33B1";
		wallModificatorsL12[7]="43A1";
		
		wallModificatorsL12[4]="153B1";
		wallModificatorsL12[5]="143A1";
		
		wallModificatorsL12[2]="13B1";
		wallModificatorsL12[3]="13A1";
		
		
		wallModificatorsL12[0]="43B1";
		wallModificatorsL12[1]="33A1";
		


			///////////
		
		wallModificatorsL12[12]="43B0";
		wallModificatorsL12[13]="33A0";
		
		wallModificatorsL12[14]="13B0";
		wallModificatorsL12[15]="13A0";
		
		wallModificatorsL12[16]="153B0";
		wallModificatorsL12[17]="143A0";
		
		wallModificatorsL12[18]="33B0";
		wallModificatorsL12[19]="43A0";
		
		wallModificatorsL12[20]="143B0";
		wallModificatorsL12[21]="153A0";
		
		wallModificatorsL12[22]="103B0";
		wallModificatorsL12[23]="103A0";
		
	
		accumulatedDeltaTime=accumulatedDeltaTime+Time.deltaTime;
		if(accumulatedDeltaTime >= Board.fPeriodTimeL12){
		//if(iRunnerCounter % 13 ==0){//velocitat execucio patrons
		
			if(iArrayCounter<wallModificatorsL12.length){	
		
				if(iArrayCounter % 2 == 0){//index parells

					//print("iArrayCounter: "+iArrayCounter);
				
					sCodeModif=wallModificatorsL12[iArrayCounter];
					sCodeModif_b=wallModificatorsL12[iArrayCounter+1];
					
					//print("sCodeModif: "+sCodeModif);
					//print("sCodeModif_b: "+sCodeModif_b);
					
					if(sCodeModif.Length==4 && sCodeModif_b.Length==4){
					
						Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],sCodeModif[3]);
						Board.changeWallModif(sCodeModif_b[0],sCodeModif_b[1],sCodeModif_b[2],sCodeModif_b[3]);
						
						if(("P"+sCodeModif[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif[2]==Avatar.sS_Avatar) ||
						("P"+sCodeModif_b[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif_b[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_b[2]==Avatar.sS_Avatar)){
							bStopLevelRunner=true;
							Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],'0');
							Board.changeWallModif(sCodeModif_b[0],sCodeModif_b[1],sCodeModif_b[2],'0');
							errorRunnerFunction();
						}
					} else if(sCodeModif.Length==4 && sCodeModif_b.Length>4){
						
						Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],sCodeModif[3]);
						Board.changeWallModif(sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString(),sCodeModif_b[2],sCodeModif_b[3],sCodeModif_b[4]);
						
						if(("P"+sCodeModif[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif[2]==Avatar.sS_Avatar) ||
						(("P"+sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif_b[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_b[3]==Avatar.sS_Avatar)){
							bStopLevelRunner=true;
							Board.changeWallModif(sCodeModif[0],sCodeModif[1],sCodeModif[2],'0');
							Board.changeWallModif(sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString(),sCodeModif_b[2],sCodeModif_b[3],'0');
							errorRunnerFunction();
						}
					
						
					} else if(sCodeModif.Length>4 && sCodeModif_b.Length==4){
						
						Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],sCodeModif[4]);
						Board.changeWallModif(sCodeModif_b[0],sCodeModif_b[1],sCodeModif_b[2],sCodeModif_b[3]);
						
						
						if(("P"+sCodeModif_b[0]==Avatar.sP_Avatar 
						&& "W"+sCodeModif_b[1]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_b[2]==Avatar.sS_Avatar) ||
						(("P"+sCodeModif[0].ToString()+sCodeModif[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif[3]==Avatar.sS_Avatar)){
							bStopLevelRunner=true;
							Board.changeWallModif(sCodeModif_b[0],sCodeModif_b[1],sCodeModif_b[2],'0');
							Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],'0');
							errorRunnerFunction();
						}
					} else if(sCodeModif.Length>4 && sCodeModif_b.Length>4){
					
						Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],sCodeModif[4]);
						Board.changeWallModif(sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString(),sCodeModif_b[2],sCodeModif_b[3],sCodeModif_b[4]);
						
						if((("P"+sCodeModif[0].ToString()+sCodeModif[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif[3]==Avatar.sS_Avatar) ||
						(("P"+sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString())==Avatar.sP_Avatar 
						&& "W"+sCodeModif_b[2]==Avatar.sW_Avatar 
						&& "S"+sCodeModif_b[3]==Avatar.sS_Avatar)){
							bStopLevelRunner=true;
							Board.changeWallModif(sCodeModif[0].ToString()+sCodeModif[1].ToString(),sCodeModif[2],sCodeModif[3],'0');
							Board.changeWallModif(sCodeModif_b[0].ToString()+sCodeModif_b[1].ToString(),sCodeModif_b[2],sCodeModif_b[3],'0');
							errorRunnerFunction();
						}
					}
						
				}
				
				iArrayCounter++;
					
			} else {
				iArrayCounter=0;
			}//end
			
			accumulatedDeltaTime=0;
			
		}
		//iRunnerCounter++;
	}
}

function errorRunnerFunction(){
	bPhysicalUserInterfaceON=false;
	iRunnerCounter=0;
	iArrayCounter=0;
	GameObject.Find("Board").audio.PlayOneShot(soundErrorTunel);
	showRunnerErrorMsg=true;
	yield WaitForSeconds(4.0);
	showRunnerErrorMsg=false;
	bStopLevelRunner=false;
	bPhysicalUserInterfaceON=true;
	Board.reloadPresentLevel();
}

function resume(){
	bPhysicalUserInterfaceON=false;
	showGeneralMenu=false;
	if(Board.isRUNNERlevel){
		bStopLevelRunner=false;
		//iRunnerCounter=0;
		//iArrayCounter=0;
	}
	yield WaitForSeconds(0.7);
	bPhysicalUserInterfaceON=true;
}

function resumeBoxL1(){
	bPhysicalUserInterfaceON=false;
	showBoxL1=false;
	yield WaitForSeconds(0.7);
	bPhysicalUserInterfaceON=true;
}

function resumeBoxL2(){
	bPhysicalUserInterfaceON=false;
	showBoxL2=false;
	yield WaitForSeconds(0.7);
	bPhysicalUserInterfaceON=true;
}

function resumeBoxL3(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(3);
	showBoxL3=false;
	bPhysicalUserInterfaceON=true;
}

function resumeBoxL4(){
	bPhysicalUserInterfaceON=false;
	showBoxL4=false;
	yield WaitForSeconds(0.7);
	bPhysicalUserInterfaceON=true;
}

function resumeBoxL5(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(3);
	showBoxL5=false;
	bPhysicalUserInterfaceON=true;
}

function resumeBoxL6(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(3);
	showBoxL6=false;
	bPhysicalUserInterfaceON=true;
}

function resumeBoxL7(){
	Board.bPhysicalUserInterfaceON=false;
	bPhysicalUserInterfaceON=false;
	showBoxL7=false;
	yield WaitForSeconds(0.7);
	bPhysicalUserInterfaceON=true;
	Board.bPhysicalUserInterfaceON=true;
}

function resumeBoxL8(){
	Board.bPhysicalUserInterfaceON=false;
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(3);
	showBoxL8=false;
	bPhysicalUserInterfaceON=true;
	Board.bPhysicalUserInterfaceON=true;
}

function resumeBoxL9(){
	Board.bPhysicalUserInterfaceON=false;
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(3);
	showBoxL9=false;
	bPhysicalUserInterfaceON=true;
	Board.bPhysicalUserInterfaceON=true;
}

function resumeBoxL10(){
	Board.bPhysicalUserInterfaceON=false;
	bPhysicalUserInterfaceON=false;
	showBoxL10=false;
	yield WaitForSeconds(0.7);
	bPhysicalUserInterfaceON=true;
	Board.bPhysicalUserInterfaceON=true;
}

function resumeBoxL11(){
	Board.bPhysicalUserInterfaceON=false;
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(0.7);
	showBoxL11=false;
	bPhysicalUserInterfaceON=true;
	Board.bPhysicalUserInterfaceON=true;
}

function resumeBoxL12(){
	Board.bPhysicalUserInterfaceON=false;
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(0.7);
	showBoxL12=false;
	bPhysicalUserInterfaceON=true;
	Board.bPhysicalUserInterfaceON=true;
}

function resumeBoxL13(){
	Board.bPhysicalUserInterfaceON=false;
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(0.7);
	showBoxL13=false;
	bPhysicalUserInterfaceON=true;
	Board.bPhysicalUserInterfaceON=true;
}

function resumeBoxL14(){
	Board.bPhysicalUserInterfaceON=false;
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(3);
	showBoxL14=false;
	bPhysicalUserInterfaceON=true;
	Board.bPhysicalUserInterfaceON=true;
}


function resumeBoxL15(){
	Board.bPhysicalUserInterfaceON=false;
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(3);
	showBoxL15=false;
	bPhysicalUserInterfaceON=true;
	Board.bPhysicalUserInterfaceON=true;
}

function resumeBoxL16(){
	Board.bPhysicalUserInterfaceON=false;
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(3);
	showBoxL16=false;
	bPhysicalUserInterfaceON=true;
	Board.bPhysicalUserInterfaceON=true;
}

function resumeBoxL17(){
	Board.bPhysicalUserInterfaceON=false;
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(3);
	showBoxL17=false;
	bPhysicalUserInterfaceON=true;
	Board.bPhysicalUserInterfaceON=true;
}

function resumeBoxL18(){
	Board.bPhysicalUserInterfaceON=false;
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(3);
	showBoxL18=false;
	bPhysicalUserInterfaceON=true;
	Board.bPhysicalUserInterfaceON=true;
}

function resumeBoxL19(){
	Board.bPhysicalUserInterfaceON=false;
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(3);
	showBoxL19=false;
	bPhysicalUserInterfaceON=true;
	Board.bPhysicalUserInterfaceON=true;
}

function resumeBoxL20(){
	Board.bPhysicalUserInterfaceON=false;
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(3);
	showBoxL20=false;
	bPhysicalUserInterfaceON=true;
	Board.bPhysicalUserInterfaceON=true;
}

function resumeBoxForbidden(){
	bPhysicalUserInterfaceON=false;
	showBoxForbidden=false;
	yield WaitForSeconds(0.7);
	bPhysicalUserInterfaceON=true;
}

function resumeBoxForbiddenGate(){
	bPhysicalUserInterfaceON=false;
	showBoxForbiddenGate=false;
	yield WaitForSeconds(0.7);
	bPhysicalUserInterfaceON=true;
}

function resumeBoxLevelSmall(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(3);
	showBoxLevelSmall=false;
	bPhysicalUserInterfaceON=true;
}

function restart(){
	bPhysicalUserInterfaceON=false;
	showGeneralMenu=false;
	if(Board.isRUNNERlevel){
		bStopLevelRunner=false;
		iRunnerCounter=0;
		iArrayCounter=0;
	}
	Board.reloadPresentLevel();
	yield WaitForSeconds(0.7);
	bPhysicalUserInterfaceON=true;
}

function doAvatarThroughTunnel(){
			bPhysicalUserInterfaceON=false;
			if(sS_Avatar=='SA'){
				sP_Avatar=sP_Avatar_new;
				moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
				yield WaitForSeconds(1.0);
				sS_Avatar='SB';
				SwitchCameras.bMoveBoardAround=true;
				sNewModif=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
				GameObject.Find("Board").audio.PlayOneShot(soundEnterTunel);
				if(sNewModif.ToString()=="T"
				|| sNewModif.ToString()=="P"
				|| sNewModif.ToString()=="0"
				|| sNewModif.ToString()=="A"
				|| sNewModif.ToString()=="B"
				|| sNewModif.ToString()=="C"){
					bTurnONforbTunnel=true;
					errorTunelFunction();
				}
			} else if(sS_Avatar=='SB'){
				sP_Avatar=sP_Avatar_new;
				moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
				yield WaitForSeconds(1.0);
				sS_Avatar='SA';
				SwitchCameras.bMoveBoardAround=true;
				sNewModif=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
				GameObject.Find("Board").audio.PlayOneShot(soundEnterTunel);
				if(sNewModif.ToString()=="T"
				|| sNewModif.ToString()=="P"
				|| sNewModif.ToString()=="0"
				|| sNewModif.ToString()=="A"
				|| sNewModif.ToString()=="B"
				|| sNewModif.ToString()=="C"){
					bTurnONforbTunnel=true;
					errorTunelFunction();
				}		
			}
			yield WaitForSeconds(2.0);
			if(!showTunnelErrorMsg){
					bPhysicalUserInterfaceON=true;
			}
}

function doAvatarThroughTunnelFromW1(){
				bPhysicalUserInterfaceON=false;
				if(sS_Avatar=='SA'){
					//sP_Avatar=sP_Avatar_new;//sembla que no fa res...
					//moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);//sembla que no fa res...
					yield WaitForSeconds(1.0);
					sS_Avatar='SB';
					sW_Avatar="W1";
					SwitchCameras.bMoveBoardAround=true;
					sNewModif=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
					GameObject.Find("Board").audio.PlayOneShot(soundEnterTunel);
					if(sNewModif.ToString()=="T"
					|| sNewModif.ToString()=="P"
					|| sNewModif.ToString()=="0"
					|| sNewModif.ToString()=="A"
					|| sNewModif.ToString()=="B"
					|| sNewModif.ToString()=="C"){
						bTurnONforbTunnel=true;
						errorTunelFunction();
					}	
					
				} else if(sS_Avatar=='SB'){
					//sP_Avatar=sP_Avatar_new;//sembla que no fa res...
					//moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);//sembla que no fa res...
					yield WaitForSeconds(1.0);//es queda a sobre casella 1 sec
				    sS_Avatar='SA';
					sW_Avatar="W1";
					SwitchCameras.bMoveBoardAround=true;
					GameObject.Find("Board").audio.PlayOneShot(soundEnterTunel);
					sNewModif=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);					
					if(sNewModif.ToString()=="T"
					|| sNewModif.ToString()=="P"
					|| sNewModif.ToString()=="0"
					|| sNewModif.ToString()=="A"
					|| sNewModif.ToString()=="B"
					|| sNewModif.ToString()=="C"){
						bTurnONforbTunnel=true;
						errorTunelFunction();
					} 
				}
				yield WaitForSeconds(2.0);
				if(!showTunnelErrorMsg){
					bPhysicalUserInterfaceON=true;
				}
}

function doAvatarThroughTunnelFromW2(){
				bPhysicalUserInterfaceON=false;
				if(sS_Avatar=='SA'){
					//sP_Avatar=sP_Avatar_new;
					//moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
					yield WaitForSeconds(1.0);
					sS_Avatar='SB';
					sW_Avatar="W2";
					//print("Vaig a SB i W3...");
					SwitchCameras.bMoveBoardAround=true;
					sNewModif=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
					GameObject.Find("Board").audio.PlayOneShot(soundEnterTunel);
					if(sNewModif.ToString()=="T"
					|| sNewModif.ToString()=="P"
					|| sNewModif.ToString()=="0"
					|| sNewModif.ToString()=="A"
					|| sNewModif.ToString()=="B"
					|| sNewModif.ToString()=="C"){
						bTurnONforbTunnel=true;
						errorTunelFunction();
					}	
				} else if(sS_Avatar=='SB'){
					//sP_Avatar=sP_Avatar_new;
					//moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
					yield WaitForSeconds(1.0);
					sS_Avatar='SA';
					sW_Avatar="W2";
					SwitchCameras.bMoveBoardAround=true;
					sNewModif=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
					GameObject.Find("Board").audio.PlayOneShot(soundEnterTunel);
					if(sNewModif.ToString()=="T"
					|| sNewModif.ToString()=="P"
					|| sNewModif.ToString()=="0"
					|| sNewModif.ToString()=="A"
					|| sNewModif.ToString()=="B"
					|| sNewModif.ToString()=="C"){
						bTurnONforbTunnel=true;
						errorTunelFunction();
					}	
				}
				yield WaitForSeconds(2.0);
				if(!showTunnelErrorMsg){
					bPhysicalUserInterfaceON=true;
				}
}

function doAvatarThroughTunnelFromW3(){
				bPhysicalUserInterfaceON=false;
				if(sS_Avatar=='SA'){
					//sP_Avatar=sP_Avatar_new;
					//moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
					yield WaitForSeconds(1.0);
					sS_Avatar='SB';
					sW_Avatar="W3";
					SwitchCameras.bMoveBoardAround=true;
					sNewModif=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
					GameObject.Find("Board").audio.PlayOneShot(soundEnterTunel);
					if(sNewModif.ToString()=="T"
					|| sNewModif.ToString()=="P"
					|| sNewModif.ToString()=="0"
					|| sNewModif.ToString()=="A"
					|| sNewModif.ToString()=="B"
					|| sNewModif.ToString()=="C"){
						bTurnONforbTunnel=true;
						errorTunelFunction();
					}	
				} else if(sS_Avatar=='SB'){
					//sP_Avatar=sP_Avatar_new;
					//moveAvatarTo(goAvatar,sP_Avatar,sW_Avatar,sS_Avatar);
					yield WaitForSeconds(1.0);
					sS_Avatar='SA';
					sW_Avatar="W3";
					SwitchCameras.bMoveBoardAround=true;
					sNewModif=calculateWallModificator(sP_Avatar,sW_Avatar,sS_Avatar);
					GameObject.Find("Board").audio.PlayOneShot(soundEnterTunel);
					if(sNewModif.ToString()=="T"
					|| sNewModif.ToString()=="P"
					|| sNewModif.ToString()=="0"
					|| sNewModif.ToString()=="A"
					|| sNewModif.ToString()=="B"
					|| sNewModif.ToString()=="C"){
						bTurnONforbTunnel=true;
						errorTunelFunction();
					}	
				}
				yield WaitForSeconds(2.0);
				if(!showTunnelErrorMsg){
					bPhysicalUserInterfaceON=true;
				}
}

function goToNextLevelL1(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL1Loaded){	
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		L1_config.load();
		bLevelL1Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
} 

function goToNextLevelL2(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL2Loaded){	
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		L2_config.load();
		bLevelL2Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
} 

function goToNextLevelL3(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL3Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		L3_config.load();
		bLevelL3Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL4(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL4Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		L4_config.load();
		bLevelL4Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL5(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL5Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		L5_config.load();
		bLevelL5Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL6(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL6Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		L6_config.load();
		bLevelL6Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL7(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL7Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		L7_config.load();
		bLevelL7Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL8(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL8Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		L8_config.load();
		bLevelL8Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL9(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL9Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		L9_config.load();
		bLevelL9Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL10(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL10Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		bStopLevelRunner=false;
		L10_config.load();
		bLevelL10Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL11(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL11Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		bStopLevelRunner=false;
		L11_config.load();
		bLevelL11Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL12(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL12Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		bStopLevelRunner=false;
		L12_config.load();
		bLevelL12Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL13(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL13Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		L13_config.load();
		bLevelL13Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL14(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL14Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		bStopLevelRunner=false;
		L14_config.load();
		bLevelL14Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL15(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL15Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		L15_config.load();
		bLevelL15Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}
function goToNextLevelL16(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL16Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		bStopLevelRunner=false;
		L16_config.load();
		bLevelL16Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL17(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL17Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		bStopLevelRunner=false;
		L17_config.load();
		bLevelL17Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL18(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL18Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		bStopLevelRunner=false;
		L18_config.load();
		bLevelL18Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL19(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL19Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		bStopLevelRunner=false;
		L19_config.load();
		bLevelL19Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}

function goToNextLevelL20(){
	bPhysicalUserInterfaceON=false;
	yield WaitForSeconds(1.0);
	if(!bLevelL20Loaded){
		GameObject.Find("Board").audio.PlayOneShot(soundNextLevel);
		bStopLevelRunner=false;
		L20_config.load();
		bLevelL20Loaded=true;
		bPhysicalUserInterfaceON=true;
	}
}
