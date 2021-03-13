import React from 'react'
import Form from '../components/Form'

const Panjang = () => {
    //fungsion konversi\
    const konversi = (a, b, satuan) => {
        let nilai = 0;
        switch (satuan) {
            case 'km':
                nilai = 1000
                break;
            case 'hm':
                nilai = 100
                break;
            case 'dam':
                nilai = 10
                break;
            case 'm':
                nilai = 1
                break;
            case 'dm':
                nilai = 0.1
                break;
            case 'cm':
                nilai = 0.01
                break;
            case 'mm':
                nilai = 0.001
                break;
        }

        return a * nilai * b
    }
    //satuan beserta nilainya
    const satuan = [
        {
            nama: 'km',
            nilai: 0.001
        },
        {
            nama: 'hm',
            nilai: 0.01
        },
        {
            nama: 'dam',
            nilai: 0.1
        },
        {
            nama: 'm',
            nilai: 1
        },
        {
            nama: 'dm',
            nilai: 10
        },
        {
            nama: 'cm',
            nilai: 100
        },
        {
            nama: 'mm',
            nilai: 1000
        },
    ]
    //satuan utama
    const satuanUtama = 'm'
    return (
        <div>
            <h5>Konversi Panjang</h5>
            <br /><br />
            <Form konversi={konversi} satuan={satuan} satuanUtama={satuanUtama} />
        </div>
    )
}

export default Panjang
