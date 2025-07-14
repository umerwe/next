import { categories } from '@/data/categories';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const Categories = () => {
    return (
        <div className="flex justify-between flex-wrap px-9 my-4 gap-y-4">
            {/* Left side - Categories */}
            <div className="grid grid-cols-2 md:flex md:flex-wrap gap-4">
                {categories.map((item, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-2 bg-gray-100 text-gray-400 px-5.5 py-2.5 rounded-full cursor-pointer"
                    >
                        {item.icon}
                        <h1 className="text-sm font-semibold">{item.name}</h1>
                    </div>
                ))}
            </div>

            {/* Right side - Button */}
            <div className="my-auto">
                <AdjustmentsHorizontalIcon className="w-10 h-10 text-green-400 border-2 border-green-400 rounded-md p-1.5" />
            </div>
        </div>
    );
};

export default Categories;
