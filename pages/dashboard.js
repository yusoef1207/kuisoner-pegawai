
const Dashboard = () => (
	<div>

		<div className="theme-loader">
			<div className="ball-scale">
				<div></div>
			</div>
		</div>

		<div id="pcoded" className="pcoded">
			<div className="pcoded-overlay-box"></div>
			<div className="pcoded-container navbar-wrapper">

				<nav className="navbar header-navbar pcoded-header" >
					<div className="navbar-wrapper">
						<div className="navbar-logo" data-navbar-theme="theme4">
							<a className="mobile-menu" id="mobile-collapse" href="#!">
								<i className="ti-menu"></i>
							</a>
							<a className="mobile-search morphsearch-search" href="#">
								<i className="ti-search"></i>
							</a>
							<a href="#!">
								Personality Development Center
							</a>
							<a className="mobile-options">
								<i className="ti-more"></i>
							</a>
						</div>
						<div className="navbar-container container-fluid">
							<ul className="nav-left">
								<li>
									<div className="sidebar_toggle"><a href="javascript:void(0)"><i className="ti-menu"></i></a></div>
								</li>
								<li>
									<a href="#!" onClick="">
										<i className="ti-fullscreen"></i>
									</a>
								</li>
							</ul>


							<ul className="nav-right">
								<li className="user-profile header-notification">
									<a href="#!">
										<img src="/static/images/user.png" alt="User-Profile-Image" />
										<span>Supriadi</span>
										<i className="ti-angle-down"></i>
									</a>
									<ul className="show-notification profile-notification">
										<li>
											<a href="auth-lock-screen.html">
												<i className="ti-lock"></i> Lock Screen
											</a>
										</li>
										<li>
											<a href="#!">
												<i className="ti-layout-sidebar-left"></i> Logout
											</a>
										</li>
									</ul>
								</li>
							</ul>
							<div className="upgrade-button m-r-10 f-right">
								<a href="#" className="icon-circle txt-white btn btn-sm btn-warning upgrade-button">
									<span>ID : 92131293</span>
								</a>
							</div> 
						</div>
					</div>
				</nav>	
			</div>
		
			<div className="pcoded-main-container">
				<div className="pcoded-wrapper">
					<nav className="pcoded-navbar" >
						<div className="sidebar_toggle"><a href="#"><i className="icon-close icons"></i></a></div>
							<div className="pcoded-inner-navbar main-menu">
							<div className="">
								<div className="main-menu-header">
									<img className="img-40" src="/static/images/user.png" alt="User-Profile-Image" />
									<div className="user-details">
									<span>Supriadi</span>
									<span id="more-details">Office Boy</span>
								</div>
							</div>
						</div>
						<div className="pcoded-navigatio-lavel">Side Menu</div>
							<ul className="pcoded-item pcoded-left-item">
								<li className="active pcoded-trigger ">
									<a href="index.html ">
										<span className="pcoded-micon"><i className="ti-layout-grid2-alt"></i></span>
										<span className="pcoded-mtext">Dashboard</span>
										<span className="pcoded-mcaret"></span>
									</a>
								</li>
							</ul>
							<ul className="pcoded-item pcoded-left-item">
								<li className="">
									<a href="javascript:void(0)">
										<span className="pcoded-micon"><i className="ti-crown"></i></span>
										<span className="pcoded-mtext">Your Score</span>
										<span className="pcoded-mcaret"></span>
									</a>
								</li>
								<li className="">
									<a href="javascript:void(0)">
										<span className="pcoded-micon"><i className="ti-lock"></i></span>
										<span className="pcoded-mtext">Logout</span>
										<span className="pcoded-mcaret"></span>
									</a>
								</li>
							</ul>
						</div>
					</nav>
					<div className="pcoded-content">
						<div className="pcoded-inner-content">

							<div className="main-body">
								<div className="page-wrapper">
									<div className="page-header">
										<div className="page-header-title">
											<h4>Dashboard</h4>
										</div>
										<div className="page-header-breadcrumb">
											<ul className="breadcrumb-title">
												<li className="breadcrumb-item">
													<a href="#!">
														<i className="icofont icofont-home"></i>
													</a>
												</li>
												<li className="breadcrumb-item"><a href="#!">Dashboard</a>
												</li>
											</ul>
										</div>
									</div>
									<div className="page-body">
										<div className="row">
											<div className="col-md-12 col-lg-4">
												<a href="before_start.html">
													<div className="card table-card widget-success-card">
														<div className="">
															<div className="row-table">
																<div className="col-sm-3 card-block-big">
																	<i className="icofont icofont-trophy-alt"></i>
																</div>
																<div className="col-sm-9">
																	<h4>Personality Test</h4>
																	<h6>30 Question</h6>
																</div>
															</div>
														</div>
													</div>
												</a>
											</div>
											<div className="col-md-12 col-lg-4">

												<a href="before_start.html">
													<div className="card table-card widget-primary-card">
														<div className="">
															<div className="row-table">
																<div className="col-sm-3 card-block-big">
																	<i className="icofont icofont-star"></i>
																</div>
																<div className="col-sm-9">
																	<h4>Social Test</h4>
																	<h6>40 Question</h6>
																</div>
															</div>
														</div>
													</div>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
		</div>

		<div className="fixed-button">
			<a href="#!" className="btn btn-md btn-primary">
				<i className="fa fa-shopping-cart" aria-hidden="true"></i> Need A Help ?
			</a>
		</div>
	</div>
);

export default Dashboard;
