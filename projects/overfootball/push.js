var webPush = require('web-push');
 
const vapidKeys = {
   "publicKey": "BLZ2Z19jv8vSSB6ALEcGWXczeb7LiglovOw8cRcvXpMF83iGQ5EFuomY0oAeA5WWzFmId74SCTt7WUoUoeS4aM8",
   "privateKey": "818vufemU4u-jWT-BicOWYnzwnxE4MPyWSBHS54CoXI"
};
 
 
webPush.setVapidDetails(
   'mailto:example@yourdomain.org',
   vapidKeys.publicKey,
   vapidKeys.privateKey
)
var pushSubscription = {
   "endpoint": "https://fcm.googleapis.com/fcm/send/fjxW3ZPQrv4:APA91bFk20cRxYzNYUs9_MwgaQ1c1La3Nlze3cZux2Nx4wPUJaXGZNA2uPkrRNWBavkuF_DBrOUVtwYdhm3yiFciTVs8d3M5t6KDijSicNInf0ilLinZCvEGwOr1AjVRdSaoLawQoLry",
   "keys": {
       "p256dh": "BL+In/IOEcnSUMi0js4Oop4+tzvzJAdif1kPlSO0FD3LQjLux+1l6ioTaj2kxyHJavuk7wtISU7t+d18h367FgQ=",
       "auth": "C5li8Ey0x+B0yeT9lBJmsw=="
   }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
 
var options = {
   gcmAPIKey: '563182799933',
   TTL: 60
};
webPush.sendNotification(
   pushSubscription,
   payload,
   options
);