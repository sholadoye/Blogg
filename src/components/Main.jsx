import React from 'react'

const Main = () => {
    return (
        <div className="page">
            <div className="anymag">
                <img src="./images/anymag.png" alt="anymag"  className="any"/>
                <p>Magazine Style React Blog</p>
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
                    <img src="./images/demo-main.jpg" alt="main" className="main"/>
                    <span>Main</span>
                </div>

                <div className="demo-dark">
                    <img src="./images/demo-dark.jpg" alt="dark" className="dark"/>
                    <span>Dark</span>
                </div>
            </div>

            <div className="fashion-pics">
                <div className="demo-fashion">
                    <img src="./images/demo-fashion.jpg" alt="fashion" className="fashion"/>
                    <span>Fashion</span>
                </div>
                <div className="demo-lifestyle">
                    <img src="./images/demo-fashion.jpg" alt="lifestyle" className="lifestyle"/>
                    <span>Lifestyle</span>
                </div>
            </div>

        </div>
    )
}

export default Main
