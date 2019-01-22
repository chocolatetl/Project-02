
//Validate form bằng Javascript



//Function check Thông tin thanh toán
function checkInfo() {
    var name = document.getElementById("name").value;
    var sothe = document.getElementById("sothe").value;
    var ccg = document.getElementById("ccg").value;
    var date = document.getElementById("date").value;
    var checkNumber = /[0-9]/g;
    var flagName;
    var flagSothe;
    var flagCcg;
    var flagDate;
    //check name
    if (name == ""){
        document.getElementById("errorName").innerHTML = "Vui lòng nhập đầy đủ họ tên";
        flagName = 1;
    }
    else {
        if (name.match(checkNumber)){
            document.getElementById("errorName").innerHTML = "Sai định dạng tên";
            flagName = 1;
        }
        else{
            document.getElementById("errorName").innerHTML = "";
            flagName = 0;
        }
    }

    //check số thẻ
    if(isNaN(sothe)||(sothe).length < 16){
        document.getElementById("errorSothe").innerHTML = "Sai định dạng số thẻ";
        flagSothe = 1;
    }
    else {
        document.getElementById("errorSothe").innerHTML = "";
        flagSothe = 0;
    }

    //check date
    if (date == ""){
        document.getElementById("errorDate").innerHTML = "Nhập ngày tháng";
        flagDate = 1;
    }
    else{
        document.getElementById("errorDate").innerHTML = "";
        flagDate = 0;
    }
    
    //check ccg
    if (ccg == ""){
        document.getElementById("errorCcg").innerHTML = "Nhập CCG";
        flagCcg = 1;
    }
    else{
        document.getElementById("errorCcg").innerHTML = "";
        flagCcg = 0;
    }
    //Khi có đầy đủ thông tin thì sẽ popup thông báo xác nhận thanh toán
    if ((flagName == 0) && (flagSothe == 0) && (flagCcg == 0) && (flagDate == 0)){
        alert("Bạn đồng ý với điều khoản và xác nhận thanh toán")
    }
}

//Functicon Check mã code giảm giá
function checkCode(){
    var code = document.getElementById("code").value;
    var flagCode;
    if (code == ""){
        document.getElementById("errorCode").innerHTML = "Vui lòng nhập code";
        flagCode = 1;
    }
    else{
        if (code.length > 7){
            document.getElementById("errorCode").innerHTML = "Sai mã code";
            flagCode = 1;
        }
        else{
            document.getElementById("errorCode").innerHTML = "";
            flagCode = 0;
        }
    }
    //Code hợp lệ
    if(flagCode == 0){
        alert("Nhập code thành công");
    }
}



document.querySelector('.thanhtoan').onmousemove = (e) => {
    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop
    e.target.style.setProperty('--x', `${ x }px`)
    e.target.style.setProperty('--y', `${ y }px`)
   
  }