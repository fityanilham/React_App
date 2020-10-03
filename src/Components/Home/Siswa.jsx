import React from 'react'

const Siswa = (props) => {
    return (
    <div className="mb-4">
        <table className="">
            <thead className="mb-3"> 
                <h6>Siswa Kelas XII</h6>
                <tr>
                    <th>Nama</th>
                    <td>:</td>
                    <td>{props.nama}</td>
                </tr>
                <tr>
                    <th>NISN</th>
                    <td>:</td>
                    <td>{props.nisn}</td>
                </tr>
                <tr>
                    <th>Jurusan</th>
                    <td>:</td>
                    <td>{props.jurusan}</td>
                </tr>
            </thead>
        </table>
    </div>
    )
    
}

export default Siswa
