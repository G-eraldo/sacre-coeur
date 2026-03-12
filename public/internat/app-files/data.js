var APP_DATA = {
  scenes: [
    {
      id: "0-entre",
      name: "Entrée",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.2748430161167938,
          pitch: 0.28376078785974634,
          rotation: 0,
          target: "1-hall",
        },
        {
          yaw: 0.7617719583544815,
          pitch: 0.23183321780909694,
          rotation: 0.7853981633974483,
          target: "2-couloir-des-chambres",
        },
        {
          yaw: 0.4631115481278929,
          pitch: 0.15510121066995453,
          rotation: 0,
          target: "3-couloir",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "1-hall",
      name: "Hall",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.2571249044153987,
          pitch: 0.2006887000561015,
          rotation: 0,
          target: "0-entre",
        },
        {
          yaw: -2.945826515793554,
          pitch: 0.11345364504833455,
          rotation: 0,
          target: "2-couloir-des-chambres",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "2-couloir-des-chambres",
      name: "Couloir des chambres",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 3.10783195173075,
          pitch: 0.10886263714560585,
          rotation: 0,
          target: "0-entre",
        },
        {
          yaw: 0.6854127688507088,
          pitch: 0.14632285887443608,
          rotation: 0.7853981633974483,
          target: "4-premire-chambre",
        },
        {
          yaw: -0.6586612214328582,
          pitch: 0.24196294151768782,
          rotation: 5.497787143782138,
          target: "5-deuxime-chambre",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "3-couloir",
      name: "Couloir",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.0738415541086521,
          pitch: 0.044103319934007956,
          rotation: 0,
          target: "6-cantine",
        },
        {
          yaw: -0.7291388582514227,
          pitch: 0.3448678531764102,
          rotation: 13.351768777756625,
          target: "7-salle-informatique",
        },
        {
          yaw: -1.296137011521072,
          pitch: 0.19210757723791616,
          rotation: 10.995574287564278,
          target: "9-salle-de-jeux-",
        },
        {
          yaw: -2.7252293316827174,
          pitch: 0.17597885492981113,
          rotation: 0,
          target: "8-chapelle",
        },
        {
          yaw: 0.4221365452015391,
          pitch: 0.18875051081597505,
          rotation: 0,
          target: "10-salle-de-repos",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "4-premire-chambre",
      name: "Première Chambre",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -1.1866440455188876,
          pitch: 0.11827512818264196,
          rotation: 0,
          target: "2-couloir-des-chambres",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "5-deuxime-chambre",
      name: "Deuxième Chambre",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.00550893738128,
          pitch: 0.10259379360574705,
          rotation: 0.7853981633974483,
          target: "2-couloir-des-chambres",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "6-cantine",
      name: "Cantine",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 0.9036115420923849,
          pitch: 0.14814487499080897,
          rotation: 0,
          target: "3-couloir",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "7-salle-informatique",
      name: "Salle informatique",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 2.3502482673415397,
          pitch: 0.1968674561006516,
          rotation: 0,
          target: "3-couloir",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "8-chapelle",
      name: "Chapelle",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: -2.5092665756339,
          pitch: 0.14194089323575376,
          rotation: 0,
          target: "3-couloir",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "9-salle-de-jeux-",
      name: "Salle de jeux ",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.840724139883541,
          pitch: 0.29770865619014053,
          rotation: 0,
          target: "3-couloir",
        },
      ],
      infoHotspots: [],
    },
    {
      id: "10-salle-de-repos",
      name: "Salle de repos",
      levels: [
        {
          tileSize: 256,
          size: 256,
          fallbackOnly: true,
        },
        {
          tileSize: 512,
          size: 512,
        },
        {
          tileSize: 512,
          size: 1024,
        },
        {
          tileSize: 512,
          size: 2048,
        },
      ],
      faceSize: 1520,
      initialViewParameters: {
        pitch: 0,
        yaw: 0,
        fov: 1.5707963267948966,
      },
      linkHotspots: [
        {
          yaw: 1.3755406473778997,
          pitch: 0.18935581075524333,
          rotation: 0,
          target: "3-couloir",
        },
      ],
      infoHotspots: [],
    },
  ],
  name: "internat",
  settings: {
    mouseViewMode: "drag",
    autorotateEnabled: false,
    fullscreenButton: true,
    viewControlButtons: false,
  },
};
