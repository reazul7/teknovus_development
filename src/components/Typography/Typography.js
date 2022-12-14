import React from "react";

function Typography() {
    return (
        <div className="container p-5">
            <button className="btn btn-primary">
                <div className="btn-flex">
                    btn btn-danger
                    <span>{/* <i class="bx bx-plus"></i> */}</span>
                </div>
            </button>
            <button className="btn btn-danger">
                <div className="btn-flex">
                    btn btn-danger
                    <span>
                        <i class="bx bx-plus"></i>
                    </span>
                </div>
            </button>
            <button className="btn btn-warning">btn btn-warning</button>

            {/* btn-pill */}
            <br />
            <span className="badge badge-pill bg-primary-tv">badge badge-pill</span>
            <span className="badge badge-pill bg-danger-tv">badge badge-pill</span>
            <span className="badge badge-pill bg-warning-tv text-dark">badge badge-pill</span>
            <span className="badge badge-pill bg-success-tv">badge badge-pill</span>
            <span className="badge badge-pill bg-info-tv">badge badge-pill</span>

            <br />
            <span className="p-5 m-5">.</span>

            {/* input */}
            <div className="my-3">
                <div className="input-group-teknovus">
                    <input className="input-teknovus" placeholder=" " type="text" />
                    <label className="label-teknovus">Teknovus</label>
                </div>
                <div className="input-group-teknovus">
                    <input className="input-teknovus" placeholder=" " type="text" />
                    <label className="label-teknovus">Teknovus</label>
                </div>
                <div className="input-group-teknovus">
                    <input className="input-teknovus border-all" placeholder=" " type="text" />
                    <label className="label-teknovus">Teknovus</label>
                </div>
            </div>

            {/* input---2 */}
            <div class="page">
                <main class="main-base" role="main">
                    <form class="content">
                        <div class="form-row">
                            <input type="text" class="input-text" id="input" placeholder="Your Name" />
                            <label class="label-helper" for="input">
                                Name
                            </label>
                        </div>
                    </form>
                </main>
            </div>

            {/*  */}
        </div>
    );
}

export default Typography;
