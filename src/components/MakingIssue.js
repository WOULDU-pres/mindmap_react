import React from 'react';

function MakingIssue() {
  return (
    <div>
      <h2>Issue 1: Connecting Nodes with Curved Lines</h2>
      <p>
        When I started this project, I knew that one of the main challenges would be finding an elegant way to connect nodes with curved lines. I wanted the connections to be visually appealing and intuitive, but achieving this proved to be more difficult than I initially thought.
      </p>
      
      <h3>First Attempt: Using SVG Elements</h3>
      <p>
        My first approach was to use SVG elements to draw the curved lines. I experimented with the SVG `path` element, which allows for creating complex shapes, including curved lines. I tried using the `d` attribute to define the start point, end point, and control points for the Bezier curves. Although this approach allowed me to create curved lines, it was challenging to find the right control points to create smooth curves that connected the nodes in a visually appealing way. I spent quite some time tweaking the control points and experimenting with different curve types, but I was never completely satisfied with the results.
      </p>
      
      <h3>Second Attempt: Using Canvas</h3>
      <p>
        After struggling with SVG elements, I decided to give the HTML5 canvas a try. With canvas, I could create custom drawings using JavaScript, which provided more flexibility and control over the appearance of the curved lines. I started by creating a canvas element and used the `quadraticCurveTo()` and `bezierCurveTo()` methods to draw the curves. This approach allowed me to create smoother curves, but I still faced the challenge of finding the right control points to create visually appealing connections between the nodes.
      </p>
      
      <h3>Final Solution: Algorithmic Control Points</h3>
      <p>
        After some research, I came across an algorithm that could automatically calculate the control points for smooth Bezier curves based on the positions of the nodes. This approach eliminated the need for manual tweaking and produced visually appealing curves with minimal effort. I implemented the algorithm in my `connection.js` file and was finally satisfied with the results.
      </p>
      
      <p>
        In conclusion, connecting nodes with curved lines was a challenging but rewarding experience. I learned a lot about SVG elements, HTML5 canvas, and Bezier curves. Although it took some trial and error to find the right solution, I am proud of the final result and believe it greatly enhances the user experience of my project.
      </p>
    </div>
  );
}

export default MakingIssue;
