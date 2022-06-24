import React from 'react';
import { Link } from 'react-router-dom';

const Subject = () => {
	return (
		<div className=''>
			<div className='container min-h-screen'>
				<main className='flex'>
					<div className='min-h-screen flex flex-col justify-between bg-[#0075FF] mainBg2 bg-opacity-90 pt-[30px] w-[50%]'>
						<img
							src='/images/logo2.png'
							alt='company logo'
							width={188}
							height='81px'
						/>
						<img
							src='/images/ladyBg.png'
							alt='platform dashboard'
							width='100%'
							height={'20%'}
						/>
					</div>
					<div className='min-h-screen w-[50%]'>
						<div className='flex justify-center w-full'>
							<div className='w-[70%] mt-[95px]'>
								<h2 className='text-[32px] font-bold mobile:text-center'>
									Add Subject
								</h2>
								<form className='flex flex-col mt-[20px]'>
									<input
										type='text'
										placeholder='Add a subject...'
										className='px-[24px] py-[17px] mb-[25px] mt-[6px] text-[16px] placeholder-gray-400 input_border w-full outline-none focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight'
									/>

									<div className='w-full text-center mt-[24px]'>
										<Link to={'/add-class'}>
											<div className='py-[10px] px-[20px] md:px-[40px] md:py-[16px] text-[16px] rounded-[8px] w-full bg-[#0075FF] text-white'>
												Next
											</div>
										</Link>
									</div>
								</form>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Subject;
