document.getElementById("tinh").onclick = function(){
    //Đầu vào
    var hoTen       = document.getElementById("hoTen").value;
    var tongThuNhap = document.getElementById("tongThuNhap").value * 1;
    var soNguoi     = document.getElementById("soNguoi").value * 1;

    if(hoTen == '') {
        alert('Vui lòng nhập họ tên');
        return false;
    }

    if(document.getElementById("tongThuNhap").value == '') {
        alert('Vui lòng nhập tổng thu nhập năm');
        return false;
    }

    if(document.getElementById("soNguoi").value == '') {
        alert('Vui lòng nhập tổng số người');
        return false;
    }


    var thuNhapChiuThue = tongThuNhap - 4e+6 - soNguoi * 1600000;
    // 1.6e+6 máy báo lỗi nên e viết 1600000 ạ

    var thueSuat = 0;
    // 
    if(tongThuNhap < 11e+6){
        alert("Số tiền thu nhập không hợp lệ");
    }else
     {if(thuNhapChiuThue <= 60e+6 ){
        thueSuat = thuNhapChiuThue * 0.05;

    } else if(thuNhapChiuThue <= 120e+6){
        thueSuat = thuNhapChiuThue * 0.1;
    }else if(thuNhapChiuThue <= 210e+6){
        thueSuat = thuNhapChiuThue * 0.15;

    } else if(thuNhapChiuThue <= 384e+6){
        thueSuat = thuNhapChiuThue * 0.2;

    }else if(thuNhapChiuThue <= 624e+6){
        thueSuat = thuNhapChiuThue * 0.25;

    } else if(thuNhapChiuThue <= 960e+6){
        thueSuat = thuNhapChiuThue * 0.3;
    }else{
        thueSuat = thuNhapChiuThue * 0.35;
    }
    
}

    // Đầu ra
    let current = new Intl.NumberFormat("vn-VN");
    document.getElementById('showInfoTotal').innerHTML = `Ông/bà:  ${hoTen} phải đóng ${current.format(thueSuat)} VND`;
}
