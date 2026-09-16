# template

---

This is a README file that can be used to describe and document your assignment.

Markdown Cheatsheet (from [https://www.markdownguide.org/cheat-sheet/](https://www.markdownguide.org/cheat-sheet/)):

---

# Heading1
## Heading2
### Heading3
#### Heading4
##### Heading5
###### Heading6

**bold text**

*italicized text*

~~strikethrough text~~

Ordered List:
1. First item
2. Second item
3. Third item

Unordered List:
- First item
- Second item
- Third item

`short code block`

```
extended code block
fun() {
  return 0
}
```

Link:  
[linked text](https://www.example.com)


Image with url:  
![image description](https://dm-gy-6063-2024f-b.github.io/assets/homework/02/clark-espaco-modulado-00.jpg)


Image on repo:  
![image description](./file-name.jpg)


To start a new line, add two spaces at the end of a line, like this:  
this is a new line.


To start a new paragraph, leave an empty line between two lines of text.

add the reference images to your repo in a directory named week2/media. Use the README file to describe what you intended to do with each iteration. How did these differ from what you would up with?

//I was trying to think of an idea for how to move shapes, so I thought about boba and the times I accidentally swallowed some and how it felt sitting in my stomach. I wanted to do a representation of a lot of them being eaten, them making their way down a slide, bouncing different directions, launching, and sinking into the ground. For the first scene I was playing around with the 'ifMousePressed' function and randomized similar to how we did in class. Then I was testing moving the ellipse along the screen and originally set them to move straight across and iterating it so it moves in the x direction but not at all in the y. Then, I thought it would look interesting if the other ellipses moved at a slight angel. I was playing with colors as well and looked up how to make a border. I put below several sources I used to look up certain snippets of code. So, now when the mouse is pressed, some ellipses randomly populate the screen in one color and the others leave a trace and the move diagnoally across the screen, and you can hold down the click to determine how long these slingly, cylinder looking shapes come out. Then I wanted to visualize an s or a slide, so I tried to make one with the vertex() function, however there were a lot of hard edges, and the recommended curveVetex() function wasn't working, I'd assume in another library that I could've done research on, but then I descided I wanted to draw an s shape with the ellipses. I looked into the built-in variable mouseX and mouseY which tracks mouse position for me to draw and show each positioon of the mouse dragged along the screen. I then added a mini circle in the circle that looked like a boba ball in the center of the main circle. I randomly hit some buttons and it placed the ellipse within the other one. Then, I wanted to use another shape and another color so I used an orange triangle that changes its x and y, multiplied by two from the same position on the screen. I tried to do rotating randomly on the screen, but then I liked how this looked. For the last transfromation, I ended up doing rotation with yellow rectangles, since I tried before and it took up the screen, I wanted it to look smaller, so I played with other dimesnions of the rectangle to change by x*2 and y*2 on the screen and it seems to be in the same location, but changing in length horizontally across the screen.