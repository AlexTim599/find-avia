import { Form } from "react-bootstrap"

const SortedAside = () => {
    return (
        // <>
        //     <div className="form-check">
        //         <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
        //         <label className="form-check-label" >
        //             - по возпастанию цены
        //         </label>
        //     </div>
        //     <div className="form-check">
        //         <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
        //         <label className="form-check-label" >
        //             Default checked radio
        //         </label>
        //     </div>
        // </>


        <Form className='mt-1' >
            <h6>Сортировать</h6>
            <div className="mb-3">
                <Form.Check
                    type='radio'
                    label='- по возпастанию цены'
                    checked
                    readOnly
                />
                <Form.Check
                    type='radio'
                    label='- по убыванию цены'
                />
                <Form.Check
                    type='radio'
                    label='- по времени пути'
                />
            </div>

        </Form>
    )
}

export default SortedAside