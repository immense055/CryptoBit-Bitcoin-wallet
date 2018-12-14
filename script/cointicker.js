var bcynet = "bcy/test";
var btcnet = "btc/main";

//Use for AWS
var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
//Use for appEngine
var appEngine = "https://cryptobit-213216.appspot.com/";

NetworkToUse(btcnet);
function NetworkToUse(network) {
  var GcloudServer = aws;
  coin();
  function coin() {
    var priceticker;
    var con = new XMLHttpRequest();
    con.onreadystatechange = function() {
      if (this.status == 200 && this.readyState == 4) {
        priceticker = JSON.parse(this.responseText);

        /*
            chrome.storage.sync.set({ priceTicker: priceticker })
*/
        // Convert ether to usd in send popup and vice versa
        var eth_price = priceticker.data[1027].quotes.USD.price;
        var btc_price = priceticker.data[1].quotes.USD.price;
        fillEthInput();
        function fillEthInput() {
          document
            .getElementById("pay_in_eth")
            .addEventListener("keyup", function(x) {
              var curent_val = x.currentTarget.value;
              var filed_to_paste = document.getElementById("pay_in_usd_eth");

              var determineUsd = curent_val * eth_price;
              determineUsd.toFixed(2);
              filed_to_paste.value = determineUsd;
            });
          document
            .getElementById("pay_in_usd_eth")
            .addEventListener("keyup", function(x) {
              var curent_val = x.currentTarget.value;
              var filed_to_paste = document.getElementById("pay_in_eth");
              var determineUsd = curent_val / eth_price;
              filed_to_paste.value = determineUsd.toFixed(6);
            });
        }
        // convert btc to usd and vice verse
        fillBtcInput();
        function fillBtcInput() {
          document
            .getElementById("pay_in_btc")
            .addEventListener("input", function(x) {
              var curent_val = x.currentTarget.value;
              var filed_to_paste = document.getElementById("pay_in_usd");

              var determineUsd = curent_val * btc_price;

              filed_to_paste.value = determineUsd.toFixed(2);
            });
          document
            .getElementById("pay_in_usd")
            .addEventListener("input", function(x) {
              var curent_val = x.currentTarget.value;
              var filed_to_paste = document.getElementById("pay_in_btc");
              var determineUsd = curent_val / btc_price;
              filed_to_paste.value = determineUsd.toFixed(6);
            });
        }
        /***************************************************************** */

        var btc_ticker = document.getElementById("btcticker");
        var eth_ticker = document.getElementById("etherticker");
        btc_ticker.innerHTML = btc_price.toFixed(2);
        eth_ticker.innerHTML = eth_price.toFixed(2);

        var per_chanebit_bit = document.getElementById("per_chanebit_bit");
        var per_chane_ether = document.getElementById("per_chane_ether");
        /*
                        per_chanebit_bit.innerHTML = priceticker.data[1].quotes.USD.percent_change_1h;
                        per_chane_ether.innerHTML = priceticker.data[1027].quotes.USD.percent_change_1h;
            */

        //arrow down or up

        var bit_arrow =
          priceticker.data[1].quotes.USD.percent_change_1h >= 0 ? true : false;
        var ether_arrow =
          priceticker.data[1027].quotes.USD.percent_change_1h >= 0
            ? true
            : false;

        if (bit_arrow) {
          document.getElementById("down1").className += " hidearrow";
          document.getElementById("up1").className += " showarrow grenn_arrow";
        } else {
          document.getElementById("down1").className += " showarrow red_arrow";
          document.getElementById("up1").className += " hidearrow";
        }
        if (ether_arrow) {
          document.getElementById("down").className += " hidearrow";
          document.getElementById("up").className += " showarrow  grenn_arrow";
        } else {
          document.getElementById("down").className += " showarrow red_arrow";
          document.getElementById("up").className += " hidearrow";
        }
      }
    };
    con.open("GET", "https://api.coinmarketcap.com/v2/ticker/?limit=100");
    con.send();
  }
}
