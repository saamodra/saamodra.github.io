  if ("serviceWorker" in navigator) {
      window.addEventListener("load", function() {
          navigator.serviceWorker.register("/service-worker.js")
          .then(function() {
            console.log("Pendaftaran ServiceWorker berhasil");
            requestPermission();
          })
          .catch(function() {
          console.log("Pendaftaran ServiceWorker gagal");
          });
      });
  } else {
      console.log("ServiceWorker belum didukung browser ini.");
  }

  
  function requestPermission() {
    if ('Notification' in window) {
      Notification.requestPermission().then(function (result) {
        if (result === "denied") {
          console.log("Fitur notifikasi tidak diijinkan.");
          return;
        } else if (result === "default") {
          console.error("Pengguna menutup kotak dialog permintaan ijin.");
          return;
        }
        
        navigator.serviceWorker.ready.then(() => {
          if (('PushManager' in window)) {
            navigator.serviceWorker.getRegistration().then(function(registration) {
                registration.pushManager.subscribe({
                    userVisibleOnly: true,
                    applicationServerKey: urlBase64ToUint8Array("BLZ2Z19jv8vSSB6ALEcGWXczeb7LiglovOw8cRcvXpMF83iGQ5EFuomY0oAeA5WWzFmId74SCTt7WUoUoeS4aM8")
                }).then(function(subscribe) {
                    console.log('Berhasil melakukan subscribe dengan endpoint: ', subscribe.endpoint);
                    console.log('Berhasil melakukan subscribe dengan p256dh key: ', btoa(String.fromCharCode.apply(
                        null, new Uint8Array(subscribe.getKey('p256dh')))));
                    console.log('Berhasil melakukan subscribe dengan auth key: ', btoa(String.fromCharCode.apply(
                        null, new Uint8Array(subscribe.getKey('auth')))));
                }).catch(function(e) {
                    console.error('Tidak dapat melakukan subscribe ', e.message);
                });
            });
          }
        });
      });
    }
  }

  function urlBase64ToUint8Array(base64String) {
      const padding = '='.repeat((4 - base64String.length % 4) % 4);
      const base64 = (base64String + padding)
          .replace(/-/g, '+')
          .replace(/_/g, '/');
      const rawData = window.atob(base64);
      const outputArray = new Uint8Array(rawData.length);
      for (let i = 0; i < rawData.length; ++i) {
          outputArray[i] = rawData.charCodeAt(i);
      }
      return outputArray;
  }