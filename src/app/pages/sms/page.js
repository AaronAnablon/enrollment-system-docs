import Layout from "../../../../components/Layout";
import Nextbutton from "../../../../components/Nextbutton";
import Previousbutton from "../../../../components/Previousbutton";

const page = () => {
    return (
        <Layout>
            SMS



            <div className="m-10">
                <Previousbutton link='/pages/print' name='Printing Grades' />
            </div>
        </Layout>
    );
}

export default page;