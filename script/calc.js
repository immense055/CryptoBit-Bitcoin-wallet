var bcynet = "bcy/test";
var btcnet = "btc/main";

//Use for AWS
var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
//Use for appEngine
var appEngine = "https://cryptobit-213216.appspot.com/";

NetworkToUse(btcnet);
function NetworkToUse(network) {
  var GcloudServer = aws;
  var con = new XMLHttpRequest();
  con.onreadystatechange = function() {
    if (this.readyState == 4) {
      var res = JSON.parse(this.responseText);
      handelRes(res);
    }
  };
  con.open("GET", "https://blockchain.info/ticker");
  con.send();

  function handelRes(x) {
    var ulCurrencycont = document.getElementById("ulCurrencycont");
    ulCurrencycont.style.display = "none";

    document.getElementById("chooseCurre").addEventListener("click", show);
    document.getElementById("iconupopen").addEventListener("click", show);
    function show() {
      var ulCurrencycont = document.getElementById("ulCurrencycont");

      if (ulCurrencycont.style.display === "none") {
        ulCurrencycont.style.display = "flex";
      } else {
        ulCurrencycont.style.display = "none";
      }
    }

    var cur = document.getElementsByClassName("cur");
    var btcinfiled = document.getElementById("btcinfiled");
    var curinfiled = document.getElementById("curinfiled");
    var chooseCurre = document.getElementById("chooseCurre");
    for (var i = 0; i < cur.length; i++) {
      cur[i].addEventListener("click", function(v) {
        var vcr = v.currentTarget.innerHTML;
        chooseCurre.innerHTML = v.currentTarget.innerHTML;
        var r1 = btcinfiled.value;
        var r2 = curinfiled.value;
        yesh(r1, vcr);
      });
    }

    btcinfiled.addEventListener("keyup", fx1);
    curinfiled.addEventListener("keyup", fx1);

    function fx1(z) {
      var zC = z.currentTarget.value;
      var cc = chooseCurre.innerHTML;

      yesh(zC, cc);
    }

    function yesh(v1, v2) {
      switch (v2) {
        case "USD":
          curinfiled.value = (v1 * x.USD.buy).toFixed(2);
          break;
        case "BRL":
          curinfiled.value = (v1 * x.BRL.buy).toFixed(2);
          break;
        case "CAD":
          curinfiled.value = (v1 * x.CAD.buy).toFixed(2);
          break;
        case "CHF":
          curinfiled.value = (v1 * x.CHF.buy).toFixed(2);
          break;
        case "CLP":
          curinfiled.value = (v1 * x.CLP.buy).toFixed(2);
          break;
        case "CNY":
          curinfiled.value = (v1 * x.CNY.buy).toFixed(2);
          break;
        case "DKK":
          curinfiled.value = (v1 * x.DKK.buy).toFixed(2);
          break;
        case "EUR":
          curinfiled.value = (v1 * x.EUR.buy).toFixed(2);
          break;
        case "GBP":
          curinfiled.value = (v1 * x.GBP.buy).toFixed(2);
          break;
        case "HKD":
          curinfiled.value = (v1 * x.HKD.buy).toFixed(2);
          break;
        case "INR":
          curinfiled.value = (v1 * x.INR.buy).toFixed(2);
          break;
        case "ISK":
          curinfiled.value = (v1 * x.ISK.buy).toFixed(2);
          break;
        case "JPY":
          curinfiled.value = (v1 * x.JPY.buy).toFixed(2);
          break;
        case "KRW":
          curinfiled.value = (v1 * x.KRW.buy).toFixed(2);
          break;
        case "NZD":
          curinfiled.value = (v1 * x.NZD.buy).toFixed(2);
          break;
        case "PLN":
          curinfiled.value = (v1 * x.PLN.buy).toFixed(2);
          break;
        case "RUB":
          curinfiled.value = (v1 * x.RUB.buy).toFixed(2);
          break;
        case "SEK":
          curinfiled.value = (v1 * x.SEK.buy).toFixed(2);
          break;
        case "SGD":
          curinfiled.value = (v1 * x.SGD.buy).toFixed(2);
          break;
        case "THB":
          curinfiled.value = (v1 * x.THB.buy).toFixed(2);
          break;
        case "TWD":
          curinfiled.value = (v1 * x.TWD.buy).toFixed(2);
          break;
        case "AUD":
          curinfiled.value = (v1 * x.AUD.buy).toFixed(2);
          break;
      }
    }
  }
}
