"use client"; 

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

// 1. Nhận thêm 'products' (nhớ gán mảng rỗng mặc định để không lỗi)
export default function Header({ searchQuery = "", setSearchQuery = () => {}, products = [] }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchRef = useRef(null);

  // 2. Logic lọc siêu thông minh: Ưu tiên sản phẩm "Bắt đầu bằng" chữ khóa lên top 1
  const query = (searchQuery || "").toLowerCase().trim();
  
  const suggestions = products
    .filter((p) => {
      if (!query) return false;
      const nameLower = p.name.toLowerCase();
      
      // Logic: Khớp nếu tên sản phẩm bắt đầu bằng query
      // HOẶC tên sản phẩm có chứa một từ đứng sau khoảng trắng bắt đầu bằng query
      return nameLower.startsWith(query) || nameLower.includes(` ${query}`);
    })
    .sort((a, b) => {
      // Ưu tiên những sản phẩm bắt đầu bằng từ khóa lên đầu bảng
      const aStarts = a.name.toLowerCase().startsWith(query);
      const bStarts = b.name.toLowerCase().startsWith(query);
      
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;
      return 0;
    })
    .slice(0, 4); // Chỉ hiển thị tối đa 4 kết quả

  // 3. Hiệu ứng xịn: Click ra ngoài thanh search là tự đóng bảng gợi ý
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={styles.header}>
      
      {/* KHỐI LOGO */}
      <div className={styles.logoContainer}>
        <Link href="/">
          <Image 
            src="/image/logo.svg" 
            alt="PhoneShopHCM Logo" 
            width={320} 
            height={80}  
            priority={true}
            style={{ objectFit: 'contain' }} 
          />
        </Link>
      </div>

      {/* KHỐI TÌM KIẾM THÔNG MINH */}
      <div className={styles.searchWrapper} ref={searchRef}>
        <div className={styles.searchBox}>
          <div className={styles.searchIcon}></div>
          <input 
            type="text" 
            placeholder="Tìm kiếm sản phẩm..." 
            value={searchQuery}
            onChange={(e) => {
              if (setSearchQuery) setSearchQuery(e.target.value);
              setShowSuggestions(true); // Gõ chữ là hiện bảng
            }} 
            onFocus={() => setShowSuggestions(true)} // Click vào là hiện bảng
          />
        </div>

       {/* BẢNG GỢI Ý DROP-DOWN */}
        {showSuggestions && searchQuery && (
          <div className={styles.suggestionsBox}>
            {suggestions.length > 0 ? (
              suggestions.map((p, index) => (
                <Link 
                  href={`/chitietsanpham/${p.id}`} 
                  key={p.id} 
                  className={styles.suggestionItem}
                  onClick={() => setShowSuggestions(false)}
                  style={{ '--i': index }} /* Truyền index vào CSS để làm hiệu ứng rơi từng cái */
                >
                  <div className={styles.suggestionImage}>
                    <Image src={p.image} width={45} height={45} alt={p.name} style={{ objectFit: 'contain' }} />
                  </div>
                  <div className={styles.suggestionInfo}>
                    <span className={styles.suggestionName}>{p.name}</span>
                    <span className={styles.suggestionPrice}>{p.price}</span>
                  </div>
                </Link>
              ))
            ) : (
              // Thêm phần này để xử lý khi gõ bậy bạ không ra kết quả
              <div className={styles.noResult}>
                Không tìm thấy kết quả cho {searchQuery}
              </div>
            )}
          </div>
        )}
      </div>

      {/* KHỐI MENU ĐIỀU HƯỚNG */}
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Trang chủ
            </Link>
          </li>
          <li>Sản phẩm</li>
          <li>Blog</li>
          <li>Liên hệ</li>
        </ul>
      </nav>
    </header>
  );
}