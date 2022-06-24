import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

type User = {
	term: string;
	year: string;
};

const TermsAndYear = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [showPassword, setshowPassword] = useState<boolean>(false);
	let maxOffset = 20;
	let currYear = new Date().getFullYear();
	let years = [];
	for (let x = 0; x < maxOffset; x++) {
		years.push(currYear - x);
	}

	const yearList = years.map((year, idx) => (
		<option key={idx} value={year}>
			{year}
		</option>
	));
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<User>();

	const onSubmit: SubmitHandler<User> = async (data) => {
		console.log(JSON.stringify(data));
	};
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
						<div className='flex justify-center items-center h-full w-full'>
							<div className='w-[70%]'>
								<h2 className='text-[32px] font-bold mobile:text-center'>
									Set Term and Year
								</h2>
								<form
									onSubmit={handleSubmit(onSubmit)}
									className='flex flex-col mt-[50px]'
								>
									<label htmlFor='term'>Term</label>
									<div className='relative mb-[25px] mt-[6px] flex items-center'>
										<select
											{...register('term')}
											placeholder='First'
											className={`px-[24px] py-[17px] text-[16px] bg-white text-gray-400 rounded-[8px] placeholder-gray-400 border border-[#828282] outline-none w-full focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight`}
										>
											<option>First</option>
											<option>Second</option>
										</select>
										<BiChevronDown className='absolute right-3 text-[20px]' />
									</div>
									<label htmlFor='year'>Year</label>
									<div className='relative mb-[25px] mt-[6px] flex items-center'>
										<select
											{...register('year')}
											placeholder='Year'
											className={`px-[24px] py-[17px] text-[16px] bg-white text-gray-400 rounded-[8px] placeholder-red-300 border border-[#828282] outline-none w-full focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight`}
										>
											{yearList}
										</select>
										<BiChevronDown className='absolute right-3 text-[20px]' />
									</div>

									<div className='w-full text-center mt-[24px]'>
										<Link to={'/add-subject'}>
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

export default TermsAndYear;
