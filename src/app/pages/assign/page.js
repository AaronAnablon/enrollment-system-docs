import Layout from "../../../../components/Layout";
import Nextbutton from "../../../../components/Nextbutton";
import Previousbutton from "../../../../components/Previousbutton";

const page = () => {
    return (
        <Layout>
            assign




            <div className="flex gap-96">
                <div className="m-10">
                    <Previousbutton link='/pages/new' name='Adding new record' />
                </div>
                <div className="m-10">
                    <Nextbutton link='/pages/grade' name='Recording Grade' />
                </div>
            </div>
        </Layout>
    );
}

export default page;