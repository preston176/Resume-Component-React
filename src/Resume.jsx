//education data array
const educationData = [
    {
        degree: 'Master of Computer Science',
        duration: '2015 - 2016',
        institution: 'University of XYZ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.',
    },
    {
        degree: 'Bachelor of Computer Science',
        duration: '2010 - 2014',
        institution: 'University of ABC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.',
    },
    {
        degree: 'Diploma in Computer Science',
        duration: '2006 - 2010',
        institution: 'XYZ Institution',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.',
    },
];
//experience data array
const experienceData = [
    {
        position: 'Senior UX/UI Designer',
        duration: 'Jan 2020 - Present',
        company: 'Bergnaum, Hills and Howe',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.',
    },
    {
        position: 'Product Designer',
        duration: 'Jan 2016 - December 2019',
        company: 'Langosh, Sipes and Raynor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.',
    },
    {
        position: 'UI/UX Designer',
        duration: 'Jan 2014 - December 2015',
        company: 'Strosin, Maggio and Homenick',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ligula nulla, tincidunt id faucibus sed, suscipit feugiat turpis.',
    },
];

const Resume = () => {
    return (
        <div className="bg-gray-900 text-white font-sans min-h-screen">
            <div className="container mx-auto py-10 px-5">
                <h1 className="text-center text-3xl font-bold mb-8">RESUME</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
                    {/* Education Section */}
                    <div className="relative">
                        <h2 className="text-2xl font-bold mb-8">Education</h2>
                        {educationData.map((education, index) => (
                            <div key={index} className="mb-0 pb-5 border-l-2 border-green-500 pl-5 relative">
                                <div className="absolute left-0 -ml-2 w-4 h-4 bg-gray-900 border-2 border-green-500 rounded-full"></div>
                                <h3 className="text-xl font-semibold">{education.degree}</h3>
                                <p className="text-gray-400">{education.duration}</p>
                                <p className="text-lg font-semibold">{education.institution}</p>
                                <p className="text-gray-500">{education.description}</p>
                            </div>
                        ))}
                    </div>
                    {/* Experience Section */}
                    <div className="relative">
                        <h2 className="text-2xl font-bold mb-8">Experience</h2>
                        {experienceData.map((experience, index) => (
                            <div key={index} className="mb-0 pb-5 border-l-2 border-green-500 pl-5 relative">
                                <div className="absolute left-0 -ml-2 w-4 h-4 bg-gray-900 border-2 border-green-500 rounded-full"></div>
                                <h3 className="text-xl font-semibold">{experience.position}</h3>
                                <p className="text-gray-400">{experience.duration}</p>
                                <p className="text-lg font-semibold">{experience.company}</p>
                                <p className="text-gray-500">{experience.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;