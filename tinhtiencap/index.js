var loaiKhachHang = document.getElementById("loaiKh");
var soKetNoiElem  = document.getElementById("ketNoi");
var soKenhElem   = document.getElementById("soKenh");

document.getElementById("loaiKh").onchange = function(){
	if(loaiKhachHang.value == 'nha_dan') {
		soKetNoiElem.disabled = true;
		soKetNoiElem.value = '';

	}else if(loaiKhachHang.value == 'doanh_nghiep') {
		soKetNoiElem.disabled = false;

	}
}

document.getElementById("tinh").onclick = function(){

    var maKhachHang = document.getElementById("maKh").value;
	var soKenh      = soKenhElem.value * 1;
	var soKetNoi    = soKetNoiElem.value * 1;
    var tongTien = 0;
    var chenhLech = 0;
    var loai = '';
    var soKetNoiText = '';

    //validate
    if(maKhachHang == '') {
    	alert('Vui lòng nhập mã khách hàng');
    	return false;
    }

    if(loaiKhachHang.value == 'doanh_nghiep' && soKetNoiElem.value == '') {
    	alert('Vui lòng nhập số kết nối');
    	return false;
    }

    if(loaiKhachHang.value == 'doanh_nghiep' && soKetNoi == 0) {
    	alert('Vui lòng nhập số kết nối khác 0');
    	return false;
    }

    if(soKenhElem.value == '') {
    	alert('Vui lòng nhập số kênh ');
    	return false;
    }

    if(soKenh == 0) {
    	alert('Vui lòng nhập số kênh khác 0 ');
    	return false;
    }

	if(loaiKhachHang.value == "nha_dan") {

		var phiXuLyHoaDon     = 4.5;
		var phiDichVuCoBan    = 20.5;
		var phiThueKenhCaoCap = 7.5
		loai = 'Nhà Dân';

		tongTien = phiXuLyHoaDon + phiDichVuCoBan + (phiThueKenhCaoCap * soKenh);

	} else if(loaiKhachHang.value == "doanh_nghiep") {

		var phiXuLyHoaDon     = 15;
		var phiDichVuCoBan    = 75; //cho tổng 10 kết nối đầu, mỗi kết nối thêm 5/kết nối
		var phiThueKenhCaoCap = 50
		loai = 'Doanh Nghiệp';
		soKetNoiText = `Số kết nối: ${soKetNoi} </br>`;

		if(soKetNoi > 10) {
			chenhLech = soKetNoi - 10;
		}

		tongTien = phiXuLyHoaDon + phiDichVuCoBan + (phiThueKenhCaoCap * soKenh) + (chenhLech * 5);
	}
    var currentFormat = Intl.NumberFormat("vn-VN");

    document.getElementById('showInfoTotal').innerHTML = `
    	Mã khách hàng:  ${maKhachHang} </br>
    	Thuộc loại:     ${loai}</br>
    	Số kênh cao cấp: ${soKenh} </br>
    	${soKetNoiText}
    	Tổng số tiền phải thanh toán là: ${currentFormat.format (tongTien)}$
    `;
}