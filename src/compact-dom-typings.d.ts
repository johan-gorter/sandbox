///<reference path="typings/maquette/maquette.d.ts" />

// Generated:
interface CompactDomNode {
  (propertiesOrFirstChild?: maquette.VNodeProperties|maquette.VNodeChild, ...children: maquette.VNodeChild[] ): maquette.VNode;
  
  // List of every css class used
  linkClass:CompactDomNode;
}

declare module maquette.h {
  
  // list of every tagname used
  export var body: CompactDomNode;
  export var button: CompactDomNode;
  export var a: CompactDomNode;
  export var p: CompactDomNode;
}
