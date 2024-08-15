// MODULES //
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import ScrollOut from "scroll-out";

// COMPONENTS //
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MetaTags from "@/components/MetaTags";
import PrimaryButton from "../src/components/primary-button";

// SECTIONS //
import Banner from "../src/sections/banner";
import Bearings from "../src/sections/Bearings";
import Our from "../src/sections/Our";
import SinceYear from "../src/sections/SinceYear";
import Service from "../src/sections/Service";
import BrochureDownload from "../src/sections/Brochure";

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/pages/Home.module.scss";

// IMAGES //
import imageBg from "../public/img/home/bg_img.jpg";
import industrialBearings from "../public/img/home/industrial_bearings.png";
import automotiveBearings from "../public/img/home/automotive_bearings.png";
import oilSeals from "../public/img/home/oil_seals.png";
import download_img from "../public/img/home/btn_arrow.svg";

// DATA //

gsap.registerPlugin(ScrollTrigger);

/** Home Page */
export default function HomePage() {
	useEffect(() => {
		ScrollOut({
			once: true,
		});
	}, []);
	useEffect(() => {
		const bearingsAnimation = gsap.timeline();

		/** bearingsAnimation Animaction */
		bearingsAnimation
			.to(".circle_animaction", {
				rotation: 265,
				duration: 50,
				ease: "none", // Smooth, continuous rotation
			})
			.to(".bearings_text_1", {
				opacity: 0,
				duration: 0.1,
				ease: "none",
				scrollTrigger: {
					trigger: ".circle_trigger",
					start: "top top",
					end: "+=1000",
					// pin: true,
					scrub: true,
					// markers: true, // Remove this line to hide markers in production
					// animation: bearingsAnimation, // Remove this line to hide markers in production
					onUpdate: (self) => {
						const progress = self.progress;
						console.log(progress, "progress");

						if (progress >= 0 && progress <= 0.34) {
							// Show bearings_text_1
							gsap.to(".bearings_text_1", { opacity: 1 });
							gsap.to(".bearings_text_2", { opacity: 0 });
							gsap.to(".bearings_text_3", { opacity: 0 });
						} else if (progress > 0.34 && progress <= 0.66) {
							// Show bearings_text_2
							gsap.to(".bearings_text_1", { opacity: 0 });
							gsap.to(".bearings_text_2", { opacity: 1 });
							gsap.to(".bearings_text_3", { opacity: 0 });
						} else if (progress > 0.66) {
							// Show bearings_text_3
							gsap.to(".bearings_text_1", { opacity: 0 });
							gsap.to(".bearings_text_2", { opacity: 0 });
							gsap.to(".bearings_text_3", { opacity: 1 });
						}
					},
				},
			});

		ScrollTrigger.create({
			trigger: ".circle_trigger",
			start: "top top",
			end: "+=1000",
			pin: true,
			scrub: true,
			// markers: true, // Remove this line to hide markers in production
			animation: bearingsAnimation,
		});

		/** image_animaction_section */

		const bannerAnimation = gsap.timeline();

		ScrollTrigger.create({
			trigger: ".image_animaction_section",
			start: "top center",
			end: "+=500",
			// pin: true,
			scrub: true,
			// markers: true, // Remove this line to hide markers in production
			animation: bannerAnimation,
		});

		bannerAnimation.to(".image_animaction img", {
			width: "100%",
			height: "100%",
			duration: 50,
		});

		/** bearings_animation */

		// Initial state
		const bearingsCircleAnimation = gsap.timeline();
		gsap.set(".bearings_img:nth-child(1)", { opacity: 1 });
		gsap.set(".bearings_img:nth-child(2)", { opacity: 0 });
		gsap.set(".bearings_img:nth-child(3)", { opacity: 0 });

		// Animation sequence
		bearingsCircleAnimation
			.to(".bearings_img:nth-child(1)", {
				rotation: 60,
				opacity: 0,
				duration: 2,
			})
			.to(
				".bearings_img:nth-child(2)",
				{
					rotation: 60,
					opacity: 1,
					duration: 1,
				},
				"-=1.5"
			) // Adjust this overlap for smooth transition
			.to(".bearings_img:nth-child(2)", {
				rotation: 60,
				opacity: 0,
				duration: 2,
			})
			.to(
				".bearings_img:nth-child(3)",
				{
					rotation: 60,
					opacity: 1,
					duration: 1,
				},
				"-=1.5"
			); // Adjust this overlap for smooth transition

		// ScrollTrigger for the animation
		ScrollTrigger.create({
			trigger: ".bearings_animation",
			start: "top 25%",
			end: "+=400",
			// pin: true,
			scrub: true,
			// markers: true, // Remove this line to hide markers in production
			animation: bearingsCircleAnimation,
		});

		const bannerAnim = gsap.timeline();

		ScrollTrigger.create({
			trigger: ".banner_anim",
			start: "top top",
			end: "+=600",
			// pin: true,
			scrub: true,
			// markers: true, // Remove this line to hide markers in production
			animation: bannerAnim,
		});

		// Animation sequence
		bannerAnim.to(".banner_title_animaction", {
			top: "141%",
			duration: 20,
			color: "#272727",
		});
	}, []);

	return (
		<div>
			{/* Metatags */}
			<MetaTags Title={"Home"} Desc={"Home Desc"} OgImg={""} Url={"/"} />

			{/* Header */}
			<Header />

			{/* Page Content starts here */}
			<main className={`${styles.HomePage}`}>
				<Banner />
				<Bearings />
				<SinceYear />
				<section className={`${styles.bearings_section} ptb_100 circle_trigger`}>
					<div className={`${styles.circle_section}`}>
						<div className={`${styles.circle} circle_animaction`}>
							<div className={`${styles.bearings_1}`}>
								<img
									src={industrialBearings.src}
									className="img-responsive"
									alt="Industrial Bearings"
								/>
							</div>
							<div className={`${styles.bearings_2}`}>
								<img
									src={automotiveBearings.src}
									className="img-responsive"
									alt="Industrial Bearings"
								/>
							</div>
							<div className={`${styles.bearings_3}`}>
								<img
									src={oilSeals.src}
									className="img-responsive"
									alt="Industrial Bearings"
								/>
							</div>
						</div>
						<div className={`${styles.bearings_text}`}>
							<div className={`${styles.bearings_text_1} bearings_text_1`}>
								<p className="text_reg">Products</p>
								<h2 className="text_xxl pb_10">Industrial Bearings</h2>
								<h4 className="text_lg pb_20">
									Best-in-class bearings for all your industrial needs.
								</h4>
								<a href="#">
									<PrimaryButton download={download_img.src} title="Know More" />
								</a>
							</div>
							<div className={`${styles.bearings_text_1} bearings_text_2`}>
								<p className="text_reg">Products</p>
								<h2 className="text_xxl pb_10">Automotive Bearings</h2>
								<h4 className="text_lg pb_20">
									Smooth movement with the excellence of German technology.
								</h4>
								<a href="#">
									<PrimaryButton download={download_img.src} title="Know More" />
								</a>
							</div>
							<div className={`${styles.bearings_text_1} bearings_text_3`}>
								<p className="text_reg">Products</p>
								<h2 className="text_xxl pb_10">Oil Seals</h2>
								<h4 className="text_lg pb_20">
									Compact solutions for high machinery performance
								</h4>
								<a href="#">
									<PrimaryButton download={download_img.src} title="Know More" />
								</a>
							</div>
						</div>
					</div>
				</section>

				<section
					className={`${styles.image_animaction_section} pb_100 image_animaction_section`}
				>
					<div className={`${styles.image_animaction} image_animaction`}>
						<img src={imageBg.src} className="img-responsive img" alt="Bg Image" />
					</div>
					<div className="container">
						<div className={`${styles.text_animaction} pt_50`}>
							<h2 className="text_xxl l_s_m text_center toTop" data-scroll>
								Our state-of-the-art <span> German technology</span> reinforces our
								years of experience, ropelling us towards manufacturing top-grade
								products that make your lives smoother.
							</h2>
							<div className={`${styles.btn_section} pt_50 toTop`} data-scroll>
								<a href="#">
									<PrimaryButton download={download_img.src} title="Know More" />
								</a>
							</div>
						</div>
					</div>
				</section>
				<Our />
				<Service />
				<BrochureDownload />
				<section className={`${styles.address} pb_100 pt_40`}>
					<div className="container">
						<div className={`${styles.address_section}`}>
							<div className={`${styles.address_box} toTop`} data-scroll>
								<h3 className="text_xl l_s_m pb_10">Lager, Germany</h3>
								<p className="text_lg l_s_m">
									Special bearing manufacturing facility & Technical team unit
								</p>
							</div>
							<div className={`${styles.address_box} toTop`} data-scroll>
								<h3 className="text_xl l_s_m pb_10">Lager, India</h3>
								<p className="text_lg l_s_m">Global warehouse & logistical hub</p>
							</div>
							<div className={`${styles.address_box} toTop`} data-scroll>
								<h3 className="text_xl l_s_m pb_10">Lager, China</h3>
								<p className="text_lg l_s_m">P1 & P2 manufacturing facilities</p>
							</div>
						</div>
						<div className={`${styles.mail} pt_60 toTop`} data-scroll>
							<ul>
								<li className="pb_20">
									<a
										href="mailto:info@lagerbearings.com"
										className={`${styles.mail_text} text_xl l_s_m pb_10`}
									>
										info@lagerbearings.com
									</a>
								</li>
								<li>
									<a href="tel:+91 70219 76314" className="text_xl l_s_m">
										+91 70219 76314
									</a>
								</li>
							</ul>
						</div>
					</div>
				</section>
			</main>
			{/* Page Content ends here */}

			{/* Footer */}
			<Footer />
		</div>
	);
}
