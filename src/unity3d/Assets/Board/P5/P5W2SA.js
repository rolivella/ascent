public var sModif:char;
public var sThisScriptName:String;

function OnMouseOver(){
	if(Board.isPORTALlevel==true && Board.bAreAllTunnelsSet==false && Board.bPhysicalUserInterfaceON){
		sThisScriptName=this.GetType().ToString();
		sModif=Avatar.calculateWallModificator("P"+sThisScriptName[1],"W"+sThisScriptName[3],"S"+sThisScriptName[5]);
		if(sModif=='1'){
			Board.sWallUnderMouse=sThisScriptName;	
			renderer.material.shader = Shader.Find ("Self-Illumin/Outlined Diffuse");
		}
	}
}

function OnMouseExit(){
	if(Board.isPORTALlevel==true && Board.bAreAllTunnelsSet==false){
		sThisScriptName=this.GetType().ToString();
		sModif=Avatar.calculateWallModificator("P"+sThisScriptName[1],"W"+sThisScriptName[3],"S"+sThisScriptName[5]);
		if(sModif=='1'){
			renderer.material.shader = Shader.Find ("Diffuse");
			Board.sWallUnderMouse="";
		}
	}
}
