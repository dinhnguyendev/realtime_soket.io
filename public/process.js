$(document).ready(function(){

    checkMN();
    var currenAccount="";

    $("#conectMN").click(function(){
        connectMn().then(function(data){
             const currenAccount = data[0];
            console.log(currenAccount)
        }).catch(function(err){
            console.log(err)
        })
    })
    $("#btnDangKy").click(function(){
        $.post("./dangky",{
            Email:$("#txtEmail").val(),
            Hoten:$("#txtHoTen").val(),
            SoDT:$("#txtSoDT").val()
        },function(data){
            // console.log(data)
            
        })
    })
    async function connectMn(){
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
       
        return accounts
    }

   
})
function checkMN(){
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
      }else{
        console.log('MetaMask is not installed!!!!!!!!');
      }
}