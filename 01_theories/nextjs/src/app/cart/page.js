'use client';

import { usePathname, useSearchParams } from "next/navigation";

const Cart = () => {
    const pathName = usePathname();
    const serachParams = useSearchParams();
    return (
        <div>This is cart component</div>
    )
}

export default Cart