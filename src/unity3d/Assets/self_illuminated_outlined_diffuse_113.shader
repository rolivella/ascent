Shader "Self-Illumin/Outlined Diffuse" 
{ 
   Properties 
   { 
      _Color ("Main Color", Color) = (0,1,1,1) 
      _OutlineColor ("Outline Color", Color) = (0,1,0,1) 
      //_Outline ("Outline width", Range (0.002, 0.03)) = 0.01 
      _MainTex ("Base (RGB)", 2D) = "black" { }
	  _BumpMap ("Illumin (A)", 2D) = "bump" {}
      //Not needed 
      //_ToonShade ("ToonShader Cubemap(RGB)", CUBE) = "" { Texgen CubeNormal } 
   } 
   
   FallBack "Self-Illumin/Diffuse"
} 