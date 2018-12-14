var bcynet = "bcy/test";
var btcnet = "btc/main";
//Use for AWS
var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
//Use for appEngine
var appEngine = "https://cryptobit-213216.appspot.com/";

NetworkToUse(btcnet);
function NetworkToUse(network) {
  var GcloudServer = aws;

  var con1 = new XMLHttpRequest();
  var qr_source;
  con1.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      qr_source = this.responseURL;

      document.getElementById("qr_code_img_eth").setAttribute("src", qr_source);
    }
  };

  con1.open(
    "GET",
    "https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=fhy546trgfdgfd"
  );

  con1.send();
}
