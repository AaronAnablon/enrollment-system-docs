import Layout from "../../../../components/Layout";
import Nextbutton from "../../../../components/Nextbutton";
import Previousbutton from "../../../../components/Previousbutton";

const page = () => {
    return (
        <Layout>
            grade


            <div className="flex gap-96">
                <div className="m-10">
                    <Previousbutton link='/pages/assign' name='Assign Student Section' />
                </div>
                <div className="m-10">
                    <Nextbutton link='/pages/print' name='Printing Card' />
                </div>
            </div>
        </Layout>
    );
}

export default page;