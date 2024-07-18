// map.js

// Lấy ra thẻ ảnh overlay
var overlayImage = document.getElementById('overlay-image');

// Lấy ra slider để điều khiển độ mờ
var opacitySlider = document.getElementById('opacity-slider');

// Sự kiện thay đổi giá trị của slider
opacitySlider.addEventListener('input', function() {
    var opacityValue = this.value / 100; // Chuyển giá trị slider thành phần trăm độ mờ (từ 0 đến 1)
    overlayImage.style.opacity = opacityValue;
});

// Ẩn ảnh khi bắt đầu
overlayImage.style.opacity = 0;