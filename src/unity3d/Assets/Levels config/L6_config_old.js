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
		Board.isLevelL6=true;
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
		Board.isPORTALlevel=false;
		Board.isRECOLECTlevel=false;
		Board.isRUNNERlevel=false;
		Gate.goGate.active=true;
		Column1.goColumn1.SetActiveRecursively(false);
		Column2.goColumn2.SetActiveRecursively(false);

		//SA, CBA:
		var cColorW1SA:Color=Color(180/255.0F,255/255.0F,180/255.0F);
		var cColorW2SA:Color=Color(220/255.0F,255/255.0F,220/255.0F);
		var cColorW3SA:Color=Color(120/255.0F,255/255.0F,120/255.0F);
		
		var cColorW1SANearGate:Color=cColorW1SA;
		var cColorW2SANearGate:Color=cColorW2SA;
		var cColorW3SANearGate:Color=cColorW3SA;
	
		//SB, CAB:
		var cColorW1SB:Color=Color(220/255.0F,255/255.0F,220/255.0F);
		var cColorW2SB:Color=Color(120/255.0F,255/255.0F,120/255.0F);
		var cColorW3SB:Color=Color(180/255.0F,255/255.0F,180/255.0F);
		
		var cColorW1SBNearGate:Color=cColorW1SB;
		var cColorW2SBNearGate:Color=cColorW2SB;
		var cColorW3SBNearGate:Color=cColorW3SB;
	
		var cColorForbiddenWall=Color(25/255.0F,160/255.0F,25/255.0F);
		var cColorTunnelWall=Color(0/255.0F,255/255.0F,200/255.0F);
	    var cColorHiddenWall=Color(0/255.0F,0/255.0F,0/255.0F,0/255.0F);
	
		var iRandomPosition=Random.Range(1,4);
		
		//iRandomPosition=3;
	
		if(iRandomPosition==1){
		
			Avatar.sL_Avatar="L6";
			Avatar.sP_Avatar="P9";
			Avatar.sW_Avatar="W1";
			Avatar.sS_Avatar="SA";
			Avatar.sD_Avatar="DN";
			Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
			Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);
				
			Gate.sL_Gate="L6";
			Gate.sP_Gate="P18";
			Gate.sW_Gate="W2";
			Gate.sS_Gate="SA";
			Gate.sD_Gate="DN";

			
			Board.sP7_modif="000-000";
			Board.sP6_modif="000-000";
			Board.sP8_modif="000-000";
		
			Board.sP5_modif="T11-111";
			Board.sP3_modif="011-011";
			Board.sP4_modif="011-011";
			Board.sP9_modif="111-111";
			
			Board.sP12_modif="000-000";
			Board.sP2_modif="110-P10";
			Board.sP1_modif="000-000";
			Board.sP10_modif="101-101";
			Board.sP11_modif="000-000";
			
			Board.sP13_modif="000-000";
			Board.sP14_modif="110-1T0";
			Board.sP15_modif="101-101";
			Board.sP16_modif="000-000";
			
			Board.sP17_modif="000-000";
			Board.sP18_modif="A1C-111";
			Board.sP19_modif="000-000";


			
		} else if(iRandomPosition==2){
		
			Avatar.sL_Avatar="L6";
			Avatar.sP_Avatar="P5";
			Avatar.sW_Avatar="W3";
			Avatar.sS_Avatar="SA";
			Avatar.sD_Avatar="DN";
			Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
			Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);
					
			Gate.sL_Gate="L6";
			Gate.sP_Gate="P9";
			Gate.sW_Gate="W1";
			Gate.sS_Gate="SA";
			Gate.sD_Gate="DN";
			
			Board.sP7_modif="000-000";
			Board.sP6_modif="000-000";
			Board.sP8_modif="000-000";
		
			Board.sP5_modif="111-111";
			Board.sP3_modif="011-011";
			Board.sP4_modif="011-011";
			Board.sP9_modif="1BC-111";
			
			Board.sP12_modif="000-000";
			Board.sP2_modif="110-110";
			Board.sP1_modif="000-000";
			Board.sP10_modif="101-T01";
			Board.sP11_modif="000-000";
			
			Board.sP13_modif="000-000";
			Board.sP14_modif="110-110";
			Board.sP15_modif="101-10P";
			Board.sP16_modif="000-000";
			
			Board.sP17_modif="000-000";
			Board.sP18_modif="11T-111";
			Board.sP19_modif="000-000";
	
			
		} else if(iRandomPosition==3){
		
			Avatar.sL_Avatar="L6";
			Avatar.sP_Avatar="P18";
			Avatar.sW_Avatar="W2";
			Avatar.sS_Avatar="SA";
			Avatar.sD_Avatar="DO";
			Avatar.iLC_AvatarRow=Avatar.getLevelConfRow(Avatar.sP_Avatar);
			Avatar.iLC_AvatarCol=Avatar.getLevelConfCol(Avatar.sP_Avatar);
					
			Gate.sL_Gate="L6";
			Gate.sP_Gate="P5";
			Gate.sW_Gate="W3";
			Gate.sS_Gate="SA";
			Gate.sD_Gate="DN";
			
			Board.sP7_modif="000-000";
			Board.sP6_modif="000-000";
			Board.sP8_modif="000-000";
		
			Board.sP5_modif="AB1-111";
			Board.sP3_modif="011-01T";
			Board.sP4_modif="011-0P1";
			Board.sP9_modif="1T1-111";
			
			Board.sP12_modif="000-000";
			Board.sP2_modif="110-110";
			Board.sP1_modif="000-000";
			Board.sP10_modif="101-101";
			Board.sP11_modif="000-000";
			
			Board.sP13_modif="000-000";
			Board.sP14_modif="110-110";
			Board.sP15_modif="101-101";
			Board.sP16_modif="000-000";
			
			Board.sP17_modif="000-000";
			Board.sP18_modif="111-111";
			Board.sP19_modif="000-000";

	
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