static var sLoadedLevel="";
static var sWallUnderMouse:String;

public var soundSetTunnel:AudioClip;
public var soundErrorTunel:AudioClip;

static var cGeneralColorForbiddenWall=Color(255/255.0F,165/255.0F,80/255.0F);
static var cGeneralColorTunnelWall=Color(0/255.0F,200/255.0F,255/255.0F);

static var sP1_modif:String;
static var sP2_modif:String;
static var sP3_modif:String;
static var sP4_modif:String;
static var sP5_modif:String;
static var sP6_modif:String;
static var sP7_modif:String;
static var sP8_modif:String;
static var sP9_modif:String;
static var sP10_modif:String;
static var sP11_modif:String;
static var sP12_modif:String;
static var sP13_modif:String;
static var sP14_modif:String;
static var sP15_modif:String;
static var sP16_modif:String;
static var sP17_modif:String;
static var sP18_modif:String;
static var sP19_modif:String;
static var sP20_modif:String;

//Definició dels modificadors de casella:
static var cCodeNormalWall:String='1';//Casella normal
static var cCodeForbiddenWall:String='P';//Casella prohibida
static var cCodeTunnelWall:String='T';//Casella tunel
static var cCodeHiddenWall:String='0';//Casella negra i prohibida
static var cCodeW1NearGate:String='A';//Casella prohibida al cantó de gate i del color corresponent al nivell
static var cCodeW2NearGate:String='B';//Casella prohibida al cantó de gate i del color corresponent al nivell
static var cCodeW3NearGate:String='C';//Casella prohibida al cantó de gate i del color corresponent al nivell
static var cCodeObjRecol:String='M';//Casella on hi ha un objecte a recol·lectar

static var cBoardColorW1SA:Color;
static var cBoardColorW2SA:Color;
static var cBoardColorW3SA:Color;

static var cBoardColorW1SB:Color;
static var cBoardColorW2SB:Color;
static var cBoardColorW3SB:Color;

static var cBoardColorW1SANearGate:Color;
static var cBoardColorW2SANearGate:Color;
static var cBoardColorW3SANearGate:Color;

static var cBoardColorW1SBNearGate:Color;
static var cBoardColorW2SBNearGate:Color;
static var cBoardColorW3SBNearGate:Color;

static var cBoardColorForbiddenWall:Color;
static var cBoardColorTunnelWall:Color;
static var cBoardColorHiddenWall:Color;


static var aSteps = new Array(7);
aSteps[0]=new Array(7);
aSteps[1]=new Array(7);
aSteps[2]=new Array(7);
aSteps[3]=new Array(7);
aSteps[4]=new Array(7);
aSteps[5]=new Array(7);
aSteps[6]=new Array(7);

static var bIsBoardBig=false;

//Definició de l'array d'Steps: 
aSteps[0][0] = "none";
aSteps[0][1] = "none";
aSteps[0][2] = "none";
aSteps[0][3] = "none";
aSteps[0][4] = "none";
aSteps[0][5] = "none";
aSteps[0][6] = "none";

aSteps[1][0] = "none";
aSteps[1][1] = "none";
aSteps[1][2] = "none";
aSteps[1][3] = "P8";
aSteps[1][4] = "P9";
aSteps[1][5] = "P11";
aSteps[1][6] = "none";

aSteps[2][0] = "none";
aSteps[2][1] = "none";
aSteps[2][2] = "P6";
aSteps[2][3] = "P4";
aSteps[2][4] = "P10";
aSteps[2][5] = "P16";
aSteps[2][6] = "none";

aSteps[3][0] = "none";
aSteps[3][1] = "P7";
aSteps[3][2] = "P3";
aSteps[3][3] = "P1";
aSteps[3][4] = "P15";
aSteps[3][5] = "P19";
aSteps[3][6] = "none";

aSteps[4][0] = "none";
aSteps[4][1] = "P5";
aSteps[4][2] = "P2";
aSteps[4][3] = "P14";
aSteps[4][4] = "P18";
aSteps[4][5] = "none";
aSteps[4][6] = "none";

aSteps[5][0] = "none";
aSteps[5][1] = "P12";
aSteps[5][2] = "P13";
aSteps[5][3] = "P17";
aSteps[5][4] = "none";
aSteps[5][5] = "none";
aSteps[5][6] = "none";

aSteps[6][0] = "none";
aSteps[6][1] = "none";
aSteps[6][2] = "none";
aSteps[6][3] = "none";
aSteps[6][4] = "none";
aSteps[6][5] = "none";
aSteps[6][6] = "none";

public var customGuiStyle : GUIStyle;
public var myskin:GUISkin;


public var bPauseGame:boolean=false;

public var showBox=false;
static var isLevelL1=false;
static var isLevelL2=false;
static var isLevelL3=false;
static var isLevelL4=false;
static var isLevelL5=false;
static var isLevelL6=false;
static var isLevelL7=false;
static var isLevelL8=false;
static var isLevelL9=false;
static var isLevelL10=false;
static var isLevelL11=false;
static var isLevelL12=false;
static var isLevelL13=false;
static var isLevelL14=false;
static var isLevelL15=false;
static var isLevelL16=false;
static var isLevelL17=false;
static var isLevelL18=false;
static var isLevelL19=false;
static var isLevelL20=false;
static var isPORTALlevel=false;
static var isRECOLECTlevel=false;
static var isRUNNERlevel=false;

static var iTunelsCounter:int=1;//tunnel
static var iTunelsLeft:int=0;//tunnel
static var iLevelTunelMax:int=0;//tunnel
static var bAreAllTunnelsSet:boolean=false;//tunnel

//fixa el periode de repeticio del patro pel LXX:
static var fPeriodTimeL10:float=1.0;//runner
static var fPeriodTimeL11:float=0.1;//runner
static var fPeriodTimeL12:float=0.4;//runner
static var fPeriodTimeL14:float=0.7;//runner
static var fPeriodTimeL16:float=0.5;//runner
static var fPeriodTimeL19:float=0.3;//runner
static var fPeriodTimeL20:float=0.7;//runner

static var bPhysicalUserInterfaceON:boolean;//teclat i ratoli activats o desactivats

function Awake() {

	//Screen.showCursor = false;//amaga cursor ratoli
	//L1_config.load();
	//L2_config.load();
	//L3_config.load();
	//L4_config.load();
	//L5_config.load();
	//L6_config.load();
	//L7_config.load();
	//L8_config.load();
	//L13_config.load();
	//L14_config.load();
	L1_config.load();
}

function Start(){
	bPhysicalUserInterfaceON=true;
}

function Update(){

	//Mode test:
	/*
	if(Input.GetKeyDown (KeyCode.Alpha1)){
		Avatar.bLevelL2Loaded=false;
		Avatar.showBoxL1=true;
		L1_config.load();
	} else if(Input.GetKeyDown (KeyCode.Alpha2)){
		Avatar.bLevelL3Loaded=false;
		Avatar.showBoxL2=true;
		L2_config.load();
	} else if(Input.GetKeyDown (KeyCode.Alpha3)){
		Avatar.showBoxL3=true;
		Avatar.bLevelL4Loaded=false;
		L3_config.load();
	} else if(Input.GetKeyDown (KeyCode.Alpha4)){
		Avatar.showBoxL4=true;
		Avatar.bLevelL5Loaded=false;
		L4_config.load();
	} else if(Input.GetKeyDown (KeyCode.Alpha5)){
		Avatar.showBoxL5=true;
		Avatar.bLevelL6Loaded=false;
		L5_config.load();
	} else if(Input.GetKeyDown (KeyCode.Alpha6)){
		Avatar.showBoxL6=true;
		Avatar.bLevelL7Loaded=false;
		L6_config.load();
	} else if(Input.GetKeyDown (KeyCode.Alpha7)){
		Avatar.showBoxL7=true;
		Avatar.bLevelL8Loaded=false;
		L7_config.load();
	} else if(Input.GetKeyDown (KeyCode.Alpha8)){
		Avatar.showBoxL8=true;
		Avatar.bLevelL9Loaded=false;
		L8_config.load();
	} else if(Input.GetKeyDown (KeyCode.Alpha9)){
		Avatar.showBoxL9=true;
		Avatar.bLevelL10Loaded=false;
		L9_config.load();
	} else if(Input.GetKeyDown (KeyCode.Alpha0)){
		Avatar.showBoxL10=true;
		Avatar.bLevelL11Loaded=false;
		L10_config.load();
	}  else if(Input.GetKeyDown (KeyCode.F1)){
		Avatar.showBoxL11=true;
		Avatar.bLevelL12Loaded=false;
		L11_config.load();
	}  else if(Input.GetKeyDown (KeyCode.F2)){
		Avatar.showBoxL12=true;
		Avatar.bLevelL13Loaded=false;
		L12_config.load();
	}   else if(Input.GetKeyDown (KeyCode.F3)){
		Avatar.showBoxL13=true;
		Avatar.bLevelL14Loaded=false;
		L13_config.load();
	}   else if(Input.GetKeyDown (KeyCode.F4)){
		Avatar.showBoxL14=true;
		Avatar.bLevelL15Loaded=false;
		L14_config.load();
	}   else if(Input.GetKeyDown (KeyCode.F5)){
		Avatar.showBoxL15=true;
		Avatar.bLevelL16Loaded=false;
		L15_config.load();
	}   else if(Input.GetKeyDown (KeyCode.F6)){
		Avatar.showBoxL16=true;
		Avatar.bLevelL17Loaded=false;
		L16_config.load();
	}   else if(Input.GetKeyDown (KeyCode.F7)){
		Avatar.showBoxL17=true;
		Avatar.bLevelL18Loaded=false;
		L17_config.load();
	}  else if(Input.GetKeyDown (KeyCode.F8)){
		Avatar.showBoxL18=true;
		Avatar.bLevelL19Loaded=false;
		L18_config.load();
	} else if(Input.GetKeyDown (KeyCode.F9)){
		Avatar.showBoxL19=true;
		Avatar.bLevelL20Loaded=false;
		L19_config.load();
	}  else if(Input.GetKeyDown (KeyCode.F10)){
		Avatar.showBoxL20=true;
		Avatar.bLevelL21Loaded=false;
		L20_config.load();
	}
	*/
	
	//Construcció de tunels
	if (Input.GetKeyUp (KeyCode.T) && isPORTALlevel && bPhysicalUserInterfaceON){
		if(iTunelsCounter>iLevelTunelMax){
			print("No more tunels!");
		} else {
			var goToHighlight:GameObject;
			var sStepOver:String;
			var sWallOver:String;
			var sSideOver:String;
			if(sWallUnderMouse.Length!=0){
				if(sWallUnderMouse.Length<=6){
					sStepOver=sWallUnderMouse[1].ToString();
					sWallOver=sWallUnderMouse[3].ToString();
					sSideOver=sWallUnderMouse[5].ToString();
				} else if(sWallUnderMouse.Length>6){
					sStepOver=sWallUnderMouse[1].ToString()+sWallUnderMouse[2].ToString();
					sWallOver=sWallUnderMouse[4].ToString();
					sSideOver=sWallUnderMouse[6].ToString();
				}
				
				/*
				if((("P"+sStepOver)==Avatar.sP_Avatar && ("W"+sWallOver)==Avatar.sW_Avatar && ("S"+sSideOver)==Avatar.sS_Avatar)
				|| (("P"+sStepOver)==Gate.sP_Gate && ("W"+sWallOver)=="W1" && ("S"+sSideOver)==Gate.sS_Gate && Board.isPORTALlevel==false && Board.isRECOLECTlevel==true)
				|| (("P"+sStepOver)==Gate.sP_Gate && ("W"+sWallOver)=="W2" && ("S"+sSideOver)==Gate.sS_Gate && Board.isPORTALlevel==false && Board.isRECOLECTlevel==true)
				|| (("P"+sStepOver)==Gate.sP_Gate && ("W"+sWallOver)=="W3" && ("S"+sSideOver)==Gate.sS_Gate && Board.isPORTALlevel==false && Board.isRECOLECTlevel==true)
				|| (Avatar.calculateWallModificator("P"+sStepOver,"W"+sWallOver,"S"+sSideOver)=='T')  
				){
				*/
				
				if((("P"+sStepOver)==Avatar.sP_Avatar && ("W"+sWallOver)==Avatar.sW_Avatar && ("S"+sSideOver)==Avatar.sS_Avatar)
				|| (("P"+sStepOver)==Gate.sP_Gate && ("W"+sWallOver)==Gate.sW_Gate && ("S"+sSideOver)==Gate.sS_Gate && Board.isPORTALlevel==true && Gate.goGate.active==true)
				|| (Avatar.calculateWallModificator("P"+sStepOver,"W"+sWallOver,"S"+sSideOver)=='T')  
				){
					print("NOT ALLOWED: it's not possible to set a tunnel over: an AVATAR, a GATE or OTHER TUNNEL!");
				} else {
					changeWallModif(sStepOver,sWallOver,sSideOver,"T");
					iTunelsCounter++;
					if(iTunelsCounter>iLevelTunelMax){
						Board.bAreAllTunnelsSet=true;
					}
					audio.PlayOneShot(soundSetTunnel);
				}	
			}
		}
	}//final if tunels
	


}//final Update()

static function reloadPresentLevel(){
	if(isLevelL1){
		L1_config.load();
	} else if(isLevelL2){
		L2_config.load();
	}  else if(isLevelL3){
		L3_config.load();
	} else if(isLevelL4){
		L4_config.load();
	} else if(isLevelL5){
		L5_config.load();
	} else if(isLevelL6){
		L6_config.load();
	} else if(isLevelL7){
		L7_config.load();
	} else if(isLevelL8){
		L8_config.load();
	} else if(isLevelL9){
		L9_config.load();
	} else if(isLevelL10){
		L10_config.load();
	} else if(isLevelL11){
		L11_config.load();
	} else if(isLevelL12){
		L12_config.load();
	} else if(isLevelL13){
		L13_config.load();
	} else if(isLevelL14){
		L14_config.load();
	} else if(isLevelL15){
		L15_config.load();
	} else if(isLevelL16){
		L16_config.load();
	} else if(isLevelL17){
		L17_config.load();
	} else if(isLevelL18){
		L18_config.load();
	} else if(isLevelL19){
		L19_config.load();
	} else if(isLevelL20){
		L20_config.load();
	}
}

static function changeWallModif(sStepOverIN,sWallOverIN,sSideOverIN,sNewModif){
		
		
		var stepOver=sStepOverIN.ToString();
		var wallOver=sWallOverIN.ToString();
		var sideOver=sSideOverIN.ToString();
		var newModif=sNewModif.ToString();
		
		
		var index:int=0;
		
		if(wallOver=="1" && sideOver=="A"){
			index=0;
		} else if(wallOver=="2" && sideOver=="A"){
			index=1;
		} else if(wallOver=="3" && sideOver=="A"){
			index=2;
		} else if(wallOver=="1" && sideOver=="B"){
			index=4;
		} else if(wallOver=="2" && sideOver=="B"){
			index=5;
		} else if(wallOver=="3" && sideOver=="B"){
			index=6;
		}
		
		if(stepOver=="1"){
			sP1_modif=sP1_modif.Remove(index,1);
			sP1_modif=sP1_modif.Insert(index,newModif);
			setStepColors("P1",false,sP1_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		} else if(stepOver=="2"){
			sP2_modif=sP2_modif.Remove(index,1);
			sP2_modif=sP2_modif.Insert(index,newModif);
			setStepColors("P2",false,sP2_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="3"){
			sP3_modif=sP3_modif.Remove(index,1);
			sP3_modif=sP3_modif.Insert(index,newModif);
			setStepColors("P3",false,sP3_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="4"){
			sP4_modif=sP4_modif.Remove(index,1);
			sP4_modif=sP4_modif.Insert(index,newModif);
			setStepColors("P4",false,sP4_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="5"){
			sP5_modif=sP5_modif.Remove(index,1);
			sP5_modif=sP5_modif.Insert(index,newModif);
			setStepColors("P5",false,sP5_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="6"){
			sP6_modif=sP6_modif.Remove(index,1);
			sP6_modif=sP6_modif.Insert(index,newModif);
			setStepColors("P6",false,sP6_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="7"){
			sP7_modif=sP7_modif.Remove(index,1);
			sP7_modif=sP7_modif.Insert(index,newModif);
			setStepColors("P7",false,sP7_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="8"){
			sP8_modif=sP8_modif.Remove(index,1);
			sP8_modif=sP8_modif.Insert(index,newModif);
			setStepColors("P8",false,sP8_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="9"){
			sP9_modif=sP9_modif.Remove(index,1);
			sP9_modif=sP9_modif.Insert(index,newModif);
			setStepColors("P9",false,sP9_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="10"){
			sP10_modif=sP10_modif.Remove(index,1);
			sP10_modif=sP10_modif.Insert(index,newModif);
			setStepColors("P10",false,sP10_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="11"){
			sP11_modif=sP11_modif.Remove(index,1);
			sP11_modif=sP11_modif.Insert(index,newModif);
			setStepColors("P11",false,sP11_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="12"){
			sP12_modif=sP12_modif.Remove(index,1);
			sP12_modif=sP12_modif.Insert(index,newModif);
			setStepColors("P12",false,sP12_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="13"){
			sP13_modif=sP13_modif.Remove(index,1);
			sP13_modif=sP13_modif.Insert(index,newModif);
			setStepColors("P13",false,sP13_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="14"){
			sP14_modif=sP14_modif.Remove(index,1);
			sP14_modif=sP14_modif.Insert(index,newModif);
			setStepColors("P14",false,sP14_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="15"){
			sP15_modif=sP15_modif.Remove(index,1);
			sP15_modif=sP15_modif.Insert(index,newModif);
			setStepColors("P15",false,sP15_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="16"){
			sP16_modif=sP16_modif.Remove(index,1);
			sP16_modif=sP16_modif.Insert(index,newModif);
			setStepColors("P16",false,sP16_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="17"){
			sP17_modif=sP17_modif.Remove(index,1);
			sP17_modif=sP17_modif.Insert(index,newModif);
			setStepColors("P17",false,sP17_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="18"){
			sP18_modif=sP18_modif.Remove(index,1);
			sP18_modif=sP18_modif.Insert(index,newModif);
			setStepColors("P18",false,sP18_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}  else if(stepOver=="19"){
			sP19_modif=sP19_modif.Remove(index,1);
			sP19_modif=sP19_modif.Insert(index,newModif);
			setStepColors("P19",false,sP19_modif,cBoardColorW1SA,cBoardColorW2SA,cBoardColorW3SA,cBoardColorW1SB,cBoardColorW2SB,cBoardColorW3SB,cBoardColorW1SANearGate,cBoardColorW2SANearGate,cBoardColorW3SANearGate,cBoardColorW1SBNearGate,cBoardColorW2SBNearGate,cBoardColorW3SBNearGate,cBoardColorForbiddenWall,cBoardColorTunnelWall,cBoardColorHiddenWall);
		}
		
}

static function setStepColors(step,toTransparentShader,modif,colorW1SA,colorW2SA,colorW3SA,colorW1SB,colorW2SB,colorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall){

	var sStep=step.ToString();
	var sModif=modif.ToString();//XXX-XXX

	
	var goW1SA=GameObject.Find("/Board/"+sStep+"/W1SA");
	var goW1SB=GameObject.Find("/Board/"+sStep+"/W1SA/W1SB");
	var goW2SA=GameObject.Find("/Board/"+sStep+"/W2SA");
	var goW2SB=GameObject.Find("/Board/"+sStep+"/W2SA/W2SB");
	var goW3SA=GameObject.Find("/Board/"+sStep+"/W3SA");
	var goW3SB=GameObject.Find("/Board/"+sStep+"/W3SA/W3SB");

	
	if(toTransparentShader==true){
		goW1SA.renderer.material.shader = Shader.Find ("Transparent/Diffuse");
		goW1SB.renderer.material.shader = Shader.Find ("Transparent/Diffuse");
		goW2SA.renderer.material.shader = Shader.Find ("Transparent/Diffuse");
		goW2SB.renderer.material.shader = Shader.Find ("Transparent/Diffuse");
		goW3SA.renderer.material.shader = Shader.Find ("Transparent/Diffuse");
		goW3SB.renderer.material.shader = Shader.Find ("Transparent/Diffuse");
	} else if(toTransparentShader==false){
		goW1SA.renderer.material.shader = Shader.Find ("Diffuse");
		goW1SB.renderer.material.shader = Shader.Find ("Diffuse");
		goW2SA.renderer.material.shader = Shader.Find ("Diffuse");
		goW2SB.renderer.material.shader = Shader.Find ("Diffuse");
		goW3SA.renderer.material.shader = Shader.Find ("Diffuse");
		goW3SB.renderer.material.shader = Shader.Find ("Diffuse");
	}

		
	if(sModif[0]==cCodeForbiddenWall){
		goW1SA.renderer.material.color = cColorForbiddenWall;
	} else if(sModif[0]==cCodeNormalWall || sModif[0]==cCodeObjRecol){
		goW1SA.renderer.material.color = colorW1SA;
	} else if(sModif[0]==cCodeTunnelWall){
		goW1SA.renderer.material.color = cColorTunnelWall;
	} else if(sModif[0]==cCodeHiddenWall){
		goW1SA.renderer.material.color = cColorHiddenWall;
	} else if(sModif[0]==cCodeW1NearGate){
		goW1SA.renderer.material.color = cColorW1SANearGate;
	}
	
	
	if(sModif[1]==cCodeForbiddenWall){
		goW2SA.renderer.material.color = cColorForbiddenWall;
	} else if(sModif[1]==cCodeNormalWall || sModif[1]==cCodeObjRecol){
		goW2SA.renderer.material.color = colorW2SA;
	} else if(sModif[1]==cCodeTunnelWall){
		goW2SA.renderer.material.color = cColorTunnelWall;
	} else if(sModif[1]==cCodeHiddenWall){
		goW2SA.renderer.material.color = cColorHiddenWall;
	} else if(sModif[1]==cCodeW2NearGate){
		goW2SA.renderer.material.color = cColorW2SANearGate;
	} 
	
	
	if(sModif[2]==cCodeForbiddenWall){
		goW3SA.renderer.material.color = cColorForbiddenWall;
	} else if(sModif[2]==cCodeNormalWall || sModif[2]==cCodeObjRecol){
		goW3SA.renderer.material.color = colorW3SA;
	} else if(sModif[2]==cCodeTunnelWall){
		goW3SA.renderer.material.color = cColorTunnelWall;
	} else if(sModif[2]==cCodeHiddenWall){
		goW3SA.renderer.material.color = cColorHiddenWall;
	} else if(sModif[2]==cCodeW3NearGate){
		goW3SA.renderer.material.color = cColorW3SANearGate;
	}
	
	
	if(sModif[4]==cCodeForbiddenWall){
		goW1SB.renderer.material.color = cColorForbiddenWall;
	} else if(sModif[4]==cCodeNormalWall || sModif[4]==cCodeObjRecol){
		goW1SB.renderer.material.color = colorW1SB;
	} else if(sModif[4]==cCodeTunnelWall){
		goW1SB.renderer.material.color = cColorTunnelWall;
	} else if(sModif[4]==cCodeHiddenWall){
		goW1SB.renderer.material.color = cColorHiddenWall;
	} else if(sModif[4]==cCodeW1NearGate){
		goW1SB.renderer.material.color = cColorW1SBNearGate;
	}
	
	
	if(sModif[5]==cCodeForbiddenWall){
		goW2SB.renderer.material.color = cColorForbiddenWall;
	} else if(sModif[5]==cCodeNormalWall || sModif[5]==cCodeObjRecol){
		goW2SB.renderer.material.color = colorW2SB;
	} else if(sModif[5]==cCodeTunnelWall){
		goW2SB.renderer.material.color = cColorTunnelWall;
	} else if(sModif[5]==cCodeHiddenWall){
		goW2SB.renderer.material.color = cColorHiddenWall;
	} else if(sModif[5]==cCodeW2NearGate){
		goW2SB.renderer.material.color = cColorW2SBNearGate;
	}

	
	if(sModif[6]==cCodeForbiddenWall){
		goW3SB.renderer.material.color = cColorForbiddenWall;
	} else if(sModif[6]==cCodeNormalWall || sModif[6]==cCodeObjRecol){
		goW3SB.renderer.material.color = colorW3SB;
	} else if(sModif[6]==cCodeTunnelWall){
		goW3SB.renderer.material.color = cColorTunnelWall;
	} else if(sModif[6]==cCodeHiddenWall){
		goW3SB.renderer.material.color = cColorHiddenWall;
	} else if(sModif[6]==cCodeW3NearGate){
		goW3SB.renderer.material.color = cColorW3SBNearGate;
	}
	
}