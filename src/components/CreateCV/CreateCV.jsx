import { useForm, Controller } from 'react-hook-form';
import Swal from 'sweetalert2';
const CreateCV = () => {
    const { handleSubmit, control, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        if (data) {
            Swal.fire({
                title: 'Success!',
                text: 'Your CV has been Created',
                icon: 'success',
                confirmButtonText: 'Okay!'
            })
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-8">
            <div className="mb-4">
                <label htmlFor="objectives" className="block mb-2 font-bold text-gray-700">Career Objectives</label>
                <Controller
                    name="objectives"
                    control={control}
                    defaultValue=""
                    
                    rules={{ required: 'objective is required' }}
                    render={({ field }) => <textarea {...field} rows="4" placeholder='Career Objectives' className="w-full p-2 border rounded"></textarea>}
                />
                {errors.objectives && <p className="text-red-500">{errors.objectives.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="photo" className="block mb-2 font-bold text-gray-700">Photo URL</label>
                <Controller
                    name="photo"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Phone number is required' }}
                    render={({ field }) => <input {...field} type="text" placeholder='photo' className="w-full p-2 border rounded" />}
                />
                {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Name</label>
                <Controller
                    name="name"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Name is required' }}
                    render={({ field }) => <input {...field} type="text" placeholder='Your Name' className="w-full p-2 border rounded" />}
                />
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-bold text-gray-700">Email</label>
                <Controller
                    name="email"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: 'Email is required',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: 'Invalid email address',
                        },
                    }}
                    render={({ field }) => <input {...field} type="text" placeholder='Your Email' className="w-full p-2 border rounded" />}
                />
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
                <label htmlFor="phone" className="block mb-2 font-bold text-gray-700">Phone Number</label>
                <Controller
                    name="phone"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Phone number is required' }}
                    render={({ field }) => <input {...field} type="text" placeholder='Your Phone Number' className="w-full p-2 border rounded" />}
                />
                {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="address" className="block mb-2 font-bold text-gray-700">Address</label>
                <Controller
                    name="address"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Address is required' }}
                    render={({ field }) => <input {...field} type="text" placeholder='Your Address' className="w-full p-2 border rounded" />}
                />
                {errors.address && <p className="text-red-500">{errors.address.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="skills" className="block mb-2 font-bold text-gray-700">Skills</label>
                <Controller
                    name="skills"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Skills are required' }}
                    render={({ field }) => <input {...field} type="text" placeholder='Add Skills' className="w-full p-2 border rounded" />}
                />
                {errors.skills && <p className="text-red-500">{errors.skills.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="education" className="block mb-2 font-bold text-gray-700">Education</label>
                <Controller
                    name="education"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Education is required' }}
                    render={({ field }) => <input {...field} type="text" placeholder='Education' className="w-full p-2 border rounded" />}
                />
                {errors.education && <p className="text-red-500">{errors.education.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="certification" className="block mb-2 font-bold text-gray-700">Certifications</label>
                <Controller
                    name="certification"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Certifications are required' }}
                    render={({ field }) => <input {...field} type="text" placeholder='Certifications' className="w-full p-2 border rounded" />}
                />
                {errors.certification && <p className="text-red-500">{errors.certification.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="languages" className="block mb-2 font-bold text-gray-700">Languages</label>
                <Controller
                    name="languages"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" placeholder='Languages' className="w-full p-2 border rounded" />}
                />
                {errors.languages && <p className="text-red-500">{errors.languages.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="internship" className="block mb-2 font-bold text-gray-700">Internships</label>
                <Controller
                    name="internship"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" placeholder='Interns' className="w-full p-2 border rounded" />}
                />
                {errors.internship && <p className="text-red-500">{errors.internship.message}</p>}
            </div>
            <div className="mb-4">
                <label htmlFor="hobby" className="block mb-2 font-bold text-gray-700">Hobbies</label>
                <Controller
                    name="hobby"
                    control={control}
                    defaultValue=""
                    render={({ field }) => <input {...field} type="text" placeholder='Your Hobbies' className="w-full p-2 border rounded" />}
                />
                {errors.hobby && <p className="text-red-500">{errors.hobby.message}</p>}
            </div>


            <div className="mb-4">
                <label htmlFor="description" className="block mb-2 font-bold text-gray-700">Description</label>
                <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    rules={{ required: 'Description is required' }}
                    render={({ field }) => <textarea {...field} rows="4" placeholder='Write a short description' className="w-full p-2 border rounded"></textarea>}
                />
                {errors.description && <p className="text-red-500">{errors.description.message}</p>}
            </div>


            <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Generate CV</button>
        </form>
    );
};

export default CreateCV;
