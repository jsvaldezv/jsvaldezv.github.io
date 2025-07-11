const JobPosition = ({ date, mainTitle, subTitle, description, bullets, icon }) => {
    return (
        <div className="group relative flex gap-x-5">
            {/* Icon */}
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
                <div className="relative z-10 size-6 flex justify-center items-center">
                    {icon}
                    {/* <svg
                        className="shrink-0 size-6 text-gray-800 dark:text-neutral-200"
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
                    </svg> */}
                    {/* <svg
                        class="w-6 h-6 text-gray-800 dark:text-white"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7.58209 8.96025 9.8136 11.1917l-1.61782 1.6178c-1.08305-.1811-2.23623.1454-3.07364.9828-1.1208 1.1208-1.32697 2.8069-.62368 4.1363.14842.2806.42122.474.73509.5213.06726.0101.1347.0133.20136.0098-.00351.0666-.00036.1341.00977.2013.04724.3139.24069.5867.52125.7351 1.32944.7033 3.01552.4971 4.13627-.6237.8375-.8374 1.1639-1.9906.9829-3.0736l4.8107-4.8108c1.0831.1811 2.2363-.1454 3.0737-.9828 1.1208-1.1208 1.3269-2.80688.6237-4.13632-.1485-.28056-.4213-.474-.7351-.52125-.0673-.01012-.1347-.01327-.2014-.00977.0035-.06666.0004-.13409-.0098-.20136-.0472-.31386-.2406-.58666-.5212-.73508-1.3294-.70329-3.0155-.49713-4.1363.62367-.8374.83741-1.1639 1.9906-.9828 3.07365l-1.7788 1.77875-2.23152-2.23148-1.41419 1.41424Zm1.31056-3.1394c-.04235-.32684-.24303-.61183-.53647-.76186l-1.98183-1.0133c-.38619-.19746-.85564-.12345-1.16234.18326l-.86321.8632c-.3067.3067-.38072.77616-.18326 1.16235l1.0133 1.98182c.15004.29345.43503.49412.76187.53647l1.1127.14418c.3076.03985.61628-.06528.8356-.28461l.86321-.8632c.21932-.21932.32446-.52801.2846-.83561l-.14417-1.1127ZM19.4448 16.4052l-3.1186-3.1187c-.7811-.781-2.0474-.781-2.8285 0l-.1719.172c-.7811.781-.7811 2.0474 0 2.8284l3.1186 3.1187c.7811.781 2.0474.781 2.8285 0l.1719-.172c.7811-.781.7811-2.0474 0-2.8284Z"
                        />
                    </svg> */}
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
