// ejemplo script.js para cuatro instancias de Hydra
window.onload = function () {
  new Maptastic({
    autoLoad: true,
    autoSave: true,
    layers: [
      document.getElementById("hydra-iframe1"),
      document.getElementById("hydra-iframe2"),
      document.getElementById("hydra-iframe3"),
      document.getElementById("hydra-iframe4"),
    ],
  });
};
