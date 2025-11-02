import React from 'react';
import {data} from "../restApi.json"

const Team = () => {
  return (
    <section className='team' id='team'>
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
            Our team at the food restaurant is dedicated, passionate, and skilled in delivering the best dining experience to our customers. From talented chefs who craft delicious dishes with creativity and care, to friendly waiters who ensure excellent service, every member plays an important role. Our management team maintains high standards of hygiene, quality, and hospitality. The kitchen staff works efficiently to prepare fresh and flavorful meals, while the service team ensures a comfortable and enjoyable atmosphere. Together, we aim to provide outstanding food and memorable moments for every guest who visits our restaurant.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default Team;
