/* eslint-disable @next/next/no-html-link-for-pages */
// MODULES //
import React, { useEffect, useState } from "react";
// COMPONENTS //
import Link from "next/link";
import PrimaryButton from "../components/primary-button";
// SECTIONS //

// PLUGINS //

// STYLES //
import styles from "../styles/components/Header.module.scss";

// IMAGES //
import csml_logo from "../../public/img/csml_logo.svg";
import mobile_logo from "../../public/img/csml_logo.svg";
import close from "../../public/img/close.svg";
import download_img from "../../public/img/home/download.svg";
// import menu_down_aarow from "../../public/img/menu_down_aarow.svg";

/** Header Component */
const Header = () => {
	const [sidebarActive, setSidebarActive] = useState(false);
	const [scroll, setScroll] = useState(false);
	const [toggleState, settoggleState] = useState(0);

	/** toggleTab */
	const toggleTab = (index) => {
		if (toggleState == index) {
			return settoggleState(null);
		}
		settoggleState(index);
	};

	useEffect(() => {
		let hamburger = document.getElementById("hamburger");
		window.addEventListener("scroll", () => {
			setScroll(window.scrollY > 50);
			if (window.scrollY > 50) {
				hamburger.classList.add(`${styles.ham_style}`);
			} else {
				hamburger.classList.remove(`${styles.ham_style}`);
			}
		});

		let calHeight = document.querySelector("header");
		setTimeout(function () {
			calHeight.classList.add(`${styles.zIndex}`);
		}, 2400);
		let height = calHeight.offsetHeight + "px";
		// console.log(height);

		document.documentElement.style.setProperty("--headerHeight", height);
	}, []);
	return (
		<header
			id="hamburger"
			className={`${styles.main_header} ${scroll ? styles.scrolled_bg : " "}`}
		>
			<div className="container">
				<div className={`${styles.header_box}`}>
					<div className={`${styles.header_logo}`}>
						<a href="/">
							<img
								src={csml_logo.src}
								className={`${styles.noscroll_logo}`}
								alt="csml logo"
							/>
							<img
								src={mobile_logo.src}
								className={`${styles.scrolled_logo}`}
								alt="csml logo"
							/>
						</a>
					</div>
					<div className={`${styles.header_list} ${styles.header_list_mobile}`}>
						<div className={styles.menu_title}>
							<div className={styles.title}>
								<Link href="/contact">
									<a href="#">
										<PrimaryButton
											light
											download={download_img.src}
											title="Download Brochure"
										/>
									</a>
								</Link>
							</div>
							<div
								onClick={() => setSidebarActive(!sidebarActive)}
								className={`${styles.humberg} ${
									sidebarActive ? styles.close_icon : ""
								}`}
							>
								<p>
									<span></span>
									<span></span>
									<span></span>
								</p>
							</div>
						</div>
					</div>

					<div
						className={`${styles.menu_right_open} ${
							sidebarActive ? styles.active : ""
						}`}
					>
						<div className={`${styles.menu_list}`}>
							<div
								onClick={() => setSidebarActive(!sidebarActive)}
								className={`${styles.close_box}`}
							>
								<img src={close.src} className={`${styles.close_arrow}`} alt="close" />
							</div>
							<ul className={`${styles.list_ul}`}>
								<li onClick={() => setSidebarActive(!sidebarActive)}>
									<Link href="/">
										<a className="text_lg l_r">About Us</a>
									</Link>
								</li>
								<li onClick={() => setSidebarActive(!sidebarActive)}>
									<Link href="/">
										<a className="text_lg l_r">Our Products</a>
									</Link>
								</li>
								<li onClick={() => setSidebarActive(!sidebarActive)}>
									<Link href="/">
										<a className="text_lg l_r">Industrial Solutions</a>
									</Link>
								</li>
								<li onClick={() => setSidebarActive(!sidebarActive)}>
									<Link href="/">
										<a className="text_lg l_r">Service Support</a>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
