import { useState } from "react";

function UserForm() {


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subscribe: false
    });


    const handleChange = (e) => {

        const { name, value, type, checked } = e.target;

        setFormData(prev => ({
            ...prev,
            [name]: type ===' checkbox' ? checked : value
        }))

    }
    const handleSubmit = (e) => {

        e.preventDefault();
        alert(`Form Submitted: ${JSON.stringify(formData)}`)

    }

    return (
        <form onSubmit={handleSubmit} className="user-form">

            <h2>User Form</h2>
            <div>
                <label htmlFor="">Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="">Subscribe To NewsLetter</label>
                <input
                    type="checkbox"
                    name="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                />
            </div>
            <button type="submit"> Submit</button>

            <div className="form-preview">
                <h3>Live Preview:</h3>
                <p>Name: {formData.name || 'Not Provided'}</p>
                <p>Email: {formData.email || 'Not Provided'}</p>
                <p>Subscribe: {formData.subscribe ? 'Yes' : 'No'}</p>
            </div>

        </form>
    )

}
export default UserForm;