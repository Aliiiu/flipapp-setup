import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';

interface SUBJECT {
	id: string;
	subjectName: string;
}

const Subject = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const enteredSubject = useRef<HTMLInputElement | null>(null);
	const [subjectList, setsubjectList] = useState<SUBJECT[]>([
		{ id: '1', subjectName: 'English' },
		{ id: '2', subjectName: 'Mathematics' },
		{ id: '3', subjectName: 'Social Studies' },
		{ id: '4', subjectName: 'French' },
		{ id: '5', subjectName: 'Yoruba' },
		{ id: '6', subjectName: 'Basic Science' },
		{ id: '7', subjectName: 'Basic Technology' },
		{ id: '8', subjectName: 'Home Economics' },
	]);

	const submitHandler = (event: React.SyntheticEvent) => {
		event.preventDefault();
		const subject = enteredSubject.current!.value;
		if (subject.trim().length === 0) return;
		setsubjectList([
			...subjectList,
			{
				id: uuidv4(),
				subjectName: subject,
			},
		]);
		enteredSubject.current!.value = '';
	};

	const removeSubject = (subjectId: string) => {
		setsubjectList((prevState) => {
			return prevState.filter((subjectList) => subjectList.id !== subjectId);
		});
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
									Add Subject
								</h2>
								<form
									onSubmit={submitHandler}
									className='flex flex-col mt-[20px]'
								>
									<input
										type='text'
										ref={enteredSubject}
										placeholder='Add a subject...'
										className='px-[24px] py-[17px] mb-[25px] mt-[6px] text-[16px] placeholder-gray-400 input_border w-full outline-none focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight'
									/>
								</form>
								<div>
									<h3 className='mb-[10px] text-[#06042C] text-opacity-50'>
										{subjectList.length} SUBJECTS
									</h3>
									<hr className='bg-[#06042C] ' />
									<ul>
										{subjectList.map((subjectItem) => (
											<li
												key={subjectItem.id}
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
														{subjectItem.subjectName}
													</p>{' '}
												</div>
												<IoCloseOutline
													onClick={() => removeSubject(subjectItem.id)}
													className='text-[#06042C] cursor-pointer text-opacity-50 text-[25px]'
												/>{' '}
											</li>
										))}
									</ul>
								</div>
								<div className='w-full text-center mt-[24px]'>
									<Link to={'/add-class'}>
										<div className='py-[10px] px-[20px] md:px-[40px] md:py-[16px] text-[16px] rounded-[8px] w-full bg-[#0075FF] text-white'>
											Next
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
};

export default Subject;
