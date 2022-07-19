import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TbLivePhoto } from 'react-icons/tb';
import { AiOutlineGithub } from 'react-icons/ai';
import './EachProject.css';
import { Link } from 'react-router-dom';

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
            technology: [
                "Html",
                "Css",
                "JavaScript",
                "React",
                "Tailwind",
                "DaisyU",
                "ExpresJs",
                "MongoDB",
                "Stripe",
            ],
            screenshots: [
                "https://i.ibb.co/DW06KGd/car1.png",
                "https://i.ibb.co/XWnS4MC/car2.png",
                "https://i.ibb.co/gTqNvC8/car3.png",
                "https://i.ibb.co/rKh3n8r/car4.png",
                "https://i.ibb.co/TqN4crL/car5.png",
                "https://i.ibb.co/SK4cNb7/car6.png",
                "https://i.ibb.co/2PSzy61/car7.png",
                "https://i.ibb.co/d4S575w/car-8.png",
            ],
            clientLinks:
            {
                id: 32,
                title: "Client Code",
                url: "https://github.com/mohiuddin2721/bd_car_parts_jm_12"
            },
            serverLinks:
            {
                id: 33,
                title: "Server Code",
                url: "https://github.com/mohiuddin2721/bd-car-parts-server-jm-12"
            },
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
            technology: [
                "Html",
                "Css",
                "JavaScript",
                "React",
                "Tailwind",
                "DaisyU",
                "ExpresJs",
                "MongoDB",
            ],
            screenshots: [
                "https://i.ibb.co/DgmTxjJ/ac1.png",
                "https://i.ibb.co/zFdtgH1/ac2.png",
                "https://i.ibb.co/n6PVm2s/ac3.png",
                "https://i.ibb.co/gFTdj52/ac4.png",
            ],
            clientLinks:
            {
                id: 42,
                title: "Client Code",
                url: "https://github.com/mohiuddin2721/ac-stock-house-jm-11"
            },
            serverLinks:
            {
                id: 43,
                title: "Server Code",
                url: "https://github.com/mohiuddin2721/ac-stock-house-server-jm-11"
            },
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
            technology: [
                "Html",
                "Css",
                "JavaScript",
                "React",
                "Tailwind",
                "DaisyU",
            ],
            screenshots: [
                "https://i.ibb.co/NNsY7Nz/legal1.png",
                "https://i.ibb.co/rmTgP14/legal2.png",
                "https://i.ibb.co/4dybnbF/legal3.png",
                "https://i.ibb.co/NmJ20c3/legal4.png",
            ],
            clientLinks:
            {
                id: 52,
                title: "Client Code",
                url: "https://github.com/mohiuddin2721/shawon-legal-consultant-jm-10"
            },
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

    return (
        <div className="detail-card flex flex-col lg:min-h-screen p-5 lg:p-40 hover:text-white">
            <div className="inside-detail flex flex-col md:flex-row lg:flex-row justify-center items-start gap-8 lg:h-[60vh] text-left mb-32">
                <div className="image-detail w-full h-80 lg:w-1/2 lg:h-full rounded-xl overflow-hidden">
                    <img src={eachProject?.image} alt="" />
                </div>
                <div className="w-full lg:w-1/2 flex flex-col h-full justify-center">
                    <div>
                        <h2 className="font-semibold text-sm my-4 text-secondary">
                            {eachProject?.name}
                        </h2>
                        <h2 className="project-title text-accent font-semibold my-4">
                            {eachProject?.type}
                        </h2>
                        <div className="my-3">
                            <h3 className=" text-secondary">Project Overview</h3>
                            <p className='text-sm'>{eachProject?.description}</p>
                        </div>
                        <div className="my-2">
                            <h3 className="text-secondary">Technology used</h3>
                            <div className="flex flex-wrap mr-2">
                                {eachProject?.technology?.map((point, index) => (
                                    <span key={index} className="text-white hover:text-blue-400 btn-xs">
                                        {point}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="button-content flex justify-between mt-1">
                        <a
                            href={eachProject?.liveLinks?.url}
                            target="_blank"
                            rel="noreferrer"
                            className="project-button text-[10px] lg:text-[12px]"
                        >
                            <i className="text-sm text-secondary mr-2"><TbLivePhoto className='text-blue-500'></TbLivePhoto></i>
                            View Live
                        </a>
                        <a
                            href={eachProject?.clientLinks?.url}
                            target="_blank"
                            rel="noreferrer"
                            className="project-button text-[10px] lg:text-[12px]"
                        >
                            <i className="text-sm text-secondary mr-2"><AiOutlineGithub className='text-blue-500'></AiOutlineGithub></i>
                            Client Code
                        </a>
                        <a
                            href={eachProject?.serverLinks?.url}
                            target="_blank"
                            rel="noreferrer"
                            className="project-button text-[10px] lg:text-[12px]"
                        >
                            {" "}
                            <i className="text-sm text-secondary mr-2"><AiOutlineGithub className='text-blue-500'></AiOutlineGithub></i>
                            Server Code
                        </a>
                    </div>
                </div>
            </div>

            <div>
                <p className="text-white text-center font-bold text-xl lg:text-5xl mb-10">
                    Project Screenshots
                </p>
                <div className="screenshot w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {eachProject?.screenshots?.map((screenshot) => (
                        <div>
                            <img className="w-full rounded-3xl" src={screenshot} alt="" />
                        </div>
                    ))}
                </div>
            </div>
            <div className='mt-4'>
                <Link to='/' className='btn btn-sm btn-outline'>Back to home</Link>
            </div>
        </div>
    );
};

export default EachProject;