import React, { useEffect, useState } from 'react';
import Loading from '../Shared/Loading';
import DeleteConfirmModal from './DeleteConfirmModal';
import DoctorRow from './DoctorRow';

const ManageDoctor = () => {

    const [deleteDoctor, setDeleteDoctor] = useState(null);
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/doctor', {
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);

    if (Loading) {
        <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>manage doctor:{doctors.length}</h2>
            {<div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Speciality</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor._id}
                                doctor={doctor}
                                index={index}
                                setDeleteDoctor={setDeleteDoctor}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>}
            {deleteDoctor && <DeleteConfirmModal
                deleteDoctor={deleteDoctor}
                setDeleteDoctor={setDeleteDoctor}
            ></DeleteConfirmModal>}
        </div>
    );
};

export default ManageDoctor;