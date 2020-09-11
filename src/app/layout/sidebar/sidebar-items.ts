import { RouteInfo } from './sidebar.metadata';
export const ROUTES: RouteInfo[] = [
  {
    title: 'Dashboard',
    icon: 'fas fa-home',
    class: 'ml-menu',
    groupTitle: false,
    path: '/dashboard/main',
    submenu: [
    ]
  },

  // {
  //   path: '',
  //   title: 'Authentication',
  //   icon: 'fas fa-id-card',
  //   class: 'menu-toggle',
  //   groupTitle: false,
  //   submenu: [
  //     {
  //       path: '/authentication/signin',
  //       title: 'Sign In',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/authentication/signup',
  //       title: 'Sign Up',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       submenu: []
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   title: 'Multi level Menu',
  //   icon: 'fas fa-angle-double-down',
  //   class: 'menu-toggle',
  //   groupTitle: false,
  //   submenu: [
  //     {
  //       path: '#',
  //       title: 'First',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/',
  //       title: 'Second',
  //       icon: '',
  //       class: 'ml-sub-menu',
  //       groupTitle: false,
  //       submenu: [
  //         {
  //           path: '/',
  //           title: 'Second 1',
  //           icon: '',
  //           class: '',
  //           groupTitle: false,
  //           submenu: []
  //         },
  //         {
  //           path: '/',
  //           title: 'Second 2',
  //           icon: '',
  //           class: '',
  //           groupTitle: false,
  //           submenu: []
  //         }
  //       ]
  //     },
  //     {
  //       path: '#',
  //       title: 'Third',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       submenu: []
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   title: 'Doctors',
  //   icon: 'fas fa-user-md',
  //   class: 'menu-toggle',
  //   groupTitle: false,
  //   submenu: [
  //     {
  //       path: '/doctors/allDoctors',
  //       title: 'All Doctor',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/doctors/add-doctor',
  //       title: 'Add Doctor',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/doctors/edit-doctor',
  //       title: 'Edit Doctor',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/doctors/doctor-profile',
  //       title: 'Doctor Profile',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       submenu: []
  //     }
  //   ]
  // },
  // {
  //   path: '',
  //   title: 'Staff',
  //   icon: 'fas fa-user-friends',
  //   class: 'menu-toggle',
  //   groupTitle: false,
  //   submenu: [
  //     {
  //       path: '/staff/all-staff',
  //       title: 'All Staff',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/staff/add-staff',
  //       title: 'Add Staff',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/staff/edit-staff',
  //       title: 'Edit Staff',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       submenu: []
  //     },
  //     {
  //       path: '/staff/staff-profile',
  //       title: 'Staff Profile',
  //       icon: '',
  //       class: 'ml-menu',
  //       groupTitle: false,
  //       submenu: []
  //     }
  //   ]
  // },
  {
    path: '',
    title: 'Patient',
    icon: 'fab fa-accessible-icon',
    class: 'menu-toggle',
    groupTitle: false,
    submenu: [
      {
        path: '/patient/all-patient',
        title: 'All Patient',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      {
        path: '/patient/add-patient',
        title: 'Add Patient',
        icon: '',
        class: 'ml-menu',
        groupTitle: false,
        submenu: []
      },
      // {
      //   path: '/patient/edit-patient',
      //   title: 'Edit Patient',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   submenu: []
      // },
      // {
      //   path: '/patient/patient-profile',
      //   title: 'Patient Profile',
      //   icon: '',
      //   class: 'ml-menu',
      //   groupTitle: false,
      //   submenu: []
      // }
    ]
  },
];
