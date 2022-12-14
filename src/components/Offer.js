import React from 'react';
import erp from '../assets/erp.png'
import zoho from '../assets/zohologo.png'
import app from '../assets/app-services.png'
import appdev from '../assets/app-dev.png'
import cyber from '../assets/cyber.png'
import data from '../assets/data.png'
import clud from '../assets/cloud.png'
import net from '../assets/network.png'


const Offer = () => {
    return (
        <div className=' mx-24 pb-12'>
            <h1 className='text-violet-700 font-bold text-6xl  my-8 text-center font-Poppins'>What we offer?</h1>
            <div class="grid grid-cols-2 gap-4">
                <div class="grid grid-cols-4 gap-4 bg-white rounded-lg p-4">
                    <div className='col-span-1 mt-4'>

                        <img src={erp} alt="" />
                    </div>
                    <div className='col-span-3'>
                        <h1 className='text-slate-700  font-Poppins font-semibold text-2xl'>ERP Implementation</h1>
                        <h1 className='text-slate-700  font-Poppins my-3'>We offer our services from planning in plan creation, standard industry process …</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-4 bg-white rounded-lg p-4">
                    <div className='col-span-1 mt-4'>
                        <img className='' src={zoho} alt="" />

                    </div>
                    <div className='col-span-3'>
                        <h1 className='text-slate-700  font-Poppins font-semibold text-2xl'>ZOHO Products</h1>
                        <h1 className='text-slate-700  font-Poppins my-3'>Techno solutions is zoho partner in middle Est and Africa. Together with &hellip…</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-4 bg-white rounded-lg p-4">
                    <div className='col-span-1 mt-4'>

                        <img src={app} alt="" />
                    </div>
                    <div className='col-span-3'>
                        <h1 className='text-slate-700  font-Poppins font-semibold text-2xl'>
                            Application Management</h1>
                        <h1 className='text-slate-700  font-Poppins my-3'>Techno-I’s Application Management services provide systems and application…</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-4 bg-white rounded-lg p-4">
                    <div className='col-span-1 mt-4'>

                        <img src={appdev} alt="" />
                    </div>
                    <div className='col-span-3'>
                        <h1 className='text-slate-700  font-Poppins font-semibold text-2xl'>Application Development</h1>
                        <h1 className='text-slate-700 font-Poppins my-3'>Techno-I’s Application Management services provide systems and application…</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-4 bg-white rounded-lg p-4">
                    <div className='col-span-1 mt-4'>

                        <img src={cyber} alt="" />
                    </div>
                    <div className='col-span-3'>
                        <h1 className='text-slate-700 font-Poppins font-semibold text-2xl'>Cyber Security</h1>
                        <h1 className='text-slate-700 font-Poppins my-3'>Our cybersecurity services help you reduce the risk of a cyber-attack &he…</h1>
                        <a className='text-orange-500 font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-4 bg-white rounded-lg p-4">
                    <div className='col-span-1 mt-4'>

                        <img src={data} alt="" />
                    </div>
                    <div className='col-span-3'>
                        <h1 className='text-slate-700 font-Poppins font-semibold text-2xl'>
                            Data Analytics</h1>
                        <h1 className='text-slate-700 font-Poppins my-3'>Our dedicated experts are certified in handling Network infrastructure remotely …</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-4 bg-white rounded-lg p-4">
                    <div className='col-span-1 mt-4'>

                        <img src={clud} alt="" />
                    </div>
                    <div className='col-span-3'>
                        <h1 className='text-slate-700 font-Poppins font-semibold text-2xl'>
                            Cloud Integrations</h1>
                        <h1 className='text-slate-700 font-Poppins my-3'>Digital transformation is a reality for every company. But transforming an exist…</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
                <div class="grid grid-cols-4 gap-4 bg-white rounded-lg p-4">
                    <div className='col-span-1 mt-4'>

                        <img src={net} alt="" />
                    </div>
                    <div className='col-span-3'>
                        <h1 className='text-slate-700  font-Poppins font-semibold text-2xl'>
                            Networking & infra</h1>
                        <h1 className='text-slate-700  font-Poppins my-3'>Our dedicated experts are certified in handling Network infrastructure remotely …</h1>
                        <a className='text-orange-500  font-Poppins uppercase text-md font-semibold' href="">Know more</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Offer;