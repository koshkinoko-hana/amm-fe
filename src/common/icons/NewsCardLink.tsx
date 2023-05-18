import React, {FC} from 'react'
import {Props} from './types'

export const NewsCardLink: FC<Props> = ({onClick}) => {
  return (
    <div className="svg-icon" onClick={onClick}>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.8333 11.4583C20.5571 11.4583 20.2921 11.5681 20.0968 11.7634C19.9014 11.9588 19.7917 12.2237 19.7917 12.5V18.75C19.7917 19.0263 19.6819 19.2912 19.4866 19.4866C19.2912 19.6819 19.0263 19.7917 18.75 19.7917H6.25C5.97373 19.7917 5.70878 19.6819 5.51343 19.4866C5.31808 19.2912 5.20833 19.0263 5.20833 18.75V6.25C5.20833 5.97373 5.31808 5.70878 5.51343 5.51343C5.70878 5.31808 5.97373 5.20833 6.25 5.20833H12.5C12.7763 5.20833 13.0412 5.09859 13.2366 4.90324C13.4319 4.70789 13.5417 4.44293 13.5417 4.16667C13.5417 3.8904 13.4319 3.62545 13.2366 3.4301C13.0412 3.23475 12.7763 3.125 12.5 3.125H6.25C5.4212 3.125 4.62634 3.45424 4.04029 4.04029C3.45424 4.62634 3.125 5.4212 3.125 6.25V18.75C3.125 19.5788 3.45424 20.3737 4.04029 20.9597C4.62634 21.5458 5.4212 21.875 6.25 21.875H18.75C19.5788 21.875 20.3737 21.5458 20.9597 20.9597C21.5458 20.3737 21.875 19.5788 21.875 18.75V12.5C21.875 12.2237 21.7653 11.9588 21.5699 11.7634C21.3746 11.5681 21.1096 11.4583 20.8333 11.4583Z" fill="#207EED"/>
        <path d="M16.6666 5.20833H18.3125L11.7604 11.75C11.6628 11.8468 11.5853 11.962 11.5324 12.089C11.4795 12.2159 11.4523 12.3521 11.4523 12.4896C11.4523 12.6271 11.4795 12.7632 11.5324 12.8902C11.5853 13.0171 11.6628 13.1323 11.7604 13.2292C11.8572 13.3268 11.9724 13.4043 12.0994 13.4572C12.2263 13.5101 12.3625 13.5373 12.5 13.5373C12.6375 13.5373 12.7736 13.5101 12.9006 13.4572C13.0275 13.4043 13.1427 13.3268 13.2396 13.2292L19.7916 6.6875V8.33333C19.7916 8.6096 19.9014 8.87455 20.0967 9.0699C20.2921 9.26525 20.557 9.375 20.8333 9.375C21.1096 9.375 21.3745 9.26525 21.5699 9.0699C21.7652 8.87455 21.875 8.6096 21.875 8.33333V4.16667C21.875 3.8904 21.7652 3.62545 21.5699 3.4301C21.3745 3.23475 21.1096 3.125 20.8333 3.125H16.6666C16.3904 3.125 16.1254 3.23475 15.9301 3.4301C15.7347 3.62545 15.625 3.8904 15.625 4.16667C15.625 4.44293 15.7347 4.70789 15.9301 4.90324C16.1254 5.09859 16.3904 5.20833 16.6666 5.20833Z" fill="#207EED"/>
      </svg>
    </div>
  )
}
  