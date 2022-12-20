import React from "react";

function Inputs() {
    return (
        <div className="container">
            {/* ********** Input ********** */}
            <h6 className="bg-secondary text-center mt-5"> Line Input</h6>
            {/* teknovus-input start */}
            <div className="my-3">
                {/* teknovus-input V1 start */}

                <section>
                    {/* Line-Input without Icon */}
                    <div class="teknovus-input-group icon-area">
                        {/* <i class="input-icon-left teknovus-icon bx bx-search fs-24"></i>
                        <i class="input-icon-right teknovus-icon bx bx-search fs-24"></i> */}
                        <input type="text" className="teknovus-input-2" placeholder="Search" />
                        <label className="teknovus-label-2" for="input">
                            Teknovus Label
                        </label>
                    </div>

                    {/* Line-Input with Left Icon */}
                    <div class="teknovus-input-group icon-area">
                        <i class="input-icon-left teknovus-icon bx bx-search fs-24"></i>
                        {/* <i class="input-icon-right teknovus-icon bx bx-search fs-24"></i> */}
                        <input type="text" className="teknovus-input-2" placeholder="Search" />
                        <label className="teknovus-label-2" for="input">
                            Teknovus Label
                        </label>
                    </div>

                    {/* Line-Input with Right Icon */}
                    <div class="teknovus-input-group icon-area">
                        {/* <i class="input-icon-left teknovus-icon bx bx-search fs-24"></i> */}
                        <i class="input-icon-right teknovus-icon bx bx-search fs-24"></i>
                        <input type="text" className="teknovus-input-2" placeholder="Search" />
                        <label className="teknovus-label-2" for="input">
                            Teknovus Label
                        </label>
                    </div>

                    {/* Line-Input with Both Icon */}
                    <div class="teknovus-input-group icon-area">
                        <i class="input-icon-left teknovus-icon bx bx-search fs-24"></i>
                        <i class="input-icon-right teknovus-icon bx bx-search fs-24"></i>
                        <input type="text" className="teknovus-input-2" placeholder="Search" />
                        <label className="teknovus-label-2" for="input">
                            Teknovus Label
                        </label>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Inputs;
