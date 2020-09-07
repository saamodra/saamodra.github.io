var dbPromised = idb.open("overfootball", 2, function(upgradeDb) {
  var teamsObjectStore = upgradeDb.createObjectStore("fav_teams", {
    keyPath: "id"
  });

  var watchObjectStore = upgradeDb.createObjectStore("watch_schedule", {
    keyPath: "id"
  });
});


async function saveTeams(teams) {
  if(await getTeamsByKey(teams.id) == undefined) {
    dbPromised.then(function(db) {
      var tx = db.transaction("fav_teams", "readwrite");
      var store = tx.objectStore("fav_teams");
      
      store.add(teams);
      return tx.complete;
    })
    .then(function() {
      M.toast({html: 'Data berhasil difavoritkan'});
    });
  } else {
    M.toast({html: 'Data sudah masuk dalam daftar favorit'});
  }
}

function getTeamsByKey(id) {
  return new Promise(function(resolve, reject) {
    dbPromised
      .then(function(db) {
        var tx = db.transaction("fav_teams", "readonly");
        var store = tx.objectStore("fav_teams");
        return store.get(id);
      })
      .then(function(teams) {
        resolve(teams)
      });
  });
}

function getAllSavedTeams() {
  return new Promise(function(resolve, reject) {
    dbPromised
      .then(function(db) {
        var tx = db.transaction("fav_teams", "readonly");
        var store = tx.objectStore("fav_teams");
        return store.getAll();
      })
      .then(function(teams) {
        resolve(teams)
      });
  });
}

function countTeams() {
  return new Promise(function(resolve, reject) {
    dbPromised
      .then(function(db) {
        var tx = db.transaction("fav_teams", "readonly");
        var store = tx.objectStore("fav_teams");
        return store.count();
      })
      .then(function(teams) {
        resolve(teams)
      });
  });
}

function deleteTeam(id) {
  dbPromised.then(function(db) {
    var tx = db.transaction('fav_teams', 'readwrite');
    var store = tx.objectStore('fav_teams');
    store.delete(Number(id));
    return tx.complete;
  }).then(function() {
    M.toast({html: 'Data berhasil dihapus'});
  });
}

async function saveSchedule(schedule) {
  if(await getScheduleByKey(schedule.id) == undefined) {
    dbPromised.then(function(db) {
      var tx = db.transaction("watch_schedule", "readwrite");
      var store = tx.objectStore("watch_schedule");
      console.log(schedule);
      store.add(schedule);
      return tx.complete;
    })
    .then(function() {
      M.toast({html: 'Berhasil ditambahkan ke jadwal nonton'});
    });
  } else {
    M.toast({html: 'Jadwal sudah ditambahkan ke jadwal nonton'});
  }
}

function getScheduleByKey(id) {
  return new Promise(function(resolve, reject) {
    dbPromised
      .then(function(db) {
        var tx = db.transaction("watch_schedule", "readonly");
        var store = tx.objectStore("watch_schedule");
        return store.get(id);
      })
      .then(function(teams) {
        resolve(teams)
      });
  });
}

function getAllSavedSchedule() {
  return new Promise(function(resolve, reject) {
    dbPromised
      .then(function(db) {
        var tx = db.transaction("watch_schedule", "readonly");
        var store = tx.objectStore("watch_schedule");
        return store.getAll();
      })
      .then(function(teams) {
        resolve(teams)
      });
  });
}

function countSchedule() {
  return new Promise(function(resolve, reject) {
    dbPromised
      .then(function(db) {
        var tx = db.transaction("watch_schedule", "readonly");
        var store = tx.objectStore("watch_schedule");
        return store.count();
      })
      .then(function(teams) {
        resolve(teams)
      });
  });
}

function deleteSchedule(id) {
  dbPromised.then(function(db) {
    var tx = db.transaction('watch_schedule', 'readwrite');
    var store = tx.objectStore('watch_schedule');
    store.delete(Number(id));
    return tx.complete;
  }).then(function() {
    M.toast({html: 'Jadwal nonton berhasil dihapus'});
  });
}