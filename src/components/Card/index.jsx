import { ReactComponent as ArrowRight } from '../../images/arrow-right.svg'


const Card = ({ flight }) => {

    const { flight: data, legs } = flight

    const extractLegInfo = (leg) => {
        const firstSegment = leg.segments[0];
        const lastSegment = leg.segments[leg.segments.length - 1];

        return {
            from: {
                city: firstSegment.departureCity,
                airport: firstSegment.departureAirport,
                time: new Date(firstSegment.departureDate)
            },
            to: {
                city: lastSegment.arrivalCity,
                airport: lastSegment.arrivalAirport,
                time: new Date(lastSegment.arrivalDate)
            }
        }
    }

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const days = [1, 2, 3, 4, 5, 6, 7];

    console.log(days[new Date().getDay() - 1])

    return (
        <Card className="border-0">
            <Card.Header className="d-inline-flex justify-content-between align-items-baseline " style={{ backgroundColor: "#0053ff8f", maxHeight: '65px' }}>
                <img style={{ width: '100px' }} src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/9d/Singapore_Airlines_Logo.svg/350px-Singapore_Airlines_Logo.svg.png" alt="image"></img>
                <div className="d-flex flex-column align-items-end align-self-center" style={{ color: 'white' }}>
                    <h5> <span> {data.price.total.amount} P</span></h5>
                    <span>Стоимость для одного взрослого пассажира </span>
                </div>
            </Card.Header>
            {legs.map((leg) => {
                const { from, to } = extractLegInfo(leg)
                console.log(from.time.getDate, 'from.time.getDate');

                return (

                    <Card.Body>

                        <Card.Title>{from.city.caption}, {from.airport.caption}
                            <span style={{ color: '#327ec5ab' }}>({from.airport.uid}) </span>
                            <ArrowRight
                                style={{ fill: '#327ec5ab' }} alt='arrow' /> {to.city.caption},
                            {to.airport.caption}  <span style={{ color: '#327ec5ab' }}>({to.airport.uid}) </span>
                        </Card.Title>
                        <div className="border-top mb-1"></div>
                        <Card.Subtitle >
                            <div className="d-flex  justify-content-between mb-1">
                                <div>
                                    <span style={{ fontSize: '18px' }}> {from.time.getHours}:{from.time.getMinutes}  </span>
                                    <span style={{ color: '#327ec5ab' }} >{from.time.getDate}</span>
                                </div>
                                <span style={{ fontSize: '18px' }}> 14 ч 35 мин</span>
                                <div>
                                    <span style={{ color: '#327ec5ab' }}> 19 авг. ср</span>
                                    <span style={{ fontSize: '18px' }}> 10:30</span>
                                </div>
                            </div>
                            <div>
                                <h6 className="FlyCards_transfer  mb-2"> <span className="text-warning" >1 пересадка</span></h6>
                            </div>
                            <div className="mb-3">
                                <span > Рейс выполняет: LOT UTAIR </span>
                            </div>

                            <div className="border-top  border-3 border-primary" >
                            </div>
                        </Card.Subtitle >
                    </Card.Body>

                )

            })}

        </Card >
    )
}

export default Card