
import { Form } from "react-bootstrap"

const SortedAside = () => {
    const catigories = ['- по возпастанию цены', '- по убыванию цены', '- по времени пути']

    return (
        <Form className='mt-1' >
            <h6>Сортировать</h6>
            <div className="mb-3">
                {catigories.map((item, index) => {

                    return (
                        <Form.Check
                            key={index}
                            type='radio'
                            label={item}
                            defaultChecked={index == 0}

                        />)
                })}
            </div>
        </Form>
    )
}

export default SortedAside