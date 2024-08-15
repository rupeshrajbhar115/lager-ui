// MODULES //

// COMPONENTS //
import PrimaryButton from "../components/primary-button";

// SECTIONS //

// IMAGE //
import Since from "../../public/img/home/since.png";
import download_img from "../../public/img/home/btn_arrow.svg";

// PLUGINS //

// STYLES //
import styles from "@/styles/sections/Since.module.scss";

/** Since Component */
export default function SinceYear() {
	return (
		<div className={`${styles.since} pb_100`}>
			<div className="container">
				<div className={`${styles.since_section} toTop`} data-scroll>
					<div className={`${styles.since_box}`}>
						<div className={`${styles.left_box} toTop`} data-scroll>
							<h6 className="pb_10">Since 1907</h6>
							<div className="text_xxl pb_30">Our world revolves around rotation</div>
							<a href="#">
								<PrimaryButton download={download_img.src} title="Know More" />
							</a>
						</div>
						<div className={`${styles.right_box} toTop`} data-scroll>
							<p className="text_reg toTop" data-scroll>
								Bearings have enabled the growth of industries, revolutionized
								transportation, and enhanced the overall quality of human life. And SKF
								has been there for the better part of the process.
							</p>
							<p className="text_reg pt_20 toTop" data-scroll>
								Over time, we’ve kept pushing the boundaries of what’s possible. And
								today, we continue to develop bearing technologies that support progress
								and contribute to a better everyday life, now, and tomorrow.
							</p>
						</div>
					</div>
					<div className={`${styles.since_img}`}>
						<img
							src={Since.src}
							className="img-responsive toZoom"
							alt="Since Image"
							data-scroll
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
