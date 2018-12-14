var bcynet = "bcy/test";
var btcnet = "btc/main";

//Use for AWS
var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
//Use for appEngine
var appEngine = "https://cryptobit-213216.appspot.com/";

NetworkToUse(btcnet);

function NetworkToUse(network) {
  var GcloudServer = aws;
  document.getElementById("btn_send_btc").addEventListener("click", function() {
    var popup_send_btc = document.getElementById("popup_send_btc");
    popup_send_btc.style.display = "flex";
    popup_send_btc.classList.add("ahow_all_pop");
  });

  document
    .getElementById("close_popup_btc")
    .addEventListener("click", function() {
      var popup_send_btc = document.getElementById("popup_send_btc");
      if ((popup_send_btc.classList.contains = "ahow_all_pop")) {
        popup_send_btc.classList.remove("ahow_all_pop");
      }
      popup_send_btc.classList.add("send_receive_address");
      setTimeout(function() {
        popup_send_btc.style.display = "none";
        popup_send_btc.classList.remove("send_receive_address");
      }, 300);
    });

  document
    .getElementById("btn_receive_btc")
    .addEventListener("click", function() {
      var popup_receive_btc = document.getElementById("popup_receive_btc");
      popup_receive_btc.style.display = "flex";
      popup_receive_btc.classList.add("ahow_all_pop");
    });
  var btcon_address_to_receive = document.getElementById(
    "btcon_address_to_receive"
  );
  chrome.storage.sync.get("addr", x => {
    btcon_address_to_receive.value = x.addr[0].address;

    var con = new XMLHttpRequest();
    var qr_source;
    con.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        qr_source = this.responseURL;

        document.getElementById("qr_code_img").setAttribute("src", qr_source);
      }
    };

    con.open(
      "GET",
      "https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=" +
        x.addr[0].address
    );
    con.send();
  });

  document
    .getElementById("close_popup_btc_receive")
    .addEventListener("click", function() {
      var popup_receive_btc = document.getElementById("popup_receive_btc");
      if ((popup_receive_btc.classList.contains = "ahow_all_pop")) {
        popup_receive_btc.classList.remove("ahow_all_pop");
      }
      popup_receive_btc.classList.add("send_receive_address");
      setTimeout(function() {
        popup_receive_btc.style.display = "none";
        popup_receive_btc.classList.remove("send_receive_address");
      }, 300);
    });

  document
    .getElementById("btn_address_btc")
    .addEventListener("click", function() {
      console.log("xxx");
      var popup_address_btc = document.getElementById("popup_address_btc");
      popup_address_btc.style.display = "flex";
      popup_address_btc.classList.add("ahow_all_pop");

      var btc_adr_list = document.getElementById("btc_addres_list");
      btc_adr_list.innerHTML = "";
      chrome.storage.sync.get("addr", x => {
        console.log(x.addr);
        for (var i = 0; i < x.addr.length; i++) {
          btc_adr_list.innerHTML +=
            "<div class='adr_list_btc_cont'><span class='btc_adr_span'>" +
            x.addr[i].address +
            "</span>" +
            "<i class='fas fa-info-circle infoCalssstyle'></i></div>";
        }
        var infoBTN = document.getElementsByClassName("infoCalssstyle");

        for (var i = 0; i < infoBTN.length; i++) {
          infoBTN[i].addEventListener("click", infoClick);
        }

        function infoClick(x) {
          var xtarget = x.target.previousSibling.innerHTML;
          var xhr = new XMLHttpRequest();
          xhr.onreadystatechange = function() {
            if (this.readyState == 4) {
              var resPonse = JSON.parse(this.responseText);

              var txnameaddress = document.getElementById("txnameaddress");
              var txnameBal = document.getElementById("txnameBal");
              var txnameNumnerTx = document.getElementById("txnameNumnerTx");
              var txnametotalrec = document.getElementById("txnametotalrec");
              var txnametotalsent = document.getElementById("txnametotalsent");
              var txnameunbal = document.getElementById("txnameunbal");
              var txnameuntx = document.getElementById("txnameuntx");

              txnameaddress.innerHTML = resPonse.address;
              txnameBal.innerHTML = resPonse.final_balance / 100000000 + " BTC";
              txnameNumnerTx.innerHTML = resPonse.n_tx;
              txnametotalrec.innerHTML =
                resPonse.total_received / 100000000 + " BTC";
              txnametotalsent.innerHTML =
                resPonse.total_sent / 100000000 + " BTC";
              txnameunbal.innerHTML =
                resPonse.unconfirmed_balance / 100000000 + " BTC";
              txnameuntx.innerHTML = resPonse.unconfirmed_n_tx;
              document.getElementById("txadrInfopopup").style.display = "flex";

              document.getElementsByClassName(
                "txadrInfopopupcl"
              )[0].onclick = function(b) {
                document.getElementById("txadrInfopopup").style.display =
                  "none";
              };
            }
          };
          xhr.open(
            "GET",
            "https://api.blockcypher.com/v1/" + network + "/addrs/" + xtarget
          );
          xhr.send();
        }

        /* d1.removeEventListener('click', foo1);*/
      });
    });

  document
    .getElementById("close_popup_btc_address")
    .addEventListener("click", function() {
      var popup_address_btc = document.getElementById("popup_address_btc");
      if ((popup_address_btc.classList.contains = "ahow_all_pop")) {
        popup_address_btc.classList.remove("ahow_all_pop");
      }
      popup_address_btc.classList.add("send_receive_address");
      setTimeout(function() {
        popup_address_btc.style.display = "none";
        popup_address_btc.classList.remove("send_receive_address");
      }, 300);
    });

  /*************************************************** */

  document
    .getElementById("btn_send_ether")
    .addEventListener("click", function() {
      var popup_send_ether = document.getElementById("popup_send_ether");
      popup_send_ether.style.display = "flex";
      popup_send_ether.classList.add("ahow_all_pop");
    });

  document
    .getElementById("btn_receive_ether")
    .addEventListener("click", function() {
      var popup_receive_ether = document.getElementById("popup_receive_ether");
      popup_receive_ether.style.display = "flex";
      popup_receive_ether.classList.add("ahow_all_pop");
    });

  document
    .getElementById("btn_address_ether")
    .addEventListener("click", function() {
      var popup_addresses_ether = document.getElementById(
        "popup_addresses_ether"
      );
      popup_addresses_ether.style.display = "flex";
      popup_addresses_ether.classList.add("ahow_all_pop");
    });

  document
    .getElementById("close_popup_ether")
    .addEventListener("click", function() {
      var popup_send_ether = document.getElementById("popup_send_ether");
      if ((popup_send_ether.classList.contains = "ahow_all_pop")) {
        popup_send_ether.classList.remove("ahow_all_pop");
      }
      popup_send_ether.classList.add("send_receive_address");
      setTimeout(function() {
        popup_send_ether.style.display = "none";
        popup_send_ether.classList.remove("send_receive_address");
      }, 300);
    });

  document
    .getElementById("close_popup_ether_receive")
    .addEventListener("click", function() {
      var popup_receive_ether = document.getElementById("popup_receive_ether");
      if ((popup_receive_ether.classList.contains = "ahow_all_pop")) {
        popup_receive_ether.classList.remove("ahow_all_pop");
      }
      popup_receive_ether.classList.add("send_receive_address");
      setTimeout(function() {
        popup_receive_ether.style.display = "none";
        popup_receive_ether.classList.remove("send_receive_address");
      }, 300);
    });

  document
    .getElementById("close_popup_ether_addresses")
    .addEventListener("click", function() {
      var popup_addresses_ether = document.getElementById(
        "popup_addresses_ether"
      );
      if ((popup_addresses_ether.classList.contains = "ahow_all_pop")) {
        popup_addresses_ether.classList.remove("ahow_all_pop");
      }
      popup_addresses_ether.classList.add("send_receive_address");
      setTimeout(function() {
        popup_addresses_ether.style.display = "none";
        popup_addresses_ether.classList.remove("send_receive_address");
      }, 300);
    });

  //copy to clipboard

  document
    .getElementById("copu_btc_addres")
    .addEventListener("click", function() {
      var copyText = document.getElementById("btcon_address_to_receive");
      copyText.select();
      document.execCommand("copy");
    });
}
