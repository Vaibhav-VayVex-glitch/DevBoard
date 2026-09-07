import { useForm } from "react-hook-form";

function EditApplication({ApplicationsArr,updateApplications,applicationObj,setShowEditPopUp,setShowSidePopUp}){

    const {
        register,
        handleSubmit,
        formState: { errors },
        } = useForm();
    
       
    function updateData(data){
        setShowEditPopUp(false);
        setShowSidePopUp(false);
        updateApplications(
            prev=>{
                prev.splice(prev.indexOf(applicationObj),1,data);
                return [...prev];
            }
        )
    }
    
        return(
            <div className="ApplicationEditPopUp">
    
                <div className="ApplicationEditHead">
                    <span>Edit Application</span>
                    <span className="cross">X</span>
                </div>
    
                <form onSubmit={handleSubmit(updateData)}>
    
                    <div className="compulsoryInfo">
    
                        <div className='companyDiv'>
                            <label htmlFor="companyName">Company*</label>
                            <input type="text" id="companyName" 
                                {...register('company', {required:true,value:applicationObj.company})}
                            />
                        </div>
    
                        <div className='roleDiv'>
                            <label htmlFor="roleName">Role*</label>
                            <input type="text" id="roleName" 
                            {...register('role', {required:true,value:applicationObj.role})}
                            />
                        </div>
    
                        <div className='statusDiv'>
                            <label htmlFor="statusInput">Status*</label>
                            <select id="statusInput" 
                                {...register('status', {required:true,value:applicationObj.status})}
                            >
                                <option value="Applied">Applied</option>
                                <option value="Interview">Interview</option>
                                <option value="Assessment">Assessment</option>
                                <option value="Rejected">Rejected</option>
                                <option value="Offer">Offer</option>
                                <option value="Ghosted">Ghosted</option>
                            </select>
                        </div>
    
                        <div className='dateDiv'>
                            <label htmlFor="appliedDate">Applied Date*</label>
                            <input type="date" id='appliedDate' 
                            {...register('applied', {required:true,value:applicationObj.applied})}
                            />
                        </div>
    
                        <div className='locationDiv'>
                            <label htmlFor="location">Location*</label>
                            <input type="text" id='location' 
                            {...register('location', {required:true,value:applicationObj.location})}
                            />
                        </div>
    
                        <div className='salaryrangeDiv'>
                            <label htmlFor="salary">Salary*</label>
                            <input type="text" id='salary' 
                            {...register('salary', {required:true,value:applicationObj.salary})}
                            />
                        </div>
    
                        <div className='sourceDiv'>
                            <label htmlFor="source">Source*</label>
                            <input type="text" id='source' 
                            {...register('source', {required:true,value:applicationObj.source})}
                            />
                        </div>
    
                        <div className='jobLinkDiv'>
                            <label htmlFor="jobLink">Job Link*</label>
                            <input type="url" id='jobLink' 
                            {...register('link', {required:true,value:applicationObj.link})}
                            />
                        </div>
    
                    </div>
    
                    <div className='notesDiv'>
                        <label htmlFor="notes">Notes</label>
                        <textarea  id="notes"  {...register('notes',{value:applicationObj.notes})}></textarea>
                    </div>
    
                    <button type="submit">Save Changes</button>
                </form>
    
    
            </div>
        );

}

export default EditApplication;