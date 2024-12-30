import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Aboutme = () => {
  return (
    <div className='lg:flex sm:text-center justify-between p-5 mt-20'>
      {/* Image Section */}
      <div className='w-full lg:w-1/2 mb-5 lg:mb-0 lg:ml-10'>
        <Image src="/MY PICTURE.jpg" alt="" width={450} height={450} />
      </div>

      {/* Text Content Section */}
      <div className='w-full lg:w-1/2 px-5 text-left'>
        <h1 className='text-5xl font-bold mb-4'>About me.</h1>
        <p className='mb-4'>
          Full stack Developer
        </p>
        <p className='mb-4'>
          I'm Okunlola Ridwat, a dedicated full stack developer driven by a passion for crafting intuitive and impactful web applications. My journey in software development began with a fascination for technology and a commitment to mastering both front-end and back-end frameworks. With proficiency in languages such as JavaScript, Python, and frameworks like React and Django, I thrive on tackling complex challenges and delivering solutions that exceed expectations.
        </p>
        <p className='mb-4'>
          I take pride in my ability to collaborate closely with teams and clients, ensuring that every project I work on not only meets but also exceeds its goals. Whether it's implementing responsive user interfaces or optimizing database performance, I am constantly refining my skills to stay ahead in this dynamic field. My ultimate goal is to create seamless digital experiences that resonate with users and drive business success.
        </p>

        {/* Progress Bars */}
        <div className='mb-4'>
          <Progress value={95} text='Frontend Development' className='mt-4' />
          <Progress value={80} text='Backend Development' className='mt-4' />
        </div>

        {/* Buttons */}
        <div className='flex flex-wrap'>
          <Link href={'/Ridwat. CV.pdf'}>
          <Button className='bg-black border border-white mb-2 lg:mb-0 lg:mr-2 text-white'>View CV</Button>
          </Link>
          <Button className='text-black border ml-0 lg:ml-2 bg-white hover:text-white'>Contact</Button>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
