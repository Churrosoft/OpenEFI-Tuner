const linksList = [
  {
    title: 'Dashboard',
    caption: '',
    icon: 'space_dashboard',
    link: '#',
  },
  {
    title: 'DTC',
    caption: 'read/erase DTC codes',
    icon: 'memory',
    link: '#dtc',
  },
  {
    title: 'Ignition',
    caption: '',
    icon: 'settings_input_component',
    innerItems: [
      {
        title: 'Tables',
        caption: 'configure ignition tables',
        link: '#ignition/tables',
      },
      {
        title: 'Configuration',
        caption: '(Dwell time, ignition, cold advance)',
        link: '#dtc',
      },
    ],
  },
  {
    title: 'Injection',
    caption: '',
    icon: 'mdi-needle',
    innerItems: [
      {
        title: 'Tables',
        caption: '(AFR, Fuel VE, FuelPump)',
        link: '#injection/tables',
      },

      {
        title: 'Configuration',
        caption: '(Calculations, DeadTime|PWM, FuelCutout)',
        link: '#injection/config',
      },
      {
        title: 'Advanced Configuration',
        caption: '(dual fuel, NoS, Water/Meth injection)',
        link: '#dtc',
      },
    ],
  },
  {
    title: 'PMIC',
    caption: 'read pmic status',
    icon: 'settings_input_component',
    link: '#pmic',
  },
  {
    title: 'Startup / IDLE',
    caption: '',
    icon: 'mdi-car-speed-limiter',
    innerItems: [
      {
        title: 'Warnup Enrichment (WUE)',
        link: '#startup/wue',
      },

      {
        title: 'Afterstart Enrichment (ASE)',
        link: '#startup/ase',
      },
      {
        title: 'IDLE Advance / VE | IDLE Control',
        link: '#',
      },
    ],
  },
  {
    title: 'Settings',
    caption: 'system settings',
    icon: 'settings',
    link: 'https://chat.quasar.dev',
    innerItems: [
      {
        title: 'Sensors',
        link: '#',
      },

      {
        title: 'I/O Mapping',
        link: '#',
      },
      {
        title: 'Rev Limiter / ShiftLigth',
        link: '#',
      },
      {
        title: 'General Settings',
        link: '#',
        caption: '(tacho output, fan control, relay control)',
      },
    ],
  },
  {
    title: 'Firmware',
    caption: '(rebuild, update, factory reset)',
    icon: 'mdi-usb-flash-drive',
    link: 'https://chat.quasar.dev',
  },
  {
    title: 'Debug Console',
    icon: 'bug_report',
    link: '#debug',
  },
];

export default linksList;
