
import { useLoaderData } from "react-router-dom";
import CvTemplateCard from "./CvTemplateCard";

const CvTemplate = () => {

    const cvs = useLoaderData();

    return (
       <div>
            <h2 className="text-center font-extrabold text-3xl">Your Total CVs: {cvs.length}</h2>
            {
                cvs.map(cv => <CvTemplateCard 
                    key={cv._id}
                    cv={cv}
                ></CvTemplateCard>)
            }
       </div>
    );
};

export default CvTemplate;