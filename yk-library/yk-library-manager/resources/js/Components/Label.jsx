import "../../css/app.css";
export default function Label({ value, className = '', children, ...props }) {
    return (
        <label {...props} className={`block  text-xs font-bold text-black mt-2  capitalize` }>
            {value ? value : children}
        </label>
    );
}
