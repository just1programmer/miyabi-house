import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import sushi from './assets/sushi.png'
import ramen from './assets/ramen.png'
import mochi from './assets/mochi.png'
import onigiri from './assets/onigiri.png'
import Footer from './components/Footer'

function App() {
  const [mainTitle, setMainTitle] = useState('TASTE THE TRADITION OF JAPAN');
  const [mainText, setMainText] = useState('Experience the best of authentic Japanese cuisine at our fancy Japanese restaurant. Our menu features a wide range of traditional dishes, expertly prepared by our skilled chefs, using only the freshest ingredients.')
  const [buttonOrderText,setButtonOrderText] = useState('ORDER NOW');
  const [specialtiesTitle,setSpecialtiesTitle] = useState('OUR SPECIALTIES')

  const [sushiCategory,setSushiCategory] = useState('SUSHI')
  const [sushiVarieties, setSushiVarieties] = useState(12);
  const [ramenCategory, setRamenCategory] = useState("RAMEN");
  const [ramenVarieties, setRamenVarieties] = useState(8);
  const [mochiCategory, setMochiCategory] = useState("MOCHI");
  const [mochiVarieties, setMochiVarieties] = useState(5);
  const [onigiriCategory, setOnigiriCategory] = useState("ONIGIRI");
  const [onigiriVarieties, setOnigiriVarieties] = useState(5);

  const [testimonialsText, setTestimonialsText] = useState('TESTIMONIALS')

  return (
		<>
			<Header />
			<main>
				<div className="main_teaser">
					<div className="main_teaser_content">
						<h1 className="main_teaser-title">{mainTitle}</h1>
						<p className="main_teaser-text">{mainText}</p>
						<button>{buttonOrderText}</button>
					</div>
					<div className="main_teaser_dish"></div>
					<div className="main_teaser_traditional_writing"></div>
					<div className="main_teaser_specialties">
						<h1 className="main_teaser_specialties-title">
							{specialtiesTitle}
						</h1>
						<div className="main_teaser_specialties-container">
							<div className="main_teaser_specialties-specialty">
								<img src={sushi} alt="sushi" />
								<div className="main_teaser_specialities-specialty-text">
									<h1>{sushiCategory}</h1>
									<span>{sushiVarieties} varieties</span>
								</div>
								<button>{buttonOrderText}</button>
							</div>
							<div className="main_teaser_specialties-specialty">
								<img src={ramen} alt="ramen" />
								<div className="main_teaser_specialities-specialty-text">
									<h1>{ramenCategory}</h1>
									<span>{ramenVarieties} varieties</span>
								</div>
								<button>{buttonOrderText}</button>
							</div>
							<div className="main_teaser_specialties-specialty">
								<img src={mochi} alt="mochi" />
								<div className="main_teaser_specialities-specialty-text">
									<h1>{mochiCategory}</h1>
									<span>{mochiVarieties} varieties</span>
								</div>
								<button>{buttonOrderText}</button>
							</div>
							<div className="main_teaser_specialties-specialty">
								<img src={onigiri} alt="onigiri" />
								<div className="main_teaser_specialities-specialty-text">
									<h1>{onigiriCategory}</h1>
									<span>{onigiriVarieties} varieties</span>
								</div>
								<button>{buttonOrderText}</button>
							</div>
						</div>
					</div>
          <div className="testimonials">
            <h1>{testimonialsText}</h1>
          </div>
				</div>
			</main>
      <Footer/>
		</>
	);
}

export default App
