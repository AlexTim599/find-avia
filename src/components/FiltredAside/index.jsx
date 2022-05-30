import { Form } from "react-bootstrap"


const FiltredAside = () => {
    const filterItem = ['- 1 пересдка', '- без пересадок']

    return (
        <Form >
            <h6>Фильтровать</h6>
            <div className="mb-3">
                {filterItem.map((item, index) => {
                    return (
                        <Form.Check
                            key={index}
                            type='checkbox'
                            label={item}
                        />
                    )
                })}

            </div>

        </Form>
    )
}

export default FiltredAside