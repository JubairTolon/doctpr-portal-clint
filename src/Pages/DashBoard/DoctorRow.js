import React from 'react';


const DoctorRow = ({ doctor, index, setDeleteDoctor }) => {
    const { name, speciality, img } = doctor;


    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <div class="avatar">
                    <div class="w-20 rounded">
                        <img src={img} alt={name} />
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{speciality}</td>
            <td>
                <label onClick={() => setDeleteDoctor(doctor)} for="delete-confirm-modal" class="btn btn-sm btn-error">Delete</label>

            </td>
        </tr>
    );
};

export default DoctorRow;