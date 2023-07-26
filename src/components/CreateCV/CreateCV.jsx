import { useForm, Controller } from 'react-hook-form';

const CreateCV = () => {
  const { handleSubmit, control, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // You can perform further actions like generating the CV from the form data.
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-sm mx-auto mt-8">
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-bold text-gray-700">Name</label>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: 'Name is required' }}
          render={({ field }) => <input {...field} type="text" className="w-full p-2 border rounded" />}
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
          render={({ field }) => <input {...field} type="text" className="w-full p-2 border rounded" />}
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
          render={({ field }) => <input {...field} type="text" className="w-full p-2 border rounded" />}
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
          render={({ field }) => <input {...field} type="text" className="w-full p-2 border rounded" />}
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
          render={({ field }) => <input {...field} type="text" className="w-full p-2 border rounded" />}
        />
        {errors.skills && <p className="text-red-500">{errors.skills.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="education" className="block mb-2 font-bold text-gray-700">Education</label>
        <Controller
          name="education"
          control={control}
          defaultValue=""
          rules={{ required: 'Phone number is required' }}
          render={({ field }) => <input {...field} type="text" className="w-full p-2 border rounded" />}
        />
        {errors.education && <p className="text-red-500">{errors.education.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="certification" className="block mb-2 font-bold text-gray-700">Certification</label>
        <Controller
          name="certification"
          control={control}
          defaultValue=""
          rules={{ required: 'Phone number is required' }}
          render={({ field }) => <input {...field} type="text" className="w-full p-2 border rounded" />}
        />
        {errors.certification && <p className="text-red-500">{errors.certification.message}</p>}
      </div>
      <div className="mb-4">
        <label htmlFor="education" className="block mb-2 font-bold text-gray-700">Education</label>
        <Controller
          name="education"
          control={control}
          defaultValue=""
          rules={{ required: 'Phone number is required' }}
          render={({ field }) => <input {...field} type="text" className="w-full p-2 border rounded" />}
        />
        {errors.education && <p className="text-red-500">{errors.education.message}</p>}
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block mb-2 font-bold text-gray-700">Description</label>
        <Controller
          name="description"
          control={control}
          defaultValue=""
          rules={{ required: 'Description is required' }}
          render={({ field }) => <textarea {...field} rows="4" className="w-full p-2 border rounded"></textarea>}
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>

      <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Generate CV</button>
    </form>
  );
};

export default CreateCV;
