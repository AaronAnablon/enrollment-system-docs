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

const page = () => {
    return (
        <Layout>
            Login

            <h2>LOG IN TO THE SYSTEM</h2>
            <ol>
                <li>1.	Click the Question Mark in the Log In Form
                    <Image src={clickQuestionMark} />
                    <div className="flex flex-col">*Enter the following text. Refer to the Figure below
                        <p>SERVER: localhost</p>
                        <p>USERNAME: root</p>
                        <p>Click Save and exit</p>
                        <Image src={setupServer} />
                    </div>
                </li>
                <li>2.	Enter Username and Password. Press Enter Key or click Login. Main Form will be displayed as shown in the figure
                    <div className="flex flex-col">*Enter the following credentials. Refer to the Figure below
                        <p>•	Username: Aaron A</p>
                        <p>•	Password: 11111111</p>
                        <Image src={Login} />
                    </div>
                </li>
                <h2 className="m-6">This is what the home page should look like after the logging in:</h2>
                <Image src={Home} />
                <ol>
                    <p>Home Page Elements</p>
                    <li>1.	Full name of the logged in user is displayed as shown in below.
                    <Image src={Sidebar} />
                    </li>
                    <li>2.	In the Main Form. Click Dashboard and it will remove the dashboard and the “About” button.
                          <Image src={Dashboard} />
                    </li>
                    <li>3.	Click Settings. The figure below will be displayed
                        <Image src={settings} />
                    </li>
                </ol>
            </ol>














            <div className="flex gap-96">
                <div className="m-10">
                    <Previousbutton link='/pages/scope' name='Scope and Delimitation' />
                </div>
                <div className="m-10">
                    <Nextbutton link='/pages/new' name='Adding new record' />
                </div>
            </div>
        </Layout>
    );
}

export default page;