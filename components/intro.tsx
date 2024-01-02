'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsLinkedin } from 'react-icons/bs';
import { FaGithubSquare } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

export default function Intro() {
    return (
        <section className='mb-28 max-w-[70rem] sm:mb-0 text-center'>
            <div className='flex items-center justify-center'>
                <div className='relative'>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'tween', duration: 0.2 }}>
                        <Image
                            src={'/profile.jpg'}
                            alt='Jesús Viafara'
                            width={192}
                            height={192}
                            quality={95}
                            priority={true}
                            className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'
                        />
                    </motion.div>

                    <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: 125,
                            delay: 0.1,
                            duration: 0.7,
                        }}
                        className='absolute bottom-0 right-0 text-4xl'>
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.p
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl'>
                <span className='font-bold'>Hello,I'm Jesús Viafara.</span> I'm{' '}
                <span className='font-bold'>full-stack web developer</span> with{' '}
                <span className='font-bolds'>2 Years</span> of experience and
                passion for creating innovative and user-friendly web
                applications, with a strong foundation in{' '}
                <span className='underline'>React (Next.js)</span> &{' '}
                <span className='underline'>Node (Express & MongoDB)</span>.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='flex flex-col sm:flex-row justify-center gap-4 px-4 text-lg font-medium'>
                <Link
                    href='#contact'
                    className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none
                    focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition'>
                    Contact me{' '}
                    <BsArrowRight className='opacity-70 group-hover:translate-x-2 group-hover:rotate-90 transition' />
                </Link>

                <a
                    href='/CV.pdf'
                    download
                    className='group bg-white px-7 py-3 flex items-center rounded-full gap-2 outline-none
                    focus:scale-110 hover:scale-110 active:scale-105 transition border border-black/10'>
                    Download CV{' '}
                    <HiDownload className='opacity-60 group-hover:translate-y-1' />
                </a>

                <a
                    href='https://www.linkedin.com/in/jesusviafara/'
                    target='_blank'
                    className='bg-white text-gray-700 p-4 flex items-center rounded-full outline-none
                    focus:scale-[1.15] hover:scale-[1.15] focus:text-gray-950 hover:text-gray-950 active:scale-105 transition border border-black/10'>
                    <BsLinkedin size={28} />
                </a>

                <a
                    href='https://github.com/Jviafara'
                    target='_blank'
                    className='bg-white text-gray-700 p-4 flex items-center rounded-full outline-none
                    focus:scale-[1.15] hover:scale-[1.15] focus:text-gray-950 hover:text-gray-950 active:scale-105 transition border border-black/10'>
                    <FaGithubSquare size={28} />
                </a>
            </motion.div>
        </section>
    );
}
