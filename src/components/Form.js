import React, { useState } from 'react'

const Form = (props) => {
    const [nilai, setNilai] = useState(0)
    const [satuan, setSatuan] = useState(props.satuanUtama)

    const tabelListMarkup = props.satuan.map(d => (<tr key={d.nama} >
        <td> {d.nama} </td>
        <td> {props.konversi(d.nilai, nilai, satuan)} </td>
    </tr>))

    const optionMarkUp = props.satuan.map(d => (
        <option value={d.nama} key={d.nama} >{d.nama} </option>
    ))



    return (
        <div className="m3" >
            <div className="row m3">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s6">
                            <select className="browser-default"  onChange={e => { setSatuan(e.target.value) }} >
                                <option value={satuan} defaultValue >Choose your option</option>
                                {optionMarkUp}
                            </select>
                            
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" onChange={e => { setNilai(e.target.value) }} type="text" className="validate" />
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                </form>
            </div>
            <table className="striped centered" >
                <thead>
                    <tr>
                        <td></td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {tabelListMarkup}
                </tbody>
            </table>
        </div>
    )
}

export default Form
