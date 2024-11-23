let viewer;
let tabData = [
  { name: "Panorama 1", buttons: [
    { name: "Ours", link: "./static/images/ours/9C4A1380-c255100a1f.png", cond: "./static/images/ours/9C4A1380-c255100a1f_0_0", text: 'A photographer stands in a recording booth with a red door, looking out at a modern atrium with a basketball court, lounge area, and multiple floors of windows.'},
    { name: "MVDiffusion", link: "./static/images/mvdiffusion/9C4A1380-c255100a1f.png", cond: "./static/images/ours/9C4A1380-c255100a1f_0_0", text: 'A photographer stands in a recording booth with a red door, looking out at a modern atrium with a basketball court, lounge area, and multiple floors of windows.'},
    { name: "Diffusion 360", link: "./static/images/diffusion360/9C4A1380-c255100a1f.png", cond: "./static/images/ours/9C4A1380-c255100a1f_0_0", text: 'A photographer stands in a recording booth with a red door, looking out at a modern atrium with a basketball court, lounge area, and multiple floors of windows.'},
    { name: "Pano Diffusion", link: "./static/images/panodiffusion/9C4A1380-c255100a1f.png", cond: "./static/images/ours/9C4A1380-c255100a1f_0_0", text: 'A photographer stands in a recording booth with a red door, looking out at a modern atrium with a basketball court, lounge area, and multiple floors of windows.'},
    { name: "Text2Light", link: "./static/images/text2light/9C4A1380-c255100a1f.png", cond: "", text: 'A photographer stands in a recording booth with a red door, looking out at a modern atrium with a basketball court, lounge area, and multiple floors of windows.'},
    { name: "OmniDreamer", link: "./static/images/omnidreamer/9C4A1380-c255100a1f.png", cond: "./static/images/ours/9C4A1380-c255100a1f_0_0", text: ''},
    { name: "PanFusion", link: "./static/images/panfusion/9C4A1380-c255100a1f.jpg", cond: "", text: 'A photographer stands in a recording booth with a red door, looking out at a modern atrium with a basketball court, lounge area, and multiple floors of windows.'},
  ] },
  { name: "Panorama 2", buttons: [
    { name: "Ours", link: "./static/images/ours/9C4A1101-d399338302.png", cond: "./static/images/ours/9C4A1101-d399338302_0_0", text: 'A kitchen with wooden cabinets and a white refrigerator opens into a dining room with a table and chairs.'},
    { name: "MVDiffusion", link: "./static/images/mvdiffusion/9C4A1101-d399338302.png", cond: "./static/images/ours/9C4A1101-d399338302_0_0", text: 'A kitchen with wooden cabinets and a white refrigerator opens into a dining room with a table and chairs.'},
    { name: "Diffusion 360", link: "./static/images/diffusion360/9C4A1101-d399338302.png", cond: "./static/images/ours/9C4A1101-d399338302_0_0", text: 'A kitchen with wooden cabinets and a white refrigerator opens into a dining room with a table and chairs.'},
    { name: "Pano Diffusion", link: "./static/images/panodiffusion/9C4A1101-d399338302.png", cond: "./static/images/ours/9C4A1101-d399338302_0_0", text: 'A kitchen with wooden cabinets and a white refrigerator opens into a dining room with a table and chairs.'},
    { name: "Text2Light", link: "./static/images/text2light/9C4A1101-d399338302.png", cond: "", text: 'A kitchen with wooden cabinets and a white refrigerator opens into a dining room with a table and chairs.'},
    { name: "OmniDreamer", link: "./static/images/omnidreamer/9C4A1101-d399338302.png", cond: "./static/images/ours/9C4A1101-d399338302_0_0", text: ''},
    { name: "PanFusion", link: "./static/images/panfusion/9C4A1101-d399338302.jpg", cond: "", text: 'A kitchen with wooden cabinets and a white refrigerator opens into a dining room with a table and chairs.'},
  ] },
  { name: "Panorama 3", buttons: [
    { name: "Ours", link: "./static/images/ours/9C4A1355-b620eda505.png", cond: "./static/images/ours/9C4A1355-b620eda505_0_0", text: 'A museum exhibit with white walls and display cases containing historical artifacts, including a military uniform, helmet, and photographs.'},
    { name: "MVDiffusion", link: "./static/images/mvdiffusion/9C4A1355-b620eda505.png", cond: "./static/images/ours/9C4A1355-b620eda505_0_0", text: 'A museum exhibit with white walls and display cases containing historical artifacts, including a military uniform, helmet, and photographs.'},
    { name: "Diffusion 360", link: "./static/images/diffusion360/9C4A1355-b620eda505.png", cond: "./static/images/ours/9C4A1355-b620eda505_0_0", text: 'A museum exhibit with white walls and display cases containing historical artifacts, including a military uniform, helmet, and photographs.'},
    { name: "Pano Diffusion", link: "./static/images/panodiffusion/9C4A1355-b620eda505.png", cond: "./static/images/ours/9C4A1355-b620eda505_0_0", text: 'A museum exhibit with white walls and display cases containing historical artifacts, including a military uniform, helmet, and photographs.'},
    { name: "Text2Light", link: "./static/images/text2light/9C4A1355-b620eda505.png", cond: "", text: 'A museum exhibit with white walls and display cases containing historical artifacts, including a military uniform, helmet, and photographs.'},
    { name: "OmniDreamer", link: "./static/images/omnidreamer/9C4A1355-b620eda505.png", cond: "./static/images/ours/9C4A1355-b620eda505_0_0", text: ''},
    { name: "PanFusion", link: "./static/images/panfusion/9C4A1355-b620eda505.jpg", cond: "", text: 'A museum exhibit with white walls and display cases containing historical artifacts, including a military uniform, helmet, and photographs.'},
  ] },
  { name: "Panorama 4", buttons: [
    { name: "Ours", link: "./static/images/ours/9C4A0129-34b0d8cec2.png", cond: "./static/images/ours/9C4A0129-34b0d8cec2_0_0", text: 'A large indoor swimming pool with multiple lanes, diving boards, and spectator seating.'},
    { name: "MVDiffusion", link: "./static/images/mvdiffusion/9C4A0129-34b0d8cec2.png", cond: "./static/images/ours/9C4A0129-34b0d8cec2_0_0", text: 'A large indoor swimming pool with multiple lanes, diving boards, and spectator seating.'},
    { name: "Diffusion 360", link: "./static/images/diffusion360/9C4A0129-34b0d8cec2.png", cond: "./static/images/ours/9C4A0129-34b0d8cec2_0_0", text: 'A large indoor swimming pool with multiple lanes, diving boards, and spectator seating.'},
    { name: "Pano Diffusion", link: "./static/images/panodiffusion/9C4A0129-34b0d8cec2.png", cond: "./static/images/ours/9C4A0129-34b0d8cec2_0_0", text: 'A large indoor swimming pool with multiple lanes, diving boards, and spectator seating.'},
    { name: "Text2Light", link: "./static/images/text2light/9C4A0129-34b0d8cec2.png", cond: "", text: 'A large indoor swimming pool with multiple lanes, diving boards, and spectator seating.'},
    { name: "OmniDreamer", link: "./static/images/omnidreamer/9C4A0129-34b0d8cec2.png", cond: "./static/images/ours/9C4A0129-34b0d8cec2_0_0", text: ''},
    { name: "PanFusion", link: "./static/images/panfusion/9C4A0129-34b0d8cec2.jpg", cond: "", text: 'A large indoor swimming pool with multiple lanes, diving boards, and spectator seating.'},
  ] },
  { name: "Panorama 5", buttons: [
    { name: "Ours", link: "./static/images/ours/9C4A0221-feaaa06d6f.png", cond: "./static/images/ours/9C4A0221-feaaa06d6f_0_0", text: 'A modern museum entrance with glass walls, a ramp, and a gift shop.'},
    { name: "MVDiffusion", link: "./static/images/mvdiffusion/9C4A0221-feaaa06d6f.png", cond: "./static/images/ours/9C4A0221-feaaa06d6f_0_0", text: 'A modern museum entrance with glass walls, a ramp, and a gift shop.'},
    { name: "Diffusion 360", link: "./static/images/diffusion360/9C4A0221-feaaa06d6f.png", cond: "./static/images/ours/9C4A0221-feaaa06d6f_0_0", text: 'A modern museum entrance with glass walls, a ramp, and a gift shop.'},
    { name: "Pano Diffusion", link: "./static/images/panodiffusion/9C4A0221-feaaa06d6f.png", cond: "./static/images/ours/9C4A0221-feaaa06d6f_0_0", text: 'A modern museum entrance with glass walls, a ramp, and a gift shop.'},
    { name: "Text2Light", link: "./static/images/text2light/9C4A0221-feaaa06d6f.png", cond: "", text: 'A modern museum entrance with glass walls, a ramp, and a gift shop.'},
    { name: "OmniDreamer", link: "./static/images/omnidreamer/9C4A0221-feaaa06d6f.png", cond: "./static/images/ours/9C4A0221-feaaa06d6f_0_0", text: ''},
    { name: "PanFusion", link: "./static/images/panfusion/9C4A0221-feaaa06d6f.jpg", cond: "", text: 'A modern museum entrance with glass walls, a ramp, and a gift shop.'},
  ] },
  { name: "Ours OOD", buttons: [
    { name: "Munch", link: "./static/images/ours/ood/munch_generated_2.png", cond: "./static/images/ours/ood/munch_generated_2", text: ''},
    { name: "Starry Night", link: "./static/images/ours/ood/van_gogh_stary_night_generated.png", cond: "./static/images/ours/ood/van_gogh_stary_night_generated", text: ''},
    { name: "Industrial", link: "./static/images/ours/ood/industrial_generated.png", cond: "./static/images/ours/ood/industrial_generated", text: ''},
    { name: "Space", link: "./static/images/ours/ood/interstellar_generated.png", cond: "./static/images/ours/ood/interstellar_generated", text: ''},
    { name: "Greenhouse", link: "./static/images/ours/ood/greenhouse_generated.png", cond: "./static/images/ours/ood/greenhouse_generated", text: ''},
    { name: "Babel", link: "./static/images/ours/ood/babel_generated_2.png", cond: "./static/images/ours/ood/babel_generated_2", text: ''},
    { name: "Alice", link: "./static/images/ours/ood/alice6_generated.png", cond: "./static/images/ours/ood/alice6_generated", text: ''},
    { name: "Alice 2", link: "./static/images/ours/ood/alice3_generated.png", cond: "./static/images/ours/ood/alice3_generated", text: ''},
    { name: "Abandoned", link: "./static/images/ours/ood/abandoned_2_generated.jpeg", cond: "./static/images/ours/ood/abandoned_2_generated", text: ''},
    { name: "Tree", link: "./static/images/ours/ood/lonelytree.png", cond: "./static/images/ours/ood/lonelytree", text: ''},
    { name: "Balloon", link: "./static/images/ours/ood/hotairballoon_generated.png", cond: "./static/images/ours/ood/hotairballoon_generated", text: ''},
    { name: "Starry Night 2", link: "./static/images/ours/ood/van_gogh_starry_night_generated_2.png", cond: "./static/images/ours/ood/van_gogh_starry_night_generated_2", text: ''},
    { name: "Kitchen", link: "./static/images/ours/ood/kitchen_generated.png", cond: "./static/images/ours/ood/kitchen_generated", text: ''},
    { name: "Library", link: "./static/images/ours/ood/library_with_globe.png", cond: "./static/images/ours/ood/library_with_globe", text: ''},
    { name: "Munch 2", link: "./static/images/ours/ood/munch_generated.png", cond: "./static/images/ours/ood/munch_generated", text: ''},
    { name: "Skyline", link: "./static/images/ours/ood/skyline_generated.png", cond: "./static/images/ours/ood/skyline_generated", text: ''},
    { name: "Snow", link: "./static/images/ours/ood/snow_generated.png", cond: "./static/images/ours/ood/snow_generated", text: ''},
    { name: "Library 2", link: "./static/images/ours/ood/library_with_books.png", cond: "./static/images/ours/ood/library_with_books", text: ''},
    { name: "Babel 2", link: "./static/images/ours/ood/babel_generated.png", cond: "./static/images/ours/ood/babel_generated", text: ''},
    { name: "Alice 3", link: "./static/images/ours/ood/alice1_generated.png", cond: "./static/images/ours/ood/alice1_generated", text: ''},
    { name: "Alice 4", link: "./static/images/ours/ood/alice5_generated.png", cond: "./static/images/ours/ood/alice5_generated", text: ''},
    { name: "Living Room", link: "./static/images/ours/ood/livingroom_generated.png", cond: "./static/images/ours/ood/livingroom_generated", text: ''},
    { name: "Library 3", link: "./static/images/ours/ood/library_generated.png", cond: "./static/images/ours/ood/library_generated", text: ''},
  ] },
];



$(document).ready(function () {
  

  viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "default": {
        "firstScene": "first",
    },
    "scenes": {
        "first": {
            "type": "equirectangular",
            "panorama": tabData[0].buttons[0].link,
            "autoLoad": true,
        },
    }
    
  });

  var img = $('<img>'); // Create an image element
  img.attr('src', tabData[0].buttons[0].cond + '.png'); // Set the image source
  $('#cond-image').append(img); // Append the image to the di
  $("#cond-text").text(tabData[0].buttons[0].text); 

  $('#cond-image img').on('error', function() {
    $(this).hide(); 
  });

  // Create tabs
  var tabsList = $('#myTabs ul');
  $.each(tabData, function(index, tab) {
    var tabItem = $('<li data-tab="tab' + (index + 1) + '"><a>' + tab.name + '</a></li>');
    if (index === 0) {
      console.log('is active');
      tabItem.addClass('is-active');
    }
    tabsList.append(tabItem);
  });

  // Create tab content with buttons
  var tabContent = $('#tabContent');
  $.each(tabData, function(tabIndex, tab) {
    var tabDiv = $('<div id="tab' + (tabIndex + 1) + '" class="content-tab"></div>');
    if (tabIndex > 0) {
      tabDiv.hide();
    }

    // Add a div to center the buttons
    var buttonContainer = $('<div class="has-text-centered"></div>'); 

    $.each(tab.buttons, function(buttonIndex, buttonData) {
      var button = $('<button class="button" data-tab-index="' + tabIndex + '" data-button-index="' + buttonIndex + '" data-link="' + buttonData.link + '" data-text="' + buttonData.text  + '" data-cond="' + buttonData.cond + '">' + buttonData.name + '</button>');
      buttonContainer.append(button); 
    });
    tabDiv.append(buttonContainer); 
    tabContent.append(tabDiv);
  });

  // Tab click handling
  $('#myTabs li').click(function() {
    var tabId = $(this).data('tab');
    $('#myTabs li').removeClass('is-active');
    $(this).addClass('is-active');

    $('.content-tab').hide();
    $('#' + tabId).show();

    $('button').filter(function() {
      return 'tab' + ($(this).data('tab-index') +1) === tabId && $(this).data('button-index') === 0;
    }).click();
  });

  // Button click handling
  $('#tabContent button').click(function() {
    $('#tabContent button').removeClass('is-active');
    $(this).addClass('is-active');
    var tabIndex = $(this).data('tab-index');
    var buttonIndex = $(this).data('button-index');
    var link = $(this).data('link'); 
    var cond = $(this).data('cond'); 
    var text = $(this).data('text'); 
    myCustomFunction(tabIndex, buttonIndex, link, cond, text);
  });
});

function myCustomFunction(tabIndex, buttonIndex, link, cond, text) {
  console.log("Clicked tab index:", tabIndex, "button index:", buttonIndex, "Link:", link, 'Cond:', cond, 'Text:', text);
  // Add your desired functionality here based on the tab and button index

  viewer = pannellum.viewer('panorama', {
    "type": "equirectangular",
    "default": {
        "firstScene": "first",
    },
    "scenes": {
        "first": {
            "type": "equirectangular",
            "panorama": link,
            "autoLoad": true,
        },
    }
    
  });

  $('#cond-image img').attr('src', cond + '.png');  
  $('#cond-image img').show();
  $("#cond-text").text(text); 

}
