import Form from '../components/Form'

const Berat = () => {
    //fungsi konversi
    const konversi = (a,b,satuan) => {
        let nilai = 0
        switch (satuan) {
            case 'kg':
                nilai = 1000
                break;
            case 'hg':
                nilai = 100
                break;
            case 'dag':
                nilai = 10
                break;
            case 'g':
                nilai = 1
                break;
            case 'dg':
                nilai = 0.1
                break;
            case 'cg':
                nilai = 0.01
                break;
            case 'mg':
                nilai = 0.001
                break;
        
            default:
                break;
        }

        return Number(a * nilai * b).toFixed(4)
    }
    //satuan beserta nilanyan
    const satuan = [
        {
            nama: 'kg',
            nilai: 0.001
        },
        {
            nama: 'hg',
            nilai: 0.01
        },
        {
            nama: 'dag',
            nilai: 0.1
        },
        {
            nama: 'g',
            nilai: 1
        },
        {
            nama: 'dg',
            nilai: 10
        },
        {
            nama: 'cg',
            nilai: 100
        },
        {
            nama: 'mg',
            nilai: 1000
        },
    ]
    //satuan utama
    const satuanUtama = 'g'
    return (
        <div>
            <h5>Konversi Berat</h5>
            <br /><br />
            <Form konversi={konversi} satuan={satuan} satuanUtama={satuanUtama} />
        </div>
    )
}

export default Berat
