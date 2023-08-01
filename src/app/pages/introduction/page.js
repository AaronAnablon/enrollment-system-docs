import Layout from "../../../../components/Layout";
import Nextbutton from "../../../../components/Nextbutton";
import Previousbutton from "../../../../components/Previousbutton";
import Link from "next/link";

const page = () => {
    return (
        <Layout>
            Introduction
            <div className="text-xl indent-4 m-10">The proposed Information System is designed to efficiently handle the records of students, both past and current, enrolled in grade 7 to 10. With its streamlined processes, student requests can be processed rapidly, ensuring a smooth experience for both students and staff. The system will act as a central repository, allowing easy retrieval of student records, which can significantly enhance data accessibility.
                <div className="text-xl indent-4">By transitioning from manual to computerized applications, the Information System aims to optimize operations and improve overall efficiency. This transformation will lead to substantial benefits for the school personnel and the administrative office, reducing their workloads and minimizing manual effort. As computers replace repetitive tasks, staff members can focus on more strategic responsibilities, fostering a more productive and innovative environment.</div>
                <div className="text-xl indent-4">Furthermore, the implementation of the Information System is anticipated to yield cost savings. The reduction in paper-based documentation and the enhanced file management capabilities will contribute to a more sustainable and eco-friendly approach. This aligns with the school&quot;s commitment to environmental responsibility.</div>
                <div className="text-xl indent-4">Overall, the proposed Information System represents a forward-looking solution that empowers the institution to adapt to technological advancements, making a positive impact on the school&quot;s productivity, resource management, and student services.</div>
            </div>
            <div className="text-2xl indent-4 m-10">This manual introduces the user to the Information System and guides them to become familiar with the functions and uses of each form. It also supports the user in getting the program up and running right away.</div>
            <div className="flex justify-start ">
                <div className="flex flex-col">
                    <p className="m-2">Download the file here</p>
                    <Link href='https://drive.google.com/file/d/1h0GcRPNBg3ciX0PuisJyBWXTzgne7G7g/view?usp=sharing' target="new">
                        <button className="rounded-md bg-blue-500 p-2 ml-2 text-white">Download LIS.zip</button>
                    </Link>
                </div>
            </div>
            <div className="flex gap-96">
                <div className="m-10">
                    <Previousbutton link='/' name='Back' />
                </div>
                <div className="m-10">
                    <Nextbutton link='/pages/installation' name='Installation' />
                </div>
            </div>

        </Layout>
    );
}

export default page;