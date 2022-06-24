import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
	return (
		<div className='flex justify-center min-h-screen'>
			<div className='text-center mt-[110px] mb-[150px]'>
				<img
					src='/images/welcome.png'
					alt='Welcome illustration'
					width={'500px'}
					height='500px'
				/>
				<div>
					<p className='text-[24px]'>Welcome on Board</p>
					<p className='text-[24px]'>
						INTRAPAIR INTERNATIONAL SCHOOLS, ABEOKUTA
					</p>
					<Link to={'/'}>
						<div className='py-[10px] mt-[24px] mx-auto px-[20px] md:px-[40px] md:py-[16px] text-[16px] rounded-[8px] w-[70%] bg-[#0075FF] text-white'>
							Next
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
