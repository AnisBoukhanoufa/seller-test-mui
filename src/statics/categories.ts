import { color } from "jodit/esm/plugins/color/color";

const wiringType = ["wired", "wireless"];
const screenSize = [
  '11"',
  '12"',
  '13"',
  '14"',
  '15"',
  '15.6"',
  '16"',
  '17"',
  '18"',
  '19"',
  '20"',
  '21.5"',
  '23"',
  '24"',
  '27"',
  '28"',
  '30"',
  '32"',
  '34"',
  '35"',
  '38"',
  '43"',
];
const lengthMeter = [0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const lengthInches = ['12"', '14"', '16"', '18"', '20"', '22"', '24"'];
const fabricMaterial = [
  "cotton",
  "polyester",
  "wool",
  "leather",
  "denim",
  "twill",
  "stretch",
  "pique",
  "tweed",
  "nylon",
  "fleece-lined",
  "mesh",
  "spandex",
  "rubberized",
  "linen",
  "silk",
  "satin",
  "jersey",
  "knit",
  "cashmere",
  "reflective",
  "waterproof",
];
const shoesMaterial = [
  "canvas",
  "slip-on",
  "tassel",
  "ballet",
  "pointed",
  "rubber",
  "suede",
  "faux leather",
  "neoprene",
];
const accessoriesMaterial = [
  "gold",
  "silver",
  "plastic",
  "enamel",
  "mixed",
  "platinum",
  "beaded",
  "leather",
  "fabric",
  "metal",
  "mixed metal",
  "wood",
  "stone",
];
const clothesSizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];
const sizeMililiter = [
  5, 10, 15, 20, 25, 30, 50, 75, 100, 120, 150, 200, 250, 300, 400, 500, 750,
  1000,
];

const memorySize = [
  "16GB",
  "32GB",
  "64GB",
  "128GB",
  "256GB",
  "1TB",
  "2TB",
  "4TB",
];
const basicColors = [
  "Red",
  "Blue",
  "Yellow",
  "Green",
  "Orange",
  "Purple",
  "Pink",
  "Black",
  "White",
  "Gray",
  "Beige",
  "Silver",
  "Gold",
  "Brown",
];
const skinType = ["oily", "combination", "dry", "normal", "all skin types"];
const hairType = [
  "dry",
  "curly",
  "oily",
  "product build-up",
  "fine",
  "flat",
  "color-treated",
  "all hair types",
  "straight",
];
const scent = [
  "citrus",
  "coconut",
  "vanilla",
  "unscented",
  "berry",
  "coffee",
  "fresh",
  "floral",
  "lavender",
];
const spf = [30, 50, 70];
const oralCareType = [
  "gel",
  "paste",
  "fluoride",
  "non-fluoride",
  "fluoride-free",
  "herbal",
  "fluoride",
  "whitening",
  "regular",
  "herbal",
];
const fragrancesNotes = [
  "floral",
  "woody",
  "fruity",
  "citrus",
  "spicy",
  "fresh",
  "woody",
  "fresh",
  "aromatic",
  "citrus",
  "spicy",
];
const toolsAndAccessoriesType = [
  "foundation",
  "blush",
  "powder",
  "blending",
  "detail",
  "liner",
  "flat",
  "retractable",
];
const toolsAndAccessoriesMaterial = ["synthetic", "natural"];
const skincareToolsType = ["manual", "electric", "derma roller", "pen"];

export const categories = {
  electronics: {
    name_en: "electronics",
    audio_equipment: {
      name_en: "audio equipment",
      headphones: {
        name_en: "headphones",
        "over-ear": {
          color: basicColors,
          wiringType: wiringType,
          overEarFeatures: ["noise-cancelling", "sweat-resistant"],
        },
        "in-ear": {
          color: basicColors,
          wiringType: wiringType,
          inEarFeatures: ["noise-isolating", "bluetooth"],
        },
        "on-ear": {
          color: basicColors,
          wiringType: wiringType,
          onEarFeatures: ["foldable", "adjustable"],
        },
      },
      speakers: {
        name_en: "speakers",
        portable_speakers: {
          color: basicColors,
          portableSpeakersType: ["bluetooth", "waterproof"],
          portableSpeakersFeatures: ["rechargeable", "built-in_microphone"],
        },
        home_speakers: {
          color: basicColors,
          name_en: "home speakers",
          homeSpeakersType: ["bookshelf", "floorstanding"],
          homeSpeakersFeatures: ["wi-fi", "multi-room"],
        },
        soundbars: {
          color: basicColors,
          soundbarsSize: ["standard", "compact"],
          soundbarsFeatures: ["subwoofer", "dolby_atmos"],
        },
      },
    },
    computing_devices: {
      name_en: "computing devices",
      laptops: {
        name_en: "laptops",
        ultrabooks: {
          color: basicColors,
          name_en: "ultrabooks",
          screenSize: screenSize,
          ultrabooksFeatures: ["lightweight", "long_battery_life"],
        },
        gaming_laptops: {
          color: basicColors,
          name_en: "gaming laptops",
          screenSize: screenSize,
          gamingLaptopsFeatures: ["high_refresh_rate", "dedicated_GPU"],
        },
        "2-in-1_laptops": {
          color: basicColors,
          name_en: "2-in-1 laptops",
          twoInOneLaptopsType: ["convertible", "detachable"],
          screenSize: screenSize,
        },
      },
      desktops: {
        name_en: "desktops",
        "all-in-one_pcs": {
          color: basicColors,
          name_en: "all-in-one pcs",
          screenSize: screenSize,
          allInOnePcsFeatures: ["touchscreen", "compact_design"],
        },
        gaming_desktops: {
          color: basicColors,
          name_en: "gaming desktops",
          gamingDesktopsFormFactor: ["tower", "mini-tower"],
          gamingDesktopsFeatures: ["RGB_lighting", "high_performance"],
        },

        smart_mouse: {
          color: basicColors,
          name_en: "smart mouse",
        },
        gaming_keyboard: {
          color: basicColors,
          name_en: "gaming keyboard",
        },
        fan: {
          color: basicColors,
          name_en: "fan",
        },
        desktop_accessories: {
          color: basicColors,
          name_en: "desktop accessories",
        },
        workstations: {
          color: basicColors,
          name_en: "workstations",
          workstationsFeatures: ["powerful_CPU", "large_RAM"],
          workstationsUseCase: ["design", "engineering"],
        },
      },
    },
    mobile_devices: {
      name_en: "mobile devices",
      smartphones: {
        name_en: "smartphones",
        android_phones: {
          color: basicColors,
          name_en: "android phones",
          screenSize: screenSize,
          androidPhonesFeatures: ["5G", "high_refresh_rate"],
        },
        iphones: {
          color: basicColors,
          name_en: "iphones",
          iphonesModel: ["iPhone 13", "14", "15"],
          iphonesFeatures: ["camera_quality", "face_ID"],
        },
        accessories: {
          color: basicColors,
          name_en: "accessories",
          smartphonesAccessoriesType: ["cases", "screen_protectors"],
          smartphonesAccessoriesCompatibility: ["universal", "model-specific"],
        },
      },
      tablets: {
        name_en: "tablets",
        standard_tablets: {
          color: basicColors,
          name_en: "standard tablets",
          screenSize: screenSize,
          standardTabletsFeatures: ["wi-fi", "cellular_options"],
        },
        pro_tablets: {
          color: basicColors,
          name_en: "pro tablets",
          screenSize: screenSize,
          proTabletsFeatures: ["stylus_support", "high_performance"],
        },
        accessories: {
          color: basicColors,
          name_en: "accessories",
          tabletsAccessoriesType: ["keyboards", "covers"],
          tabletsAccessoriesCompatibility: ["universal", "model-specific"],
        },
      },
    },
    wearable_technology: {
      name_en: "wearable technology",
      smartwatches: {
        name_en: "smartwatches",
        fitness_trackers: {
          color: basicColors,
          name_en: "fitness trackers",
          fitnessTrackersFeatures: ["heart_rate_monitor", "GPS"],
          fitnessTrackersCompatibility: ["iOS", "Android"],
        },
        smartwatches: {
          color: basicColors,
          name_en: "smartwatches",
          smartwatchesFeatures: ["notifications", "music_control"],
          smartwatchesCompatibility: ["iOS", "Android"],
        },
        hybrid_watches: {
          color: basicColors,
          name_en: "hybrid watches",
          hybridWatchesFeatures: ["analog_display", "smart_notifications"],
          hybridWatchesCompatibility: ["iOS", "Android"],
        },
      },
      fitness_bands: {
        name_en: "fitness bands",
        basic_bands: {
          color: basicColors,
          name_en: "basic bands",
          basicBandsFeatures: ["step_tracking", "sleep_monitoring"],
          basicBandsCompatibility: ["iOS", "Android"],
        },
        advanced_bands: {
          color: basicColors,
          name_en: "advanced bands",
          advancedBandsFeatures: ["heart_rate", "SpO2_monitoring"],
          advancedBandsCompatibility: ["iOS", "Android"],
        },
      },
    },
    "cameras_&_photography": {
      name_en: "cameras & photography",
      digital_cameras: {
        name_en: "digital cameras",
        dslrs: {
          color: basicColors,
          name_en: "dslrs",
          dslrsMegapixels: ["20MP", "30MP"],
          dslrsFeatures: ["interchangeable_lenses", "manual_controls"],
        },
        mirrorless_cameras: {
          color: basicColors,
          name_en: "mirrorless cameras",
          mirrorlessCamerasMegapixels: ["20MP", "24MP"],
          mirrorlessCamerasFeatures: ["compact_design", "fast_autofocus"],
        },
        "point-and-shoot_cameras": {
          color: basicColors,
          name_en: "point-and-shoot cameras",
          pointAndShootCamerasMegapixels: ["16MP", "20MP"],
          pointAndShootCamerasFeatures: ["zoom_lens", "compact"],
        },
      },
      accessories: {
        name_en: "accessories",
        lenses: {
          color: basicColors,
          name_en: "lenses",
          lensesType: ["wide_angle", "telephoto"],
          lensesCompatibility: ["DSLR", "mirrorless"],
        },
        tripods: {
          color: basicColors,
          name_en: "tripods",
          tripodsType: ["tabletop", "full-size"],
          tripodsFeatures: ["adjustable_height", "lightweight"],
        },
        camera_bags: {
          color: basicColors,
          name_en: "camera bags",
          cameraBagsType: ["backpack", "sling"],
          cameraBagsSize: ["standard", "large"],
        },
      },
    },
    home_appliances: {
      name_en: "home appliances",
      smart_home_devices: {
        name_en: "smart home devices",

        smart_speakers: {
          color: basicColors,
          name_en: "smart speakers",
          smartSpeakersType: ["Amazon_Echo", "Google_Nest"],
          smartSpeakersFeatures: ["voice_control", "multi-room_audio"],
        },
        smart_light: {
          name_en: "smart light",
          color: basicColors,
        },
        humidifier: {
          name_en: "humidifier",
          color: basicColors,
        },
        radiator: {
          name_en: "radiator",
          color: basicColors,
        },
        remotes: {
          name_en: "remotes",
          color: basicColors,
        },
        flash_light: {
          name_en: "flash light",
          color: basicColors,
        },
        air_purifier: {
          name_en: "air purifier",
          color: basicColors,
        },
        smart_plugs: {
          color: basicColors,
          name_en: "smart plugs",
          smartPlugsType: ["Wi-Fi", "Bluetooth"],
          smartPlugsFeatures: ["energy_monitoring", "timer_functions"],
        },
        smart_thermostats: {
          color: basicColors,
          name_en: "smart thermostats",
          smartThermostatsFeatures: ["learning", "remote_control"],
          smartThermostatsCompatibility: ["HVAC_systems"],
        },
      },
      kitchen_appliances: {
        name_en: "kitchen appliances",
        mixers: {
          color: basicColors,
          name_en: "mixers",
          mixersType: ["stand", "handheld"],
          mixersFeatures: ["multiple_attachments", "speed_settings"],
        },
        coffee_makers: {
          color: basicColors,
          name_en: "coffee makers",
          coffeeMakersType: ["drip", "espresso", "pod"],
          coffeeMakersFeatures: ["programmable", "built-in_grinder"],
        },
        juice_maker: {
          name_en: "juice makers",
          color: basicColors,
          juiceMakersFeatures: ["programmable", "built-in_grinder"],
        },
        air_fryers: {
          color: basicColors,
          name_en: "air fryers",
          airFryersCapacity: ["3QT", "5QT"],
          airFryersFeatures: ["digital_controls", "presets"],
        },
      },
    },
    gaming: {
      name_en: "gaming",
      consoles: {
        name_en: "consoles",
        home_consoles: {
          color: basicColors,
          name_en: "home consoles",
          homeConsolesType: ["PlayStation", "Xbox", "Nintendo_Switch"],
          homeConsolesFeatures: ["4K_gaming", "VR_support"],
        },
        handheld_consoles: {
          color: basicColors,
          name_en: "handheld consoles",
          handheldConsolesType: ["Nintendo_Switch_Lite", "Steam_Deck"],
          handheldConsolesFeatures: ["portable", "long_battery_life"],
        },
      },
      gaming_accessories: {
        name_en: "gaming accessories",
        controllers: {
          color: basicColors,
          name_en: "controllers",
          controllersType: ["standard", "custom"],
          controllersCompatibility: ["PS", "Xbox", "PC"],
        },
        vr_headsets: {
          color: basicColors,
          name_en: "vr headsets",
          vrHeadsetsType: ["Oculus", "HTC_Vive"],
          vrHeadsetsFeatures: ["wireless", "motion_tracking"],
        },
        gaming_chairs: {
          color: basicColors,
          name_en: "gaming chairs",
          gamingChairsType: ["racing_style", "reclining"],
          gamingChairsFeatures: ["ergonomic", "adjustable"],
        },
      },
    },
    networking: {
      name_en: "networking",
      routers: {
        name_en: "routers",
        standard_routers: {
          color: basicColors,
          name_en: "standard routers",
          standardRoutersSpeed: ["AC1200", "AC1900"],
          standardRoutersFeatures: ["dual-band", "guest_network"],
        },
        mesh_systems: {
          color: basicColors,
          name_en: "mesh systems",
          meshSystemsType: ["single_pack", "multi-pack"],
          meshSystemsCoverageArea: ["up_to_5000_sq_ft"],
        },
      },
      modems: {
        name_en: "modems",
        cable_modems: {
          color: basicColors,
          name_en: "cable modems",
          cableModemsCompatibility: ["Xfinity", "Spectrum"],
          cableModemsSpeed: ["DOCSIS_3.0", "3.1"],
        },
        dsl_modems: {
          color: basicColors,
          name_en: "dsl modems",
          dslModemsCompatibility: ["AT&T", "Verizon"],
          dslModemsSpeed: ["standard", "high_speed"],
        },
      },
    },
    accessories: {
      name_en: "accessories",
      "cables_&_adapters": {
        name_en: "cables & adapters",
        usb_cables: {
          color: basicColors,
          name_en: "usb cables",
          usbCablesType: ["USB-A_to_USB-C", "Lightning"],
          lengthMeter: lengthMeter,
        },
        hdmi_cables: {
          color: basicColors,
          name_en: "hdmi cables",
          hdmiCablesVersion: ["standard", "high-speed"],
          lengthMeter: lengthMeter,
        },
        adapters: {
          color: basicColors,
          name_en: "adapters",
          adaptersType: ["USB-C_to_HDMI", "AUX_to_RCA", "auxiliary"],
          adaptersCompatibility: ["universal"],
        },
        power_banks: {
          color: basicColors,
          name_en: "adapters",
          powerBanksType: ["small p.b", "desktop p.b", "camping p.b"],
          capacity: ["3000mAh", "5000mAh", "10000mAh", "20000mAh"],
        },
      },
      storage_devices: {
        name_en: "storage devices",
        external_hard_drives: {
          color: basicColors,
          name_en: "external hard drives",
          memorySize: memorySize,
          externalHardDrivesType: ["HDD", "SSD"],
        },
        usb_flash_drives: {
          color: basicColors,
          name_en: "usb flash drives",
          memorySize: memorySize,
          usbFlashDrivesFeatures: ["encryption", "waterproof"],
        },
        memory_cards: {
          color: basicColors,
          name_en: "memory cards",
          memoryCardsType: ["SD", "MicroSD"],
          memorySize: memorySize,
        },
      },
    },
  },
  home_and_kitchen: {
    name_en: "home and kitchen",
    kitchen_appliances: {
      name_en: "kitchen appliances",
      small_appliances: {
        name_en: "small appliances",
        blenders: {
          color: basicColors,
          name_en: "blenders",
          blendersType: ["countertop", "immersion"],
          blendersFeatures: ["high-speed", "personal"],
        },
        food_processors: {
          color: basicColors,
          name_en: "food processors",
          foodProcessorsSize: ["small", "large"],
          foodProcessorsFeatures: ["multi-functional", "dishwasher safe"],
        },
        coffee_makers: {
          color: basicColors,
          name_en: "coffee makers",
          coffeeMakersType: ["drip", "espresso", "french press"],
          coffeeMakersFeatures: ["programmable", "single serve"],
        },
        toasters_and_toaster_ovens: {
          color: basicColors,
          name_en: "toasters and toaster ovens",
          toastersType: ["2-slice", "4-slice"],
          toastersFeatures: ["bagel function", "convection"],
        },
      },
      large_appliances: {
        name_en: "large appliances",
        refrigerators: {
          color: basicColors,
          name_en: "refrigerators",
          refrigeratorsType: ["french door", "side-by-side"],
          refrigeratorsFeatures: ["energy star", "smart fridge"],
        },
        ovens: {
          color: basicColors,
          name_en: "ovens",
          ovensType: ["electric", "gas", "wall"],
          ovensFeatures: ["convection", "self-cleaning"],
        },
        dishwashers: {
          color: basicColors,
          name_en: "dishwashers",
          dishwashersType: ["built-in", "portable"],
          dishwashersFeatures: ["energy efficient", "quiet operation"],
        },
        microwaves: {
          color: basicColors,
          name_en: "microwaves",
          microwavesType: ["countertop", "over-the-range"],
          microwavesFeatures: ["sensor cooking", "inverter technology"],
        },
      },
    },
    cookware_and_bakeware: {
      name_en: "cookware and bakeware",
      cookware: {
        name_en: "cookware",
        pots_and_pans: {
          color: basicColors,
          name_en: "pots and pans",
          potsAndPansType: ["non-stick", "stainless steel"],
          potsAndPansSize: ['10"', '12"', '14"'],
        },
        dutch_ovens: {
          color: basicColors,
          name_en: "dutch ovens",
          dutchOvensMaterial: ["cast iron", "enamel"],
          dutchOvensSize: ["3 qt", "5 qt"],
        },
        pressure_cookers: {
          color: basicColors,
          name_en: "pressure cookers",
          pressureCookersType: ["electric", "stovetop"],
          pressureCookersSize: ["4 qt", "6 qt"],
        },
        skillets: {
          color: basicColors,
          name_en: "skillets",
          skilletsMaterial: ["cast iron", "non-stick"],
          skilletsSize: ['8"', '10"', '12"'],
        },
      },
      bakeware: {
        name_en: "bakeware",
        baking_sheets: {
          color: basicColors,
          name_en: "baking sheets",
          bakingSheetsType: ["half-sheet", "quarter-sheet"],
          bakingSheetsMaterial: ["aluminum", "non-stick"],
        },
        cake_pans: {
          color: basicColors,
          name_en: "cake pans",
          cakePansType: ["round", "square", "bundt"],
          cakePansMaterial: ["metal", "glass"],
        },
        muffin_tins: {
          color: basicColors,
          name_en: "muffin tins",
          muffinTinsSize: ["12-cup", "24-cup"],
          muffinTinsMaterial: ["non-stick", "silicone"],
        },
        pie_dishes: {
          color: basicColors,
          name_en: "pie dishes",
          pieDishesMaterial: ["glass", "ceramic"],
          pieDishesSize: ['9"', '10"'],
        },
      },
    },
    tableware: {
      name_en: "tableware",
      dinnerware_sets: {
        name_en: "dinnerware sets",
        plates: {
          color: basicColors,
          name_en: "plates",
          platesType: ["dinner", "salad", "dessert"],
          platesMaterial: ["ceramic", "porcelain", "stoneware"],
        },
        bowls: {
          color: basicColors,
          name_en: "bowls",
          bowlsType: ["soup", "serving", "salad"],
          bowlsMaterial: ["glass", "melamine"],
        },
        utensils: {
          color: basicColors,
          name_en: "utensils",
          utensilsType: ["forks", "knives", "spoons"],
          utensilsMaterial: ["stainless steel", "plastic"],
        },
      },
      glassware: {
        name_en: "glassware",
        drinking_glasses: {
          color: basicColors,
          name_en: "drinking glasses",
          drinkingGlassesType: ["tumblers", "wine", "beer"],
          drinkingGlassesMaterial: ["glass", "plastic"],
        },
        mugs: {
          color: basicColors,
          name_en: "mugs",
          mugsType: ["ceramic", "travel", "insulated"],
          size_ml: sizeMililiter,
        },
        pitchers: {
          color: basicColors,
          name_en: "pitchers",
          pitchersMaterial: ["glass", "plastic"],
          size_ml: sizeMililiter,
        },
      },
    },
    kitchen_storage: {
      name_en: "kitchen storage",
      containers: {
        name_en: "containers",
        food_storage_containers: {
          color: basicColors,
          name_en: "food storage containers",
          foodStorageContainersType: ["glass", "plastic"],
          foodStorageContainersSize: ["small", "medium", "large"],
        },
        spice_jars: {
          color: basicColors,
          name_en: "spice jars",
          spiceJarsType: ["glass", "plastic"],
          spiceJarsFeatures: ["with labels", "airtight"],
        },
        baskets: {
          color: basicColors,
          name_en: "baskets",
          basketsMaterial: ["wicker", "plastic"],
          basketsSize: ["small", "medium", "large"],
        },
      },
      organizers: {
        name_en: "organizers",
        drawer_organizers: {
          color: basicColors,
          name_en: "drawer organizers",
          drawerOrganizersType: ["adjustable", "fixed"],
          drawerOrganizersSize: ["standard", "deep"],
        },
        shelf_risers: {
          color: basicColors,
          name_en: "shelf risers",
          shelfRisersMaterial: ["plastic", "metal"],
          shelfRisersSize: ["standard", "adjustable"],
        },
        pantry_storage_bins: {
          color: basicColors,
          name_en: "pantry storage bins",
          pantryStorageBinsType: ["clear", "opaque"],
          pantryStorageBinsSize: ["small", "large"],
        },
      },
    },
    home_decor: {
      name_en: "home decor",
      wall_decor: {
        name_en: "wall decor",
        artwork: {
          color: basicColors,
          name_en: "artwork",
          artworkType: ["framed prints", "canvases"],
          artworkStyle: ["abstract", "landscape"],
        },
        mirrors: {
          color: basicColors,
          name_en: "mirrors",
          mirrorsType: ["wall-mounted", "full-length"],
          mirrorsShape: ["round", "rectangular"],
        },
        wall_clocks: {
          color: basicColors,
          name_en: "wall clocks",
          wallClocksType: ["analog", "digital"],
          wallClocksStyle: ["modern", "vintage"],
        },
      },
      textiles: {
        name_en: "textiles",
        rugs: {
          color: basicColors,
          name_en: "rugs",
          rugsType: ["area", "runner"],
          rugsMaterial: ["wool", "synthetic"],
          rugsSize: ["small", "large"],
        },
        curtains: {
          color: basicColors,
          name_en: "curtains",
          curtainsType: ["sheer", "blackout"],
          curtainsSize: ["standard", "custom"],
        },
        throw_pillows: {
          color: basicColors,
          name_en: "throw pillows",
          throwPillowsMaterial: ["cotton", "polyester"],
          throwPillowsSize: ['18"x18"', '20"x20"'],
        },
      },
    },
    cleaning_supplies: {
      name_en: "cleaning supplies",
      general_cleaning: {
        name_en: "general cleaning",
        brooms_and_mops: {
          color: basicColors,
          name_en: "brooms and mops",
          broomsAndMopsType: ["push broom", "swiffer"],
          broomsAndMopsFeatures: ["dustpan", "refillable pads"],
        },
        vacuum_cleaners: {
          color: basicColors,
          name_en: "vacuum cleaners",
          vacuumCleanersType: ["upright", "robot", "handheld"],
          vacuumCleanersFeatures: ["bagless", "HEPA filter"],
        },
        general_cleaning: {
          color: basicColors,
          name_en: "general cleaning",
          brooms_and_mops: {
            color: basicColors,
            name_en: "brooms and mops",
            broomsAndMopsType: ["push broom", "swiffer"],
            broomsAndMopsFeatures: ["dustpan", "refillable pads"],
          },
          vacuum_cleaners: {
            color: basicColors,
            name_en: "vacuum cleaners",
            vacuumCleanersType: ["upright", "robot", "handheld"],
            vacuumCleanersFeatures: ["bagless", "HEPA filter"],
          },
          cleaning_cloths: {
            color: basicColors,
            name_en: "cleaning cloths",
            cleaningClothsType: ["microfiber", "cotton"],
            cleaningClothsSize: ["standard", "large"],
          },
        },
        specialized_cleaning: {
          color: basicColors,
          name_en: "specialized cleaning",
          window_cleaners: {
            color: basicColors,
            name_en: "window cleaners",
            windowCleanersType: ["squeegee", "spray"],
            windowCleanersFeatures: ["multi-surface", "streak-free"],
          },
          bathroom_cleaners: {
            color: basicColors,
            name_en: "bathroom cleaners",
            bathroomCleanersType: ["tile", "toilet", "multi-surface"],
            bathroomCleanersFeatures: ["eco-friendly", "antibacterial"],
          },
          all_purpose_cleaners: {
            color: basicColors,
            name_en: "all-purpose cleaners",
            allPurposeCleanersType: ["spray", "concentrate"],
            allPurposeCleanersFeatures: ["natural", "chemical-based"],
          },
        },
        bed_and_bath: {
          color: basicColors,
          name_en: "bed and bath",
          bedding: {
            color: basicColors,
            name_en: "bedding",
            sheets: {
              color: basicColors,
              name_en: "sheets",
              sheetsType: ["fitted", "flat", "pillowcases"],
              sheetsMaterial: ["cotton", "microfiber"],
              sheetsSize: ["twin", "queen", "king"],
            },
            comforters_and_duvets: {
              color: basicColors,
              name_en: "comforters and duvets",
              comfortersAndDuvetsMaterial: ["down", "synthetic"],
              comfortersAndDuvetsSize: ["twin", "full", "king"],
            },
            pillows: {
              color: basicColors,
              name_en: "pillows",
              pillowsType: ["memory foam", "down", "synthetic"],
              pillowsSize: ["standard", "queen", "king"],
            },
          },
          bathroom_accessories: {
            color: basicColors,
            name_en: "bathroom accessories",
            towels: {
              color: basicColors,
              name_en: "towels",
              towelsType: ["bath", "hand", "washcloth"],
              towelsMaterial: ["cotton", "microfiber"],
              towelsSize: ["standard", "oversized"],
            },
            shower_curtains: {
              color: basicColors,
              name_en: "shower curtains",
              showerCurtainsMaterial: ["fabric", "vinyl"],
              showerCurtainsSize: ["standard", "extra long"],
            },
            bath_mats: {
              color: basicColors,
              name_en: "bath mats",
              bathMatsMaterial: ["cotton", "memory foam"],
              bathMatsSize: ["standard", "runner"],
            },
          },
        },
        outdoor_living: {
          color: basicColors,
          name_en: "outdoor living",
          patio_furniture: {
            color: basicColors,
            name_en: "patio furniture",
            lounge_chairs: {
              color: basicColors,
              name_en: "lounge chairs",
              loungeChairsType: ["reclining", "folding"],
              loungeChairsMaterial: ["metal", "wood", "plastic"],
            },
            dining_sets: {
              color: basicColors,
              name_en: "dining sets",
              diningSetsSize: ["2-person", "4-person", "6-person"],
              diningSetsMaterial: ["wood", "metal"],
            },
            umbrellas: {
              color: basicColors,
              name_en: "umbrellas",
              umbrellasSize: ["6'", "9'", "11'"],
              umbrellasFeatures: ["tilt", "crank"],
            },
          },
          grilling_accessories: {
            color: basicColors,
            name_en: "grilling accessories",
            grill_tools: {
              color: basicColors,
              name_en: "grill tools",
              grillToolsType: ["spatula", "tongs", "brush"],
              grillToolsMaterial: ["stainless steel", "wooden"],
            },
            grill_covers: {
              color: basicColors,
              name_en: "grill covers",
              grillCoversSize: ["standard", "custom fit"],
              grillCoversMaterial: ["water-resistant", "UV-protected"],
            },
            outdoor_cookware: {
              color: basicColors,
              name_en: "outdoor cookware",
              outdoorCookwareType: ["skewers", "grill baskets"],
              outdoorCookwareMaterial: ["stainless steel", "cast iron"],
            },
          },
        },
      },
    },
  },
  clothing: {
    name_en: "clothing",
    womensClothing: {
      name_en: "women's clothing",
      womensTops: {
        name_en: "tops",
        womensTShirts: {
          color: basicColors,
          name_en: "t-shirts",
          tShirtsType: ["basic", "graphic"],
          fabricMaterial: fabricMaterial,
        },
        womensBlouses: {
          color: basicColors,
          name_en: "blouses",
          blousesStyle: ["button-up", "peplum"],
          blousesFeatures: ["long sleeve", "short sleeve"],
        },
        womensSweaters: {
          color: basicColors,
          name_en: "sweaters",
          fabricMaterial: fabricMaterial,
          sweatersStyle: ["crewneck", "v-neck"],
        },
        womensTankTops: {
          color: basicColors,
          name_en: "tank tops",
          tankTopsStyle: ["basic", "ribbed"],
          tankTopsFeatures: ["spaghetti strap", "sleeveless"],
        },
      },
      womensBottoms: {
        name_en: "bottoms",
        womensJeans: {
          color: basicColors,
          name_en: "jeans",
          jeansFit: ["skinny", "straight", "bootcut"],
          fabricMaterial: fabricMaterial,
        },
        womensSkirts: {
          color: basicColors,
          name_en: "skirts",
          skirtsStyle: ["pencil", "a-line"],
          skirtsLength: ["mini", "midi", "maxi"],
        },
        womensTrousers: {
          color: basicColors,
          name_en: "trousers",
          trousersFit: ["slim", "relaxed"],
          fabricMaterial: fabricMaterial,
        },
        womensShorts: {
          color: basicColors,
          name_en: "shorts",
          shortsStyle: ["bermuda", "high-waisted"],
          shortsFeatures: ["distressed", "pleated"],
        },
      },
      womensDresses: {
        name_en: "dresses",
        womensCasualDresses: {
          color: basicColors,
          name_en: "casual dresses",
          casualDressesStyle: ["shift", "a-line"],
          casualDressesFeatures: ["sleeveless", "long sleeve"],
        },
        womensEveningDresses: {
          color: basicColors,
          name_en: "evening dresses",
          eveningDressesType: ["maxi", "midi"],
          fabricMaterial: fabricMaterial,
        },
        womensWrapDresses: {
          color: basicColors,
          name_en: "wrap dresses",
          fabricMaterial: fabricMaterial,
          wrapDressesStyle: ["short sleeve", "long sleeve"],
        },
        womensShiftDresses: {
          color: basicColors,
          name_en: "shift dresses",
          shiftDressesFeatures: ["loose fit", "high neck"],
        },
      },
      womensOuterwear: {
        name_en: "outerwear",
        womensJackets: {
          color: basicColors,
          name_en: "jackets",
          jacketsType: ["bomber", "denim", "trench"],
          fabricMaterial: fabricMaterial,
        },
        womensCoats: {
          color: basicColors,
          name_en: "coats",
          coatsStyle: ["peacoat", "overcoat"],
          coatsFeatures: ["double-breasted", "wool blend"],
        },
        womensBlazers: {
          color: basicColors,
          name_en: "blazers",
          blazersFit: ["tailored", "loose"],
          fabricMaterial: fabricMaterial,
        },
        womensCardigans: {
          color: basicColors,
          name_en: "cardigans",
          fabricMaterial: fabricMaterial,
          cardigansStyle: ["open-front", "buttoned"],
        },
      },
    },
    mensClothing: {
      name_en: "men's clothing",
      mensTops: {
        name_en: "tops",
        mensTShirts: {
          color: basicColors,
          name_en: "t-shirts",
          tShirtsStyle: ["crewneck", "v-neck"],
          fabricMaterial: fabricMaterial,
        },
        mensPoloShirts: {
          color: basicColors,
          name_en: "polo shirts",
          poloShirtsFeatures: ["slim fit", "regular fit"],
          fabricMaterial: fabricMaterial,
        },
        mensShirts: {
          color: basicColors,
          name_en: "shirts",
          shirtsType: ["button-down", "henley"],
          shirtsFeatures: ["long sleeve", "short sleeve"],
        },
        mensSweaters: {
          color: basicColors,
          name_en: "sweaters",
          sweatersStyle: ["crewneck", "v-neck"],
          fabricMaterial: fabricMaterial,
        },
      },
      mensBottoms: {
        name_en: "bottoms",
        mensJeans: {
          color: basicColors,
          name_en: "jeans",
          jeansFit: ["slim", "straight", "relaxed"],
          fabricMaterial: fabricMaterial,
        },
        mensChinos: {
          color: basicColors,
          name_en: "chinos",
          chinosStyle: ["slim fit", "classic fit"],
          fabricMaterial: fabricMaterial,
        },
        mensShorts: {
          color: basicColors,
          name_en: "shorts",
          shortsLength: ["knee-length", "bermuda"],
          shortsStyle: ["flat-front", "pleated"],
        },
        mensSweatpants: {
          color: basicColors,
          name_en: "sweatpants",
          sweatpantsStyle: ["jogger", "fleece-lined"],
          sweatpantsFeatures: ["elastic waist", "drawstring"],
        },
      },
      mensSuitsAndBlazers: {
        name_en: "suits and blazers",
        mensSuits: {
          color: basicColors,
          name_en: "suits",
          suitsFit: ["slim", "regular"],
          fabricMaterial: fabricMaterial,
        },
        mensBlazers: {
          color: basicColors,
          name_en: "blazers",
          blazersType: ["single-breasted", "double-breasted"],
          fabricMaterial: fabricMaterial,
        },
        mensSportCoats: {
          color: basicColors,
          name_en: "sport coats",
          sportCoatsFeatures: ["textured", "plaid"],
          sportCoatsFit: ["tailored", "regular"],
        },
        mensVests: {
          color: basicColors,
          name_en: "vests",
          fabricMaterial: fabricMaterial,
          vestsStyle: ["formal", "casual"],
        },
      },
      mensOuterwear: {
        name_en: "outerwear",
        mensJackets: {
          color: basicColors,
          name_en: "jackets",
          jacketsType: ["bomber", "leather"],
          fabricMaterial: fabricMaterial,
        },
        mensCoats: {
          color: basicColors,
          name_en: "coats",
          coatsStyle: ["peacoat", "trench coat"],
          fabricMaterial: fabricMaterial,
        },
        mensParkas: {
          color: basicColors,
          name_en: "parkas",
          parkasFeatures: ["insulated", "hooded"],
          fabricMaterial: fabricMaterial,
        },
        mensRaincoats: {
          color: basicColors,
          name_en: "raincoats",
          fabricMaterial: fabricMaterial,
          raincoatsStyle: ["trench", "packable"],
        },
      },
    },
    activewearAndAthleisure: {
      name_en: "activewear and athleisure",
      activewearTops: {
        name_en: "tops",
        activewearSportsBras: {
          color: basicColors,
          name_en: "sports bras",
          sportsBrasStyle: ["high-impact", "medium-impact"],
          fabricMaterial: fabricMaterial,
        },
        activewearTankTops: {
          color: basicColors,
          name_en: "tank tops",
          tankTopsFeatures: ["moisture-wicking", "sleeveless"],
          fabricMaterial: fabricMaterial,
        },
        activewearHoodies: {
          color: basicColors,
          name_en: "hoodies",
          hoodiesStyle: ["zip-up", "pullover"],
          fabricMaterial: fabricMaterial,
        },
        activewearTShirts: {
          color: basicColors,
          name_en: "t-shirts",
          tShirtsFit: ["loose", "fitted"],
          fabricMaterial: fabricMaterial,
        },
      },
      activewearBottoms: {
        name_en: "bottoms",
        activewearLeggings: {
          color: basicColors,
          name_en: "leggings",
          leggingsFit: ["full-length", "capri"],
          fabricMaterial: fabricMaterial,
        },
        activewearJoggers: {
          color: basicColors,
          name_en: "joggers",
          joggersFit: ["slim", "relaxed"],
          fabricMaterial: fabricMaterial,
        },
        activewearAthleticShorts: {
          color: basicColors,
          name_en: "athletic shorts",
          athleticShortsStyle: ["running", "training"],
          fabricMaterial: fabricMaterial,
        },
        activewearSweatpants: {
          color: basicColors,
          name_en: "sweatpants",
          fabricMaterial: fabricMaterial,
          sweatpantsFeatures: ["elastic waist", "drawstring"],
        },
      },
      activewearOuterwear: {
        name_en: "outerwear",
        activewearWindbreakers: {
          color: basicColors,
          name_en: "windbreakers",
          fabricMaterial: fabricMaterial,
          windbreakersFeatures: ["packable", "water-resistant"],
        },
        activewearJackets: {
          color: basicColors,
          name_en: "jackets",
          jacketsType: ["running", "cycling"],
          fabricMaterial: fabricMaterial,
        },
        activewearPerformanceCoats: {
          color: basicColors,
          name_en: "performance coats",
          fabricMaterial: fabricMaterial,
          performanceCoatsFeatures: ["breathable", "thermal"],
        },
      },
    },
    childrensClothing: {
      name_en: "children's clothing",
      childrensTops: {
        name_en: "tops",
        childrensTShirts: {
          color: basicColors,
          name_en: "t-shirts",
          tShirtsStyle: ["graphic", "plain"],
          tShirtsFeatures: ["short sleeve", "long sleeve"],
        },
        childrensSweaters: {
          color: basicColors,
          name_en: "sweaters",
          fabricMaterial: fabricMaterial,
          sweatersStyle: ["pullover", "cardigan"],
        },
        childrensHoodies: {
          color: basicColors,
          name_en: "hoodies",
          hoodiesType: ["zipped", "pullover"],
          hoodiesFeatures: ["fleece-lined", "cotton blend"],
        },
        childrensBlouses: {
          color: basicColors,
          name_en: "blouses",
          blousesStyle: ["ruffled", "button-up"],
          blousesFeatures: ["short sleeve", "long sleeve"],
        },
      },
      childrensBottoms: {
        name_en: "bottoms",
        childrensPants: {
          color: basicColors,
          name_en: "pants",
          pantsFit: ["slim", "relaxed"],
          fabricMaterial: fabricMaterial,
        },
        childrensShorts: {
          color: basicColors,
          name_en: "shorts",
          shortsLength: ["knee-length", "above knee"],
          shortsFeatures: ["elastic waist", "drawstring"],
        },
        childrensSkirts: {
          color: basicColors,
          name_en: "skirts",
          skirtsStyle: ["a-line", "pleated"],
          skirtsLength: ["mini", "midi"],
        },
        childrensLeggings: {
          color: basicColors,
          name_en: "leggings",
          fabricMaterial: fabricMaterial,
          leggingsFeatures: ["elastic waist", "stretch"],
        },
      },
      childrensOuterwear: {
        name_en: "outerwear",
        childrensJackets: {
          color: basicColors,
          name_en: "jackets",
          jacketsStyle: ["puffer", "raincoat"],
          jacketsFeatures: ["hooded", "fleece-lined"],
        },
        childrensCoats: {
          color: basicColors,
          name_en: "coats",
          fabricMaterial: fabricMaterial,
          coatsStyle: ["peacoat", "parka"],
        },
        childrensVests: {
          color: basicColors,
          name_en: "vests",
          fabricMaterial: fabricMaterial,
          vestsStyle: ["puffer", "quilted"],
        },
      },
      childrensSleepwear: {
        name_en: "sleepwear",
        childrensPajamaSets: {
          color: basicColors,
          name_en: "pajama sets",
          fabricMaterial: fabricMaterial,
          pajamaSetsStyle: ["two-piece", "onesie"],
        },
        childrensRobes: {
          color: basicColors,
          name_en: "robes",
          fabricMaterial: fabricMaterial,
          robesFeatures: ["hooded", "belted"],
        },
        childrensSlippers: {
          color: basicColors,
          name_en: "slippers",
          slippersType: ["fleece-lined", "memory foam"],
          slippersFeatures: ["indoor", "outdoor"],
        },
      },
    },
    accessories: {
      name_en: "accessories",
      accessoriesBags: {
        name_en: "bags",
        accessoriesHandbags: {
          color: basicColors,
          name_en: "handbags",
          handbagsType: ["tote", "crossbody"],
          fabricMaterial: fabricMaterial,
        },
        accessoriesBackpacks: {
          color: basicColors,
          name_en: "backpacks",
          backpacksStyle: ["daypack", "hiking"],
          backpacksFeatures: ["water-resistant", "laptop sleeve"],
        },
        accessoriesWallets: {
          color: basicColors,
          name_en: "wallets",
          fabricMaterial: fabricMaterial,
          walletsFeatures: ["RFID-blocking", "zip-around"],
        },
        accessoriesDuffelBags: {
          color: basicColors,
          name_en: "duffel bags",
          fabricMaterial: fabricMaterial,
          duffelBagsSize: ["small", "large"],
        },
      },
      accessoriesHats: {
        name_en: "hats",
        accessoriesBaseballCaps: {
          color: basicColors,
          name_en: "baseball caps",
          fabricMaterial: fabricMaterial,
          baseballCapsFeatures: ["adjustable", "snapback"],
        },
        accessoriesBeanies: {
          color: basicColors,
          name_en: "beanies",
          fabricMaterial: fabricMaterial,
          beaniesStyle: ["slouchy", "cuffed"],
        },
        accessoriesFedoras: {
          color: basicColors,
          name_en: "fedoras",
          fabricMaterial: fabricMaterial,
          fedorasStyle: ["classic", "wide-brim"],
        },
        accessoriesSunHats: {
          color: basicColors,
          name_en: "sun hats",
          fabricMaterial: fabricMaterial,
          sunHatsFeatures: ["wide brim", "packable"],
        },
      },
      accessoriesScarvesAndGloves: {
        name_en: "scarves and gloves",
        accessoriesScarves: {
          color: basicColors,
          name_en: "scarves",
          fabricMaterial: fabricMaterial,
          scarvesStyle: ["infinity", "oblong"],
        },
        accessoriesGloves: {
          color: basicColors,
          name_en: "gloves",
          fabricMaterial: fabricMaterial,
          glovesStyle: ["fingerless", "full-finger"],
        },
        accessoriesMittens: {
          color: basicColors,
          name_en: "mittens",
          fabricMaterial: fabricMaterial,
          mittensFeatures: ["lined", "insulated"],
        },
        accessoriesShawls: {
          color: basicColors,
          name_en: "shawls",
          fabricMaterial: fabricMaterial,
          shawlsStyle: ["open-front", "wraparound"],
        },
      },
    },
    shoes: {
      name_en: "shoes",
      casual_shoes: {
        name_en: "casual shoes",
        sneakers: {
          color: basicColors,
          name_en: "sneakers",
          sneakersStyle: ["low-top", "high-top"],
          shoesMaterial: shoesMaterial,
        },
        loafers: {
          color: basicColors,
          name_en: "loafers",
          shoesMaterial: shoesMaterial,
          loafersStyle: ["slip-on", "tassel"],
        },
        flats: {
          color: basicColors,
          name_en: "flats",
          shoesMaterial: shoesMaterial,
          flatsFeatures: ["bow detail", "slip-on"],
        },
        sandals: {
          color: basicColors,
          name_en: "sandals",
          sandalsStyle: ["flip-flop", "slide"],
          shoesMaterial: shoesMaterial,
        },
      },
      boots: {
        name_en: "boots",
        ankle_boots: {
          color: basicColors,
          name_en: "ankle boots",
          shoesMaterial: shoesMaterial,
          ankleBootsStyle: ["chelsea", "chukka"],
        },
        knee_high_boots: {
          color: basicColors,
          name_en: "knee high boots",
          shoesMaterial: shoesMaterial,
          kneeHighBootsFeatures: ["zip-up", "buckle detail"],
        },
        rain_boots: {
          color: basicColors,
          name_en: "rain boots",
          shoesMaterial: shoesMaterial,
          rainBootsFeatures: ["waterproof", "slip-resistant"],
        },
      },
    },
  },
  accessories: {
    name_en: "accessories",
    jewelry: {
      name_en: "jewelry",
      necklaces: {
        name_en: "necklaces",
        pendant: {
          color: basicColors,
          name_en: "pendant",
          lengthInches: lengthInches,
          accessoriesMaterial: accessoriesMaterial,
        },
        choker: {
          color: basicColors,
          name_en: "choker",
          lengthInches: lengthInches,
          accessoriesMaterial: accessoriesMaterial,
        },
        statement: {
          color: basicColors,
          name_en: "statement",
          statementLength: ["adjustable"],
          accessoriesMaterial: accessoriesMaterial,
        },
        layered: {
          color: basicColors,
          name_en: "layered",
          layeredLength: ["multiple"],
          accessoriesMaterial: accessoriesMaterial,
        },
      },
      bracelets: {
        name_en: "bracelets",
        cuff: {
          color: basicColors,
          name_en: "cuff",
          clothesSizes: clothesSizes,
          accessoriesMaterial: accessoriesMaterial,
        },
        bangles: {
          color: basicColors,
          name_en: "bangles",
          banglesSize: ["adjustable"],
          accessoriesMaterial: accessoriesMaterial,
        },
        charm: {
          color: basicColors,
          name_en: "charm",
          charmSize: ["adjustable"],
          accessoriesMaterial: accessoriesMaterial,
        },
        leather: {
          color: basicColors,
          name_en: "leather",
          clothesSizes: clothesSizes,
        },
      },
    },
    bags: {
      name_en: "bags",
      handbags: {
        name_en: "handbags",
        tote: {
          color: basicColors,
          name_en: "tote",
          clothesSizes: clothesSizes,
          toteMaterial: ["canvas", "leather"],
        },
        crossbody: {
          color: basicColors,
          name_en: "crossbody",
          clothesSizes: clothesSizes,
          crossbodyMaterial: ["synthetic", "leather"],
        },
        satchel: {
          color: basicColors,
          name_en: "satchel",
          clothesSizes: clothesSizes,
          satchelMaterial: ["leather", "fabric"],
        },
        hobo: {
          color: basicColors,
          name_en: "hobo",
          clothesSizes: clothesSizes,
          hoboMaterial: ["leather", "fabric"],
        },
      },
      backpacks: {
        name_en: "backpacks",
        casual: {
          color: basicColors,
          name_en: "casual",
          clothesSizes: clothesSizes,
          casualMaterial: ["canvas", "nylon"],
        },
        travel: {
          color: basicColors,
          name_en: "travel",
          clothesSizes: clothesSizes,
          travelMaterial: ["waterproof", "synthetic"],
        },
        leather: {
          color: basicColors,
          name_en: "leather",
          clothesSizes: clothesSizes,
          travelMaterial: ["genuine leather"],
        },
        mini: {
          color: basicColors,
          name_en: "mini",
          clothesSizes: clothesSizes,
          miniMaterial: ["fabric", "leather"],
        },
      },
    },
    belts: {
      name_en: "belts",
      casual_belts: {
        name_en: "casual belts",
        fabric: {
          color: basicColors,
          name_en: "fabric",
          clothesSizes: clothesSizes,
        },
        canvas: {
          color: basicColors,
          name_en: "canvas",
          clothesSizes: clothesSizes,
        },
        woven: {
          color: basicColors,
          name_en: "woven",
          clothesSizes: clothesSizes,
        },
        braided: {
          color: basicColors,
          name_en: "braided",
          clothesSizes: clothesSizes,
        },
      },
      dress_belts: {
        name_en: "dress belts",
        leather: {
          color: basicColors,
          name_en: "leather",
          clothesSizes: clothesSizes,
        },
        suede: {
          color: basicColors,
          name_en: "suede",
          clothesSizes: clothesSizes,
        },
        dressy_fabric: {
          color: basicColors,
          name_en: "dressy fabric",
          clothesSizes: clothesSizes,
        },
        reversible: {
          name_en: "reversible",
          clothesSizes: clothesSizes,
          reversibleColor: ["black/brown", "blue/tan"],
        },
      },
    },
    hats_and_headwear: {
      name_en: "hats and headwear",
      caps: {
        name_en: "caps",
        baseball_cap: {
          color: basicColors,
          name_en: "baseball cap",
          capsSize: ["one size", "adjustable"],
          capsColor: basicColors,
        },
        dad_hat: {
          color: basicColors,
          name_en: "dad hat",
          dadHatsize: ["one size", "adjustable"],
          dadHatColor: basicColors,
        },
        snapback: {
          color: basicColors,
          name_en: "snapback",
          snapbackSize: ["one size", "adjustable"],
        },
        bucket_hat: {
          color: basicColors,
          name_en: "bucket hat",
          clothesSizes: clothesSizes,
        },
      },
      beanies: {
        name_en: "beanies",
        knit: {
          color: basicColors,
          name_en: "knit",
          knitSize: ["one size"],
        },
        cuffed: {
          color: basicColors,
          name_en: "cuffed",
          cuffedSize: ["one size"],
        },
        slouchy: {
          color: basicColors,
          name_en: "slouchy",
          slouchySize: ["one size"],
        },
        "pom-pom": {
          name_en: "pom-pom",
          pomPomsize: ["one size"],
          pomPomColor: ["multi-colored", "solid"],
        },
      },
    },
    sunglasses: {
      name_en: "sunglasses",
      fashion_sunglasses: {
        name_en: "fashion sunglasses",
        "cat-eye": {
          name_en: "cat-eye",
          clothesSizes: clothesSizes,
          catEyeLensColor: ["black", "brown", "mirror"],
        },
        round: {
          name_en: "round",
          clothesSizes: clothesSizes,
          roundLens_color: ["clear", "tinted"],
        },
        aviator: {
          name_en: "aviator",
          clothesSizes: clothesSizes,
          aviatorLensColor: ["green", "blue"],
        },
        oversized: {
          name_en: "oversized",
          oversizedSize: ["one size"],
          oversizedLensColor: ["gradient", "solid"],
        },
      },
      sports_sunglasses: {
        name_en: "sports sunglasses",
        polarized: {
          name_en: "polarized",
          clothesSizes: clothesSizes,
          sportsSunglassesLensColor: ["dark gray", "blue"],
        },
        wraparound: {
          name_en: "wraparound",
          wraparoundSize: ["one size"],
          wraparoundLensColor: ["amber", "smoke"],
        },
        mirrored: {
          name_en: "mirrored",
          clothesSizes: clothesSizes,
          mirroredLensColor: ["silver", "gold"],
        },
        "clip-on": {
          name_en: "clip-on",
          clipOnSize: ["fits most"],
          clipOnLensColor: ["various"],
        },
      },
    },
    watches: {
      name_en: "watches",
      analog_watches: {
        name_en: "analog watches",
        dress: {
          color: basicColors,
          name_en: "dress",
          clothesSizes: clothesSizes,
          dressMaterial: ["leather", "metal"],
        },
        chronograph: {
          color: basicColors,
          name_en: "chronograph",
          clothesSizes: clothesSizes,
          chronographMaterial: ["stainless steel"],
        },
        dive: {
          color: basicColors,
          name_en: "dive",
          clothesSizes: clothesSizes,
          diveMaterial: ["plastic", "metal"],
        },
        classic: {
          color: basicColors,
          name_en: "classic",
          clothesSizes: clothesSizes,
          classicaterial: ["leather", "fabric"],
        },
      },
      smartwatches: {
        name_en: "smartwatches",
        fitness: {
          color: basicColors,
          name_en: "fitness",
          clothesSizes: clothesSizes,
          fitnessMaterial: ["silicone", "metal"],
        },
        hybrid: {
          color: basicColors,
          name_en: "hybrid",
          clothesSizes: clothesSizes,
          hybridMaterial: ["leather", "nylon"],
        },
        luxury: {
          color: basicColors,
          name_en: "luxury",
          clothesSizes: clothesSizes,
          luxuryMaterial: ["gold", "silver"],
        },
        sports: {
          color: basicColors,
          name_en: "sports",
          clothesSizes: clothesSizes,
          sportsMaterial: ["plastic", "rubber"],
        },
      },
    },
    footwear_accessories: {
      name_en: "footwear accessories",
      shoe_laces: {
        name_en: "shoe laces",
        flat: {
          color: basicColors,
          name_en: "flat",
          flatLength: ['27"', '36"', '45"'],
        },
        round: {
          color: basicColors,
          name_en: "round",
          roundLength: ['27"', '36"'],
        },
        colored: {
          color: basicColors,
          name_en: "colored",
          coloredLength: ['36"', '45"'],
        },
        reflective: {
          color: basicColors,
          name_en: "reflective",
          reflectiveLength: ['36"', '45"'],
        },
      },
      insoles: {
        name_en: "insoles",
        comfort: {
          color: basicColors,
          name_en: "comfort",
          clothesSizes: clothesSizes,
          comforType: ["gel", "foam"],
        },
        orthotic: {
          color: basicColors,
          name_en: "orthotic",
          clothesSizes: clothesSizes,
          orthoticType: ["custom", "arch support"],
        },
        gel: {
          color: basicColors,
          name_en: "gel",
          clothesSizes: clothesSizes,
          gelType: ["full-length", "3/4-length"],
        },
        sport: {
          color: basicColors,
          name_en: "sport",
          clothesSizes: clothesSizes,
          sportType: ["running", "hiking"],
        },
      },
      tech_accessories: {
        name_en: "tech accessories",
        phone_cases: {
          color: basicColors,
          name_en: "phone cases",
          slim: {
            color: basicColors,
            name_en: "slim",
            slimSize: ["iPhone", "Samsung", "Universal"],
            slimMaterial: ["plastic", "silicone"],
          },
          wallet: {
            color: basicColors,
            name_en: "wallet",
            walletSize: ["iPhone", "Samsung"],
            walletMaterial: ["leather", "fabric"],
          },
          rugged: {
            color: basicColors,
            name_en: "rugged",
            ruggedSize: ["iPhone", "Samsung"],
            ruggedMaterial: ["polycarbonate", "TPU"],
          },
          clear: {
            color: basicColors,
            name_en: "clear",
            clearSize: ["iPhone", "Samsung"],
            clearMaterial: ["acrylic", "TPU"],
          },
        },
        laptop_bags: {
          color: basicColors,
          name_en: "laptop bags",
          sleeve: {
            color: basicColors,
            name_en: "sleeve",
            sleeveSize: ['13"', '15"', '17"'],
            sleeveMaterial: ["neoprene", "fabric"],
          },
          backpack: {
            color: basicColors,
            name_en: "backpack",
            clothesSizes: clothesSizes,
            backpackMaterial: ["canvas", "nylon"],
          },
          messenger: {
            color: basicColors,
            name_en: "messenger",
            clothesSizes: clothesSizes,
            messengerMaterial: ["leather", "synthetic"],
          },
          briefcase: {
            color: basicColors,
            name_en: "briefcase",
            clothesSizes: clothesSizes,
            briefcaseMaterial: ["leather", "fabric"],
          },
        },
      },
      hair_accessories: {
        name_en: "hair accessories",
        clips: {
          color: basicColors,
          name_en: "clips",
          alligator: {
            color: basicColors,
            name_en: "alligator",
            clothesSizes: clothesSizes,
          },
          barrettes: {
            name_en: "barrettes",
            clothesSizes: clothesSizes,
            barrettesColor: ["gold", "silver"],
          },
          snap: {
            name_en: "",
            clothesSizes: clothesSizes,
            snapColor: ["colorful", "pastel"],
          },
          claw: {
            name_en: "claw",
            clothesSizes: clothesSizes,
            color: basicColors,
          },
        },
        ties: {
          name_en: "ties",
          elastic: {
            name_en: "elastic",
            clothesSizes: clothesSizes,
            tiesColor: ["solid", "patterned"],
          },
          scrunchies: {
            name_en: "scrunchies",
            scrunchiesSize: ["one size"],
            scrunchiesColor: ["various patterns"],
          },
          spiral: {
            name_en: "spiral",
            spiralSize: ["one size"],
            spiralColor: ["clear", "black"],
          },
          ribbon: {
            name_en: "ribbon",
            ribbonSize: ["one size"],
            ribbonColor: ["solid", "floral"],
          },
        },
      },
      seasonal_accessories: {
        name_en: "seasonal accessories",
        gloves: {
          name_en: "gloves",
          leather: {
            color: basicColors,
            name_en: "leather",
            clothesSizes: clothesSizes,
          },
          knit: {
            color: basicColors,
            name_en: "knit",
            clothesSizes: clothesSizes,
          },
          touchscreen: {
            color: basicColors,
            name_en: "touchscreen",
            clothesSizes: clothesSizes,
          },
          fleece: {
            color: basicColors,
            name_en: "fleece",
            clothesSizes: clothesSizes,
          },
        },
        umbrellas: {
          name_en: "umbrellas",
          compact: {
            name_en: "compact",
            compactSize: ["one size"],
            compactColor: ["black", "patterned"],
          },
          golf: {
            color: basicColors,
            name_en: "golf",
            golfSize: ["one size"],
            golfColor: ["solid", "striped"],
          },
          clear: {
            color: basicColors,
            name_en: "clear",
            clearSize: ["one size"],
            clearColor: ["transparent"],
          },
          windproof: {
            color: basicColors,
            name_en: "windproof",
            windproofSize: ["one size"],
            windproofColor: ["black", "navy"],
          },
        },
        beach_towels: {
          color: basicColors,
          name_en: "beach towels",
          "quick-dry": {
            color: basicColors,
            name_en: "quick-dry",
            quickDrySize: ["standard", "oversized"],
            quickDryPattern: ["solid", "printed"],
          },
          oversized: {
            color: basicColors,
            name_en: "oversized",
            oversizedSize: ["large"],
            oversizedPattern: ["floral", "geometric"],
          },
          printed: {
            color: basicColors,
            name_en: "printed",
            printedSize: ["standard"],
            printedPattern: ["cartoon", "nature"],
          },
          microfiber: {
            color: basicColors,
            name_en: "microfiber",
            microfiberSize: ["standard", "large"],
            microfiberPattern: ["solid", "patterned"],
          },
        },
      },
    },
  },
  health_and_beauty: {
    name_en: "health and beauty",
    skincare: {
      name_en: "skincare",
      cleansers: {
        name_en: "cleansers",
        foaming: {
          color: basicColors,
          name_en: "foaming",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
        gel: {
          color: basicColors,
          name_en: "gel",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
        cream: {
          color: basicColors,
          name_en: "cream",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
        micellar_water: {
          color: basicColors,
          name_en: "micellar water",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
      },
      moisturizers: {
        name_en: "moisturizers",
        gel: {
          color: basicColors,
          name_en: "gel",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
        cream: {
          color: basicColors,
          name_en: "cream",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
        lotion: {
          color: basicColors,
          name_en: "lotion",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
        night_cream: {
          color: basicColors,
          name_en: "night cream",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
      },
      serums: {
        name_en: "serums",
        vitamin_c: {
          color: basicColors,
          name_en: "vitamin c",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
        hyaluronic_acid: {
          color: basicColors,
          name_en: "hyaluronic acid",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
        niacinmide: {
          color: basicColors,
          name_en: "niacinmide ",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
        glyco_acide: {
          color: basicColors,
          name_en: "glyco acide",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
        vitamine_E: {
          color: basicColors,
          name_en: "vitamine E",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
        retinol: {
          color: basicColors,
          name_en: "retinol",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
        anti_aging: {
          color: basicColors,
          name_en: "anti aging",
          size_ml: sizeMililiter,
          skin_type: skinType,
        },
      },
    },
    makeup: {
      name_en: "makeup",
      lips: {
        name_en: "lips",
        lipstick: {
          color: basicColors,
          name_en: "lipstick",
        },
        lip_gloss: {
          color: basicColors,
          name_en: "lip Gloss ",
        },
        lip_liner: {
          color: basicColors,
          name_en: "lip liner",
        },
      },
      face: {
        name_en: "face",
        foundation: {
          color: basicColors,
          name_en: "foundation",
          size_ml: sizeMililiter,
          foundationFinish: ["matte", "dewy"],
          foundationShade: ["light", "medium", "dark"],
        },
        concealer: {
          color: basicColors,
          name_en: "concealer",
          size_ml: sizeMililiter,
          concealerCoverage: ["full", "light"],
          concealerShade: ["light", "medium", "dark"],
        },
        blush: {
          color: basicColors,
          name_en: "blush",
          size_ml: sizeMililiter,
          blushType: ["cream", "powder"],
          blushShade: ["pink", "peach", "plum"],
        },
        highlighter: {
          color: basicColors,
          name_en: "highlighter",
          size_ml: sizeMililiter,
          highlighterType: ["liquid", "powder"],
          highlighterShade: ["gold", "silver", "rose"],
        },
      },
      eyes: {
        name_en: "eyes",
        eyeshadow: {
          color: basicColors,
          name_en: "eyeshadow",
          size_ml: sizeMililiter,
          eyeshadowType: ["palette", "single"],
          eyeshadowShade: ["neutral", "bold"],
        },
        eyeliner: {
          color: basicColors,
          name_en: "eyeliner",
          size_ml: sizeMililiter,
          eyelinerType: ["liquid", "pencil"],
          shade: basicColors,
        },
        mascara: {
          color: basicColors,
          name_en: "mascara",
          size_ml: sizeMililiter,
          mascaraType: ["lengthening", "volumizing"],
          shade: basicColors,
        },
        brow_products: {
          color: basicColors,
          name_en: "brow products",
          size_ml: sizeMililiter,
          type: ["pencil", "gel", "powder"],
          shade: basicColors,
        },
      },
    },
    hair_care: {
      name_en: "hair care",
      shampoos: {
        name_en: "shampoos",
        moisturizing: {
          color: basicColors,
          name_en: "moisturizing",
          size_ml: sizeMililiter,
          hair_type: hairType,
        },
        hair_mask: {
          color: basicColors,
          name_en: "moisturizing",
          size_ml: sizeMililiter,
          hair_type: hairType,
        },
        clarifying: {
          color: basicColors,
          name_en: "clarifying",
          size_ml: sizeMililiter,
          hair_type: hairType,
        },
        volumizing: {
          color: basicColors,
          name_en: "volumizing",
          size_ml: sizeMililiter,
          hair_type: hairType,
        },
        color_safe: {
          color: basicColors,
          name_en: "color safe",
          size_ml: sizeMililiter,
          hair_type: hairType,
        },
      },
      conditioners: {
        name_en: "conditioners",
        hydrating: {
          color: basicColors,
          name_en: "hydrating",
          size_ml: sizeMililiter,
          hair_type: hairType,
        },
        lightweight: {
          color: basicColors,
          name_en: "lightweight",
          size_ml: sizeMililiter,
          hair_type: hairType,
        },
        deep_conditioner: {
          color: basicColors,
          name_en: "deep conditioner",
          size_ml: sizeMililiter,
          hair_type: hairType,
        },
        leave_in: {
          color: basicColors,
          name_en: "leave in",
          size_ml: sizeMililiter,
          hair_type: hairType,
        },
      },
      styling_products: {
        name_en: "styling products",
        hair_spray: {
          color: basicColors,
          name_en: "hair spray",
          size_ml: sizeMililiter,
          hairSprayHold: ["light", "strong"],
        },
        straightener: {
          color: basicColors,
          name_en: "straightener",
          size_ml: sizeMililiter,
          hairSprayHold: ["light", "strong"],
        },
        curling_iron: {
          color: basicColors,
          name_en: "curling_iron",
          size_ml: sizeMililiter,
          hairSprayHold: ["light", "strong"],
        },
        hair_dryer: {
          color: basicColors,
          name_en: "hair_dryer",
          size_ml: sizeMililiter,
          hairSprayHold: ["light", "strong"],
        },
        mousse: {
          color: basicColors,
          name_en: "mousse",
          size_ml: sizeMililiter,
          mousseHold: ["flexible", "strong"],
        },
        gel: {
          color: basicColors,
          name_en: "gel",
          size_ml: sizeMililiter,
          gelHold: ["flexible", "strong"],
        },
        cream: {
          color: basicColors,
          name_en: "cream",
          size_ml: sizeMililiter,
          creamType: ["defining", "moisturizing"],
        },
      },
    },
    body_care: {
      name_en: "body care",
      body_wash: {
        name_en: "body wash",
        gel: {
          color: basicColors,
          name_en: "gel",
          size_ml: sizeMililiter,
          scent: scent,
        },
        cream: {
          color: basicColors,
          name_en: "cream",
          size_ml: sizeMililiter,
          scent: scent,
        },
        exfoliating: {
          color: basicColors,
          name_en: "exfoliating",
          size_ml: sizeMililiter,
          scent: scent,
        },
      },
      body_lotion: {
        name_en: "body lotion",
        lightweight: {
          color: basicColors,
          name_en: "lightweight",
          size_ml: sizeMililiter,
          scent: scent,
        },
        thick_cream: {
          color: basicColors,
          name_en: "thick cream",
          size_ml: sizeMililiter,
          scent: scent,
        },
        firming: {
          color: basicColors,
          name_en: "firming",
          size_ml: sizeMililiter,
          scent: scent,
        },
      },
      sunscreen: {
        name_en: "sunscreen",
        lotion: {
          color: basicColors,
          name_en: "lotion",
          size_ml: sizeMililiter,
          spf: spf,
        },
        spray: {
          color: basicColors,
          name_en: "spray",
          size_ml: sizeMililiter,
          spf: spf,
        },
        stick: {
          color: basicColors,
          name_en: "stick",
          size_ml: sizeMililiter,
          spf: spf,
        },
      },
    },
    men_care: {
      name_en: "men's care",
      hair_trimmer: {
        name_en: "hair trimmer",
      },
      razors: {
        name_en: "razors",
      },
      shaving_cream: {
        name_en: "shaving cream",
      },
    },
    hair_styling_cream: {
      name_en: "hair_styling_cream",
    },
    fragrances: {
      name_en: "fragrances",
      perfumes: {
        name_en: "perfumes",
        eau_de_parfum: {
          color: basicColors,
          name_en: "eau de parfum",
          size_ml: sizeMililiter,
          fragrancesNotes: fragrancesNotes,
        },
        eau_de_toilette: {
          color: basicColors,
          name_en: "eau de toilette",
          size_ml: sizeMililiter,
          fragrancesNotes: fragrancesNotes,
        },
      },
      colognes: {
        name_en: "colognes",
        eau_de_cologne: {
          color: basicColors,
          name_en: "eau de cologne",
          size_ml: sizeMililiter,
          fragrancesNotes: fragrancesNotes,
        },
        aftershave: {
          color: basicColors,
          name_en: "aftershave",
          size_ml: sizeMililiter,
          fragrancesNotes: fragrancesNotes,
        },
      },
    },
  },

  sports_and_outdoors: {
    name_en: "sports and outdoors",
    sports_equipment: {
      name_en: "sports equipment",
      fitness_equipment: {
        name_en: "fitness equipment",
        dumbbells: {
          color: basicColors,
          name_en: "dumbbells",
          weight: ["5 lb", "10 lb", "15 lb", "20 lb"],
          material: ["vinyl", "rubber"],
        },
        resistance_bands: {
          color: basicColors,
          name_en: "resistance bands",
          level: ["light", "medium", "heavy"],
          length: ['10"', '12"', '14"'],
        },
        yoga_mats: {
          color: basicColors,
          name_en: "yoga mats",
          thickness: ['1/4"', '1/2"'],
          material: ["PVC", "TPE"],
        },
        stability_balls: {
          color: basicColors,
          name_en: "stability balls",
          size: ["45 cm", "55 cm", "65 cm", "75 cm"],
          material: ["PVC", "anti-burst"],
        },
      },
      team_sports: {
        name_en: "team sports",
        basketballs: {
          color: basicColors,
          name_en: "basketballs",
          size: ["official", "intermediate", "youth"],
          material: ["rubber", "composite"],
        },
        soccer_balls: {
          color: basicColors,
          name_en: "soccer balls",
          size: [5, 4, 3],
          material: ["synthetic", "leather"],
        },
        volleyballs: {
          color: basicColors,
          name_en: "volleyballs",
          size: ["official", "beach", "indoor"],
          material: ["synthetic", "rubber"],
        },
        baseballs: {
          color: basicColors,
          name_en: "baseballs",
          size: ["official", "practice"],
          material: ["leather", "synthetic"],
        },
      },
    },
    spa: {
      name_en: "spa",
      massaging_tools: {
        name_en: "massaging tools",
        pilow: {
          color: basicColors,
        },
        electric_massager: {
          color: basicColors,
        },
      },
    },
    outdoor_gear: {
      name_en: "outdoor gear",
      camping_equipment: {
        name_en: "camping equipment",
        tents: {
          color: basicColors,
          name_en: "tents",
          size: ["2-person", "4-person", "6-person"],
          type: ["backpacking", "family"],
        },
        sleeping_bags: {
          color: basicColors,
          name_en: "sleeping bags",
          temperature_rating: ["0°F", "20°F", "40°F"],
          size: ["regular", "long"],
        },
        camping_stoves: {
          color: basicColors,
          name_en: "camping stoves",
          type: ["portable", "tabletop"],
          fuel_type: ["propane", "butane"],
        },
        lanterns: {
          color: basicColors,
          name_en: "lanterns",
          type: ["LED", "gas"],
          brightness: ["100 lumens", "200 lumens"],
        },
      },
      hiking_gear: {
        name_en: "hiking gear",
        backpacks: {
          color: basicColors,
          name_en: "backpacks",
          size: ["daypack", "50L", "70L"],
          type: ["hydration", "multi-day"],
        },
        hiking_boots: {
          color: basicColors,
          name_en: "hiking boots",
          size: ["US 6-15"],
          type: ["waterproof", "lightweight"],
        },
        trekking_poles: {
          color: basicColors,
          name_en: "trekking poles",
          material: ["aluminum", "carbon fiber"],
          length: ["adjustable"],
        },
        gps_devices: {
          color: basicColors,
          name_en: "gps devices",
          type: ["handheld", "watch"],
          features: ["topographic", "navigation"],
        },
      },
    },
    water_sports: {
      name_en: "water sports",
      kayaking_and_canoeing: {
        name_en: "kayaking and canoeing",
        kayaks: {
          color: basicColors,
          name_en: "kayaks",
          type: ["recreational", "touring", "inflatable"],
          size: ["1-person", "2-person"],
        },
        life_jackets: {
          color: basicColors,
          name_en: "life jackets",
          size: ["adult", "youth", "child"],
          type: ["coast guard approved"],
        },
        paddles: {
          color: basicColors,
          name_en: "paddles",
          length: ["220 cm", "230 cm"],
          material: ["aluminum", "carbon fiber"],
        },
        dry_bags: {
          color: basicColors,
          name_en: "dry bags",
          size: ["5L", "10L", "20L"],
          material: ["waterproof", "durable"],
        },
      },
      swimming: {
        name_en: "swimming",
        swim_goggles: {
          color: basicColors,
          name_en: "swim goggles",
          type: ["racing", "recreational"],
          lens_type: ["clear", "tinted"],
        },
        swim_fins: {
          color: basicColors,
          name_en: "swim fins",
          size: ["S", "M", "L"],
          type: ["short", "long"],
        },
        swim_caps: {
          color: basicColors,
          name_en: "swim caps",
          size: ["adult", "child"],
          material: ["silicone", "latex"],
        },
        kickboards: {
          color: basicColors,
          name_en: "kickboards",
          size: ["standard", "mini"],
          type: ["foam", "inflatable"],
        },
      },
    },
    cycling: {
      name_en: "cycling",
      bicycles: {
        name_en: "bicycles",
        road_bikes: {
          color: basicColors,
          name_en: "road bikes",
          size: ["small", "medium", "large"],
          frame_material: ["aluminum", "carbon"],
        },
        mountain_bikes: {
          color: basicColors,
          name_en: "mountain bikes",
          size: ["small", "medium", "large"],
          suspension_type: ["hardtail", "full-suspension"],
        },
        hybrid_bikes: {
          color: basicColors,
          name_en: "hybrid bikes",
          size: ["small", "medium", "large"],
          frame_material: ["steel", "aluminum"],
        },
        folding_bikes: {
          color: basicColors,
          name_en: "folding bikes",
          size: ["one size"],
          weight_limit: ["250 lb", "300 lb"],
        },
      },
      cycling_accessories: {
        name_en: "cycling accessories",
        helmets: {
          color: basicColors,
          name_en: "helmets",
          size: ["S", "M", "L"],
          type: ["road", "mountain", "commuter"],
        },
        bike_locks: {
          color: basicColors,
          name_en: "bike locks",
          type: ["cable", "u-lock", "chain"],
          size: ["standard", "long"],
        },
        cycling_gloves: {
          color: basicColors,
          name_en: "cycling gloves",
          size: ["S", "M", "L"],
          type: ["full-finger", "half-finger"],
        },
        water_bottles: {
          color: basicColors,
          name_en: "water bottles",
          size: ["20 oz", "24 oz", "32 oz"],
          material: ["plastic", "stainless steel"],
        },
      },
    },
    fitness_apparel: {
      name_en: "fitness apparel",
      activewear: {
        name_en: "activewear",
        tops: {
          color: basicColors,
          name_en: "tops",
          type: ["tank", "t-shirt", "long sleeve"],
          clothesSizes: clothesSizes,
        },
        bottoms: {
          color: basicColors,
          name_en: "bottoms",
          type: ["leggings", "shorts", "joggers"],
          clothesSizes: clothesSizes,
        },
        sports_bras: {
          color: basicColors,
          name_en: "sports bras",
          size: ["32A-38D"],
          support_level: ["light", "medium", "high"],
        },
        jackets: {
          color: basicColors,
          name_en: "jackets",
          type: ["windbreaker", "hoodie"],
          clothesSizes: clothesSizes,
        },
      },
      footwear: {
        name_en: "footwear",
        running_shoes: {
          color: basicColors,
          name_en: "running shoes",
          size: ["men: 7-14", "women: 5-12"],
          type: ["cushioned", "stability"],
        },
        cross_training_shoes: {
          color: basicColors,
          name_en: "cross training shoes",
          size: ["men: 7-14", "women: 5-12"],
          type: ["versatile", "lightweight"],
        },
        hiking_boots: {
          color: basicColors,
          name_en: "hiking boots",
          size: ["men: 7-14", "women: 5-12"],
          type: ["waterproof", "breathable"],
        },
        cleats: {
          color: basicColors,
          name_en: "cleats",
          size: ["men: 7-14", "women: 5-12"],
          type: ["soccer", "baseball", "football"],
        },
      },
    },
    outdoor_clothing: {
      name_en: "outdoor clothing",
      layering: {
        name_en: "layering",
        base_layers: {
          color: basicColors,
          name_en: "base layers",
          type: ["top", "bottom"],
          size: ["XS", "S", "M", "L", "XL"],
          material: ["merino wool", "synthetic"],
        },
        mid_layers: {
          color: basicColors,
          name_en: "mid layers",
          type: ["fleece", "insulated jacket"],
          clothesSizes: clothesSizes,
        },
        outer_layers: {
          color: basicColors,
          name_en: "outer layers",
          type: ["rain jacket", "shell"],
          clothesSizes: clothesSizes,
        },
      },
      accessories: {
        name_en: "accessories",
        hats: {
          color: basicColors,
          name_en: "hats",
          type: ["sun hat", "beanie"],
          size: ["one size"],
          material: ["cotton", "wool"],
        },
        gloves: {
          color: basicColors,
          name_en: "gloves",
          type: ["insulated", "lightweight"],
          clothesSizes: clothesSizes,
        },
        socks: {
          color: basicColors,
          name_en: "socks",
          type: ["hiking", "running"],
          clothesSizes: clothesSizes,
          material: ["wool", "synthetic"],
        },
        scarves: {
          color: basicColors,
          name_en: "scarves",
          type: ["lightweight", "thick"],
          size: ["one size"],
          material: ["wool", "synthetic"],
        },
      },
    },
  },
  toys_and_games: {
    name_en: "toys and games",
    action_figures: {
      name_en: "action figures",
      superheroes: {
        name_en: "superheroes",
        marvel: {
          color: basicColors,
          name_en: "marvel",
          size: ['6"', '12"'],
          material: ["plastic", "vinyl"],
        },
        dc: {
          color: basicColors,
          name_en: "dc",
          size: ['6"', '12"'],
          material: ["plastic", "vinyl"],
        },
        customizable: {
          color: basicColors,
          name_en: "customizable",
          size: ['6"'],
          features: ["interchangeable parts", "accessories"],
        },
      },
      cartoon_characters: {
        name_en: "cartoon characters",
        animated_series: {
          color: basicColors,
          name_en: "animated series",
          size: ['5"', '7"'],
          material: ["plastic", "vinyl"],
        },
        classic_cartoons: {
          color: basicColors,
          name_en: "classic cartoons",
          size: ['5"', '7"'],
          material: ["plastic", "vinyl"],
        },
        movie_tie_ins: {
          color: basicColors,
          name_en: "movie tie-ins",
          size: ['6"', '12"'],
          material: ["plastic", "vinyl"],
        },
      },
    },
    car_toys: {
      name_en: "car toys",
      remote_controlled: {
        name_en: "remote controlled",
        electric: {
          color: basicColors,
          name_en: "electric",
          size: ["small", "medium", "large"],
          features: ["rechargeable batteries", "multi-speed"],
          material: ["plastic", "metal"],
        },
        gas_powered: {
          color: basicColors,
          name_en: "gas powered",
          size: ["medium", "large"],
          features: ["real engine sounds", "high speed"],
          material: ["plastic", "metal"],
        },
        customizable: {
          color: basicColors,
          name_en: "customizable",
          size: ["medium", "large"],
          features: ["interchangeable parts", "custom paint"],
          material: ["plastic", "metal"],
        },
      },
      diecast_models: {
        name_en: "diecast models",
        vintage_cars: {
          color: basicColors,
          name_en: "vintage cars",
          size: ["1:24", "1:18"],
          material: ["metal", "plastic"],
          features: ["detailed interior", "opening doors"],
        },
        sports_cars: {
          color: basicColors,
          name_en: "sports cars",
          size: ["1:24", "1:18"],
          material: ["metal", "plastic"],
          features: ["realistic design", "rubber tires"],
        },
        trucks_and_buses: {
          color: basicColors,
          name_en: "trucks and buses",
          size: ["1:24", "1:18"],
          material: ["metal", "plastic"],
          features: ["detailed chassis", "moving parts"],
        },
      },
      construction_vehicles: {
        name_en: "construction vehicles",
        bulldozers: {
          color: basicColors,
          name_en: "bulldozers",
          size: ["small", "medium", "large"],
          material: ["plastic", "metal"],
          features: ["moving blades", "rubber tracks"],
        },
        cranes: {
          color: basicColors,
          name_en: "cranes",
          size: ["small", "medium", "large"],
          material: ["plastic", "metal"],
          features: ["extendable arms", "rotating base"],
        },
        dump_trucks: {
          color: basicColors,
          name_en: "dump trucks",
          size: ["small", "medium", "large"],
          material: ["plastic", "metal"],
          features: ["tilting bed", "realistic design"],
        },
      },
    },
    building_sets: {
      name_en: "building sets",
      lego: {
        name_en: "lego",
        classic: {
          color: basicColors,
          name_en: "classic",
          piece_count: [100, 300, 1000],
          theme: ["city", "technic", "creator"],
        },
        themed_sets: {
          color: basicColors,
          name_en: "themed sets",
          piece_count: [200, 500],
          theme: ["star wars", "harry potter", "friends"],
        },
        duplo: {
          color: basicColors,
          name_en: "duplo",
          piece_count: [20, 40],
          theme: ["animals", "vehicles"],
        },
      },
      other_building_brands: {
        name_en: "other building brands",
        magnetic_tiles: {
          color: basicColors,
          name_en: "magnetic tiles",
          set_size: [30, 60, 100],
          material: ["plastic"],
        },
        wooden_blocks: {
          color: basicColors,
          name_en: "wooden blocks",
          set_size: [50, 100],
          material: ["wood"],
        },
      },
    },
    board_games: {
      name_en: "board games",
      family_games: {
        name_en: "family games",
        classic: {
          color: basicColors,
          name_en: "classic",
          players: ["2-4"],
          ages: ["8+"],
          game_type: ["strategy", "trivia"],
        },
        modern: {
          color: basicColors,
          name_en: "modern",
          players: ["2-6"],
          ages: ["10+"],
          game_type: ["cooperative", "party"],
        },
        educational: {
          color: basicColors,
          name_en: "educational",
          players: ["2-4"],
          ages: ["6+"],
          game_type: ["math", "science"],
        },
      },
      strategy_games: {
        name_en: "strategy games",
        resource_management: {
          color: basicColors,
          name_en: "resource management",
          players: ["2-5"],
          ages: ["12+"],
          game_type: ["building", "economy"],
        },
        territory_control: {
          color: basicColors,
          name_en: "territory control",
          players: ["2-6"],
          ages: ["14+"],
          game_type: ["combat", "strategy"],
        },
      },
    },
    puzzles: {
      name_en: "puzzles",
      jigsaw_puzzles: {
        name_en: "jigsaw puzzles",
        traditional: {
          color: basicColors,
          name_en: "traditional",
          piece_count: [100, 500, 1000],
          image: ["landscape", "animals", "art"],
        },
        "3d_puzzles": {
          color: basicColors,
          name_en: "3d puzzles",
          piece_count: [50, 100],
          theme: ["landmarks", "buildings"],
        },
        floor_puzzles: {
          color: basicColors,
          name_en: "floor puzzles",
          piece_count: [24, 48],
          age: ["3-5 years"],
          image: ["cartoon characters"],
        },
      },
      brain_teasers: {
        name_en: "brain teasers",
        mechanical: {
          color: basicColors,
          name_en: "mechanical",
          type: ["cube", "lock"],
          difficulty: ["easy", "medium", "hard"],
        },
        logic_puzzles: {
          color: basicColors,
          name_en: "logic puzzles",
          type: ["board", "card"],
          age: ["8+"],
        },
      },
    },
    outdoor_toys: {
      name_en: "outdoor toys",
      active_play: {
        name_en: "active play",
        sports_equipment: {
          color: basicColors,
          name_en: "sports equipment",
          type: ["soccer ball", "basketball", "frisbee"],
          size: ["official", "youth"],
        },
        playground_equipment: {
          color: basicColors,
          name_en: "playground equipment",
          type: ["swing set", "slide"],
          size: ["standard", "mini"],
        },
        water_toys: {
          color: basicColors,
          name_en: "water toys",
          type: ["water guns", "splash mats"],
          age: ["3+"],
        },
      },
      ride_on_toys: {
        name_en: "ride on toys",
        tricycles: {
          color: basicColors,
          name_en: "tricycles",
          size: ["toddler", "kids"],
          age: ["2-5 years"],
        },
        scooters: {
          color: basicColors,
          name_en: "scooters",
          size: ["mini", "standard"],
          age: ["3-12 years"],
        },
        balance_bikes: {
          color: basicColors,
          name_en: "balance bikes",
          size: ['12"', '14"'],
          age: ["2-5 years"],
        },
      },
    },
    educational_toys: {
      name_en: "educational toys",
      stem_toys: {
        name_en: "stem toys",
        science_kits: {
          color: basicColors,
          name_en: "science kits",
          type: ["chemistry", "robotics"],
          age: ["8+"],
        },
        building_kits: {
          color: basicColors,
          name_en: "building kits",
          type: ["engineering", "coding"],
          age: ["5+"],
        },
        math_games: {
          color: basicColors,
          name_en: "math games",
          type: ["board", "card"],
          age: ["6+"],
        },
      },
      arts_and_crafts: {
        name_en: "arts and crafts",
        craft_kits: {
          color: basicColors,
          name_en: "craft kits",
          type: ["painting", "sewing"],
          age: ["5+"],
        },
        coloring_supplies: {
          color: basicColors,
          name_en: "coloring supplies",
          type: ["markers", "crayons"],
          age: ["3+"],
        },
        diy_projects: {
          color: basicColors,
          name_en: "diy projects",
          type: ["modeling clay", "beading"],
          age: ["5+"],
        },
      },
    },
    dolls_and_plush_toys: {
      name_en: "dolls and plush toys",
      dolls: {
        name_en: "dolls",
        fashion_dolls: {
          color: basicColors,
          name_en: "fashion dolls",
          size: ['11.5"'],
          type: ["traditional", "modern"],
          age: ["5+"],
        },
        baby_dolls: {
          color: basicColors,
          name_en: "baby dolls",
          size: ['12"', '18"'],
          features: ["interactive", "soft-bodied"],
        },
        collectible_dolls: {
          color: basicColors,
          name_en: "collectible dolls",
          size: ['12"'],
          type: ["porcelain", "vinyl"],
        },
      },
      plush_toys: {
        name_en: "plush toys",
        stuffed_animals: {
          color: basicColors,
          name_en: "stuffed animals",
          size: ["small", "medium", "large"],
          type: ["bears", "cats", "dogs"],
        },
        character_plush: {
          color: basicColors,
          name_en: "character plush",
          size: ["small", "medium"],
          theme: ["movies", "tv shows"],
        },
        pillows: {
          color: basicColors,
          name_en: "pillows",
          size: ["standard", "travel"],
          type: ["animal", "emoji"],
        },
      },
    },
    card_games: {
      name_en: "card games",
      classic_games: {
        name_en: "classic games",
        playing_cards: {
          color: basicColors,
          name_en: "playing cards",
          type: ["standard", "specialty"],
          size: ["poker", "bridge"],
        },
        uno: {
          color: basicColors,
          name_en: "uno",
          size: ["standard", "travel"],
          theme: ["classic", "themed"],
        },
      },
      strategy_card_games: {
        name_en: "strategy card games",
        collectible_card_games: {
          color: basicColors,
          name_en: "collectible card games",
          type: ["trading", "deck-building"],
          age: ["10+"],
        },
        party_games: {
          color: basicColors,
          name_en: "party games",
          type: ["social deduction", "bluffing"],
          age: ["14+"],
        },
      },
    },
    electronic_toys: {
      name_en: "electronic toys",
      interactive_toys: {
        name_en: "interactive toys",
        robots: {
          color: basicColors,
          name_en: "robots",
          size: ["mini", "standard"],
          features: ["programmable", "remote-controlled"],
        },
        learning_tablets: {
          color: basicColors,
          name_en: "learning tablets",
          age: ["3-8 years"],
          features: ["educational apps", "touchscreen"],
        },
        drones: {
          color: basicColors,
          name_en: "drones",
          size: ["mini", "standard"],
          features: ["camera", "remote-controlled"],
        },
      },
      video_games: {
        name_en: "video games",
        consoles: {
          color: basicColors,
          name_en: "consoles",
          type: ["playstation", "xbox", "nintendo"],
          generation: ["current", "previous"],
        },
        handhelds: {
          color: basicColors,
          name_en: "handhelds",
          type: ["nintendo switch", "psp"],
          age: ["7+"],
        },
        accessories: {
          color: basicColors,
          name_en: "accessories",
          type: ["controllers", "headsets"],
          compatibility: ["ps", "xbox", "pc"],
        },
      },
    },
  },
  automotive: {
    name_en: "automotive",
    car_accessories: {
      name_en: "car accessories",
      interior_accessories: {
        name_en: "interior accessories",
        floor_mats: {
          color: basicColors,
          name_en: "floor mats",
          type: ["all-weather", "carpet"],
          fit: ["universal", "custom"],
        },
        seat_covers: {
          color: basicColors,
          name_en: "seat covers",
          type: ["leather", "fabric"],
          fit: ["bucket", "bench"],
        },
        steering_wheel_covers: {
          color: basicColors,
          name_en: "steering wheel covers",
          material: ["leather", "rubber"],
          size: ["standard", "oversized"],
        },
        sun_shades: {
          color: basicColors,
          name_en: "sun shades",
          type: ["accordion", "roll-up"],
          fit: ["windshield", "side windows"],
        },
      },
      exterior_accessories: {
        name_en: "exterior accessories",
        car_covers: {
          color: basicColors,
          name_en: "car covers",
          type: ["indoor", "outdoor"],
          size: ["compact", "SUV", "truck"],
        },
        wind_deflectors: {
          color: basicColors,
          name_en: "wind deflectors",
          type: ["vent visors", "sunroof"],
          fit: ["specific models"],
        },
        spoilers: {
          color: basicColors,
          name_en: "spoilers",
          type: ["universal", "custom"],
          material: ["plastic", "fiberglass"],
        },
        roof_racks: {
          color: basicColors,
          name_en: "roof racks",
          type: ["cargo", "bike", "ski"],
          fit: ["universal", "vehicle-specific"],
        },
      },
    },
    maintenance_products: {
      name_en: "maintenance products",
      fluids: {
        name_en: "fluids",
        engine_oil: {
          color: basicColors,
          name_en: "engine oil",
          type: ["synthetic", "conventional"],
          viscosity: ["5W-30", "10W-40"],
        },
        transmission_fluid: {
          color: basicColors,
          name_en: "transmission fluid",
          type: ["ATF", "CVT"],
          volume: ["1 qt", "5 qt"],
        },
        coolant: {
          color: basicColors,
          name_en: "coolant",
          type: ["antifreeze", "pre-mixed"],
          volume: ["1 gal", "50/50"],
        },
        brake_fluid: {
          color: basicColors,
          name_en: "brake fluid",
          type: ["DOT 3", "DOT 4"],
          volume: ["12 oz", "1 qt"],
        },
      },
      cleaning_products: {
        name_en: "cleaning products",
        car_wash_soap: {
          color: basicColors,
          name_en: "car wash soap",
          type: ["concentrated", "no-rinse"],
          size: ["16 oz", "1 gal"],
        },
        wax: {
          color: basicColors,
          name_en: "wax",
          type: ["liquid", "paste"],
          size: ["16 oz", "32 oz"],
        },
        interior_cleaner: {
          color: basicColors,
          name_en: "interior cleaner",
          type: ["multi-surface", "leather"],
          size: ["16 oz", "1 qt"],
        },
        tire_cleaner: {
          color: basicColors,
          name_en: "tire cleaner",
          type: ["foam", "gel"],
          size: ["16 oz", "1 qt"],
        },
      },
    },
    tools_and_equipment: {
      name_en: "tools and equipment",
      basic_tools: {
        name_en: "basic tools",
        socket_sets: {
          color: basicColors,
          name_en: "socket sets",
          size: ['1/4"', '3/8"', '1/2"'],
          pieces: [20, 40, 100],
        },
        wrenches: {
          color: basicColors,
          name_en: "wrenches",
          type: ["open-end", "box-end"],
          size: ["metric", "standard"],
        },
        screwdrivers: {
          color: basicColors,
          name_en: "screwdrivers",
          type: ["flathead", "phillips"],
          size: ["standard", "precision"],
        },
        pliers: {
          color: basicColors,
          name_en: "pliers",
          type: ["slip joint", "needle nose"],
          size: ["standard", "mini"],
        },
      },
      specialty_tools: {
        name_en: "specialty tools",
        diagnostic_scanners: {
          color: basicColors,
          name_en: "diagnostic scanners",
          type: ["OBD-II", "bluetooth"],
          compatibility: ["universal", "specific models"],
        },
        jacks: {
          color: basicColors,
          name_en: "jacks",
          type: ["floor", "bottle"],
          capacity: ["1.5 ton", "3 ton"],
        },
        creepers: {
          color: basicColors,
          name_en: "creepers",
          type: ["standard", "low profile"],
          size: ["standard", "adjustable"],
        },
        tire_pressure_gauges: {
          color: basicColors,
          name_en: "tire pressure gauges",
          type: ["digital", "analog"],
          range: ["0-60 PSI", "0-100 PSI"],
        },
      },
    },
    tires_and_wheels: {
      name_en: "tires and wheels",
      tires: {
        name_en: "tires",
        all_season_tires: {
          color: basicColors,
          name_en: "all season tires",
          size: ["195/65R15", "225/60R16"],
          type: ["passenger", "SUV"],
        },
        winter_tires: {
          color: basicColors,
          name_en: "winter tires",
          size: ["195/65R15", "225/60R16"],
          type: ["studdable", "studless"],
        },
        performance_tires: {
          color: basicColors,
          name_en: "performance tires",
          size: ["245/40R18", "275/35R19"],
          type: ["summer", "racing"],
        },
        off_road_tires: {
          color: basicColors,
          name_en: "off road tires",
          size: ['30"', '33"', '35"'],
          type: ["mud", "all-terrain"],
        },
      },
      wheels: {
        name_en: "wheels",
        alloy_wheels: {
          color: basicColors,
          name_en: "alloy wheels",
          size: ['16"', '17"', '18"'],
          finish: ["silver", "black", "chrome"],
        },
        steel_wheels: {
          color: basicColors,
          name_en: "steel wheels",
          size: ['14"', '15"', '16"'],
          finish: ["painted", "primed"],
        },
        wheel_covers: {
          color: basicColors,
          name_en: "wheel covers",
          size: ['14"', '15"', '16"'],
          style: ["sport", "classic"],
        },
      },
    },
    electronics: {
      name_en: "electronics",
      air_vent: {
        name_en: "air_vent",
        color: basicColors,
      },
      phone_holder: {
        name_en: "phone holder",
        color: basicColors,
      },
      audio_and_multimedia: {
        name_en: "audio and multimedia",
        car_stereos: {
          color: basicColors,
          name_en: "car stereos",
          type: ["single DIN", "double DIN"],
          features: ["bluetooth", "USB", "navigation"],
        },
        speakers: {
          color: basicColors,
          name_en: "speakers",
          type: ["coaxial", "component"],
          size: ['6.5"', '6x9"', '8"'],
        },
        subwoofers: {
          color: basicColors,
          name_en: "subwoofers",
          type: ["active", "passive"],
          size: ['10"', '12"', '15"'],
        },
        amplifiers: {
          color: basicColors,
          name_en: "amplifiers",
          type: ["mono", "2-channel", "4-channel"],
          power: ["500W", "1000W"],
        },
      },
      gps_and_navigation: {
        name_en: "gps and navigation",
        portable_gps_units: {
          color: basicColors,
          name_en: "portable gps units",
          screenSize: screenSize,
          features: ["traffic", "maps"],
        },
        smartphone_mounts: {
          color: basicColors,
          name_en: "smartphone mounts",
          type: ["dashboard", "windshield"],
          compatibility: ["universal", "specific models"],
        },
        backup_cameras: {
          color: basicColors,
          name_en: "backup cameras",
          wiringType: wiringType,
          features: ["night vision", "parking guidelines"],
        },
      },
    },
    safety_and_security: {
      name_en: "safety and security",
      safety_gear: {
        name_en: "safety gear",
        car_jacks: {
          color: basicColors,
          name_en: "car jacks",
          type: ["hydraulic", "floor"],
          capacity: ["1.5 ton", "3 ton"],
        },
        jump_starters: {
          color: basicColors,
          name_en: "jump starters",
          type: ["portable", "lithium-ion"],
          capacity: ["400A", "1000A"],
        },
        first_aid_kits: {
          color: basicColors,
          name_en: "first aid kits",
          contents: ["bandages", "antiseptics", "tools"],
          size: ["standard", "compact"],
        },
        fire_extinguishers: {
          color: basicColors,
          name_en: "fire extinguishers",
          type: ["ABC", "BC"],
          size: ["2.5 lb", "5 lb"],
        },
      },
      security_products: {
        name_en: "security products",
        car_alarms: {
          color: basicColors,
          name_en: "car alarms",
          type: ["shock sensor", "GPS tracking"],
          features: ["remote start", "alerts"],
        },
        steering_wheel_locks: {
          color: basicColors,
          name_en: "steering wheel locks",
          type: ["bar style", "disk style"],
          fit: ["universal", "vehicle-specific"],
        },
        window_breakers: {
          color: basicColors,
          name_en: "window breakers",
          type: ["manual", "automatic"],
          features: ["LED", "multi-tool"],
        },
        vehicle_care: {
          color: basicColors,
          name_en: "vehicle care",
          exterior_care: {
            color: basicColors,
            name_en: "exterior care",
            wax: {
              color: basicColors,
              name_en: "wax",
              type: ["liquid", "paste"],
              size: ["16 oz", "32 oz"],
            },
            clay_bars: {
              color: basicColors,
              name_en: "clay bars",
              type: ["standard", "fine"],
              size: ["200g", "400g"],
            },
            tire_shine: {
              color: basicColors,
              name_en: "tire shine",
              type: ["spray", "gel"],
              size: ["16 oz", "1 qt"],
            },
          },
          interior_care: {
            color: basicColors,
            name_en: "interior care",
            upholstery_cleaners: {
              color: basicColors,
              name_en: "upholstery cleaners",
              type: ["foam", "spray"],
              size: ["16 oz", "1 qt"],
            },
            leather_conditioners: {
              color: basicColors,
              name_en: "leather conditioners",
              type: ["cream", "spray"],
              size_ml: sizeMililiter,
            },
            odor_eliminators: {
              color: basicColors,
              name_en: "odor eliminators",
              type: ["spray", "gel"],
              size_ml: sizeMililiter,
            },
          },
        },
      },
    },
  },
  books_and_stationery: {
    name_en: "books and stationery",
    books: {
      name_en: "books",
      fiction: {
        name_en: "fiction",
        novels: {
          color: basicColors,
          name_en: "novels",
          genre: ["literary", "mystery", "romance", "sci-fi"],
          format: ["paperback", "hardcover", "eBook"],
        },
        short_stories: {
          color: basicColors,
          name_en: "short stories",
          collection: ["anthology", "single author"],
          format: ["paperback", "eBook"],
        },
        graphic_novels: {
          color: basicColors,
          name_en: "graphic novels",
          genre: ["superhero", "manga", "literary"],
          format: ["paperback", "hardcover"],
        },
      },
      non_fiction: {
        name_en: "non-fiction",
        biographies: {
          color: basicColors,
          name_en: "biographies",
          subject: ["historical figures", "celebrities"],
          format: ["paperback", "hardcover"],
        },
        self_help: {
          color: basicColors,
          name_en: "self-help",
          topic: ["motivation", "health", "finance"],
          format: ["paperback", "eBook"],
        },
        cookbooks: {
          color: basicColors,
          name_en: "cookbooks",
          cuisine: ["italian", "vegan", "baking"],
          format: ["paperback", "hardcover"],
        },
      },
      children_books: {
        name_en: "children's books",
        picture_books: {
          color: basicColors,
          name_en: "picture books",
          age_group: ["0-5 years"],
          format: ["hardcover", "board book"],
        },
        early_readers: {
          color: basicColors,
          name_en: "early readers",
          age_group: ["5-7 years"],
          format: ["paperback", "eBook"],
        },
        chapter_books: {
          color: basicColors,
          name_en: "chapter books",
          age_group: ["7-10 years"],
          format: ["paperback", "hardcover"],
        },
      },
    },
    stationery: {
      name_en: "stationery",
      writing_instruments: {
        name_en: "writing instruments",
        pens: {
          color: basicColors,
          name_en: "pens",
          type: ["ballpoint", "gel", "fountain"],
        },
        pencils: {
          color: basicColors,
          name_en: "pencils",
          type: ["graphite", "mechanical"],
          size: ["standard", "colored"],
        },
        markers: {
          name_en: "markers",
          type: ["permanent", "dry erase", "highlighters"],
          color: ["assorted", "neon"],
        },
      },
      paper_products: {
        name_en: "paper products",
        notebooks: {
          color: basicColors,
          name_en: "notebooks",
          size: ["A4", "A5", "college ruled"],
          type: ["spiral", "composition"],
        },
        sticky_notes: {
          name_en: "sticky notes",
          size: ['3"x3"', '4"x6"'],
          color: ["assorted", "neon"],
        },
        folders: {
          color: basicColors,
          name_en: "folders",
          type: ["pocket", "pronged"],
          material: ["plastic", "paper"],
        },
      },
    },
    art_supplies: {
      name_en: "art supplies",
      drawing_and_painting: {
        name_en: "drawing and painting",
        sketchbooks: {
          color: basicColors,
          name_en: "sketchbooks",
          size: ['9"x12"', '11"x14"'],
          paper_type: ["mixed media", "watercolor"],
        },
        acrylic_paints: {
          name_en: "acrylic paints",
          set_size: [6, 12, 24],
          color: ["assorted", "neon"],
        },
        brushes: {
          color: basicColors,
          name_en: "brushes",
          type: ["round", "flat", "fan"],
          size: ["small", "medium", "large"],
        },
      },
      craft_supplies: {
        name_en: "craft supplies",
        glue: {
          color: basicColors,
          name_en: "glue",
          type: ["liquid", "stick", "spray"],
          size: ["4 oz", "8 oz"],
        },
        scissors: {
          color: basicColors,
          name_en: "scissors",
          type: ["standard", "craft", "safety"],
          size: ["small", "medium", "large"],
        },
        craft_kits: {
          color: basicColors,
          name_en: "craft kits",
          type: ["DIY", "scrapbooking"],
          age_group: ["all ages"],
        },
      },
    },
    organizational_supplies: {
      name_en: "organizational supplies",
      planners_and_calendars: {
        name_en: "planners and calendars",
        daily_planners: {
          color: basicColors,
          name_en: "daily planners",
          size: ["A5", "A4"],
          format: ["weekly", "monthly"],
        },
        wall_calendars: {
          color: basicColors,
          name_en: "wall calendars",
          theme: ["inspirational", "art", "nature"],
          size: ['12"x12"', '12"x24"'],
        },
        desk_calendars: {
          color: basicColors,
          name_en: "desk calendars",
          type: ["flip", "magnetic"],
          size: ["standard", "mini"],
        },
      },
      storage_solutions: {
        name_en: "storage solutions",
        binders: {
          color: basicColors,
          name_en: "binders",
          size: ['1"', '2"', '3"'],
          type: ["D-ring", "view", "zip-up"],
        },
        file_organizers: {
          color: basicColors,
          name_en: "file organizers",
          type: ["desktop", "hanging"],
          material: ["plastic", "metal"],
        },
        labels: {
          color: basicColors,
          name_en: "labels",
          type: ["printable", "pre-printed"],
          size: ["standard", "assorted"],
        },
      },
    },
    school_supplies: {
      name_en: "school supplies",
      basic_supplies: {
        name_en: "basic supplies",
        backpacks: {
          color: basicColors,
          name_en: "backpacks",
          size: ["standard", "mini"],
          type: ["basic", "rolling", "laptop"],
        },
        lunch_boxes: {
          color: basicColors,
          name_en: "lunch boxes",
          type: ["insulated", "bento"],
          size: ["standard", "small"],
        },
        water_bottles: {
          color: basicColors,
          name_en: "water bottles",
          type: ["plastic", "stainless steel"],
          size: ["16 oz", "32 oz"],
        },
      },
      subject_specific_supplies: {
        name_en: "subject-specific supplies",
        math_supplies: {
          color: basicColors,
          name_en: "math supplies",
          type: ["calculators", "rulers"],
          grade_level: ["elementary", "high school"],
        },
        art_supplies: {
          color: basicColors,
          name_en: "art supplies",
          type: ["colored pencils", "watercolors"],
          grade_level: ["all ages"],
        },
        science_supplies: {
          color: basicColors,
          name_en: "science supplies",
          type: ["lab kits", "safety goggles"],
          grade_level: ["middle school", "high school"],
        },
      },
    },
    technology_and_accessories: {
      name_en: "technology and accessories",
      e_readers: {
        name_en: "e-readers",
        e_readers: {
          color: basicColors,
          name_en: "e-readers",
          brand: ["kindle", "nook"],
          features: ["Wi-Fi", "waterproof"],
        },
        accessories: {
          color: basicColors,
          name_en: "accessories",
          type: ["covers", "screen protectors"],
          size: ["standard", "custom"],
        },
      },
      office_supplies: {
        name_en: "office supplies",
        printers: {
          color: basicColors,
          name_en: "printers",
          type: ["inkjet", "laser"],
          features: ["wireless", "all-in-one"],
        },
        paper: {
          color: basicColors,
          name_en: "paper",
          type: ["printer paper", "photo paper"],
          size: ["letter", "A4"],
        },
        ink_cartridges: {
          color: basicColors,
          name_en: "ink cartridges",
          type: ["standard", "high-yield"],
          compatibility: ["brand-specific"],
        },
      },
    },
    gift_and_specialty_items: {
      name_en: "gift and specialty items",
      greeting_cards: {
        name_en: "greeting cards",
        occasions: {
          color: basicColors,
          name_en: "occasions",
          type: ["birthday", "thank you", "holiday"],
          format: ["single", "boxed"],
        },
        postcards: {
          color: basicColors,
          name_en: "postcards",
          theme: ["travel", "art", "inspirational"],
          size: ["standard", "mini"],
        },
      },
      gift_wrap: {
        name_en: "gift wrap",
        wrapping_paper: {
          color: basicColors,
          name_en: "wrapping paper",
          theme: ["floral", "birthday", "holiday"],
          size: ["standard", "jumbo"],
        },
        gift_bags: {
          color: basicColors,
          name_en: "gift bags",
          size: ["small", "medium", "large"],
          style: ["printed", "solid color"],
        },
      },
    },
  },
  garden_and_outdoor: {
    gardening_tools: {
      name_en: "gardening tools",
      hand_tools: {
        name_en: "hand tools",
        trowels: {
          color: basicColors,
          name_en: "trowels",
          type: ["garden", "transplant", "mini"],
          material: ["stainless steel", "plastic"],
        },
        pruners: {
          color: basicColors,
          name_en: "pruners",
          type: ["bypass", "anvil"],
          size: ["standard", "mini"],
        },
        hand_rakes: {
          color: basicColors,
          name_en: "hand rakes",
          size: ["standard", "mini"],
          material: ["steel", "plastic"],
        },
        weeders: {
          color: basicColors,
          name_en: "weeders",
          type: ["hand", "claw", "electric"],
          features: ["ergonomic", "adjustable"],
        },
      },
      power_tools: {
        name_en: "power tools",
        lawn_mowers: {
          color: basicColors,
          name_en: "lawn mowers",
          type: ["gas", "electric", "battery"],
          size: ["push", "riding"],
        },
        string_trimmers: {
          color: basicColors,
          name_en: "string trimmers",
          type: ["electric", "gas", "battery"],
          features: ["adjustable", "lightweight"],
        },
        leaf_blowers: {
          color: basicColors,
          name_en: "leaf blowers",
          type: ["corded", "battery", "gas"],
          features: ["vacuum", "mulching"],
        },
        hedge_trimmers: {
          color: basicColors,
          name_en: "hedge trimmers",
          type: ["electric", "gas"],
          features: ["corded", "cordless"],
        },
      },
    },
    outdoor_furniture: {
      name_en: "outdoor furniture",
      seating: {
        name_en: "seating",
        patio_chairs: {
          color: basicColors,
          name_en: "patio chairs",
          type: ["lounge", "dining", "folding"],
          material: ["wood", "metal", "plastic"],
        },
        benches: {
          color: basicColors,
          name_en: "benches",
          size: ["2-seater", "3-seater"],
          material: ["wood", "metal"],
        },
        hammocks: {
          color: basicColors,
          name_en: "hammocks",
          type: ["single", "double"],
          material: ["cotton", "nylon"],
        },
        outdoor_cushions: {
          color: basicColors,
          name_en: "outdoor cushions",
          size: ["standard", "custom"],
          material: ["water-resistant", "UV-resistant"],
        },
      },
      tables: {
        name_en: "tables",
        dining_tables: {
          color: basicColors,
          name_en: "dining tables",
          size: ["round", "rectangular"],
          material: ["wood", "metal"],
        },
        coffee_tables: {
          color: basicColors,
          name_en: "coffee tables",
          size: ["standard", "low"],
          material: ["glass", "wood"],
        },
        side_tables: {
          color: basicColors,
          name_en: "side tables",
          type: ["folding", "nesting"],
          material: ["plastic", "metal"],
        },
      },
    },
    planters_and_pots: {
      name_en: "planters and pots",
      planters: {
        name_en: "planters",
        garden_beds: {
          color: basicColors,
          name_en: "garden beds",
          type: ["raised", "in-ground"],
          material: ["wood", "metal", "composite"],
        },
        vertical_planters: {
          color: basicColors,
          name_en: "vertical planters",
          size: ["wall-mounted", "freestanding"],
          material: ["plastic", "wood"],
        },
        self_watering_planters: {
          color: basicColors,
          name_en: "self-watering planters",
          size: ["small", "large"],
          features: ["built-in reservoir"],
        },
      },
      pots: {
        name_en: "pots",
        flower_pots: {
          color: basicColors,
          name_en: "flower pots",
          size: ['4"', '6"', '12"'],
          material: ["terracotta", "plastic", "ceramic"],
        },
        hanging_baskets: {
          color: basicColors,
          name_en: "hanging baskets",
          size: ['10"', '12"', '14"'],
          material: ["wicker", "plastic"],
        },
        indoor_planters: {
          color: basicColors,
          name_en: "indoor planters",
          type: ["decorative", "self-watering"],
          material: ["ceramic", "plastic"],
        },
      },
    },
    seeds_and_soil: {
      name_en: "seeds and soil",
      seeds: {
        name_en: "seeds",
        flower_seeds: {
          color: basicColors,
          name_en: "flower seeds",
          type: ["annuals", "perennials"],
          size: ["packet", "bulk"],
        },
        vegetable_seeds: {
          color: basicColors,
          name_en: "vegetable seeds",
          type: ["heirloom", "organic"],
          size: ["packet", "bulk"],
        },
        herb_seeds: {
          color: basicColors,
          name_en: "herb seeds",
          type: ["culinary", "medicinal"],
          size: ["packet", "bulk"],
        },
      },
      soil_and_amendments: {
        name_en: "soil and amendments",
        potting_soil: {
          color: basicColors,
          name_en: "potting soil",
          type: ["organic", "all-purpose"],
          size: ["1 cu ft", "2 cu ft"],
        },
        fertilizers: {
          color: basicColors,
          name_en: "fertilizers",
          type: ["granular", "liquid"],
          features: ["slow-release", "fast-acting"],
        },
        mulch: {
          color: basicColors,
          name_en: "mulch",
          type: ["bark", "straw", "rubber"],
          size: ["2 cu ft", "3 cu ft"],
        },
      },
    },
    outdoor_decor: {
      name_en: "outdoor decor",
      lighting: {
        name_en: "lighting",
        solar_lights: {
          color: basicColors,
          name_en: "solar lights",
          type: ["pathway", "string", "spotlights"],
          features: ["motion sensor", "color-changing"],
        },
        lanterns: {
          color: basicColors,
          name_en: "lanterns",
          type: ["hanging", "tabletop"],
          material: ["metal", "glass"],
        },
        fairy_lights: {
          color: basicColors,
          name_en: "fairy lights",
          type: ["battery-operated", "plug-in"],
          length: ["10 ft", "50 ft"],
        },
      },
      garden_statues: {
        name_en: "garden statues",
        animal_statues: {
          color: basicColors,
          name_en: "animal statues",
          type: ["birds", "frogs", "cats"],
          material: ["stone", "resin"],
        },
        decorative_stones: {
          color: basicColors,
          name_en: "decorative stones",
          type: ["engraved", "painted"],
          size: ["standard", "large"],
        },
        water_features: {
          color: basicColors,
          name_en: "water features",
          type: ["fountains", "birdbaths"],
          material: ["stone", "plastic"],
        },
      },
    },
    outdoor_cooking: {
      name_en: "outdoor cooking",
      grills: {
        name_en: "grills",
        gas_grills: {
          color: basicColors,
          name_en: "gas grills",
          size: ["2-burner", "4-burner"],
          features: ["side burner", "rotisserie"],
        },
        charcoal_grills: {
          color: basicColors,
          name_en: "charcoal grills",
          size: ["kettle", "barrel"],
          features: ["adjustable vents"],
        },
        electric_grills: {
          color: basicColors,
          name_en: "electric grills",
          size: ["tabletop", "full-size"],
          features: ["indoor/outdoor"],
        },
      },
      cookware: {
        name_en: "cookware",
        grill_tools: {
          color: basicColors,
          name_en: "grill tools",
          type: ["spatula", "tongs", "brush"],
          material: ["stainless steel", "wood"],
        },
        grilling_mats: {
          color: basicColors,
          name_en: "grilling mats",
          size: ["standard", "large"],
          material: ["non-stick", "heat-resistant"],
        },
        smokers: {
          color: basicColors,
          name_en: "smokers",
          type: ["electric", "charcoal"],
          size: ["portable", "full-size"],
        },
      },
    },
    pest_control: {
      name_en: "pest control",
      repellents: {
        name_en: "repellents",
        insect_repellents: {
          color: basicColors,
          name_en: "insect repellents",
          type: ["sprays", "granules"],
          features: ["natural", "chemical"],
        },
        animal_repellents: {
          color: basicColors,
          name_en: "animal repellents",
          type: ["sprays", "granules"],
          target: ["rabbits", "deer", "rodents"],
        },
      },
      traps: {
        name_en: "traps",
        insect_traps: {
          color: basicColors,
          name_en: "insect traps",
          type: ["sticky", "electric"],
          features: ["indoor", "outdoor"],
        },
        rodent_traps: {
          color: basicColors,
          name_en: "rodent traps",
          type: ["snap", "live", "electronic"],
          features: ["baited", "no-kill"],
        },
      },
    },
    outdoor_recreation: {
      name_en: "outdoor recreation",
      camping_gear: {
        name_en: "camping gear",
        tents: {
          color: basicColors,
          name_en: "tents",
          size: ["2-person", "4-person", "family"],
          type: ["backpacking", "car camping"],
        },
        sleeping_bags: {
          color: basicColors,
          name_en: "sleeping bags",
          temperature_rating: ["0°F", "20°F", "40°F"],
          size: ["regular", "long"],
        },
        camp_stoves: {
          color: basicColors,
          name_en: "camp stoves",
          type: ["portable", "tabletop"],
          fuel_type: ["propane", "butane"],
        },
      },
      outdoor_games: {
        name_en: "outdoor games",

        lawn_games: {
          color: basicColors,
          name_en: "lawn games",
          type: ["bocce ball", "cornhole", "horseshoes"],
          set_size: ["standard", "mini"],
        },
        sports_equipment: {
          color: basicColors,
          name_en: "sports equipment",
          type: ["frisbee", "volleyball", "badminton"],
          features: ["portable", "inflatable"],
        },
      },
    },
  },
  pet_care: {
    name_en: "pet care",
    pet_food: {
      name_en: "pet food",
      dog_food: {
        name_en: "dog food",
        dry_food: {
          color: basicColors,
          name_en: "dry food",
          size: ["small bag", "medium bag", "large bag"],
          type: ["puppy", "adult", "senior"],
          features: ["grain-free", "high-protein"],
        },
        wet_food: {
          color: basicColors,
          name_en: "wet food",
          size: ["single can", "multipack"],
          type: ["puppy", "adult", "senior"],
          features: ["grain-free", "high-protein"],
        },
        treats: {
          color: basicColors,
          name_en: "treats",
          type: ["biscuits", "jerky", "chews"],
          flavor: ["chicken", "beef", "peanut butter"],
        },
      },
      cat_food: {
        name_en: "cat food",
        dry_food: {
          color: basicColors,
          name_en: "dry food",
          size: ["small bag", "medium bag", "large bag"],
          type: ["kitten", "adult", "senior"],
          features: ["grain-free", "indoor formula"],
        },
        wet_food: {
          color: basicColors,
          name_en: "wet food",
          size: ["single can", "multipack"],
          type: ["kitten", "adult", "senior"],
          features: ["grain-free", "pate"],
        },
        treats: {
          color: basicColors,
          name_en: "treats",
          type: ["crunchy", "soft"],
          flavor: ["salmon", "chicken", "tuna"],
        },
      },
    },
    pet_accessories: {
      name_en: "pet accessories",
      collars_and_leashes: {
        name_en: "collars and leashes",
        collars: {
          color: basicColors,
          name_en: "collars",
          size: ["small", "medium", "large"],
          material: ["nylon", "leather"],
          features: ["adjustable", "reflective"],
        },
        leashes: {
          color: basicColors,
          name_en: "leashes",
          length: ["4 ft", "6 ft", "retractable"],
          material: ["nylon", "leather"],
        },
      },
      beds_and_crates: {
        name_en: "beds and crates",
        pet_beds: {
          color: basicColors,
          name_en: "pet beds",
          size: ["small", "medium", "large"],
          type: ["orthopedic", "plush"],
          material: ["memory foam", "cotton"],
        },
        crates: {
          color: basicColors,
          name_en: "crates",
          size: ["small", "medium", "large"],
          type: ["wire", "plastic"],
        },
      },
      toys: {
        name_en: "toys",
        chew_toys: {
          color: basicColors,
          name_en: "chew toys",
          size: ["small", "medium", "large"],
          material: ["rubber", "nylon"],
        },
        interactive_toys: {
          color: basicColors,
          name_en: "interactive toys",
          features: ["puzzle", "treat-dispensing"],
        },
        plush_toys: {
          color: basicColors,
          name_en: "plush toys",
          size: ["small", "medium", "large"],
          material: ["cotton", "polyester"],
        },
      },
    },
    grooming_and_health: {
      name_en: "grooming and health",
      grooming_supplies: {
        name_en: "grooming supplies",
        brushes: {
          color: basicColors,
          name_en: "brushes",
          type: ["slicker", "de-shedding", "bristle"],
        },
        shampoos: {
          color: basicColors,
          name_en: "shampoos",
          type: ["oatmeal", "anti-flea"],
          size: ["8 oz", "16 oz"],
        },
        nail_clippers: {
          color: basicColors,
          name_en: "nail clippers",
          type: ["scissors", "guillotine"],
        },
      },
      health_products: {
        name_en: "health products",
        supplements: {
          color: basicColors,
          name_en: "supplements",
          type: ["joint health", "multivitamins"],
        },
        flea_and_tick: {
          color: basicColors,
          name_en: "flea and tick",
          type: ["spot treatment", "collars"],
        },
        dental_care: {
          color: basicColors,
          name_en: "dental care",
          type: ["toothpaste", "chews"],
        },
      },
    },
    training_and_behavior: {
      name_en: "training and behavior",
      training_tools: {
        name_en: "training tools",
        clickers: {
          color: basicColors,
          name_en: "clickers",
          features: ["adjustable sound"],
        },
        training_pads: {
          color: basicColors,
          name_en: "training pads",
          size: ["standard", "extra large"],
          features: ["odor control"],
        },
        harnesses: {
          color: basicColors,
          name_en: "harnesses",
          size: ["small", "medium", "large"],
          material: ["nylon", "mesh"],
        },
      },
      behavior_aids: {
        name_en: "behavior aids",
        calming_aids: {
          color: basicColors,
          name_en: "calming aids",
          type: ["chews", "sprays"],
        },
        deterrent_sprays: {
          color: basicColors,
          name_en: "deterrent sprays",
          type: ["anti-chew", "furniture protection"],
        },
      },
    },
  },
};
