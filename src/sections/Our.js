// MODULES //

// COMPONENTS //
import PrimaryButton from "../../src/components/primary-button";

// SECTIONS //

// IMAGE //
import Our1 from "../../public/img/home/our_img_1.jpg";
import Our2 from "../../public/img/home/our_img_2.jpg";
import download_img from "../../public/img/home/btn_arrow.svg";

// PLUGINS //

// STYLES //
import styles from "@/styles/sections/Our.module.scss";

/** Our Component */
export default function Our() {
	return (
		<div className={`${styles.our} pb_100 pt_40 toTop`} data-scroll>
			<div className="container">
				<div className="text_xxl pb_30 text_center toTop" data-scroll>
					Our world revolves around rotation
				</div>
				<div className={`${styles.our_section}`}>
					<div className={`${styles.box} toTop`} data-scroll>
						<img src={Our1.src} className="img-responsive" alt="Our Image" />
						<div className={`${styles.info} pt_30`}>
							<h3 className="text_xl l_r ptb_10">OEM Solutions</h3>
							<p className="text_reg pb_30">
								We engineer processes, services and designing support according to the
								requirements of our clients. We provide high-end customised services to
								all major OEMS.
							</p>
							<a href="#">
								<PrimaryButton download={download_img.src} title="Know More" />
							</a>
						</div>
					</div>
					<div className={`${styles.box} toTop`} data-scroll>
						<img src={Our2.src} className="img-responsive" alt="Our Image" />
						<div className={`${styles.info} pt_30`}>
							<h3 className="text_xl l_r ptb_10">MRO Solutions </h3>
							<p className="text_reg pb_30">
								The replacement of ball bearings is part of typical maintenance
								schedules. We provide high-end customised services to all major MROs.
							</p>
							<a href="#">
								<PrimaryButton download={download_img.src} title="Know More" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
