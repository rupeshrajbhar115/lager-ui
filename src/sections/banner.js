// MODULES //

// COMPONENTS //

// STYLES //
import styles from "@/styles/sections/banner.module.scss";

// PLUGINS //

// IMAGES //
import Down from "../../public/img/home/down.svg";

// UTILS //

/** Banner component */
export default function Banner() {
	return (
		<section className={`${styles.banner_wrapper} banner_anim`}>
			<div className={`${styles.banner}`}>
				<div className={`${styles.banner_video}`}>
					<div className={`${styles.scroll_down}`}>
						<img src={Down.src} className="img-responsive" alt="Down Arrow" />
						<h6 className="text_reg color_white">Scroll</h6>
					</div>
				</div>
				<div className={`${styles.video}`}>
					<video
						playsInline
						autoPlay
						loop
						muted
						className={`${styles.video_box}`}
						id="videoRef"
					>
						<source
							src={
								"https://sphearorigin.tinglabs.in/uploads/SPEHERE_ORIGIN_15_SEC_02052024_1920_X1080_3_1_2_78b90f435d.mp4"
							}
							type="video/mp4"
						/>
					</video>
				</div>
			</div>
			<div
				className={`${styles.banner_title} color_white banner_title_animaction`}
			>
				Engineered for perfection
			</div>
		</section>
	);
}
