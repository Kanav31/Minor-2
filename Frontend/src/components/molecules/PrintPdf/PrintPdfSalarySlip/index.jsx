// import React, { useRef, useEffect, useState } from "react";
// import LogoPt from "../../../../assets/images/logo/logo-dark.svg";
// import LogoEmployeePayPro from "../../../../assets/images/logo/logo-sipeka.png";
// import { useReactToPrint } from "react-to-print";
// import { useNavigate, useLocation } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import {
//     fetchSlipGajiByMonth,
//     fetchSlipGajiByName,
//     fetchSlipGajiByYear,
//     getMe
// } from "../../../../config/redux/action";
// import { ButtonOne, ButtonTwo } from "../../../atoms";

// const PrintPdfSlipGaji = () => {
//     const componentRef = useRef();
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//     const location = useLocation();
//     const searchParams = new URLSearchParams(location.search);
//     const month = searchParams.get("month");
//     const year = searchParams.get("year");
//     const name = searchParams.get("name");

//     const [bulan, setBulan] = useState("");
//     const [tahun, setTahun] = useState("");

//     const { isError, user } = useSelector((state) => state.auth);
//     const { dataSlipGaji } = useSelector((state) => state.slipGaji);

//     const getDataByYear = async (selectedYear) => {
//         dispatch(fetchSlipGajiByYear(selectedYear));
//     };

//     const getDataByMonth = async (selectedMonth) => {
//         dispatch(fetchSlipGajiByMonth(selectedMonth));
//     };

//     const getDataByName = async (selectedName) => {
//         dispatch(fetchSlipGajiByName(selectedName));
//     };

//     const handlePrint = useReactToPrint({
//         content: () => componentRef.current,
//         documentTitle: "Slip_Gaji_Pegawai_PT. Humpuss Karbometil Selulosa",
//     });

//     useEffect(() => {
//         getDataByYear(year);
//         getDataByMonth(month);
//         getDataByName(name);
//     }, [year, month, name]);

//     useEffect(() => {
//         dispatch(getMe());
//     }, [dispatch]);

//     useEffect(() => {
//         if (isError) {
//             navigate("/login");
//         }
//         if (user && user.hak_akses !== "admin") {
//             navigate("/dashboard");
//         } else {
//             handlePrint();
//         }
//     }, [isError, user, navigate, handlePrint]);

//     useEffect(() => {
//         const today = new Date();
//         const monthNames = [
//             "Januari", "Februari", "Maret", "April", "Mei", "Juni",
//             "Juli", "Agustus", "September", "Oktober", "November", "Desember"
//         ];
//         const month = monthNames[today.getMonth()];
//         const year = today.getFullYear();
//         setBulan(month);
//         setTahun(year);
//     }, []);

//     return (
//         <>
//             <div className="flex flex-col md:flex-row w-full gap-3 text-center p-6 bg-white dark:bg-meta-4">
//                 <div>
//                     <ButtonOne onClick={handlePrint}>
//                         <span>Cetak</span>
//                     </ButtonOne>
//                 </div>
//                 <div>
//                     <ButtonTwo
//                         onClick={() => navigate(-1)}
//                     >
//                         <span>Kembali</span>
//                     </ButtonTwo>
//                 </div>
//             </div >
//             <div ref={componentRef} >
//                 {dataSlipGaji.map((data, index) => {
//                     return (
//                         <div key={index} className="w-200% h-100% p-10 bg-white dark:bg-meta-4">
//                             <div className="flex items-center gap-24 object-cover border-b-4 border-black dark:border-white">
//                                 <img className="w-35"
//                                     src={LogoEmployeePayPro}
//                                     title="Logo EmployeePayPro"
//                                     alt="Logo EmployeePayPro" />
//                                 <h1 className="text-black text-2xl font-bold boder  dark:text-white">
//                                     PT. Humpuss Karbometil Selulosa
//                                 </h1>
//                                 <img className="w-35"
//                                     src={LogoPt}
//                                     title="Logo PT.Humpuss Karbometil Selulosa"
//                                     alt="Logo PT.Humpuss Karbometil Selulosa"
//                                 />
//                             </div>
//                             <h1 className="text-center text-black dark:text-white my-4 text-xl font-medium boder py-2">
//                                 Daftar Gaji Pegawai
//                             </h1>
//                             <div className="w-full md:text-lg">
//                                 <h2 className="font-medium mb-4 block text-black dark:text-white">
//                                     <span className="inline-block w-32 md:w-40">Nama Pegawai</span>
//                                     <span className="pl-[-8] md:pl-0"></span>
//                                     <span className="inline-block w-7">:</span>
//                                     {name}
//                                 </h2>
//                                 <h2 className="font-medium mb-4 block text-black dark:text-white">
//                                     <span className="inline-block w-32 md:w-40">NIK</span>
//                                     <span className="pl-[-8] md:pl-0"></span>
//                                     <span className="inline-block w-7">:</span>
//                                     {data.nik}
//                                 </h2>
//                                 <h2 className="font-medium mb-4 block text-black dark:text-white">
//                                     <span className="inline-block w-32 md:w-40">Jabatan</span>
//                                     <span className="pl-[-8] md:pl-0"></span>
//                                     <span className="inline-block w-7">:</span>
//                                     {data.jabatan}
//                                 </h2>
//                                 <h2 className="font-medium mb-4 block text-black dark:text-white">
//                                     <span className="inline-block w-32 md:w-40">Bulan</span>
//                                     <span className="pl-[-8] md:pl-0"></span>
//                                     <span className="inline-block w-7">:</span>
//                                     {month}
//                                 </h2>
//                                 <h2 className="font-medium mb-4 block text-black dark:text-white">
//                                     <span className="inline-block w-32 md:w-40">Tahun</span>
//                                     <span className="inline-block w-7">:</span>
//                                     {year}
//                                     <span className="pl-[-8] md:pl-0"></span>
//                                 </h2>
//                             </div>

//                             <div className="max-w-full overflow-x-auto py-4">
//                                 <table className='w-full table-auto'>
//                                     <thead>
//                                         <tr className='bg-white text-left dark:bg-meta-4'>
//                                             <th className='py-4 border-t border-l font-medium text-center text-black dark:text-white'>
//                                                 No
//                                             </th>
//                                             <th className='py-4 px-4 border-t border-l text-center font-medium text-black dark:text-white'>
//                                                 Keterangan
//                                             </th>
//                                             <th className='py-4 px-4 border-t text-center border-l border-r font-medium text-black dark:text-white'>
//                                                 Jumlah
//                                             </th>
//                                         </tr>
//                                     </thead>
//                                     <tbody>
//                                         <tr className='dark:border-white'>
//                                             <td className='border-b border-black border-t border-l dark:border-white py-5 text-center text-black dark:text-white'>
//                                                 {index + 1}
//                                             </td>
//                                             <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
//                                                 Gaji Pokok
//                                             </td>
//                                             <td className='border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
//                                                 Rp. {data.gaji_pokok}
//                                             </td>
//                                         </tr>
//                                         <tr className=' dark:border-white'>
//                                             <td className='border-b border-black border-t border-l dark:border-white py-5 text-center text-black dark:text-white'>
//                                                 {index + 2}
//                                             </td>
//                                             <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
//                                                 Tunjangan Transportasi
//                                             </td>
//                                             <td className='border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
//                                                 Rp. {data.tj_transport}
//                                             </td>
//                                         </tr>
//                                         <tr className=' dark:border-white'>
//                                             <td className='border-b border-black border-t border-l dark:border-white py-5 text-center text-black dark:text-white'>
//                                                 {index + 3}
//                                             </td>
//                                             <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
//                                                 Uang Makan
//                                             </td>
//                                             <td className='border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
//                                                 Rp. {data.uang_makan}
//                                             </td>
//                                         </tr>
//                                         <tr className=' dark:border-white'>
//                                             <td className='border-b border-black border-t border-l dark:border-white py-5 text-center text-black dark:text-white'>
//                                                 {index + 4}
//                                             </td>
//                                             <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
//                                                 Potongan
//                                             </td>
//                                             <td className='border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
//                                                 Rp. {data.potongan}
//                                             </td>
//                                         </tr>
//                                         <tr className=' dark:border-white'>
//                                             <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
//                                             </td>
//                                             <td className='font-medium border-b border-black dark:border-white py-5 px-2 text-right text-black dark:text-white'>
//                                                 Total Gaji :
//                                             </td>
//                                             <td className='font-medium border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
//                                                 Rp. {data.total}
//                                             </td>
//                                         </tr>
//                                     </tbody>
//                                 </table>
//                             </div>
//                             <div className="py-6 flex justify-between items-center">
//                                 <div className="font-medium text-black dark:text-white">
//                                     <span className="p-6">Pegawai</span>
//                                     <br />
//                                     <br />
//                                     <br />
//                                     <br />
//                                     <span>{name}</span>
//                                 </div>
//                                 <div className="font-medium text-black dark:text-white">
//                                     <span className="text-right">Karawang, {`${new Date().getDate()} ${bulan} ${tahun}`}</span>
//                                     <br />
//                                     <span>Finance</span>
//                                     <br />
//                                     <br />
//                                     <span className="p-8 italic text-black dark:text-white">Tanda Tangan</span>
//                                 </div>
//                             </div>
//                             <div className="italic text-black dark:text-white mt-30">
//                                 Dicetak Pada : {`${new Date().getDate()} ${bulan} ${tahun}`}
//                             </div>
//                         </div>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };

// export default PrintPdfSlipGaji;

import React, { useRef, useEffect, useState } from "react";
import CompanyLogo from "../../../../assets/images/logo/logo-dark.svg";
import EmployeePayProLogo from "../../../../assets/images/logo/logo-sipeka.png";
import { useReactToPrint } from "react-to-print";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchSlipSalaryByMonth,
    fetchSlipSalaryByName,
    fetchSlipSalaryByYear,
    getMe
} from "../../../../config/redux/action";
import { ButtonOne, ButtonTwo } from "../../../atoms";

const PrintPdfSalarySlip = () => {
    const componentRef = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const month = searchParams.get("month");
    const year = searchParams.get("year");
    const name = searchParams.get("name");

    const [selectedMonth, setSelectedMonth] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const { isError, user } = useSelector((state) => state.auth);
    const { salarySlipData } = useSelector((state) => state.salarySlip);

    const getDataByYear = async (selectedYear) => {
        dispatch(fetchSlipSalaryByYear(selectedYear));
    };

    const getDataByMonth = async (selectedMonth) => {
        dispatch(fetchSlipSalaryByMonth(selectedMonth));
    };

    const getDataByName = async (selectedName) => {
        dispatch(fetchSlipSalaryByName(selectedName));
    };

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: "Salary_Slip_Employee_PT. Humpuss Karbometil Selulosa",
    });

    useEffect(() => {
        getDataByYear(year);
        getDataByMonth(month);
        getDataByName(name);
    }, [year, month, name]);

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            navigate("/login");
        }
        if (user && user.access_level !== "admin") {
            navigate("/dashboard");
        } else {
            handlePrint();
        }
    }, [isError, user, navigate, handlePrint]);

    useEffect(() => {
        const today = new Date();
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        const currentMonth = monthNames[today.getMonth()];
        const currentYear = today.getFullYear();
        setSelectedMonth(currentMonth);
        setSelectedYear(currentYear);
    }, []);

    return (
        <>
            <div className="flex flex-col md:flex-row w-full gap-3 text-center p-6 bg-white dark:bg-meta-4">
                <div>
                    <ButtonOne onClick={handlePrint}>
                        <span>Print</span>
                    </ButtonOne>
                </div>
                <div>
                    <ButtonTwo
                        onClick={() => navigate(-1)}
                    >
                        <span>Back</span>
                    </ButtonTwo>
                </div>
            </div>
            <div ref={componentRef} >
                {salarySlipData.map((data, index) => {
                    return (
                        <div key={index} className="w-200% h-100% p-10 bg-white dark:bg-meta-4">
                            <div className="flex items-center gap-24 object-cover border-b-4 border-black dark:border-white">
                                <img className="w-35"
                                    src={EmployeePayProLogo}
                                    title="EmployeePayPro Logo"
                                    alt="EmployeePayPro Logo" />
                                <h1 className="text-black text-2xl font-bold boder dark:text-white">
                                    PT. Humpuss Karbometil Selulosa
                                </h1>
                                <img className="w-35"
                                    src={CompanyLogo}
                                    title="PT.Humpuss Karbometil Selulosa Logo"
                                    alt="PT.Humpuss Karbometil Selulosa Logo"
                                />
                            </div>
                            <h1 className="text-center text-black dark:text-white my-4 text-xl font-medium border py-2">
                                Employee Salary List
                            </h1>
                            <div className="w-full md:text-lg">
                                <h2 className="font-medium mb-4 block text-black dark:text-white">
                                    <span className="inline-block w-32 md:w-40">Employee Name</span>
                                    <span className="pl-[-8] md:pl-0"></span>
                                    <span className="inline-block w-7">:</span>
                                    {name}
                                </h2>
                                <h2 className="font-medium mb-4 block text-black dark:text-white">
                                    <span className="inline-block w-32 md:w-40">NIK</span>
                                    <span className="pl-[-8] md:pl-0"></span>
                                    <span className="inline-block w-7">:</span>
                                    {data.nik}
                                </h2>
                                <h2 className="font-medium mb-4 block text-black dark:text-white">
                                    <span className="inline-block w-32 md:w-40">Position</span>
                                    <span className="pl-[-8] md:pl-0"></span>
                                    <span className="inline-block w-7">:</span>
                                    {data.position}
                                </h2>
                                <h2 className="font-medium mb-4 block text-black dark:text-white">
                                    <span className="inline-block w-32 md:w-40">Month</span>
                                    <span className="pl-[-8] md:pl-0"></span>
                                    <span className="inline-block w-7">:</span>
                                    {month}
                                </h2>
                                <h2 className="font-medium mb-4 block text-black dark:text-white">
                                    <span className="inline-block w-32 md:w-40">Year</span>
                                    <span className="inline-block w-7">:</span>
                                    {year}
                                    <span className="pl-[-8] md:pl-0"></span>
                                </h2>
                            </div>

                            <div className="max-w-full overflow-x-auto py-4">
                                <table className='w-full table-auto'>
                                    <thead>
                                        <tr className='bg-white text-left dark:bg-meta-4'>
                                            <th className='py-4 border-t border-l font-medium text-center text-black dark:text-white'>
                                                No
                                            </th>
                                            <th className='py-4 px-4 border-t border-l text-center font-medium text-black dark:text-white'>
                                                Description
                                            </th>
                                            <th className='py-4 px-4 border-t text-center border-l border-r font-medium text-black dark:text-white'>
                                                Amount
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className='dark:border-white'>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 text-center text-black dark:text-white'>
                                                {index + 1}
                                            </td>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
                                                Basic Salary
                                            </td>
                                            <td className='border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
                                                Rp. {data.basic_salary}
                                            </td>
                                        </tr>
                                        <tr className=' dark:border-white'>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 text-center text-black dark:text-white'>
                                                {index + 2}
                                            </td>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
                                                Transport Allowance
                                            </td>
                                            <td className='border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
                                                Rp. {data.transport_allowance}
                                            </td>
                                        </tr>
                                        <tr className=' dark:border-white'>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 text-center text-black dark:text-white'>
                                                {index + 3}
                                            </td>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
                                                Meal Allowance
                                            </td>
                                            <td className='border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
                                                Rp. {data.meal_allowance}
                                            </td>
                                        </tr>
                                        <tr className=' dark:border-white'>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 text-center text-black dark:text-white'>
                                                {index + 4}
                                            </td>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
                                                Deduction
                                            </td>
                                            <td className='border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
                                                Rp. {data.deduction}
                                            </td>
                                        </tr>
                                        <tr className=' dark:border-white'>
                                            <td className='border-b border-black border-t border-l dark:border-white py-5 px-4 text-black dark:text-white'>
                                            </td>
                                            <td className='font-medium border-b border-black dark:border-white py-5 px-2 text-right text-black dark:text-white'>
                                                Total Salary :
                                            </td>
                                            <td className='font-medium border-b border-black border-t border-l border-r dark:border-white py-5 px-4 text-black dark:text-white'>
                                                Rp. {data.total_salary}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="py-6 flex justify-between items-center">
                                <div className="font-medium text-black dark:text-white">
                                    <span className="p-6">Employee</span>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <span>{name}</span>
                                </div>
                                <div className="font-medium text-black dark:text-white">
                                    <span className="text-right">Karawang, {`${new Date().getDate()} ${selectedMonth} ${selectedYear}`}</span>
                                    <br />
                                    <span>Finance</span>
                                    <br />
                                    <br />
                                    <span className="p-8 italic text-black dark:text-white">Signature</span>
                                </div>
                            </div>
                            <div className="italic text-black dark:text-white mt-30">
                                Printed On: {`${new Date().getDate()} ${selectedMonth} ${selectedYear}`}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default PrintPdfSalarySlip;
