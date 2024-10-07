document.addEventListener('DOMContentLoaded', function() {
    // เรียกใช้ฟังก์ชันแสดงสไลด์อัตโนมัติเมื่อหน้าโหลดเสร็จ
    autoShowSlides();

    // ฟังก์ชันเปิดป๊อปอัพ
    const openPopupBtn = document.getElementById('openPopupBtn');
    const popup = document.getElementById('popup');
    openPopupBtn.addEventListener('click', function() {
        popup.style.display = 'block'; // แสดงป๊อปอัพเมื่อคลิก
    });

    // ฟังก์ชันปิดป๊อปอัพ
    const closePopupBtn = document.getElementById('closePopupBtn');
    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none'; // ซ่อนป๊อปอัพเมื่อคลิก
    });

    // ฟังก์ชันขยายและย่อโลโก้
    const logoContainer = document.getElementById('logoContainer');
    logoContainer.addEventListener('mouseenter', function() {
        const logo = document.getElementById('logo');
        logo.style.transform = 'scale(1.1)';
    });
    logoContainer.addEventListener('mouseleave', function() {
        const logo = document.getElementById('logo');
        logo.style.transform = 'scale(1)';
    });
});

// การจัดการสไลด์โชว์
let slideIndex = 1; // กำหนดค่าเริ่มต้นของ slideIndex
showSlides(slideIndex);

// ฟังก์ชันควบคุมการเปลี่ยนสไลด์ด้วยปุ่ม
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// ฟังก์ชันแสดงสไลด์
function showSlides(n) {
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) { slideIndex = 1 } // ถ้าเกินจำนวนสไลด์ ให้กลับไปสไลด์แรก
    if (n < 1) { slideIndex = slides.length } // ถ้าน้อยกว่า 1 ให้ไปสไลด์สุดท้าย
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // ซ่อนสไลด์ทั้งหมด
    }
    slides[slideIndex - 1].style.display = "block"; // แสดงสไลด์ที่กำลังเลือก
}

// ฟังก์ชันแสดงสไลด์อัตโนมัติ
function autoShowSlides() {
    let slides = document.getElementsByClassName("mySlides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // ซ่อนสไลด์ทั้งหมด
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 } // รีเซ็ตดัชนีเมื่อเกินจำนวนสไลด์
    slides[slideIndex - 1].style.display = "block"; // แสดงสไลด์ปัจจุบัน
    setTimeout(autoShowSlides, 5000); // เปลี่ยนสไลด์ทุก ๆ 5 วินาที
}
