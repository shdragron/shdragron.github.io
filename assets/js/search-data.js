// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-shdragron",
    title: "SHDragron",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "post-jetson-orin-nano-csi-camera-setup-notes",
        
          title: "Jetson Orin Nano CSI Camera Setup Notes",
        
        description: "A place to collect embedded camera setup, debugging, and deployment notes.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/jetson-orin-nano-csi-camera-notes/";
          
        },
      },{id: "post-lidar-camera-calibration-single-normal-vector-is-not-enough",
        
          title: "LiDAR-Camera Calibration: Single Normal Vector is Not Enough",
        
        description: "Notes on why calibration assumptions need to be checked against downstream perception behavior.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/lidar-camera-calibration-single-normal-vector-is-not-enough/";
          
        },
      },{id: "post-why-bev-models-fail-under-small-camera-rotation",
        
          title: "Why BEV Models Fail under Small Camera Rotation",
        
        description: "A starting research log for studying viewpoint-change robustness in BEV perception.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/why-bev-models-fail-under-camera-rotation/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals/";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/shdragron", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
