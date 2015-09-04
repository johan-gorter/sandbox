'use strict';

var maquette = require("maquette");

var h = maquette.h;

var renderMaquette = function() {
  return h.body([
    h.p([
      h.button(["Click me"]),
      h.a.linkClass({href:"#"}, ["Link"])
    ])
  ]);
};

var projector = maquette.createProjector(document.body, renderMaquette);
