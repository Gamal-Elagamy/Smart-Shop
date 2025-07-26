import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Loading from '../../Component/Loading/Loading';
import NotFound from '../NotFound/NotFound';

export default function ProductDetails() {
  const { id } = useParams();

  const [ProductDetails, setProductDetails] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getProductDetails();
  }, []);

  async function getProductDetails() {
    setisLoading(true);
    try {
      const { data } = await axios(`https://fakestoreapi.com/products/${id}`);
      setProductDetails(data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setisLoading(false);
    }
  }

  if (isLoading) return <Loading />;
  if (error || !ProductDetails?.id) return <NotFound />;

  return (
    <div className="flex items-center flex-wrap">
      <div className="w-full md:w-1/3 px-4 mb-8">
        <img
          src={ProductDetails?.image}
          alt={ProductDetails?.title}
          className="w-full rounded-lg shadow-md mb-4"
        />
      </div>

      <div className="w-full md:w-2/3 px-4 text-start">
        <h2 className="text-3xl font-bold mb-2">{ProductDetails?.title}</h2>

        <div className="mb-4">
          <span className="text-2xl font-bold mr-2">${ProductDetails?.price}</span>
          <span className="text-gray-700 dark:text-gray-300 line-through">
            ${ProductDetails?.price + 100}
          </span>
        </div>

        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((rate, index) => (
            <svg
              key={index}
              aria-hidden="true"
              className={`h-5 w-5 ${
                rate <= ProductDetails?.rating?.rate
                  ? 'text-yellow-300'
                  : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
             <span className="mr-2 ml-3 rounded bg-yellow-200 dark:bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold text-black dark:text-gray-900">
            {ProductDetails?.rating?.rate}
          </span>
        </div>

        <p className="text-gray-700 dark:text-gray-300 mb-6">{ProductDetails?.description}</p>
        <p className="text-gray-800 dark:text-gray-200 mb-6">
          <span className="font-extrabold">Category: </span>
          {ProductDetails?.category}
        </p>

        <Link
          to="/"
          className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition dark:bg-blue-500 dark:hover:bg-blue-600"
          >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
