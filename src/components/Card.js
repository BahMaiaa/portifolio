
function Card({ logo, title, description, techStack, preview, github, linkPreview, linkGithub }) {

    return (
        <>
            <div className='w-full max-w-[372px] lg:w-[320px] xl:w-[372px] placeholder:h-[567px] cursor-pointer'>
                <div className='rounded-t-[20px] min-h-[245px max-h-[245px'  >
                    <img className='rounded-t-[20px]' src={logo} alt='Logo' />
                </div>

                <div className='bg-[#363636] rounded-b-[20px] p-6'>
                    <h3 className='text-2xl xl:text-[28px] font-medium text-darkMode'>{title}</h3>
                    <p className='text-darkMode text-base xl:text-lg my-3'>{description}</p>

                    <p className='text-darkMode text-sm xl:text-lg'><span className='font-medium'>Tech stack:</span> {techStack.join(', ')}</p>
                    <div className='flex items-center justify-between mt-4 max-w-[300px]'>
                        <div>
                            <a className='flex gap-3' href={linkPreview} target="_blank" rel="noreferrer" >
                                <img src={preview} alt="Preview" />
                                <span className='text-white'>Live Preview</span>
                            </a>
                        </div>
                        <div>
                            <a className='flex gap-3' href={linkGithub} target="_blank" rel="noreferrer" >
                                <img src={github} alt="Github" />
                                <span className='text-white'>View Code</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card