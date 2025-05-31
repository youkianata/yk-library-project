import '../../css/checkBoxDarkMode.css'
export default function CheckboxDarckMode({ className = '', ...props }) {
    return (

        <div class="btn-container mt-2 flex flex-row">
        
                <label class="switch btn-color-mode-switch">
                    <input value="1" id="color_mode" name="color_mode" type="checkbox"/>
                    <label class="btn-color-mode-switch-inner" data-off="Light" data-on="Dark" for="color_mode"></label>
                </label>

        </div>
    );
}
