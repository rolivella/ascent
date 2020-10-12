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

		/////////////////////////////
		//NIVELL CONSTRUCCIÓ TUNEL 3///
		/////////////////////////////
		
		Screen.showCursor = true;//ensenya cursor ratoli
		Board.bIsBoardBig=true;
		if(SwitchCameras.isSB==true){
			SwitchCameras.bMoveBoardAround=true;
		}
		
		Board.isLevelL1=false;
		Board.isLevelL2=false;
		Board.isLevelL3=false;
		Board.isLevelL4=false;
		Board.isLevelL5=false;
		Board.isLevelL6=false;
		Board.isLevelL7=false;
		Board.isLevelL8=false;
		Board.isLevelL9=true;
		Board.isLevelL10=false;
		Board.isLevelL11=false;
		Board.isLevelL12=false;
		Board.isLevelL13=false;
		Board.isLevelL14=false;
		Board.isLevelL15=false;
		Board.isLevelL16=false;
		Board.isLevelL17=false;
		Board.isLevelL18=false;
		Board.isLevelL19=false;
		Board.isLevelL20=false;
		Board.isPORTALlevel=true;
		Board.isRECOLECTlevel=false;
		Board.isRUNNERlevel=false;
		Gate.goGate.SetActiveRecursively(true);
		Column1.goColumn1.SetActiveRecursively(false);
		Column2.goColumn2.SetActiveRecursively(false);
		Board.iLevelTunelMax=2;//2 tunels màxim (tocar també aquest valor a Avatar.js).
		Board.iTunelsCounter=1;//no es toca
		Board.bAreAllTunnelsSet=false;
		
/*		
		//SA, CBA:
		cColorW1SA=Color(255/255.0F,255/255.0F,180/255.0F);
		Board.cBoardColorW1SA=cColorW1SA;
		cColorW2SA=Color(255/255.0F,255/255.0F,220/255.0F);
		Board.cBoardColorW2SA=cColorW2SA;
		cColorW3SA=Color(255/255.0F,255/255.0F,120/255.0F);
		Board.cBoardColorW3SA=cColorW3SA;
		
		cColorW1SANearGate=cColorW1SA;
		Board.cBoardColorW1SANearGate=cColorW1SANearGate;
		cColorW2SANearGate=cColorW2SA;
		Board.cBoardColorW2SANearGate=cColorW2SANearGate;
		cColorW3SANearGate=cColorW3SA;
		Board.cBoardColorW2SANearGate=cColorW2SANearGate;
	
		//SB, BAC:
		cColorW1SB=Color(255/255.0F,255/255.0F,220/255.0F);
		Board.cBoardColorW1SB=cColorW1SB;
		cColorW2SB=Color(255/255.0F,255/255.0F,180/255.0F);
		Board.cBoardColorW2SB=cColorW2SB;
		cColorW3SB=Color(255/255.0F,255/255.0F,120/255.0F);
		Board.cBoardColorW3SB=cColorW3SB;

		cColorW1SBNearGate=cColorW1SB;
		Board.cBoardColorW1SBNearGate=cColorW1SBNearGate;
		cColorW2SBNearGate=cColorW2SB;
		Board.cBoardColorW2SBNearGate=cColorW2SBNearGate;
		cColorW3SBNearGate=cColorW3SB;
		Board.cBoardColorW3SBNearGate=cColorW3SBNearGate;
	*/
	
//SA:
		cColorW1SA=Color(120/255.0F,255/255.0F,120/255.0F);
		Board.cBoardColorW1SA=cColorW1SA;
		cColorW2SA=Color(220/255.0F,255/255.0F,220/255.0F);
		Board.cBoardColorW2SA=cColorW2SA;
		cColorW3SA=Color(180/255.0F,255/255.0F,180/255.0F);
		Board.cBoardColorW3SA=cColorW3SA;
		
		var cColorW1SANearGate:Color=cColorW1SA;
		Board.cBoardColorW1SANearGate=cColorW1SANearGate;
		var cColorW2SANearGate:Color=cColorW2SA;
		Board.cBoardColorW2SANearGate=cColorW2SANearGate;
		var cColorW3SANearGate:Color=cColorW3SA;
		Board.cBoardColorW3SANearGate=cColorW3SANearGate;
	
		//SB:
		cColorW1SB=Color(120/255.0F,255/255.0F,120/255.0F);
		Board.cBoardColorW1SB=cColorW1SB;
		cColorW2SB=Color(220/255.0F,255/255.0F,220/255.0F);
		Board.cBoardColorW2SB=cColorW2SB;
		cColorW3SB=Color(180/255.0F,255/255.0F,180/255.0F);
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
	
		Avatar.sL_Avatar="L9";
		Avatar.sP_Avatar="P18";
		Avatar.sW_Avatar="W1";
		Avatar.sS_Avatar="SA";
		Avatar.sD_Avatar="DN";
		Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
		Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);
			
		Gate.sL_Gate="L9";
		Gate.sP_Gate="P5";
		Gate.sW_Gate="W2";
		Gate.sS_Gate="SB";
		Gate.sD_Gate="DO";
		
		Board.sP7_modif="000-000";
		Board.sP6_modif="000-000";
		Board.sP8_modif="000-000";
	
		Board.sP5_modif="111-A1C";//gate
		Board.sP3_modif="1P1-111";
		Board.sP4_modif="111-1P1";
		Board.sP9_modif="111-111";
		
		Board.sP12_modif="000-000";
		Board.sP2_modif="111-1P1";
		Board.sP1_modif="000-000";
		Board.sP10_modif="1P1-111";
		Board.sP11_modif="000-000";
		
		Board.sP13_modif="000-000";
		Board.sP14_modif="111-111";
		Board.sP15_modif="111-111";
		Board.sP16_modif="000-000";
		
		Board.sP17_modif="000-000";
		Board.sP18_modif="111-1P1";
		Board.sP19_modif="000-000";
		
		Board.setStepColors("P1",true,Board.sP1_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P2",false,Board.sP2_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P3",false,Board.sP3_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P4",false,Board.sP4_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P5",false,Board.sP5_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P6",true,Board.sP6_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P7",true,Board.sP7_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P8",true,Board.sP8_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P9",false,Board.sP9_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P10",false,Board.sP10_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P11",true,Board.sP11_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P12",true,Board.sP12_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P13",true,Board.sP13_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P14",false,Board.sP14_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P15",false,Board.sP15_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P16",true,Board.sP16_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P17",true,Board.sP17_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P18",false,Board.sP18_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P19",true,Board.sP19_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);		
}