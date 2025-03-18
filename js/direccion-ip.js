document.addEventListener("DOMContentLoaded", () => {
    fetch("https://api64.ipify.org?format=json")
      .then(response => response.json())
      .then(data => {
        document.getElementById("ipAddress").innerText = data.ip;
      })
      .catch(error => {
        console.error("Error obteniendo la IP:", error);
        document.getElementById("ipAddress").innerText = "No se pudo obtener la IP";
      });
  });
  