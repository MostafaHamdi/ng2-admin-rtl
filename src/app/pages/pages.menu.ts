export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
<<<<<<< HEAD
            title: 'داشبورد',
=======
            title: 'general.menu.dashboard',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },
      {
        path: 'editors',
        data: {
          menu: {
<<<<<<< HEAD
            title: 'ویرایشگر',
=======
            title: 'general.menu.editors',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
            icon: 'ion-edit',
            selected: false,
            expanded: false,
            order: 100,
          }
        },
        children: [
          {
            path: 'ckeditor',
            data: {
              menu: {
                title: 'general.menu.ck_editor',
              }
            }
          }
        ]
      },
      {
        path: 'components',
        data: {
          menu: {
            title: 'general.menu.components',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        },
        children: [
          {
            path: 'treeview',
            data: {
              menu: {
                title: 'general.menu.tree_view',
              }
            }
          }
        ]
      },
      {
        path: 'charts',
        data: {
          menu: {
<<<<<<< HEAD
            title: 'نمودار',
=======
            title: 'general.menu.charts',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
            icon: 'ion-stats-bars',
            selected: false,
            expanded: false,
            order: 200,
          }
        },
        children: [
          {
            path: 'chartist-js',
            data: {
              menu: {
                title: 'general.menu.chartist_js',
              }
            }
          }
        ]
      },
      {
        path: 'ui',
        data: {
          menu: {
<<<<<<< HEAD
            title: 'مولفه ها',
=======
            title: 'general.menu.ui_features',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
            icon: 'ion-android-laptop',
            selected: false,
            expanded: false,
            order: 300,
          }
        },
        children: [
          {
            path: 'typography',
            data: {
              menu: {
<<<<<<< HEAD
                title: 'تایپوگرافی',
=======
                title: 'general.menu.typography',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
              }
            }
          },
          {
            path: 'buttons',
            data: {
              menu: {
<<<<<<< HEAD
                title: 'دکمه ها',
=======
                title: 'general.menu.buttons',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
              }
            }
          },
          {
            path: 'icons',
            data: {
              menu: {
<<<<<<< HEAD
                title: 'آیکن ها',
=======
                title: 'general.menu.icons',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
              }
            }
          },
          {
            path: 'modals',
            data: {
              menu: {
<<<<<<< HEAD
                title: 'مدال',
=======
                title: 'general.menu.modals',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
              }
            }
          },
          {
            path: 'grid',
            data: {
              menu: {
<<<<<<< HEAD
                title: 'گرید',
=======
                title: 'general.menu.grid',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
              }
            }
          },
        ]
      },
      {
        path: 'forms',
        data: {
          menu: {
<<<<<<< HEAD
            title: 'عناصر فرم',
=======
            title: 'general.menu.form_elements',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
            icon: 'ion-compose',
            selected: false,
            expanded: false,
            order: 400,
          }
        },
        children: [
          {
            path: 'inputs',
            data: {
              menu: {
<<<<<<< HEAD
                title: 'فرم',
=======
                title: 'general.menu.form_inputs',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
              }
            }
          },
          {
            path: 'layouts',
            data: {
              menu: {
<<<<<<< HEAD
                title: 'طرح های فرم',
=======
                title: 'general.menu.form_layouts',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
              }
            }
          }
        ]
      },
      {
        path: 'tables',
        data: {
          menu: {
<<<<<<< HEAD
            title: 'جدول ها',
=======
            title: 'general.menu.tables',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
            icon: 'ion-grid',
            selected: false,
            expanded: false,
            order: 500,
          }
        },
        children: [
          {
            path: 'basictables',
            data: {
              menu: {
<<<<<<< HEAD
                title: 'جدول های معمولی',
=======
                title: 'general.menu.basic_tables',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
              }
            }
          },
          {
            path: 'smarttables',
            data: {
              menu: {
<<<<<<< HEAD
                title: 'جدول های هوشنمد',
=======
                title: 'general.menu.smart_tables',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
              }
            }
          }
        ]
      },
      {
        path: 'maps',
        data: {
          menu: {
<<<<<<< HEAD
            title: 'نقشه ها',
=======
            title: 'general.menu.maps',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
            icon: 'ion-ios-location-outline',
            selected: false,
            expanded: false,
            order: 600,
          }
        },
        children: [
          {
            path: 'googlemaps',
            data: {
              menu: {
<<<<<<< HEAD
                title: 'Google نقشه',
=======
                title: 'general.menu.google_maps',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
              }
            }
          },
          {
            path: 'leafletmaps',
            data: {
              menu: {
<<<<<<< HEAD
                title: 'Leaflet نقشه',
=======
                title: 'general.menu.leaflet_maps',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
              }
            }
          },
          {
            path: 'bubblemaps',
            data: {
              menu: {
<<<<<<< HEAD
                title: 'Bubble نقشه',
=======
                title: 'general.menu.bubble_maps',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
              }
            }
          },
          {
            path: 'linemaps',
            data: {
              menu: {
                title: 'general.menu.line_maps',
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
<<<<<<< HEAD
            title: 'صفحات',
=======
            title: 'general.menu.pages',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
            icon: 'ion-document',
            selected: false,
            expanded: false,
            order: 650,
          }
        },
        children: [
          {
            path: ['/login'],
            data: {
              menu: {
<<<<<<< HEAD
                title: 'ورود'
=======
                title: 'general.menu.login'
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
              }
            }
          },
          {
            path: ['/register'],
            data: {
              menu: {
<<<<<<< HEAD
                title: 'عضویت'
=======
                title: 'general.menu.register'
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
              }
            }
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
<<<<<<< HEAD
            title: 'منو سطح ۱',
=======
            title: 'general.menu.menu_level_1',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
            icon: 'ion-ios-more',
            selected: false,
            expanded: false,
            order: 700,
          }
        },
        children: [
          {
            path: '',
            data: {
              menu: {
<<<<<<< HEAD
                title: 'منو سطح ۱.۱',
=======
                title: 'general.menu.menu_level_1_1',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
                url: '#'
              }
            }
          },
          {
            path: '',
            data: {
              menu: {
<<<<<<< HEAD
                title: 'منو سطح ۱.۲',
=======
                title: 'general.menu.menu_level_1_2',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
                url: '#'
              }
            },
            children: [
              {
                path: '',
                data: {
                  menu: {
<<<<<<< HEAD
                    title: 'منو سطح ۱.۲.۱',
=======
                    title: 'general.menu.menu_level_1_2_1',
>>>>>>> 17ee11e4aa63ee0361ca9b45ab2d5d2ac49ff165
                    url: '#'
                  }
                }
              }
            ]
          }
        ]
      },
      {
        path: '',
        data: {
          menu: {
            title: 'general.menu.external_link',
            url: 'http://akveo.com',
            icon: 'ion-android-exit',
            order: 800,
            target: '_blank'
          }
        }
      }
    ]
  }
];
