import { Form } from "react-bootstrap"


const FiltredAside = () => {
    return (
        <Form >
            <h6>Фильтровать</h6>
            <div className="mb-3">
                <Form.Check
                    type='checkbox'
                    label='- 1 пересдка'
                />
                <Form.Check
                    type='checkbox'
                    label='- без пересадок'
                />

            </div>

        </Form>
    )
}

export default FiltredAside