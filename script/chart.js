var bcynet = 'bcy/test';
var btcnet = 'btc/main';

//Use for AWS
var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
//Use for appEngine
var appEngine = 'https://cryptobit-213216.appspot.com/';


  NetworkToUse(btcnet);
function NetworkToUse(network){
    var GcloudServer = aws;
var ex1 = document.getElementById('chartContpo');
var ex2 = document.getElementById('charticonye');
var ex3 = document.getElementById('closeCryptocurrenciesHed');

var iconsidArray = [];
var con = new XMLHttpRequest();
con.onreadystatechange = function () {
    if (this.readyState == 4) {
        var result = JSON.parse(this.responseText);
       

        var cryptocharttable = document.getElementById('cryptocharttable');
        var tb_bpdy = document.createElement('tbody')
        cryptocharttable.appendChild(tb_bpdy)


        for (var k in result.data) {
            var sum = k;
            sum = Number(sum) + 1;
            var name = result.data[k].name;
            var price = result.data[k].quote.USD.price;
            price = price.toFixed(2);
            var cryptocurId = result.data[k].id;
            iconsidArray.push(result.data[k].id)


            tb_bpdy.innerHTML += '<tr>' + "<td>" + "<span class='cyprochartnumeric'>" + sum + "</span>" + "<span data-cur-id=" + cryptocurId + " class='crimgset'></span>" + name + "</td>" + "<td>" + '$' + price + "</td>" + '</tr>'

        }
        var con1 = new XMLHttpRequest();
        con1.onreadystatechange = function () {
            if (this.readyState == 4) {
                var responseIcons = JSON.parse(this.responseText);
              
                var data_cur_id = document.getElementsByClassName('crimgset')
                data_cur_id.length
                for (var b = 0; b < data_cur_id.length; b++) {
                    var getDataAtr = data_cur_id[b].getAttribute('data-cur-id');
                    data_cur_id[b].innerHTML = (function () {
                        var img_to_return;
                        for (var f in responseIcons.data) {
                            var resid1 = responseIcons.data[f].id;
                            var resid2 = responseIcons.data[f].logo;
                            if (resid1 == getDataAtr) { img_to_return = resid2 }

                        }
                        return "<img src=" + img_to_return + ">";

                    })();

                }
            }
        }

        var objID = { "ids_array": iconsidArray }
        objID = JSON.stringify(objID);

        con1.open('POST', GcloudServer+'coinmarket/icons/' + objID)
        con1.send();

    }
}
    con.open('GET', aws+'coinmarket/')
con.send();


ex2.addEventListener('click', function () {





    ex1.style.display = 'flex';
    ex3.onclick = function () {

        ex1.style.display = 'none';




    }
})
}
