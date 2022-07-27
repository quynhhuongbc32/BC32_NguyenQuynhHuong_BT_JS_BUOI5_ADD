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


    thuNhapChiuThue = tongThuNhap - 4 - soNguoi * 1.6;

    thueSuat = 0;
    if(thuNhapChiuThue <= 60) {
        thueSuat = 5;

    } else if(thuNhapChiuThue >= 61 && thuNhapChiuThue <= 120) {
        thueSuat = 10;

    } else if(thuNhapChiuThue >= 121 && thuNhapChiuThue <= 210) {
        thueSuat = 15;

    } else if(thuNhapChiuThue >= 211 && thuNhapChiuThue <= 384) {
        thueSuat = 20;

    } else if(thuNhapChiuThue >= 385 && thuNhapChiuThue <= 624) {
        thueSuat = 25;

    } else if(thuNhapChiuThue >= 625 && thuNhapChiuThue <= 960) {
        thueSuat = 30;

    } else if(thuNhapChiuThue > 960) {
        thueSuat = 35;
    }

    thuePhaiDong = thuNhapChiuThue * (thueSuat/100);
    if(thuePhaiDong <= 0) {
        thuePhaiDong = 0;
    }

    // Đầu ra
    document.getElementById('showInfoTotal').innerHTML = `Ông/bà ${hoTen} phải đóng ${thuePhaiDong} triệu đồng`;
}