var token = 'f478b3d6f8e8493da462c2a5cf24fd58';
/*var GcloudServer = 'http://127.0.0.1:8080/';*/

//Use for AWS
var aws = "http://cryptobit-env.7hiybanifg.eu-central-1.elasticbeanstalk.com/";
//Use for appEngine
var appEngine = 'https://cryptobit-213216.appspot.com/';



var GcloudServer = aws;
document.getElementById('settings_icon_id_page').addEventListener('click', firstFoox54644, false)
//Show popup settings
function firstFoox54644(xxx) {
    xxx.stopPropagation()
    document.getElementById('settings_page_id').style.display = 'flex';
    
    var loggedInfo = document.getElementById('loggedInfo');

    chrome.storage.sync.get(['email','btc_wallet_name'],(res)=>{
        console.log(res.email);  console.log(res.btc_wallet_name)

        if(res.email){
            console.log(true)
            loggedInfo.innerHTML = '';
            var div = document.createElement('div');
            var div1 = document.createElement('div');div1.className = 'iconNAme';
            var sp1 = document.createElement('span');sp1.className = 'spClassNamid95869';sp1.id='spUniqueid1';sp1.innerText = 'Logged as';
            var sp2 = document.createElement('span');sp2.className = 'spClassNamid95869';sp2.id='spUniqueid2';sp2.innerText = res.email;
            var sp3 = document.createElement('span');sp3.className = 'spClassNamid95869';sp3.id='spUniqueid3';sp3.innerText = 'Wallet unique id';
            var sp4 = document.createElement('span');sp4.className = 'spClassNamid95869';sp4.id='spUniqueid4';sp4.innerText = res.btc_wallet_name;



            div1.appendChild(sp1), div1.appendChild(sp2), div1.appendChild(sp3), div1.appendChild(sp4)
            var btnLogOut = document.createElement('input');
            btnLogOut.className = 'btnLogOut';
            btnLogOut.setAttribute('type','button');
           btnLogOut.setAttribute('value','Logout');btnLogOut.id='logiudIdbtn9093';
            div.className ='userLoggenClass';
            loggedInfo.appendChild(div);
            loggedInfo.appendChild(div1)
            loggedInfo.appendChild(btnLogOut)

            btnLogOut.onclick = () => {
                console.log('logging out formlogin');
                chrome.storage.sync.remove(['lockStatus','lock'])
                document.getElementById('loggedInfo').innerHTML = "<div class='card__face card__face--front'><h2 class='headingset'>User Autentication</h2>"+
                "<img src='images/gui/verification.svg' class='UserAutenticationIMAGE' alt='User Autentication'><div class='inputCOntcla'>" +
                "<input type='button' id='inpId1' class='inpId1class' value='Login with email'>"+
                "<input type='button' id='inpId2' class='inpId2class' value='Sign up with Email'>"+
            "</div>"+
        "</div>"+
        "<div class='card__face card__face--back'>"+
            "<div class='containerBaclflip' id='containerBacklflip'>"+
                "<div class='row1'><i class='material-icons' id='flipBack'>"+
                        "autorenew"+
                    "</i><span id='Headingloginorregister' class='Headingloginorregister'></span></div><div class='everethungels' id='everethungels'></div></div></div>";
                    console.log('settings 1111111111');


                    document.getElementById('inpId1').addEventListener('click', foo1)
document.getElementById('inpId2').addEventListener('click', foo1)
document.getElementById('flipBack').addEventListener('click', flipBack)

function flipBack() {
   

    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
  

    document.getElementById('everethungels').innerHTML = '';

}


function foo1(event) {
    console.log(event.currentTarget.id)
    var checkBtnPress = event.currentTarget.id;
    var card__face__back = document.querySelector('.card__face--back');
    var everethungels = document.getElementById('everethungels');

    if (checkBtnPress === 'inpId1') {
        if(  document.getElementById('Headingloginorregister') != null){   document.getElementById('Headingloginorregister').innerHTML = 'Login'}
     
        var crEl = document.createElement('form');
        /*
        crEl.action = 'http://127.0.0.1:8080/register';
        crEl.method = 'POST';*/
        var inEMail = document.createElement('input');
        var NExtBtn = document.createElement('input');
        var div = document.createElement('div');
        var div1 = document.createElement('div1');
        var imgIcon = document.createElement('img');
        imgIcon.setAttribute('src', 'images/gui/icon.png');
        imgIcon.setAttribute('title', 'Login');
        imgIcon.setAttribute('alt', 'Login');
        div1.id = 'signInFacebookId';
        div1.className = 'signInFacebook';
        div.id = 'signInGoogleId';
        div.className = 'signInGoogle';
        inEMail.setAttribute('type', 'email');
        inEMail.id = 'inputEmail';
        inEMail.setAttribute('autocomplete', 'on');
        inEMail.placeholder = 'Enter email';
        var inPass = document.createElement('input');
        inPass.setAttribute('type', 'password');
        inPass.id = 'inputPassword';
        inPass.setAttribute('placeholder', 'Enter password');
        NExtBtn.setAttribute('type', 'button');
        NExtBtn.id = 'sendLogintoServer';
        NExtBtn.value = 'Login'
        NExtBtn.className = 'sendLogintoServerClass';

        crEl.appendChild(imgIcon)
        crEl.appendChild(inEMail)
        crEl.appendChild(inPass)
        crEl.appendChild(NExtBtn)
        /* 
         everethungels.appendChild(div)
         everethungels.appendChild(div1)*/
        everethungels.appendChild(crEl)
        var sendLogintoServer1 = document.getElementById('sendLogintoServer');
   
    sendLogintoServer1.addEventListener('click', f3);
    } else if (checkBtnPress === 'inpId2') {
        if(document.getElementById('Headingloginorregister')!==null){document.getElementById('Headingloginorregister').innerHTML = 'Login'}
       
        var crEl = document.createElement('form');
        /*
        crEl.action = 'http://127.0.0.1:8080/register';
        crEl.method = 'POST';*/
        var inEMail = document.createElement('input');
        var NExtBtn = document.createElement('input');
        var div = document.createElement('div');
        var div1 = document.createElement('div1');
        div1.id = 'signUPFacebookId';
        div1.className = 'signInFacebook'
        div.id = 'signUPGoogleId';
        div.className = 'signInGoogle'
        inEMail.setAttribute('type', 'email')
        inEMail.id = 'inputEmailx1';
        inEMail.name = 'emailRegister'
        inEMail.placeholder = 'Enter email'
        var inPass = document.createElement('input');
        var sec_Pass = document.createElement('input');
        sec_Pass.setAttribute('type', 'password')
        inPass.setAttribute('type', 'password')
        inPass.id = 'inputPasswordx2';
        inPass.name = 'passRegister'
        inPass.setAttribute('placeholder', 'Enter password')
        sec_Pass.setAttribute('placeholder', 'Enter password again')
        sec_Pass.id = 'inputPasswordyy2'
        sec_Pass.name = 'passwordRegister2'
        NExtBtn.setAttribute('type', 'button')
        NExtBtn.id = 'sendLogintoServerUP';
        NExtBtn.value = 'Register'
        NExtBtn.className = 'sendLogintoServerClass'
        crEl.appendChild(inEMail)

        crEl.appendChild(inPass)
        crEl.appendChild(sec_Pass)
        crEl.appendChild(NExtBtn)

        everethungels.appendChild(crEl)
        var sendLogintoServer = document.getElementById('sendLogintoServerUP');
        sendLogintoServer.addEventListener('click', ff3)

    }

    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');

    
}

                let getRND = new XMLHttpRequest();getRND.onload = ()=>{
                    console.log(getRND.responseText)
                    var getLogOutAddress = new XMLHttpRequest();
                    getLogOutAddress.onload = () => {
                        var resp = JSON.parse(getLogOutAddress.responseText);
                        console.log(resp);
    
    
    
                        var data = {"name": 'W'+getRND.responseText  ,"addresses": [resp.address]};
                        if(resp){
                            var getLogOutAddress1 = new XMLHttpRequest();
                            getLogOutAddress1.onload = () => { 
                                var completed = JSON.parse(getLogOutAddress1.responseText)
                                console.log(completed)
                                chrome.storage.sync.set({originData:{wallet:completed,addrOrigin:resp}},(calB)=>{
                                    chrome.storage.sync.remove(['email','password','originData1'])
                                    chrome.storage.sync.set({addr:[resp],btc_wallet_name:completed.name,id:1})
                                    

                                })


                                
                            
                            };
                            
                            getLogOutAddress1.open('POST','https://api.blockcypher.com/v1/btc/main/wallets?token='+token);
                            getLogOutAddress1.send(JSON.stringify(data))
                        }
    
    
    
    
                    }
                    getLogOutAddress.open('POST', 'https://api.blockcypher.com/v1/btc/main/addrs');
                    getLogOutAddress.send();
                }

                getRND.open('GET',GcloudServer+'randomNumber');getRND.send();

               


            }

            
        }
    })

}

//Hide popup settings
document.getElementById('exitFromSettings').onclick = () => {

    var setSecurPage = document.getElementById('setSecurPage')
    var setBackUpPage = document.getElementById('setBackUpPage')
    var setAccountPage = document.getElementById('setAccountPage')
    /*
    setSecurPage.removeEventListener('click', eve1)
    setBackUpPage.removeEventListener('click', eve2)
    setAccountPage.removeEventListener('click', eve3)*/


    document.getElementById('settings_page_id').style.display = 'none';
}










var setSecurPage = document.getElementById('setSecurPage')
var setBackUpPage = document.getElementById('setBackUpPage')
var setAccountPage = document.getElementById('setAccountPage')

setSecurPage.addEventListener('click', eve1)



function eve1() {

    chrome.storage.sync.get('lockStatus',(x1,x2)=>{
        console.log(x1.lockStatus)
        if(x1.lockStatus === true){
       
    var LockUnset = document.getElementById('LockUnset');
    var LockSet = document.getElementById('LockSet');
    var secImgContLock = document.getElementById('secImgContLock');
    var WalletLockedImg = document.getElementById('WalletLockedImg');
    var SetSEcPAs = document.getElementById('SetSEcPAs');




    secImgContLock.style.display = 'none';
    LockUnset.style.display = 'none';
    LockSet.style.display = 'block';
    WalletLockedImg.style.display = 'block';
    SetSEcPAs.innerText = 'Wallet Lock Enabled!'
        }
    })
    
   


    {
        var settings_secpage = document.getElementById('settings_secpage');
        document.getElementById('settings_acountP').style.display = 'none';
        document.getElementById('settings_backUP').style.display = 'none';
        console.log(settings_secpage.style.display)
        if (settings_secpage.style.display !== 'flex') {
            settings_secpage.style.display = 'flex';
        } else {
            settings_secpage.style.display = 'none';
        }



        console.log(event.currentTarget)
    }
}


setBackUpPage.addEventListener('click', eve2)

function eve2() {
    {

        var settings_backUP = document.getElementById('settings_backUP')
        document.getElementById('settings_secpage').style.display = 'none';
        document.getElementById('settings_acountP').style.display = 'none';
        if (settings_backUP.style.display !== 'flex') {
            settings_backUP.style.display = 'flex';
        } else {
            settings_backUP.style.display = 'none'
        }

        console.log(event.currentTarget)
    }
}

setAccountPage.addEventListener('click', eve3)

function eve3() {
    {
        var settings_acountP = document.getElementById('settings_acountP')
        document.getElementById('settings_backUP').style.display = 'none';
        document.getElementById('settings_secpage').style.display = 'none';
        if (settings_acountP.style.display !== 'flex') {
            settings_acountP.style.display = 'flex'
        } else {
            settings_acountP.style.display = 'none'
        }


        
        console.log(event.currentTarget)
    }
}


//Flip card script

document.getElementById('inpId1').addEventListener('click', foo1)
document.getElementById('inpId2').addEventListener('click', foo1)
document.getElementById('flipBack').addEventListener('click', flipBack)

function flipBack() {
   

    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
  

    document.getElementById('everethungels').innerHTML = '';

}


function foo1(event) {
    console.log(event.currentTarget.id)
    var checkBtnPress = event.currentTarget.id;
    var card__face__back = document.querySelector('.card__face--back');
    var everethungels = document.getElementById('everethungels');

    if (checkBtnPress === 'inpId1') {
        if( document.getElementById('Headingloginorregister') !== null){ document.getElementById('Headingloginorregister').innerHTML = 'Login'}
        var crEl = document.createElement('form');
        /*
        crEl.action = 'http://127.0.0.1:8080/register';
        crEl.method = 'POST';*/
        var inEMail = document.createElement('input');
        var NExtBtn = document.createElement('input');
        var div = document.createElement('div');
        var div1 = document.createElement('div1');
        var imgIcon = document.createElement('img');
        imgIcon.setAttribute('src', 'images/gui/icon.png');
        imgIcon.setAttribute('title', 'Login');
        imgIcon.setAttribute('alt', 'Login');
        div1.id = 'signInFacebookId';
        div1.className = 'signInFacebook';
        div.id = 'signInGoogleId';
        div.className = 'signInGoogle';
        inEMail.setAttribute('type', 'email');
        inEMail.id = 'inputEmail';
        inEMail.setAttribute('autocomplete', 'on');
        inEMail.placeholder = 'Enter email';
        var inPass = document.createElement('input');
        inPass.setAttribute('type', 'password');
        inPass.id = 'inputPassword';
        inPass.setAttribute('placeholder', 'Enter password');
        NExtBtn.setAttribute('type', 'button');
        NExtBtn.id = 'sendLogintoServer';
        NExtBtn.value = 'Login'
        NExtBtn.className = 'sendLogintoServerClass';

        crEl.appendChild(imgIcon)
        crEl.appendChild(inEMail)
        crEl.appendChild(inPass)
        crEl.appendChild(NExtBtn)
        /* 
         everethungels.appendChild(div)
         everethungels.appendChild(div1)*/
        everethungels.appendChild(crEl)
    } else if (checkBtnPress === 'inpId2') {
        if( document.getElementById('Headingloginorregister') !== null){ document.getElementById('Headingloginorregister').innerHTML = 'Sign Up'}
       
        var crEl = document.createElement('form');
        /*
        crEl.action = 'http://127.0.0.1:8080/register';
        crEl.method = 'POST';*/
        var inEMail = document.createElement('input');
        var NExtBtn = document.createElement('input');
        var div = document.createElement('div');
        var div1 = document.createElement('div1');
        div1.id = 'signUPFacebookId';
        div1.className = 'signInFacebook'
        div.id = 'signUPGoogleId';
        div.className = 'signInGoogle'
        inEMail.setAttribute('type', 'email')
        inEMail.id = 'inputEmailx1';
        inEMail.name = 'emailRegister'
        inEMail.placeholder = 'Enter email'
        var inPass = document.createElement('input');
        var sec_Pass = document.createElement('input');
        sec_Pass.setAttribute('type', 'password')
        inPass.setAttribute('type', 'password')
        inPass.id = 'inputPasswordx2';
        inPass.name = 'passRegister'
        inPass.setAttribute('placeholder', 'Enter password')
        sec_Pass.setAttribute('placeholder', 'Enter password again')
        sec_Pass.id = 'inputPasswordyy2'
        sec_Pass.name = 'passwordRegister2'
        NExtBtn.setAttribute('type', 'button')
        NExtBtn.id = 'sendLogintoServerUP';
        NExtBtn.value = 'Register'
        NExtBtn.className = 'sendLogintoServerClass'
        crEl.appendChild(inEMail)

        crEl.appendChild(inPass)
        crEl.appendChild(sec_Pass)
        crEl.appendChild(NExtBtn)

        everethungels.appendChild(crEl)
    }

    var card = document.querySelector('.card');
    card.classList.toggle('is-flipped');
}




  

        
   

    
   
    
    
   
