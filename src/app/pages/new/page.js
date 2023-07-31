import Layout from "../../../../components/Layout";
import Nextbutton from "../../../../components/Nextbutton";
import Previousbutton from "../../../../components/Previousbutton";
import Image from "next/image";
import enrollButton from "../../../../public/enrollButton.png"
import freshmen from "../../../../public/freshmen.png"
import familyBackground from "../../../../public/familyBackground.png"
import menuButtons from "../../../../public/menuButtons.png"
import assignSection from "../../../../public/assignSection.png"
import enrolled from "../../../../public/enrolled.png"
import recordscholasticsMessage from "../../../../public/recordscholasticsMessage.png"
import scholastics from "../../../../public/scholastics.png"
import scholasticsInfo from "../../../../public/scholasticsInfo.png"
import scholasticsButton from "../../../../public/scholasticsButton.png"
import oldStudent from "../../../../public/oldStudent.png"
import editProfile from "../../../../public/editProfile.png"
import masterlistButton from "../../../../public/masterlistButton.png"
import printButton from "../../../../public/printButton.png"
import masterlist from "../../../../public/masterlist.png"
import selectPrinter from "../../../../public/selectPrinter.png"



const page = () => {
    return (
        <Layout>
            Add New Record

            <ol>
                <h3>Adding New Record</h3>
                <li>
                    <div className="my-6">1.   Click Enrollment</div>
                    <Image src={enrollButton} alt="enrollButton"/>
                </li>
                <li>
                    <div className="my-6">2. Encircled in the button below is the button for freshmen. If the student is freshman, then click the freshmen. Fill out the needed information then click next. </div>
                    <Image src={freshmen} alt="freshmen"/>
                </li>
                <li>
                    <div className="my-6">3. The figure below will be displayed if the next button is clicked. In this form, fill in the information of the student’s family background then Click next.</div>
                    <Image src={familyBackground} alt="familyBackground"/>
                </li>
                <li>
                    <div className="my-6">4. After clicking next, the figure below will be displayed. By default, Grade 7 is selected in the combo box. Select section and the adviser will automatically selected as well as the Curriculum.</div>
                    <Image src={assignSection} alt="assignSection"/>
                </li>
                <li>
                    <div className="my-6">5. Use the button encircled below to navigate through the forms. Use the First button labeled as Personal Background if there are information that needs to be edited as well as with the family background and assigning Section</div>
                    <Image src={menuButtons} alt="menuButtons"/>
                </li>
                <li><div className="my-6">6. If the student is a transferee, Choose the Transferee button and follow 3 & 4</div>
                </li>
                <li><div className="my-6">7. After following 3 and 4, select grade level and assign the section. Message will be displayed if the student is Successfully Enrolled. Click OK and a question will be Asked if you want to record Scholastics Grade of the Student. </div>
                    <Image src={enrolled} alt="enrolled"/>
                </li>
                <li><div className="my-6"></div>
                    <Image src={menuButtons} alt="menuButtons"/>
                    <div className="my-6">*Click Yeas</div>
                    <Image src={recordscholasticsMessage} alt="recordscholasticsMessage"/>
                </li>
                <li>
                    <div className="my-6">8. Fill up the needed information following the labeled number in the figure bellow.</div>
                    <Image src={scholastics} alt="scholastics"/>
                    <ol className="flex flex-col ml-6">
                        <li>1.	Fill up the School Year</li>
                        <li>2.	Click or press tab and fill up the Section</li>
                        <li>3.	Click or press tab and fill up the Adviser Full Name</li>
                        <li>4.	Click or press tab and fill up the School Name</li>
                        <li>5.	Click or press tab and fill up the School ID</li>
                        <li>6.	Click or press tab and fill up the District</li>
                        <li>7.	Click or press tab and fill up the Division</li>
                        <li>8.	Click or press tab and fill up the Region</li>
                        <li>9.	Select Grade Level and it will Display the Subjects</li>
                        <li>10. Fill up the Grades each quarter.</li>
                        <li>11. Click Save and Exit</li>
                        <Image src={scholasticsInfo} alt="scholasticsInfo"/>
                    </ol>
                </li>
                <li>
                    <div className="my-6">9. Another way to open the Scholastics form is in the Main Form.</div>
                    <Image src={scholasticsButton} alt="scholasticsButton"/>
                </li>
            </ol>

            <ol>
                <h2>Working with the Old Student</h2>
                <li>
                    <div className="my-6">1. Click old Student button and it will display the figure below</div>
                    <Image src={oldStudent} alt="oldStudent"/>
                    <ol className="flex flex-col ml-6">
                        <li>1. Search the name of the student</li>
                        <li>2. Select the Grade Level</li>
                        <li>3. Select the Section and save</li>
                    </ol>
                </li>
                <li>
                    <div className="my-6"> 2. Select the Edit Profile if there is an update like Personal Back ground or update contact Number as shown in the figure below</div>
                    <Image src={editProfile} alt="editProfile"/>
                </li>
                <li>3. Update the information needed to be updated and click save. Click Exit and Enroll Form will be Displayed. Click Exit</li>
            </ol>
            <ol>
                <h2>Master List</h2>
                <li>
                    <div className="my-6">1. Click the masterlist Button labeled 4 in the Figure Bellow. </div>
                    <Image src={masterlistButton} alt="masterlistButton"/>
                </li>
                <li>
                    <div className="my-6">2. It will display the Figure Bellow</div>
                    <Image src={masterlist} alt="masterlist"/>
                    <ol className="flex flex-col ml-6">
                        <li>1. Select the Adviser Name in the figure above</li>
                        <li>2. Select Grade Level</li>
                        <li>3. Select the Section</li>
                        <li>4. Select the Prepared By and Click Print. It will Display the Masterlist of the Specified Grade Level, Section and School Year.</li>
                        <Image src={printButton} alt="printButton"/>
                        <li>
                        5. Click the Encircled Button in the Figure Above. Select the printer and click print. Refer to the Figure Below
                         <Image src={selectPrinter} alt="selectPrinter"/>
                         *Exit all the Forms and Stop at the Main Form
                        </li>
                    </ol>
                </li>
            </ol>
            <div className="flex gap-96">
                <div className="m-10">
                    <Previousbutton link='/pages/login' name='Log In Page' />
                </div>
                <div className="m-10">
                    <Nextbutton link='/pages/grade' name='Manage Student Record' />
                </div>
            </div>
        </Layout>
    );
}

export default page;