import React from "react"
import Router from "next/router"
import Button from "components/Button/Button"
import { closeModal } from '@redq/reuse-modal'

export default function SignInModal({ ...props }) {
  return (
    <div className='text-center p-4'>
      <p className='sm-title mb-4'>
        Phiên làm việc không đúng hoặc đã hết hạn. Vui lòng đăng nhập lại
      </p>
      <Button onClick={() => {
          closeModal()
          Router.push('/')
      }} style={{ minWidth: 120 }} title='OK' />
    </div>
  )
}
