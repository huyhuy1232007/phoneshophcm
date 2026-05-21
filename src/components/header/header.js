"use client"; 

import Link from "next/link";
import styles from "./header.module.css";

export default function Header({ searchQuery, setSearchQuery }) {
  return (
    <header className={styles.header}>
      <div className={styles.searchBox}>
        <div className={styles.searchIcon}></div>
        <input 
          type="text" 
          placeholder="Tìm kiếm sản phẩm..." 
          value={searchQuery}
          onChange={(e) => setSearchQuery && setSearchQuery(e.target.value)} 
        />
      </div>

      <nav className={styles.nav}>
        <ul>
          {/* Chỉ bọc thẻ Link ở đây trỏ về "/" là xong =))) */}
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