var bcynet = 'bcy/test';
var btcnet = 'btc/main';
//Use for AWS
var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
//Use for appEngine
var appEngine = 'https://cryptobit-213216.appspot.com/';
NetworkToUse(btcnet);
function NetworkToUse(network) {
    var token = 'f478b3d6f8e8493da462c2a5cf24fd58';
    var GcloudServer = aws;
    var getpprif = new XMLHttpRequest();
    getpprif.onreadystatechange = function () {
        if (this.readyState == 4) {
            var result = JSON.parse(this.responseText)
            chrome.storage.sync.set({ priceTi: result })
        }
    }
    getpprif.open("GET", "https://api.coinmarketcap.com/v2/ticker/?limit=10");
    getpprif.send();

    getBal();


    //Lisr addreses with blance in send popup
    chrome.storage.sync.get('btc_wallet_name', (x) => {




        var getFullWalEndPoint = new XMLHttpRequest();
        getFullWalEndPoint.onreadystatechange = function () {
            if (this.readyState == 4) {
                var resultFullwalEnd = JSON.parse(this.responseText);



                chrome.storage.sync.get('addr', (y) => {
                    for (var i = 0; i < y.addr.length; i++) {
                        var t1 = y.addr[i].address;
                        var t2 = resultFullwalEnd.txs;
                        for (var q = 0; q < resultFullwalEnd.txs.length; q++) {
                            if (t1 == t2[q].outputs[0].addresses[0]) {

                                var t4 = y.addr;
                                var t3 = t2[q].outputs[0].value;

                                t4[i].balance = t3;

                                chrome.storage.sync.set({ addr: t4 })









                            }
                        }
                    }

                })



            }
        }
        getFullWalEndPoint.open('GET', 'https://api.blockcypher.com/v1/' + network + '/addrs/' + x.btc_wallet_name + '/full?token=' + token);
        getFullWalEndPoint.send();

        chrome.storage.sync.get('addr', function (x) {
            /* When the user clicks on the button, 
            toggle between hiding and showing the dropdown content */

            document.getElementById('myFunction').addEventListener('click', myFunction);





            function myFunction() {
                event.stopPropagation();
                var check_classlistShow = document.getElementById('myDropdown').classList.contains('show');
                if (check_classlistShow) { document.getElementById("myDropdown").classList.toggle("show") }
                else {
                    document.getElementById("myDropdown").classList.toggle("show");

                    var myNode = document.getElementById("myDropdown");
                    while (myNode.firstChild) {
                        myNode.removeChild(myNode.firstChild);
                    }

                    window.onclick = function (event) {
                        if (!event.target.matches('.dropbtn')) {

                            var dropdowns = document.getElementsByClassName("dropdown-content");
                            var i;
                            for (i = 0; i < dropdowns.length; i++) {
                                var openDropdown = dropdowns[i];
                                if (openDropdown.classList.contains('show')) {
                                    openDropdown.classList.remove('show');
                                }
                            }
                        }
                    }

                    var myDropdown = document.getElementById('myDropdown');






                    chrome.storage.sync.get('addr', (x) => {
                        var array_address_balance = '';

                        for (var i = 0; i < x.addr.length; i++) {
                            var t2 = x.addr[i].address;
                            (function (index, v1) {
                                setTimeout(function () {


                                    array_address_balance = v1;
                                    var con = new XMLHttpRequest();
                                    con.onreadystatechange = function () {
                                        if (this.readyState == 4) {


                                            var rert = JSON.parse(this.responseText)
                                            console.log(rert)
                                            var create_elementA = document.createElement('a');
                                            create_elementA.setAttribute('data-address', rert.address);
                                            create_elementA.setAttribute('class', "bitcoinaddressClass");
                                            myDropdown.appendChild(create_elementA);

                                            var creElSpan1 = document.createElement('span');
                                            var crebalspan = document.createElement('span');
                                            var unConfermedBal = document.createElement('span');
                                            unConfermedBal.setAttribute('class', 'unConfermedBal');
                                            unConfermedBal.setAttribute('id', 'unConfermedBal');
                                            if (rert.unconfirmed_balance > 0) {
                                            unConfermedBal.innerHTML =
                                                "<span class='unConfermedBalText'>Unconfirmed bal:</span><span class='unConfermedBalTextValue'>" + (rert.unconfirmed_balance / 100000000).toFixed(6) + " BTC</span>";
                                            }


                                            creElSpan1.setAttribute('class', 'addressSpan');
                                            crebalspan.setAttribute('class', 'addressSpan');
                                            crebalspan.setAttribute('id', 'addressSpan');
                                            creElSpan1.setAttribute('id', 'addressSpan1');
                                            creElSpan1.innerHTML = rert.address;
                                            crebalspan.innerHTML = getBackfullprice(rert.final_balance);

                                            /*
                                            adrNumners.innerHTML = (i+1);*/

                                            create_elementA.appendChild(creElSpan1);
                                            create_elementA.appendChild(crebalspan);
                                            create_elementA.appendChild(unConfermedBal);

                                            function getBackfullprice(x) {
                                                var qwer = x / 100000000;
                                                var a1, a2, a3, a4, a5;
                                                var btcvalye = document.getElementById('btcticker').innerHTML;

                                                var pticketbtc = Number(btcvalye);
                                                a1 = '<span id="Confirmedbalancetx9876">Confirmed bal:</span><span class="btc_piceInfoo btcpiricecl">' + qwer.toFixed(6) + " BTC</span>";
                                                a2 = '<span class="btc_piceInfoo usdbtcpricl">' + (qwer * pticketbtc).toFixed(2) + " USD</span>";
                                                a3 = a1 + " " + a2;
                                                return a3;

                                            }

                                            var bitcoinaddressClass = document.getElementsByClassName('bitcoinaddressClass');


                                            for (var i = 0; i < bitcoinaddressClass.length; i++) {
                                                bitcoinaddressClass[i].addEventListener('click', function (d) {

                                                    var temp = d.currentTarget.getAttribute('data-address');

                                                    var temp1 = d.currentTarget.innerHTML;



                                                    document.getElementById('replacewithaddr').innerHTML = temp1;
                                                    document.getElementById('myFunction');
                                                    document.body.style.height = "373px";
                                                    document.getElementById('close_popup_btc').addEventListener('click', function () {
                                                        document.body.style.height = 0;
                                                        document.getElementById('replacewithaddr').innerHTML = '';
                                                    })
                                                    document.getElementById('arrow').addEventListener('click', function () {
                                                        document.body.style.height = 0;
                                                        document.getElementById('replacewithaddr').innerHTML = '';
                                                    })




                                                })
                                            }

                                        }
                                    }

                                    con.open('GET', 'https://api.blockcypher.com/v1/' + network + '/addrs/' + array_address_balance + '/balance')
                                    con.send();


                                }, i * 10);
                            })(i, t2);







                        }














                    })
                }










            }


        }





            // Close the dropdown if the user clicks outside of it


        )



    })







    //******************************* */


    function getBal() {
        //Events






        getbal1();







    }



    getbal1();
    function getbal1() {










        chrome.storage.sync.get('btc_wallet_name', (x) => {



            //get bitcoin wallet balance from api cal
            var btc_Bal_dashB = document.getElementById('btc_Bal_dashB');
            var btc_walBalanceDash = document.getElementById('btc_walBalanceDash');
            var USD_bal_dashB = document.getElementById('USD_bal_dashB');
            var dashboard_w_tot_balx123 = document.getElementById('dashboard_w_tot_balx123');


            var wal_name_from_storage = x.btc_wallet_name;

            var con = new XMLHttpRequest();
            con.onreadystatechange = function () {
                if (this.readyState == 4) {
                    var result = JSON.parse(this.responseText)


                    var convertToBitcoin = result.final_balance / 100000000;
                    var finalRe = convertToBitcoin;
                    btc_Bal_dashB.innerHTML = finalRe;
                    btc_walBalanceDash.innerHTML = finalRe + " BTC";
                    dashboard_w_tot_balx123.innerHTML = ((x) => {

                        var btcticker = document.getElementById('btcticker').innerHTML;
                        return Number(finalRe * btcticker).toFixed(2);


                    })()
                    USD_bal_dashB.innerHTML = ((x) => {

                        var btcticker = document.getElementById('btcticker').innerHTML;
                        return Number(finalRe * btcticker).toFixed(2);


                    })()

                }
            }

            con.open('GET', 'https://api.blockcypher.com/v1/' + network + '/addrs/' + wal_name_from_storage + '?token=' + token);
            con.send();




        })
    }







    function frontusdbal() {
        document.getElementById()
    }


    /*
    var selectfromAddr = document.getElementById('selectfromAddr');
    var getBallarray = [];
        chrome.storage.sync.get('addr',(x)=>{
    
            getBallarray = x.addr;
            for(var i = 0;i<getBallarray.length;i++){
    
            }
           
        })
    
    */




}


