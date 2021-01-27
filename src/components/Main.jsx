import React from 'react'

const Main = () => {
    return (
        <div className="page">
            <div className="anymag">
                <img src="./images/anymag.png" alt="anymag"  className="any"/>
                <p>Magazine Style WordPress Blog</p>
                <button>
                    Documentation
                </button>

                <img src="./images/magazine.png" alt="magazine" className="mag"/>
            </div>

            <span className="demo">
                Demos
            </span>

            <div className="demo-pics">
                <div className="demo-main">
                    <img src="./images/demo-main.jpg" alt="main"/>
                </div>

                <div className="demo-dark">
                    <img src="./images/demo-dark.jpg" alt="dark"
/>
                </div>
            </div>



        </div>
    )
}

export default Main
