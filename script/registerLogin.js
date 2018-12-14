//Use for AWS
var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
//Use for appEngine
var appEngine = "https://cryptobit-213216.appspot.com/";

var GcloudServer = aws;

/*var GcloudServer = 'http://127.0.0.1:8080/';*/

var inpId1 = document.getElementById("inpId1");
var inpId2 = document.getElementById("inpId2");
inpId1.addEventListener("click", f1);
inpId2.addEventListener("click", ff1);

function f1() {
  var sendLogintoServer1 = document.getElementById("sendLogintoServer");
  sendLogintoServer1.addEventListener("click", f3);
}

function f3() {
  var inputEmail = document.getElementById("inputEmail");
  var inputPassword = document.getElementById("inputPassword");

  console.log(validateEmail(inputEmail.value));

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  console.log(inputEmail.value + " " + inputPassword.value);

  if (
    validateEmail(inputEmail.value) === true &&
    inputPassword.value.length > 0
  ) {
    var loginOBjectTosend = {
      email: inputEmail.value,
      password: inputPassword.value
    };

    var connect = new XMLHttpRequest();

    connect.onload = () => {
      var result = JSON.parse(connect.responseText);
      console.log(result);

      if (result) {
        pprocesss(result);
      }

      function pprocesss(data) {
        console.log(data);
        chrome.storage.sync.get(null, res => {
          console.log(res);
          var card = document.querySelector(".card");
          chrome.storage.sync.set(
            {
              addr: data.findResult.storage.addr,
              id: data.findResult.storage.id,
              btc_wallet_name: data.findResult.storage.btc_wallet_name,
              _id: data.findResult.storage._id,
              email: data.findResult.email,
              password: data.findResult.password
            },
            () => {
              console.log("callBack");

              card.classList.toggle("is-flipped");
              chrome.storage.sync.get(["email", "btc_wallet_name"], res => {
                console.log(res);
                var loggedInfoClass = document.getElementById("loggedInfo");
                loggedInfoClass.innerHTML = "";
                var div = document.createElement("div");
                var div1 = document.createElement("div");
                div1.className = "iconNAme";
                var sp1 = document.createElement("span");
                sp1.className = "spClassNamid95869";
                sp1.id = "spUniqueid1";
                sp1.innerText = "Logged as";
                var sp2 = document.createElement("span");
                sp2.className = "spClassNamid95869";
                sp2.id = "spUniqueid2";
                sp2.innerText = res.email;
                var sp3 = document.createElement("span");
                sp3.className = "spClassNamid95869";
                sp3.id = "spUniqueid3";
                sp3.innerText = "Wallet unique id";
                var sp4 = document.createElement("span");
                sp4.className = "spClassNamid95869";
                sp4.id = "spUniqueid4";
                sp4.innerText = res.btc_wallet_name;

                div1.appendChild(sp1),
                  div1.appendChild(sp2),
                  div1.appendChild(sp3),
                  div1.appendChild(sp4);
                var btnLogOut = document.createElement("input");
                btnLogOut.className = "btnLogOut";
                btnLogOut.setAttribute("type", "button");
                btnLogOut.id = "btnLogOut";
                btnLogOut.setAttribute("value", "Logout");
                btnLogOut.id = "logiudIdbtn9093";
                div.className = "userLoggenClass";
                loggedInfoClass.appendChild(div);
                loggedInfoClass.appendChild(div1);
                loggedInfoClass.appendChild(btnLogOut);

                document
                  .getElementById("logiudIdbtn9093")
                  .addEventListener("click", FuckingFoo);
              });
            }
          );
        });
      }
    };
    connect.open("POST", GcloudServer + "login", true);
    connect.send(JSON.stringify(loginOBjectTosend));
  }

  if (validateEmail(inputEmail.value) === false) {
    incorrectEmail();
  }
  if (inputPassword.value.length == 0) {
    incorrectPassword();
  }

  inputEmail.addEventListener("focus", focus1);
  inputPassword.addEventListener("focus", focus1);

  function focus1(event) {
    if (event.currentTarget.id === "inputEmail") {
      if (
        document
          .getElementById("everethungels")
          .contains(document.getElementById("emailcheckUP"))
      ) {
        document
          .getElementById("everethungels")
          .removeChild(document.getElementById("emailcheckUP"));
      }
    } else if (event.currentTarget.id === "inputPassword") {
      if (
        document
          .getElementById("everethungels")
          .contains(document.getElementById("passcheckUP"))
      ) {
        document
          .getElementById("everethungels")
          .removeChild(document.getElementById("passcheckUP"));
      }
    }
  }

  //Validate form inputs
  function incorrectEmail() {
    console.log("incorrect email");
    var everethungels = document.getElementById("everethungels");
    if (everethungels.contains(document.getElementById("emailcheckUP"))) {
    } else {
      var d1 = document.createElement("div");
      d1.id = "emailcheckUP";
      d1.style.position = "absolute";
      d1.innerText = "Invalid email addres";
      d1.style.textAlign = "center";
      d1.style.color = "white";
      d1.style.lineHeight = 1;
      d1.style.width = "100%";
      d1.style.top = "0";
      d1.style.padding = "0.5em";
      d1.style.backgroundColor = "red";
      d1.style.fontWeight = "bold";
      everethungels.appendChild(d1);
    }
  }

  function incorrectPassword() {
    var everethungels = document.getElementById("everethungels");

    if (everethungels.contains(document.getElementById("passcheckUP"))) {
    } else {
      console.log("incorrectPassword");

      var d1 = document.createElement("div");
      d1.id = "passcheckUP";
      d1.innerText = "Invalid password";

      d1.style.position = "absolute";

      d1.style.textAlign = "center";
      d1.style.color = "white";
      d1.style.lineHeight = 1;
      d1.style.width = "100%";
      d1.style.top = "33px";
      d1.style.padding = "0.5em";
      d1.style.backgroundColor = "red";
      d1.style.fontWeight = "bold";
      everethungels.appendChild(d1);
    }
  }
}

function ff1() {
  var MainPage = document.getElementById("loggedInfo").innerHTML;
  chrome.storage.sync.set({
    MainPage: JSON.stringify(MainPage)
  });

  var sendLogintoServer = document.getElementById("sendLogintoServerUP");
  sendLogintoServer.addEventListener("click", ff3);
}

function ff3() {
  console.log("ff3");

  var inputEmail = document.getElementById("inputEmailx1");
  var inputPassword = document.getElementById("inputPasswordx2");
  var inputPasswordyy2 = document.getElementById("inputPasswordyy2");

  console.log(validateEmail(inputEmail.value));

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  console.log(inputEmail.value + " " + inputPassword.value);

  //Send to Server
  if (
    validateEmail(inputEmail.value) === true &&
    inputPassword.value.length > 0 &&
    inputPassword.value === inputPasswordyy2.value
  ) {
    chrome.storage.sync.get(["btc_wallet_name", "id", "addr"], x => {
      console.log(x);
      var objTobackend = {
        email: inputEmail.value,
        password: inputPassword.value,
        storage: x
      };
      sendLoginInfo(objTobackend);
    });

    console.log(inputEmail.value);
    console.log(inputPassword.value);
    console.log(inputPasswordyy2.value);
  }
  if (validateEmail(inputEmail.value) === false) {
    incorrectEmail();
  }
  if (inputPassword.value.length == 0) {
    incorrectPassword();
  }

  if (inputPassword.value !== inputPasswordyy2.value) {
    console.log("not match");
    passNotMath();
  }
  inputEmail.addEventListener("focus", focus1);
  inputPassword.addEventListener("focus", focus1);
  inputPasswordyy2.addEventListener("focus", focus1);

  function focus1(event) {
    if (event.currentTarget.id === "inputEmailx1") {
      if (
        document
          .getElementById("everethungels")
          .contains(document.getElementById("emailcheckUP"))
      ) {
        document
          .getElementById("everethungels")
          .removeChild(document.getElementById("emailcheckUP"));
      }
    } else if (event.currentTarget.id === "inputPasswordx2") {
      if (
        document
          .getElementById("everethungels")
          .contains(document.getElementById("passcheckUP"))
      ) {
        document
          .getElementById("everethungels")
          .removeChild(document.getElementById("passcheckUP"));
      }
    } else if (event.currentTarget.id === "inputPasswordyy2") {
      console.log("inputPasswordyy2");
      if (
        document
          .getElementById("everethungels")
          .contains(document.getElementById("passcheckUP"))
      ) {
        document
          .getElementById("everethungels")
          .removeChild(document.getElementById("passcheckUP"));
      }
    }
  }

  // Send Login info toserver
  function sendLoginInfo(obj) {
    console.log(obj);
    var xhttp = new XMLHttpRequest(obj);
    xhttp.onreadystatechange = function() {
      console.log(this.status, this.readyState);
      if (this.readyState == 4 && this.status == 200) {
        var result = JSON.parse(xhttp.responseText);

        console.log(result);
        if (result !== "exist") {
          console.log(result);
          chrome.storage.sync.get(null, res => {
            console.log(res);
            var card = document.querySelector(".card");
            chrome.storage.sync.set(
              {
                addr: result.dataxxx.storage.addr,
                id: result.dataxxx.storage.id,
                btc_wallet_name: result.dataxxx.storage.btc_wallet_name,
                _id: result.dataxxx.storage._id,
                email: result.dataxxx.email,
                password: result.dataxxx.password
              },
              () => {
                console.log("callBack");

                card.classList.toggle("is-flipped");
                chrome.storage.sync.get(["email", "btc_wallet_name"], res => {
                  console.log(res);
                  var loggedInfoClass = document.getElementById("loggedInfo");
                  loggedInfoClass.innerHTML = "";
                  var div = document.createElement("div");
                  var div1 = document.createElement("div");
                  div1.className = "iconNAme";
                  var sp1 = document.createElement("span");
                  sp1.className = "spClassNamid95869";
                  sp1.id = "spUniqueid1";
                  sp1.innerText = "Logged as";
                  var sp2 = document.createElement("span");
                  sp2.className = "spClassNamid95869";
                  sp2.id = "spUniqueid2";
                  sp2.innerText = res.email;
                  var sp3 = document.createElement("span");
                  sp3.className = "spClassNamid95869";
                  sp3.id = "spUniqueid3";
                  sp3.innerText = "Wallet unique id";
                  var sp4 = document.createElement("span");
                  sp4.className = "spClassNamid95869";
                  sp4.id = "spUniqueid4";
                  sp4.innerText = res.btc_wallet_name;

                  div1.appendChild(sp1),
                    div1.appendChild(sp2),
                    div1.appendChild(sp3),
                    div1.appendChild(sp4);
                  var btnLogOut = document.createElement("input");
                  btnLogOut.className = "btnLogOut";
                  btnLogOut.setAttribute("type", "button");
                  btnLogOut.setAttribute("value", "Logout");
                  btnLogOut.id = "logiudIdbtn9093";
                  div.className = "userLoggenClass";
                  loggedInfoClass.appendChild(div);
                  loggedInfoClass.appendChild(div1);
                  loggedInfoClass.appendChild(btnLogOut);
                  document
                    .getElementById("logiudIdbtn9093")
                    .addEventListener("click", FuckingFoo);
                });
              }
            );
          });
        }

        if (result.status === "exist") {
          incorrectEmail(result);
        } else if (result.status === "created") {
          console.log("yeeeeeeeeeeee");
        }
      }
    };
    xhttp.open("Post", GcloudServer + "register", true);
    /*
        xhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");*/
    xhttp.send(JSON.stringify(obj));
  }

  //Validate form inputs
  function incorrectEmail(v1) {
    console.log("incorrect email");

    var everethungels = document.getElementById("everethungels");

    if (everethungels.contains(document.getElementById("emailcheckUP"))) {
    } else {
      var d1 = document.createElement("div");
      d1.id = "emailcheckUP";
      d1.style.position = "absolute";

      d1.innerText = "Invalid email addres";

      d1.style.textAlign = "center";
      d1.style.color = "white";
      d1.style.lineHeight = 1;
      d1.style.width = "100%";
      d1.style.top = "0";
      d1.style.padding = "0.5em";
      d1.style.backgroundColor = "red";
      d1.style.fontWeight = "bold";
      everethungels.appendChild(d1);
    }
  }

  function incorrectPassword() {
    var everethungels = document.getElementById("everethungels");

    if (everethungels.contains(document.getElementById("passcheckUP"))) {
    } else {
      console.log("incorrectPassword");

      var d1 = document.createElement("div");
      d1.id = "passcheckUP";
      d1.innerText = "Invalid password";

      d1.style.position = "absolute";

      d1.style.textAlign = "center";
      d1.style.color = "white";
      d1.style.lineHeight = 1;
      d1.style.width = "100%";
      d1.style.top = "33px";
      d1.style.padding = "0.5em";
      d1.style.backgroundColor = "red";
      d1.style.fontWeight = "bold";
      everethungels.appendChild(d1);
    }
  }

  function passNotMath() {
    var everethungels = document.getElementById("everethungels");

    if (everethungels.contains(document.getElementById("passcheckUP"))) {
    } else {
      console.log("pass not match");

      var d1 = document.createElement("div");
      d1.id = "passcheckUP";
      d1.innerText = "Passwords do not match";

      d1.style.position = "absolute";

      d1.style.textAlign = "center";
      d1.style.color = "white";
      d1.style.lineHeight = 1;
      d1.style.width = "100%";
      d1.style.top = "33px";
      d1.style.padding = "0.5em";
      d1.style.backgroundColor = "red";
      d1.style.fontWeight = "bold";
      everethungels.appendChild(d1);
    }
  }
}

function FuckingFoo() {
  console.log("logging out formlogin");
  chrome.storage.sync.remove(["lockStatus", "lock"]);
  document.getElementById("loggedInfo").innerHTML =
    "<div class='card__face card__face--front'><h2 class='headingset'>User Autentication</h2><img src='images/gui/verification.svg' class='UserAutenticationIMAGE' alt='User Autentication'><div class='inputCOntcla'>" +
    "<input type='button' id='inpId1' class='inpId1class' value='Login with email'>" +
    "<input type='button' id='inpId2' class='inpId2class' value='Sign up with Email'>" +
    "</div>" +
    "</div>" +
    "<div class='card__face card__face--back'>" +
    "<div class='containerBaclflip' id='containerBacklflip'>" +
    "<div class='row1'><i class='material-icons' id='flipBack'>" +
    "autorenew" +
    "</i><span id='Headingloginorregister' class='Headingloginorregister'></span></div><div class='everethungels' id='everethungels'></div></div></div>";
  console.log("registerLogin 111111");
  document.getElementById("inpId1").addEventListener("click", foo1);
  document.getElementById("inpId2").addEventListener("click", foo1);
  document.getElementById("flipBack").addEventListener("click", flipBack);

  function flipBack() {
    var card = document.querySelector(".card");
    card.classList.toggle("is-flipped");

    document.getElementById("everethungels").innerHTML = "";
  }

  function foo1(event) {
    console.log(event.currentTarget.id);
    var checkBtnPress = event.currentTarget.id;
    var card__face__back = document.querySelector(".card__face--back");
    var everethungels = document.getElementById("everethungels");

    if (checkBtnPress === "inpId1") {
      if (document.getElementById("Headingloginorregister") !== null) {
        document.getElementById("Headingloginorregister").innerHTML = "Login";
      }

      var crEl = document.createElement("form");
      /*
            crEl.action = 'http://127.0.0.1:8080/register';
            crEl.method = 'POST';*/
      var inEMail = document.createElement("input");
      var NExtBtn = document.createElement("input");
      var div = document.createElement("div");
      var div1 = document.createElement("div1");
      var imgIcon = document.createElement("img");
      imgIcon.setAttribute("src", "images/gui/icon.png");
      imgIcon.setAttribute("title", "Login");
      imgIcon.setAttribute("alt", "Login");
      div1.id = "signInFacebookId";
      div1.className = "signInFacebook";
      div.id = "signInGoogleId";
      div.className = "signInGoogle";
      inEMail.setAttribute("type", "email");
      inEMail.id = "inputEmail";
      inEMail.setAttribute("autocomplete", "on");
      inEMail.placeholder = "Enter email";
      var inPass = document.createElement("input");
      inPass.setAttribute("type", "password");
      inPass.id = "inputPassword";
      inPass.setAttribute("placeholder", "Enter password");
      NExtBtn.setAttribute("type", "button");
      NExtBtn.id = "sendLogintoServer";
      NExtBtn.value = "Login";
      NExtBtn.className = "sendLogintoServerClass";

      crEl.appendChild(imgIcon);
      crEl.appendChild(inEMail);
      crEl.appendChild(inPass);
      crEl.appendChild(NExtBtn);
      /* 
            everethungels.appendChild(div)
            everethungels.appendChild(div1)*/
      everethungels.appendChild(crEl);
      var sendLogintoServer1 = document.getElementById("sendLogintoServer");

      sendLogintoServer1.addEventListener("click", f3);
    } else if (checkBtnPress === "inpId2") {
      if (document.getElementById("Headingloginorregister") !== null) {
        document.getElementById("Headingloginorregister").innerHTML = "Sign Up";
      }
      var crEl = document.createElement("form");
      /*
            crEl.action = 'http://127.0.0.1:8080/register';
            crEl.method = 'POST';*/
      var inEMail = document.createElement("input");
      var NExtBtn = document.createElement("input");
      var div = document.createElement("div");
      var div1 = document.createElement("div1");
      div1.id = "signUPFacebookId";
      div1.className = "signInFacebook";
      div.id = "signUPGoogleId";
      div.className = "signInGoogle";
      inEMail.setAttribute("type", "email");
      inEMail.id = "inputEmailx1";
      inEMail.name = "emailRegister";
      inEMail.placeholder = "Enter email";
      var inPass = document.createElement("input");
      var sec_Pass = document.createElement("input");
      sec_Pass.setAttribute("type", "password");
      inPass.setAttribute("type", "password");
      inPass.id = "inputPasswordx2";
      inPass.name = "passRegister";
      inPass.setAttribute("placeholder", "Enter password");
      sec_Pass.setAttribute("placeholder", "Enter password again");
      sec_Pass.id = "inputPasswordyy2";
      sec_Pass.name = "passwordRegister2";
      NExtBtn.setAttribute("type", "button");
      NExtBtn.id = "sendLogintoServerUP";
      NExtBtn.value = "Register";
      NExtBtn.className = "sendLogintoServerClass";
      crEl.appendChild(inEMail);

      crEl.appendChild(inPass);
      crEl.appendChild(sec_Pass);
      crEl.appendChild(NExtBtn);

      everethungels.appendChild(crEl);
      var sendLogintoServer = document.getElementById("sendLogintoServerUP");
      sendLogintoServer.addEventListener("click", ff3);
    }

    var card = document.querySelector(".card");
    card.classList.toggle("is-flipped");
  }

  let getRND = new XMLHttpRequest();
  getRND.onload = () => {
    console.log(getRND.responseText);
    var getLogOutAddress = new XMLHttpRequest();
    getLogOutAddress.onload = () => {
      var resp = JSON.parse(getLogOutAddress.responseText);
      console.log(resp);

      var data = {
        name: "W" + getRND.responseText,
        addresses: [resp.address]
      };
      if (resp) {
        var getLogOutAddress1 = new XMLHttpRequest();
        getLogOutAddress1.onload = () => {
          var completed = JSON.parse(getLogOutAddress1.responseText);
          console.log(completed);
          chrome.storage.sync.set(
            {
              originData: {
                wallet: completed,
                addrOrigin: resp
              }
            },
            calB => {
              chrome.storage.sync.remove(["email", "password", "originData1"]);
              chrome.storage.sync.set({
                addr: [resp],
                btc_wallet_name: completed.name,
                id: 1
              });
            }
          );
        };

        getLogOutAddress1.open(
          "POST",
          "https://api.blockcypher.com/v1/btc/main/wallets?token=" + token
        );
        getLogOutAddress1.send(JSON.stringify(data));
      }
    };
    getLogOutAddress.open(
      "POST",
      "https://api.blockcypher.com/v1/btc/main/addrs"
    );
    getLogOutAddress.send();
  };

  getRND.open("GET", GcloudServer + "randomNumber");
  getRND.send();
}
