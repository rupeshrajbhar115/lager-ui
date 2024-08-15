// MODULES //

// COMPONENTS //

// SECTIONS //

// IMAGE //

// PLUGINS //

// STYLES //
import styles from "@/styles/sections/Address.module.scss";

/** Our Component */
export default function AddressCity() {
	return (
		<div className={`${styles.address} ptb_100`}>
			<div className="container">
				<div className={`${styles.address_section}`}>
					<div className={`${styles.address_box}`}>
						<h3 className="text_xl l_s_m pb_10">Lager, Germany</h3>
						<p className="text_lg l_s_m">
							Special bearing manufacturing facility & Technical team unit
						</p>
					</div>
					<div className={`${styles.address_box}`}>
						<h3 className="text_xl l_s_m pb_10">Lager, India</h3>
						<p className="text_lg l_s_m">Global warehouse & logistical hub</p>
					</div>
					<div className={`${styles.address_box}`}>
						<h3 className="text_xl l_s_m pb_10">Lager, China</h3>
						<p className="text_lg l_s_m">P1 & P2 manufacturing facilities</p>
					</div>
				</div>
				<div className={`${styles.mail}`}>
					<ul>
						<li>
							<a href="mailto:info@lagerbearings.com" className="text_xl l_s_m pb_10">
								info@lagerbearings.com
							</a>
						</li>
						<li>
							<a href="tel:+91 70219 76314" className="text_xl l_s_m">
								+91 70219 76314
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
		</div>
	);
}
