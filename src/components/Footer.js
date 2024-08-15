// MODULES //
import Link from "next/link";

// COMPONENTS //
import PrimaryButton from "../../src/components/primary-button";

// SECTIONS //

// PLUGINS //

// UTILS //

// STYLES //
import styles from "@/styles/components/Footer.module.scss";

// IMAGES //

// DATA //
import download_img from "../../public/img/home/download.svg";
import Logo from "../../public/img/home/black_logo.svg";
import made from "../../public/img/made.svg";
import fb from "../../public/img/fb.svg";
import tw from "../../public/img/tw.svg";
import insta from "../../public/img/insta.svg";
import you from "../../public/img/you.svg";

/** Footer Component */
export default function Footer() {
	return (
		<footer className={`${styles.main_footer} toTop`} data-scroll>
			<div className={`${styles.top_footer} toTop`} data-scroll>
				<div className="container">
					<div className={`${styles.footer_box}`}>
						<div className={`${styles.logo}`}>
							<img src={Logo.src} className="img-responsive" />
						</div>
						<div className={`${styles.page_name}`}>
							<ul>
								<li>
									<Link href="" className="text_reg l_r">
										About Us
									</Link>
								</li>
								<li>
									<Link href="" className="text_reg l_r">
										Our Products
									</Link>
								</li>
								<li>
									<Link href="" className="text_reg l_r">
										Industrial Solutions
									</Link>
								</li>
								<li>
									<Link href="" className="text_reg l_r">
										Service Support
									</Link>
								</li>
							</ul>
						</div>
						<div className={`${styles.btn}`}>
							<PrimaryButton download={download_img.src} title="Download Brochure" />
						</div>
					</div>
				</div>
			</div>
			<div className={`${styles.bottom_footer} toTop`} data-scroll>
				<div className="container">
					<div className={`${styles.footer_box}`}>
						<div className={`${styles.copy}`}>
							<h6 className="text_reg l_r">© 2023 Lager Inc.</h6>
						</div>
						<div className={`${styles.logo_social}`}>
							<img src={fb.src} className="img-responsive" />
							<img src={tw.src} className="img-responsive" />
							<img src={insta.src} className="img-responsive" />
							<img src={you.src} className="img-responsive" />
						</div>
						<div className={`${styles.logo}`}>
							<img src={made.src} className="img-responsive" />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
