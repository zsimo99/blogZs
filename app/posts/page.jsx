import TestNav from '@/components/TestNav'
import React from 'react'

const Page = ["page1", "page2", "page3"]

const page = ({ searchParams }) => {
    const { } = searchParams
    return (
        <div className='relative top-[65px]'>
            <div>{Page[id]}</div>
            <TestNav />
        </div>
    )
}

export default page