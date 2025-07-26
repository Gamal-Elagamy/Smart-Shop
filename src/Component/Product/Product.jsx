import { Link } from 'react-router-dom'

export default function Product({ product }) {
  
    return (
        <div className="relative flex w-full flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md hover:scale-105 transition-all dark:bg-gray-900 dark:border-gray-700">
            
            <Link to={"ProductDetails/" + product.id} className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl">
                <img className="object-cover rounded mx-auto" src={product.image} alt="product image" />
                
            </Link>

            <div className="mt-4 px-5 pb-5">
            <Link to={"ProductDetails/" + product.id}>
                    <h5 className="text-xl tracking-tight text-slate-900 dark:text-white line-clamp-1">{product.title}</h5>
                </Link>

                <div className="mt-2 mb-5 flex flex-col items-center justify-between">

                        <div>
                            <p className="text-sm text-gray-500 dark:text-gray-400">🚀 Exciting offers are coming soon! 🔥</p>
                        </div>

                    <div className="flex items-center">
                        {[1, 2, 3, 4, 5].map((rate) => (
                            <svg key={rate} aria-hidden="true" className={`h-5 w-5 ${rate <= product.rating.rate ? 'text-yellow-500' : 'text-gray-300 dark:text-gray-500'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                        ))}
                        <span className="mr-2 ml-3 rounded bg-yellow-200 dark:bg-yellow-500 px-2.5 py-0.5 text-xs font-semibold text-black dark:text-gray-900">
                            {product.rating.rate}
                        </span>
                    </div>
                </div>

            </div>
        </div>
    )
}
