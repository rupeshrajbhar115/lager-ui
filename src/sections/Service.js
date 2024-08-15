// MODULES //

// COMPONENTS //
import PrimaryButton from "../components/primary-button";

// SECTIONS //

// IMAGE //
import Icon1 from "../../public/img/home/icon_1.png";
import Icon2 from "../../public/img/home/icon_2.png";
import Icon3 from "../../public/img/home/icon_3.png";
import Icon4 from "../../public/img/home/icon_4.png";
import Icon5 from "../../public/img/home/icon_5.png";
import Icon6 from "../../public/img/home/icon_6.png";
import download_img from "../../public/img/home/btn_arrow.svg";

// PLUGINS //

// STYLES //
import styles from "@/styles/sections/Service.module.scss";

/** Service Component */
export default function Service() {
	return (
		<div className={`${styles.service} pt_50 pb_100`}>
			<div className="container">
				<div className={`${styles.service_section}`}>
					<div className="text_xxl pb_30 toTop" data-scroll>
						Service Support
					</div>
					<div className={`${styles.service_btn}`}>
						<p className={`${styles.text} toTop`} data-scroll>
							Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
							eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
							voluptua. At vero eos et
						</p>
						<div className={`${styles.btn} toTop`} data-scroll>
							<a href="#">
								<PrimaryButton download={download_img.src} title="Know More" />
							</a>
						</div>
					</div>
					<div className={`${styles.service_box} pt_60`}>
						<div className={`${styles.box} ptb_30 toTop`} data-scroll>
							<img src={Icon1.src} className="img-responsive" alt="Icon" />
							<h4 className="text_lg pt_10">Co-engineering Activities</h4>
						</div>
						<div className={`${styles.box} ptb_30 toTop`} data-scroll>
							<img src={Icon2.src} className="img-responsive" alt="Icon" />
							<h4 className="text_lg pt_10">Application Engineering</h4>
						</div>
						<div className={`${styles.box} ptb_30 toTop`} data-scroll>
							<img src={Icon3.src} className="img-responsive" alt="Icon" />
							<h4 className="text_lg pt_10">Advance Calculation Capabilities</h4>
						</div>
						<div className={`${styles.box} ptb_30 toTop`} data-scroll>
							<img src={Icon4.src} className="img-responsive" alt="Icon" />
							<h4 className="text_lg pt_10">Special Bearing Production</h4>
						</div>
						<div className={`${styles.box} ptb_30 toTop`} data-scroll>
							<img src={Icon5.src} className="img-responsive" alt="Icon" />
							<h4 className="text_lg pt_10">Innovative Solution</h4>
						</div>
						<div className={`${styles.box} ptb_30 toTop`} data-scroll>
							<img src={Icon6.src} className="img-responsive" alt="Icon" />
							<h4 className="text_lg pt_10">Maintenance Solution</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
