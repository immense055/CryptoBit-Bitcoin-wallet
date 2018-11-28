var bcynet = 'bcy/test';
var btcnet = 'btc/main';
//Use for AWS
var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
//Use for appEngine
var appEngine = 'https://cryptobit-213216.appspot.com/';

  NetworkToUse(btcnet);
function NetworkToUse(network){
    var GcloudServer = aws;
  window.onload = function(){var arrow = document.getElementById("arrow");

  document.getElementsByClassName('open_b_wal')[0].addEventListener('click',(x)=>{
  var bd = document.getElementById("open_bd_wal");
  if(bd.classList.contains = 'animate_hiding'){bd.classList.remove('animate_hiding')}
  bd.classList.add("mystyle");
  arrow.classList.add('display_arrow');
  if(arrow.classList.contains = 'mystyle'){
      arrow.addEventListener('click',(x)=>{
        bd.classList.add('animate_hiding');
        setTimeout(function(){ bd.classList.remove("mystyle");},400)
        
          arrow.classList.remove('display_arrow')
      })
   }
  })
  document.getElementsByClassName('open_e_wal')[0].addEventListener('click',(x)=>{
  var ed = document.getElementById("open_ed_wal");
  if(ed.classList.contains = 'animate_hiding'){ed.classList.remove('animate_hiding')}
  ed.classList.add("mystyle");
  arrow.classList.add('display_arrow');
  if(arrow.classList.contains = 'mystyle'){
      arrow.addEventListener('click',(x)=>{
          
          ed.classList.add('animate_hiding');
          setTimeout(function(){ ed.classList.remove("mystyle");},400)
          
          arrow.classList.remove('display_arrow')
      })
    }
  
  })
  
  document.getElementsByClassName("wallet_balance")[0].addEventListener('click',(x)=>{
      var doc = document.getElementsByClassName('hide_div_wallet');
      for(var i = 0;i<doc.length;i++){
          doc[i].classList.remove('mystyle');
      }
  })
  }




}
