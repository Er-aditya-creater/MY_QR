let imgbox=document.getElementById("imgbox");
let QRimage=document.getElementById("QRimage");
let QRtext=document.getElementById("QRtext");

function generateQR(){
    if(QRtext.value.length>0){
        QRimage.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + QRtext.value; //it generate the QR code whatever value we will provide
        imgbox.classList.add("show-img");
    }
    else{
        QRtext.classList.add('error');
        setTimeout(()=>{
            QRtext.classList.remove('error'); //it means it will just add the error class for 1 sec and after that it will remove
        },1000); //1 sec=1000ms
    }
        
    
}