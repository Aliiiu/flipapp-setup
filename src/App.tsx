import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
	return (
		<div className=''>
			<div className='container min-h-screen'>
				<header className='bg-white pt-[13px] pl-[126px] pb-[24px]'>
					<img
						src='/images/logo.png'
						alt='company logo'
						width={105}
						height='53px'
					/>
				</header>
				<main className='flex'>
					<div className='min-h-screen flex justify-end items-end bg-[#0075FF] bg-opacity-90 mainBgDeep w-[50%]'>
						<img
							src='/images/dashboard.png'
							alt='platform dashboard'
							width='80%'
							height={'40%'}
						/>
					</div>
					<div className='min-h-screen mainBg flex justify-center items-center w-[50%]'>
						<div>
							<h1 className='font-bold mb-[28px] text-[48px] leading-[60px]'>
								Use The Right <br /> Tool To Conduct <br /> A Stress-Free <br />{' '}
								Assessment
							</h1>
							<Link
								to='/school-form'
								className='bg-[#0075FF] rounded-[8px] py-[14px] px-[28px] text-[24px] text-white w-[220px]'
							>
								Create an account
							</Link>
						</div>
					</div>
				</main>
			</div>
		</div>
	);
}

export default App;
