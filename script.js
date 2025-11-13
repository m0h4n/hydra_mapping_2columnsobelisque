// ejemplo script.js para cuatro instancias de Hydra
window.onload = function () {
  new Maptastic({
    autoLoad: true,
    autoSave: true,
    layers: [
      document.getElementById("column1"),
      document.getElementById("column2"),
    ],
  });
};
