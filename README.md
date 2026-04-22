# Type & Interaction MPS CD Project 5: Functions

## Context
My website started from a frustration that felt both personal and widely shared. As designers, clients only care about ‘what it looks like on a billboard.’  For a long time, the only serious option was Photoshop. And while Photoshop is a powerful tool, the process was always tedious, especially when having to make really small changes. It was designed for professional designers, not for anyone who just wants to try something out. More recently, AI tools have moved into this space, and while they seem like the obvious fix, they come with their own set of problems. You are not always getting what you imagined, and iterating toward it takes time, patience and money. 

## Interface
I created a simple browser-based tool that lets anyone, designer or not, place their own image or text onto a New York City subway ad, billboard, or sidewalk display. Being in New York, I choose three quintessential NYC mocks so users could feel what their work looked like in these spaces. 
For the interface, I wanted to make it as intuitive and easy to use as possible. Since it’s a tool, I wanted to contain it to the viewport on desktop so it feels less like a website. The mockup, on the left, takes up around 70% of the screen as it’s the most prominent. I wanted it to be the first thing the user sees. On the right is your control panel, I chose to keep this on the right to follow the patterns of other tools where your editing controls are on the right. For visual design, I wanted to keep it clean and restrained so the emphasis remains on the mockup.

## Responsiveness
In terms of responsiveness, the main breakpoint where the layout changes happens at around a tablet size, where the control panel goes below the mockup, this is to ensure that the image is still the focus. On a smaller mobile breakpoint, the aspect ratio of the mockup changes to make sure the area is large enough for the user to see and also to be more compatible with mobile vertical photo sizes. The image remains sticky, so if you are in text editing mode, you can still see the mockup. 
On mobile, instead of a download button, there is a share button that works natively with iOS and safari. This allows you to save the image or share your mockup.

## Code
In terms of code, we expanded our use of Javascript. We learnt how to create form inputs such as text and color. I also used innerText to allow my input to show on the mockup. Most of my code uses classes to add and remove or hide and display different aspects of the site. I also learnt how to allow the user to upload an image as an input. I used the html-to-image library to create a Png. For downloading, it converts my posterbox into a PNG image and then allows the user to download this when the button is clicked. For sharing, it converts the image and then uses the web share API to open the share sheet. Due to loading issues, I had to add the toPng calls a few times as Safari renders the image blank on the first attempt.  





