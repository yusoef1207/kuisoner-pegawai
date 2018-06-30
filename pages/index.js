import Header from "../components/header";


const Index = () => (
	
	<section className="login p-fixed d-flex text-center bg-primary common-img-bg">

		<div className="container-fluid">
			<div className="row">
				<div className="col-sm-12">
					<div className="login-card card-block auth-body">
						<form className="md-float-material" >
							<div className="auth-box">
								<div className="row m-b-20">
									<div className="col-md-12">
										<h3 className="text-center txt-primary">Sign In PDC Online Psikotest</h3>
									</div>
								</div>

								<div className="input-group">
									<input type="email" className="form-control" placeholder="Username" />
									<span className="md-line"></span>
								</div>
								<div className="input-group">
									<input type="password" className="form-control" placeholder="password" />
									<span className="md-line"></span>
								</div>
								<div className="row m-t-25 text-left">
									<div className="col-sm-6 col-xs-12">
										<div className="checkbox-fade fade-in-primary">
											<label>
												<input type="checkbox" value="" />
												<span className="cr"><i className="cr-icon icofont icofont-ui-check txt-primary"></i></span>
												<span className="text-inverse">Remember me</span>
											</label>
										</div>
									</div>
									<div className="col-sm-6 col-xs-12 forgot-phone text-right">
										<a href="auth-reset-password.html" className="text-right f-w-600 text-inverse"> Forget Password?</a>
									</div>
								</div>

								<div className="row m-t-30">
									<div className="col-md-12">
										<a href="dashboard" className="btn btn-primary btn-md btn-block waves-effect text-center m-b-20">LOGIN</a>
									</div>
								</div>
								<div className="row">
									<div className="col-md-9">
										<p className="text-inverse m-t-25 text-left">Don't have an account? <a href="dashboard"> Register here</a> </p>
									</div>
								</div>

							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

	</section>
);

export default Index;
