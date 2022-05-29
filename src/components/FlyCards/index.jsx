import { Button, Card } from "react-bootstrap"
import { ReactComponent as ArrowRight } from '../../images/arrow-right.svg'
import './style.css'


const FlyCards = () => {
    return (
        <Card className="border-0">
            <Card.Header className="d-inline-flex justify-content-between align-items-baseline " style={{ backgroundColor: "#0053ff8f", maxHeight: '65px' }}>
                <img style={{ width: '100px' }} src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/9d/Singapore_Airlines_Logo.svg/350px-Singapore_Airlines_Logo.svg.png" alt="image"></img>
                <div className="d-flex flex-column align-items-end align-self-center" style={{ color: 'white' }}>
                    <h5> <span>  10 200 P</span></h5>
                    <span>Стоимость для одного взрослого пассажира </span>
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>Москва, ШЕРЕМЕТЬЕВО  <span style={{ color: '#327ec5ab' }}>(SVO) </span> <ArrowRight style={{ fill: '#327ec5ab' }} alt='arrow' /> ЛОНДОН, Лондон Хитроу  <span style={{ color: '#327ec5ab' }}>(LHR) </span> </Card.Title>
                <div className="border-top mb-1"></div>
                <Card.Subtitle >
                    <div className="d-flex  justify-content-between mb-1">
                        <div>
                            <span style={{ fontSize: '18px' }}> 20:40  </span>
                            <span style={{ color: '#327ec5ab' }} >18 авг. вт</span>
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

            <Card.Body>
                <Card.Title>Москва, ШЕРЕМЕТЬЕВО  <span style={{ color: '#327ec5ab' }}>(SVO) </span> <ArrowRight style={{ fill: '#327ec5ab' }} alt='arrow' /> ЛОНДОН, Лондон Хитроу  <span style={{ color: '#327ec5ab' }}>(LHR) </span> </Card.Title>
                <div className="border-top mb-2"></div>
                <Card.Subtitle >
                    <div className="d-flex  justify-content-between mb-2">
                        <div>
                            <span style={{ fontSize: '18px' }}> 20:40  </span>
                            <span style={{ color: '#327ec5ab' }} >18 авг. вт</span>
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
                </Card.Subtitle >
                <Button variant="warning" className="container" style={{ color: 'white' }}>ВЫБРАТЬ</Button>
            </Card.Body>


        </Card >
    )
}

export default FlyCards