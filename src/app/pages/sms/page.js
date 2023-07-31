import Image from "next/image";
import Layout from "../../../../components/Layout";
import Nextbutton from "../../../../components/Nextbutton";
import Previousbutton from "../../../../components/Previousbutton";
import smsButton from "../../../../public/smsButton.png"
import setUpDongle from "../../../../public/setUpDongle.png"
import exitDongle from "../../../../public/exitDongle.png"
import seacrDeviceManager from "../../../../public/seacrDeviceManager.png"
import sendSmsAdviser from "../../../../public/sendSmsAdviser.png"
import expandedPorts from "../../../../public/expandedPorts.png"


const page = () => {
    return (
        <Layout>
            Sending Message to parents or Students
            <ol>
                <li>
                    <div className="my-6">1. Click the Send Message labeled in the figure below</div>
                    <Image src={smsButton} alt="smsButton"/>
                </li>
                <li>
                    <div className="my-6">2. Set up SMS using globe tattoo dongle</div>
                    <p>- Insert the Globe Tattoo Dongle. The figure below will be displayed</p>
                    <Image src={setUpDongle} alt="setUpDongle"/>
                </li>
                <li>
                    <div className="my-6">3. Click disconnect and click Ok. Click the x Button in the upper right corner as shown in the figure Below</div>
                    <Image src={exitDongle} alt="exitDongle"/>
                </li>
                <li>
                    <div className="my-6">4. Search Device Manager in the windows Search Bar</div>
                    <Image src={seacrDeviceManager} alt="seacrDeviceManager"/>
                </li>
                <li>
                    <div className="my-6">5. Click Device Manager and expand the Ports(COM & LPT)r</div>
                    <p>Remember the port of Huawei Mobile Connect – 3G PC UI interface labeled as (COM30). Ports vary depending on the ports where the dongle(Huawei Globe Tattoo) is inserted. Other computers label them as (COM10), (COM11) etc., The computer used in creating this manual labeled the port as COM30.</p>
                    <Image src={expandedPorts} alt="expandedPorts"/>
                </li>
                <li>
                    <div className="my-6">6. Select the All button. It will display all the contact numbers of Students from Grade 7 to Grade 10. Type the any message. Set the port to COM30 then click Send. It will be sent to all of the displayed contact numbers. Maximum character is 160.
                    </div>
                    <Image src={sendSmsAdviser} alt="sendSmsAdviser"/>
                </li>
                <li>7. If the message is sent then it will display to the sent list.</li>
            </ol>
            <div className="m-10">
                <Previousbutton link='/pages/maintenance' name='Maintenance' />
            </div>
        </Layout>
    );
}

export default page;