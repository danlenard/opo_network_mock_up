import { lazy } from 'react';

const public_routes = [
  {
  name: 'To Do Form',
  path: '/to-do-form',
  exact: true,
  component: lazy(() => import('../containers/to-do/ToDoForm')),
  },
  {
  name: 'To Do List',
  path: '/to-do-list',
  exact: true,
  component: lazy(() => import('../containers/to-do/ToDoList')),
  },
  {
  name: 'Display Data from Other Source',
  path: '/outsourced-data',
  exact: true,
  component: lazy(() => import('../containers/outsource/DisplayData')),
  },
//   {
//   name: 'Success',
//   path: '/reject',
//   exact: true,
//   component: lazy(() => import('containers/staticPage/Static')),
//   },
//   {
//   name: 'Success',
//   path: '/404',
//   exact: true,
//   component: lazy(() => import('containers/staticPage/Static')),
//   },
];

export default public_routes;
