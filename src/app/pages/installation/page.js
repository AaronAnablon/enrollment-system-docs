import Layout from "../../../../components/Layout";
import Nextbutton from "../../../../components/Nextbutton";
import Previousbutton from "../../../../components/Previousbutton";
import Link from "next/link";
import Image from "next/image";
import setup1 from "../../../../public/setup1.png"
import setup1a from "../../../../public/setup1a.png"
import setup2 from "../../../../public/setup2.png"
import setup3 from "../../../../public/setup3.png"
import setup4 from "../../../../public/setup4.png"
import clickWampp from "../../../../public/clickWampp.png"
import startWampp from "../../../../public/startWampp.png"
import nameWampp from "../../../../public/nameWampp.png"
import createdb from "../../../../public/createdb.png"
import importdb from "../../../../public/importdb.png"
import selectdb from "../../../../public/selectdb.png"
import openLisIcon from "../../../../public/openLisIcon.png"

const Description = () => {
    return (
        <Layout>
            Installation
            <div className="m-10">
                <h3>FIRST THING FIRST: </h3>
                <ol className="flex flex-col gap-4 indent-6">
                    <li>• Locate the folder named LIS from your Downloaded files. Copy and paste it to your computer.
                        If not downloaded, refer to this <Link className="text-blue-500 underline underline-offset-1" href='https://drive.google.com/file/d/1h0GcRPNBg3ciX0PuisJyBWXTzgne7G7g/view?usp=sharing' target="new">link</Link>.</li>
                    <li>• Install Wampserver to your computer. Check your computer system type if it is 64 bit or 32 bit. </li>
                    <li>• Install Crystal Report for VS_13_0</li>
                    <li>• Install the system (refer to the installation process below)</li>
                </ol>
            </div>
            <h3>INSTALLATION PROCESS: </h3>
            <ol className="flex flex-col gap-4 indent-6">
                <li>1.	Open IAIS folder and select “LIS” or “Setup1” as shown in the figure below.
                    <Image src={setup1} alt="setup1"/>
                </li>
                <li>2.	After selecting “LIS” or “Setup1”, follow the installation processes as shown in the figures below.
                    <Image src={setup1a} alt="setup1a"/>
                    <Image src={setup2} alt="setup2"/>
                    <Image src={setup3} alt="setup3"/>
                    <p>*Click yes if there&apos;s a pop-up message confirming your installation</p>
                </li>
                <li>3.	Wait until the installation is complete before closing as shown in the figures below.
                    <Image src={setup4} alt="setup4"/>
                </li>
            </ol>
            <h3>AFTER THE INSTALLATION PROCESS:</h3>
            <ol className="flex flex-col gap-4 indent-6">
                <li>1.	Double click/right click the wampserver &quot;a&ldquo; then run as administrator or create shortcut &quot;b&ldquo; for easy access. As shown in the figure below.
                    <Image src={clickWampp} alt="clickWampp"/>
                </li>
                <li>2.	If the wampserver is running and it turns green (c), left click it and choose phpmyadmin. Refer to the figure below. If the wampserver icon is not green, select Start All Services before clicking phpmyadmin.
                    <Image src={startWampp} alt="startWampp"/>
                </li>
                <li>3.  Type root in the username as the default then click Go. Refer to the figure below.
                    <Image src={nameWampp} alt="nameWampp"/>
                </li>
                <li>4.	Click New to Create a New Database. Type “dbenrollment1” and click the Create button. Refer in the figure below.
                    <Image src={createdb} alt="createdb"/>
                    <ol>
                        <li>(1)Click New</li>
                        <li>(2)Type the Database Name “dbenrollment1”</li>
                        <li>(3)Click Create</li>
                        <li>(4) Select the created database which is the dbsims2 before clicking import</li>

                    </ol>
                </li>
                <li>
                    5.	Select dbnrollment1 from the left corner. Click Import (g) on the tab menu, choose Browse (h) and locate “dbnrollment1” from the IAIS folder.  Refer to the figures below.
                    <Image src={importdb} alt="importdb"/>
                    <Image src={selectdb} alt="selectdb"/>
                </li>
                <li>
                    6.	Open the LIS Icon
                    <ol>
                        <li>•	Double click the icon or</li>
                        <li>•	Click the icon and press enter key on the keyboard or</li>
                        <li>•	Right click the icon and select open</li>
                        <li>•	Refer to the icon below.</li>
                    </ol>
                    <Image src={openLisIcon} alt="openLisIcon"/>
                </li>
            </ol>
            <div className="flex gap-96">
                <div className="m-10">
                    <Previousbutton link='/pages/introduction' name='Introduction' />
                </div>
                <div className="m-10">
                    <Nextbutton link='/pages/scope' name='Scope and Delimitaion' />
                </div>
            </div>
        </Layout>
    );
}

export default Description;