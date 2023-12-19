import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const AvatarC = ({imageUrl}) => {
    return (
        <div>
            <Avatar src={imageUrl} shape="square" size={64} icon={<UserOutlined />} />
        </div>
    )
}

export default AvatarC