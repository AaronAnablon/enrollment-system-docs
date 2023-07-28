import Layout from "../../../../components/Layout";
import Nextbutton from "../../../../components/Nextbutton";
import Previousbutton from "../../../../components/Previousbutton";

const page = () => {
    return (
        <Layout>
            Add New Record



            <div className="flex gap-96">
                <div className="m-10">
                    <Previousbutton link='/pages/login' name='Log In Page' />
                </div>
                <div className="m-10">
                    <Nextbutton link='/pages/assign' name='Assign Student Section' />
                </div>
            </div>
        </Layout>
    );
}

export default page;