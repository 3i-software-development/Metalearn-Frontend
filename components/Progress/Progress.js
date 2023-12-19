import { Progress, Space } from 'antd'

const ProgressC = ({Percent}) => {
  return (
    <div>
        <Progress type="circle" size={40} percent={Percent} />
    </div>
  )
}

export default ProgressC