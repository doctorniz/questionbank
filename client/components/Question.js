import {randomise} from '../lib/helpers'
import { Option } from './Option'

export const Question = props => (
    <div>
        <p> {props.question} </p>
        {props.options ? (
        <ol type='A'>    
            {randomise(props.options).map((o,i) => (
                <Option key={`option${i}`} optionKey={o.optionKey} text={o.text} index={i} />
            ))}
        </ol>) : null}
    </div>
)