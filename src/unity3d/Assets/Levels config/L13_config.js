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

		//////////////////////////////////////////
		///////1er RECOLECCIO i CONSTRUCCIO///////
		//////////////////////////////////////////
		
		Board.bIsBoardBig=false;//posar a true si el nivell es dels grans
		
		Screen.showCursor = true;//construccio, ensenya cursor ratoli
		
		//Torna a posar l'entorn a SA si es que estava a SB:
		if(SwitchCameras.isSB==true){
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
		Board.isLevelL13=true;
		Board.isLevelL14=false;
		Board.isLevelL15=false;
		Board.isLevelL16=false;
		Board.isLevelL17=false;
		Board.isLevelL18=false;
		Board.isLevelL19=false;
		Board.isLevelL20=false;
		
		//Posar un true al tipus de nivell:
		Board.isPORTALlevel=true;
		Board.isRECOLECTlevel=true;
		Board.isRUNNERlevel=false;
		
		//Inicialitzacio variables:
		Avatar.iObjRecolCounter=0;
		
		//Tocar pel nivell de recoleccio:
		Gate.goGate.SetActiveRecursively(false);
		Column1.goColumn1.SetActiveRecursively(true);
		Column2.goColumn2.SetActiveRecursively(true);
		
		//Tocar pel nivell de construccio:
		Board.iLevelTunelMax=3;//2 tunels màxim
		Board.iTunelsCounter=1;//no tocar
		Board.bAreAllTunnelsSet=false;

		Avatar.iRunnerCounter=0;//no tocar
		Avatar.iArrayCounter=0;//no tocar
		
		//////////////COLORS ENTORN////////////////
		/*
		//SA, CBA:
		//cColorW1SA=Color(255/255.0F,180/255.0F,180/255.0F);
		cColorW1SA=Color(255/255.0F,255/255.0F,190/255.0F);//-60
		Board.cBoardColorW1SA=cColorW1SA;
		//cColorW2SA=Color(255/255.0F,220/255.0F,220/255.0F);
		cColorW2SA=Color(255/255.0F,255/255.0F,150/255.0F);
		Board.cBoardColorW2SA=cColorW2SA;
		//cColorW3SA=Color(255/255.0F,120/255.0F,120/255.0F);
		cColorW3SA=Color(255/255.0F,255/255.0F,90/255.0F);
		Board.cBoardColorW3SA=cColorW3SA;
		
		var cColorW1SANearGate:Color=cColorW1SA;
		Board.cBoardColorW1SANearGate=cColorW1SANearGate;
		var cColorW2SANearGate:Color=cColorW2SA;
		Board.cBoardColorW2SANearGate=cColorW2SANearGate;
		var cColorW3SANearGate:Color=cColorW3SA;
		Board.cBoardColorW3SANearGate=cColorW3SANearGate;
	
		//SB, CAB:
		//cColorW1SB=Color(255/255.0F,220/255.0F,220/255.0F);
		cColorW1SB=Color(255/255.0F,255/255.0F,150/255.0F);
		Board.cBoardColorW1SB=cColorW1SB;
		//cColorW2SB=Color(255/255.0F,120/255.0F,120/255.0F);
		cColorW2SB=Color(255/255.0F,255/255.0F,90/255.0F);
		Board.cBoardColorW2SB=cColorW2SB;
		//cColorW3SB=Color(255/255.0F,180/255.0F,180/255.0F);
		cColorW3SB=Color(255/255.0F,255/255.0F,190/255.0F);
		Board.cBoardColorW3SB=cColorW3SB;
		
		var cColorW1SBNearGate:Color=cColorW1SB;
		Board.cBoardColorW1SBNearGate=cColorW1SBNearGate;
		var cColorW2SBNearGate:Color=cColorW2SB;
		Board.cBoardColorW2SBNearGate=cColorW2SBNearGate;
		var cColorW3SBNearGate:Color=cColorW3SB;
		Board.cBoardColorW3SBNearGate=cColorW3SBNearGate;
	*/
	
			//SA, CBA:
		//cColorW1SA=Color(255/255.0F,180/255.0F,180/255.0F);
		cColorW1SA=Color(255/255.0F,255/255.0F,180/255.0F);//-60
		Board.cBoardColorW1SA=cColorW1SA;
		//cColorW2SA=Color(255/255.0F,220/255.0F,220/255.0F);
		cColorW2SA=Color(255/255.0F,255/255.0F,120/255.0F);
		Board.cBoardColorW2SA=cColorW2SA;
		//cColorW3SA=Color(255/255.0F,120/255.0F,120/255.0F);
		cColorW3SA=Color(255/255.0F,230/255.0F,0/255.0F);
		Board.cBoardColorW3SA=cColorW3SA;
		
		var cColorW1SANearGate:Color=cColorW1SA;
		Board.cBoardColorW1SANearGate=cColorW1SANearGate;
		var cColorW2SANearGate:Color=cColorW2SA;
		Board.cBoardColorW2SANearGate=cColorW2SANearGate;
		var cColorW3SANearGate:Color=cColorW3SA;
		Board.cBoardColorW3SANearGate=cColorW3SANearGate;
	
		//SB, CAB:
		//cColorW1SB=Color(255/255.0F,220/255.0F,220/255.0F);
		cColorW1SB=Color(255/255.0F,255/255.0F,120/255.0F);
		Board.cBoardColorW1SB=cColorW1SB;
		//cColorW2SB=Color(255/255.0F,120/255.0F,120/255.0F);
		cColorW2SB=Color(255/255.0F,230/255.0F,0/255.0F);
		Board.cBoardColorW2SB=cColorW2SB;
		//cColorW3SB=Color(255/255.0F,180/255.0F,180/255.0F);
		cColorW3SB=Color(255/255.0F,255/255.0F,180/255.0F);
		Board.cBoardColorW3SB=cColorW3SB;
		
		var cColorW1SBNearGate:Color=cColorW1SB;
		Board.cBoardColorW1SBNearGate=cColorW1SBNearGate;
		var cColorW2SBNearGate:Color=cColorW2SB;
		Board.cBoardColorW2SBNearGate=cColorW2SBNearGate;
		var cColorW3SBNearGate:Color=cColorW3SB;
		Board.cBoardColorW3SBNearGate=cColorW3SBNearGate;
		
		
		cColorForbiddenWall=Board.cGeneralColorForbiddenWall;
		Board.cBoardColorForbiddenWall=cColorForbiddenWall;
		cColorTunnelWall=Board.cGeneralColorTunnelWall;
		Board.cBoardColorTunnelWall=cColorTunnelWall;
	    cColorHiddenWall=Color(0/255.0F,0/255.0F,0/255.0F,0/255.0F);
		Board.cBoardColorHiddenWall=cColorHiddenWall;
		
		//Posicio inicial avatar:
		Avatar.sL_Avatar="L13";
		Avatar.sP_Avatar="P4";
		Avatar.sW_Avatar="W1";
		Avatar.sS_Avatar="SA";
		Avatar.sD_Avatar="DE";
		Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
		Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);

		//Posicio inicial gate:
		Gate.sL_Gate="L13";
		Gate.sP_Gate="P2";
		Gate.sW_Gate="W3";
		Gate.sS_Gate="SA";
		Gate.sD_Gate="DN";//irrelevant
		
		//Posicio inicial cadires (les anomeno "columnes" pero son cadires):
		Column1.sL_Column1="L13";
		Column1.sP_Column1="P1";
		Column1.sW_Column1="W1";
		Column1.sS_Column1="SA";
		Column1.sD_Column1="DE";
		
		Column2.sL_Column2="L13";
		Column2.sP_Column2="P1";
		Column2.sW_Column2="W3";
		Column2.sS_Column2="SB";
		Column2.sD_Column2="DO";
		
		//Codis: M vol dir cadira.
		//En nivell de RECOL no cal posar on es troba avatar ni gate. Només M's i 1's i 0's.
		Board.sP1_modif="M11-1PM";
		Board.sP2_modif="111-111";
		Board.sP3_modif="000-000";
		Board.sP4_modif="111-111";
		Board.sP5_modif="000-000";
		Board.sP6_modif="000-000";
		Board.sP7_modif="000-000";
		Board.sP8_modif="000-000";
		Board.sP9_modif="000-000";
		Board.sP10_modif="000-000";
		Board.sP11_modif="000-000";
		Board.sP12_modif="000-000";
		Board.sP13_modif="000-000";
		Board.sP14_modif="000-000";
		Board.sP15_modif="1P1-1P1";
		Board.sP16_modif="000-000";
		Board.sP17_modif="000-000";
		Board.sP18_modif="000-000";
		Board.sP19_modif="000-000";

		//Configuracio zones existents i inexistents (false vol dir existent i true inexistent):
		Board.setStepColors("P1",false,Board.sP1_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P2",false,Board.sP2_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P3",true,Board.sP3_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P4",false,Board.sP4_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P5",true,Board.sP5_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P6",true,Board.sP6_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P7",true,Board.sP7_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P8",true,Board.sP8_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P9",true,Board.sP9_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P10",true,Board.sP10_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P11",true,Board.sP11_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P12",true,Board.sP12_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P13",true,Board.sP13_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P14",true,Board.sP14_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P15",false,Board.sP15_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P16",true,Board.sP16_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P17",true,Board.sP17_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P18",true,Board.sP18_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P19",true,Board.sP19_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);		
}