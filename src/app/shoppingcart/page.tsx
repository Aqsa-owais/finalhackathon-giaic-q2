"use client";

import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";
import Image from "next/image";
interface Product {
  id: number;
  name: string;
  rating: number;
  price: number;
  quantity: number;
  image: string;
}

const ShoppingCart = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Burger",
      rating: 5,
      price: 32.0,
      quantity: 1,
      image: "/shopping.png",
    },
    {
      id: 2,
      name: "Fresh Lime",
      rating: 3,
      price: 24.0,
      quantity: 1,
      image: "/shopping1.png",
    },
    {
      id: 3,
      name: "Pizza",
      rating: 4,
      price: 19.0,
      quantity: 1,
      image: "/shopping2.png",
    },
    {
      id: 4,
      name: "Chocolate Muffin",
      rating: 5,
      price: 35.0,
      quantity: 1,
      image: "/shopping3.png",
    },
    {
      id: 5,
      name: "Cheese Butter",
      rating: 3,
      price: 15.0,
      quantity: 1,
      image: "/shopping4.png",
    },
  ]);

  const [couponCode, setCouponCode] = useState("");

  const updateQuantity = (id: number, increment: boolean) => {
    setProducts(
      products.map((product) => {
        if (product.id === id) {
          const newQuantity = increment
            ? product.quantity + 1
            : Math.max(1, product.quantity - 1);
          return { ...product, quantity: newQuantity };
        }
        return product;
      })
    );
  };

  const removeProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const subtotal = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );
  const shippingCharge = 50.0;
  const total = subtotal + shippingCharge;

  return (
    <div>
      <div
        className="w-full bg-no-repeat bg-center flex justify-center"
        style={{
          backgroundImage: "url('/signin.png')",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          width: "100%",
          height: "300px",
        }}
      >
        {/* Header Section */}
        <div className="w-full max-w-5xl flex flex-col justify-center items-center text-white mb-10">
          <p className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-center">
            Shopping Cart{" "}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
            <p className="text-xl sm:text-2xl md:text-3xl text-[20px]">Home</p>
            <div className="flex items-center">
              <IoIosArrowForward />
              <p className="ml-2 text-xl sm:text-2xl md:text-3xl text-[#FF9F0D] text-[20px]">
                Shopping cart
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* new code */}

      <div className="max-w-6xl mx-auto p-4 mt-[100px] ">
        {/* Main Content */}
        <div className="grid gap-8 ml-[120px] mr-[120px]">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-4 text-left">Product</th>
                  <th className="py-4 text-right">Price</th>
                  <th className="py-4 text-center">Quantity</th>
                  <th className="py-4 text-right">Total</th>
                  <th className="py-4 text-right">Remove</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b">
                    <td className="py-4">
                      <div className="flex items-center gap-4">
                        <div className="relative w-20 h-20">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{product.name}</h3>
                          <div className="flex items-center mt-1">
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  i < product.rating
                                    ? "text-yellow-400"
                                    : "text-gray-300"
                                }`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 text-right">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => updateQuantity(product.id, false)}
                          className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                        >
                         {` -`}
                        </button>
                        <span className="w-8 text-center">
                          {product.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, true)}
                          className="w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100"
                        >
                         {` +`}
                        </button>
                      </div>
                    </td>
                    <td className="py-4 text-right">
                      ${(product.price * product.quantity).toFixed(2)}
                    </td>
                    <td className="py-4 text-right">
                      <button
                        onClick={() => removeProduct(product.id)}
                        className="text-gray-500 hover:text-red-500"
                      >
                        {`×`}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Coupon Code and Total Bill Side by Side */}
        <div className="grid gap-8 mt-10 lg:grid-cols-2 ml-[120px] mr-[120px]">
          {/* Coupon Code Section */}
          <div className="border-2 p-6 rounded-lg mb-[100px]">
            <h2 className="text-lg font-semibold mb-4">Coupon Code</h2>
            <div className="space-y-4">
              <p className="text-sm text-gray-600">
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam purus scelerisque bibendum nisi`}
              </p>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter code"
                  className="flex-1 px-3 py-2 border rounded-md"
                />
                <button className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
                  Apply
                </button>
              </div>
            </div>
          </div>

          {/* Total Bill Section */}
          <div className="border-2 p-6 rounded-lg mb-[100px]">
            <h2 className="text-lg font-semibold mb-4">Total Bill</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Cart Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Charge</span>
                <span>${shippingCharge.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold border-t pt-2">
                <span>Total Amount</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
