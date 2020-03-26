export const Option = props => (
   <span value={props.optionKey}>
    <input type="radio" value={props.optionKey} />
    <label> {String.fromCharCode(props.index+65)}. {props.text} </label>
   </span>
)