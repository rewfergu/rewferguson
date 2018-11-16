const photoSearchOverview = require('./projects/photo-search/overview');

const siteData = [
  {
    name: 'ACC Catalog',
    slug: 'acc-catalog',
    status: 2,
    featured: true,
    cover: {
      src: 'projects/ACC-Catalog/cover.jpg',
      alt: 'The 2018 ACC Catalog home screen'
    },
    description:
      'ACC did not have a html based catalog, just a pdf. We put together a CMS based in WordPress so that content owners could update pages, fed that content into react components through the REST API, and we rendered and archived static versions with Gatsby',
    tags: ['react', 'Gatsby', 'WordPress', 'aws', 'cloudfront', 's3'],
    link: 'https://catalog.austincc.edu',
    images: [
      {
        src: 'projects/ACC-Catalog/catalog.austincc.edu.png',
        alt:
          'the full home page screenshot with menu, hero image, message from the president and how to use this catalog intro'
      },
      {
        src: 'projects/ACC-Catalog/catalog.austincc.edu2.png',
        alt: 'secondary card navigation and how to use this catalog intro'
      },
      {
        src:
          'projects/ACC-Catalog/catalog.austincc.edu_search__q=international+students.png',
        alt: 'search results screenshot'
      },
      {
        src:
          'projects/ACC-Catalog/catalog.austincc.edu_college-entry_paying-for-college_buy-textbooks-supplies_.png',
        alt: 'screenshot for textbook and supplies page'
      }
    ]
  },
  {
    name: 'ACC Online',
    slug: 'acc-online',
    status: 2,
    featured: true,
    cover: {
      src: 'projects/ACC-Online/cover.jpg',
      alt:
        'The ACC Online home page screenshot with main menu and header image depicting students gathering around a computer'
    },
    description:
      'ACC did not have a html based catalog, just a pdf. We put together a CMS based in WordPress so that content owners could update pages, fed that content into react components through the REST API, and we rendered and archived static versions with Gatsby',
    tags: ['react', 'Gatsby', 'WordPress'],
    link: 'https://catalog.austincc.edu',
    images: [
      {
        src: 'projects/ACC-Online/online.austincc.edu.png',
        alt: 'full page screenshot with header, main menu and all sections'
      }
    ]
  },
  {
    name: 'Arduino Web Controller',
    slug: 'arduino-web-controller',
    status: 2,
    description: 'I want to control hardware through a web interface.',
    tags: []
  },
  {
    name: 'branches',
    slug: 'branches',
    status: 3,
    cover: 'projects/Branches/output.png',
    description:
      'Randomly generated artwork created in Processing. Processing takes an SVG file with tiles inside and arranges them on a grid in random order so the white curves connect from tile to tile. For the most part.',
    tags: ['svg', 'processing'],
    github: 'https://github.com/rewfergu/branches'
  },
  {
    name: 'Budget Tracker',
    slug: 'budget-tracker',
    status: 2,
    cover: 'projects/Budget-Tracker/sample.png',
    description:
      'A mobile application used to track expenses. Built in AngularJS with a Firebase backend.',
    tags: ['angular', 'firebase', 'javascript'],
    github: 'https://github.com/rewfergu/budgetTracker'
  },
  {
    name: 'Drawing Game',
    slug: 'drawing-game',
    status: 1,
    description:
      'A mobile game where you are presented with parts of a design, and you use drawing tools to complete the image.',
    tags: ['javascript', 'svg', 'canvas', 'processing', 'p5'],
    github: ''
  },
  {
    name: 'DynamiCat',
    slug: 'dynamicat',
    status: 3,
    cover: 'projects/DynamiCat/threeCats.png',
    description:
      'A script in Processing to dynamically create cat faces based on hand drawn components.',
    tags: ['processing', 'svg'],
    github: 'https://github.com/rewfergu/dynamiCat'
  },
  {
    name: 'Flip Draw',
    slug: 'flipdraw',
    status: 1,
    cover: 'projects/flipDraw/header.png',
    description:
      'Simple two player drawing and guessing game using JavaScript.  One player has a blank drawing canvas and the other player has scrambled letter tiles.  As the first player draws the second player guesses the drawing by assembling the tiles.',
    tags: [
      'svg',
      'paperjs',
      'canvas',
      'firebase',
      'javascript',
      'jquery',
      'jquery ui',
      'mobile'
    ],
    github: 'https://github.com/rewfergu/flipDraw',
    link: ''
  },
  {
    name: 'Frame Squeezer',
    slug: 'framesqueezer',
    status: 3,
    cover: 'projects/Frame-Squeezer/output.png',
    description:
      'I really liked the movie barcode images on Tumblr, and I’ve been trying to figure out a way to approximate that type of image using Processing.',
    tags: ['processing'],
    github: 'https://github.com/rewfergu/frameSqueezer'
  },
  {
    name: 'The Frank Tank',
    slug: 'franktank',
    status: 1,
    description:
      'YouTube player application that curates sports videos and allows users to comment on and favorite time based segments.',
    github: 'https://github.com/rubber-duckies/the-frank-tank'
  },
  {
    name: 'Hangman',
    slug: 'hangman',
    status: 2,
    cover: 'projects/hangman/hangman.png',
    description:
      'An online version of the hangman game with user authentication, single player and real time multiplayer capabilities.',
    github: 'https://github.com/rewfergu/hangman'
  },
  {
    name: 'Instructional Web WordPress Theme',
    slug: 'iw-wordpress-theme',
    status: 2,
    featured: true,
    cover: {
      src: 'projects/iw-wordpress-theme/cover.jpg',
      alt:
        'The Public Safety Training Center home page screenshot with main menu and hero image showing students in training'
    },
    description:
      'Many of ACCs department sites and instructional projects were based in WordPress. Instructional Web needed to develop a base theme so that these projects would benefit from a similar visual language and more closely follow college branding and standards. We developed a series of customizable content blocks in Advanced Custom Fields that could then be reassembled in the admin to give content owners some control over the presentation and still be within a standard accessible theme.',
    tags: ['WordPress', 'php', 'javascript', 'css', 'twig'],
    link: '',
    images: [
      {
        src: 'projects/iw-wordpress-theme/pss.austincc.edu_pstc.png',
        alt:
          'full screenshot of the home screen for the Public Safety Training Center website'
      }
    ]
  },
  {
    name: 'iPad Stand',
    slug: 'ipad-stand',
    status: 3
  },
  {
    name: 'Laptop Stand',
    slug: 'laptop-stand',
    status: 2,
    description: 'I want my own laptop stand for my desk',
    tags: []
  },
  {
    name: 'Maze Game',
    slug: 'maze-game',
    status: 2,
    description:
      'A simple maze game for mobile that uses the accelerometer to move the player.',
    tags: []
  },
  {
    name: 'Midi Controller',
    slug: 'midi-controller',
    status: 2,
    description:
      'Some controls in Logic are just easier if you have a physical knob or control to manipulate. Assigning them is pretty easy in the software, I just need to create some knobs to assign. Arduino can output this info in MIDI.',
    tags: ['arduino', 'midi']
  },
  {
    name: 'Notecode',
    slug: 'notecode',
    status: 1,
    featured: true,
    cover: {
      src: 'projects/Notecode/notecode.png',
      alt:
        'Notecode screenshot showing the syntax highlighting for a snippet of js code'
    },
    description: 'A note taking app build on react, firebase and CodeMirror',
    tags: ['codemirror', 'react', 'firebase', 'jest'],
    github: 'https://github.com/rewfergu/notecode',
    link: 'https://notecode-c3469.firebaseapp.com/',
    images: [
      {
        src: 'projects/Notecode/notecode-c3469.firebaseapp.com_.png',
        alt: 'Login screen showing Google integration'
      },
      {
        src: 'projects/Notecode/notecode-c3469.firebaseapp.com_2.png',
        alt: 'screenshot of sample note with css syntax highlighting'
      }
    ]
  },
  {
    name: 'Octopus',
    slug: 'octopus',
    status: 2,
    description:
      'I’m trying to script a looping animation for octopus tentacle(s).',
    tags: []
  },
  {
    name: 'Photo Scramble',
    slug: 'photo-scramble',
    status: 3,
    cover: 'projects/Photo-Scramble/header.png',
    description:
      'A basic photo scramble game. I wanted to design a project in javascript that I could then wrap in PhoneGap and try to access the camera roll to play a game.',
    tags: ['javascript', 'jquery'],
    github: 'https://github.com/rewfergu/photo-scramble'
  },
  // {
  //   name: 'Test it out',
  //   slug: 'testing',
  //   status: 2,
  //   featured: true,
  //   cover: 'projects/Quadcopter/header.svg',
  //   description: 'this is a test of my big javascript object',
  //   tags: ['javascript', 'html', 'css'],
  //   github: 'https://github.com/SoundlyEnthused/SoundDeck',
  //   images: [
  //     'projects/sounddeck/sounddeck.herokuapp.com_.png',
  //     'projects/sounddeck/sounddeck.herokuapp.com_2.png',
  //     'projects/sounddeck/sounddeck.herokuapp.com_3.png',
  //     'projects/sounddeck/sounddeck.herokuapp.com_4.png',
  //     'projects/sounddeck/sounddeck.herokuapp.com_5.png'
  //   ]
  // },
  // {
  //   name: 'Photo Wall',
  //   slug: 'photo-wall',
  //   status: 2,
  //   featured: true,
  //   cover: 'projects/photo-search/cover.png',
  //   description: `Now that I have a family, I thought it would be a great idea to put more family photos around. As I was collecting photos, I realized I don't know a lot about the poeple in some of these older ones, and as the years march on it's possible I could find myself in a situation where I dont have access to this information. So it's not just a matter of saving photos, but saving as much of the story as I can as well.

  //   Since I am a web developer, my first idea was to create a web project, and I wanted a way to search the photo database using only the photo as a query parameter. By storing the photos in a searchable database, I can use a mobile snapshot of the framed picture on the wall to search for info about it. That photo goes to my server where it uses a matching algorithm to match the photo request and provide any relavant info from the database.`,
  //   tags: ['python', 'flask', 'opencv']
  // },
  {
    name: 'Photo Search',
    slug: 'photo-search',
    status: 2,
    featured: true,
    cover: {
      src: 'projects/photo-search/cover.png',
      alt: 'screenshot of main photo search screen with title and camera button'
    },
    description: photoSearchOverview,
    tags: ['python', 'flask', 'opencv'],
    link: '',
    images: [
      {
        src: 'projects/photo-search/img_2173.png',
        alt:
          'mobile screenshot showing home screen with title and camera button'
      },
      {
        src: 'projects/photo-search/img_2174.png',
        alt: 'mobile screenshot showing the take picture interaction'
      },
      {
        src: 'projects/photo-search/img_2175.png',
        alt: 'the results screen after a successful match'
      }
    ],
    video: ['https://youtu.be/zJCTS6EI4sQ']
  },
  {
    name: 'Projector',
    slug: 'projector',
    status: 2,
    description: 'a diy method of projecting images from my computer',
    tags: []
  },
  {
    name: 'Quadcopter',
    slug: 'quadcopter',
    status: 2,
    cover: 'projects/Quadcopter/header.svg',
    description:
      "I'm trying to build a quadcopter, and learning about each piece as I go.",
    tags: ['arduino', 'node', 'raspberry pi', 'johnny five']
  },
  {
    name: 'Raspberry Pi Bluetooth Audio Receiver',
    slug: 'raspberry-pi-bluetooth-audio-receiver',
    status: 3,
    description:
      'A Raspberry Pi, with a Bluetooth adapter can receive audio from a variety of sources and output the signal through its built-in audio outputs. Any audio device with an aux jack could potentially receive a wireless Bluetooth audio signal.',
    tags: []
  },
  {
    name: 'Raspberry Pi Video Camera',
    slug: 'raspberry-pi-video-camera',
    status: 2,
    description:
      'I used to have a pretty big collection of vintage cameras, although its quite a bit smaller these days. I purchased a really cool Canon super 8 camera with sound the other day and I’ve been trying to figure out to breathe new life into it. I imagined that if I could find a way to modify the Raspberry Pi camera module and fit it inside the case, there would be enough room inside the film compartment for the rest of the Raspberry Pi’s electronics. I’d have a Raspberry Pi powered camera inside a cool vintage super 8 case.',
    tags: ['raspberry pi', 'python']
  },
  {
    name: 'SoundDeck',
    slug: 'sounddeck',
    status: 1,
    featured: true,
    cover: {
      src: 'projects/sounddeck/screenshot.png',
      alt: 'A SoundDeck listening room with users voting on two current DJs'
    },
    description:
      'A community dj app based on the soundcloud api allowing users to enter rooms, curate playlists, and vote on the best tracks.',
    tags: [
      'react',
      'socket.io',
      'express',
      'node',
      'mongo',
      'bootstrap',
      'soundcloud'
    ],
    github: 'https://github.com/SoundlyEnthused/SoundDeck',
    images: [
      {
        src: 'projects/sounddeck/sounddeck.herokuapp.com_.png',
        alt: 'login screen showing SoundCloud integration'
      },
      {
        src: 'projects/sounddeck/sounddeck.herokuapp.com_2.png',
        alt: 'screenshot of a sample room with listeners voting on djs'
      },
      {
        src: 'projects/sounddeck/sounddeck.herokuapp.com_3.png',
        alt: 'search and playlist screenshot'
      },
      {
        src: 'projects/sounddeck/sounddeck.herokuapp.com_4.png',
        alt: 'screenshot of one dj receiving downvotes'
      },
      {
        src: 'projects/sounddeck/sounddeck.herokuapp.com_5.png',
        alt: 'screenshot showing the DJ Queue button label'
      }
    ],
    video: ['https://www.youtube.com/watch?v=r31VnkD1kbM']
  },
  {
    name: 'Timer',
    slug: 'timer',
    status: 3,
    featured: true,
    cover: {
      src: 'projects/Timer/header.svg',
      alt: 'an svg illustration of the timer clock face'
    },
    description:
      'A simple animated timer application written in JavaScript, SVG and the Electron framework.',
    tags: ['svg', 'd3', 'animation', 'javascript', 'electron'],
    link: 'https://ryj173yr0p.codesandbox.io/',
    github: 'https://github.com/rewfergu/timer',
    images: [
      {
        src: 'projects/Timer/screenshot.png',
        alt: 'screenshot showing the timer progress'
      },
      {
        src: 'projects/Timer/ryj173yr0p.codesandbox.io_.png',
        alt: 'screenshot showing the timer duration setting'
      }
    ]
  },
  {
    name: 'TodoRedo',
    slug: 'todoredo',
    status: 1,
    featured: true,
    cover: {
      src: 'projects/TodoRedo/todoredo2.png',
      alt: 'the TodoRedo login screen'
    },
    description:
      'A simple todo list built in React and Firebase. I’ve never made one, so I wanted to try one as a test. The only aspect of this app that I haven’t seen anywhere else is I wanted a daily list that would reset itself each day. I have items that I would like to check off each day, and the next morning be presented with a fresh list.',
    tags: ['react', 'firebase', 'javascript'],
    github: 'https://github.com/rewfergu/todoredo',
    link: 'https://todoredo.firebaseapp.com',
    images: [
      {
        src: 'projects/TodoRedo/todoredo.firebaseapp.com_.png',
        alt: 'screenshot of the daily list that resets itself each day'
      },
      {
        src: 'projects/TodoRedo/todoredo.firebaseapp.com_1.png',
        alt: 'daily list item edit screen'
      },
      {
        src: 'projects/TodoRedo/todoredo.firebaseapp.com_2.png',
        alt: 'list creation and deletion screen'
      }
    ]
  },
  {
    name: 'Udacity Arcade Game Project',
    slug: 'udacity-arcade-game-project',
    status: 3,
    cover: 'projects/Udacity-Arcade-Game-projects/screenshot.png',
    description:
      'Project 4 for the Udacity Front End Developer Nanodegree program.',
    tags: ['javascript', 'animation', 'canvas'],
    github: 'https://github.com/rewfergu/udacity-arcade-game'
  },
  {
    name: 'Udacity Neighborhood Map Project',
    slug: 'udacity-neighborhood-map-project',
    status: 3,
    cover: 'projects/Udacity-Neighborhood-Map-projects/header.png',
    description:
      'Project 5 for the Udacity Front End Developer Nanodegree program.',
    tags: [
      'javascript',
      'knockoutjs',
      'requirejs',
      'bootstrap',
      'sass',
      'Google Maps JavaScript API',
      'Google Geocode API',
      'Google Places API',
      'Dark Sky Weather API',
      'Wikipedia API',
      'Foursquare API',
      'Flickr API'
    ],
    github: 'https://github.com/rewfergu/udacity-neighborhood-map'
  },
  {
    name: 'Untitled Water Drop Game',
    slug: 'untitled-water-drop-game',
    status: 2,
    cover: 'projects/Untitled-Water-Drop-Game/header.gif',
    description:
      'A mobile game where the main character is a drop of water. Physical properties like surface tension apply. Enemies are evaporative elements like sun, fires, etc.',
    tags: ['animation', 'javascript', 'unity']
  },
  {
    name: 'Weather Lamp',
    slug: 'weather-lamp',
    status: 2,
    cover: 'projects/Weather-Lamp/header.svg',
    description:
      'I picked an office with no windows, so I’m stuck with artificial light only while I work. I’d like some ambient light provided with RGB LEDs that change their color temperature based on the local weather outside. I’m sure there are lamps that do this, but I would like the light more integrated into my work area. Not one single spot of colored light, but an overall ambient glow. I figure to get this effect I would have to build something myself.',
    tags: ['processing']
  }
];

module.exports = siteData;
// export default siteData;
