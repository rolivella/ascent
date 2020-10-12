import processing.core.*;

//The Ascent, v.0.1.
//Roger Olivella-Pujol
//Creation date: 14/11/2010. Processing 1.1.
//Modifications: 
// - 18/11/2010: first level, LAPIS. 
// - 21/11/2010: reprog. to classes and first level finished.
// - 23/11/2010: first level big modifs. 
// - 24/11/2010: code migration to Eclipse 3.5.2 under Ubuntu Lucid Lynx

public class TheAscent extends PApplet {

private static final long serialVersionUID = 1L;//Eclipse recommendation
float posXTurtle;
float posYTurtle;
float newposXTurtle;
float newposYTurtle;
float lonCubeSide;
float angleCubeSide;
float posStartXTurtle;
float posStartYTurtle;
float backposXTurtle;
float backposYTurtle;
boolean bPerspective=true;
float posXcenter;
float posYcenter;
int iSide=2;//1, 2 or 3
//int iDelay=40;
float[] posCenterNeckerCube=new float[2];
int iRandNumGate=-1;
int iRandNumAvatar=-1;
boolean avatarS1P1=false;
boolean avatarS1P2=false;
boolean avatarS2P1=false;
boolean avatarS2P2=false;
boolean avatarS3P1=false;
boolean avatarS3P2=false;
boolean gateS1P1=false;
boolean gateS1P2=false;
boolean gateS2P1=false;
boolean gateS2P2=false;
boolean gateS3P1=false;
boolean gateS3P2=false;
int iLoopNumber=0;
boolean bAvatarSeted=false;
boolean bGateSeted=false;
boolean bAvatarMoved=false;
boolean bChangeAvatarSide=false;
boolean bChangeAvatarPerspective=false;
String sLastAvatarState="";
NeckerCubesGrid oNeckerCubesGrid;
Gate oGate;
Avatar oAvatar;
int iAvatarInitState=0;
int iGateInitState=0;
boolean bWinCondition=false;

public void setup(){
  size(600,600,P3D);//at the moment, must be a square screen (related with (width/2.0) & (height/2.0))
  //smooth();
  ortho(0, width, 0, height, -10, 10);
  posStartXTurtle=(width/2)+430;
  posStartYTurtle=(height/2)+230;
  lonCubeSide=150;
  angleCubeSide=PI/6;
  background(255);
  //Draw first level Necker Cube Grid: 
  oNeckerCubesGrid=new NeckerCubesGrid(posStartXTurtle,posStartYTurtle,1);
  posCenterNeckerCube=oNeckerCubesGrid.drawNeckerCubesGridReturnPosCenter();
  //Creates gate & avatar objects:
  oGate=new Gate(posCenterNeckerCube[0],posCenterNeckerCube[1]);
  oAvatar=new Avatar(posCenterNeckerCube[0],posCenterNeckerCube[1]);
  //Get gate & avatar initial states: 
  iAvatarInitState=oAvatar.getAvatarInitState();
  iGateInitState=oGate.getGateInitState();
  writeText();
}

public void draw() {
  //The avatar and gate must start in different sides & persp.:
  if((iAvatarInitState != iGateInitState) && !oAvatar.isAvatarSeted() && !oGate.isGateSeted()){
    oAvatar.setAvatarRandom(iAvatarInitState);
    oGate.setGateRandom(iGateInitState);
    oAvatar.setAvatar(oAvatar.getAvatarState());
  } else if((iAvatarInitState == iGateInitState) && !oAvatar.isAvatarSeted() && !oGate.isGateSeted()){
	  iAvatarInitState=oAvatar.getAvatarInitState();
	  iGateInitState=oGate.getGateInitState();
  }

  //Avatar movement: 
  if(oAvatar.isAvatarSeted() && oGate.isGateSeted() && bChangeAvatarSide){
    background(255);
    oNeckerCubesGrid.drawNeckerCubesGrid();
    oGate.setGateRandom(iGateInitState);
    oAvatar.changeAvatarSide(oAvatar.getAvatarState());
    writeText();
    bChangeAvatarSide=false;
  } 
  else if(oAvatar.isAvatarSeted() && oGate.isGateSeted() && bChangeAvatarPerspective){
    background(255);
    oNeckerCubesGrid.drawNeckerCubesGrid();
    oGate.setGateRandom(iGateInitState);
    oAvatar.changeAvatarPerspective(oAvatar.getAvatarState());
    writeText();
    bChangeAvatarPerspective=false;    
  }

  //Win condition: 
  if(!bWinCondition && oAvatar.isAvatarMoved() && (oAvatar.getAvatarState().equals(oGate.getGateState()))){
    delay(300);
    PFont fontSubtitle = loadFont("Monospaced.plain-15.vlw");
    textFont(fontSubtitle);  
    textMode(SCREEN);
    fill(0,176,240);
    text("Good! Ascending to next level, FLAMMA...",130,140);
    bWinCondition=true;
  }

}

public void keyReleased() {
  //key 'p' -> change perspective
  //key 's' -> change side
  if(key == 'p' || key == 'P') {
    bChangeAvatarPerspective=true;
  }  
  //else if(key == 's' || key == 'S') {
  if(key == 's' || key == 'S') {
    bChangeAvatarSide=true;
  }
 
}

public void writeText(){
  //Text: 
  PFont fontTitle = loadFont("Monospaced.plain-30.vlw");  
  PFont fontSubtitle = loadFont("Monospaced.plain-15.vlw");
  textFont(fontTitle);  
  textMode(SCREEN);
  fill(0);
  text("The Ascent",15,40); 
  textFont(fontSubtitle);
  text(" \n First Level - LAPIS",15,50);
  textFont(fontSubtitle);  
  text("Press 's' to change avatar's side",15, 540);
  text("Press 'p' to change avatar's perspective from respect \nNecker cubes",15,560);//Oliver's suggestion

}

class Avatar {

  float posXcenter, posYcenter;


  Avatar(){
  }//def. cons.

  Avatar(float posXcenter,float posYcenter){

    this.posXcenter = posXcenter;
    this.posYcenter = posYcenter;

  }

  void setAvatarRandom(float iAvatarInitState){
    bAvatarSeted=true;
    pushMatrix();

    if(iAvatarInitState==0){
      //side3, persp.1: 
      translate(posXcenter+30,posYcenter-10);
      resetAvatarStates("avatarS3P1");
    } 
    else if(iAvatarInitState==1){
      //side3, persp.2: 
      translate(posXcenter+100,posYcenter-50);
      resetAvatarStates("avatarS3P2");
    } 
    else if(iAvatarInitState==2){
      //side1, persp.1:     
      translate(posXcenter,posYcenter+40);
      resetAvatarStates("avatarS1P1"); 
    } 
    else if(iAvatarInitState==3){
      //side1, persp.2: 
      translate(posXcenter,posYcenter+120);
      resetAvatarStates("avatarS1P2");
    }  
    else if(iAvatarInitState==4){
      //side2, persp.1:     
      translate(posXcenter-20,posYcenter-10);
      resetAvatarStates("avatarS2P1");
    } 
    else if(iAvatarInitState==5){
      //side2, persp.2: 
      translate(posXcenter-90,posYcenter-50);
      resetAvatarStates("avatarS2P2");
    }

    fill(0,0,255,50);
    stroke(0,0,255,50);
    ;
    rotateX(radians((float) 35.5));
    rotateY(radians((float) 45));

    if(iAvatarInitState==0){
      box(65,65,100);
    } 
    else if(iAvatarInitState==1){
      box(65,65,100); 
    } 
    else if(iAvatarInitState==2){
      box(65,100,65);
    } 
    else if(iAvatarInitState==3){
      box(65,100,65);
    }  
    else if(iAvatarInitState==4){
      box(100,65,65);
    } 
    else if(iAvatarInitState==5){
      box(100,65,65);
    }
    noStroke();
    popMatrix();

  }

  int getAvatarInitState(){
    iRandNumAvatar = (int) ((random (300)) % 6);
    return iRandNumAvatar;
  }

  void setAvatar(String sAvatarState){
    pushMatrix();
    if(sAvatarState.equals("avatarS3P1")){
      resetAvatarStates("avatarS3P1");
      this.AvatarStateToS3P1(posXcenter,posYcenter);
    } 
    else if(sAvatarState.equals("avatarS3P2")){
      resetAvatarStates("avatarS3P2");
      this.AvatarStateToS3P2(posXcenter,posYcenter);
    } 
    else if(sAvatarState.equals("avatarS1P1")){
      resetAvatarStates("avatarS1P1");
      this.AvatarStateToS1P1(posXcenter,posYcenter);
    } 
    else if(sAvatarState.equals("avatarS1P2")){
      resetAvatarStates("avatarS1P2");
      this.AvatarStateToS1P2(posXcenter,posYcenter);
    } 
    else if(sAvatarState.equals("avatarS2P1")){
      resetAvatarStates("avatarS2P1");
      this.AvatarStateToS2P1(posXcenter,posYcenter);
    } 
    else if(sAvatarState.equals("avatarS2P2")){
      resetAvatarStates("avatarS2P2");
      this.AvatarStateToS2P2(posXcenter,posYcenter);
    }
  }

  void AvatarStateToS1P1(float posXcenter,float posYcenter){
    translate(posXcenter,posYcenter+40);
    fill(0,0,255,50);
    stroke(0,0,255,50);
    rotateX(radians((float)35.5));
    rotateY(radians((float)45));
    box(65,100,65);
    noStroke();
  } 

  void AvatarStateToS1P2(float posXcenter,float posYcenter){
    translate(posXcenter,posYcenter+120);
    fill(0,0,255,50);
    stroke(0,0,255,50);
    rotateX(radians((float)35.5));
    rotateY(radians((float)45));
    box(65,100,65);
    noStroke();
  }

  void AvatarStateToS2P1(float posXcenter,float posYcenterr){
    translate(posXcenter-20,posYcenter-10); 
    fill(0,0,255,50);
    stroke(0,0,255,50);
    rotateX(radians((float)35.5));
    rotateY(radians((float)45));
    box(100,65,65);
    noStroke();
  }

  void AvatarStateToS2P2(float posXcenter,float posYcenter){
    translate(posXcenter-90,posYcenter-50);
    fill(0,0,255,50);
    stroke(0,0,255,50);
    rotateX(radians((float)35.5));
    rotateY(radians((float)45));
    box(100,65,65);
    noStroke();
  }

  void AvatarStateToS3P1(float posXcenter,float posYcenter){
    translate(posXcenter+30,posYcenter-10);    
    fill(0,0,255,50);
    stroke(0,0,255,50);
    rotateX(radians((float)35.5));
    rotateY(radians((float)45));
    box(65,65,100);
    noStroke();
  }

  void AvatarStateToS3P2(float posXcenter,float posYcenter){
    translate(posXcenter+100,posYcenter-50);
    fill(0,0,255,50);
    stroke(0,0,255,50);
    rotateX(radians((float)35.5));
    rotateY(radians((float)45));
    box(65,65,100);
    noStroke();
  }

  void changeAvatarPerspective(String sAvatarState){
    sAvatarState="avatar"+sAvatarState;
    if(sAvatarState.equals("avatarS3P1")){
      //avatarS3P2
      resetAvatarStates("avatarS3P2");
      this.AvatarStateToS3P2(posXcenter,posYcenter);
      bAvatarMoved=true;
    } 
    else if(sAvatarState.equals("avatarS3P2")){
      //avatarS3P1
      resetAvatarStates("avatarS3P1");
      this.AvatarStateToS3P1(posXcenter,posYcenter);
      bAvatarMoved=true;
    } 
    else if(sAvatarState.equals("avatarS1P1")){
      //avatarS1P2
      resetAvatarStates("avatarS1P2");
      this.AvatarStateToS1P2(posXcenter,posYcenter);
      bAvatarMoved=true;
    } 
    else if(sAvatarState.equals("avatarS1P2")){
      //avatarS1P1
      resetAvatarStates("avatarS1P1");
      this.AvatarStateToS1P1(posXcenter,posYcenter);
      bAvatarMoved=true;
    } 
    else if(sAvatarState.equals("avatarS2P1")){
      //avatarS2P2
      resetAvatarStates("avatarS2P2");
      this.AvatarStateToS2P2(posXcenter,posYcenter);
      bAvatarMoved=true;
    } 
    else if(sAvatarState.equals("avatarS2P2")){
      //avatarS2P1
      resetAvatarStates("avatarS2P1");
      this.AvatarStateToS2P1(posXcenter,posYcenter);
      bAvatarMoved=true;
    }
  }

  void changeAvatarSide(String sAvatarState){
    sAvatarState="avatar"+sAvatarState;
    if(sAvatarState.equals("avatarS3P1")){
      //avatarS1P1
      resetAvatarStates("avatarS1P1");
      this.AvatarStateToS1P1(posXcenter,posYcenter);    
      bAvatarMoved=true; 
    } 
    else if(sAvatarState.equals("avatarS3P2")){
      //avatarS1P2
      resetAvatarStates("avatarS1P2");
      this.AvatarStateToS1P2(posXcenter,posYcenter);     
      bAvatarMoved=true;
    } 
    else if(sAvatarState.equals("avatarS1P1")){
      //avatarS2P1
      resetAvatarStates("avatarS2P1");
      this.AvatarStateToS2P1(posXcenter,posYcenter);
      bAvatarMoved=true;
    } 
    else if(sAvatarState.equals("avatarS1P2")){
      //avatarS2P2
      resetAvatarStates("avatarS2P2");
      this.AvatarStateToS2P2(posXcenter,posYcenter);
      bAvatarMoved=true;    
    } 
    else if(sAvatarState.equals("avatarS2P1")){
      //avatarS3P1
      resetAvatarStates("avatarS3P1");
      this.AvatarStateToS3P1(posXcenter,posYcenter);
      bAvatarMoved=true;
    } 
    else if(sAvatarState.equals("avatarS2P2")){
      //avatarS3P2
      resetAvatarStates("avatarS3P2");
      this.AvatarStateToS3P2(posXcenter,posYcenter);
      bAvatarMoved=true;
    }
  }

  void resetAvatarStates(String sAvatarState){
    if(sAvatarState.equals("avatarS1P1")){
      avatarS1P1=true;
      avatarS1P2=false;
      avatarS2P1=false;
      avatarS2P2=false;
      avatarS3P1=false;
      avatarS3P2=false;
    } 
    else if(sAvatarState.equals("avatarS1P2")){
      avatarS1P1=false;
      avatarS1P2=true;
      avatarS2P1=false;
      avatarS2P2=false;
      avatarS3P1=false;
      avatarS3P2=false;
    } 
    else if(sAvatarState.equals("avatarS2P1")){
      avatarS1P1=false;
      avatarS1P2=false;
      avatarS2P1=true;
      avatarS2P2=false;
      avatarS3P1=false;
      avatarS3P2=false;
    } 
    else if(sAvatarState.equals("avatarS2P2")){
      avatarS1P1=false;
      avatarS1P2=false;
      avatarS2P1=false;
      avatarS2P2=true;
      avatarS3P1=false;
      avatarS3P2=false;
    } 
    else if(sAvatarState.equals("avatarS3P1")){
      avatarS1P1=false;
      avatarS1P2=false;
      avatarS2P1=false;
      avatarS2P2=false;
      avatarS3P1=true;
      avatarS3P2=false;
    } 
    else if(sAvatarState.equals("avatarS3P2")){
      avatarS1P1=false;
      avatarS1P2=false;
      avatarS2P1=false;
      avatarS2P2=false;
      avatarS3P1=false;
      avatarS3P2=true;
    }
  }

  String getAvatarState(){
    String sAvatarState="";
    if(avatarS1P1){
      sAvatarState="S1P1";
    } 
    else if(avatarS1P2){
      sAvatarState="S1P2";
    } 
    else if(avatarS2P1){
      sAvatarState="S2P1";
    } 
    else if(avatarS2P2){
      sAvatarState="S2P2";
    } 
    else if(avatarS3P1){
      sAvatarState="S3P1";
    } 
    else if(avatarS3P2){
      sAvatarState="S3P2";
    }
    return sAvatarState;
  }

  boolean isAvatarMoved(){
    return bAvatarMoved;
  }

  boolean isAvatarSeted(){
    return bAvatarSeted;
  }

}

class Gate {

  float posXcenter, posYcenter;

  Gate(float posXcenter,float posYcenter){

    this.posXcenter = posXcenter;
    this.posYcenter = posYcenter;
  }

  void setGateRandom(float fGateInitState){
    bGateSeted=true;
    pushMatrix();     

    if(fGateInitState==0){
      //side3, persp.1: 
      translate(posXcenter+30,posYcenter-10);
      resetGateStates("gateS3P1");
    } 
    else if(fGateInitState==1){
      //side3, persp.2: 
      translate(posXcenter+100,posYcenter-50);
      resetGateStates("gateS3P2");
    } 
    else if(fGateInitState==2){
      //side1, persp.1:     
      translate(posXcenter,posYcenter+40);
      resetGateStates("gateS1P1"); 
    } 
    else if(fGateInitState==3){
      //side1, persp.2: 
      translate(posXcenter,posYcenter+120);
      resetGateStates("gateS1P2");
    }  
    else if(fGateInitState==4){
      //side2, persp.1:     
      translate(posXcenter-20,posYcenter-10);
      resetGateStates("gateS2P1");
    } 
    else if(fGateInitState==5){
      //side2, persp.2: 
      translate(posXcenter-90,posYcenter-50);
      resetGateStates("gateS2P2");
    }


    fill(0,0,0,50);
    stroke(0,0,0,50);
    rotateX(radians((float)35.5));
    rotateY(radians((float)45));

    if(fGateInitState==0){
      box(65,65,100);
    } 
    else if(fGateInitState==1){
      box(65,65,100); 
    } 
    else if(fGateInitState==2){
      box(65,100,65);
    } 
    else if(fGateInitState==3){
      box(65,100,65);
    }  
    else if(fGateInitState==4){
      box(100,65,65);
    } 
    else if(fGateInitState==5){
      box(100,65,65);
    }

    noStroke();
    popMatrix();

  }

  int getGateInitState(){
    iRandNumGate = (int) ((random (500,1000)) % 6);
    return iRandNumGate;
  }

  void resetGateStates(String sAvatarState){
    if(sAvatarState.equals("gateS1P1")){
      gateS1P1=true;
      gateS1P2=false;
      gateS2P1=false;
      gateS2P2=false;
      gateS3P1=false;
      gateS3P2=false;
    } 
    else if(sAvatarState.equals("gateS1P2")){
      gateS1P1=false;
      gateS1P2=true;
      gateS2P1=false;
      gateS2P2=false;
      gateS3P1=false;
      gateS3P2=false;
    } 
    else if(sAvatarState.equals("gateS2P1")){
      gateS1P1=false;
      gateS1P2=false;
      gateS2P1=true;
      gateS2P2=false;
      gateS3P1=false;
      gateS3P2=false;
    } 
    else if(sAvatarState.equals("gateS2P2")){
      gateS1P1=false;
      gateS1P2=false;
      gateS2P1=false;
      gateS2P2=true;
      gateS3P1=false;
      gateS3P2=false;
    } 
    else if(sAvatarState.equals("gateS3P1")){
      gateS1P1=false;
      gateS1P2=false;
      gateS2P1=false;
      gateS2P2=false;
      gateS3P1=true;
      gateS3P2=false;
    } 
    else if(sAvatarState.equals("gateS3P2")){
      gateS1P1=false;
      gateS1P2=false;
      gateS2P1=false;
      gateS2P2=false;
      gateS3P1=false;
      gateS3P2=true;
    }

  }

  String getGateState(){
    String sGateState="";
    if(gateS1P1){
      sGateState="S1P1";
    } 
    else if(gateS1P2){
      sGateState="S1P2";
    } 
    else if(gateS2P1){
      sGateState="S2P1";
    } 
    else if(gateS2P2){
      sGateState="S2P2";
    } 
    else if(gateS3P1){
      sGateState="S3P1";
    } 
    else if(gateS3P2){
      sGateState="S3P2";
    }
    return sGateState;
  }

  boolean isGateSeted(){
    return bGateSeted;
  }

}

class NeckerCubesGrid {

  float posStartXTurtle, posStartYTurtle;
  int iLevel;

  // Default constructor
  NeckerCubesGrid(){ 
  }

  // Constructor 2
  NeckerCubesGrid(float posStartXTurtle, float posStartYTurtle, int iLevel) {

    this.posStartXTurtle = posStartXTurtle;
    this.posStartYTurtle = posStartYTurtle;
    this.iLevel = iLevel;
  }

  float[] drawNeckerCubesGridReturnPosCenter(){
    stroke(0);//necker cube's color

    //Environment: 
    //S: 
    posXTurtle=posStartXTurtle;
    posYTurtle=posStartYTurtle;
    newposXTurtle=posXTurtle;
    newposYTurtle=posYTurtle+lonCubeSide;
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    //SW: 
    posXTurtle=newposXTurtle;
    posYTurtle=newposYTurtle;
    newposXTurtle=posXTurtle-lonCubeSide*cos(angleCubeSide);
    newposYTurtle=posYTurtle+lonCubeSide*sin(angleCubeSide);
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    //NW:
    posXTurtle=newposXTurtle;
    posYTurtle=newposYTurtle;
    newposXTurtle=posXTurtle-lonCubeSide*cos(angleCubeSide);
    newposYTurtle=posYTurtle-lonCubeSide*sin(angleCubeSide);
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    //N:_
    posXTurtle=newposXTurtle;
    posYTurtle=newposYTurtle;
    newposYTurtle=newposYTurtle-lonCubeSide;
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    //NE:
    posXTurtle=newposXTurtle;
    posYTurtle=newposYTurtle;
    newposXTurtle=posXTurtle+lonCubeSide*cos(angleCubeSide);
    newposYTurtle=posYTurtle-lonCubeSide*sin(angleCubeSide);
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    //Save NE position: 
    backposXTurtle=newposXTurtle;
    backposYTurtle=newposYTurtle;

    //3 inner lines: 
    posXTurtle=newposXTurtle;
    posYTurtle=newposYTurtle;
    newposYTurtle=newposYTurtle+lonCubeSide;
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    //Save cube's center position: 
    posXcenter=newposXTurtle;
    posYcenter=newposYTurtle;

    posXTurtle=newposXTurtle;
    posYTurtle=newposYTurtle;
    newposXTurtle=posXTurtle+lonCubeSide*cos(angleCubeSide);
    newposYTurtle=posYTurtle+lonCubeSide*sin(angleCubeSide);
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    newposXTurtle=posXTurtle-lonCubeSide*cos(angleCubeSide);
    newposYTurtle=posYTurtle+lonCubeSide*sin(angleCubeSide);
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);    

    //Back to last side SE:
    posXTurtle=backposXTurtle;
    posYTurtle=backposYTurtle;
    newposXTurtle=posXTurtle+lonCubeSide*cos(angleCubeSide);
    newposYTurtle=posYTurtle+lonCubeSide*sin(angleCubeSide);
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    //function returns necker cube's geometrical center: 
    posCenterNeckerCube[0]=posXcenter;
    posCenterNeckerCube[1]=posYcenter;

    return posCenterNeckerCube;
  }

  void drawNeckerCubesGrid(){
    stroke(0);//necker cube's color

    //Environment: 
    //S: 
    posXTurtle=posStartXTurtle;
    posYTurtle=posStartYTurtle;
    newposXTurtle=posXTurtle;
    newposYTurtle=posYTurtle+lonCubeSide;
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    //SW: 
    posXTurtle=newposXTurtle;
    posYTurtle=newposYTurtle;
    newposXTurtle=posXTurtle-lonCubeSide*cos(angleCubeSide);
    newposYTurtle=posYTurtle+lonCubeSide*sin(angleCubeSide);
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    //NW:
    posXTurtle=newposXTurtle;
    posYTurtle=newposYTurtle;
    newposXTurtle=posXTurtle-lonCubeSide*cos(angleCubeSide);
    newposYTurtle=posYTurtle-lonCubeSide*sin(angleCubeSide);
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    //N:_
    posXTurtle=newposXTurtle;
    posYTurtle=newposYTurtle;
    newposYTurtle=newposYTurtle-lonCubeSide;
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    //NE:
    posXTurtle=newposXTurtle;
    posYTurtle=newposYTurtle;
    newposXTurtle=posXTurtle+lonCubeSide*cos(angleCubeSide);
    newposYTurtle=posYTurtle-lonCubeSide*sin(angleCubeSide);
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    //Save NE position: 
    backposXTurtle=newposXTurtle;
    backposYTurtle=newposYTurtle;

    //3 inner lines: 
    posXTurtle=newposXTurtle;
    posYTurtle=newposYTurtle;
    newposYTurtle=newposYTurtle+lonCubeSide;
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    //Save cube's center position: 
    posXcenter=newposXTurtle;
    posYcenter=newposYTurtle;

    posXTurtle=newposXTurtle;
    posYTurtle=newposYTurtle;
    newposXTurtle=posXTurtle+lonCubeSide*cos(angleCubeSide);
    newposYTurtle=posYTurtle+lonCubeSide*sin(angleCubeSide);
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    newposXTurtle=posXTurtle-lonCubeSide*cos(angleCubeSide);
    newposYTurtle=posYTurtle+lonCubeSide*sin(angleCubeSide);
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);    

    //Back to last side SE:
    posXTurtle=backposXTurtle;
    posYTurtle=backposYTurtle;
    newposXTurtle=posXTurtle+lonCubeSide*cos(angleCubeSide);
    newposYTurtle=posYTurtle+lonCubeSide*sin(angleCubeSide);
    line(posXTurtle,posYTurtle,newposXTurtle,newposYTurtle);

    //function returns necker cube's geometrical center: 
    posCenterNeckerCube[0]=posXcenter;
    posCenterNeckerCube[1]=posYcenter;
  }

}

}//applet end














