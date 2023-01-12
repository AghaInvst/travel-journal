import react from 'react'

export default function Cards(props) {
  return (
    <div className="card">
        <div className='card--photo'>
          <img src={`${props.item.image}`} className='cards--img' />
        </div>
        <section className='sect'>
          <div className="location-container">
            <img src="/images/icon-blue.png" className='card--pin' />
            <p className='card--city'>{props.item.location}</p>
            <a className="viewmap" href="">View on Google Maps</a>
            <h1 className='card--title'>{props.item.title}</h1>
            <p className="dayDate"><strong>{props.item.date}</strong></p>
            <p className="card--text">
              {props.item.description}
            </p>
          </div>
        </section>
    </div>
  )
}

