import Assets from 'src/pages/admin/Assets/Assest';
import ListArise from 'src/pages/admin/arise/ListArise';
import UpdateArise from 'src/pages/admin/arise/UpdateArise';
import CreateMember from 'src/pages/admin/room/createMember/createMember';
import ListMember from 'src/pages/admin/room/listMember/listMember';
import ListRooms from 'src/pages/admin/room/listRoom/listRoom';
import Charge from 'src/pages/admin/charge/Charge';
import DataPower from 'src/pages/admin/dataPower/dataPower';
import DataWater from 'src/pages/admin/dataWater/dataWater';
import Establish from 'src/pages/admin/establish/establish';
import Payment from 'src/pages/admin/payMent/payMent';
import Report from 'src/pages/admin/rePort/report';
import CreateRoom from 'src/pages/admin/room/createRoom/createRoom';
import Room from 'src/pages/admin/room/room/room';
import Service from 'src/pages/admin/service/ListService';
import UpdateSevice from 'src/pages/admin/service/UpdateService';
import AuthLayout from '../layout/authLayout/AuthLayout';
import Dashboard from '../pages/admin/dashboard/Dashboard';
import Pg from '../pages/admin/pg/Pg';
import ListPg from '../pages/admin/pg/listPg/ListPg';
import Login from '../pages/login/Login';
import { urlRouter } from '../utils/constants';
import KeepRoom from 'src/pages/admin/keep-room/keepRoom';
import CreateKeepRoom from 'src/pages/admin/keep-room/create-keep-room';

export const adminRoutes = [
  {
    index: true,
    path: urlRouter.DASHBOARD,
    component: Dashboard,
  },
  {
    path: urlRouter.ROOM,
    component: Room,
  },
  {
    path: `${urlRouter.ROOM}/${urlRouter.LIST_MEMBER}`,
    component: ListMember,
  },
  {
    path: `${urlRouter.ROOM}/${urlRouter.LIST_ROOM}`,
    component: ListRooms,
  },
  {
    path: `${urlRouter.ROOM}/${urlRouter.CREATE_ROOM}`,
    component: CreateRoom,
  },
  {
    path: `${urlRouter.ROOM}/${urlRouter.CREATE_MEMBER}`,
    component: CreateMember,
  },
  {
    path: urlRouter.SERVICE,
    component: Service,
    children: [{ path: urlRouter.SERVICE, component: Service, index: true }],
  },
  {
    path: `${urlRouter.SERVICE}/${urlRouter.ADD_SERVICE}`,
    component: UpdateSevice,
  },
  {
    path: urlRouter.DATA_POWER,
    component: DataPower,
  },
  {
    path: urlRouter.DATA_WATER,
    component: DataWater,
  },
  {
    path: urlRouter.ARISE,
    component: ListArise,
  },
  {
    path: `${urlRouter.ARISE}/${urlRouter.ADD_ARISE}`,
    component: UpdateArise,
  },
  {
    path: urlRouter.PAYMENT,
    component: Payment,
  },
  {
    path: urlRouter.REPORT,
    component: Report,
  },
  {
    path: urlRouter.ASSETS,
    component: Assets,
  },
  {
    path: urlRouter.CHARGE,
    component: Charge,
  },
  {
    path: urlRouter.KEEP_ROOM,
    component: KeepRoom,
  },
  {
    path: urlRouter.CREATE_KEEP_ROOM,
    component: CreateKeepRoom,
  },
  {
    path: 'pg',
    component: Pg,
    children: [
      { path: urlRouter.LIST_PG, component: ListPg, index: true },
      // { path: 'create', component: Login },
      // { path: 'update', component: Login },
    ],
  },

  {
    path: urlRouter.ESTABLISH,
    component: Establish,
  },
];

export const authRoute = [
  {
    index: true,
    path: 'login',
    component: Login,
  },
  {
    path: 'forgot-password',
    component: AuthLayout,
  },
];
