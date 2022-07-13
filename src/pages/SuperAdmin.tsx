import React, { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TbEye } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface User {
	fullname: string;
	id: string;
	gender: string;
	password: string;
}
const SuperAdmin = () => {
	const [showPassword, setshowPassword] = useState<boolean>(false);
	let navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<User>();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const onSubmit: SubmitHandler<User> = async (data) => {
		console.log(JSON.stringify(data));
		let config = {
			method: 'POST',
			url: `https://admin-service.flipcbt.com/v1/app-setup/set-super-admin`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: data,
		};
		let error: any;
		try {
			const res = await axios(config);
			if (res.status === 200) {
				console.log(res);
				// console.log(JSON.stringify(data));
				// navigate('welcome');
			}
		} catch (err) {
			console.log(err);
			error = err;
			if (error.response.status === 409) {
				alert(error.response.data.error.message);
			} else {
				alert('something went wrong');
			}
		}
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
									Setup Super Admin
								</h2>
								<div className='relative mt-[20px]'>
									<img
										src='/images/profileIcon.png'
										alt='Demo avatar'
										width={'140px'}
										height='130px'
									/>
									<img
										src='/images/cameraIcon.png'
										alt='camera icon'
										width={'38px'}
										height='33px'
										className='absolute top-0 left-[100px]'
									/>
								</div>
								<form
									onSubmit={handleSubmit(onSubmit)}
									className='flex flex-col mt-[20px]'
								>
									<label htmlFor='fullname'>Fullname</label>
									<input
										required
										type='text'
										{...register('fullname')}
										placeholder='fullname'
										className={`px-[24px] py-[17px] mb-[25px] mt-[6px] text-[16px] rounded-[8px] placeholder-gray-400 border border-[#828282] outline-none w-full focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight`}
									/>
									<label htmlFor='school name'>Admin ID</label>
									<input
										required
										type='text'
										{...register('id')}
										placeholder='121314'
										className='px-[24px] py-[17px] mb-[25px] mt-[6px] text-[16px] placeholder-gray-400 input_border w-full outline-none focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight'
									/>
									<label htmlFor='gender'>Gender</label>
									<div className='relative mb-[25px] mt-[6px] flex items-center'>
										<select
											placeholder='Female'
											{...register('gender')}
											className={`px-[24px] py-[17px] text-[16px] bg-white text-gray-400 rounded-[8px] placeholder-gray-400 border border-[#828282] outline-none w-full focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight`}
										>
											<option>female</option>
											<option>male</option>
										</select>
										<BiChevronDown className='absolute right-3 text-[20px]' />
									</div>
									<label htmlFor='password'>Your Password*</label>
									<div className='relative flex items-center mb-[25px] mt-[6px] '>
										<input
											type={showPassword ? 'text' : 'password'}
											{...register('password')}
											placeholder='Enter your password'
											className='px-[24px] py-[17px] text-[16px] input_border placeholder-gray-400 w-full outline-none focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight'
										/>
										<TbEye
											onClick={() => setshowPassword((prevState) => !prevState)}
											className='text-[20px] absolute right-5 cursor-pointer'
										/>
									</div>
									<div className='w-full text-center mt-[24px]'>
										<button
											onSubmit={handleSubmit(onSubmit)}
											className='py-[10px] px-[20px] md:px-[40px] md:py-[16px] text-[16px] rounded-[8px] w-full bg-[#0075FF] text-white'
										>
											Next
										</button>
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

export default SuperAdmin;
