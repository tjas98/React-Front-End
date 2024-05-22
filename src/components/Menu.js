import React from "react";
import recipes from '../recipes'

const Menu = () => {
    return (
        <div className="menu-container">
            <div className="menu-header">
                <h2>This week specials</h2>
                <button>Order menu</button>
            </div>

            <div className="cards">
                {
                    recipes.map(r => 

                        <div className="menu-items">
                            <img src={r.image} alt="image"/>
                            <div >
                                <h2>{r.title}</h2>
                                <p>€ {r.price}</p>
                            </div>
                            <p>{r.description}</p>
                            <button>Order</button>
                            
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Menu;