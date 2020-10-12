static var cColorW1SA:Color;
static var cColorW2SA:Color;
static var cColorW3SA:Color;

static var cColorW1SB:Color;
static var cColorW2SB:Color;
static var cColorW3SB:Color;

static var cColorW1SANearGate:Color;
static var cColorW2SANearGate:Color;
static var cColorW3SANearGate:Color;

static var cColorW1SBNearGate:Color;
static var cColorW2SBNearGate:Color;
static var cColorW3SBNearGate:Color;

static var cColorForbiddenWall:Color;
static var cColorTunnelWall:Color;
static var cColorHiddenWall:Color;

static function load(){

		
		Board.bIsBoardBig=true;//posar a true si el nivell es dels grans
		
		Screen.showCursor = true;//construccio, ensenya cursor ratoli
		
		//Comença a SB:
		if(SwitchCameras.isSA==true){//atencio
			SwitchCameras.bMoveBoardAround=true;
		}
		
		//Posar un true al nivell actual: 
		Board.isLevelL1=false;
		Board.isLevelL2=false;
		Board.isLevelL3=false;
		Board.isLevelL4=false;
		Board.isLevelL5=false;
		Board.isLevelL6=false;
		Board.isLevelL7=false;
		Board.isLevelL8=false;
		Board.isLevelL9=false;
		Board.isLevelL10=false;
		Board.isLevelL11=false;
		Board.isLevelL12=false;
		Board.isLevelL13=false;
		Board.isLevelL14=false;
		Board.isLevelL15=false;
		Board.isLevelL16=true;
		Board.isLevelL17=false;
		Board.isLevelL18=false;
		Board.isLevelL19=false;
		Board.isLevelL20=false;
		
		//Posar un true al tipus de nivell:
		Board.isPORTALlevel=false;
		Board.isRECOLECTlevel=true;
		Board.isRUNNERlevel=true;
		
		//Tocar pel nivell de recoleccio:
		Gate.goGate.SetActiveRecursively(false);
		Column1.goColumn1.SetActiveRecursively(true);
		Column2.goColumn2.SetActiveRecursively(true);
		
		//Tocar pel nivell de construccio:
		Board.iLevelTunelMax=3;
		Board.iTunelsCounter=1;//no tocar
		Board.bAreAllTunnelsSet=false;

		//Inicialitzacio variables, no tocar:
		Avatar.iObjRecolCounter=0;
		Avatar.iRunnerCounter=0;
		Avatar.iArrayCounter=0;
		
		//////////////COLORS ENTORN////////////////
/*		//SA, CBA:
		cColorW1SA=Color(255/255.0F,180/255.0F,180/255.0F);
		Board.cBoardColorW1SA=cColorW1SA;
		cColorW2SA=Color(255/255.0F,220/255.0F,220/255.0F);
		Board.cBoardColorW2SA=cColorW2SA;
		cColorW3SA=Color(255/255.0F,120/255.0F,120/255.0F);
		Board.cBoardColorW3SA=cColorW3SA;
		
		var cColorW1SANearGate:Color=cColorW1SA;
		Board.cBoardColorW1SANearGate=cColorW1SANearGate;
		var cColorW2SANearGate:Color=cColorW2SA;
		Board.cBoardColorW2SANearGate=cColorW2SANearGate;
		var cColorW3SANearGate:Color=cColorW3SA;
		Board.cBoardColorW2SANearGate=cColorW2SANearGate;
	
		//SB, CAB:
		cColorW1SB=Color(255/255.0F,220/255.0F,220/255.0F);
		Board.cBoardColorW1SB=cColorW1SB;
		cColorW2SB=Color(255/255.0F,120/255.0F,120/255.0F);
		Board.cBoardColorW2SB=cColorW2SB;
		cColorW3SB=Color(255/255.0F,180/255.0F,180/255.0F);
		Board.cBoardColorW3SB=cColorW3SB;
		
		var cColorW1SBNearGate:Color=cColorW1SB;
		Board.cBoardColorW1SBNearGate=cColorW1SBNearGate;
		var cColorW2SBNearGate:Color=cColorW2SB;
		Board.cBoardColorW2SBNearGate=cColorW2SBNearGate;
		var cColorW3SBNearGate:Color=cColorW3SB;
		Board.cBoardColorW3SBNearGate=cColorW3SBNearGate;
*/
/*
		//SA, CBA:
		cColorW1SA=Color(255/255.0F,255/255.0F,150/255.0F);
		Board.cBoardColorW1SA=cColorW1SA;
		cColorW2SA=Color(255/255.0F,255/255.0F,190/255.0F);
		Board.cBoardColorW2SA=cColorW2SA;
		cColorW3SA=Color(255/255.0F,255/255.0F,90/255.0F);
		Board.cBoardColorW3SA=cColorW3SA;
		
		cColorW1SANearGate=cColorW1SA;
		Board.cBoardColorW1SANearGate=cColorW1SANearGate;
		cColorW2SANearGate=cColorW2SA;
		Board.cBoardColorW2SANearGate=cColorW2SANearGate;
		cColorW3SANearGate=cColorW3SA;
		Board.cBoardColorW3SANearGate=cColorW3SANearGate;
	
		//SB, BAC:
		cColorW1SB=Color(255/255.0F,255/255.0F,190/255.0F);
		Board.cBoardColorW1SB=cColorW1SB;
		cColorW2SB=Color(255/255.0F,255/255.0F,150/255.0F);
		Board.cBoardColorW2SB=cColorW2SB;
		cColorW3SB=Color(255/255.0F,255/255.0F,90/255.0F);
		Board.cBoardColorW3SB=cColorW3SB;
		
		cColorW1SBNearGate=cColorW1SB;
		Board.cBoardColorW1SBNearGate=cColorW1SBNearGate;
		cColorW2SBNearGate=cColorW2SB;
		Board.cBoardColorW2SBNearGate=cColorW2SBNearGate;
		cColorW3SBNearGate=cColorW3SB;
		Board.cBoardColorW3SBNearGate=cColorW3SBNearGate;
*/
			//SA, CBA:
		cColorW1SA=Color(255/255.0F,255/255.0F,120/255.0F);
		Board.cBoardColorW1SA=cColorW1SA;
		cColorW2SA=Color(255/255.0F,255/255.0F,180/255.0F);
		Board.cBoardColorW2SA=cColorW2SA;
		cColorW3SA=Color(255/255.0F,230/255.0F,0/255.0F);
		Board.cBoardColorW3SA=cColorW3SA;
		
		cColorW1SANearGate=cColorW1SA;
		Board.cBoardColorW1SANearGate=cColorW1SANearGate;
		cColorW2SANearGate=cColorW2SA;
		Board.cBoardColorW2SANearGate=cColorW2SANearGate;
		cColorW3SANearGate=cColorW3SA;
		Board.cBoardColorW3SANearGate=cColorW3SANearGate;
	
		//SB, BAC:
		cColorW1SB=Color(255/255.0F,255/255.0F,180/255.0F);
		Board.cBoardColorW1SB=cColorW1SB;
		cColorW2SB=Color(255/255.0F,255/255.0F,120/255.0F);
		Board.cBoardColorW2SB=cColorW2SB;
		cColorW3SB=Color(255/255.0F,230/255.0F,0/255.0F);
		Board.cBoardColorW3SB=cColorW3SB;
		
		cColorW1SBNearGate=cColorW1SB;
		Board.cBoardColorW1SBNearGate=cColorW1SBNearGate;
		cColorW2SBNearGate=cColorW2SB;
		Board.cBoardColorW2SBNearGate=cColorW2SBNearGate;
		cColorW3SBNearGate=cColorW3SB;
		Board.cBoardColorW3SBNearGate=cColorW3SBNearGate;
		
		
		
		cColorForbiddenWall=Board.cGeneralColorForbiddenWall;
		Board.cBoardColorForbiddenWall=cColorForbiddenWall;
		cColorTunnelWall=Board.cGeneralColorTunnelWall;
		Board.cBoardColorTunnelWall=cColorTunnelWall;
	    cColorHiddenWall=Color(0/255.0F,0/255.0F,0/255.0F,0/255.0F);
		Board.cBoardColorHiddenWall=cColorHiddenWall;
		
		//Posicio inicial avatar:
		Avatar.sL_Avatar="L16";
		Avatar.sP_Avatar="P17";
		Avatar.sW_Avatar="W1";
		Avatar.sS_Avatar="SB";
		Avatar.sD_Avatar="DO";
		Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
		Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);

		//Posicio gate:
		Gate.sL_Gate="L16";
		Gate.sP_Gate="P8";//ULL: si es canvia posicio GATE, modif. tambe Avatar.js lin. 300
		Gate.sW_Gate="W3";
		Gate.sS_Gate="SB";
		Gate.sD_Gate="DN";//irrelevant
		
		//Posicio inicial cadires (les anomeno "columnes" pero son cadires):
		Column1.sL_Column1="L16";
		Column1.sP_Column1="P7";
		Column1.sW_Column1="W2";
		Column1.sS_Column1="SB";
		Column1.sD_Column1="DE";//irrellevant
		
		Column2.sL_Column2="L16";
		Column2.sP_Column2="P19";
		Column2.sW_Column2="W3";
		Column2.sS_Column2="SB";
		Column2.sD_Column2="DO";//irrellevant
		
		//Nivell RECOL:
		//- M vol dir cadira.
		//- NO CAL posar on es troba avatar ni gate. Només M's i 1's i 0's.
		Board.sP1_modif="000-111";
		Board.sP2_modif="000-000";
		Board.sP3_modif="000-000";
		Board.sP4_modif="000-000";
		Board.sP5_modif="000-000";
		Board.sP6_modif="000-000";
		Board.sP7_modif="000-1M1";
		Board.sP8_modif="000-111";
		Board.sP9_modif="000-000";
		Board.sP10_modif="000-000";
		Board.sP11_modif="000-111";
		Board.sP12_modif="000-111";
		Board.sP13_modif="000-000";
		Board.sP14_modif="000-000";
		Board.sP15_modif="000-000";
		Board.sP16_modif="000-000";
		Board.sP17_modif="000-111";
		Board.sP18_modif="000-000";
		Board.sP19_modif="000-11M";

		//Configuracio zones existents i inexistents (false vol dir existent i true inexistent):
		Board.setStepColors("P1",false,Board.sP1_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P2",false,Board.sP2_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P3",false,Board.sP3_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P4",false,Board.sP4_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P5",true,Board.sP5_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P6",false,Board.sP6_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P7",false,Board.sP7_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P8",false,Board.sP8_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P9",true,Board.sP9_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P10",false,Board.sP10_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P11",false,Board.sP11_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P12",false,Board.sP12_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P13",true,Board.sP13_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P14",false,Board.sP14_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P15",false,Board.sP15_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P16",true,Board.sP16_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P17",false,Board.sP17_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P18",false,Board.sP18_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P19",false,Board.sP19_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
}