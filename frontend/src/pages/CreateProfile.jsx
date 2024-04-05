import { useSelector } from 'react-redux';
import CreateDoctorProfile from "../components/CreateDoctorProfile";
import CreatePatientProfile from "../components/CreatePatientProfile";

const CreateProfile = () => {
    const userType = useSelector((state)=>state.auth.userType)
    return(
        <div className="container">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            {
                userType == "DOCTOR"? <CreateDoctorProfile/> : <CreatePatientProfile/>
            }
            
        </div>
    )

}

export default CreateProfile;