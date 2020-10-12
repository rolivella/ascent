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

		//NIVELL RECOL·LECCIÓ. A donar d'alta en aquest mateix js:
		//-Donar d'alta a dalt de tot les static vars!
		//-Al Avatar.js, canviar quan es fa l'ascent el if(isLevelL9==true) amb el L que pertoqui. 
		//-Posar aquí:
		//	Board.isRECOLECTlevel=true;
		//	Gate.goGate.active=false;
		//	Column1.goColumn1.SetActiveRecursively(true);
		//	Column2.goColumn2.SetActiveRecursively(true);
		//-Comentar les "//Board.sP5_modif="AB1-111";" on es troba la gate.
		//-A TOTES les variables de color, posar p.ex. Board.cBoardColorW1SA=cColorW1SA;

		Board.bIsBoardBig=false;
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
		Board.isPORTALlevel=false;
		Board.isRECOLECTlevel=true;
		Board.isRUNNERlevel=false;
		Gate.goGate.active=false;
		Column1.goColumn1.SetActiveRecursively(true);
		Column2.goColumn2.SetActiveRecursively(true);
		
		//SA, ABC:
		var cColorW1SA:Color=Color(180/255.0F,255/255.0F,180/255.0F);
		Board.cBoardColorW1SA=cColorW1SA;
		var cColorW2SA:Color=Color(120/255.0F,255/255.0F,120/255.0F);
		Board.cBoardColorW2SA=cColorW2SA;
		var cColorW3SA:Color=Color(220/255.0F,255/255.0F,220/255.0F);
		Board.cBoardColorW3SA=cColorW3SA;
		
		var cColorW1SANearGate:Color=cColorW1SA;
		Board.cBoardColorW1SANearGate=cColorW1SANearGate;
		var cColorW2SANearGate:Color=cColorW2SA;
		Board.cBoardColorW2SANearGate=cColorW2SANearGate;
		var cColorW3SANearGate:Color=cColorW3SA;
		Board.cBoardColorW2SANearGate=cColorW2SANearGate;
	
		//SB, ABC:
		var cColorW1SB:Color=Color(180/255.0F,255/255.0F,180/255.0F);
		Board.cBoardColorW1SB=cColorW1SB;
		var cColorW2SB:Color=Color(220/255.0F,255/255.0F,220/255.0F);
		Board.cBoardColorW2SB=cColorW2SB;
		var cColorW3SB:Color=Color(120/255.0F,255/255.0F,120/255.0F);
		Board.cBoardColorW3SB=cColorW3SB;
		
		var cColorW1SBNearGate:Color=cColorW1SB;
		Board.cBoardColorW1SBNearGate=cColorW1SBNearGate;
		var cColorW2SBNearGate:Color=cColorW2SB;
		Board.cBoardColorW2SBNearGate=cColorW2SBNearGate;
		var cColorW3SBNearGate:Color=cColorW3SB;
		Board.cBoardColorW3SBNearGate=cColorW3SBNearGate;
	
		var cColorForbiddenWall=Color(25/255.0F,160/255.0F,25/255.0F);
		Board.cBoardColorForbiddenWall=cColorForbiddenWall;
		var cColorTunnelWall=Color(0/255.0F,255/255.0F,200/255.0F);
		Board.cBoardColorTunnelWall=cColorTunnelWall;
	    var cColorHiddenWall=Color(0/255.0F,0/255.0F,0/255.0F,0/255.0F);
		Board.cBoardColorHiddenWall=cColorHiddenWall;
	
		//var iRandomPosition=Random.Range(1,4);
		
		//iRandomPosition=2;
	
		//if(iRandomPosition==1){
		
			Avatar.sL_Avatar="L9";
			Avatar.sP_Avatar="P2";
			Avatar.sW_Avatar="W3";
			Avatar.sS_Avatar="SA";
			Avatar.sD_Avatar="DE";
			Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
			Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);
		
			Gate.sL_Gate="L9";
			Gate.sP_Gate="P3";
			Gate.sW_Gate="W1";
			Gate.sS_Gate="SA";
			Gate.sD_Gate="DN";
			
			Column1.sL_Column1="L9";
			Column1.sP_Column1="P1";
			Column1.sW_Column1="W1";
			Column1.sS_Column1="SA";
			Column1.sD_Column1="DN";
			
			Column2.sL_Column2="L9";
			Column2.sP_Column2="P4";
			Column2.sW_Column2="W2";
			Column2.sS_Column2="SA";
			Column2.sD_Column2="DN";
			
			Board.sP1_modif="MBC-111";
			Board.sP2_modif="111-111";
			Board.sP3_modif="111-111";
			Board.sP4_modif="AMC-111";
			//Board.sP5_modif="AB1-111";
			Board.sP5_modif="000-000";
			Board.sP6_modif="000-000";
			Board.sP7_modif="000-000";
			Board.sP8_modif="000-000";
			Board.sP9_modif="000-000";
			Board.sP10_modif="111-111";
			Board.sP11_modif="000-000";
			Board.sP12_modif="000-000";
			Board.sP13_modif="000-000";
			Board.sP14_modif="111-111";
			Board.sP15_modif="111-111";
			Board.sP16_modif="000-000";
			Board.sP17_modif="000-000";
			Board.sP18_modif="000-000";
			Board.sP19_modif="000-000";
		/*	
		} else if(iRandomPosition==2){
			Avatar.sL_Avatar="L4";
			Avatar.sP_Avatar="P1";
			Avatar.sW_Avatar="W1";
			Avatar.sS_Avatar="SA";
			Avatar.sD_Avatar="DN";
			Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
			Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);
		
			Gate.sL_Gate="L4";
			Gate.sP_Gate="P18";
			Gate.sW_Gate="W2";
			Gate.sS_Gate="SA";
			Gate.sD_Gate="DN";
			
			Board.sP1_modif="111-111";
			Board.sP2_modif="P11-111";
			Board.sP3_modif="P11-111";
			Board.sP4_modif="1P1-111";
			Board.sP5_modif="111-111";
			Board.sP6_modif="111-111";
			Board.sP7_modif="11P-111";
			Board.sP8_modif="P11-111";
			Board.sP9_modif="111-111";
			Board.sP10_modif="1P1-111";
			Board.sP11_modif="P11-111";
			Board.sP12_modif="11P-111";
			Board.sP13_modif="111-111";
			Board.sP14_modif="11P-111";
			Board.sP15_modif="11P-111";
			Board.sP16_modif="111-111";
			Board.sP17_modif="1P1-111";
			Board.sP18_modif="A1C-111";
			Board.sP19_modif="1P1-111";
			
		} else if(iRandomPosition==3){
			Avatar.sL_Avatar="L4";
			Avatar.sP_Avatar="P1";
			Avatar.sW_Avatar="W3";
			Avatar.sS_Avatar="SA";
			Avatar.sD_Avatar="DN";
			Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
			Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);
		
			Gate.sL_Gate="L4";
			Gate.sP_Gate="P9";
			Gate.sW_Gate="W1";
			Gate.sS_Gate="SA";
			Gate.sD_Gate="DN";
			
			Board.sP1_modif="111-111";
			Board.sP2_modif="P11-111";
			Board.sP3_modif="P11-111";
			Board.sP4_modif="1P1-111";
			Board.sP5_modif="111-111";
			Board.sP6_modif="111-111";
			Board.sP7_modif="11P-111";
			Board.sP8_modif="P11-111";
			Board.sP9_modif="1BC-111";
			Board.sP10_modif="1P1-111";
			Board.sP11_modif="P11-111";
			Board.sP12_modif="11P-111";
			Board.sP13_modif="111-111";
			Board.sP14_modif="11P-111";
			Board.sP15_modif="11P-111";
			Board.sP16_modif="111-111";
			Board.sP17_modif="1P1-111";
			Board.sP18_modif="111-111";
			Board.sP19_modif="1P1-111";

		}
		*/

		Board.setStepColors("P1",false,Board.sP1_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P2",false,Board.sP2_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P3",false,Board.sP3_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P4",false,Board.sP4_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P5",true,Board.sP5_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P6",true,Board.sP6_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P7",true,Board.sP7_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P8",true,Board.sP8_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P9",true,Board.sP9_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P10",false,Board.sP10_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P11",true,Board.sP11_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P12",true,Board.sP12_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P13",true,Board.sP13_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P14",false,Board.sP14_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P15",false,Board.sP15_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P16",true,Board.sP16_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P17",true,Board.sP17_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P18",true,Board.sP18_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P19",true,Board.sP19_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);		
}