import React from "react";
import {Link} from "react-router-dom";

const Projects = () => {
    return <section className="projects">
        <h2>the work</h2 >
        <div className="cont">
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="project">
                    <img src="assets/img/rubik_background2.jpg" alt=""/>
                    <Link
                        className="over-area color-1"
                        href="javascript:void(0)"
                        onClick="rubik.showModal(this)"
                        data-target="project_1">
                        <div className="content">
                            <h4>Sol 25</h4>
                            <p>Click for more...
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="project">
                    <img src="assets/img/rubik_background2.jpg" alt=""/>
                    <Link
                        className="over-area color-1"
                        href="javascript:void(0)"
                        onClick="rubik.showModal(this)"
                        data-target="project_2">
                        <div className="content">
                            <h4>Villa Positano</h4>
                            <p>Click for more...
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="project">
                    <img src="assets/img/rubik_background2.jpg" alt=""/>
                    <Link
                        className="over-area color-1"
                        href="javascript:void(0)"
                        onClick="rubik.showModal(this)"
                        data-target="project_3">
                        <div className="content">
                            <h4>House 2413</h4>
                            <p>Click for more...
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="project">
                    <img src="assets/img/rubik_background2.jpg" alt=""/>
                    <Link
                        className="over-area color-1"
                        href="javascript:void(0)"
                        onClick="rubik.showModal(this)"
                        data-target="project_4">
                        <div className="content">
                            <h4>Elwood House</h4>
                            <p>Click for more...
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="project">
                    <img src="assets/img/rubik_background2.jpg" alt=""/>
                    <Link
                        className="over-area color-1"
                        href="javascript:void(0)"
                        onClick="rubik.showModal(this)"
                        data-target="project_5">
                        <div className="content">
                            <h4>Brandywine House</h4>
                            <p>Click for more...
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="project">
                    <img src="assets/img/rubik_background2.jpg" alt=""/>
                    <Link
                        className="over-area color-1"
                        href="javascript:void(0)"
                        onClick="rubik.showModal(this)"
                        data-target="project_6">
                        <div className="content">
                            <h4>ICRAVE Office</h4>
                            <p>Click for more...
                            </p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section >
}
export default Projects;