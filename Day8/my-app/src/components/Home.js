import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import HomeContainer from './HomeContainer.js'

export default class Home extends Component
{
    render() {
        return (
            <>
                <header id="header">
                    <div class="container">
                        <div class="contact">  
                            <div class="contact-list">
                                <img src="./img/phone.png" alt="" />&nbsp;
                                <span>Điện thoại: 0359.568.818</span>
                            </div>
                            <div class="sidebar-top">
                                <ul>
                                    <li><a href="">Sản phẩm bạn thích</a></li>
                                    <li><a href="">Đăng nhập hệ thống</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </header>
                <section class="nav">
                    <div class="container">
                        <div class="sp-header">
                            <div class="logo">
                                <a href=""><img src="./img/logo1.png" alt="" /></a>
                            </div>
                            <div class="search">
                                <input type="text" />
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                        class="bi bi-search" viewBox="0 0 16 16">
                                        <path
                                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg> </button>
                            </div>
                            <div class="shop-cart">
                                <div class="bb">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white"
                                        class="bi bi-cart-check item-cart" viewBox="0 0 16 16">
                                        <path
                                            d="M11.354 6.354a.5.5 0 0 0-.708-.708L8 8.293 6.854 7.146a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
                                        <path
                                            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                                    </svg>
                                </div>&nbsp;
                                <a href="www.facebook.com" class="show-card">TỚI GIỎ HÀNG CỦA BẠN</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="main-menu">
                    <div class="container">
                        <div class="menu">
                            <ul>
                                <li><a href="">TRANG CHỦ</a></li>
                                <li><a href="">"NGƯỜI TA NÓI"</a></li>
                                <li class="current-item"><a href="">CẢM ÂM-HƯỚNG DẪN</a>
                                    <ul class="sup-menu">
                                        <li><a href="">HƯỚNG DẪN THỔI SÁO</a></li>
                                        <li><a href="">KINH NGHIỆM VỀ SÁO</a></li>
                                        <li><a href="">CẢM ÂM SÁO TRÚC </a></li>
                                        <li><a href="">SAOTRUC.VN</a></li>
                                    </ul>
                                </li>
                                <li class="current-item"><a href="">HỖ TRỢ MUA HÀNG</a>
                                    <ul class="sup-menu">
                                        <li><a href="">ĐẠI LÝ SÁO TRÚC</a></li>
                                        <li><a href="">HƯỚNG DẪN ĐẶT HÀNG</a></li>
                                        <li><a href="">CHÍNH SÁCH BÁN HÀNG</a></li>
                                        <li><a href="">CHÍNH SÁCH BẢO MẬT</a></li>
                                    </ul>
                                </li>
                                <li><a href="">Hỗ trợ khách hàng 24/7: 0989.666.944</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <div class="container">
                        <div class="banner">
                            <div class="banner-top">
                                <img src="./img/logoxe.png" />
                                <div class="ccc">
                                    <h3>CHÍNH SÁCH GIAO HÀNG</h3>
                                    <p>Ship Code miễn phí với đơn<br></br> hàng mua sáo trúc trên 400k</p>
                                </div>
                            </div>
                            <div class="banner-top">
                                <img src="./img/laptop.png" />
                                <div>
                                    <h3>MUA SÁO TRÚC ONLINE</h3>
                                    <p>Khách hàng có thể mua sáo<br></br> trúc qua website,facebook...</p>
                                </div>
                            </div>
                            <div class="banner-top">
                                <img src="./img/dola.png" />
                                <div>
                                    <h3>CHUẨN ÂM 100%</h3>
                                    <p>Chuẩn âm trên từng phím bấm - Hòa<br></br> âm hợp với nhiều nhạc cụ.</p>
                                </div>
                            </div>
                            <div class="banner-top">
                                <img src="./img/reload.png" />
                                <div>
                                    <h3>BẢO HÀNH</h3>
                                    <p>Bảo hành và áp dụng 1 đổi 1 trọn<br></br> đời khi mua sáo trúc.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <HomeContainer/>
                <footer>
                    <div class="container">
                        <div class="main-footer">
                            <div class="footer1">
                                <ul>
                                    <li class="title">
                                        <img src="./img/green.png" />&nbsp;&nbsp;&nbsp;
                                        <span>SÁO TRÚC MÃO MÈO</span>
                                    </li>
                                    <li><p>Thương hiệu đã được đăng ký độc quyền<br></br> bởi cục
                                        sở hữu trí tuệ Việt Nam</p></li>
                                    <li><p>SHOP: 366 NGUYỄN TRÃI - THANH XUÂN<br></br> TRUNG - THANH XUÂN - HÀ NỘI</p></li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg> <p>Hotline: 0989.666.944</p>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                                            <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                        </svg><p> Kỹ thuật: 0989.666.944</p>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                        </svg><p>maomeokta@gmail.com</p>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                        </svg><p>Công ty TNHH sáo trúc mão mèo</p>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                        </svg><p>- 104 Lý Tự Trọng - TP Vinh - Nghệ An</p>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                        </svg><p>- 21 Nguyễn Xuân Ôn . P2 Bình Thạnh. Tp HCM</p>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                        </svg><p>Mã doanh nghiệp: 0108047518</p>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                        </svg><p>Cấp ngày: 28/01/2013</p>
                                    </li>
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                        </svg><p>Người đại diện: Nguyễn Văn Mão</p>
                                    </li>
                                </ul>
                            </div>
                            <div class="footer2">
                                <ul>
                                    <li class="title">
                                        <img src="./img/green.png" />&nbsp;&nbsp;&nbsp;
                                        <span>HƯỚNG DẪN</span>
                                    </li>
                                    <li><a href="">Hướng dẫn thổi sáo</a></li>
                                    <li><a href="">Hướng dẫn kĩ thuật thổi sáo</a></li>
                                    <li><a href="">Kinh nghiệm về sáo</a></li>
                                    <li><a href="">Cảm âm sáo trúc</a> </li>
                                    <li><a href="">Tuyển tập Mão Mèo</a></li>
                                    <li><a href="">Saotruc.vn</a></li>
                                </ul>
                            </div>
                            <div class="footer2">
                                <ul>
                                    <li class="title">
                                        <img src="./img/green.png" />&nbsp;&nbsp;&nbsp;
                                        <span>HỖ TRỢ</span>
                                    </li>
                                    <li><a href="">Đại lý sáo trúc</a></li>
                                    <li><a href="">Hướng dẫn Đặt hàng</a></li>
                                    <li><a href="">Hướng dẫn bảo hành</a></li>
                                    <li><a href="">Chính sách bán hàng</a> </li>
                                    <li><a href="">Chính sách bảo mật thông tin</a></li>
                                </ul>
                            </div>
                            <div class="footer2">
                                <ul>
                                    <li class="title">
                                        <img src="./img/green.png" />&nbsp;&nbsp;&nbsp;
                                        <span>HƯỚNG DẪN CHIA SẺ</span>
                                    </li>
                                    <li>
                                        <img src="./img/flow.png"/>
                                    </li>
                                </ul>
                            </div>
    
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}