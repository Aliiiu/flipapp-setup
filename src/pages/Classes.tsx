import axios from 'axios';
import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import Loader from '../components/Loader';

interface CLASS {
	classId: string;
	className: string;
}

const Classes = () => {
	const [showLoader, setShowLoader] = useState(false);
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	let navigate = useNavigate();
	const enteredClass = useRef<HTMLInputElement | null>(null);
	const [classList, setclassList] = useState<CLASS[]>([
		// {
		// 	classId: '1',
		// 	className: 'JSS1',
		// },
		// {
		// 	classId: '2',
		// 	className: 'JSS2',
		// },
		// {
		// 	classId: '3',
		// 	className: 'JSS3',
		// },
	]);

	const submitHandler = (event: FormEvent) => {
		event.preventDefault();
		const className = enteredClass.current!.value;
		if (className.trim().length === 0) return;
		setclassList([
			...classList,
			{
				classId: uuidv4(),
				className: className,
			},
		]);
		enteredClass.current!.value = '';
	};

	const removeClass = (subjectId: string) => {
		setclassList((prevState) => {
			return prevState.filter(
				(subjectList) => subjectList.classId !== subjectId
			);
		});
	};

	const classHandler = async () => {
		setShowLoader(true);
		let data = { classList: classList };
		// console.log(JSON.stringify(data));
		let config = {
			method: 'POST',
			url: `https://admin-service.flipcbt.com/v1/app-setup/set-class`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: data,
		};
		let error: any;
		try {
			const res = await axios(config);
			if (res.data.success === true) {
				// alert(res.data.message);
				// setShowLoader(false);
				navigate('/add-department');
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
		// console.log(classList);
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
						<div className='flex justify-center w-full'>
							<div className='w-[70%] mt-[95px]'>
								<h2 className='text-[32px] font-bold mobile:text-center'>
									Add Class
								</h2>
								<form
									onSubmit={submitHandler}
									className='flex flex-col mt-[20px]'
								>
									<input
										type='text'
										ref={enteredClass}
										placeholder='Add a class...'
										className='px-[24px] py-[17px] mb-[25px] mt-[6px] text-[16px] placeholder-gray-400 input_border w-full outline-none focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight'
									/>
								</form>
								<div>
									<h3 className='mb-[10px] text-[#06042C] text-opacity-50'>
										{classList.length} CLASS
									</h3>
									<hr className='bg-[#06042C] ' />
									<ul>
										{classList.map((classItem) => (
											<li
												key={classItem.classId}
												className='flex my-[24px] justify-between'
											>
												<div className='flex'>
													{' '}
													<img
														src='/images/addSubjectIcon.png'
														alt=''
														width={'30px'}
														className='mr-[10px]'
													/>{' '}
													<p className='text-[#06042C] text-opacity-50'>
														{classItem.className}
													</p>{' '}
												</div>
												<IoCloseOutline
													onClick={() => removeClass(classItem.classId)}
													className='text-[#06042C] cursor-pointer text-opacity-50 text-[25px]'
												/>{' '}
											</li>
										))}
									</ul>
								</div>

								<div className='w-full text-center mt-[24px]'>
									<button
										onClick={classHandler}
										className='py-[10px] px-[20px] flex justify-center gap-x-[10px] md:px-[40px] md:py-[16px] text-[16px] rounded-[8px] w-full bg-[#0075FF] text-white'
									>
										{showLoader ? <Loader /> : 'Next'}
									</button>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Classes;
