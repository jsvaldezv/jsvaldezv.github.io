const JobPosition = ({ date, mainTitle, subTitle, description, bullets }) => {
    return (
        <div className="group relative flex gap-x-4 sm:gap-x-6">
            {/* Timeline icon + line */}
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-border flex-shrink-0">
                <div className="relative z-10 size-6 flex justify-center items-center">
                    <svg
                        className="shrink-0 size-6 text-muted-foreground"
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

            {/* Content */}
            <div className="flex-1 min-w-0 pb-10 group-last:pb-0">
                <p className="mb-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {date}
                </p>
                <p className="font-semibold text-foreground">
                    {mainTitle}
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                    {subTitle}
                </p>
                {description ? (
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                        {description}
                    </p>
                ) : null}
                {bullets && bullets.length > 0 && (
                    <ul className="list-disc ms-4 mt-2 space-y-2">
                        {bullets.map((item, index) => (
                            <li
                                className="ps-1 text-sm text-muted-foreground leading-relaxed"
                                key={index}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default JobPosition;
