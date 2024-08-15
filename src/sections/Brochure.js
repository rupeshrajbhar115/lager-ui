// MODULES //
import Link from "next/link";

// COMPONENTS //
import PrimaryButton from "../components/primary-button";

// SECTIONS //

// IMAGE //
import download_img from "../../public/img/home/download.svg";
import Brochure from "../../public/img/home/brochure_img.png";

// PLUGINS //

// STYLES //
import styles from "../../src/styles/sections/Brochure.module.scss";

/** Footer Component */
const BrochureDownload = () => {
	return (
		<section className={`${styles.brochure} pb_80`}>
			<div className="container">
				<div className={`${styles.brochure_section} toTop`} data-scroll>
					<div className={`${styles.brochure_img} toTop`} data-scroll>
						<img src={Brochure.src} className="img-responsive" />
					</div>
					<div className={`${styles.brochure_info} toTop`} data-scroll>
						<h3 className="text_xl pb_30">
							Every product at Lager is crafted for perfection with the use of German
							technology. Here’s our product portfolio that displays an array of
							premium ball bearings.
						</h3>
						<PrimaryButton download={download_img.src} title="Download Brochure" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default BrochureDownload;
