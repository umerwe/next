import { categories } from '@/data/categories';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const Categories = () => {
    return (
        <div className="flex gap-4 justify-between px-9 my-4">
            <div className='flex gap-4'>
                {categories.map((item, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-100 text-gray-400 px-5.5 py-2.5 rounded-full">
                        {item.icon}
                        <h1 className="text-sm font-semibold">{item.name}</h1>
                    </div>
                ))}
            </div>
            <div className='my-auto'>
                <AdjustmentsHorizontalIcon className="w-10 h-10 text-green-400 border-2 border-green-400 rounded-md p-1.5" />
            </div>
        </div>
    );
};

export default Categories;
