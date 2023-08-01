import { ExclamationCircleFilled, PlusOutlined } from '@ant-design/icons';
import { Button, Input, Space, message, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { urlRouter } from 'src/utils/constants';
import './style.scss';
import { useEffect, useState } from 'react';
import { deleteService, getListService } from 'src/api/service';
import { Table } from 'antd';

const Service = () => {
  const [list, setList] = useState([]);
  const { confirm } = Modal;
  const [isLoading, setIsLoading] = useState(true);
  const [messageApi] = message.useMessage();
  useEffect(() => {
    const ListService = async () => {
      const { data } = await getListService();
      setList(data.responses);
    };
    ListService();
  }, []);

  const showDeleteConfirm = (id: any) => {
    confirm({
      title: 'Bạn có muốn xóa dịch vụ này không ?',
      icon: <ExclamationCircleFilled />,
      content: 'Lưu ý: Toàn bộ dữ liệu về dịch vụ này sẽ bị xóa',
      okText: 'Có',
      okType: 'danger',
      cancelText: 'Không',
      async onOk() {
        await deleteService(id)
          .then((resp) => {
            const ListService = async () => {
              const { data } = await getListService();
              setList(data.responses);
            };
            ListService();
            if (resp.status === 200) {
              alert('thanh cong');
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  };
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
    },
    {
      title: 'Tên dịch vụ',
      dataIndex: 'name',
    },
    {
      title: 'Giá',
      dataIndex: 'price',
    },
    {
      title: 'Mã dịch vụ',
      dataIndex: 'code',
    },
    {
      title: '',
      dataIndex: 'actions',
      render: (_: any, record: any) => (
        <Space size='middle'>
          <Link to={`http://localhost:3000/admin/service/${record.id}`}>
            <Button>Sửa</Button>
          </Link>
          <Button onClick={() => showDeleteConfirm(record.id)} danger>
            Xóa
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className='header'>
        <div className='header-title'>
          <h1>Dịch vụ</h1>
        </div>
        <div className='action'>
          <Link to={urlRouter.ADD_SERVICE}>
            <Button type='primary'>
              {''}
              <PlusOutlined style={{ fontSize: 15 }} />
              Thêm dịch vụ
            </Button>
          </Link>
        </div>
      </div>
      <hr />
      <div className='description'>
        <strong>Lưu ý:</strong>
        <p>
          Các dịch vụ phải được gán cho từng khách thuê phòng để khi tính tiền sẽ có tiền dịch vụ đó. Để cấu hình đơn
          giá điện nước tính theo bậc thang bạn vẫn phải tạo 2 dịch vụ là điện, nước
        </p>
      </div>
      <div className='render-input'>
        <Input
          // value={dataFilter[item.field]}
          placeholder='Tên'
          // onChange={e => handleUpdateField(e, item.field, item.type)}
        />
        <Button type='primary'>Tìm</Button>
      </div>
      <Table dataSource={list} columns={columns} rowKey='name' />
    </>
  );
};

export default Service;
