import React from "react";

function Typography() {
    return (
        <div className="container p-5">
            <button className="btn btn-primary">
                <div className="btn-flex">
                    btn btn-danger
                    <span>
                        <i className="bx bx-plus"></i>
                    </span>
                </div>
            </button>
            <button className="btn btn-danger">
                <div className="btn-flex">
                    btn btn-danger
                    <span>
                        <i className="bx bx-plus"></i>
                    </span>
                </div>
            </button>
            <button className="btn btn-disable">
                <div className="btn-flex">
                    btn btn-danger
                    <span>
                        <i className="bx bx-plus"></i>
                    </span>
                </div>
            </button>
            <button className="btn btn-disable">btn btn-danger</button>
            <button className="btn btn-warning">btn btn-warning</button>

            {/* btn-pill */}
            <br />
            <span className="badge badge-pill bg-primary-tv">badge badge-pill</span>
            <span className="badge badge-pill bg-danger-tv">badge badge-pill</span>
            <span className="badge badge-pill bg-warning-tv text-dark">badge badge-pill</span>
            <span className="badge badge-pill bg-secondary-tv">badge badge-pill</span>
            <span className="badge badge-pill bg-info-tv">badge badge-pill</span>

            <br />
            <span className="p-5 m-5">.</span>

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

                {/*  */}
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
                {/* teknovus-input V2 end */}

                {/* dropdown-input */}
                <div className="dropdown-input">
                    <p className="dropdown-input-label">Buyer</p>
                    <select className="form-select form-select" aria-label=".form-select">
                        <option selected>Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Typography;
