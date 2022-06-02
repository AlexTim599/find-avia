import { Form } from "react-bootstrap"


const FiltredAside = () => {
    const filterItem = ['- 1 пересдка', '- без пересадок']

    const HandleClick = (item) => {
        console.log('click', item);
    }

    return (
        <Form >
            <h6>Фильтровать</h6>
            <div className="mb-3">
                {filterItem.map((item, index) => {
                    return (
                        <Form.Check
                            onClick={() => HandleClick(item)}
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