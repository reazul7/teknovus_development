import React from "react";

function Typography() {
    return (
        <div className="container p-5">
            {/* ********** bg-color ********** */}
            <section>
                <h6 className="bg-secondary text-center">Background Color Classes</h6>
                <div className="row">
                    <div className="col-2 border bg-primary text-white px-2 py-1 m-1 w-6">bg-primary</div>
                    <div className="col-2 border bg-secondary text-white px-2 py-1 m-1">bg-secondary</div>
                    <div className="col-2 border bg-success text-white px-2 py-1 m-1">bg-success</div>
                    <div className="col-2 border bg-info text-white px-2 py-1 m-1">bg-info</div>
                    <div className="col-2 border bg-warning text-dark px-2 py-1 m-1">bg-warning</div>
                    <div className="col-2 border bg-danger text-white px-2 py-1 m-1">bg-danger</div>
                    <div className="col-2 border bg-light text-dark px-2 py-1 m-1">bg-light</div>
                    <div className="col-2 border bg-dark text-white px-2 py-1 m-1">bg-dark</div>
                </div>
            </section>

            {/* ********** text ********** */}
            <section>
                <h6 className="bg-secondary text-center mt-5">Background Color Classes</h6>
                <div className="row">
                    <div className="col-2 border text-primary m-1">
                        <p>text-primary</p>
                    </div>
                    <div className="col-2 border text-secondary m-1">
                        <p>text-secondary</p>
                    </div>
                    <div className="col-2 border text-success m-1">
                        <p>text-success</p>
                    </div>
                    <div className="col-2 border text-info m-1">
                        <p>text-info</p>
                    </div>
                    <div className="col-2 border text-warning m-1">
                        <p>text-warning</p>
                    </div>
                    <div className="col-2 border text-danger m-1">
                        <p>text-danger</p>
                    </div>
                    <div className="col-2 border text-dark m-1">
                        <p>text-dark</p>
                    </div>
                    <div className="col-2 border text-deactive m-1">
                        <p>text-deactive</p>
                    </div>
                    <div className="col-2 border text-white bg-dark m-1">
                        <p>text-white</p>
                    </div>
                </div>
            </section>

            {/* ********** Button ********** */}
            <h6 className="bg-secondary text-center mt-5">Buttons [btn]</h6>
            <section>
                {/* button without icon */}
                <button className="btn btn-primary">
                    <div className="btn-flex">
                        btn btn-primary
                        <span>{/* <i className="bx bx-plus"></i> */}</span>
                    </div>
                </button>

                {/* button with icon */}
                <button className="btn btn-success">
                    <div className="btn-flex">
                        btn btn-success
                        <span>
                            <i className="bx bx-plus"></i>
                        </span>
                    </div>
                </button>

                {/* button without icon */}
                <button className="btn btn-info">
                    <div className="btn-flex">
                        btn btn-info
                        <span>{/* <i className="bx bx-plus"></i> */}</span>
                    </div>
                </button>

                {/* button with icon */}
                <button className="btn btn-warning">
                    <div className="btn-flex">
                        btn btn-warning
                        <span>
                            <i className="bx bx-plus"></i>
                        </span>
                    </div>
                </button>

                {/* button without icon */}
                <button className="btn btn-danger">
                    <div className="btn-flex">
                        btn btn-danger
                        <span>{/* <i className="bx bx-plus"></i> */}</span>
                    </div>
                </button>

                {/* button with icon */}
                <button className="btn btn-disable">
                    <div className="btn-flex">
                        btn btn-disable
                        <span>
                            <i className="bx bx-plus"></i>
                        </span>
                    </div>
                </button>
            </section>

            {/* ********** Badge ********** */}
            <h6 className="bg-secondary text-center mt-5">Badges-Pill [badge]</h6>
            <section>
                <span className="badge bg-primary">badge bg-primary</span>
                <span className="badge bg-secondary">badge bg-secondary</span>
                <span className="badge bg-success">badge bg-success</span>
                <span className="badge bg-info">badge bg-info</span>
                <span className="badge bg-warning text-dark">badge bg-warning text-dark</span>
                <span className="badge bg-danger">badge bg-danger</span>
                <span className="badge bg-dark">badge bg-dark</span>
            </section>

            {/* ********** Input ********** */}
            <h6 className="bg-secondary text-center mt-5"> Line Input</h6>
            <section className="my-4">
                {/* Sample-1 */}
                <div className="teknovus-input-group">
                    <input className="teknovus-input" placeholder=" " type="text" />
                    <label className="teknovus-label">Teknovus</label>
                </div>

                {/* Sample-2 */}
                <div className="teknovus-input-group">
                    <input className="teknovus-input border-all" placeholder=" " type="text" />
                    <label className="teknovus-label">Teknovus</label>
                </div>

                {/* v2  */}
                {/* V2 sample-2 */}
                <div className="teknovus-input-group ">
                    <span className="teknovus-input-icon">
                        <i className="bx bx-plus"></i>
                    </span>
                    <input type="text" className="teknovus-input-2 border-all " id="input" placeholder="Placeholder" />
                    <label className="teknovus-label-2" for="input">
                        Teknovus Label
                    </label>
                </div>

                {/* V2 sample-2 */}
                <div className="teknovus-input-group right-addon">
                    <span className="teknovus-input-icon">
                        <i className="bx bx-plus"></i>
                    </span>
                    <i className="inner-addon-element tek-icon bx bx-search fs-24"></i>
                    <input type="text" className="teknovus-input-2 border-all " id="input" placeholder="Placeholder" />
                    <label className="teknovus-label-2" for="input">
                        Teknovus Label
                    </label>
                </div>

                {/* Sample-3 with icon */}
                <div className="teknovus-input-group right-addon">
                    <i className="inner-addon-element tek-icon bx bx-search fs-24"></i>
                    <input type="text" className="form-control" placeholder="Search" />
                    <label className="teknovus-label-3">Teknovus</label>
                </div>
            </section>



            {/*  */}
            {/*  */}
            {/*  */}

            {/* teknovus-input start */}
            <div className="my-3">
                {/* teknovus-input V1 start */}
                {/* V1 sample-1 */}
                <div className="teknovus-input-group">
                    <input className="teknovus-input" placeholder=" " type="text" />
                    <label className="teknovus-label">Teknovus</label>
                </div>

                {/* V1 sample-2 */}
                <div className="teknovus-input-group">
                    <input className="teknovus-input" placeholder=" " type="text" />
                    <label className="teknovus-label">Teknovus</label>
                </div>

                {/* V1 sample-3 */}
                <div className="teknovus-input-group">
                    <input className="teknovus-input border-all" placeholder=" " type="text" />
                    <label className="teknovus-label">Teknovus</label>
                </div>
                {/* teknovus-input V1 end */}

                {/* teknovus-input V2 start */}
                {/* V2 sample-1 */}
                <div className="teknovus-input-group">
                    <span className="teknovus-input-icon">
                        <i className="bx bx-plus"></i>
                    </span>
                    <input type="text" className="teknovus-input-2" id="input" placeholder="Placeholder" />
                    <label className="teknovus-label-2" for="input">
                        Teknovus Label
                    </label>
                </div>

                {/* V2 sample-2 */}
                <div className="teknovus-input-group ">
                    <span className="teknovus-input-icon">
                        <i className="bx bx-plus"></i>
                    </span>
                    <input type="text" className="teknovus-input-2 border-all " id="input" placeholder="Placeholder" />
                    <label className="teknovus-label-2" for="input">
                        Teknovus Label
                    </label>
                </div>

                {/* input-filed with label */}
                <div className="teknovus-input-group">
                    <label for="exampleInputEmail1" className="dropdown-input-label">
                        Email address
                    </label>
                    <input
                        type="text"
                        placeholder="Name"
                        className="dropdown-input-border form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                    />
                </div>

                {/*  */}
                {/*  */}
                <div class="inner-addon right-addon">
                    <i class="inner-addon-element bx bx-search fs-24"></i>
                    <input type="text" class="form-control" placeholder="Search" />
                </div>
                {/*  */}
                {/*  */}
                {/* teknovus-input V2 end */}

                {/* dropdown-input */}
                <div className="dropdown-input">
                    <label className="dropdown-input-label">Buyer</label>
                    <select className="form-select" aria-label=".form-select">
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>

                {/* table-bordered start */}
                <div className="my-5">
                    <table className="table table-bordered teknovus-table">
                        <thead>
                            <tr>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <td>Larry the Bird</td>
                                <td>@twitter</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                {/* table-bordered start */}
            </div>
            
            {/*  */}
            {/*  */}
            {/*  */}
            {/*  */}
        </div>
    );
}

export default Typography;
