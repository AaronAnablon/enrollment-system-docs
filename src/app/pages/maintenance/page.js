import Layout from "../../../../components/Layout";
import Nextbutton from "../../../../components/Nextbutton";
import Previousbutton from "../../../../components/Previousbutton";
import maintenanceButton from "../../../../public/maintenanceButton.png"
import accountsInfo from "../../../../public/accountsInfo.png"
import enterCredential from "../../../../public/enterCredential.png"
import adviserAccount from "../../../../public/adviserAccount.png"
import dbRoute from "../../../../public/dbRoute.png"
import Image from "next/image";
import restoreDatabaseButton from "../../../../public/restoreDatabaseButton.png"
import manageAccounts from "../../../../public/manageAccounts.png"
import dbDirectory from "../../../../public/dbDirectory.png"
import logsSample from "../../../../public/logsSample.png"


const page = () => {
    return (
        <Layout>
            Maintenance
            <ol>
                <li>
                    <div className="my-6">1. Click the Maintenance as shown in the figure below</div>
                    <Image src={maintenanceButton} alt="maintenanceButton"/>
                </li>
                <li>
                    <div className="my-6">2. Click Manage Account</div>
                    <Image src={manageAccounts} alt="manageAccounts"/>
                </li>
                <li>
                    <div className="my-6">3. Click one of the username listed at the left and click approve. Take note the Username and password. </div>
                    <Image src={accountsInfo} alt="accountsInfo"/>
                </li>
                <li>
                    <div className="my-6">4. click the X button and click the Maintenance. Click Log out</div>
                </li>
                <li>
                    <div className="my-6">5. Log in the Approved account. Username: Dhayen, Password: 11111111</div>
                    <Image src={enterCredential} alt="enterCredential"/>
                </li>
                <li>
                    <div className="my-6">6. The approved account is an adviser account. The Figure below is the sample account for the adviser
                    </div>
                    <Image src={adviserAccount} alt="adviserAccount"/>
                </li>
                <li>7. Click Logout and Login to Admin Account. Username: Aaron, Password: 11111111</li>
                <li><div className="my-6">8. Click Maintenance and click back up database. The Figure below will be shown</div>
                    <Image src={dbRoute} alt="dbRoute"/>
                </li>
                <li>
                    <div className="my-6">9. Click the directory marked as red box above and paste this
                        <p>C:\wamp\bin\mysql\mysql5.6.17\bin</p>
                        <p>Click save and go back to maintenance menu.</p>
                    </div>
                </li>
                <li>
                    <div className="my-6">10. Click Restore Database
                        <Image src={restoreDatabaseButton} alt="restoreDatabaseButton"/>
                    </div>
                </li>
                <li>
                    <div className="my-6">11. Click the directory as shown below</div>
                    <Image src={dbDirectory} alt="dbDirectory"/>
                    <ol className="ml-10">
                        <li>1. Select the arrow down in the directory and select the highlighted text in the figure shown above.</li>
                        <li>2. Click open and click ok and go back to maintenance menu</li>
                    </ol>
                </li>
                <li>
                    <div className="my-6">12. View Logs</div>
                    <p> In view logs, here where the activities of the user can be viewed. Figure below the sample GUI</p>
                    <Image src={logsSample} alt="logsSample"/>
                </li>
            </ol>
            <div className="flex gap-96">
                <div className="m-10">
                    <Previousbutton link='/pages/grade' name='Recording Grade' />
                </div>
                <div className="m-10">
                    <Nextbutton link='/pages/sms' name='Sending bulk message' />
                </div>
            </div>
        </Layout>
    );
}

export default page;