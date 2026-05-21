"use client";

import React from "react";
import { useParams } from "next/navigation";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import SimpleSlider from "@/components/slider/slider";

import styles from "../../detail.module.css"; 

const products = [
  { 
    id: 1, 
    name: "iPhone 17 Pro Max", 
    image: "/image/dt1.svg", 
    detailImages: ["dt1.svg", "dt1-1.svg", "dt1-2.svg", "dt1-3.svg", "dt1-4.svg"],
    price: "34.990.000đ", 
    oldPrice: "37.500.000đ",
    specs: [
      { label: "Màn hình", value: "6.9 inch, LTPO Super Retina XDR OLED, 120Hz, 3200 nits" },
      { label: "Chip xử lý", value: "Apple A19 Pro (Tiến trình 2nm thế hệ mới)" },
      { label: "RAM/Bộ nhớ", value: "12GB LPDDR5X / 256GB NVMe siêu tốc" },
      { label: "Camera sau", value: "Chính 48MP, Siêu rộng 48MP, Tele 5x 48MP (Chụp đêm 2.0)" },
      { label: "Pin & Sạc", value: "4.852 mAh, Sạc nhanh 45W, MagSafe chuẩn Qi2" },
      { label: "Kết nối", value: "Wi-Fi 7, Bluetooth 5.4, Băng tần siêu rộng U3" },
      { label: "Thiết kế", value: "Titanium cấp độ 5, Mặt kính Ceramic Shield 2026" },
      { label: "Ưu đãi", value: "Giảm trực tiếp 500k cho sinh viên khu vực Quận 12" },
    ],
    description: `
      <div class="${styles.descContent}">
        <h3 style="text-align: center; color: #0071e3; font-size: 2.2rem; margin-bottom: 25px; font-weight: 700;">
          iPhone 17 Pro Max: Định Nghĩa Lại Trải Nghiệm Di Động 2026
        </h3>

        <p>Chào mừng bạn đến với kỷ nguyên của Apple Intelligence toàn diện. <b>iPhone 17 Pro Max</b> không chỉ là một chiếc điện thoại, mà là một siêu máy tính bỏ túi với vật liệu Titanium bền bỉ và sức mạnh xử lý vượt qua mọi giới hạn trước đây.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">1. Chip A19 Pro - Đỉnh cao tiến trình 2nm</h4>
        <p>Lần đầu tiên trên thế giới, vi xử lý <b>A19 Pro</b> được xây dựng trên tiến trình 2nm cực kỳ tối ưu. Với kiến trúc GPU mới, máy hỗ trợ <b>Ray Tracing</b> phần cứng nhanh hơn gấp 2 lần, biến iPhone 17 Pro Max thành một cỗ máy chơi game thực thụ cho các game thủ tại Quận 12 chiến mượt <i>Genshin Impact</i> ở thiết lập cao nhất mà không bị nóng máy.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">2. Hệ thống Camera Pro 48MP Toàn Phần</h4>
        <p>Apple đã nâng cấp toàn diện cả 3 ống kính sau lên độ phân giải <b>48MP</b>. Điều này cho phép bạn chụp ảnh RAW với chi tiết cực cao ở mọi tiêu cự. Đặc biệt, camera Telephoto 5x thế hệ mới giúp bắt trọn những khoảnh khắc ở xa với độ trong trẻo kinh ngạc, kể cả trong điều kiện thiếu sáng nhờ cảm biến lớn hơn 30%.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">3. Màn hình 6.9 inch lớn nhất từ trước đến nay</h4>
        <p>Trải nghiệm thị giác được nâng lên tầm cao mới với màn hình 6.9 inch cùng viền siêu mỏng. Công nghệ <b>Super Retina XDR</b> mới đạt độ sáng tối đa 3200 nits, giúp bạn dễ dàng xem bản đồ hay làm việc ngoài trời nắng gắt tại TP.HCM mà không bị chói.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">4. Apple Intelligence & iOS 19</h4>
        <p>Tận hưởng sự thông minh từ trợ lý ảo Siri mới, có khả năng thực hiện hàng loạt hành động phức tạp bên trong các ứng dụng. Khả năng tóm tắt văn bản, dịch thuật trực tiếp và bảo mật dữ liệu cá nhân tối đa nhờ hệ thống Secure Enclave thế hệ mới.</p>

        <div class="${styles.quoteBox}" style="margin-top: 45px; padding: 25px; border-left: 6px solid #0071e3; background: #f8f8f9; border-radius: 8px;">
          <p style="margin-bottom: 10px; font-weight: 600; color: #0071e3;">Tại sao nên chọn mua iPhone 17 Pro Max tại Luxury Phone?</p>
          <p style="margin-bottom: 0; font-style: italic;">"Chúng tôi cam kết mang đến những sản phẩm công nghệ hàng đầu với chính sách bảo hành 1 đổi 1 và nhiều ưu đãi đặc quyền cho sinh viên trường TC Kinh tế - Kỹ thuật Quận 12. iPhone 17 Pro Max chính là biểu tượng của sự đẳng cấp và tương lai mà bạn xứng đáng sở hữu".</p>
        </div>
      </div>
    `
  },
  { 
    id: 2, 
    name: "iPhone 16 Pro Max", 
    price: "29.990.000đ", 
    oldPrice: "32.500.000đ",
    detailImages: ["dt2.svg"],
    image: "/image/dt2.svg", 
    specs: [
      { label: "Màn hình", value: "6.9 inch, LTPO Super Retina XDR OLED, 120Hz" },
      { label: "Chip xử lý", value: "Apple A18 Pro (Tiến trình 3nm thế hệ thứ 2)" },
      { label: "RAM/Bộ nhớ", value: "8GB LPDDR5X / 256GB NVMe" },
      { label: "Camera sau", value: "Chính 48MP, Ultra Wide 48MP, Tele 5x 12MP" },
      { label: "Pin & Sạc", value: "4.676 mAh, Sạc nhanh 30W, MagSafe 25W" },
      { label: "Tính năng", value: "Nút Camera Control cảm ứng lực chuyên dụng" },
      { label: "Thiết kế", value: "Titanium chuẩn hàng không, Mặt lưng nhám" },
      { label: "Ưu đãi", value: "Tặng gói bảo hành rơi vỡ tại chi nhánh Quận 12" },
    ],
    description: `
      <div class="${styles.descContent}">
        <h3 style="text-align: center; color: #0071e3; font-size: 2.2rem; margin-bottom: 25px; font-weight: 700;">
          iPhone 16 Pro Max: Sức Mạnh Đỉnh Cao, Trải Nghiệm Hoàn Hảo
        </h3>

        <p>Mặc dù đã ra mắt được một năm, <b>iPhone 16 Pro Max</b> vẫn là một "con quái vật" hiệu năng đầy bản lĩnh trong năm 2026. Đây là dòng máy tiên phong cho ngôn ngữ thiết kế viền siêu mỏng và nút điều khiển camera chuyên biệt, mang lại trải nghiệm sử dụng cực kỳ cao cấp với mức giá dễ tiếp cận hơn so với thế hệ mới nhất.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">1. Nút Camera Control - Cách tân trong nhiếp ảnh</h4>
        <p>Điểm đáng giá nhất trên iPhone 16 Pro Max chính là nút <b>Camera Control</b> nằm ở cạnh phải. Với bề mặt sapphire tích hợp cảm biến lực và cảm ứng, bạn có thể dễ dàng thay đổi khẩu độ, độ phơi sáng hay thực hiện zoom mượt mà chỉ bằng thao tác vuốt nhẹ. Đây là công cụ đắc lực cho các bạn sinh viên yêu thích sáng tạo nội dung video tại TP.HCM.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">2. Chip A18 Pro và Hệ thống tản nhiệt mới</h4>
        <p>Sở hữu vi xử lý <b>A18 Pro</b>, máy vẫn đảm bảo hiệu năng xử lý các tác vụ Apple Intelligence một cách nhanh chóng. Apple đã nâng cấp cấu trúc tản nhiệt bằng vật liệu nhôm tái chế kết hợp cùng lớp vỏ Titanium, giúp giảm tình trạng quá nhiệt khi chơi game liên tục hoặc quay phim 4K trong thời gian dài.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">3. Màn hình ProMotion lớn hơn, mỏng hơn</h4>
        <p>Kích thước màn hình được nâng lên 6.9 inch nhờ công nghệ giảm kích thước viền màn hình tối đa. Tần số quét 120Hz linh hoạt kết hợp với iOS mang lại sự mượt mà tuyệt đối trong từng thao tác vuốt chạm. Độ sáng 2000 nits giúp việc hiển thị dưới ánh nắng gắt tại khu vực Quận 12 luôn rõ nét và chân thực.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">4. Thời lượng pin dẫn đầu phân khúc</h4>
        <p>Nhờ sự tối ưu của chip A18 Pro và dung lượng pin lớn, iPhone 16 Pro Max mang lại thời gian xem video liên tục lên đến hơn 30 giờ. Chuẩn sạc MagSafe 25W mới giúp rút ngắn thời gian nạp năng lượng, đảm bảo thiết bị luôn sẵn sàng cùng bạn trong mọi hành trình học tập và làm việc.</p>

        <div class="${styles.quoteBox}" style="margin-top: 45px; padding: 25px; border-left: 6px solid #0071e3; background: #f8f8f9; border-radius: 8px;">
          <p style="margin-bottom: 10px; font-weight: 600; color: #0071e3;">Sở hữu iPhone 16 Pro Max tại Luxury Phone</p>
          <p style="margin-bottom: 0; font-style: italic;">"Nếu bạn đang tìm kiếm một sự cân bằng hoàn hảo giữa hiệu năng, thời lượng pin và giá thành, iPhone 16 Pro Max chính là câu trả lời. Sản phẩm đang có sẵn tại hệ thống với nhiều chương trình trả góp 0% hấp dẫn cho khách hàng tại District 12."</p>
        </div>
      </div>
    `
  },
  { 
    id: 3, 
    name: "iPhone 15 Pro Max", 
    price: "24.990.000đ", 
    oldPrice: "27.500.000đ",
    detailImages: ["dt3.svg"],
    image: "/image/dt3.svg", 
    specs: [
      { label: "Màn hình", value: "6.7 inch, LTPO Super Retina XDR OLED, 120Hz" },
      { label: "Chip xử lý", value: "Apple A17 Pro (Tiến trình 3nm đầu tiên)" },
      { label: "RAM/Bộ nhớ", value: "8GB LPDDR5 / 256GB NVMe" },
      { label: "Camera sau", value: "Chính 48MP, Ultra Wide 12MP, Tele 5x 12MP" },
      { label: "Pin & Sạc", value: "4.441 mAh, Sạc nhanh PD, Cổng USB-C 3 (10Gbps)" },
      { label: "Cổng kết nối", value: "USB-C thay thế hoàn toàn Lightning" },
      { label: "Thiết kế", value: "Khung Titanium cấp độ 5, Nút Action mới" },
      { label: "Ưu đãi", value: "Hỗ trợ thu cũ đổi mới giá cao tại Quận 12" },
    ],
    description: `
      <div class="${styles.descContent}">
        <h3 style="text-align: center; color: #0071e3; font-size: 2.2rem; margin-bottom: 25px; font-weight: 700;">
          iPhone 15 Pro Max: Bước Ngoặt Công Nghệ Với Khung Titan
        </h3>

        <p>Dù đã bước sang năm 2026, <b>iPhone 15 Pro Max</b> vẫn là một trong những chiếc điện thoại đáng sở hữu nhất nhờ sự bền bỉ của khung vỏ Titanium và sự tiện lợi của cổng sạc USB-C. Đây là mẫu máy đánh dấu kỷ nguyên mới của Apple trong việc tối ưu hóa trọng lượng và hiệu năng chuyên nghiệp.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">1. Titanium - Sự kết hợp hoàn hảo giữa nhẹ và bền</h4>
        <p>iPhone 15 Pro Max sử dụng hợp hợp kim <b>Titanium cấp độ 5</b>, cùng loại vật liệu dùng trong ngành hàng không vũ trụ. Điều này giúp giảm đáng kể trọng lượng so với thép không gỉ của các thế hệ trước, mang lại cảm giác cầm nắm nhẹ nhàng hơn hẳn nhưng vẫn cực kỳ cứng cáp. Bề mặt phay xước tinh tế giúp hạn chế tối đa dấu vân tay và trầy xước trong quá trình sử dụng hàng ngày.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">2. Camera Tetraprism - Phá vỡ giới hạn khoảng cách</h4>
        <p>Lần đầu tiên trên iPhone, hệ thống camera <b>Zoom quang học 5x</b> (tiêu cự 120mm) xuất hiện, cho phép bạn chụp những bức ảnh cận cảnh từ xa với độ nét vượt trội. Kết hợp với cảm biến chính 48MP hỗ trợ độ phân giải mặc định 24MP, mọi bức ảnh của bạn sẽ có sự cân bằng hoàn hảo giữa dung lượng và chi tiết, rất phù hợp cho các bạn trẻ check-in tại các địa điểm nổi tiếng ở TP.HCM.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">3. Chip A17 Pro - Kỷ nguyên game AAA di động</h4>
        <p>Sở hữu vi xử lý <b>A17 Pro</b> mạnh mẽ, iPhone 15 Pro Max là thiết bị tiên phong hỗ trợ công nghệ <b>Ray Tracing</b> bằng phần cứng. Điều này cho phép máy chạy mượt mà các tựa game đồ họa nặng vốn chỉ có trên Console. Hiệu năng này vẫn dư sức đáp ứng tốt mọi ứng dụng và tác vụ đa nhiệm cho đến tận năm 2026 mà không hề có dấu hiệu giật lag.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">4. Cổng USB-C 3 siêu tốc</h4>
        <p>Việc chuyển sang cổng <b>USB-C</b> không chỉ giúp bạn dùng chung sạc với MacBook, iPad mà còn cho phép tốc độ truyền dữ liệu lên đến 10Gbps. Bạn có thể kết nối trực tiếp với ổ cứng ngoài để ghi video ProRes hoặc xuất hình ảnh ra màn hình lớn một cách nhanh chóng, cực kỳ hữu ích cho công việc học tập chuyên ngành IT tại District 12.</p>

        <div class="${styles.quoteBox}" style="margin-top: 45px; padding: 25px; border-left: 6px solid #0071e3; background: #f8f8f9; border-radius: 8px;">
          <p style="margin-bottom: 10px; font-weight: 600; color: #0071e3;">Giá trị bền vững theo thời gian</p>
          <p style="margin-bottom: 0; font-style: italic;">"iPhone 15 Pro Max chính là lựa chọn 'vàng' cho những ai cần một chiếc máy đẳng cấp, khung vỏ Titan sang trọng và hiệu năng ổn định lâu dài. Tại Luxury Phone Quận 12, chúng tôi luôn có mức giá ưu đãi nhất cho dòng sản phẩm huyền thoại này."</p>
        </div>
      </div>
    `
  },
  { 
    id: 4, 
    name: "iPhone 17e", 
    price: "21.990.000đ", 
    oldPrice: "24.500.000đ",
    detailImages: ["dt4.svg"],
    image: "/image/dt4.svg", 
    specs: [
      { label: "Màn hình", value: "6.1 inch, OLED Super Retina XDR, 60Hz" },
      { label: "Chip xử lý", value: "Apple A18 Bionic (Tiến trình 3nm)" },
      { label: "RAM/Bộ nhớ", value: "8GB LPDDR5 / 128GB NVMe" },
      { label: "Camera sau", value: "48MP Fusion Camera, hỗ trợ chụp chân dung thế hệ mới" },
      { label: "Pin & Sạc", value: "3.274 mAh, Sạc nhanh 20W, MagSafe" },
      { label: "Kết nối", value: "5G siêu tốc, Wi-Fi 6E, Bluetooth 5.3" },
      { label: "Thiết kế", value: "Nhôm tái chế 100%, Hai mặt kính cường lực" },
      { label: "Ưu đãi", value: "Thu cũ đổi mới trợ giá 1 triệu đồng tại Quận 12" },
    ],
    description: `
      <div class="${styles.descContent}">
        <h3 style="text-align: center; color: #0071e3; font-size: 2.2rem; margin-bottom: 25px; font-weight: 700;">
          iPhone 17e: Hiệu Năng Đỉnh Cao Trong Thân Hình Nhỏ Gọn
        </h3>

        <p>Chào đón sự trở lại của dòng máy nhỏ gọn đầy quyền năng. <b>iPhone 17e</b> là sự kết hợp hoàn hảo giữa thiết kế trẻ trung và sức mạnh công nghệ từ tương lai. Đây là lựa chọn tối ưu cho những ai yêu thích sự gọn nhẹ nhưng không muốn thỏa hiệp về hiệu năng xử lý.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">1. Apple Intelligence cho tất cả mọi người</h4>
        <p>Dù là dòng máy tiếp cận, iPhone 17e vẫn được trang bị chip <b>A18 Bionic</b> cùng bộ nhớ RAM 8GB. Điều này đảm bảo máy có đủ tài nguyên để vận hành mượt mà các tính năng <b>Apple Intelligence</b> như: tóm tắt văn bản thông minh, chỉnh sửa ảnh bằng AI và Siri thế hệ mới. Đây là một điểm cộng cực lớn cho các bạn sinh viên tại Quận 12 cần một trợ lý học tập hiệu quả.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">2. Camera Fusion 48MP sắc nét</h4>
        <p>Hệ thống camera đơn nhưng "có võ". Với độ phân giải <b>48MP</b>, iPhone 17e hỗ trợ khả năng gộp điểm ảnh để cho ra những bức ảnh thiếu sáng tuyệt vời. Đặc biệt, máy tích hợp chế độ <b>Chân dung thế hệ mới</b> cho phép bạn điều chỉnh tiêu điểm sau khi chụp, giúp những bức ảnh check-in trở nên chuyên nghiệp hơn bao giờ hết.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">3. Màn hình OLED tràn viền hiện đại</h4>
        <p>Loại bỏ hoàn toàn phím Home cũ kỹ, iPhone 17e sở hữu màn hình <b>OLED Super Retina XDR</b> tràn cạnh. Trải nghiệm xem phim, lướt mạng xã hội hay giải trí đều trở nên sống động với độ tương phản tuyệt đối và màu sắc rực rỡ, chuẩn xác đặc trưng của Apple.</p>

        <h4 style="color: #1d1d1f; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">4. Thiết kế bền bỉ và bảo vệ môi trường</h4>
        <p>Máy được hoàn thiện từ khung nhôm tái chế 100% cùng mặt kính cường lực cứng cáp. Với nhiều lựa chọn màu sắc trẻ trung như Xanh Dương, Hồng và Xanh Lá, iPhone 17e không chỉ là một thiết bị công nghệ mà còn là món phụ kiện thời trang thể hiện cá tính riêng của bạn.</p>

        <div class="${styles.quoteBox}" style="margin-top: 45px; padding: 25px; border-left: 6px solid #0071e3; background: #f8f8f9; border-radius: 8px;">
          <p style="margin-bottom: 10px; font-weight: 600; color: #0071e3;">Sự lựa chọn thông minh cho thế hệ mới</p>
          <p style="margin-bottom: 0; font-style: italic;">"Nhỏ gọn, mạnh mẽ và giá cả cực kỳ phải chăng, iPhone 17e là minh chứng cho việc bạn có thể sở hữu công nghệ Apple mới nhất mà không cần lo lắng về ngân sách. Đến ngay Luxury Phone để trải nghiệm sản phẩm thực tế!"</p>
        </div>
      </div>
    `
  },
  { 
    id: 5, 
    name: "Samsung Galaxy S26 Ultra", 
    price: "33.990.000đ", 
    oldPrice: "36.500.000đ",
    detailImages: ["dt5.svg"],
    image: "/image/dt5.svg", 
    specs: [
      { label: "Màn hình", value: "6.9 inch, Dynamic AMOLED 2X, 144Hz, 3500 nits" },
      { label: "Chip xử lý", value: "Snapdragon 8 Gen 5 for Galaxy (Tiến trình 2nm)" },
      { label: "RAM/Bộ nhớ", value: "16GB LPDDR6 / 512GB UFS 4.1" },
      { label: "Camera sau", value: "200MP (Chính), 50MP (Siêu rộng), Zoom quang 10x" },
      { label: "Pin & Sạc", value: "5.500 mAh, Sạc nhanh 65W, Sạc ngược không dây" },
      { label: "Bút S-Pen", value: "Độ trễ 1.8ms, tích hợp điều khiển từ xa AI" },
      { label: "Vật liệu", value: "Khung Titan cấp độ 6, Kính Gorilla Armor 2" },
      { label: "Ưu đãi", value: "Tặng Galaxy Buds 3 Pro cho khách hàng tại Quận 12" },
    ],
    description: `
      <div class="${styles.descContent}">
        <h3 style="text-align: center; color: #034ea2; font-size: 2.2rem; margin-bottom: 25px; font-weight: 700;">
          Samsung Galaxy S26 Ultra: Quyền Năng Galaxy AI Thế Hệ Mới
        </h3>

        <p>Bước vào năm 2026, <b>Samsung Galaxy S26 Ultra</b> tiếp tục khẳng định vị thế "ông vua" Android. Đây là sự giao thoa hoàn hảo giữa sức mạnh phần cứng tối thượng và trí tuệ nhân tạo Galaxy AI đã được nâng cấp lên một tầm cao mới, giúp mọi tác vụ từ công việc đến sáng tạo trở nên đơn giản hơn bao giờ hết.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">1. Chip Snapdragon 8 Gen 5 - Hiệu năng dẫn đầu kỷ nguyên 2nm</h4>
        <p>Sức mạnh của S26 Ultra đến từ vi xử lý <b>Snapdragon 8 Gen 5</b> được tối ưu riêng cho dòng Galaxy. Với kiến trúc NPU mới, các tác vụ AI như dịch thuật trực tiếp cuộc gọi, khoanh vùng tìm kiếm thông minh hay xử lý video xóa vật thể được thực hiện ngay tức thì mà không cần kết nối Internet. Đây là công cụ đắc lực cho các bạn sinh viên IT tại Quận 12 cần một thiết bị có khả năng xử lý đa nhiệm cực đại.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">2. Hệ thống Camera 200MP và Mắt thần bóng đêm 3.0</h4>
        <p>Cảm biến chính <b>200MP</b> thế hệ mới kết hợp cùng thuật toán AI ProVisual giúp tái tạo chi tiết và màu sắc chuẩn xác trong mọi điều kiện ánh sáng. Khả năng <b>Zoom quang học 10x</b> và Zoom kỹ thuật số 100x vẫn là "đặc sản", giúp bạn bắt trọn những khoảnh khắc từ rất xa với độ nhiễu hạt gần như bằng không. Chế độ quay phim 8K 60fps giờ đây mượt mà hơn nhờ hệ thống chống rung OIS biên độ lớn.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">3. Màn hình phẳng chống chói toàn diện</h4>
        <p>Samsung trang bị lớp kính <b>Gorilla Armor 2</b> không chỉ bền hơn mà còn giảm phản xạ ánh sáng đến 80%. Độ sáng kỷ lục 3500 nits giúp màn hình Dynamic AMOLED 2X hiển thị rực rỡ ngay cả dưới nắng gắt buổi trưa tại TP.HCM. Tần số quét 144Hz mang lại trải nghiệm vuốt chạm và chơi game mượt mà như trên các dòng màn hình chuyên dụng.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">4. Bút S-Pen: Trợ lý năng suất đa tài</h4>
        <p>Chiếc bút <b>S-Pen</b> huyền thoại giờ đây có độ trễ cực thấp, chỉ 1.8ms, mang lại cảm giác viết vẽ như trên giấy thật. Với tính năng AI Sketch to Image, bạn chỉ cần phác thảo ý tưởng đơn giản, Galaxy AI sẽ tự động biến nó thành một tác phẩm nghệ thuật hoàn chỉnh. Rất phù hợp cho việc ghi chú bài giảng hay phác thảo thiết kế web nhanh chóng.</p>

        <div class="${styles.quoteBox}" style="margin-top: 45px; padding: 25px; border-left: 6px solid #034ea2; background: #f0f4f9; border-radius: 8px;">
          <p style="margin-bottom: 10px; font-weight: 600; color: #034ea2;">Sắm Galaxy S26 Ultra - Nhận đặc quyền Luxury</p>
          <p style="margin-bottom: 0; font-style: italic;">"Galaxy S26 Ultra không chỉ là một chiếc smartphone, đó là tuyên ngôn của sự đột phá. Tại Luxury Phone Quận 12, chúng tôi mang đến chương trình trả góp 0% và thu cũ đổi mới giúp bạn dễ dàng chạm tay vào công nghệ đỉnh cao nhất thế giới."</p>
        </div>
      </div>
    `
  },
  { 
    id: 6, 
    name: "Samsung Galaxy S25 Ultra", 
    price: "28.990.000đ", 
    oldPrice: "31.500.000đ",
    detailImages: ["dt6.svg"],
    image: "/image/dt6.svg", 
    specs: [
      { label: "Màn hình", value: "6.86 inch, Dynamic LTPO AMOLED 2X, 120Hz" },
      { label: "Chip xử lý", value: "Snapdragon 8 Gen 4 for Galaxy (3nm)" },
      { label: "RAM/Bộ nhớ", value: "12GB LPDDR5X / 256GB UFS 4.0" },
      { label: "Camera sau", value: "200MP (Chính), 50MP (Siêu rộng), 50MP (Tele 5x)" },
      { label: "Pin & Sạc", value: "5.000 mAh, Sạc nhanh 45W, Sạc không dây 15W" },
      { label: "Thiết kế", value: "Khung viền Titanium, Kính Gorilla Armor chống chói" },
      { label: "Tính năng", value: "Bút S-Pen tích hợp, Galaxy AI chuyên sâu" },
      { label: "Ưu đãi", value: "Trợ giá thu cũ đổi mới lên đến 2 triệu đồng" },
    ],
    description: `
      <div class="${styles.descContent}">
        <h3 style="text-align: center; color: #034ea2; font-size: 2.2rem; margin-bottom: 25px; font-weight: 700;">
          Samsung Galaxy S25 Ultra: Sự Giao Thoa Giữa Nghệ Thuật Và Sức Mạnh
        </h3>

        <p>Dù đã bước sang năm 2026, <b>Samsung Galaxy S25 Ultra</b> vẫn duy trì vị thế là một trong những chiếc flagship Android hoàn thiện nhất từng được tạo ra. Với sự kết hợp giữa khung viền Titanium sang trọng và trí tuệ nhân tạo Galaxy AI, đây là thiết bị lý tưởng cho cả nhu cầu giải trí đỉnh cao lẫn xử lý công việc chuyên nghiệp.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">1. Thiết kế Titanium mỏng nhẹ và bền bỉ</h4>
        <p>Galaxy S25 Ultra đánh dấu sự lột xác về cảm giác cầm nắm với các góc cạnh được bo cong nhẹ nhàng hơn, thay vì vuông vức hoàn toàn như thế hệ trước. Khung viền <b>Titanium</b> không chỉ mang lại vẻ đẹp đẳng cấp mà còn giúp tối ưu trọng lượng, giúp bạn thoải mái sử dụng trong thời gian dài mà không bị mỏi tay. Lớp kính <b>Gorilla Armor</b> độc quyền giúp giảm phản xạ đến 75%, đảm bảo hiển thị rõ nét ngay cả khi bạn đang di chuyển ngoài trời tại khu vực Quận 12 nắng gắt.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">2. Hiệu năng vượt trội với Snapdragon 8 Gen 4</h4>
        <p>Được trang bị vi xử lý <b>Snapdragon 8 Gen 4</b> sản xuất trên tiến trình 3nm tiên tiến, S25 Ultra mang lại tốc độ xử lý nhanh hơn 30% và tiết kiệm năng lượng hơn so với phiên bản tiền nhiệm. Hệ thống tản nhiệt buồng hơi lớn hơn giúp máy luôn duy trì hiệu suất ổn định khi bạn chiến các tựa game nặng như <i>Call of Duty: Modern Warfare</i> hay thực hiện chỉnh sửa video 4K trực tiếp trên điện thoại.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">3. Hệ thống Camera ProVisual và Siêu Zoom AI</h4>
        <p>Camera chính <b>200MP</b> kết hợp cùng ống kính Tele 50MP mới cho phép bạn thực hiện những cú zoom quang học 5x và zoom kỹ thuật số lên đến 100x với độ chi tiết kinh ngạc. Nhờ công nghệ <b>ProVisual Engine</b>, các bức ảnh chụp đêm hay chụp ngược sáng đều được tối ưu hóa bằng AI để giữ lại dải màu chân thực và độ nhiễu thấp nhất.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">4. Galaxy AI - Trợ lý đa năng cho mọi tác vụ</h4>
        <p>Tận hưởng sức mạnh của AI với các tính năng như: Khoanh vùng tìm kiếm (Circle to Search), Dịch thuật trực tiếp cuộc gọi theo thời gian thực và Hỗ trợ ghi chú thông minh. Bút <b>S-Pen</b> đi kèm không chỉ để viết vẽ mà còn tích hợp các lệnh cử chỉ không chạm, giúp bạn điều khiển bài thuyết trình hay chụp ảnh từ xa cực kỳ tiện lợi.</p>

        <div class="${styles.quoteBox}" style="margin-top: 45px; padding: 25px; border-left: 6px solid #034ea2; background: #f0f4f9; border-radius: 8px;">
          <p style="margin-bottom: 10px; font-weight: 600; color: #034ea2;">Sự lựa chọn hoàn hảo cho người dùng Android</p>
          <p style="margin-bottom: 0; font-style: italic;">"Galaxy S25 Ultra là minh chứng cho việc Samsung luôn lắng nghe người dùng để hoàn thiện sản phẩm. Tại Luxury Phone Quận 12, sản phẩm hiện đang có mức giá cực kỳ tốt cùng nhiều quà tặng hấp dẫn dành riêng cho cộng đồng yêu công nghệ."</p>
        </div>
      </div>
    `
  },
  { 
    id: 7, 
    name: "Samsung Galaxy S24 Ultra", 
    price: "24.990.000đ", 
    oldPrice: "27.500.000đ",
    detailImages: ["dt7.svg"],
    image: "/image/dt7.svg", 
    specs: [
      { label: "Màn hình", value: "6.8 inch, Dynamic AMOLED 2X, 2600 nits" },
      { label: "Chip xử lý", value: "Snapdragon 8 Gen 3 for Galaxy (4nm)" },
      { label: "RAM/Bộ nhớ", value: "12GB LPDDR5X / 256GB UFS 4.0" },
      { label: "Camera sau", value: "200MP (Chính), 50MP (Tele 5x), 10MP (Tele 3x)" },
      { label: "Pin & Sạc", value: "5.000 mAh, Sạc nhanh 45W" },
      { label: "Vật liệu", value: "Khung viền Titanium, Kính Gorilla Armor" },
      { label: "Bút S-Pen", value: "Tích hợp sẵn, độ trễ 2.8ms" },
      { label: "Ưu đãi", value: "Tặng gói bảo hành Samsung Care+ 6 tháng" },
    ],
    description: `
      <div class="${styles.descContent}">
        <h3 style="text-align: center; color: #034ea2; font-size: 2.2rem; margin-bottom: 25px; font-weight: 700;">
          Samsung Galaxy S24 Ultra: Mở Ra Kỷ Nguyên Quyền Năng AI
        </h3>

        <p>Đến năm 2026, <b>Samsung Galaxy S24 Ultra</b> vẫn là lựa chọn cực kỳ thông minh nhờ sự cân bằng hoàn hảo giữa giá thành và công nghệ. Đây là chiếc smartphone đầu tiên của Samsung sử dụng khung viền Titanium và kính Gorilla Armor chống chói vượt trội, giúp thay đổi hoàn toàn thói quen sử dụng của người dùng.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">1. Quyền năng Galaxy AI trong tầm tay</h4>
        <p>S24 Ultra mang đến những tính năng AI mang tính cách mạng: <b>Circle to Search</b> giúp bạn tìm mọi thứ chỉ bằng cách khoanh tròn trên màn hình, hay <b>Note Assist</b> tự động tóm tắt nội dung học tập. Với các bạn sinh viên tại Quận 12, tính năng <b>Dịch thuật trực tiếp</b> sẽ là trợ thủ đắc lực trong các buổi thuyết trình ngoại ngữ hoặc khi đi du lịch nước ngoài.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">2. Màn hình phẳng chống chói đỉnh cao</h4>
        <p>Điểm khác biệt lớn nhất của S24 Ultra chính là lớp kính <b>Gorilla Armor</b>. Không chỉ cứng hơn gấp 4 lần, nó còn giúp giảm phản chiếu tới 75%. Kết quả là bạn sẽ có một màn hình trong trẻo như nhìn vào giấy in, dù là khi đang ngồi cafe vỉa hè Quận 12 dưới trời nắng gắt, hình ảnh vẫn hiển thị rực rỡ và sắc nét.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">3. Camera 200MP và Mắt thần bóng đêm AI</h4>
        <p>Hệ thống camera trên S24 Ultra sử dụng sức mạnh của <b>ProVisual Engine</b>. Cảm biến 200MP cho phép bạn crop ảnh thoải mái mà vẫn giữ được độ nét cao. Đặc biệt, camera Tele 50MP hỗ trợ zoom quang học 5x chất lượng tương đương 10x nhờ AI, giúp việc bắt trọn những khoảnh khắc ở xa trở nên dễ dàng hơn bao giờ hết.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">4. Bút S-Pen: Hiệu suất làm việc tối đa</h4>
        <p>Chiếc bút <b>S-Pen</b> huyền thoại tích hợp sâu vào hệ sinh thái AI, cho phép bạn điều hướng mượt mà, ghi chú nhanh và chỉnh sửa hình ảnh độ chính xác cao. Với khung viền Titanium bền bỉ, máy mang lại cảm giác sang trọng và an tâm tuyệt đối khi sử dụng lâu dài.</p>

        <div class="${styles.quoteBox}" style="margin-top: 45px; padding: 25px; border-left: 6px solid #034ea2; background: #f0f4f9; border-radius: 8px;">
          <p style="margin-bottom: 10px; font-weight: 600; color: #034ea2;">Giá trị bền vững - Hiệu năng tin cậy</p>
          <p style="margin-bottom: 0; font-style: italic;">"Galaxy S24 Ultra tại Luxury Phone là minh chứng cho một siêu phẩm bền dáng, mạnh lòng. Một mức giá quá hời ở năm 2026 để sở hữu đầy đủ bộ công cụ AI đỉnh cao nhất của Samsung."</p>
        </div>
      </div>
    `
  },
  { 
    id: 8, 
    name: "Samsung Galaxy S23 Ultra", 
    price: "20.990.000đ", 
    oldPrice: "23.500.000đ",
    detailImages: ["dt8.svg"],
    image: "/image/dt8.svg", 
    specs: [
      { label: "Màn hình", value: "6.8 inch, Dynamic AMOLED 2X, 120Hz, 1750 nits" },
      { label: "Chip xử lý", value: "Snapdragon 8 Gen 2 for Galaxy (4nm)" },
      { label: "RAM/Bộ nhớ", value: "12GB LPDDR5X / 256GB UFS 4.0" },
      { label: "Camera sau", value: "200MP (Chính), 12MP (Góc rộng), 10MP (Zoom 3x & 10x)" },
      { label: "Pin & Sạc", value: "5.000 mAh, Sạc nhanh 45W" },
      { label: "Bút S-Pen", value: "Tích hợp sẵn, độ trễ 2.8ms" },
      { label: "Thiết kế", value: "Khung nhôm Armor Aluminum, Kính Gorilla Victus 2" },
      { label: "Tình trạng", value: "Hàng mới 100% - Fullbox" },
    ],
    description: `
      <div class="${styles.descContent}">
        <h3 style="text-align: center; color: #034ea2; font-size: 2.2rem; margin-bottom: 25px; font-weight: 700;">
          Samsung Galaxy S23 Ultra: Đẳng Cấp Vượt Thời Gian
        </h3>

        <p>Dù các thế hệ mới đã ra mắt, <b>Samsung Galaxy S23 Ultra</b> vẫn giữ vững vị thế là một trong những chiếc smartphone Android toàn diện nhất. Với những người dùng chú trọng vào sự bền bỉ, khả năng zoom xa kinh ngạc và trải nghiệm viết vẽ chuyên nghiệp, đây vẫn là lựa chọn "đáng đồng tiền bát gạo" nhất tại Luxury Phone trong năm 2026.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">1. Mắt thần bóng đêm 200MP</h4>
        <p>S23 Ultra là thiết bị tiên phong sở hữu cảm biến <b>200MP</b> của Samsung. Khả năng gộp điểm ảnh thông minh giúp bạn ghi lại những bức ảnh sắc nét đến từng chi tiết ngay cả trong điều kiện thiếu sáng. Hệ thống zoom quang học kép 3x và 10x cho phép bạn bắt trọn mọi khoảnh khắc từ xa mà vẫn giữ được độ trong trẻo tuyệt vời, rất thích hợp để chụp ảnh phong cảnh hoặc các sự kiện tại TP.HCM.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">2. Hiệu năng ổn định với Snapdragon 8 Gen 2</h4>
        <p>Vi xử lý <b>Snapdragon 8 Gen 2 for Galaxy</b> vẫn dư sức cân tốt mọi tác vụ từ học tập đến giải trí cho các bạn sinh viên tại Quận 12. Từ việc chơi các tựa game đồ họa cao như <i>Liên Quân Mobile</i> đến việc đa nhiệm nhiều ứng dụng lập trình, máy luôn đảm bảo sự mượt mà và nhiệt độ ổn định nhờ hệ thống tản nhiệt buồng hơi lớn.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">3. Bút S-Pen: Khơi nguồn sáng tạo</h4>
        <p>Chiếc bút <b>S-Pen</b> thần thánh mang lại sự khác biệt hoàn toàn so với phần còn lại của thế giới smartphone. Bạn có thể nhanh chóng ghi chú ý tưởng, chỉnh sửa ảnh chính xác đến từng pixel hay dùng làm điều khiển từ xa để chụp ảnh nhóm vô cùng tiện lợi. Thiết kế vuông vức của máy cũng mang lại diện tích viết vẽ rộng rãi và thoải mái hơn.</p>

        <h4 style="color: #034ea2; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">4. Pin "trâu" và độ bền chuẩn quân đội</h4>
        <p>Với viên pin 5.000 mAh kết hợp cùng khả năng tối ưu điện năng cực tốt, S23 Ultra sẵn sàng đồng hành cùng bạn suốt cả ngày dài. Khung viền <b>Armor Aluminum</b> kết hợp cùng kính cường lực <b>Gorilla Glass Victus 2</b> mang lại sự an tâm tuyệt đối trước những va đập không mong muốn trong quá trình sử dụng hàng ngày.</p>

        <div class="${styles.quoteBox}" style="margin-top: 45px; padding: 25px; border-left: 6px solid #034ea2; background: #f0f4f9; border-radius: 8px;">
          <p style="margin-bottom: 10px; font-weight: 600; color: #034ea2;">Sự lựa chọn thực dụng và kinh tế</p>
          <p style="margin-bottom: 0; font-style: italic;">"Nếu bạn cần một siêu phẩm có màn hình lớn, camera đỉnh và bút S-Pen nhưng không muốn chi trả quá nhiều cho các dòng mới nhất, Galaxy S23 Ultra chính là món hời công nghệ dành cho bạn tại khu vực District 12."</p>
        </div>
      </div>
    `
  },
  { 
    id: 9, 
    name: "Xiaomi 17", 
    price: "22.990.000đ", 
    oldPrice: "25.500.000đ",
    detailImages: ["dt9.svg"],
    image: "/image/dt9.svg", 
    specs: [
      { label: "Màn hình", value: "6.36 inch, LTPO OLED, 1.5K, 120Hz" },
      { label: "Chip xử lý", value: "Snapdragon 8 Gen 5 (Tiến trình 2nm)" },
      { label: "RAM/Bộ nhớ", value: "16GB LPDDR6 / 256GB UFS 4.1" },
      { label: "Camera sau", value: "Hệ thống Leica Summilux 50MP (3 ống kính)" },
      { label: "Pin & Sạc", value: "4.900 mAh, Sạc nhanh 120W, Sạc không dây 50W" },
      { label: "Hệ điều hành", value: "Xiaomi HyperOS 3.0 mượt mà" },
      { label: "Vật liệu", value: "Mặt lưng kính Ceramic hoặc Da thuần chay" },
      { label: "Ưu đãi", value: "Tặng gói bảo hành vàng (Nguồn & Màn hình)" },
    ],
    description: `
      <div class="${styles.descContent}">
        <h3 style="text-align: center; color: #ff6700; font-size: 2.2rem; margin-bottom: 25px; font-weight: 700;">
          Xiaomi 17: Tuyệt Tác Nhỏ Gọn, Hiệu Năng Vô Song
        </h3>

        <p>Năm 2026, <b>Xiaomi 17</b> tiếp tục khẳng định vị thế dẫn đầu trong phân khúc flagship nhỏ gọn. Không cần một thân hình quá khổ, Xiaomi 17 vẫn mang trong mình sức mạnh của một "mãnh thú" cùng hệ thống camera Leica trứ danh, sẵn sàng thách thức mọi giới hạn công nghệ.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">1. Sức mạnh đột phá từ Chip Snapdragon 8 Gen 5</h4>
        <p>Trái tim của Xiaomi 17 là vi xử lý <b>Snapdragon 8 Gen 5</b> trên tiến trình 2nm tối tân. Với dung lượng RAM lên đến 16GB chuẩn LPDDR6, máy cho khả năng đa nhiệm cực kỳ ấn tượng. Các bạn sinh viên IT tại Quận 12 có thể thoải mái chạy các trình giả lập, biên dịch code hay chiến các tựa game nặng nhất hiện nay mà không hề có hiện tượng quá nhiệt nhờ hệ thống tản nhiệt IceLoop thế hệ mới.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">2. Ống kính Leica Summilux - Đỉnh cao nhiếp ảnh</h4>
        <p>Sự hợp tác giữa Xiaomi và <b>Leica</b> đã bước sang một tầm cao mới. Cụm 3 camera 50MP sử dụng ống kính Summilux thế hệ mới với khẩu độ cực lớn, giúp thu sáng vượt trội 40% so với thế hệ trước. Khả năng tái tạo màu sắc Leica Authentic và Leica Vibrant giúp mọi bức ảnh chụp tại đường phố TP.HCM đều mang đậm chất nghệ thuật điện ảnh.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">3. Màn hình 1.5K siêu sáng và bảo vệ mắt</h4>
        <p>Xiaomi 17 sở hữu màn hình LTPO OLED kích thước 6.36 inch "vừa vặn" trong lòng bàn tay. Độ sáng tối đa lên tới 4000 nits cùng công nghệ PWM Dimming tần số cao giúp bảo vệ mắt tối ưu khi bạn sử dụng điện thoại vào ban đêm để chạy deadline hoặc xem phim chất lượng cao.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">4. Sạc nhanh 120W - Đầy pin trong tích tắc</h4>
        <p>Công nghệ sạc nhanh <b>HyperCharge 120W</b> cho phép sạc đầy viên pin 4900 mAh chỉ trong khoảng 18 phút. Đây là tính năng cực kỳ hữu ích cho nhịp sống năng động, giúp bạn luôn giữ kết nối liên tục mà không bao giờ phải lo lắng về việc chờ đợi sạc pin quá lâu.</p>

        <div class="${styles.quoteBox}" style="margin-top: 45px; padding: 25px; border-left: 6px solid #ff6700; background: #fff5f0; border-radius: 8px;">
          <p style="margin-bottom: 10px; font-weight: 600; color: #ff6700;">Đẳng cấp công nghệ trong tầm tay</p>
          <p style="margin-bottom: 0; font-style: italic;">"Nếu bạn đang tìm kiếm một chiếc smartphone mạnh mẽ nhất nhưng lại yêu thích cảm giác cầm nắm gọn gàng, Xiaomi 17 chính là câu trả lời hoàn hảo. Tại Luxury Phone, chúng tôi tự hào mang đến những sản phẩm Xiaomi chính hãng với chế độ hậu mãi tốt nhất khu vực Quận 12."</p>
        </div>
      </div>
    `
  },
  { 
    id: 10, 
    name: "Xiaomi 16", 
    price: "18.990.000đ", 
    oldPrice: "20.500.000đ",
    detailImages: ["dt10.svg"],
    image: "/image/dt10.svg", 
    specs: [
      { label: "Màn hình", value: "6.36 inch, AMOLED, 1.5K, 120Hz" },
      { label: "Chip xử lý", value: "Snapdragon 8 Gen 4 (Tiến trình 3nm)" },
      { label: "RAM/Bộ nhớ", value: "12GB LPDDR5X / 256GB UFS 4.0" },
      { label: "Camera sau", value: "Leica Optical 50MP + 50MP + 50MP" },
      { label: "Pin & Sạc", value: "4.610 mAh, Sạc nhanh 90W, Không dây 50W" },
      { label: "Hệ điều hành", value: "Xiaomi HyperOS 2.0 tối ưu AI" },
      { label: "Chống nước", value: "Chuẩn IP68 bền bỉ" },
      { label: "Bảo hành", value: "18 tháng chính hãng tại Quận 12" },
    ],
    description: `
      <div class="${styles.descContent}">
        <h3 style="text-align: center; color: #ff6700; font-size: 2.2rem; margin-bottom: 25px; font-weight: 700;">
          Xiaomi 16: Nhỏ Gọn Toàn Năng, Đẳng Cấp Leica
        </h3>

        <p>Tại Luxury Phone, <b>Xiaomi 16</b> luôn là sự lựa chọn hàng đầu cho những khách hàng yêu thích sự gọn gàng nhưng đòi hỏi hiệu năng khủng. Với triết lý thiết kế viền siêu mỏng đều cả 4 cạnh, Xiaomi 16 mang đến một trải nghiệm cầm nắm cực kỳ cao cấp và sang trọng.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">1. Sức mạnh đột phá từ Chip Snapdragon 8 Gen 4</h4>
        <p>Dù đã có thế hệ 17, nhưng vi xử lý <b>Snapdragon 8 Gen 4</b> trên Xiaomi 16 vẫn dư sức nghiền nát mọi tác vụ nặng nhất năm 2026. Khả năng xử lý đồ họa vượt trội giúp bạn chiến mượt các tựa game đình đám hiện nay. Đặc biệt, công nghệ AI tích hợp sâu vào hệ thống giúp máy tự động tối ưu hóa tài nguyên dựa trên thói quen sử dụng hàng ngày của bạn.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">2. Camera Leica thế hệ mới - Chạm là có ảnh đẹp</h4>
        <p>Hệ thống ống kính <b>Leica Summilux</b> trên Xiaomi 16 giúp tái tạo màu sắc chuẩn xác và độ chi tiết cực cao. Bộ ba camera 50MP hỗ trợ chụp ảnh chân dung với hiệu ứng xóa phông vật lý mịn màng, giúp bạn dễ dàng có được những bức ảnh nghệ thuật như chụp bằng máy ảnh chuyên nghiệp. Chế độ quay phim 4K HDR cũng được nâng cấp đáng kể về khả năng chống rung.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">3. Màn hình bảo vệ mắt đỉnh cao</h4>
        <p>Sử dụng tấm nền AMOLED chất lượng cao với độ phân giải 1.5K, màn hình Xiaomi 16 không chỉ rực rỡ mà còn cực kỳ an toàn cho mắt nhờ công nghệ giảm ánh sáng xanh. Tần số quét 120Hz linh hoạt giúp mọi thao tác vuốt chạm lướt web hay mạng xã hội đều mượt mà tuyệt đối.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">4. Sạc nhanh siêu tốc và độ bền chuẩn IP68</h4>
        <p>Với công nghệ sạc nhanh 90W, bạn chỉ mất chưa đầy 35 phút để sạc đầy viên pin từ 0%. Bên cạnh đó, khả năng kháng nước, kháng bụi chuẩn <b>IP68</b> giúp chiếc điện thoại của bạn luôn được bảo vệ an toàn trong mọi điều kiện thời tiết khắc nghiệt của TP.HCM.</p>

        <div class="${styles.quoteBox}" style="margin-top: 45px; padding: 25px; border-left: 6px solid #ff6700; background: #fff5f0; border-radius: 8px;">
          <p style="margin-bottom: 10px; font-weight: 600; color: #ff6700;">Giá trị đích thực của một Flagship</p>
          <p style="margin-bottom: 0; font-style: italic;">"Xiaomi 16 mang lại giá trị sử dụng cực lớn so với mức giá bỏ ra. Đây là chiếc smartphone dành cho những người dùng thực tế, cần một thiết bị mạnh, chụp ảnh đẹp và hoạt động bền bỉ suốt nhiều năm."</p>
        </div>
      </div>
    `
  },
  { 
    id: 11, 
    name: "Xiaomi 13", 
    price: "12.990.000đ", 
    oldPrice: "15.500.000đ",
    detailImages: ["dt11.svg"],
    image: "/image/dt11.svg", 
    specs: [
      { label: "Màn hình", value: "6.36 inch, AMOLED, 120Hz, 1900 nits" },
      { label: "Chip xử lý", value: "Snapdragon 8 Gen 2 (4nm)" },
      { label: "RAM/Bộ nhớ", value: "8GB LPDDR5X / 256GB UFS 4.0" },
      { label: "Camera sau", value: "Leica Professional Optical (Chính 50MP)" },
      { label: "Pin & Sạc", value: "4.500 mAh, Sạc nhanh 67W, Không dây 50W" },
      { label: "Thiết kế", value: "Khung nhôm bóng bẩy, Mặt lưng kính" },
      { label: "Chống nước", value: "Chuẩn IP68 bền bỉ" },
      { label: "Ưu đãi", value: "Tặng củ sạc 67W chính hãng tại Quận 12" },
    ],
    description: `
      <div class="${styles.descContent}">
        <h3 style="text-align: center; color: #ff6700; font-size: 2.2rem; margin-bottom: 25px; font-weight: 700;">
          Xiaomi 13: Đẳng Cấp Flagship Nhỏ Gọn
        </h3>

        <p>Dù đã ra mắt một thời gian, <b>Xiaomi 13</b> vẫn giữ vững vị thế là một trong những chiếc điện thoại Android đáng mua nhất tại Luxury Phone. Với thiết kế vuông vức sang trọng, viền màn hình siêu mỏng và sự hợp tác cùng Leica, đây là thiết bị hoàn hảo cho những ai thích sự tinh tế và hiệu năng ổn định lâu dài.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">1. Thiết kế viền siêu mỏng - Đỉnh cao thẩm mỹ</h4>
        <p>Xiaomi 13 sở hữu màn hình phẳng 6.36 inch với phần viền được tối ưu mỏng đều một cách kinh ngạc. Khung nhôm sáng bóng kết hợp với mặt lưng kính cao cấp tạo nên cảm giác cầm nắm chắc chắn, gọn gàng trong lòng bàn tay. Đây là mẫu máy hiếm hoi trên thị trường mang lại sự cân bằng tuyệt đối giữa kích thước và trải nghiệm hiển thị.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">2. Ống kính Leica Professional - Chất ảnh khác biệt</h4>
        <p>Hệ thống camera trên Xiaomi 13 được tinh chỉnh bởi <b>Leica</b>, mang lại những tông màu đặc trưng không thể tìm thấy trên các dòng máy khác. Chế độ Leica Authentic giữ lại độ tương phản sâu và màu sắc chân thực, trong khi Leica Vibrant mang đến sự rực rỡ hiện đại. Khả năng chụp chân dung của máy cũng cực kỳ ấn tượng với độ chi tiết cao và hiệu ứng bokeh tự nhiên.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">3. Hiệu năng ổn định vượt thời gian</h4>
        <p>Vi xử lý <b>Snapdragon 8 Gen 2</b> vẫn dư sức đáp ứng mọi nhu cầu học tập, làm việc và giải trí của các bạn sinh viên Quận 12 trong năm 2026. Từ việc lướt web đa nhiệm đến chiến các tựa game phổ biến, máy luôn vận hành mượt mà và mát mẻ nhờ hệ thống quản lý nhiệt độ thông minh từ Xiaomi.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">4. Sạc nhanh và Kháng nước chuẩn IP68</h4>
        <p>Máy hỗ trợ sạc nhanh 67W giúp nạp đầy pin chỉ trong khoảng 40 phút. Bên cạnh đó, chuẩn kháng nước và bụi <b>IP68</b> giúp bạn yên tâm sử dụng máy dưới trời mưa hay trong môi trường khắc nghiệt mà không lo hư hỏng phần cứng bên trong.</p>

        <div class="${styles.quoteBox}" style="margin-top: 45px; padding: 25px; border-left: 6px solid #ff6700; background: #fff5f0; border-radius: 8px;">
          <p style="margin-bottom: 10px; font-weight: 600; color: #ff6700;">Lựa chọn thực tế - Trải nghiệm Flagship</p>
          <p style="margin-bottom: 0; font-style: italic;">"Xiaomi 13 là minh chứng cho việc một chiếc máy tốt không nhất thiết phải quá đắt đỏ. Với mức giá đã cực kỳ dễ tiếp cận tại Luxury Phone, đây chính là 'món hời' công nghệ dành cho những ai thích sự gọn gàng và bền bỉ."</p>
        </div>
      </div>
    `
  },
  { 
    id: 12, 
    name: "Xiaomi 12", 
    price: "9.990.000đ",  
    oldPrice: "11.500.000đ",
    detailImages: ["dt12.svg"],
    image: "/image/dt12.svg", 
    specs: [
      { label: "Màn hình", value: "6.28 inch, AMOLED, 120Hz, 68 tỷ màu" },
      { label: "Chip xử lý", value: "Snapdragon 8 Gen 1 (4nm)" },
      { label: "RAM/Bộ nhớ", value: "8GB LPDDR5 / 256GB UFS 3.1" },
      { label: "Camera sau", value: "Chính 50MP (OIS), Góc rộng 13MP, Telemacro 5MP" },
      { label: "Pin & Sạc", value: "4.500 mAh, Sạc nhanh 67W, Không dây 50W" },
      { label: "Âm thanh", value: "Loa kép Harman Kardon chuyên nghiệp" },
      { label: "Thiết kế", value: "Kính cong 3D, Khung kim loại bo tròn" },
      { label: "Ưu đãi", value: "Tặng gói bảo hành 12 tháng tại chi nhánh Quận 12" },
    ],
    description: `
      <div class="${styles.descContent}">
        <h3 style="text-align: center; color: #ff6700; font-size: 2.2rem; margin-bottom: 25px; font-weight: 700;">
          Xiaomi 12: Đỉnh Cao Thiết Kế Nhỏ Gọn & Mềm Mại
        </h3>

        <p>Tại Luxury Phone, <b>Xiaomi 12</b> là minh chứng cho việc một chiếc smartphone mạnh mẽ không nhất thiết phải to lớn. Với chiều ngang chỉ 69.9mm, đây là thiết bị hoàn hảo cho những ai yêu thích cảm giác sử dụng bằng một tay, dễ dàng bỏ túi và di chuyển khắp mọi nơi tại TP.HCM.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">1. Màn hình 68 tỷ màu - Bữa tiệc thị giác</h4>
        <p>Mặc dù nhỏ gọn, nhưng Xiaomi 12 sở hữu màn hình <b>AMOLED</b> đạt chứng nhận DisplayMate A+ với khả năng hiển thị tới 68 tỷ màu. Tần số quét 120Hz cùng độ sáng cao giúp mọi thước phim hay hình ảnh trên mạng xã hội đều trở nên sống động, rực rỡ và cực kỳ mượt mà.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">2. Camera 50MP tích hợp lấy nét siêu tốc</h4>
        <p>Hệ thống camera trên Xiaomi 12 nổi bật với cảm biến chính <b>50MP</b> hỗ trợ chống rung quang học OIS. Công nghệ <b>Xiaomi ProFocus</b> cho phép máy nhận diện và lấy nét theo mắt, chuyển động của chủ thể cực nhanh, giúp bạn không bỏ lỡ bất kỳ khoảnh khắc quý giá nào trong cuộc sống thường ngày.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">3. Âm thanh Harman Kardon sống động</h4>
        <p>Trải nghiệm giải trí trên Xiaomi 12 được nâng tầm nhờ hệ thống loa kép được tinh chỉnh bởi <b>Harman Kardon</b> và hỗ trợ chuẩn <b>Dolby Atmos</b>. Dù bạn đang nghe nhạc hay chơi game, âm thanh phát ra luôn có độ chi tiết cao, âm trầm chắc khỏe, mang lại không فضای âm nhạc chân thực nhất.</p>

        <h4 style="color: #ff6700; font-size: 1.5rem; margin-top: 35px; border-bottom: 1px solid #ddd; padding-bottom: 10px;">4. Hiệu năng flagship trong tầm giá phổ thông</h4>
        <p>Sở hữu chip <b>Snapdragon 8 Gen 1</b>, máy vẫn dư sức đáp ứng tốt các tác vụ học tập, giải trí và chơi game của sinh viên Quận 12 trong năm 2026. Với công nghệ sạc nhanh 67W, bạn chỉ mất khoảng 39 phút để nạp đầy năng lượng cho thiết bị, sẵn sàng cho cả ngày dài năng động.</p>

        <div class="${styles.quoteBox}" style="margin-top: 45px; padding: 25px; border-left: 6px solid #ff6700; background: #fff5f0; border-radius: 8px;">
          <p style="margin-bottom: 10px; font-weight: 600; color: #ff6700;">Sự lựa chọn tinh tế cho mọi người dùng</p>
          <p style="margin-bottom: 0; font-style: italic;">"Xiaomi 12 tại Luxury Phone là mẫu máy có mức giá dễ tiếp cận nhất trong dòng Flagship nhưng vẫn mang lại trải nghiệm cầm nắm và hiển thị đẳng cấp. Một lựa chọn không thể bỏ qua cho những ai ưu tiên tính di động và vẻ đẹp tinh tế."</p>
        </div>
      </div>
    `
  }
];

export default function ChiTietSanPham() {
  const params = useParams();
  const productId = params.id;

  const product = products.find((p) => p.id.toString() === productId);
  
  if (!product) {
    return (
      <div className={styles.container} style={{ textAlign: "center", padding: "100px 0" }}>
        <h2>Không tìm thấy sản phẩm hoặc đang tải...</h2>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.productDetailContainer}>
        
        <section className={styles.topSection}>
          <div className={styles.galleryBox}>
            
            <div className={styles.slider}>
              <SimpleSlider images={product.detailImages} />
            </div>
          </div>

          <div className={styles.infoBox}>
            <h1 className={styles.detailTitle}>{product.name}</h1>
            
            <div className={styles.gia}>
              <div className={styles.giaban}>
                <p>
                  {product.price}
                  <span className={styles.giacu}>{product.oldPrice}</span>
                </p>
              </div>
              <div className={styles.khuyenmai}>
                <span style={{ fontSize: '14px', color: '#fff', background: '#e00000', padding: '3px 8px', borderRadius: '4px' }}>
                  Đã giảm 2.500.000đ
                </span>
              </div>
            </div>
            
            <div className={styles.specTable}>
              <h3 className={styles.specTitle}>Thông số kỹ thuật chi tiết</h3>
              
              {product.specs.map((spec, i) => (
                <div key={i} className={styles.specRow}>
                  <span className={styles.specLabel}>{spec.label}</span>
                  <span className={styles.specValue}>{spec.value}</span>
                </div>
              ))}
            </div>

            <div className={styles.buttonGroup}>
              <button className={styles.buyNowBtn}>MUA NGAY</button>
              <button className={styles.addToCartBtn}>THÊM GIỎ HÀNG</button>
            </div>
          </div>
        </section>

        {/* Khối Đánh giá chi tiết */}
        <section className={styles.descriptionSection}>
          <h2 className={styles.descTitle} style={{ fontSize: '2.2rem', margin: '40px 0' }}>
            Đánh giá chi tiết từ chuyên gia
          </h2>
          <div dangerouslySetInnerHTML={{ __html: product?.description || "" }} />
        </section>

      </main>
      <Footer />
    </div>
  );
}