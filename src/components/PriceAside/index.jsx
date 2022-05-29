import { Form } from "react-bootstrap"
import './style.css'

const PriceAside = () => {
    return (
        <Form>
            <h6>Цена</h6>
            <Form.Group className="mb-3 d-flex align-items-end" controlId="formBasicEmail">
                <Form.Label>От</Form.Label>
                <Form.Control className="input_price ms-2" type="number" placeholder="0" />
            </Form.Group>
            <Form.Group className="mb-3 d-flex align-items-end" >
                <Form.Label>До</Form.Label>
                <Form.Control className="input_price ms-2" type="number" placeholder="1000000" />
            </Form.Group>

        </Form>
    )
}



export default PriceAside