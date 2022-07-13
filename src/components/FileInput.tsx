import React, { FC, useState } from 'react';
import { useController } from 'react-hook-form';
import { FiUploadCloud } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';
import { ImageConfig } from './ImageConfig';

const FileInput: FC<{ control: any; name: any }> = ({ control, name }) => {
	const [imageFile, setImageFile] = useState<File | null>();
	const [files, setFiles] = useState();
	const { field } = useController({ control, name });
	const [value, setValue] = React.useState('');

	const handleChange = (selectorFiles: FileList) => {
		// console.log(selectorFiles[0]);
		setImageFile(selectorFiles[0]);
	};
	const fileRemove = () => {
		setImageFile(null);
	};
	return (
		<>
			<label htmlFor='dropzone-file'>School Logo</label>
			<div className='relative input_border mt-2 cursor-pointer w-full py-[16px] px-[24px]'>
				<div className='flex flex-col items-center justify-center'>
					{/* <div className=' rounded-[28px] border-8 border-[#F9FAFB]'>
						<div className='w-[30px] h-[30px] flex justify-center items-center rounded-[100%] bg-[#F2F4F7]'>
							<FiUploadCloud />
						</div>
					</div>
					<p>
						<span className='text-[#0075FF]'>Click to upload </span>
						or drag and drop
					</p>
					<p>SVG, PNG, JPG or GIF (max. 800x400px)</p> */}
					<input
						id='dropzone-file'
						type='file'
						value={value}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
							setValue(e.target.value);
							console.log(e.target.files);
							field.onChange(e.target.files);
						}}
					/>
				</div>
			</div>
		</>
	);
};

export default FileInput;

// {
// 	imageFile?.name.length ? (
// 		<div className='flex items-center justify-center'>
// 			<img src={ImageConfig['png']} alt='' width={'40px'} />
// 			<div className='flex items-center justify-between w-full ml-7'>
// 				<p>{imageFile?.name}</p>
// 				<div>
// 					<IoCloseOutline
// 						onClick={() => fileRemove()}
// 						className='bg-red-300 rounded-[100%] w-[30px] h-[30px]'
// 					/>
// 				</div>
// 			</div>
// 		</div>
// 	) : (

// 	);
// }
