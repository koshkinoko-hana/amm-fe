import './textInput.scss'
import {UseFormRegisterReturn} from 'react-hook-form/dist/types/form'
import React, {FC} from 'react'

type Props = {
  type: string
  label?: string
  error?: string
  register: UseFormRegisterReturn
  classList?: string
}

const TextInput: FC<Props> = ({label, type, error, register, classList='' }: Props) => {

  return (
    <>
      {
        label &&
          <p className={'p3'}>{label}</p>
      }
      <div className="input__container">

        {
          error &&
            <p className={'input__error'}>{
              error === 'required' ?
                'Обязательное поле' :
                error === 'maxLength' ?
                  'Длина превышает допустимое количество символов' :
                  error === 'minLength' ?
                    'Недостаточно символов' :
                    'error.message'
            } </p>
        }
        <input 
          type={type}
          className={`${error ? 'is-invalid' : ''} ${classList}`}
          {...register}
        />
      </div>
    </>
  )
}

export default TextInput
