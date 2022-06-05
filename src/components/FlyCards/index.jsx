import './style.css'
import FlightCard from '../Card'

const FlyCards = ({ flights }) => {

    return (
        <div>
            {flights.map((flight) => {
                return (<FlightCard key={flight.flightToken}
                    flight={flight.flight} />)
            })}
        </div>

    )
}

export default FlyCards