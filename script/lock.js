//Use for AWS
var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
//Use for appEngine
var appEngine = "https://cryptobit-213216.appspot.com/";

var GcloudServer = aws;
/*var GcloudServer = 'http://127.0.0.1:8080/';*/
var token = "f478b3d6f8e8493da462c2a5cf24fd58";

chrome.storage.sync.get(["lockStatus", "lock"], (z1, z2) => {
  console.log(z1, z2);
  if (z1.lockStatus === true) {
    console.log(z1.lockStatus);
    secPageHideShow(z1.lockStatus);
  }
  RemoveWalFunc(z1.lock);
});

function RemoveWalFunc(lockPass) {
  if (lockPass === undefined) {
    getOneMoreTin(lockPass);
  } else {
    getOneMoreTin(lockPass);
  }
}

function getOneMoreTin(lockPass) {
  var RemoveWalletLockBTN = document.getElementById("RemoveLockWalletID");
  RemoveWalletLockBTN.onclick = () => {
    chrome.storage.sync.get(["lock"], lockNew => {
      console.log(lockNew.lock);

      document.getElementsByClassName("remWalInputHid")[0].style.display =
        "block";
      document.getElementsByClassName("remWalInputHid")[0].value = "";

      document.getElementById("remWalInputHid").onkeyup = () => {
        console.log(event.currentTarget.value);
        console.log(event.currentTarget.value, lockNew.lock);
        if (event.currentTarget.value === lockNew.lock) {
          chrome.storage.sync.remove(["lockStatus", "lock"]);
          secPageHideShow("showSetPassScreen");
        }
      };
    });
  };
}

var setPinCode = document.getElementById("setPinCode");
setPinCode.onclick = () => {
  let securePin = document.getElementById("securePin");
  let securePin_comfim = document.getElementById("securePin_comfim");

  if (
    securePin.value === securePin_comfim.value &&
    securePin.value.length > 0 &&
    securePin_comfim.value.length > 0
  ) {
    chrome.storage.sync.get(["email", "password"], (a, b) => {
      console.log(a, b);

      console.log(Object.keys(a).length);

      if (Object.keys(a).length > 0) {
        console.log(a);
        chrome.storage.sync.set({
          lock: securePin.value
        });
        var con = new XMLHttpRequest();
        con.onload = () => {
          var tresponse = con.responseText;
          console.log(tresponse);

          if (tresponse) {
            chrome.storage.sync.set({
              lockStatus: true
            });
            secPageHideShow();
          }
        };
        con.open("POST", GcloudServer + "pincode");
        con.send(
          JSON.stringify({
            pincode: securePin.value,
            email: a.email,
            password: a.password
          })
        );
      } else {
        console.log("elseyyyyyyyyyyyyyy");
        secPageHideShow("hide");

        chrome.storage.sync.set({
          lock: securePin.value,
          lockStatus: true
        });
      }
    });
  }
};

function secPageHideShow(data) {
  console.log("hideittttttttt");

  var LockUnset = document.getElementById("LockUnset");
  var LockSet = document.getElementById("LockSet");
  var secImgContLock = document.getElementById("secImgContLock");
  var WalletLockedImg = document.getElementById("WalletLockedImg");
  var SetSEcPAs = document.getElementById("SetSEcPAs");
  var remWalInputHid = document.getElementsByClassName("remWalInputHid")[0];

  document.getElementsByClassName("remWalInputHid")[0].value = "";

  remWalInputHid.style.display =
    data === "showSetPassScreen" ? "block" : "none";
  secImgContLock.style.display =
    data === "showSetPassScreen" ? "block" : "none";
  LockUnset.style.display = data === "showSetPassScreen" ? "block" : "none";
  LockSet.style.display = data === "showSetPassScreen" ? "none" : "block";
  WalletLockedImg.style.display =
    data === "showSetPassScreen" ? "none" : "block";
  SetSEcPAs.innerText =
    data === "showSetPassScreen"
      ? "Set Wallet Password"
      : "Wallet Lock Enabled";
}

let smwlk = document.getElementById("smwlk");
smwlk.onclick = () => {
  let sk98938 = document.getElementById("sk98938");

  sk98938.classList.toggle("sk98938Show");

  chrome.storage.sync.get("addr", x => {
    sk98938.innerText = JSON.stringify(x.addr);
  });
};

//BackUP
/*
var downWalKeysBTN = document.getElementById('downWalKeysBTN');
downWalKeysBTN.onclick = () => {
    chrome.storage.sync.get('addr', (x) => {
        sendReq(x.addr)
    })

}

function sendReq(data) {

    for(let i = 0;i<data.length;i++){
        delete data[i]['balance'];
    }

console.log(data);
    let con = new XMLHttpRequest();
    con.open('POST', GcloudServer + 'backup');
    con.send(JSON.stringify(data));
    con.onload = () => {
        let link = con.responseText;
        console.log(link)
    }
}*/
