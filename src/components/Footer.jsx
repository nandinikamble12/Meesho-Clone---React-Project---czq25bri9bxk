import React from 'react';
import './footer.css';

function Footer() {
    return (
        <div className='footer'>
            <div className="footerWrapper">
                <div className="leftFooter">
                    <h1>Shop Non-Stop on Meesho</h1>
                    <span>Trusted by more than 1 Crore Indians</span>
                    <span>Cash on Delivery | Free Delivery</span>
                    <div className="imgFooter">
                        <a href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=185e8757c9432d-00abeba56ad479-26021051-100200-185e8757c9539c&pli=1" target='_blank'><img src="https://images.meesho.com/images/pow/playstore-icon-big.png" alt="" className="img1" /></a>
                    </div>
                </div>
                <div className="centerFooter">
                    <span>Careers</span>
                    <span>Become a supplier</span>
                    <span>Hall of Fame</span>
                </div>
                <div className="afterCenterFooter">
                    <span>Legal and Policies</span>
                    <span>Meesho Tech Blog</span>
                    <span>Notices and Returns</span>
                </div>
                <div className="rightFooter">
                    <h3>Contact Us</h3>
                    <span>Fashnear Technologies Private Limited,</span>
                    <span>CIN: U74900KA2015PTC082263</span>
                    <span>06-105-B, 06-102, (138 Wu)</span>
                    <span>Vaishnavi Signature, No. 78/9,</span>
                    <span>Outer Ring Road, Bellandur,</span>
                    <span>Varthur Hobli, Bengaluru-560103,</span>
                    <span>Karnataka, India</span>
                </div>
            </div>
        </div>
    )
}

export default Footer;