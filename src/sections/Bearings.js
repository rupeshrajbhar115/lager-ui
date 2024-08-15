// MODULES //

// COMPONENTS //

// SECTIONS //

// IMAGE //
import bearingsAnimation1 from "../../public/img/home/bearings_animation_1.png";
import bearingsAnimation2 from "../../public/img/home/bearings_animation_2.png";
import bearingsAnimation3 from "../../public/img/home/bearings.png";

// PLUGINS //

// STYLES //
import styles from "@/styles/sections/Bearings.module.scss";

/** Bearings Component */
export default function Bearings() {
	return (
		<section className={`${styles.bearings} bearings_animation`}>
			<div className="container">
				<div className={`${styles.bearings_section}`}>
					<div className={`${styles.bearings_img_info}`}>
						<div className={`${styles.bearings_info}`}>
							<div className="pt_100">
								{/* <div className={`${styles.banner_title}`}>
									Engineered for perfection
								</div> */}
								<p className="pt_100 text_lg toTop" data-scroll>
									Premium solutions that enhance motion. Assisted by advanced German
									technology for high-class personalised solutions.
								</p>
								{/* <PrimaryButton title="Know More" /> */}
							</div>
						</div>
						<div className={`${styles.bearings_section}`}>
							<div className={`${styles.bearings_img} bearings_img`}>
								<img src={bearingsAnimation1.src} className="img-responsive" />
							</div>
							<div className={`${styles.bearings_img} bearings_img`}>
								<img src={bearingsAnimation2.src} className="img-responsive" />
							</div>
							<div className={`${styles.bearings_img} bearings_img`}>
								<img src={bearingsAnimation3.src} className="img-responsive" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
