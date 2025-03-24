import { redirect } from 'next/navigation';
import React from 'react'

const Account = () => {
    // assume that the  profile info in null

    const userProfileInfo = null;
    if (userProfileInfo === null) {
        redirect('products?search=product1&randomValue=abcd')
    }
    return (
        <div>Account</div>
    )
}

export default Account