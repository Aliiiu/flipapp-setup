import React, { useState } from 'react';
import { TbEye } from 'react-icons/tb';
import { FiUploadCloud } from 'react-icons/fi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

type User = {
	name: string;
	schoolName: string;
	email: string;
	phoneNumber: string;
	role: string;
	schoolAddress: string;
	schoolSize: string;
};

const SchoolForm = () => {
	const [showModal, setShowModal] = useState<boolean>(false);
	const [showPassword, setshowPassword] = useState<boolean>(false);
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
						<div className='flex justify-center mb-[80px] mt-[100px] w-full'>
							<div className='w-[70%]'>
								<h2 className='text-[30px] font-bold mobile:text-center'>
									Get Started
								</h2>
								<p className='text-[16px] mobile:text-center'>
									For the purpose of industry regulation, your <br /> details
									are required.
								</p>
								<form
									onSubmit={handleSubmit(onSubmit)}
									className='flex flex-col mt-[50px]'
								>
									<label htmlFor='name'>Your Full Name*</label>
									<input
										required
										type='text'
										{...register('name')}
										placeholder='Name'
										className={`px-[24px] py-[17px] mb-[25px] mt-[6px] text-[16px] rounded-[8px] placeholder-gray-400 border border-[#828282] outline-none w-full focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight`}
									/>
									<label htmlFor='school name'>Your School Name*</label>
									<input
										required
										type='text'
										{...register('schoolName')}
										placeholder='Enter your school name'
										className='px-[24px] py-[17px] mb-[25px] mt-[6px] text-[16px] placeholder-gray-400 input_border w-full outline-none focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight'
									/>
									<label htmlFor='email'>Your Email*</label>
									<input
										required
										type='email'
										{...register('email')}
										placeholder='Enter your Email'
										className='px-[24px] py-[17px] mb-[25px] mt-[6px] text-[16px] placeholder-gray-400 input_border w-full outline-none focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight'
									/>
									<label htmlFor='password'>Your Password*</label>
									<div className='relative flex items-center mb-[25px] mt-[6px] '>
										<input
											type={showPassword ? 'text' : 'password'}
											{...register('phoneNumber')}
											placeholder='Enter your password'
											className='px-[24px] py-[17px] text-[16px] input_border placeholder-gray-400 w-full outline-none focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight'
										/>
										<TbEye
											onClick={() => setshowPassword((prevState) => !prevState)}
											className='text-[20px] absolute right-5 cursor-pointer'
										/>
									</div>
									<label htmlFor='dropzone-file'>
										School Logo
										<div className='input_border flex flex-col mt-2 justify-center cursor-pointer items-center w-full py-[16px] px-[24px]'>
											<div className=' rounded-[28px] border-8 border-[#F9FAFB]'>
												<div className='w-[30px] h-[30px] flex justify-center items-center rounded-[100%] bg-[#F2F4F7]'>
													<FiUploadCloud />
												</div>
											</div>
											<p>
												<span className='text-[#0075FF]'>Click to upload </span>
												or drag and drop
											</p>
											<p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
											<input
												id='dropzone-file'
												type='file'
												className='opacity-0'
											/>
										</div>
									</label>

									<div className='w-full text-center mt-[24px]'>
										<Link to={'/terms-and-year'}>
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

export default SchoolForm;
