let viewer;
let tabData = [
  { name: "Panorama 1", buttons: [
    { name: "Ours", link: "./static/images/ours/9C4A1380-c255100a1f", cond: "./static/images/ours/9C4A1380-c255100a1f_0_0", text: 'A photographer stands in a recording booth with a red door, looking out at a modern atrium with a basketball court, lounge area, and multiple floors of windows.'},
    { name: "MVDiffusion", link: "./static/images/mvdiffusion/9C4A1380-c255100a1f", cond: "./static/images/ours/9C4A1380-c255100a1f_0_0", text: 'A photographer stands in a recording booth with a red door, looking out at a modern atrium with a basketball court, lounge area, and multiple floors of windows.'},
    { name: "Diffusion 360", link: "./static/images/diffusion360/9C4A1380-c255100a1f", cond: "./static/images/ours/9C4A1380-c255100a1f_0_0", text: 'A photographer stands in a recording booth with a red door, looking out at a modern atrium with a basketball court, lounge area, and multiple floors of windows.'},
    { name: "Pano Diffusion", link: "./static/images/panodiffusion/9C4A1380-c255100a1f", cond: "./static/images/ours/9C4A1380-c255100a1f_0_0", text: 'A photographer stands in a recording booth with a red door, looking out at a modern atrium with a basketball court, lounge area, and multiple floors of windows.'},
    { name: "Text2Light", link: "./static/images/text2light/9C4A1380-c255100a1f", cond: "", text: 'A photographer stands in a recording booth with a red door, looking out at a modern atrium with a basketball court, lounge area, and multiple floors of windows.'},
    { name: "OmniDreamer", link: "./static/images/omnidreamer/9C4A1380-c255100a1f", cond: "./static/images/ours/9C4A1380-c255100a1f_0_0", text: ''},
  ] },
  { name: "Panorama 2", buttons: [
    { name: "Ours", link: "./static/images/ours/9C4A1101-d399338302", cond: "./static/images/ours/9C4A1101-d399338302_0_0", text: 'A kitchen with wooden cabinets and a white refrigerator opens into a dining room with a table and chairs.'},
    { name: "MVDiffusion", link: "./static/images/mvdiffusion/9C4A1101-d399338302", cond: "./static/images/ours/9C4A1101-d399338302_0_0", text: 'A kitchen with wooden cabinets and a white refrigerator opens into a dining room with a table and chairs.'},
    { name: "Diffusion 360", link: "./static/images/diffusion360/9C4A1101-d399338302", cond: "./static/images/ours/9C4A1101-d399338302_0_0", text: 'A kitchen with wooden cabinets and a white refrigerator opens into a dining room with a table and chairs.'},
    { name: "Pano Diffusion", link: "./static/images/panodiffusion/9C4A1101-d399338302", cond: "./static/images/ours/9C4A1101-d399338302_0_0", text: 'A kitchen with wooden cabinets and a white refrigerator opens into a dining room with a table and chairs.'},
    { name: "Text2Light", link: "./static/images/text2light/9C4A1101-d399338302", cond: "", text: 'A kitchen with wooden cabinets and a white refrigerator opens into a dining room with a table and chairs.'},
    { name: "OmniDreamer", link: "./static/images/omnidreamer/9C4A1101-d399338302", cond: "./static/images/ours/9C4A1101-d399338302_0_0", text: ''},
  ] },
  { name: "Panorama 3", buttons: [
    { name: "Ours", link: "./static/images/ours/9C4A1355-b620eda505", cond: "./static/images/ours/9C4A1355-b620eda505_0_0", text: 'A museum exhibit with white walls and display cases containing historical artifacts, including a military uniform, helmet, and photographs.'},
    { name: "MVDiffusion", link: "./static/images/mvdiffusion/9C4A1355-b620eda505", cond: "./static/images/ours/9C4A1355-b620eda505_0_0", text: 'A museum exhibit with white walls and display cases containing historical artifacts, including a military uniform, helmet, and photographs.'},
    { name: "Diffusion 360", link: "./static/images/diffusion360/9C4A1355-b620eda505", cond: "./static/images/ours/9C4A1355-b620eda505_0_0", text: 'A museum exhibit with white walls and display cases containing historical artifacts, including a military uniform, helmet, and photographs.'},
    { name: "Pano Diffusion", link: "./static/images/panodiffusion/9C4A1355-b620eda505", cond: "./static/images/ours/9C4A1355-b620eda505_0_0", text: 'A museum exhibit with white walls and display cases containing historical artifacts, including a military uniform, helmet, and photographs.'},
    { name: "Text2Light", link: "./static/images/text2light/9C4A1355-b620eda505", cond: "", text: 'A museum exhibit with white walls and display cases containing historical artifacts, including a military uniform, helmet, and photographs.'},
    { name: "OmniDreamer", link: "./static/images/omnidreamer/9C4A1355-b620eda505", cond: "./static/images/ours/9C4A1355-b620eda505_0_0", text: ''},
  ] },
  { name: "Panorama 4", buttons: [
    { name: "Ours", link: "./static/images/ours/9C4A0129-34b0d8cec2", cond: "./static/images/ours/9C4A0129-34b0d8cec2_0_0", text: 'A large indoor swimming pool with multiple lanes, diving boards, and spectator seating.'},
    { name: "MVDiffusion", link: "./static/images/mvdiffusion/9C4A0129-34b0d8cec2", cond: "./static/images/ours/9C4A0129-34b0d8cec2_0_0", text: 'A large indoor swimming pool with multiple lanes, diving boards, and spectator seating.'},
    { name: "Diffusion 360", link: "./static/images/diffusion360/9C4A0129-34b0d8cec2", cond: "./static/images/ours/9C4A0129-34b0d8cec2_0_0", text: 'A large indoor swimming pool with multiple lanes, diving boards, and spectator seating.'},
    { name: "Pano Diffusion", link: "./static/images/panodiffusion/9C4A0129-34b0d8cec2", cond: "./static/images/ours/9C4A0129-34b0d8cec2_0_0", text: 'A museum exhibit with white walls and display cases containing historical artifacts, including a military uniform, helmet, and photographs.'},
    { name: "Text2Light", link: "./static/images/text2light/9C4A0129-34b0d8cec2", cond: "", text: 'A large indoor swimming pool with multiple lanes, diving boards, and spectator seating.'},
    { name: "OmniDreamer", link: "./static/images/omnidreamer/9C4A0129-34b0d8cec2", cond: "./static/images/ours/9C4A0129-34b0d8cec2_0_0", text: ''},
  ] },
  { name: "Panorama 5", buttons: [
    { name: "Ours", link: "./static/images/ours/9C4A0221-feaaa06d6f", cond: "./static/images/ours/9C4A0221-feaaa06d6f_0_0", text: 'A modern museum entrance with glass walls, a ramp, and a gift shop.'},
    { name: "MVDiffusion", link: "./static/images/mvdiffusion/9C4A0221-feaaa06d6f", cond: "./static/images/ours/9C4A0221-feaaa06d6f_0_0", text: 'A modern museum entrance with glass walls, a ramp, and a gift shop.'},
    { name: "Diffusion 360", link: "./static/images/diffusion360/9C4A0221-feaaa06d6f", cond: "./static/images/ours/9C4A0221-feaaa06d6f_0_0", text: 'A modern museum entrance with glass walls, a ramp, and a gift shop.'},
    { name: "Pano Diffusion", link: "./static/images/panodiffusion/9C4A0221-feaaa06d6f", cond: "./static/images/ours/9C4A0221-feaaa06d6f_0_0", text: 'A modern museum entrance with glass walls, a ramp, and a gift shop.'},
    { name: "Text2Light", link: "./static/images/text2light/9C4A0221-feaaa06d6f", cond: "", text: 'A modern museum entrance with glass walls, a ramp, and a gift shop.'},
    { name: "OmniDreamer", link: "./static/images/omnidreamer/9C4A0221-feaaa06d6f", cond: "./static/images/ours/9C4A0221-feaaa06d6f_0_0", text: ''},
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
            "panorama": tabData[0].buttons[0].link + '.png',
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
            "panorama": link + '.png',
            "autoLoad": true,
        },
    }
    
  });

  $('#cond-image img').attr('src', cond + '.png');  
  $('#cond-image img').show();
  $("#cond-text").text(text); 

}