import "../../css/app.css";
export default function InputLabel({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block  text-sm text-blue-500 mt-2  capitalize dark:text-[#878a99]` + className}>
            {value ? value : children}
        </label>
    );
}
