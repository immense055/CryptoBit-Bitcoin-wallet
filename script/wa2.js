// My addresses ether
// Create as many addresses as you want

//Use for AWS
var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
//Use for appEngine
var appEngine = 'https://cryptobit-213216.appspot.com/';

var token = 'f478b3d6f8e8493da462c2a5cf24fd58';
var GcloudServer = aws;
document.getElementById('addnewAddress_eth').addEventListener('click',function(){

    var con2 = new XMLHttpRequest();
    
    con2.onreadystatechange = function(){
        if(this.readyState == 4){
       var newAddress = JSON.parse(this.responseText)

         document.getElementById('eth_addres_list').innerHTML += "<div class='adr_list_btc_cont'><span class='btc_adr_span'>"+newAddress.address+"</span></div>";


            chrome.storage.sync.get('id_eth',(y)=>{
                var temp_id = y.id_eth;
                chrome.storage.sync.get('addr_eth',(z)=>{
                
                z.addr_eth[temp_id] = newAddress;
                    
                chrome.storage.sync.set({'id_eth':++y.id_eth})
                chrome.storage.sync.set({addr_eth:z.addr_eth})
                
                chrome.storage.sync.get(null,(x)=>{console.log(x)})
 
                })

            })

        }
       
    }
    
    con2.open('POST','https://api.blockcypher.com/v1/eth/main/addrs?token='+token);
    con2.send();

});

//Populate My address popup
var d2 = document.getElementById('btn_address_ether')
d2.addEventListener('click',foo2);

function foo2(){

populate_btc_addr();

function populate_btc_addr(){
            var btc_adr_list = document.getElementById('eth_addres_list');
            chrome.storage.sync.get('addr_eth',(x)=>{
        
        for(var i = 0; i < x.addr_eth.length;i++){
    
            btc_adr_list.innerHTML += "<div class='adr_list_btc_cont'><span class='btc_adr_span'>"+x.addr_eth[i].address+"</span></div>";
        }
        d2.removeEventListener('click',foo2)
      
            })
        
        }
}







