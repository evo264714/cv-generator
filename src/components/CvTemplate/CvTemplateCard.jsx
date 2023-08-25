
import { FaUserAlt, FaPhoneAlt, FaHome } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import DownloadPDFButton from "../DownloadPDFButton/DownloadPDFButton";

const CvTemplateCard = ({ cv }) => {
    const { name, objectives, photo, email, phone, address, skills, education, certification, languages, internship, hobby, description } = cv
    return (

        <div className="my-10 mx-10 grid grid-cols-2 shadow-lg shadow-slate-500 py-8 px-8 rounded pdf-content">
        
           
            
                <div className="bg-red-400 w-96 px-4 py-8 rounded-lg">
                    <div className="">
                        <img className="rounded-full w-1/2 mx-auto my-5" src={photo ? photo : <p>No Photos Available</p>} alt="" />
                    </div>
                    <h2 className="font-extrabold text-center text-2xl text-white">My CV</h2>
                    <h2 className="font-bold text-white">Personal Details</h2>
                    <div className="font-medium">
                        <p className="flex items-center gap-2"><FaUserAlt />{name}</p>
                        <p className="flex items-center gap-2"><MdEmail />{email}</p>
                        <p className="flex items-center gap-2"><FaPhoneAlt />{phone}</p>
                        <p className="flex items-center gap-2"><FaHome />{address}</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-white">Skills</h2>
                        <p>{skills}</p>
                    </div>
                    <div>
                        <h2 className="font-bold text-white">Languages</h2>
                        <p>{languages}</p>
                    </div>
                </div>

                <div className="w-full px-4 py-8 ">
                    <div>
                        <h2 className="font-bold text-black">Career Objectives</h2>
                        <p>{objectives}</p>
                        <h2 className="font-bold text-black">Certifications</h2>
                        <p>{certification}</p>
                        <h2 className="font-bold text-black">Hobbies</h2>
                        <p>{hobby}</p>
                        <h2 className="font-bold text-black">Education</h2>
                        <p>{education}</p>
                        <h2 className="font-bold text-black">Internships</h2>
                        <p>{internship}</p>
                        <h2 className="font-bold text-black">Description</h2>
                        <p>{description}</p>
                    </div>
                </div>
                <DownloadPDFButton className='btn btn-success'></DownloadPDFButton>
            
        </div>


    );
};

export default CvTemplateCard;