import { categories } from '@/data/categories';
import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

const Categories = () => {
    return (
        <div className="flex flex-wrap justify-between px-9 my-4 gap-y-4">
            <div className="flex flex-wrap gap-4 min-w-0 flex-grow">
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
            <div className="my-auto flex-shrink-0">
                <AdjustmentsHorizontalIcon
                style={{
                        borderTopColor: '#01c89b',
                        borderRightColor: '#01c89b',
                        borderBottomColor: '#059afc',
                        borderLeftColor: '#059afc'
                    }}
                 className="w-10 h-10 stroke-[#01c89b]  border-2 rounded-md p-1.5" />
            </div>
        </div>
    );
};

export default Categories;
