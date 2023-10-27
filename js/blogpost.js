const blogPosts = [
    {
      title: "Learn variables and operators basics in Python easily",
      htmlFile: "./blogposts/AutomationWithPython/Basics_1.html",
      about: "Variables and operators are the most essential elements of every programming language, Click here to know about them now",
      imageSrc: "./blogposts/AutomationWithPython/images/Basics1||Episode2.png",
      date: "October 23, 2023",
    },

    {
        title: "Learn input and output basics in Python easily",
        htmlFile: "./blogposts/AutomationWithPython/Basics_2.html",
        about: "Without input and output there is no major significance of a program to the user, Click here to learn about them now",
        imageSrc: "./blogposts/AutomationWithPython/images/Basics2||Episode3.png",
        date: "October 11, 2023",
      },

      {
        title: "Learn conditional statements in Python easily",
        htmlFile: "./blogposts/AutomationWithPython/Basics_3.html",
        about: "Conditional statements provide you the flexibility to maipulate the flow of your program, Click here to learn about them now",
        imageSrc: "./blogposts/AutomationWithPython/images/Basics3||Episode4.png",
        date: "October 17, 2023",
      },

      {
        title: "Learn Loop statements in Python easily",
        htmlFile: "./blogposts/AutomationWithPython/Basics_4.html",
        about: "Repetitiveness is now not an issue, Click here to learn about Loops now",
        imageSrc: "./blogposts/AutomationWithPython/images/Basics4||Episode5.png",
        date: "October 29, 2023",
      },
    // Add other blog post entries here
  ];

blogPosts.sort((a, b) => new Date(a.date) - new Date(b.date));

  const tutorials = [
    {
      title: "Complete Automation course with Python free",
      htmlFile: "./blogposts/AutomationWithPython/list.html",
      imageSrc: "./blogposts/AutomationWithPython/images/CourseAWP.png",
      date: "October 23, 2023",
    },
    {
      title: "Learn complete MOJO basics for free",
      htmlFile: "./blogposts/Learn_MOJO/list.html",
      imageSrc: "./blogposts/Learn_MOJO/images/Mojo.png",
      date: "October 24, 2023",
    },
    {
      title: "Learn about mistakes every programmer makes and how to avoid them",
      htmlFile: "./blogposts/Mistakes/list.html",
      imageSrc: "./blogposts/Mistakes/images/Mistakes.png",
      date: "October 24, 2023",
    },
    // Add other tutorial entries here
  ];
  
  // Sort the tutorials by date
tutorials.sort((a, b) => new Date(a.date) - new Date(b.date));

// Your existing code for blogPosts and tutorials

function displayBlogPosts() {
  const postContent = document.querySelector(".posts");

  blogPosts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.className = "post-content";

      const postImage = document.createElement("div");
      postImage.className = "post-image";
      postImage.innerHTML = `<a href="${post.htmlFile}"><img src="${post.imageSrc}" class="img" alt="blog1"></a>`;

      const postTitle = document.createElement("div");
      postTitle.className = "post-title";
      postTitle.innerHTML = `<a href="${post.htmlFile}">${post.title}</a>`;

      const postAbout = document.createElement("div");
      postAbout.className = "post-about";
      postAbout.innerHTML = `${post.about}`;

      postDiv.appendChild(postImage);
      postDiv.appendChild(postTitle);
      postDiv.appendChild(postAbout);
      postContent.appendChild(postDiv);
  });
}

function displayTutorials() {
  const postContent = document.querySelector(".popular-post");

  tutorials.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.className = "post-content";

      const postImage = document.createElement("div");
      postImage.className = "post-image";
      postImage.innerHTML = `<a href="${post.htmlFile}"><img src="${post.imageSrc}" class="img" alt="tutorial1"></a>`;

      const postTitle = document.createElement("div");
      postTitle.className = "post-title";
      postTitle.innerHTML = `<a href="${post.htmlFile}">${post.title}</a>`;

      postDiv.appendChild(postImage);
      postDiv.appendChild(postTitle);
      postContent.appendChild(postDiv);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  displayBlogPosts();
  displayTutorials();
});
