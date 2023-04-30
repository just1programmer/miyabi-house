import React ,{ useState } from 'react'
import './Footer.scss'
const Footer = () => {
  const [brandName, setBrandName] = useState("Miyabi House");
  return (
		<footer>
			<span>{brandName}</span>
			<div className="footer_links">
                <div className="home">
                    <a href="#">HOME</a>
                </div>
                <div className="menu">
                    <a href="#">MENU</a>
                    <a href="#">Sushi</a>
                    <a href="#">Tempura</a>
                    <a href="#">Ramen</a>
                    <a href="#">Mochi</a>
                    <a href="#">Specialities</a>
                </div>
                <div className="about">
                    <a href="#">ABOUT</a>
                    <a href="#">Company</a>
                    <a href="#">Team</a>
                    <a href="#">Story</a>
                </div>
                <div className="sessions">
                    <a href="#">SESSIONS</a>
                    <a href="#">Booking</a>
                    <a href="#">Classes</a>
                </div>
			
			</div>
			<div className="footer_social_icons">
				{/*  insta facebook twitter tiktok*/}
				<p>Lorem ipsum dolor sit amet.</p>
			</div>
		</footer>
	);
}

export default Footer