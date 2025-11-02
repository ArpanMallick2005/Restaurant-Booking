import React from 'react';
import {data} from "../restApi.json";

const Menu = () => {
  return (
    <section className='menu' id='menu'>
      <div className="container">
        <div className="heading_section">
            <h1 className='heading'>POPULAR DISHIES</h1>
            <p>Popular dishes vary across cuisines but some favorites are loved worldwide. In India, biryani, butter chicken, dosa, and paneer tikka are widely enjoyed. Italian cuisine offers classics like pizza, pasta, and lasagna. Chinese dishes such as fried rice, noodles, and Manchurian are popular choices. Burgers, sandwiches, and fries are favorites in fast food. Desserts like ice cream, gulab jamun, and brownies are loved by all. These dishes attract people with their rich flavors, aromas, and satisfying taste.</p>
        </div>
        <div className="dishes_container">
            {
                data[0].dishes.map(element=>{
                    return(
                        <div className="card" key={element.id}>
                            <img src={element.image} alt={element.title}/>
                            <h3>{element.title}</h3>
                            <button>{element.category}</button>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  )
}

export default Menu;
