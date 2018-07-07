import LoadComponent from '../components/loader';
import HeaderComponent from '../components/header';
import NavComponent from '../components/nav';
import axios from 'axios';
import {getCookies} from "../utils/cookies";

import React, { Component } from "react";

class Tutorial extends Component {
    constructor (props) {
        super(props);

        this.state = {
            program: [],
            user: {},
            isLoading: true
        }
    }

    componentDidMount () {
        var catchLog = JSON.parse(decodeURIComponent(getCookies('PDCLOGID')));
        if(catchLog) {
            axios.get(`http://localhost:4000/user/${catchLog.u}`).then(res => {
                if(res.data) this.setState({user: res.data, isLoading: false})
            })
        }else {
            window.location.pathname = '/';
        }
    }

    render () {
        const {user, isLoading} = this.state;

        if(isLoading) {
            return (<LoadComponent />)
        }else {
            return (
                <div>
                    <div id="pcoded" className="pcoded">
                        <HeaderComponent user={user} />
                    
                        <div className="pcoded-main-container">
                            <div className="pcoded-wrapper">
                                <NavComponent user={user} />

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
                                                                                                        <input style={{marginTop: '4px'}} type="radio"/><label style={{margin: '0 5px 0px 5px'}}>0</label>
                                                                                                        <input style={{marginTop: '4px'}} type="radio"/><label style={{margin: '0 5px 0px 5px'}}>1</label>
                                                                                                        <input style={{marginTop: '4px'}} type="radio"/><label style={{margin: '0 5px 0px 5px'}}>2</label>
                                                                                                        <input style={{marginTop: '4px'}} type="radio"/><label style={{margin: '0 5px 0px 5px'}}>3</label>
                                                                                                        <input style={{marginTop: '4px'}} type="radio"/><label style={{margin: '0 5px 0px 5px'}}>4</label>
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
                </div>
            );
        }
    }
}
export default Tutorial;
