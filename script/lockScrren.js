//Lock screen

var getAll = chrome.storage.sync;

getAll.get(null,(x1,x2)=>{
    console.log(x1,x2)

    if(x1.lockStatus === true){
       
        var unLockWalPPP = document.getElementById('unLockWalPPP');
        unLockWalPPP.onkeyup = ()=>{
            console.log(unLockWalPPP.value)

            if(unLockWalPPP.value === x1.lock){ 
                window.close('lock.html')
                window.open("popup.html", "_blank", "left=800,top=200,width=320,height=430,status=no,scrollbars=no,menubar=no,resizable=no,titlebar=no,toolbar=no");
            }
            
        }

    }else{
        console.log('x1.lockStatus === false')
        window.close('lock.html')
        window.open("popup.html", "_blank", "left=800,top=200,width=320,height=430,status=no,scrollbars=no,menubar=no,resizable=no,titlebar=no,toolbar=no");
    }
})