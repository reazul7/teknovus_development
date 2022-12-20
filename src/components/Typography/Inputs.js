import React from "react";

function Inputs() {
    return (
        <div className="container">
            {/* ********** Input ********** */}
            {/* ********** Line Input Field ********** */}
            <section>
                <h6 className="bg-secondary text-center mt-5"> Line Input</h6>
                {/* Line-Input without Icon */}
                <div class="teknovus-input-group icon-area">
                    {/* <i class="input-icon-left teknovus-icon bx bx-search fs-24"></i>
                    <i class="input-icon-right teknovus-icon bx bx-search fs-24"></i> */}
                    <input type="text" className="teknovus-input" placeholder="Search" />
                    <label className="teknovus-label" for="input">
                        Teknovus Label
                    </label>
                </div>

                {/* Line-Input with Left Icon */}
                <div class="teknovus-input-group icon-area">
                    <i class="input-icon-left teknovus-icon bx bx-search fs-24"></i>
                    {/* <i class="input-icon-right teknovus-icon bx bx-search fs-24"></i> */}
                    <input type="text" className="teknovus-input" placeholder="Search" />
                    <label className="teknovus-label" for="input">
                        Teknovus Label
                    </label>
                </div>

                {/* Line-Input with Right Icon */}
                <div class="teknovus-input-group icon-area">
                    {/* <i class="input-icon-left teknovus-icon bx bx-search fs-24"></i> */}
                    <i class="input-icon-right teknovus-icon bx bx-search fs-24"></i>
                    <input type="text" className="teknovus-input" placeholder="Search" />
                    <label className="teknovus-label" for="input">
                        Teknovus Label
                    </label>
                </div>

                {/* Line-Input with Both Icon */}
                <div class="teknovus-input-group icon-area">
                    <i class="input-icon-left teknovus-icon bx bx-search fs-24"></i>
                    <i class="input-icon-right teknovus-icon bx bx-search fs-24"></i>
                    <input type="text" className="teknovus-input" placeholder="Search" />
                    <label className="teknovus-label" for="input">
                        Teknovus Label
                    </label>
                </div>
            </section>

            <hr />
            <hr />
            {/* ********** Contained Input Field [Just add "border-all" class] ********** */}
            <section>
                <h6 className="bg-secondary text-center mt-5">Contained Input Field [Just add "border-all" class]</h6>
                {/* Contained Input without Icon */}
                <div class="teknovus-input-group icon-area">
                    {/* <i class="input-icon-left teknovus-icon bx bx-search fs-24"></i>
                    <i class="input-icon-right teknovus-icon bx bx-search fs-24"></i> */}
                    <input type="text" className="teknovus-input border-all" placeholder="Search" />
                    <label className="teknovus-label" for="input">
                        Teknovus Label
                    </label>
                </div>

                {/* Contained Input with Left Icon */}
                <div class="teknovus-input-group icon-area">
                    <i class="input-icon-left teknovus-icon bx bx-search fs-24"></i>
                    {/* <i class="input-icon-right teknovus-icon bx bx-search fs-24"></i> */}
                    <input type="text" className="teknovus-input border-all" placeholder="Search" />
                    <label className="teknovus-label" for="input">
                        Teknovus Label
                    </label>
                </div>

                {/* Contained Input with Right Icon */}
                <div class="teknovus-input-group icon-area">
                    {/* <i class="input-icon-left teknovus-icon bx bx-search fs-24"></i> */}
                    <i class="input-icon-right teknovus-icon bx bx-search fs-24"></i>
                    <input type="text" className="teknovus-input border-all" placeholder="Search" />
                    <label className="teknovus-label" for="input">
                        Teknovus Label
                    </label>
                </div>

                {/* Contained Input with Both Icon */}
                <div class="teknovus-input-group icon-area">
                    <i class="input-icon-left teknovus-icon bx bx-search fs-24"></i>
                    <i class="input-icon-right teknovus-icon bx bx-search fs-24"></i>
                    <input type="text" className="teknovus-input border-all" placeholder="Search" />
                    <label className="teknovus-label" for="input">
                        Teknovus Label
                    </label>
                </div>
            </section>

            <hr />
            <hr />

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
    );
}

export default Inputs;
