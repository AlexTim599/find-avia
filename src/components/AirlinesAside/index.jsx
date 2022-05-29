import { Form } from "react-bootstrap"


const AirlinesAside = () => {
    return (
        <Form >
            <h6>Авиакомпании</h6>
            <div className="mb-3">
                <Form.Check
                    type='checkbox'
                    label='- Белавиа от 25000 р.'
                />
                <Form.Check
                    type='checkbox'
                    label='- Lufthansa от 12000 р.'
                />

            </div>

        </Form>
    )
}


export default AirlinesAside