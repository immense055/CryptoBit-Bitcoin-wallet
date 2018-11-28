var bcynet = 'bcy/test';
var btcnet = 'btc/main';

NetworkToUse(btcnet);
function NetworkToUse(network) {
    var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
   // const appEngine = 'https://cryptobit-213216.appspot.com/';

    var GcloudServer = aws;

var adrContLook = document.getElementById('adrContLook')
adrContLook.addEventListener('click', x1);

function x1() {

    var e1 = document.createElement('div');
    var e2 = document.createElement('input');
    var e3 = document.createElement('button');
    var e4 = document.createElement('span');
    e4.innerHTML = 'X';
    e3.innerHTML = 'Search';
    e3.setAttribute('id', 'btnsearchp3fr')
    e1.innerHTML = "<span id='headerz1'>Get info about any bitcoin address</span><span id='closepopggf3'>X</span>"
    e2.setAttribute('type', 'text');
    e2.setAttribute('id', 'entBitadrx1y1');
    e2.setAttribute('placeholder', 'Enter bitcoin address');
    e1.setAttribute('id', 'xcont');
    e1.appendChild(e2);
    e1.appendChild(e3);
    e1.style.position = 'absolute';
    e1.style.top = '33px';
    e1.style.bottom = '33px';
    e1.style.left = '10px';
    e1.style.right = '10px';
    e1.style.backgroundColor = 'aliceblue';
    e1.style.boxShadow = '0 0 39px black';
    e1.style.display = 'flex';

    document.body.appendChild(e1);



    var closepopggf3 = document.getElementById('closepopggf3');
    closepopggf3.addEventListener('click', function () {
        var xcont = document.getElementById('xcont');
        document.body.removeChild(xcont);
        if (e1.style.display = 'flex') { e1.style.display = 'none'; }


    })

    var btnsearchp3fr = document.getElementById('btnsearchp3fr');

    btnsearchp3fr.addEventListener('click', function () {
        if(document.getElementById('getbackinfoid')){
            document.getElementById('xcont').removeChild(document.getElementById('getbackinfoid'))
        }
      
        var entBitadrx1y1 = document.getElementById('entBitadrx1y1').value;


    var con = new XMLHttpRequest();
    con.onreadystatechange = function(){if(this.readyState == 4){
        
        var res = JSON.parse(this.responseText)
       
        var xcont = document.getElementById('xcont');
        var d1 = document.createElement('div');
        d1.setAttribute('id','getbackinfoid');
        var ar = [res.address,res.total_sent/100000000,res.total_received/100000000,res.n_tx,res.final_balance/100000000]
        d1.innerHTML = '<span class="adrlooupcls98">Address:</span><span class="returndDataxmlg">'+ar[0]+'</span>'
        +'<span class="adrlooupcls98">Balance:</span><span class="returndDataxmlg">'+ar[4]+' BTC'+'</span>'
        +'<span class="adrlooupcls98">Total received:</span><span class="returndDataxmlg">'+ar[2]+' BTC'+'</span>'
        +'<span class="adrlooupcls98">Total sent:</span><span class="returndDataxmlg">'+ar[1]+' BTC'+'</span>'
        +'<span class="adrlooupcls98">Number of tx:</span><span class="returndDataxmlg">'+ar[3]+'</span>'
        
        xcont.appendChild(d1)




        
    }}
    con.open('POST',GcloudServer +'blockchain/'+ entBitadrx1y1);
    
    con.send();

    })


}

}




