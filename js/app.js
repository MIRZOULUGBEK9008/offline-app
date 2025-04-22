if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js")
    .then(() => {
      console.log("Ha registratsiya bo'ldi");
    })
    .catch(() => {
      console.error("Registratsiya bo'lmadi");
    });
}
