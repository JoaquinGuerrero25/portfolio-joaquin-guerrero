import { useTranslation } from 'react-i18next';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'; // Asegúrate de importar el icono que necesitas
import imageProfile from '../utils/imageProfileDefault.webp'

const AboutMe = () => {
    const { t } = useTranslation();

    return (
        <section className="pb-12 w-full px-6 max-w-[1000px]">
            <div className="flex items-center justify-center h-12 mb-12">
                <h2 className="w-[240px]"><span className="text-[#004cff] dark:text-[#2dd4bf]">01.</span><span className="text-[20px] font-medium pl-1">{t('aboutMe')}</span></h2>
                <span className="w-full border border-gray-500 dark:border-gray-400 h-0"></span>
            </div>
            <div className='flex flex-col gap-6 items-center w-full justify-center lg:flex-row lg:items-start'>
                <div className='w-full flex flex-col items-center justify-start gap-4 text-gray-600 dark:text-gray-300'>
                    <p className='w-full'>{t('textAbout1')}</p>
                    <p className='w-full'>{t('textAbout2')}</p>
                    <p className='w-full'>{t('textAbout3')}</p>
                    <ul className='w-full grid grid-cols-2 gap-1'>
                        <li className='w-[200px] max-w-[100%] max-h-full flex gap-2 h-8 justify-start items-center' >
                            <div className='rotate-45 w-6 flex justify-center items-center h-6'>
                                <FontAwesomeIcon icon={faLocationArrow} className='text-[#4b6cb7] dark:text-[#2dd4bf] h-3 w-3' />
                            </div>
                            <h5 className='dark:text-gray-400 text-gray-500'>React</h5>
                        </li>
                        <li className='w-[200px] max-w-[100%] max-h-full flex gap-2 h-8 justify-start items-center' >
                            <div className='rotate-45 w-6 flex justify-center items-center h-6'>
                                <FontAwesomeIcon icon={faLocationArrow} className='text-[#4b6cb7] dark:text-[#2dd4bf] h-3 w-3' />
                            </div>
                            <h5 className='dark:text-gray-400 text-gray-500'>Node.js</h5>
                        </li>
                        <li className='w-[200px] max-w-[100%] max-h-full flex gap-2 h-8 justify-start items-center' >
                            <div className='rotate-45 w-6 flex justify-center items-center h-6'>
                                <FontAwesomeIcon icon={faLocationArrow} className='text-[#4b6cb7] dark:text-[#2dd4bf] h-3 w-3' />
                            </div>
                            <h5 className='dark:text-gray-400 text-gray-500'>Python</h5>
                        </li>
                        <li className='w-[200px] max-w-[100%] max-h-full flex gap-2 h-8 justify-start items-center' >
                            <div className='rotate-45 w-6 flex justify-center items-center h-6'>
                                <FontAwesomeIcon icon={faLocationArrow} className='text-[#4b6cb7] dark:text-[#2dd4bf] h-3 w-3' />
                            </div>
                            <h5 className='dark:text-gray-400 text-gray-500'>JavaScript</h5>
                        </li>
                        <li className='w-[200px] max-w-[100%] max-h-full flex gap-2 h-8 justify-start items-center' >
                            <div className='rotate-45 w-6 flex justify-center items-center h-6'>
                                <FontAwesomeIcon icon={faLocationArrow} className='text-[#4b6cb7] dark:text-[#2dd4bf] h-3 w-3' />
                            </div>
                            <h5 className='dark:text-gray-400 text-gray-500'>Django</h5>
                        </li>
                        <li className='w-[200px] max-w-[100%] max-h-full flex gap-2 h-8 justify-start items-center' >
                            <div className='rotate-45 w-6 flex justify-center items-center h-6'>
                                <FontAwesomeIcon icon={faLocationArrow} className='text-[#4b6cb7] dark:text-[#2dd4bf] h-3 w-3' />
                            </div>
                            <h5 className='dark:text-gray-400 text-gray-500'>Git</h5>
                        </li>
                        <li className='w-[200px] max-w-[100%] max-h-full flex gap-2 h-8 justify-start items-center' >
                            <div className='rotate-45 w-6 flex justify-center items-center h-6'>
                                <FontAwesomeIcon icon={faLocationArrow} className='text-[#4b6cb7] dark:text-[#2dd4bf] h-3 w-3' />
                            </div>
                            <h5 className='dark:text-gray-400 text-gray-500'>SASS</h5>
                        </li>
                        <li className='w-[200px] max-w-[100%] max-h-full flex gap-2 h-8 justify-start items-center' >
                            <div className='rotate-45 w-6 flex justify-center items-center h-6'>
                                <FontAwesomeIcon icon={faLocationArrow} className='text-[#4b6cb7] dark:text-[#2dd4bf] h-3 w-3' />
                            </div>
                            <h5 className='dark:text-gray-400 text-gray-500'>Figma</h5>
                        </li>
                    </ul>


                    {/* falta un campo ams donde mencione las tecnologias que trabajo */}
                </div>
                <div className='w-full flex justify-center relative items-center max-w-[335px]'>
                    <img
                        src={imageProfile}
                        alt="Joaquín Guerrero"
                        className='object-cover w-full h-full max-w-[240px] max-h-[240px] rounded-xl z-10 shadow-md  md:max-w-[300px] md:max-h-[300px]'
                    />
                    <div className='border-2 border-[#4b6cb7] dark:border-[#2dd4bf] absolute h-[240px] w-[240px] top-5 left-16 z-0 rounded-xl md:w-[300px] md:h-[300px] md:left-10'></div>
                </div>
            </div>

        </section>
    );
};

export default AboutMe;