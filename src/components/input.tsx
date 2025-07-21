interface InputProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    type ?: string
}

const Input = ({ value, onChange, placeholder = "Enter text",type = "text" }: InputProps) => {
    return (
        <div>
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full px-3 text-sm bg-gray-100 placeholder:font-semibold
                   placeholder:text-gray-800 py-2.5 rounded-sm focus:outline-none
                   focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
        </div>
    );
};

export default Input;
