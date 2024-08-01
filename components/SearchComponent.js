import { Input, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Search } = Input;

const SearchComponent = ({ onSearch }) => {
    return (
        <Search
            placeholder="Tìm kiếm"
            enterButton
            size="large"
            onSearch={onSearch}
            style={{ marginBottom: '20px' }}
        />
    );
};

export default SearchComponent;
