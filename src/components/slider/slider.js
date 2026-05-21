"use client";
import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

// Nút Arrow Trái (Prev) mang phong cách tối giản tinh tế
// Nút Arrow Trái (Prev)
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      left: "-25px", /* <--- Đẩy xích ra ngoài khung ảnh 25px */
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10,
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      backgroundColor: "#ffffff",
      border: "1px solid rgba(0,0,0,0.06)", /* Thêm viền siêu mờ để tách biệt nền trắng */
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      color: "#1d1d1f",
    }}
    // ... giữ nguyên hiệu ứng hover ...
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#0071e3";
      e.currentTarget.style.color = "#ffffff";
      e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
      e.currentTarget.style.color = "#1d1d1f";
      e.currentTarget.style.transform = "translateY(-50%) scale(1)";
    }}
  >
    <span style={{ fontSize: "24px", fontWeight: "bold", lineHeight: 1 }}>‹</span>
  </button>
);

// Nút Arrow Phải (Next) mang phong cách tối giản tinh tế
// Nút Arrow Phải (Next)
const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      position: "absolute",
      right: "-25px", /* <--- Đẩy xích ra ngoài khung ảnh 25px */
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 10,
      width: "48px",
      height: "48px",
      borderRadius: "50%",
      backgroundColor: "#ffffff",
      border: "1px solid rgba(0,0,0,0.06)",
      boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      color: "#1d1d1f",
    }}
    // ... giữ nguyên hiệu ứng hover ...
    onMouseEnter={(e) => {
      e.currentTarget.style.backgroundColor = "#0071e3";
      e.currentTarget.style.color = "#ffffff";
      e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.85)";
      e.currentTarget.style.color = "#1d1d1f";
      e.currentTarget.style.transform = "translateY(-50%) scale(1)";
    }}
  >
    <span style={{ fontSize: "24px", fontWeight: "bold", lineHeight: 1 }}>›</span>
  </button>
);

export default function SimpleSlider({ images = [] }) {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxImg, setLightboxImg] = useState(null);

  const settings = {
    dots: images.length > 1,
    infinite: images.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: images.length > 1,
    autoplaySpeed: 5000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    beforeChange: (current, next) => setActiveIndex(next),
    appendDots: (dots) => (
      <div style={{ bottom: "10px" }}>
        <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  if (!images || images.length === 0) {
    return <div style={{ textAlign: "center", padding: "60px", color: "#86868b" }}>Đang tải hình ảnh...</div>;
  }

  const handleThumbnailClick = (index) => {
    setActiveIndex(index);
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* 1. KHUNG SLIDER CHÍNH - CHIỀU CAO ĐẨY LÊN 620PX, TRẮNG TUYỆT ĐỐI */}
      <div 
        style={{ 
          position: "relative", 
          background: "transparent", // Xóa phông nền riêng để hòa vào nền trắng tổng thể
          border: "none",            // Loại bỏ hoàn toàn viền nội khu
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {images.map((imgName, index) => (
            <div 
              key={index} 
              style={{ cursor: "zoom-in", outline: "none" }}
              onClick={() => setLightboxImg(imgName)}
            >
              {/* KHUNG CHỨA ẢNH PHÓNG TO HẾT CỠ */}
              <div style={{ width: "100%", height: "620px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image 
                  src={`/image/${imgName}`} 
                  alt={`Sản phẩm góc ${index + 1}`} 
                  width={700}  // Render luồng ảnh sắc nét hơn
                  height={620} 
                  style={{ maxWidth: "100%", maxHeight: "600px", objectFit: "contain", transition: "transform 0.4s ease" }}
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* 2. HÀNG ẢNH THU NHỎ (THUMBNAILS) */}
      {images.length > 1 && (
        <div 
          style={{ 
            display: "flex", 
            justifyContent: "center", 
            gap: "16px", 
            marginTop: "25px", 
            flexWrap: "wrap" 
          }}
        >
          {images.map((imgName, index) => {
            const isActive = activeIndex === index;
            return (
              <div
                key={index}
                onClick={() => handleThumbnailClick(index)}
                style={{
                  width: "85px", // Kích thước ảnh nhỏ to hơn, ngắm đã hơn
                  height: "85px",
                  borderRadius: "18px",
                  backgroundColor: "#ffffff",
                  border: isActive ? "2px solid #0071e3" : "1px solid rgba(0,0,0,0.04)",
                  boxShadow: isActive ? "0 6px 16px rgba(0, 113, 227, 0.18)" : "none",
                  overflow: "hidden",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  opacity: isActive ? 1 : 0.6,
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = 1; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.opacity = 0.6; }}
              >
                <Image 
                  src={`/image/${imgName}`} 
                  alt={`Thumbnail ${index + 1}`} 
                  width={75} 
                  height={75} 
                  style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }} 
                />
              </div>
            );
          })}
        </div>
      )}

      {/* 3. MODAL LIGHTBOX SOI ẢNH */}
      {lightboxImg && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.88)",
            backdropFilter: "blur(16px)",
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            animation: "fadeInModal 0.25s ease-out",
          }}
          onClick={() => setLightboxImg(null)}
        >
          <button 
            style={{
              position: "absolute",
              top: "30px",
              right: "40px",
              background: "rgba(255,255,255,0.12)",
              color: "#fff",
              border: "none",
              borderRadius: "50%",
              width: "54px",
              height: "54px",
              fontSize: "24px",
              cursor: "pointer",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "#e00000"}
            onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255,255,255,0.12)"}
          >
            ✕
          </button>
          <div 
            style={{ position: "relative", width: "90%", height: "90%", display: "flex", justifyContent: "center", alignItems: "center" }}
            onClick={(e) => e.stopPropagation()} 
          >
            <Image src={`/image/${lightboxImg}`} alt="Soi chi tiết" fill style={{ objectFit: "contain" }} />
          </div>
        </div>
      )}
    </div>
  );
}