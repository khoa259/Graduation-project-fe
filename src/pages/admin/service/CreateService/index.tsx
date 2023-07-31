import React, { useState } from 'react';
import './style.scss';
import { Checkbox } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { urlRouter } from 'src/utils/constants';
import { Select } from 'antd';
import { useForm } from 'react-hook-form';
import { createService } from 'src/api/service';

const CreateSevice = () => {
  const navigate = useNavigate();
  const { Option } = Select;
  const { register, handleSubmit } = useForm();

  const Onsubmit = (data: any) => {
    createService(data)
      .then((res) => {
        setTimeout(() => {
          navigate(-1);
        }, 3000);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return (
    <>
      <div>
        <h1>Thêm dịch vụ</h1>
      </div>
      <div className='mt-8'>
        <form onSubmit={handleSubmit(Onsubmit)}>
          <div className='flex justify-between items-center gap-12 py-3'>
            <label htmlFor='' className='w-64 text-base font-semibold'>
              Tên dịch vụ <b className='color-red'>*</b>
            </label>
            <div className='w-full'>
              <input
                className='w-full border-2 p-4 outline-0'
                type='text'
                {...register('name')}
                placeholder='Tên dịch vụ'
              />
            </div>
            <label htmlFor='' className='w-64 text-base font-semibold'>
              Loại <b className='color-red'>*</b>
            </label>
            <div className='w-full'>
              <input
                className='w-full border-2 p-4 outline-0'
                type='text'
                {...register('type')}
                placeholder='Loại dịch vụ'
              />
            </div>
          </div>
          <div className='flex justify-between items-center gap-12 py-3'>
            <label htmlFor='' className='w-64 text-base font-semibold'>
              Đơn giá <b className='color-red'>*</b>
            </label>
            <div className='w-full'>
              <input
                className='border-2 p-4 outline-0 w-full'
                type='number'
                {...register('price')}
                placeholder='Đơn giá'
              />
            </div>
            <label htmlFor='' className='w-64 text-base font-semibold'>
              Mã dịch vụ <b className='color-red'>*</b>
            </label>
            <div className='w-full'>
              <input
                className='w-full border-2 p-4 outline-0'
                type='text'
                {...register('code')}
                placeholder='Loại dịch vụ'
              />
            </div>
          </div>
          <div className='flex justify-between items-center gap-12 py-3'>
            <label htmlFor='' className='w-28 text-base font-semibold'>
              Nội dung
            </label>
            <div className='w-full'>
              <textarea className='w-full border-2 p-4' {...register('note')} placeholder='Thông tin ghi chú ...' />
            </div>
          </div>

          <div className='warning-title'>
            <h3> (*) Thông tin bắt buộc</h3>
          </div>
          <div className='sticky bottom-0 py-3 mt-8 bg-gray-100 border rounded flex justify-end'>
            <div>
              <button className='focus:outline-none text-white bg-green-700 hover:bg-green-800 font-medium rounded-lg text-sm px-14 py-2.5 mr-2  '>
                <i className='fa-solid fa-check'></i> Gửi
              </button>
              <Link to={`/admin/${urlRouter.SERVICE}`}>
                <button className='text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 font-medium rounded-lg text-sm px-8 py-2.5 mr-2 '>
                  Hủy
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateSevice;
