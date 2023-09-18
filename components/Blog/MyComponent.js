import React, { useState } from 'react';
import { Tooltip } from 'react-tippy';
import 'react-tippy/dist/tippy.css'; // Import CSS của tippy

const MyComponent = () => {
  const fakeData = [
    {
      name: 'ten ten',
      id: 1,
      children: [
        {
          name: 'Documentation',
          id: 1,
          content: 'Welcome to the React PDF viewer documentation. This page covers everything you need to get started with the React PDF viewer component.',
        },
        // Các mục khác
      ]
    },
    // Các danh sách thư mục khác
  ];

  const [selectedItem, setSelectedItem] = useState(null);

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <Tooltip
        trigger="click" // Hiển thị khi người dùng click vào
        position="bottom"
        interactive // Cho phép tương tác với nội dung của tooltip
        arrow // Hiển thị mũi tên chỉ đường
        html={(
          <FolderTree
            data={fakeData}
            onSelect={handleSelectItem}
            activeItemId={selectedItem?.id}
          />
        )}
      >
        <button>Hiển thị cây thư mục</button>
      </Tooltip>
    </div>
  );
};

export default MyComponent;
