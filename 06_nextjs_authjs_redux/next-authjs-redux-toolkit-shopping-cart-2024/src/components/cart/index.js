"use client";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import { removeFromCart } from "@/store/slices/cart-slice";

function Cart() {
  const [totalAmount, setTotalAmount] = useState(0);
  const { cart } = useSelector((state) => state);
  console.log(cart?.cartItems);
  const dispatch = useDispatch();

  useEffect(() => {
    setTotalAmount(
      cart?.cartItems.reduce((acc, curr) => acc + (curr?.price || 0), 0)
    );
  }, [cart?.cartItems]);

  function handleRemoveFromCart(getCurrentItemID) {
    dispatch(removeFromCart(getCurrentItemID));
  }

  if (!cart?.cartItems.length)
    return <h1 className="text-4xl font-bold p-10 text-center">Cart is empty.</h1>;

  return (
    <div className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Shopping Cart</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse divide-y">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="text-base text-gray-700 p-4">Title</th>
                <th className="text-base text-gray-700 p-4">Price</th>
                <th className="text-base text-gray-700 p-4 text-center">Remove</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {cart?.cartItems.map((item, index) => (
                <tr key={item?.id || index}>
                  <td className="py-5 px-4">
                    <div className="flex items-center gap-6">
                      <div className="h-28 w-28 shrink-0">
                        <img
                          src={item?.thumbnail}
                          alt={item?.title}
                          className="w-full h-full object-contain rounded-md"
                        />
                      </div>
                      <p className="text-lg font-semibold text-gray-900">
                        {item?.title}
                      </p>
                    </div>
                  </td>
                  <td className="py-5 px-4 text-gray-800 font-medium">
                    ${item?.price.toFixed(2)}
                  </td>
                  <td className="py-5 px-4 text-center">
                    <Button
                      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
                      onClick={() => handleRemoveFromCart(item?.id)}
                    >
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="max-w-xl ml-auto mt-8 border-t pt-4">
          <p className="text-lg font-bold text-gray-900 flex justify-between">
            Total: <span>${totalAmount.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
