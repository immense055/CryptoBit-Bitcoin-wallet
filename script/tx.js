var bcynet = 'bcy/test';
var btcnet = 'btc/main';

//Use for AWS
var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
//Use for appEngine
var appEngine = 'https://cryptobit-213216.appspot.com/';


NetworkToUse(btcnet);
function NetworkToUse(network) {
    var GcloudServer = aws;
    filltxinfo();
    function filltxinfo() {
        var token = 'f478b3d6f8e8493da462c2a5cf24fd58';

        var bti_tx_info = document.getElementById('bti_tx_info');
        chrome.storage.sync.get(null, (x) => {


            getTxInfo(x);


        })



        function getTxInfo(x) {

            var wallName = x.btc_wallet_name;

            var con = new XMLHttpRequest();
            con.onreadystatechange = function () {
                if (this.readyState == 4) {

                    HandleResponse(JSON.parse(this.responseText))
                }
            }
            con.open('GET', 'https://api.blockcypher.com/v1/' + network + '/addrs/' + wallName + '/full?token=' + token + '&limit=50');
            con.send();




        }

        function HandleResponse(ThisResponse) {


            console.log(ThisResponse)
            var txs = ThisResponse.txs;

            if (txs.length > 0) { document.getElementById('ewtx').innerHTML = ''; }

            chrome.storage.sync.get('addr', (x) => { ToFun(x.addr) })

            function ToFun(Xaddr) {
                console.log(Xaddr)
                var aray = [];


                for (var i = 0; i < txs.length; i++) {
                    for (var i1 = 0; i1 < 1; i1++) {

                        var v1 = txs[i].inputs[i1].addresses

                        for (var i2 = 0; i2 < Xaddr.length; i2++) {
                            var v2 = Xaddr[i2].address;

                            if (v1 == v2) {
                                for (var i3 = 0; i3 < txs[i].outputs.length; i3++) {
                                   
                                    document.getElementById('bti_tx_info').innerHTML += '<span class="txContainer"><span class="arrowcontclasRed">'
                                    + '<i class="fas fa-minus"></i></span>'
                                    + '<span class="valueRecievedGREEN">' + (txs[i].outputs[i3].value/100000000).toFixed(8) + "</span>"
                                    + "<span class='toMiddleWord'>To</span>" + "<span class='txAddrClass'>" +txs[i].outputs[i3].addresses+ "</span>"
                                    + "</span>";
                                    
                                }

                            }
                            for(var e = 0;e<txs[i].outputs.length;e++){
                                if(txs[i].outputs[e].addresses == Xaddr[i2].address){
                                    console.log(txs[i].outputs[e].addresses)
                                    document.getElementById('bti_tx_info').innerHTML += '<span class="txContainer"><span class="arrowcontclasGrren">'
                                    + '<i class="fas fa-plus"></i></span>'
                                    + '<span class="valueRecievedRED">' + (txs[i].outputs[e].value/100000000).toFixed(8) + "</span>"
                                    + "<span class='toMiddleWord'>To</span>" + "<span class='txAddrClass'>" +txs[i].outputs[e].addresses+ "</span>"
                                    + "</span>";

                                }
                            }

                        }
                    }

                }




               






                function arrowFoo(aray) {

                    chrome.storage.sync.get('addr', (f) => {

                        for (var i = 0; i < f.addr.length; i++) {
                            if (f.addr[i].address == aray) {
                                var arrowcontclas = document.getElementsByClassName('arrowcontclas')
                                var txAddrClass = document.getElementsByClassName('txAddrClass');
                                var plusBTN = document.getElementsByClassName('plusBTN');
                                var valueRecieved = document.getElementsByClassName('valueRecieved');

                                for (var y = 0; y < txAddrClass.length; y++) {

                                    if (txAddrClass[y].innerHTML == f.addr[i].address) {
                                        arrowcontclas[y].innerHTML = '<i class="fas fa-arrow-left"></i>';
                                        plusBTN[y].innerHTML = '+';
                                        valueRecieved[y].style.color = 'green';

                                    }
                                }

                            }
                        }



                    })

                    return '<i class="fas fa-arrow-right"></i>'

                }
            }







        }






    }






}

