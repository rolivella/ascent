public var sModif:char;
public var sThisScriptName:String;

function OnMouseOver(){
	if(Board.isPORTALlevel==true && Board.bAreAllTunnelsSet==false && Board.bPhysicalUserInterfaceON){
		sThisScriptName=this.GetType().ToString();
		sModif=Avatar.calculateWallModificator("P"+sThisScriptName[1].ToString()+sThisScriptName[2].ToString(),"W"+sThisScriptName[4],"S"+sThisScriptName[6]);
		if(sModif=='1'){
			Board.sWallUnderMouse=sThisScriptName;	
			renderer.material.shader = Shader.Find ("Self-Illumin/Outlined Diffuse");
		}
	}
}

function OnMouseExit(){
	if(Board.isPORTALlevel==true && Board.bAreAllTunnelsSet==false){
		sThisScriptName=this.GetType().ToString();
		sModif=Avatar.calculateWallModificator("P"+sThisScriptName[1].ToString()+sThisScriptName[2].ToString(),"W"+sThisScriptName[4],"S"+sThisScriptName[6]);
		if(sModif=='1'){	
			renderer.material.shader = Shader.Find ("Diffuse");
			Board.sWallUnderMouse="";
		}
	}
}
