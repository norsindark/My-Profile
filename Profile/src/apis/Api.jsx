import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './MyForm.scss';

const MyForm = () => {
  const [data, setData] = useState([]);
  const [editedData, setEditedData] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/students');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data: ', error);
    }
  };

  const handleEdit = (student) => {
    if (editedData && editedData.id === student.id) {
      setEditedData(null);
    } else {
      setEditedData(student);
    }
  };

  const handleSave = async () => {
    try {
      const idExists = data.some(student => student.id === editedData.id && student.id !== editedData.id);
      const mssvExists = data.some(student => student.mssv === editedData.mssv && student.id !== editedData.id);
      if (idExists || mssvExists) {
        alert('ID or MSSV already exists. Please choose different ones.');
        return;
      }

      const response = await axios.put(`http://localhost:3000/students/${editedData.id}`, editedData);
      console.log('Data updated successfully:', response.data);
      setEditedData(null);
      fetchData();
    } catch (error) {
      console.error('Error updating data: ', error);
    }
  };


  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/students/${id}`);
      console.log('Student deleted successfully:', response.data);
      fetchData();
    } catch (error) {
      console.error('Error deleting student: ', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newMssv = formData.get('mssv');

    const mssvExists = data.some(student => student.mssv === newMssv);
    if (mssvExists) {
      alert('MSSV already exists. Please choose a different one.');
      return;
    }

    const newData = {
      id: formData.get('id'),
      mssv: newMssv,
      fullName: formData.get('fullName'),
      image: image ? await convertImageToBase64(image) : null
    };

    if (!newData.id || !newData.mssv || !newData.fullName) {
      alert('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/students', newData);
      console.log('Data saved successfully:', response.data);
      setData([...data, newData]);
      event.target.reset();
    } catch (error) {
      console.error('Error saving data: ', error);
    }
  };

  const convertImageToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setImage(file);
  };

  const handleEditImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setEditedData({ ...editedData, image: reader.result });
    };
  };


  return (
    <div className="my-form-container">
      <form onSubmit={handleSubmit} id="myForm" className='form-group'>
        <label htmlFor="id">
          ID:
          <input type="text" name="id" id="id" />
        </label>
        <br />
        <label htmlFor="mssv">
          MSSV:
          <input type="text" name="mssv" id="mssv" />
        </label>
        <br />
        <label htmlFor="fullName">
          Full Name:
          <input type="text" name="fullName" id="fullName" />
        </label>
        <br />
        <label htmlFor="image">
          Image:
          <input type="file" name="image" id="image" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit" id="submitBtn">Submit</button>
      </form>

      <table className="table" id="studentTable">
        <thead>
          <tr>
            <th>ID</th>
            <th>MSSV</th>
            <th>Full Name</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.mssv}</td>
              <td>{student.fullName}</td>
              <td>{student.image && <img src={student.image} alt="Student" style={{ width: '100px', height: 'auto' }} />}</td>
              <td>
                <button className='edit' onClick={() => handleEdit(student)}>Edit</button>
                <button className='del' onClick={() => handleDelete(student.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editedData && (
        <div className='form-group'>
          <h3>Edit Student</h3>
          <label htmlFor="editedId">
            ID:
            <input type="text" value={editedData.id} id="editedId" disabled />
          </label>
          <br />
          <label htmlFor="editedMssv">
            MSSV:
            <input type="text" value={editedData.mssv} id="editedMssv" onChange={e => setEditedData({ ...editedData, mssv: e.target.value })} />
          </label>
          <br />
          <label htmlFor="editedFullName">
            Full Name:
            <input type="text" value={editedData.fullName} id="editedFullName" onChange={e => setEditedData({ ...editedData, fullName: e.target.value })} />
          </label>
          <br />
          <label htmlFor="editedImage">
            Image:
            <input type="file" name="editedImage" id="editedImage" onChange={handleEditImageChange} />
            {editedData.image && <img src={editedData.image} alt="Edited Student" style={{ width: '100px', height: 'auto' }} />}
          </label>
          <br />
          <button onClick={handleSave} id="saveBtn">Save</button>
        </div>
      )}
    </div>
  );
};

export default MyForm;
