import { useForm } from 'react-hook-form';

function AddApplicationPopUp({ApplicationsArr,updateApplications,setAddApplication}){

    const {
    register,
    handleSubmit,
    formState: { errors },
    } = useForm();

    function addData(data){

        setAddApplication(false);

        updateApplications(prev=>[
            ...prev,
            data
        ])
    }


    return(
        <div className="ApplicationAddPopUp">

            <div className="ApplicationAddHead">
                <span>Add Application</span>
                <span className="cross">X</span>
            </div>

            <form onSubmit={handleSubmit(addData)}>

                <div className="compulsoryInfo">

                    <div className='companyDiv'>
                        <label htmlFor="companyName">Company*</label>
                        <input type="text" id="companyName"
                            {...register('company', {required:true})}
                        />
                    </div>

                    <div className='roleDiv'>
                        <label htmlFor="roleName">Role*</label>
                        <input type="text" id="roleName" 
                        {...register('role', {required:true})}
                        />
                    </div>

                    <div className='statusDiv'>
                        <label htmlFor="statusInput">Status*</label>
                        <select id="statusInput"
                            {...register('status', {required:true})}
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
                        {...register('applied', {required:true})}
                        />
                    </div>

                    <div className='locationDiv'>
                        <label htmlFor="location">Location*</label>
                        <input type="text" id='location' 
                        {...register('location', {required:true})}
                        />
                    </div>

                    <div className='salaryrangeDiv'>
                        <label htmlFor="salary">Salary*</label>
                        <input type="text" id='salary'
                        {...register('salary', {required:true})}
                        />
                    </div>

                    <div className='sourceDiv'>
                        <label htmlFor="source">Source*</label>
                        <input type="text" id='source'
                        {...register('source', {required:true})}
                        />
                    </div>

                    <div className='jobLinkDiv'>
                        <label htmlFor="jobLink">Job Link*</label>
                        <input type="url" id='jobLink'
                        {...register('link', {required:true})}
                        />
                    </div>

                </div>

                <div className='notesDiv'>
                    <label htmlFor="notes">Notes</label>
                    <textarea  id="notes" {...register('notes')}></textarea>
                </div>

                <input type="submit" />
            </form>


        </div>
    );
}

export default AddApplicationPopUp; 