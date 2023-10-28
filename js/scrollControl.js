document.addEventListener('DOMContentLoaded', function () {
    const siteTitle = document.querySelector('.site-title');
    const postsSection = document.querySelector('.container');
    let hideMessage = false;
  
    // Function to check if the message should be hidden
    const checkScroll = () => {
      const siteTitleHeight = siteTitle.clientHeight;
      const postsSectionTop = postsSection.getBoundingClientRect().top;
  
      if (postsSectionTop <= siteTitleHeight && !hideMessage) {
        siteTitle.style.display = 'none'; // Hide the message
        hideMessage = true;
      } else if (hideMessage) {
        siteTitle.style.display = 'block'; // Show the message
      }
    };
  
    // Initially show the message
    siteTitle.style.display = 'block';
  
    // Check when scrolling
    window.addEventListener('scroll', checkScroll);
  });
  