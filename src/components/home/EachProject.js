import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TbLivePhoto } from 'react-icons/tb';
import { AiOutlineGithub } from 'react-icons/ai';

const EachProject = () => {
    const [eachProject, setEachProject] = useState({});
    const { id } = useParams();

    const projects = [
        {
            id: 21,
            name: "BD Car Parts",
            type: "Manufacturing Company Web Site",
            image: "https://i.ibb.co/34NjL41/carFront.png",
            stack: "Full-Stack",
            description: "This is a full-stack responsive react project where dealers can buy tools in bulk. Users can go to the dashboard and pay for or cancel their orders. Only admins see all orders and their payment status in the dashboard. They can also ship paid orders. Admins can make normal users admin and add or delete products. Data stored in mongodb database. Used jwt Token for more secure.",
            links: [
                {
                    id: 32,
                    title: "Client Code",
                    url: "https://github.com/mohiuddin2721/bd_car_parts_jm_12"
                },
                {
                    id: 33,
                    title: "Server Code",
                    url: "https://github.com/mohiuddin2721/bd-car-parts-server-jm-12"
                }
            ],
            liveLinks:
            {
                id: 61,
                title: "BD Car Parts",
                url: "https://bd-car-parts.web.app/"
            }

        },
        {
            id: 22,
            name: "AC Stock House",
            type: "Inventory Manage Web App",
            image: "https://i.ibb.co/VphL8Wf/acFront.png",
            stack: "Full-Stack",
            description: "This is another full stack responsive web application to manage store inventory. Where users can update the stock of a product by restocking or delivering products. The user can add or delete products from the list. Users can report bugs from the bug report section on the home page. Used jwt Token for more secure. Data stored in mongodb database.",
            links: [
                {
                    id: 42,
                    title: "Client Code",
                    url: "https://github.com/mohiuddin2721/ac-stock-house-jm-11"
                },
                {
                    id: 43,
                    title: "Server Code",
                    url: "https://github.com/mohiuddin2721/ac-stock-house-server-jm-11"
                }
            ],
            liveLinks:
            {
                id: 62,
                title: "AC Stock House",
                url: "https://ac-stock-house.web.app/"
            }

        },
        {
            id: 23,
            name: "shawon Legal Consultant",
            type: "Independent Service Provider Site",
            image: "https://i.ibb.co/2khPnLs/legal-Front.png",
            stack: "Front-end",
            description: "This is a simple react website with routing and firebase authentication. Users can log in using email-password or google pop-up. Users cannot access the checkout page without logging in.",
            links: [
                {
                    id: 52,
                    title: "Client Code",
                    url: "https://github.com/mohiuddin2721/shawon-legal-consultant-jm-10"
                }
            ],
            liveLinks:
            {
                id: 63,
                title: "shawon Legal Consultant",
                url: "https://shawon-legal-consultant.web.app/"
            }

        }
    ]

    useEffect(() => {
        const project = projects.find((p) => p.id === +id)
        setEachProject(project)
    }, [id]);

    // console.log(eachProject);


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col md:flex-row lg:flex-row">
                    <img src={eachProject.image} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-sm text-green-500 mb-5">{eachProject.name} <span className='text-sm text-green-500 badge h-auto'>| {eachProject.stack} |</span></h1>
                        <h1 className="text-xl font-bold">{eachProject.type}</h1>
                        <p className="py-6">{eachProject.description}</p>
                        <div className='space-x-48'>
                            {
                                eachProject?.links?.map(each =>
                                    <a key={each.id} href={each?.url} target='_blank' className='text-sm btn btn-active hover:border-green-500 btn-xs text-end cursor-pointer'>
                                        <AiOutlineGithub className='text-blue-500 mr-1'></AiOutlineGithub>{each?.title}</a>)
                            }
                            <a href={eachProject?.liveLinks?.url} target='_blank' className='text-sm btn btn-active hover:border-green-500 btn-xs text-end cursor-pointer'><TbLivePhoto className='text-blue-500 mr-1'></TbLivePhoto>Live</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EachProject;