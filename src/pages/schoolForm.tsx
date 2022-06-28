import React, { useEffect, useState } from 'react';
import { TbEye } from 'react-icons/tb';
import { FiUploadCloud } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { ImageConfig } from '../components/ImageConfig';

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
	const [showPassword, setshowPassword] = useState<boolean>(false);
	const [imageFile, setImageFile] = useState<File | null>();
	const { register, handleSubmit } = useForm<User>();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const onSubmit: SubmitHandler<User> = async (data) => {
		console.log(JSON.stringify(data));
	};

	// const onFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	e.preventDefault();
	// 	let file = (e.target as HTMLInputElement).files?.[0];
	// 	setFile(e.target.files?.[0]);
	// };
	const handleChange = (selectorFiles: FileList) => {
		// console.log(selectorFiles[0]);
		setImageFile(selectorFiles[0]);
	};
	console.log(imageFile?.name.length);

	const fileRemove = () => {
		setImageFile(null);
	};
	// const onFileDrop = (e: React.ChangeEvent<HTMLInputElement>) => {
	// 	e.preventDefault();
	// 	const target = e.currentTarget as HTMLInputElement;
	// 	// setFile(target.files)
	// 	// setFile(target.files![0]);
	// 	if (e.target.files && e.target.files.length > 0) {
	// 		// const updatedList = newFile[0];

	// 		const file = target.files![0];
	// 		console.log(file.name);
	// 		setFileName(file.name);
	// 	}
	// 	console.log(fileName);
	// };
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
									<label htmlFor='dropzone-file'>School Logo</label>

									<div className='relative input_border mt-2 cursor-pointer w-full py-[16px] px-[24px]'>
										{imageFile?.name.length ? (
											<div className='flex items-center justify-center'>
												<img src={ImageConfig['png']} alt='' width={'40px'} />
												<div className='flex items-center justify-between w-full ml-7'>
													<p>{imageFile?.name}</p>
													<div>
														<IoCloseOutline
															onClick={() => fileRemove()}
															className='bg-red-300 rounded-[100%] w-[30px] h-[30px]'
														/>
													</div>
												</div>
											</div>
										) : (
											<div className='flex flex-col items-center justify-center'>
												<div className=' rounded-[28px] border-8 border-[#F9FAFB]'>
													<div className='w-[30px] h-[30px] flex justify-center items-center rounded-[100%] bg-[#F2F4F7]'>
														<FiUploadCloud />
													</div>
												</div>
												<p>
													<span className='text-[#0075FF]'>
														Click to upload{' '}
													</span>
													or drag and drop
												</p>
												<p>SVG, PNG, JPG or GIF (max. 800x400px)</p>
												<input
													id='dropzone-file'
													type='file'
													onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
														handleChange(e.target.files!)
													}
													className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
												/>
											</div>
										)}
									</div>

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
