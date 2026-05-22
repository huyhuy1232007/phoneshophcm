"use client"; 

import styles from "./footer.module.css";

export default function Footer() {
  // BẮT BUỘC PHẢI CÓ RETURN VÀ DẤU NGOẶC ĐƠN Ở ĐÂY
  return (
    <footer className={styles.footer}>
        <div className={styles.footerGrid}>
          {/* Cột 1 */}
          <div className={styles.footerColumn}>
            <h3>Khám phá</h3>
            <ul>
              <li>Điện thoại</li>
              <li>Máy tính bảng</li>
              <li>Phụ kiện</li>
              <li>Khuyến mãi</li>
            </ul>
          </div>

          {/* Cột 2 */}
          <div className={styles.footerColumn}>
            <h3>Hỗ trợ</h3>
            <ul>
              <li>Trung tâm trợ giúp</li>
              <li>Kiểm tra đơn hàng</li>
              <li>Chính sách giao hàng</li>
              <li>Hướng dẫn thanh toán</li>
            </ul>
          </div>

          {/* Cột 3 */}
          <div className={styles.footerColumn}>
            <h3>Trường TC Kinh tế - Kỹ thuật Quận 12</h3>
            <ul className={styles.contactList}>
              <li><strong>CS1:</strong> 592 Nguyễn Ảnh Thủ, P. Trung Mỹ Tây, Quận 12, TP.HCM</li>
              <li><strong>CS2:</strong> 36 Nguyễn Văn Vân, P. Hiệp Thành, Quận 12, TP.HCM</li>
              <li><strong>Điện thoại:</strong> (058) 979.46.53</li>
              <li><strong>Email:</strong> tuyensinh@dttec.edu.vn</li>
            </ul>
          </div>

          {/* Cột 4: Form Đăng ký */}
          <div className={styles.footerColumn}>
            <h3>Nhận thông tin ưu đãi</h3>
            <p className={styles.footerDesc}>
              Đăng ký email để không bỏ lỡ những chương trình khuyến mãi và sản phẩm mới nhất.
            </p>
            <div className={styles.subscribeBox}>
              <input type="email" placeholder="Nhập email của bạn..." />
              <button>Đăng ký</button>
            </div>
          </div>
        </div>

        {/* Phần bản quyền & Pháp lý bên dưới */}
        <div className={styles.footerBottom}>
          <div className={styles.copyright}>
            Bản quyền © 2026 Trần Gia Huy - WEB12B1
          </div>
          <div className={styles.legalLinks}>
            <span>Chính sách quyền riêng tư</span>
            <span className={styles.separator}>|</span>
            <span>Điều khoản sử dụng</span>
            <span className={styles.separator}>|</span>
            <span>Pháp lý</span>
          </div>
          <div className={styles.region}>
            Việt Nam
          </div>
        </div>
      </footer>
  );
}