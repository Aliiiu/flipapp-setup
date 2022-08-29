import React, { useEffect, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ImageConfig } from '../components/ImageConfig';
import axios from 'axios';
import Loader from '../components/Loader';

type User = {
	fullname: string;
	schoolName: string;
	email: string;
	uploads: any;
};

const SchoolForm = () => {
	const [image, setImage] = useState<File | null>();
	const [showLoader, setShowLoader] = useState(false);
	let navigate = useNavigate();
	const { register, handleSubmit } = useForm<User>();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const handleChange = (selectorFiles: FileList) => {
		setImage(selectorFiles[0]);
	};

	const fileRemove = () => {
		setImage(null);
	};

	const onSubmit: SubmitHandler<User> = async (data) => {
		// console.log(image);
		setShowLoader(true);
		if (data) {
			data.uploads = image;
			const newData = new FormData();
			newData.append('schoolName', data.schoolName);
			newData.append('firstname', data.fullname);
			newData.append('email', data.email);
			newData.append('uploads', data.uploads);
			// let dataObject = Object.fromEntries(newData.entries());
			// console.log(dataObject);
			let config = {
				method: 'POST',
				url: `https://admin-service.flipcbt.com/v1/app-setup/register-school`,
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				data: newData,
			};
			let error: any;
			try {
				const res = await axios(config);
				if (res.data.success === true) {
					// setShowLoader(false);
					navigate('/terms-and-year');
				}
			} catch (err) {
				console.log(err);
				error = err;
				if (error.response.status === 409) {
					alert(error.response.data.error.message);
				} else {
					alert('something went wrong');
				}
			} finally {
				setShowLoader(false);
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
										{...register('fullname')}
										placeholder='fullname'
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
									<label htmlFor='address'>School Address*</label>
									<input
										required
										type='text'
										placeholder='Enter your Address'
										className='px-[24px] py-[17px] mb-[25px] mt-[6px] text-[16px] placeholder-gray-400 input_border w-full outline-none focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight'
									/>
									{/* <label htmlFor='dropzone-file'>School Logo</label>
									<div className='relative input_border mt-2 cursor-pointer w-full py-[16px] px-[24px]'>
										<div className='flex flex-col items-center justify-center'>
											<input
												id='dropzone-file'
												type='file'
												onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
													handleChange(e.target.files!);
												}}
											/>
										</div>
									</div> */}
									<label htmlFor='dropzone-file'>School Logo</label>
									<div className='relative input_border mt-2 cursor-pointer w-full py-[16px] px-[24px]'>
										{image?.name.length ? (
											<div className='flex items-center justify-center'>
												<img src={ImageConfig['png']} alt='' width={'40px'} />
												<div className='flex items-center justify-between w-full ml-7'>
													<p>{image?.name}</p>
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
													onChange={(
														e: React.ChangeEvent<HTMLInputElement>
													) => {
														handleChange(e.target.files!);
													}}
													className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
												/>
											</div>
										)}
									</div>
									<div className='w-full text-center mt-[24px]'>
										{/* <input
											type={'submit'}
											className='py-[10px] px-[20px] md:px-[40px] md:py-[16px] text-[16px] rounded-[8px] w-full bg-[#0075FF] text-white'
										/> */}
										<button
											type='submit'
											className='py-[10px] flex justify-center gap-x-[10px] px-[20px] md:px-[40px] md:py-[16px] text-[16px] rounded-[8px] w-full bg-[#0075FF] text-white'
										>
											{showLoader ? <Loader /> : 'Next'}
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

export default SchoolForm;
