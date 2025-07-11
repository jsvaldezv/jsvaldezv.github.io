const JobPosition = ({ date, mainTitle, subTitle, description, bullets }) => {
    return (
        <div className="group relative flex gap-x-5">
            {/* Icon */}
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-6 flex justify-center items-center">
                    <svg
                        className="shrink-0 size-6 text-gray-800 dark:text-neutral-200"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 12h.01" />
                        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                        <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                        <rect width="20" height="14" x="2" y="6" rx="2" />
                    </svg>
                </div>
            </div>
            {/* End Icon */}

            {/* Right Content */}
            <div className="grow pb-8 group-last:pb-0">
                <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                    {date}
                </h3>

                <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                    {mainTitle}
                </p>

                <p className="font-light text-sm text-gray-800 dark:text-neutral-200">
                    {subTitle}
                </p>

                <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                    {description}
                </p>

                <ul className="list-disc ms-6 mt-3 space-y-1.5">
                    {bullets.map((item, index) => {
                        return (
                            <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                                {item}
                            </li>
                        );
                    })}

                    {/* <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Designed template UIs and design systems in Figma.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Converted UIs into responsive HTML and CSS with a
                        mobile-first approach.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Created custom illustrations and item description
                        banners.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Provided detailed documentation and customer support on
                        GitHub.
                    </li>
                    <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                        Engaged with users to address setup inquiries, bug
                        issues, and feedback.
                    </li> */}
                </ul>

                {/* <ul className="list-disc ms-6 mt-3 space-y-1.5">
                                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                                    Designed template UIs and design systems in
                                    Figma.
                                </li>
                                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                                    Converted UIs into responsive HTML and CSS
                                    with a mobile-first approach.
                                </li>
                                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                                    Created custom illustrations and item
                                    description banners.
                                </li>
                                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                                    Provided detailed documentation and customer
                                    support on GitHub.
                                </li>
                                <li className="ps-1 text-sm text-gray-600 dark:text-neutral-400">
                                    Engaged with users to address setup
                                    inquiries, bug issues, and feedback.
                                </li>
                            </ul> */}

                {/* <a
                                className="block border border-gray-200 rounded-lg hover:shadow-2xs focus:outline-hidden dark:border-neutral-700 mt-4"
                                target="_blank"
                                href="https://centroculturadigital.mx/actividad/Nexos-Encuentro-de-tecnologias-aplicadas-a-la-musica-y-el-sonido-_dLQWEaN"
                            >
                                <div className="relative flex items-center overflow-hidden">
                                    <img
                                        className="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                                        src="https://centroculturadigital.mx/actividad/Nexos-Encuentro-de-tecnologias-aplicadas-a-la-musica-y-el-sonido-_dLQWEaN"
                                        alt="Blog Image"
                                    />

                                    <div className="grow p-4 ms-32 sm:ms-48">
                                        <div className="min-h-24 flex flex-col justify-center">
                                            <h3 className="font-semibold text-sm text-gray-800 dark:text-neutral-300">
                                                Studio by Mailchimp
                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500 dark:text-neutral-500">
                                                Produce professional, reliable
                                                streams easily leveraging
                                                Mailchimp's innovative broadcast
                                                studio.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </a> */}
            </div>
        </div>
    );
};

export default JobPosition;
