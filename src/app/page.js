"use client"; 

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import styles from "./page.module.css";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("Tất cả");
  
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0, top: 0, height: 0 }); 
  const buttonRefs = useRef([]); 
  
  // TÍNH NĂNG MỚI: Ref dùng để đánh dấu vị trí khu vực Danh sách sản phẩm
  const gridRef = useRef(null);

  const products = [
    { id: 1, name: "iPhone 17 Pro Max", price: "34.990.000đ", remain: "Còn 10 sản phẩm", image: "/image/dt1.svg", tag: "New" },
    { id: 2, name: "iPhone 16 Pro Max", price: "29.990.000đ", remain: "Còn 5 sản phẩm", image: "/image/dt2.svg" },
    { id: 3, name: "iPhone 15 Pro Max", price: "24.990.000đ", remain: "Còn 8 sản phẩm", image: "/image/dt3.svg" },
    { id: 4, name: "iPhone 17e", price: "21.990.000đ", remain: "Còn 15 sản phẩm", image: "/image/dt4.svg", tag: "Hot" },
    { id: 5, name: "Samsung Galaxy S26 Ultra", price: "33.990.000đ", remain: "Còn 7 sản phẩm", image: "/image/dt5.svg", tag: "New" },
    { id: 6, name: "Samsung Galaxy S25 Ultra", price: "28.990.000đ", remain: "Còn 3 sản phẩm", image: "/image/dt6.svg" },
    { id: 7, name: "Samsung Galaxy S24 Ultra", price: "24.990.000đ", remain: "Còn 12 sản phẩm", image: "/image/dt7.svg" },
    { id: 8, name: "Samsung Galaxy S23 Ultra", price: "20.990.000đ", remain: "Còn 20 sản phẩm", image: "/image/dt8.svg" },
    { id: 9, name: "Xiaomi 17", price: "22.990.000đ", remain: "Còn 6 sản phẩm", image: "/image/dt9.svg", tag: "New" },
    { id: 10, name: "Xiaomi 16", price: "18.990.000đ", remain: "Còn 4 sản phẩm", image: "/image/dt10.svg" },
    { id: 11, name: "Xiaomi 13", price: "12.990.000đ", remain: "Còn 9 sản phẩm", image: "/image/dt11.svg" },
    { id: 12, name: "Xiaomi 12", price: "9.990.000đ", remain: "Hết hàng", image: "/image/dt12.svg" },
  ];

  const categories = ["Tất cả", "iPhone", "Samsung", "Xiaomi"];

  // THUẬT TOÁN LỌC THÔNG MINH (Đồng bộ với Header)
  // THUẬT TOÁN LỌC TỐI THƯỢNG: Chỉ khớp chữ cái bắt đầu của một từ
  const filteredProducts = products
    .filter((p) => {
      const matchCategory = activeCategory === "Tất cả" || p.name.toLowerCase().includes(activeCategory.toLowerCase());
      
      const query = searchQuery.toLowerCase().trim();
      // Bí kíp: Tên sp phải BẮT ĐẦU bằng từ khóa, HOẶC có KHOẢNG TRẮNG + TỪ KHÓA (tức là chữ cái đầu của từ tiếp theo)
      const matchSearch = query === "" || 
                          p.name.toLowerCase().startsWith(query) || 
                          p.name.toLowerCase().includes(` ${query}`);
                          
      return matchCategory && matchSearch;
    })
    // Giữ nguyên phần sắp xếp (để lỡ có trùng thì ưu tiên thằng đứng đầu lên trên)
    .sort((a, b) => {
      if (!searchQuery) return 0;
      const query = searchQuery.toLowerCase().trim();
      const aStarts = a.name.toLowerCase().startsWith(query);
      const bStarts = b.name.toLowerCase().startsWith(query);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return 0;
    });

  // Tự động kéo nền xanh (pill) cho thanh Phân loại
  useEffect(() => {
    const activeIndex = categories.indexOf(activeCategory);
    const activeBtn = buttonRefs.current[activeIndex];
    if (activeBtn) {
      setPillStyle({
        left: activeBtn.offsetLeft,
        top: activeBtn.offsetTop,
        width: activeBtn.offsetWidth,
        height: activeBtn.offsetHeight,
      });
    }
  }, [activeCategory]);

  // Hiệu ứng cuộn Reveal khi kéo trang
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.active);
          }
        });
      },
      { threshold: 0.1 } 
    );
    const items = document.querySelectorAll(`.${styles.reveal}`);
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, [activeCategory, searchQuery]);

  // TÍNH NĂNG MỚI: Tự động cuộn nhẹ xuống danh sách khi bắt đầu gõ tìm kiếm
  useEffect(() => {
    // Chỉ cuộn ở ký tự đầu tiên được gõ để không bị giật màn hình nếu khách gõ dài
    if (searchQuery.length === 1 && gridRef.current) {
      const y = gridRef.current.getBoundingClientRect().top + window.scrollY - 120; // Trừ hao khoảng trống của Header
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  }, [searchQuery]);

  return (
    <div className={styles.container}>
      {/* Truyền products lên Header để gợi ý */}
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} products={products} />
      
      <section className={`${styles.heroSection} ${styles.reveal}`}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Sản phẩm mới nhất</span>
          <h1 className={styles.heroTitle}>iPhone 17 Pro Max</h1>
          <p className={styles.heroSubtitle}>Trải nghiệm sức mạnh của tương lai với chip A19 Pro 2nm.</p>
          <div className={styles.heroActions}>
            <button className={styles.heroBtnPrimary}>Mua ngay</button>
            <button className={styles.heroBtnSecondary}>Tìm hiểu thêm ›</button>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src="/image/dt1.svg" width={450} height={450} alt="Hero" />
        </div>
      </section>

      <div className={`${styles.categoryBarWrapper} ${styles.reveal}`}>
        <div className={styles.categoryBar}>
          <div 
            className={styles.activePill} 
            style={{ 
              left: `${pillStyle.left}px`, top: `${pillStyle.top}px`, 
              width: `${pillStyle.width}px`, height: `${pillStyle.height}px` 
            }} 
          />
          {categories.map((cat, index) => (
            <button 
              key={cat}
              ref={(el) => (buttonRefs.current[index] = el)} 
              className={`${styles.categoryItem} ${activeCategory === cat ? styles.activeText : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Gắn gridRef vào khối này để làm tọa độ cuộn tự động */}
      <div className={styles.item1} ref={gridRef}>
        <div className={styles.mainContent}>
          <h2 className={styles.sectionHeading}>Sản phẩm nổi bật</h2>
          <div className={styles.productGrid}>
            
            {filteredProducts.length > 0 ? (
              filteredProducts.map((p, index) => (
                <div 
                  key={p.id} 
                  className={`${styles.product} ${styles.reveal}`}
                  style={{ "--delay": index % 4 }} 
                >
                  {p.tag && <span className={styles.badge}>{p.tag}</span>}
                  <Link href={`/chitietsanpham/${p.id}`}>
                    <div className={styles.productImage}>
                      <Image src={p.image} width={200} height={200} alt={p.name} />
                    </div>
                    <div className={styles.productInfo}>
                      <h3 className={styles.productName}>{p.name}</h3>
                      <div className={styles.productPrice}>{p.price}</div>
                      <div className={styles.productRemain}>{p.remain}</div>
                    </div>
                  </Link>
                  <div className={styles.actionButtons}>
                    <Link href={`/chitietsanpham/${p.id}`} style={{ flex: 1 }}>
                      <button className={styles.buyBtn} style={{ width: "100%" }}>Xem chi tiết</button>
                    </Link>
                    <button className={styles.cartBtn}>+ Giỏ hàng</button>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center", width: "100%", color: "#666", gridColumn: "1/-1", padding: "40px 0" }}>
                Không tìm thấy sản phẩm nào phù hợp!
              </p>
            )}

          </div>
        </div>
        
        <aside className={`${styles.item2} ${styles.reveal}`}>
          <div className={styles.sidebarBox}>
            <h4>🔥 Khuyến mãi Hot</h4>
            <p>Giảm thêm 500k cho học sinh sinh viên tại Quận 12 khi mua kèm phụ kiện.</p>
          </div>
          <div className={styles.sidebarBox}>
            <h4>🔄 Thu cũ đổi mới</h4>
            <p>Trợ giá đến 2.000.000đ khi lên đời iPhone mới. Thủ tục nhanh gọn.</p>
          </div>
          <div className={styles.sidebarBox}>
            <h4>🚚 Giao hàng 2H</h4>
            <p>Miễn phí giao hàng nội thành TP.HCM trong 2h cho đơn hàng từ 10 triệu.</p>
          </div>
          <div className={styles.sidebarBox}>
            <h4>🛡️ Bảo hành VIP</h4>
            <p>Lỗi 1 đổi 1 trong 30 ngày. Bảo hành chính hãng 12 tháng tại hệ thống.</p>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
} 