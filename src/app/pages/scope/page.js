import Layout from "../../../../components/Layout";
import Nextbutton from "../../../../components/Nextbutton";
import Previousbutton from "../../../../components/Previousbutton";

const page = () => {
    return (
        <Layout>
            Scope and Delimitation
            <div>
                <p className="indent-4 text-md my-2">
                    The proposed LIS will be installed to register students, update and retrieve student records, generate reports for grades and payments. It is also for faster information dissemination.
                </p>
                <div>
                    <h3 className="indent-4 text-md my-2">
                    The system will be exclusively used by the faculty, accounting office, and registrar office. The System has levels of users namely;
                    </h3>
                    <ol>
                        <li><div className='font-bold'>1. Standard</div> - Can only access basic information of a student, the name, and grade level of a student.</li>
                        <li><div className='font-bold'>2. User</div> - Can be accessed by the Adviser and teachers. The teacher accesses the grades of the students under the subjects he or she is teaching. The adviser accesses the grades under his or her advisee.</li>
                        <li><div className='font-bold'>3. Administrator</div> - Can access almost all of the GUI buttons. The administrator is the one who enrolls students, add and update subjects and teachers. The administrator can also update GUI settings, signatories, and user accounts.</li>
                        <li><div className='font-bold'>4. Developer</div> - Can access all and cannot be edited by the Administrator.</li>
                    </ol>
                </div>
            </div>


            <div className="flex my-14">
                <div className="w-full flex justify-start">
                    <Previousbutton link='/pages/installation' name='Installation' />
                </div>
                <div className="w-full flex justify-end">
                    <Nextbutton link='/pages/login' name='Login Page' />
                </div>
            </div>
        </Layout>
    );
}

export default page;