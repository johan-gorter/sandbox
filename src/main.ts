///<reference path="../typings/tsd.d.ts" />

import * as maquette from "maquette";

var h = maquette.h;

var renderMaquette = function() {
  return h.p([
    h.button(["Click me!"]),
    h.a.important({href:"#"}, ["Link"])
  ]);
};

maquette.createProjector().append(document.body, renderMaquette);