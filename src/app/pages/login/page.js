import Layout from "../../../../components/Layout";
import Nextbutton from "../../../../components/Nextbutton";
import Previousbutton from "../../../../components/Previousbutton";
import Image from "next/image";
import clickQuestionMark from "../../../../public/clickQuestionMark.png"
import setupServer from "../../../../public/setupServer.png"
import Login from "../../../../public/Login.png"
import Home from "../../../../public/Home.png"
import Sidebar from "../../../../public/Sidebar.png"
import Dashboard from "../../../../public/Dashboard.png"
import settings from "../../../../public/settings.png"
import manageCurr from "../../../../public/manageCurr.png"
import createSubjects from "../../../../public/createSubjects.png"
import createMinorSubjects from "../../../../public/createMinorSubjects.png"
import manageClassroom from "../../../../public/manageClassroom.png"
import manageSection from "../../../../public/manageSection.png"
import assignAdviser from "../../../../public/assignAdviser.png"
import adviserInfo from "../../../../public/adviserInfo.png"
import schoolSettings from "../../../../public/schoolSettings.png"
import schoolInfo from "../../../../public/schoolInfo.png"
import setLogo from "../../../../public/setLogo.png"

const page = () => {
    return (
        <Layout>
            Login

            <h2>LOG IN TO THE SYSTEM</h2>
            <ol>
                <li className='my-6'><div className="my-4">1.	Click the Question Mark in the Log In Form</div>
                    <Image src={clickQuestionMark} alt="clickQuestionMark"/>
                    <div className="flex flex-col">*Enter the following text. Refer to the Figure below
                        <p>SERVER: localhost</p>
                        <p>USERNAME: root</p>
                        <p>Click Save and exit</p>
                        <Image src={setupServer} alt="setupServer"/>
                    </div>
                </li>
                <li className='my-6'><div className="my-4">2.	Enter Username and Password. Press Enter Key or click Login. Main Form will be displayed as shown in the figure
                    <div className="flex flex-col">*Enter the following credentials. Refer to the Figure below</div>
                    <p>•	Username: Aaron A</p>
                    <p>•	Password: 11111111</p>
                    <Image src={Login} alt="Login"/>
                </div>
                </li>
                <h2 className="m-6">This is what the home page should look like after the logging in:</h2>
                <Image src={Home} alt="Home"/>
                <ol>
                    <p>Home Page Elements</p>
                    <li className='my-6'><div className="my-4">1.	Full name of the logged in user is displayed as shown in below.</div>
                        <Image src={Sidebar} alt="Sidebar"/>
                    </li>
                    <li className='my-6'><div className="my-4">2.	In the Main Form. Click Dashboard and it will remove the dashboard and the “About” button.</div>
                        <Image src={Dashboard} alt="Dashboard"/>
                    </li>
                </ol>
                <ol>
                    <h3>Setting up the Curricullum</h3>
                    <li className='my-6'><div className="my-4"></div>*Click Settings. The figure below will be displayed
                        <Image src={settings} alt="settings"/>
                    </li>
                    <li className='my-6'><div className="my-4"></div>1.  Click Manage Curriculum
                        <Image src={manageCurr} alt="manageCurr"/>
                    </li>
                    <li className='my-6'><div className="my-4"></div>2.  Click Create new. Enter K-12 and click the Check Button.</li>
                    <li className='my-6'><div className="my-4"></div>3.  Click the Arrow Down in the Learning Areas/Subjects. Click Filipino and Click the Check Button. Enter FI as the Code for Filipino and Click Add
                        <Image src={createSubjects} alt="createSubjects"/>
                    </li>
                    <li className='my-6'><div className="my-4"></div>
                        4.  Do No. 3 with English, Mathematics, Science, Araling Panlipunan, EsP and TLE
                    </li>
                    <li className='my-6'><div className="my-4"></div>
                        5.  Select MAPEH and enter code. Click Check button and click the first box in the Sub-Learning Areas. Enter Music and Click Check Button. Enter the Code. Do the same with Arts, PE, Health and Click Add. Click Save and Exit
                        <Image src={createMinorSubjects} alt="createMinorSubjects"/>
                    </li>
                </ol>
                <ol>
                    <h3>Manage Classroom and set School Year</h3>
                    <p>*Back in the settings, select the manage Classroom</p>
                    <li className='my-6'><div className="my-4"></div>1.  Select Manage Classroom. Select Set Sy and Enter 2022
                        <Image src={manageClassroom} alt="manageClassroom"/>
                    </li>
                    <li className='my-6'><div className="my-4"></div>2.  Click Classroom. Click Add New and Select Grade 7. Enter Section and Click Save. Do the Same with Grade 8, 9 and 10. Click exit
                        <Image src={manageSection} alt="manageSection"/>
                    </li>
                </ol>
                <ol>
                    <h3>Manage Adviser</h3>
                    <li className='my-6'><div className="my-4"></div>
                        1. Click Adviser
                        <Image src={assignAdviser} alt="assignAdviser"/>
                    </li>
                    <li className='my-6'><div className="my-4"></div>
                        2. Click Add New and Enter the needed Data for Adviser. Enter the Employee ID, Mobile Number and Full Name. Click Save and Exit
                        <Image src={adviserInfo} alt="adviserInfo"/>
                    </li>
                    <li className='my-6'><div className="my-4"></div>3. Click New Advisory and Select Grade 7. Set Class Section by clicking the arrow down same with the Adviser. Do the same with Grade 8, 9 and 10. Click Save and Exit
                        <Image src={assignAdviser} alt="assignAdviser"/>
                    </li>
                </ol>
                <ol>
                    <h3>Setting School GUI</h3>
                    <li className='my-6'><div className="my-4"></div>
                        1. Click School Settings
                        <Image src={schoolSettings} alt="schoolSettings"/>
                    </li>
                    <li className='my-6'><div className="my-4"></div>2. In the school form, here where the School name and other related Information can be edited.
                        <Image src={schoolInfo} alt="schoolInfo"/>
                    </li>
                    <li className='my-6'><div className="my-4"></div>3. Enter the information to be updated and click save.</li>
                    <li className='my-6'><div className="my-4"></div>4. Click add image and select the image to be replaced
                        <Image src={setLogo} alt="setLogo"/>
                    </li>
                    <li className='my-6'><div className="my-4"></div>5. Click the add Image. Select the image and click open. It will automatically save. Only Jpeg or Jpg format are accepted by the System.
                    </li>
                </ol>
            </ol>
            <div className="flex my-14">
                <div className="w-full flex justify-start">
                    <Previousbutton link='/pages/scope' name='Scope and Delimitation' />
                </div>
                <div className="w-full flex justify-end">
                    <Nextbutton link='/pages/new' name='Adding new record' />
                </div>
            </div>
        </Layout>
    );
}

export default page;