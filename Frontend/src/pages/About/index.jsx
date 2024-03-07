// import React from "react";
// import { motion } from "framer-motion";
// import { useLocation } from "react-router-dom";
// import "./About.css";
// import aboutImg from '../../assets/images/aboutEmployeePayPro.svg'
// import '../../shared/Shared.css'
// import { BottomLine } from "../../components/atoms";
// import { Footer, Navbar } from "../../components";

// const About = () => {
//     const location = useLocation();
//     const isHomePage = location.pathname === "/";

//     return (
//         <>
//             <Navbar />
//             <div className="dark:bg-boxdark">
//                 <div className="parent pt-16 my-16">
//                     <div>
//                         <motion.div
//                             className="mb-10"
//                             initial={{ y: -200, opacity: 0 }}
//                             animate={{
//                                 y: 0,
//                                 opacity: 1,
//                                 transition: { duration: 1, type: "spring" },
//                             }}
//                         >
//                             <h3 className="text-neutral text-center dark:text-white">Apa itu EmployeePayPro ?</h3>
//                             <h1 className="text-4xl font-semibold drop-shadow-md text-center text-accent dark:text-white">
//                                 Tentang <span className="text-primary">Kami</span>
//                             </h1>
//                             <BottomLine />
//                         </motion.div>
//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
//                             <motion.div
//                                 initial={{ x: -200, opacity: 0 }}
//                                 animate={{
//                                     x: 0,
//                                     opacity: 1,
//                                     transition: { duration: 1, delay: 1.25 },
//                                 }}
//                             >
//                                 <img
//                                     src={aboutImg}
//                                     alt="About EmployeePayPro"
//                                     className="w-100 h-100 transform translate-y-[-12%]"
//                                     title="About EmployeePayPro"
//                                 />

//                             </motion.div>
//                             <motion.div
//                                 initial={{ x: 200, opacity: 0 }}
//                                 animate={{
//                                     x: 0,
//                                     opacity: 1,
//                                     transition: { duration: 1, delay: 1.25 },
//                                 }}
//                             >
//                                 <p className="font-medium text-center translate-y-[-60%] sm:translate-y-[-0%] sm:mb-2 md:text-left dark:text-white">
//                                     EmployeePayPro ( Sistem Penggajian Karyawan ) adalah suatu sistem yang digunakan oleh perusahaan untuk mengelola proses penggajian karyawan secara efisien dan akurat.
//                                     Sistem ini memainkan peran kunci dalam mengotomatisasi berbagai tugas terkait penggajian, seperti perhitungan gaji, pemrosesan absensi, dan pembayaran upah karyawan.
//                                 </p>
//                                 <br />
//                                 <p className="font-medium text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left dark:text-white">
//                                     Dalam EmployeePayPro, informasi karyawan seperti data pribadi, jabatan, dan tingkat gaji disimpan secara terpusat.
//                                     Setiap bulan, sistem akan mengambil data absensi karyawan dan melakukan perhitungan gaji berdasarkan informasi yang ada.
//                                     Hal ini mencakup faktor-faktor seperti jam kerja, cuti, lembur, dan potongan yang relevan.
//                                 </p>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </div>
//                 {!isHomePage && <Footer />}
//             </div>
//         </>
//     );
// };

// export default About;


import React from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import "./About.css";
import aboutImg from '../../assets/images/aboutSipeka.svg'
import '../../shared/Shared.css'
import { BottomLine } from "../../components/atoms";
import { Footer, Navbar } from "../../components";

const About = () => {
    const location = useLocation();
    const isHomePage = location.pathname === "/";

    return (
        <>
            <Navbar />
            <div className="dark:bg-boxdark">
                <div className="parent pt-16 my-16">
                    <div>
                        <motion.div
                            className="mb-10"
                            initial={{ y: -200, opacity: 0 }}
                            animate={{
                                y: 0,
                                opacity: 1,
                                transition: { duration: 1, type: "spring" },
                            }}
                        >
                            <h3 className="text-neutral text-center dark:text-white">What is EmployeeSmart?</h3>
                            <h1 className="text-4xl font-semibold drop-shadow-md text-center text-accent dark:text-white">
                                About <span className="text-primary">Us</span>
                            </h1>
                            <BottomLine />
                        </motion.div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                            <motion.div
                                initial={{ x: -200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <img
                                    src={aboutImg}
                                    alt="About EmployeePayPro"
                                    className="w-100 h-100 transform translate-y-[-12%]"
                                    title="About EmployeePayPro"
                                />

                            </motion.div>
                            <motion.div
                                initial={{ x: 200, opacity: 0 }}
                                animate={{
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1, delay: 1.25 },
                                }}
                            >
                                <p className="font-medium text-center translate-y-[-50%] sm:translate-y-[-0%] sm:mb-2 md:text-left dark:text-white">
                                    At EmployeeSmart, we pride ourselves on revolutionizing the traditional employee management system. We seamlessly integrate time-tested features with innovative solutions, creating a comprehensive platform that goes beyond the conventional system.
                                </p>
                                <br />
                                <p className="font-medium text-center translate-y-[-60%] sm:translate-y-[-0%] sm:mb-2 md:text-left dark:text-white">
                                    Our commitment extends to fostering a vibrant community within the organization, promoting seamless communication and engagement. Experience the ease of our rewards system, recognizing and celebrating your team's achievements effortlessly. Additionally, our user-friendly chatbot is designed to provide quick access to company policies, sparing you from the burdensome paperwork. Join us in redefining the future of employee management and communication..
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                {!isHomePage && <Footer />}
            </div>
        </>
    );
};

export default About;
