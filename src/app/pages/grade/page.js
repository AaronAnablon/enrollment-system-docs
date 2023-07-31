import Layout from "../../../../components/Layout";
import Nextbutton from "../../../../components/Nextbutton";
import Previousbutton from "../../../../components/Previousbutton";
import Image from "next/image";
import grades from "../../../../public/grades.png"
import editGrades from "../../../../public/editGrades.png"
import printGrade from "../../../../public/printGrade.png"
import attendance from "../../../../public/attendance.png"
import printFrontOrBack from "../../../../public/printFrontOrBack.png"
import exportSoftCopyGrade from "../../../../public/exportSoftCopyGrade.png"
import printFront from "../../../../public/printFront.png"
import printBack from "../../../../public/printBack.png"
import printButtonGrade from "../../../../public/printButtonGrade.png"

const page = () => {
    return (
        <Layout>
            Manage Student's Records

            <ol>
                <li>
                    <div className="my-6">1. Select Grades as shown in the Figure below</div>
                    <Image src={grades} alt="grades" />
                </li>
                <li>
                    <div className="my-6">2. The Figure below will be displayed</div>
                    <Image src={editGrades} alt="editGrades" />
                    <ol className="ml-8">
                        <li>1. Enter the Adviser name or select the suggested text.</li>
                        <li>2. Select Section</li>
                        <li>3. Select subject and it will display all the student under the specified grade level, Subject and Section.</li>
                        <li>4. Enter the grades in each quarter and click save. Enter the password (Password of the account used).</li>
                        <li>5. Click Print Grade. The figure below will be displayed</li>
                        <Image src={printGrade} alt="printGrade" />
                        <li>6. Search the student and it will Display the Grade Level, Section, LRN and ID Number of the Student. Another way aside from searching is Selecting the name at the Right Side of the Form</li>
                    </ol>
                </li>
                <li>
                    <div className="my-6">2. Select Attendance. the figure bellow will be displayed. Edit the attendance of the student and report on Learner’s Observed values</div>
                    <Image src={attendance} alt="attendance" />
                </li>
                <li>
                    <div className="my-6">3. Click Save and click the ok. Click the X button</div>
                </li>
                <li>
                    <div className="my-6">4. Click the print form 138. The figure below will be displayed</div>
                    <Image src={printFrontOrBack} alt="printFrontOrBack" />
                </li>
                <li>
                    <div className="my-6">5. Click Print front or Print back to Print the grade of the Student. </div>
                    <Image src={printFront} alt="printFront" />
                    <Image src={printBack} alt="printBack" />
                </li>
                <li>
                    <div className="my-6">6. Click the print button as shown in the figure below to print the hard copy.</div>
                    <Image src={printButtonGrade} alt="printButtonGrade" />
                </li>
                <li>
                    <div className="my-6">8. Click the encircled button bellow to export the Soft Copy and select the Microsoft word format. Rename it and click save.</div>
                    <Image src={exportSoftCopyGrade} alt="exportSoftCopyGrade" />
                </li>
                <li><div className="my-6">9. Click the print form 137. Follow 4, 5 and 6</div></li>
            </ol>
            <div className="flex gap-96">
                <div className="m-10">
                    <Previousbutton link='/pages/assign' name='Assign Student Section' />
                </div>
                <div className="m-10">
                    <Nextbutton link='/pages/maintenance' name='Maintenance' />
                </div>
            </div>
        </Layout>
    );
}

export default page;