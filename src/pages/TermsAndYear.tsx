import { BiChevronDown } from 'react-icons/bi';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Loader from '../components/Loader';

type User = {
	term: string;
	year: string;
};

const TermsAndYear = () => {
	let navigate = useNavigate();
	const [showLoader, setShowLoader] = useState(false);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	let years = [
		'2023/22',
		'2022/21',
		'2021/20',
		'2020/19',
		'2019/18',
		'2018/17',
	];
	// for (let x = 0; x < maxOffset; x++) {
	// 	years.push(currYear - x);
	// }

	const yearList = years.map((year, idx) => (
		<option key={idx} value={year}>
			{year}
		</option>
	));
	const { register, handleSubmit } = useForm<User>();

	const onSubmit: SubmitHandler<User> = async (data) => {
		// console.log(data);
		// console.log(JSON.stringify(data));
		setShowLoader(true);
		let config = {
			method: 'POST',
			url: `https://admin-service.flipcbt.com/v1/app-setup/set-term-and-year`,
			headers: {
				'Content-Type': 'application/json',
			},
			data: JSON.stringify(data),
		};
		let error: any;
		try {
			const res = await axios(config);
			if (res.data.success === true) {
				// alert(res.data.message);
				// setShowLoader(false);
				navigate('/add-subject');
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
						<div className='flex items-center justify-center w-full h-full'>
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
											className={`px-[24px] py-[17px] text-[16px] bg-white text-[#06042C] rounded-[8px] placeholder-gray-400 border border-[#828282] outline-none w-full focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight`}
										>
											<option>First</option>
											<option>Second</option>
											<option>Third</option>
										</select>
										<BiChevronDown className='absolute right-3 text-[20px]' />
									</div>
									<label htmlFor='year'>Year</label>
									<div className='relative mb-[25px] mt-[6px] flex items-center'>
										<select
											{...register('year')}
											placeholder='Year'
											className={`px-[24px] py-[17px] text-[16px] bg-white text-[#06042C] rounded-[8px] placeholder-red-300 border border-[#828282] outline-none w-full focus:border-[#0075FF] focus:shadow-[0px_8px_24px_rgba(149,157,165,0.2)] appearance-none leading-tight`}
										>
											{yearList}
										</select>
										<BiChevronDown className='absolute right-3 text-[20px]' />
									</div>

									<div className='w-full text-center mt-[24px]'>
										{/* <Link to={'/add-subject'}> */}
										<button
											onSubmit={handleSubmit(onSubmit)}
											className='py-[10px] px-[20px] flex justify-center gap-x-[10px] md:px-[40px] md:py-[16px] text-[16px] rounded-[8px] w-full bg-[#0075FF] text-white'
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

export default TermsAndYear;
