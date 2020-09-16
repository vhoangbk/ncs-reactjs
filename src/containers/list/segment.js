import React, {useState} from 'react';
import '../../styles/segment.scss';

function Segment({onChangeValue}){

  const [value, setValue] = useState(0);

  const onChange = (index) => {
    setValue(index);
    onChangeValue(index);
  };

  return(
    <div className="list__segment">
      <div onClick={()=>{onChange(0)}} className={value === 0 ? "list__segment--active" : "list__segment--none"}>
        ALL
      </div>
      <div onClick={()=>{onChange(1)}} className={value === 1 ? "list__segment--active" : "list__segment--none"}>
        EPISERVER
      </div>
    </div>
  )
}

export default Segment;
