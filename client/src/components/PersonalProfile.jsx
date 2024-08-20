import React from 'react';
import { useTranslation } from 'react-i18next';

const PersonalProfile = () => {
  const { t } = useTranslation();

  return (
    <section className="flex justify-center items-center h-[92vh]">
      <div className='flex flex-col gap-2 w-full max-w-[1000px] px-6'>
        <h5 className='text-md text-gray-500 dark:text-gray-400 lg:text-xl'>{t('greeting')}</h5>
        <h2 className='font-bold text-[32px] lg:text-[48px] xl:text-[64px]'>Joaquín Guerrero</h2>
        <h3 className='font-bold text-light dark:text-dark text-[32px] lg:text-[48px] xl:text-[64px]'>{t('profession')}</h3>
        <p className='text-gray-500 dark:text-gray-300'>{t('descriptionJob')}</p>
        <div className='relative w-[200px] h-[50px] mt-6'>
          <div className='bg-[#4b6cb7] dark:bg-[#2dd4bf] w-full h-full p-1 rounded-md'>
            <button
              className='text-[#4b6cb7] dark:text-[#2dd4bf] tracking-wide rounded-md font-semibold bg-white dark:bg-gray-900 border-2 border-[#4b6cb7] dark:border-[#2dd4bf] w-full h-full absolute top-0 left-0 transition-transform duration-300 ease-in-out hover:-translate-x-1 hover:-translate-y-1'
            >
              {t('downloadCv')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalProfile;
