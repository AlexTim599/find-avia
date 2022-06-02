

import { Form } from "react-bootstrap"

const SortedAside = () => {
    const catigories = ['- по возпастанию цены', '- по убыванию цены', '- по времени пути']

    const handeClick = (label) => {
        console.log('click', label);
    }

    return (
        <Form className='mt-1' >
            <h6>Сортировать</h6>
            <div className="mb-3">
                {catigories.map((label, index) => {

                    return (
                        <Form.Check
                            onClick={() => handeClick(index)}
                            key={index}
                            type='radio'
                            label={label}
                        />)
                })}
            </div>
        </Form>

        // <Form>
        //     {catigories.map((name, index) => (

        //         <div className="mb-3" key={index}>
        //             <Form.Check
        //                 onChange={() => handeClick(name)}
        //                 type={'radio'}
        //                 label={name}
        //             />
        //         </div>
        //     ))}


        // </Form>



    )
}

export default SortedAside