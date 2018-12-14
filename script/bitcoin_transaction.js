var bcynet = "bcy/test";
var btcnet = "btc/main";

NetworkToUse(btcnet);
function NetworkToUse(network) {
  var GcloudServer = "https://cryptobit-213216.appspot.com/";
  var send_btn_btc = document.getElementById("send_btn_btc");

  var myDropxco345g = document.getElementById("myDropdown");
  var paytobtcx01 = document.getElementById("paytobtc");

  paytobtcx01.onkeyup = () => {
    paytobtcx01.style.borderBottom = "1px solid #9E9E9E";
    paytobtcx01.style.borderTop = "none";
    paytobtcx01.style.borderLeft = "none";
    paytobtcx01.style.borderRight = "none";
  };
  var pay_in_btcx02 = document.getElementById("pay_in_btc");
  var pay_in_usdx098 = document.getElementById("pay_in_usd");
  myDropxco345g.onclick = () => {
    document.getElementById("myFunction").style.border = "none";
  };

  pay_in_usdx098.onkeyup = () => {
    pay_in_usdx098.style.borderBottom = "1px solid #9E9E9E";
    pay_in_usdx098.style.borderTop = "none";
    pay_in_usdx098.style.borderLeft = "none";
    pay_in_usdx098.style.borderRight = "none";
  };

  send_btn_btc.onclick = function() {
    //Check input fields

    var fieldadrFrom = document.getElementById("replacewithaddr");
    var filedBTC = document.getElementById("pay_in_usd");
    var filedadrTo = document.getElementById("paytobtc");

    if (fieldadrFrom.innerHTML == "" || fieldadrFrom.innerHTML == undefined) {
      var myFunction = document.getElementById("myFunction");
      myFunction.style.border = "2px solid red";
    } else {
      document.getElementById("myFunction").style.border = "none";
    }

    if (filedadrTo.value == undefined || filedadrTo.value == "") {
      var paytobtc = document.getElementById("paytobtc");
      paytobtc.style.border = "1px solid red";
    }

    if (filedBTC.value == undefined || filedBTC.value == "") {
      var pay_in_btc = document.getElementById("pay_in_usd");
      pay_in_btc.style.border = "1px solid red";
    }

    var fromAddress = document.getElementById("replacewithaddr").firstChild
      .innerText;
    var toAddress = document.getElementById("paytobtc").value;
    var amountToPayBTC = document.getElementById("pay_in_btc").value;
    //check if amount sent not greater of balance
    var btcpiricecl = document.getElementsByClassName("btcpiricecl")[0]
      .innerHTML;
    var currentBalance = Number(btcpiricecl.replace(/btc/gi, ""));
    if (currentBalance <= amountToPayBTC) {
    }

    chrome.storage.sync.get("addr", x => {
      var btcAddress = x.addr;

      var priveKey;
      for (var i = 0; i < btcAddress.length; i++) {
        if (btcAddress[i].address == fromAddress) {
          priveKey = btcAddress[i].private;
        }
      }

      var BTC_value_in_satoshi = amountToPayBTC * 100000000;

      var deleteDot = BTC_value_in_satoshi.toString();

      if (deleteDot.includes(".")) {
        deleteDot = deleteDot.substring(0, deleteDot.indexOf("."));

        var tests = Number(deleteDot);
      }

      BTC_value_in_satoshi = Number(deleteDot);

      var newtx = {
        inputs: [{ addresses: [fromAddress] }], // <<<<<from this account
        outputs: [{ addresses: [toAddress], value: BTC_value_in_satoshi }] //>>>>>to this account
      };
      var newtxString = JSON.stringify(newtx);
      console.log(newtxString);
      var con = new XMLHttpRequest();
      con.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 201) {
          var returnedToSign = this.responseText;
          var newobk = JSON.parse(returnedToSign);

          newobk.key = priveKey;
          newobk.tx.preference = "high";

          returnedToSign = JSON.stringify(newobk);

          sendToserver();
          function sendToserver() {
            var con = new XMLHttpRequest();
            con.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                var txfinal = this.responseText;
                var shopPopupSucces = JSON.parse(txfinal);

                var con2 = new XMLHttpRequest();
                con2.onreadystatechange = function() {
                  if (this.readyState == 4) {
                    var shopPopupSucces1 = JSON.parse(this.responseText);
                    console.log(shopPopupSucces1); //After tx json
                    var btcpiricecl = document.getElementsByClassName(
                      "btcpiricecl"
                    )[0];
                    var usdbtcpricl = document.getElementsByClassName(
                      "usdbtcpricl"
                    )[0];
                    var tickerUSD = document.getElementById("btcticker")
                      .innerHTML;
                    var updateBal = shopPopupSucces1.tx.outputs[1].value;

                    btcpiricecl.innerHTML = updateBal / 100000000 + " BTC";
                    usdbtcpricl.innerHTML = (
                      (updateBal / 100000000) *
                      tickerUSD
                    ).toFixed(2);

                    var btcval =
                      shopPopupSucces1.tx.outputs[0].value / 100000000;
                    var btcticker = document.getElementById("btcticker")
                      .innerHTML;
                    var USDval = Number(btcticker) * Number(btcval);
                    USDval = USDval.toFixed(2);
                    var fees = shopPopupSucces1.tx.fees / 100000000 + " BTC";
                    var popaftersuccestx = document.getElementById(
                      "popaftersuccestx"
                    );
                    popaftersuccestx.style.display = "flex";
                    popaftersuccestxheaderCont.innerHTML =
                      '<div id="btcusdcont987d"><span id="sucid01">You sent:</span><span id="sucid02">' +
                      btcval +
                      " BTC" +
                      "</span>" +
                      '<span id="sucid03">' +
                      "$" +
                      USDval +
                      '</span></div><span id="sucid04">To address:</span><span id="sucid05">' +
                      shopPopupSucces1.tx.outputs[0].addresses +
                      '</span><span id="sucid06">Transaction fees:</span>' +
                      '<span id="sucid07">' +
                      fees +
                      '</span><button id="sucbtncloseinfo34">Ok</button>';
                    var sucbtncloseinfo34 = document.getElementById(
                      "sucbtncloseinfo34"
                    );
                    sucbtncloseinfo34.onclick = () => {
                      popaftersuccestx.style.display = "none";

                      //clean inputs after money sent
                      document.getElementById("pay_in_usd").value = "";
                      document.getElementById("pay_in_btc").value = "";
                      document.getElementById("paytobtc").value = "";
                    };
                  }
                };
                con2.open(
                  "POST",
                  "https://api.blockcypher.com/v1/" + network + "/txs/send"
                );
                con2.send(txfinal);
              }
            };
            con.open("POST", GcloudServer, true);

            con.send(returnedToSign);
          }
        }
      };
      con.open(
        "POST",
        "https://api.blockcypher.com/v1/" + network + "/txs/new",
        true
      );

      con.send(newtxString);

      //Send ro server to sign
    });
  };
}
