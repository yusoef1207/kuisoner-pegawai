
const Tutorial = () => (
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
                                            <h4 style={{fontSize:'30px'}}>PT. Roosled Sinergi Minterindo</h4>
                                        </div>
                                        <div className="page-header-breadcrumb">
                                            <ul className="breadcrumb-title">
                                                <li className="breadcrumb-item">
                                                    <a href="#!">
                                                        <i className="icofont icofont-home"></i>
                                                    </a>
                                                </li>
                                                <li className="breadcrumb-item"><a href="#!">Employment Personality Test</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="page-body">
                                       
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h5 style={{textTransform:'none'}}>Pilih jawaban anda dengan klik salah satu skala angka 0-4</h5>
                                                        <span>
                                                            <div style={{margin: '0px', fontSize: '14px'}} className="label-main">
                                                                    <label className="label label-info">0 = Sangat tidak setuju</label>
                                                            </div>
                                                            <div style={{margin: '0px', fontSize: '14px'}} className="label-main">
                                                                    <label className="label label-info">1 = Tidak setuju </label>
                                                            </div>
                                                            <div style={{margin: '0px', fontSize: '14px'}} className="label-main">
                                                                    <label className="label label-info">2 = Ragu-ragu </label>
                                                            </div>
                                                            <div style={{margin: '0px', fontSize: '14px'}} className="label-main">
                                                                    <label className="label label-info">3 = Setuju</label>
                                                            </div>
                                                            <div style={{margin: '0px', fontSize: '14px'}} className="label-main">
                                                                    <label className="label label-info">4 =  Sangat setuju</label>
                                                            </div>
                                                        </span>
                                                        <div className="card-header-right">
                                                            <i className="icofont icofont-rounded-down"></i>
                                                        </div>
                                                    </div>
                                                    <div className="card-block">
                                                        <div className="row">
                                                            <div className="col-lg-12 col-lg-12">
                                                                <div className="sub-title">Waktu Test : 
                                                                        <label style={{fontSize: '15px'}} className="badge badge-inverse-success">00 : 30 : 00</label>
                                                                        <span style={{display:'inline-block', textAlign:'right', float:'right'}}>
                                                                            <label style={{fontSize: '15px'}} className="badge badge-inverse-danger">Mohon dilengkapi semua pertanyaan</label>
                                                                        </span>
                                                                </div>                                        
                                                                <ul className="nav nav-tabs tabs" role="tablist" style={{overflowY:'hidden'}}>
                                                                    <li className="nav-item">
                                                                        <a className="nav-link active" data-toggle="tab" href="#home1" role="tab">1-10
                                                                            <label className="badge badge-danger" style={{marginBottom:'0px', fontSize: '15px'}}>5</label>
                                                                        </a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className="nav-link" data-toggle="tab" href="#profile1" role="tab">11-20</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className="nav-link" data-toggle="tab" href="#messages1" role="tab">21-30</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className="nav-link" data-toggle="tab" href="#settings1" role="tab">31-40</a>
                                                                    </li>
                                                                    
                                                                    
                                                                </ul>
                                                                <div className="tab-content tabs card-block">
                                                                    <div className="tab-pane active" id="home1" role="tabpanel">
                                                                        <div className="table-responsive">
                                                                            <table className="table table-hover">
                                                                                <thead>
                                                                                    <tr>
                                                                                        <th>#</th>
                                                                                        <th>Question</th>
                                                                                        <th>Your Oppinion</th>
                                                                                    </tr>
                                                                                </thead>   
                                                                                <tbody id="row">
                                                                                    <tr >
                                                                                        <th scope="row">'+ i +'</th> 
                                                                                        <td style={{whiteSpace:'normal'}}>  
                                                                                            <p>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem </p> 
                                                                                        </td>
                                                                                        <td>  
                                                                                            <input style={{marginTop: '4px'}} type="radio"/><label style={{margin: '0 5px 0px 5px'}} for="">0</label>
                                                                                            <input style={{marginTop: '4px'}} type="radio"/><label style={{margin: '0 5px 0px 5px'}} for="">1</label>
                                                                                            <input style={{marginTop: '4px'}} type="radio"/><label style={{margin: '0 5px 0px 5px'}} for="">2</label>
                                                                                            <input style={{marginTop: '4px'}} type="radio"/><label style={{margin: '0 5px 0px 5px'}} for="">3</label>
                                                                                            <input style={{marginTop: '4px'}} type="radio"/><label style={{margin: '0 5px 0px 5px'}} for="">4</label>
                                                                                        </td> 
                                                                                    </tr>
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                    </div>
                                                                    <div className="tab-pane" id="profile1" role="tabpanel">
                                                                        <p className="m-0">2.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>
                                                                    </div>
                                                                    <div className="tab-pane" id="messages1" role="tabpanel">
                                                                        <p className="m-0">3. This is Photoshop's version of Lorem IpThis is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean mas Cum sociis natoque penatibus et magnis dis.....</p>
                                                                    </div>
                                                                    <div className="tab-pane" id="settings1" role="tabpanel">
                                                                        <p className="m-0">4.Cras consequat in enim ut efficitur. Nulla posuere elit quis auctor interdum praesent sit amet nulla vel enim amet. Donec convallis tellus neque, et imperdiet felis amet.</p>
                                                                    </div>
                                                                </div>
                                                                <ul className="nav nav-tabs tab-below tabs" role="tablist">
                                                                    <li className="nav-item">
                                                                        <a className="nav-link active" data-toggle="tab" href="#home1" role="tab">1-10
                                                                                <label className="badge badge-danger" style={{marginBottom:'0px'}}>5</label>
                                                                        </a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className="nav-link" data-toggle="tab" href="#profile1" role="tab">11-20</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className="nav-link" data-toggle="tab" href="#messages1" role="tab">21-30</a>
                                                                    </li>
                                                                    <li className="nav-item">
                                                                        <a className="nav-link" data-toggle="tab" href="#settings1" role="tab">31-40</a>
                                                                    </li>
                                                                </ul>
                                                                <div className="row">
                                                                    <div className="col-md-6 offset-md-6" style={{textAlign:'right', fontSize:'17px'}}>
                                                                        <label className="label label-inverse-primary"><i className="ti-angle-double-left"></i> Sebelumnya</label>
                                                                        <label className="label label-inverse-primary">Berikutnya<i className="ti-angle-double-right"></i></label>
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

export default Tutorial;
