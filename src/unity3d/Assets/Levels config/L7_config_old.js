static function load(){

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
		Board.isLevelL7=true;
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
		Board.isPORTALlevel=false;
		Board.isRECOLECTlevel=false;
		Board.isRUNNERlevel=false;
		Gate.goGate.active=true;
		Column1.goColumn1.SetActiveRecursively(false);
		Column2.goColumn2.SetActiveRecursively(false);

		//SA, BAC:
		var cColorW1SA:Color=Color(220/255.0F,255/255.0F,220/255.0F);
		var cColorW2SA:Color=Color(120/255.0F,255/255.0F,120/255.0F);
		var cColorW3SA:Color=Color(180/255.0F,255/255.0F,180/255.0F);
		
		var cColorW1SANearGate:Color=cColorW1SA;
		var cColorW2SANearGate:Color=cColorW2SA;
		var cColorW3SANearGate:Color=cColorW3SA;
	
		//SB, ACB:
		var cColorW1SB:Color=Color(120/255.0F,255/255.0F,120/255.0F);
		var cColorW2SB:Color=Color(180/255.0F,255/255.0F,180/255.0F);
		var cColorW3SB:Color=Color(220/255.0F,255/255.0F,220/255.0F);
		
		var cColorW1SBNearGate:Color=cColorW1SB;
		var cColorW2SBNearGate:Color=cColorW2SB;
		var cColorW3SBNearGate:Color=cColorW3SB;
	
		var cColorForbiddenWall=Color(25/255.0F,160/255.0F,25/255.0F);
		var cColorTunnelWall=Color(0/255.0F,255/255.0F,200/255.0F);
	    var cColorHiddenWall=Color(0/255.0F,0/255.0F,0/255.0F,0/255.0F);
	
		var iRandomPosition=Random.Range(1,4);
		
		iRandomPosition=3;
	
		if(iRandomPosition==1){
		
			Avatar.sL_Avatar="L7";
			Avatar.sP_Avatar="P14";
			Avatar.sW_Avatar="W2";
			Avatar.sS_Avatar="SA";
			Avatar.sD_Avatar="DE";
			Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
			Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);
				
			Gate.sL_Gate="L7";
			Gate.sP_Gate="P7";
			Gate.sW_Gate="W1";
			Gate.sS_Gate="SA";
			Gate.sD_Gate="DN";

			
			Board.sP7_modif="1PP-111";
			Board.sP6_modif="111-T11";
			Board.sP8_modif="PTP-P11";
		
			Board.sP5_modif="111-T11";
			Board.sP3_modif="PTP-P11";
			Board.sP4_modif="PP1-P11";
			Board.sP9_modif="TPP-111";
			
			Board.sP12_modif="P1P-P11";
			Board.sP2_modif="PP1-P11";
			Board.sP1_modif="TPP-111";
			Board.sP10_modif="111-T11";
			Board.sP11_modif="PTP-P11";
			
			Board.sP13_modif="1PP-P11";
			Board.sP14_modif="111-T11";
			Board.sP15_modif="PTP-P11";
			Board.sP16_modif="PP1-P11";
			
			Board.sP17_modif="P1P-P11";
			Board.sP18_modif="PP1-P11";
			Board.sP19_modif="1PP-P11";


			
		} else if(iRandomPosition==2){
		
			Avatar.sL_Avatar="L7";
			Avatar.sP_Avatar="P10";
			Avatar.sW_Avatar="W1";
			Avatar.sS_Avatar="SA";
			Avatar.sD_Avatar="DE";
			Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
			Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);
				
			Gate.sL_Gate="L7";
			Gate.sP_Gate="P17";
			Gate.sW_Gate="W3";
			Gate.sS_Gate="SA";
			Gate.sD_Gate="DN";
			
			Board.sP7_modif="TPP-1P1";
			Board.sP6_modif="P1P-1P1";
			Board.sP8_modif="PP1-1P1";
		
			Board.sP5_modif="PPT-1P1";
			Board.sP3_modif="111-TP1";
			Board.sP4_modif="TPP-1P1";
			Board.sP9_modif="P1P-1P1";
			
			Board.sP12_modif="TPP-1P1";
			Board.sP2_modif="P1P-1P1";
			Board.sP1_modif="PPT-111";
			Board.sP10_modif="111-TP1";
			Board.sP11_modif="1PP-111";
			
			Board.sP13_modif="111-TP1";
			Board.sP14_modif="TPP-1P1";
			Board.sP15_modif="P1P-1P1";
			Board.sP16_modif="PP1-1P1";
			
			Board.sP17_modif="PP1-1P1";
			Board.sP18_modif="111-T11";
			Board.sP19_modif="1PP-1P1";

	
			
		} else if(iRandomPosition==3){
		
			Avatar.sL_Avatar="L7";
			Avatar.sP_Avatar="P3";
			Avatar.sW_Avatar="W3";
			Avatar.sS_Avatar="SA";
			Avatar.sD_Avatar="DS";
			Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
			Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);
					
			Gate.sL_Gate="L7";
			Gate.sP_Gate="P11";
			Gate.sW_Gate="W2";
			Gate.sS_Gate="SA";
			Gate.sD_Gate="DN";
			
			Board.sP7_modif="PP1-11P";
			Board.sP6_modif="P1P-111";
			Board.sP8_modif="PP1-11P";
		
			Board.sP5_modif="1PP-111";
			Board.sP3_modif="111-1P1";
			Board.sP4_modif="1PP-111";
			Board.sP9_modif="111-11T";
			
			Board.sP12_modif="P1P-11P";
			Board.sP2_modif="PPT-111";
			Board.sP1_modif="PTP-11P";
			Board.sP10_modif="PPT-111";
			Board.sP11_modif="P1P-11P";
			
			Board.sP13_modif="1PP-11P";
			Board.sP14_modif="111-11T";
			Board.sP15_modif="1PP-11P";
			Board.sP16_modif="111-11T";
			
			Board.sP17_modif="PPT-111";
			Board.sP18_modif="PTP-11P";
			Board.sP19_modif="PPT-11P";

	
		}
		
		Board.setStepColors("P7",false,Board.sP7_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P6",true,Board.sP6_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P8",false,Board.sP8_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		
		Board.setStepColors("P5",false,Board.sP5_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P3",false,Board.sP3_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P4",true,Board.sP4_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P9",false,Board.sP9_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		
		Board.setStepColors("P12",false,Board.sP12_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P2",true,Board.sP2_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P1",true,Board.sP1_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P10",true,Board.sP10_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P11",false,Board.sP11_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		
		Board.setStepColors("P13",true,Board.sP13_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P14",true,Board.sP14_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P15",true,Board.sP15_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P16",true,Board.sP16_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		
		Board.setStepColors("P17",false,Board.sP17_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P18",false,Board.sP18_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);
		Board.setStepColors("P19",false,Board.sP19_modif,cColorW1SA,cColorW2SA,cColorW3SA,cColorW1SB,cColorW2SB,cColorW3SB,cColorW1SANearGate,cColorW2SANearGate,cColorW3SANearGate,cColorW1SBNearGate,cColorW2SBNearGate,cColorW3SBNearGate,cColorForbiddenWall,cColorTunnelWall,cColorHiddenWall);		

	

}