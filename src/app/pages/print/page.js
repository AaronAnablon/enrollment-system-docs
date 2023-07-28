import Layout from "../../../../components/Layout";
import Nextbutton from "../../../../components/Nextbutton";
import Previousbutton from "../../../../components/Previousbutton";

const page = () => {
    return (
        <Layout>
            Print




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