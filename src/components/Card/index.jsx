import { ReactComponent as ArrowRight } from '../../images/arrow-right.svg'
import { Button, Card } from "react-bootstrap"
import './style.css'


const FlightCard = ({ flight }) => {

    const { legs } = flight

    const extractLegInfo = (leg) => {
        const firstSegment = leg.segments[0];
        const lastSegment = leg.segments[leg.segments.length - 1];

        return {
            from: {
                city: firstSegment.departureCity,
                airport: firstSegment.departureAirport,
                time: new Date(firstSegment.departureDate),

            },
            to: {
                city: lastSegment.arrivalCity,
                airport: lastSegment.arrivalAirport,
                time: new Date(lastSegment.arrivalDate),

            }
        }
    }

    const getFormatedHours = (hours) => hours < 9 ? `0${hours}` : hours;

    const parseDuration = (duration) => {
        const min = duration % 60
        const hours = (duration - min) / 60

        return {
            min,
            hours: getFormatedHours(hours)

        }

    }

    const months = [
        'январь',
        'февраль',
        'март',
        'апрель',
        'май',
        'июнь',
        'июль',
        'август',
        'сентябрь',
        'октябрь',
        'ноябрь',
        'декабрь'
    ]

    const days = [
        'Вс',
        'Пн',
        'Вт',
        'Ср',
        'Чт',
        'Пт',
        'Сб'
    ]


    return (
        <Card className="border-0">
            <Card.Header className="d-inline-flex justify-content-between align-items-baseline " style={{ backgroundColor: "#0053ff8f", maxHeight: '65px' }}>
                <img style={{ width: '100px' }} src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/9d/Singapore_Airlines_Logo.svg/350px-Singapore_Airlines_Logo.svg.png" alt="image"></img>
                <div className="d-flex flex-column align-items-end align-self-center" style={{ color: 'white' }}>
                    <h5> <span> {flight.price.total.amount} P</span></h5>
                    <span>Стоимость для одного взрослого пассажира </span>
                </div>
            </Card.Header>

            {legs.map((leg) => {

                const { from, to } = extractLegInfo(leg)
                const { hours, min } = parseDuration(leg.duration)

                return (

                    <Card.Body>

                        <Card.Title>{from?.city?.caption}, {from?.airport?.caption}
                            <span style={{ color: '#327ec5ab' }}>({from.airport.uid}) </span>
                            <ArrowRight
                                style={{ fill: '#327ec5ab' }} alt='arrow' /> <span> {to?.city?.caption},
                                {to?.airport?.caption} </span> <span style={{ color: '#327ec5ab' }}>({to?.airport?.uid}) </span>
                        </Card.Title>
                        <div className="border-top mb-1"></div>
                        <Card.Subtitle >
                            <div className="d-flex  justify-content-between mb-1">
                                <div>
                                    <span style={{ fontSize: '18px' }}> {("0" + (from.time.getHours())).slice(-2)}:{from.time.getMinutes()}</span>
                                    <span style={{ color: '#327ec5ab' }}> {from.time.getDate()} {months[from.time.getMonth()].slice(0, 3)}. {days[from.time.getDay()].toLocaleLowerCase()}</span>
                                </div>
                                <span style={{ fontSize: '18px' }}> {hours} ч {min} мин</span>
                                <div>
                                    <span style={{ color: '#327ec5ab' }}> {to.time.getDate()} {months[to.time.getMonth()].slice(0, 3)}. {days[to.time.getDay()].toLocaleLowerCase()}</span>
                                    <span style={{ fontSize: '18px' }}> {("0" + (to.time.getHours())).slice(-2)}:{to.time.getMinutes()}</span>
                                </div>
                            </div>
                            <div>
                                {leg.segments.length - 1 ?
                                    <h6 className="FlyCards_transfer  mb-2"> <span className="text-warning" > {leg.segments.length - 1} пересадка</span> </h6> : <h6> Без пересадок</h6>
                                }

                            </div>
                            <div className="mb-3">
                                <span > Рейс выполняет: {(flight.carrier.uid).toUpperCase()} {(flight?.carrier?.caption).toUpperCase()} </span>
                            </div>

                            <div className="border-top border-3 border-primary" >
                            </div>
                        </Card.Subtitle >
                    </Card.Body>

                )

            })}

        </Card >
    )
}

export default FlightCard