'use client';

import { usePathname, useSearchParams } from "next/navigation";

const Cart = () => {
    const pathName = usePathname();
    console.log(pathName);
    const serachParams = useSearchParams();
    console.log(serachParams.get('search'));
    console.log(serachParams.get('randomValue'));
    return (
        <div>This is cart component</div>
    )
}

export default Cart