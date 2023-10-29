const blogPosts = [
    {
      title: "Variables, data types and operators basics in Python",
      htmlFile: "./blogposts/AutomationWithPython/Basics_1.html",
      about: "Unlocking the Magic of Python: Dive into the World of Variables, Data Types, and Operators with us! Learn the ABCs of Python programming in this fun and easy-to-follow blog, Click here to know about them now",
      imageSrc: "./blogposts/AutomationWithPython/images/Basics1||Episode2.png",
      date: "October 23, 2023",
    },

    {
      title: "Input and output basics in Python",
      htmlFile: "./blogposts/AutomationWithPython/Basics_2.html",
      about: "Unlock the Magic of Python's Input and Output: Learn how to send and receive information with Python in this beginner-friendly blog. From user input to printing results, we've got you covered!, Click here to learn about them now",
      imageSrc: "./blogposts/AutomationWithPython/images/Basics2||Episode3.png",
      date: "October 23, 2023",
    },

    {
      title: "Conditional statements in Python",
      htmlFile: "./blogposts/AutomationWithPython/Basics_3.html",
      about: "Unlock the Power of Python's Conditionals! Learn the basics of if, elif, and else statements in Python with easy-to-follow examples and step-by-step guidance in this beginner-friendly blog, Click here to learn about them now",
      imageSrc: "./blogposts/AutomationWithPython/images/Basics3||Episode4.png",
      date: "October 23, 2023",
    },

    {
      title: "Loop statements in Python",
      htmlFile: "./blogposts/AutomationWithPython/Basics_4.html",
      about: "Discover the magic of loops in Python! Learn how 'for' and 'while' loops can automate repetitive tasks and make your code dance to a rhythm of its own. Let's loop and roll!, Click here to learn about Loops now",
      imageSrc: "./blogposts/AutomationWithPython/images/Basics4||Episode5.png",
      date: "October 29, 2023",
    },
    
    {
      title: "Functions in Python",
      htmlFile: "./blogposts/AutomationWithPython/Basics_5.html",
      about: "Unlocking the Magic of Functions: A Beginner's Guide to Understanding Functions - Explore the fundamental building blocks of programming in a fun and easy-to-follow journey. Let's dive in!, Click here to learn about Functions now",
      imageSrc: "./blogposts/AutomationWithPython/images/Basics5||Episode6.png",
      date: "October 29, 2023",
    },

    // {
    //   title: "Modules and libraries in Python",
    //   htmlFile: "./blogposts/AutomationWithPython/Basics_6.html",
    //   about: "Unlocking the Power of Modules and Libraries: Your Starter Guide to Streamlining Code and Boosting Productivity. Discover the magic of code reuse and simplification!, Click here to learn about Modules and Libraries now",
    //   imageSrc: "./blogposts/AutomationWithPython/images/Basics6||Episode7.png",
    //   date: "October 29, 2023",
    // },



  ];

  const tutorials = [
    {
      title: "Complete Automation course with Python free",
      htmlFile: "./blogposts/AutomationWithPython/list.html",
      about: "Automation is a great way to ease up your task and make your programs do them for you -- Click here to learn about automation with the easiest language possible - Python !!",
      imageSrc: "./blogposts/AutomationWithPython/images/CourseAWP.png",
      date: "October 23, 2023",
    },
    {
      title: "Learn complete MOJO basics for free",
      htmlFile: "./blogposts/Learn_MOJO/list.html",
      about: "Mojo is a newly developing language vastly used for Artifical intelligence and know for its speed -- Click here to learn about Mojo🔥 now !!",
      imageSrc: "./blogposts/Learn_MOJO/images/Mojo.png",
      date: "October 25, 2023",
    },
    {
      title: "Learn about mistakes every programmer makes and how to avoid them",
      htmlFile: "./blogposts/Mistakes/list.html",
      about: "If I had to start over my programming journey I will not repeat these mistakes again -- Click here to learn how to avoid all the mistakes I did in the easiest way possible !!",
      imageSrc: "./blogposts/Mistakes/images/Mistakes.png",
      date: "October 24, 2023",
    },
    // Add other tutorial entries here
  ];
  
// Sort the tutorials and blogposts by date
tutorials.sort((a, b) => new Date(a.date) - new Date(b.date));
blogPosts.sort((a, b) => new Date(a.date) - new Date(b.date));

function displayBlogPosts() {
  const postContent = document.querySelector(".posts");
  
  blogPosts.forEach((post) => {
      const postDiv = document.createElement("div");
      postDiv.className = "post-content";
      
      const postImage = document.createElement("div");
      postImage.className = "post-image";
      postImage.innerHTML = `<a href="${post.htmlFile}"><img src="${post.imageSrc}" class="img" alt="${post.title}"></a>`;

      const postTitle = document.createElement("div");
      postTitle.className = "post-title";
      postTitle.innerHTML = `<a href="${post.htmlFile}">${post.title}</a>`;

      const postAbout = document.createElement("div");
      postAbout.className = "post-about";
      postAbout.innerHTML = `<a href="${post.htmlFile}">${post.about}</a>`;

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
      postDiv.innerHTML = `<a href="${post.htmlFile}"></a>`;

      const postImage = document.createElement("div");
      postImage.className = "post-image";
      postImage.innerHTML = `<a href="${post.htmlFile}"><img src="${post.imageSrc}" class="img" alt="tutorial1"></a>`;

      const postTitle = document.createElement("div");
      postTitle.className = "post-title";
      postTitle.innerHTML = `<a href="${post.htmlFile}">${post.title}</a>`;

      const postAbout = document.createElement("div");
      postAbout.className = "post-about";
      postAbout.innerHTML = `<a href="${post.htmlFile}">${post.about}</a>`;

      postDiv.appendChild(postImage);
      postDiv.appendChild(postTitle);
      postDiv.appendChild(postAbout);
      postContent.appendChild(postDiv);
  });
}

displayBlogPosts();
displayTutorials();

