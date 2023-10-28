import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { Icon } from "@iconify/react";
import filterIcon from "@iconify-icons/mi/filter";
import bagIcon from "@iconify-icons/bi/bag";
import userIcon from "@iconify-icons/mi/user";
import { connect } from "react-redux";
import { useLocation } from "react-router";
import { updateFilter } from "../../store/filter";
import { toggleMiniCart } from "../../store/miniCart";
import { toggleAuthBar } from "../../store/authBar";
import ContactPage from "../../Pages/ContactPage.js";
import logo from "../../Assets/logo.png";
import adgitm from "../../Assets/adgitm.png";

 function Nav() {
	return (
		<div className={styles.NavWrapper}>
			<div className={styles.centerHead}>
				<Link to="/" className="Link">
					<p>Home</p>
				</Link>
				<Link to="/products" className="Link">
					<p>Products</p>
				</Link>
				<p>About</p>
				<Link to="/ContactPage" className="Link">
					<p>Contact Us</p>
				</Link>
			</div>
		</div>
	);
}



function Header({ className, cart, auth, user, filter, dispatch, miniCart, authBar, ...props }) {
	let [cartNumber, updateCartNumber] = useState(null);
	let location = useLocation();

	const [centerHeadVisible, setCenterHeadVisible] = useState(false);

	const toggleCenterHead = () => {
		setCenterHeadVisible(!centerHeadVisible);
	};

	useEffect(() => {
		const header = document.querySelector("header");
		const headerHeight = header.getBoundingClientRect().height;
		document.body.style.setProperty("--header-height", `${headerHeight}px`);
	}, []);

	const closeOtherThings = () => {
		if (filter.show) dispatch(updateFilter({ ...filter, show: false }));
		if (miniCart.show) dispatch(toggleMiniCart());
		if (authBar.show) dispatch(toggleAuthBar());
	};

	const toggleProductFilter = () => {
		if (!filter.show) closeOtherThings();
		dispatch(updateFilter({ ...filter, show: !filter.show }));
	};

	const toggleMiniCartShow = () => {
		if (!miniCart.show) closeOtherThings();
		dispatch(toggleMiniCart());
	};

	// calculate number to show on cart icon
	useEffect(() => {
		if (!auth || !cart) {
			updateCartNumber(null);
			return;
		}

		const cartKeys = Object.keys(cart).length;
		updateCartNumber(cartKeys);
	}, [auth, cart]);

	const onUserIconClick = () => {
		if (!authBar.show) closeOtherThings();
		dispatch(toggleAuthBar());
	};

	const [isOpen, setIsOpen] = useState(false);

  // Close the sidebar when a route change occurs
  useEffect(() => {
    setIsOpen(false);
  }, [location]);



	return (
		<header className={[styles.header, className].join(" ")} {...props}>
			<div className={styles.brandBox}>
				<div className={styles.CollgelogoDiv}>
					<div className={styles.collgeLogo}>
						<a href="https://adgitmdelhi.ac.in/" target="_blank" rel="noreferrer">
							<img src={adgitm} alt="" />
						</a>
					</div>

					<div>
						<Link to="/" className="Link">
							<p className={styles.name}>DARPAN</p>
						</Link>

						<p className={styles.subHeading}>The Enactus ADGITM Store</p>
					</div>
				</div>

				<Nav />

				<div className={styles.logo}>
					<a href="https://enactusadgitm.in/" target="_blank" rel="noreferrer">
						<img src={logo} alt="" />
					</a>
				</div>
			</div>

			<div className={styles.nav}>
				{location.pathname === "/products" && (
					<div className={styles.filterIconWrapper} onClick={toggleProductFilter}>
						<Icon icon={filterIcon} />
					</div>
				)}
				<div className={styles.userIconWrapper} onClick={onUserIconClick}>
					<Icon icon={userIcon}></Icon>
				</div>
				<div className={styles.cartIconWrapper} onClick={toggleMiniCartShow}>
					<Icon icon={bagIcon}></Icon>
					<span className={styles.cartNumber}>{cartNumber}</span>
				</div>
			</div>
		</header>
	);
}

const mapStateToProps = (state, ownProps) => ({
	...ownProps,
	auth: state.auth,
	user: state.user,
	cart: state.cart,
	filter: state.filter,
	authBar: state.authBar,
	miniCart: state.miniCart,
});

export default connect(mapStateToProps)(Header);
