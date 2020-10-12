static function load(){

		Board.bIsBoardBig=false;
		if(SwitchCameras.isSA==true){//atencio
			SwitchCameras.bMoveBoardAround=true;
		}
		Board.isLevelL1=false;
		Board.isLevelL2=false;
		Board.isLevelL3=true;
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
		Board.isLevelL16=false;
		Board.isLevelL17=false;
		Board.isLevelL18=false;
		Board.isLevelL19=false;
		Board.isLevelL20=false;
		Board.isRECOLECTlevel=false;
		Board.isPORTALlevel=false;
		Board.isRUNNERlevel=false;
		Column1.goColumn1.SetActiveRecursively(false);
		Column2.goColumn2.SetActiveRecursively(false);
		Gate.goGate.SetActiveRecursively(true);

		//SA, BAC:
		var cColorL1W1SA:Color=Color(220/255.0F,220/255.0F,255/255.0F);
		var cColorL1W2SA:Color=Color(120/255.0F,120/255.0F,255/255.0F);
		var cColorL1W3SA:Color=Color(180/255.0F,180/255.0F,255/255.0F);
		
		var cColorL1W1SANearGate:Color=cColorL1W1SA;
		var cColorL1W2SANearGate:Color=cColorL1W2SA;
		var cColorL1W3SANearGate:Color=cColorL1W3SA;
	
		//SB, ABC:
		var cColorL1W1SB:Color=Color(180/255.0F,180/255.0F,255/255.0F);
		var cColorL1W2SB:Color=Color(220/255.0F,220/255.0F,255/255.0F);
		var cColorL1W3SB:Color=Color(120/255.0F,120/255.0F,255/255.0F);
		
		var cColorL1W1SBNearGate:Color=cColorL1W1SB;
		var cColorL1W2SBNearGate:Color=cColorL1W2SB;
		var cColorL1W3SBNearGate:Color=cColorL1W3SB;
	
		var cColorForbiddenWall=Board.cGeneralColorForbiddenWall;
		var cColorTunnelWall=Board.cGeneralColorTunnelWall;
	    var cColorL1HiddenWall=Color(0/255.0F,0/255.0F,0/255.0F,0/255.0F);
	
		var iRandomPosition=Random.Range(1,4);
		
		//iRandomPosition=3;
		
		if(iRandomPosition==1){
		
			Avatar.sL_Avatar="L3";
			Avatar.sP_Avatar="P15";
			Avatar.sW_Avatar="W3";
			Avatar.sS_Avatar="SB";
			Avatar.sD_Avatar="DS";
			Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
			Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);
		
			Gate.sL_Gate="L3";
			Gate.sP_Gate="P2";
			Gate.sW_Gate="W1";
			Gate.sS_Gate="SB";
			Gate.sD_Gate="DN";
			
			
			Board.sP1_modif="111-1P1";
			Board.sP2_modif="111-1BC";//gate
			Board.sP3_modif="T11-1P1";
			Board.sP4_modif="111-11T";
			Board.sP10_modif="111-111";
			Board.sP14_modif="111-111";
			Board.sP15_modif="111-1P1";
		
		} else if(iRandomPosition==2){
		
			Avatar.sL_Avatar="L3";
			Avatar.sP_Avatar="P4";
			Avatar.sW_Avatar="W2";
			Avatar.sS_Avatar="SB";
			Avatar.sD_Avatar="DS";
			Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
			Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);
		
			Gate.sL_Gate="L3";
			Gate.sP_Gate="P15";
			Gate.sW_Gate="W3";
			Gate.sS_Gate="SB";
			Gate.sD_Gate="DN";
			
			Board.sP1_modif="111-P11";
			Board.sP2_modif="111-1T1";
			Board.sP3_modif="111-111";
			Board.sP4_modif="111-P11";
			Board.sP10_modif="111-111";
			Board.sP14_modif="11T-P11";
			Board.sP15_modif="111-AB1";//gate	
		
		} else if(iRandomPosition==3){
		
			Avatar.sL_Avatar="L3";
			Avatar.sP_Avatar="P2";
			Avatar.sW_Avatar="W1";
			Avatar.sS_Avatar="SB";
			Avatar.sD_Avatar="DO";
			Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
			Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);
		
			Gate.sL_Gate="L3";
			Gate.sP_Gate="P4";
			Gate.sW_Gate="W2";
			Gate.sS_Gate="SB";
			Gate.sD_Gate="DN";
			
			Board.sP1_modif="111-11P";
			Board.sP2_modif="111-11P";
			Board.sP3_modif="111-111";
			Board.sP4_modif="111-A1C";//gate	
			Board.sP10_modif="1T1-11P";
			Board.sP14_modif="111-111";
			Board.sP15_modif="111-T11";
		}
		
		Board.setStepColors("P1",false,Board.sP1_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		
		Board.setStepColors("P2",false,Board.sP2_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		
		Board.setStepColors("P3",false,Board.sP3_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		
		Board.setStepColors("P4",false,Board.sP4_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		Board.sP5_modif="000-000";
		Board.setStepColors("P5",true,Board.sP5_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		Board.sP6_modif="000-000";
		Board.setStepColors("P6",true,Board.sP6_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		Board.sP7_modif="000-000";
		Board.setStepColors("P7",true,Board.sP7_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		
		Board.sP8_modif="000-000";
		Board.setStepColors("P8",true,Board.sP8_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		Board.sP9_modif="000-000";
		Board.setStepColors("P9",true,Board.sP9_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		
		Board.setStepColors("P10",false,Board.sP10_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		Board.sP11_modif="000-000";
		Board.setStepColors("P11",true,Board.sP11_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		Board.sP12_modif="000-000";
		Board.setStepColors("P12",true,Board.sP12_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		Board.sP13_modif="000-000";
		Board.setStepColors("P13",true,Board.sP13_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		
		Board.setStepColors("P14",false,Board.sP14_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		
		Board.setStepColors("P15",false,Board.sP15_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		Board.sP16_modif="000-000";
		Board.setStepColors("P16",true,Board.sP16_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		Board.sP17_modif="000-000";
		Board.setStepColors("P17",true,Board.sP17_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		Board.sP18_modif="000-000";
		Board.setStepColors("P18",true,Board.sP18_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);
		Board.sP19_modif="000-000";
		Board.setStepColors("P19",true,Board.sP19_modif,cColorL1W1SA,cColorL1W2SA,cColorL1W3SA,cColorL1W1SB,cColorL1W2SB,cColorL1W3SB,cColorL1W1SANearGate,cColorL1W2SANearGate,cColorL1W3SANearGate,cColorL1W1SBNearGate,cColorL1W2SBNearGate,cColorL1W3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorL1HiddenWall);		
	
}