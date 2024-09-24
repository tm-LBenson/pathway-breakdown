document.addEventListener('DOMContentLoaded', function () {
  const data = [
    {
      title: 'Level 1 - Intro To Frontend Development',
      content: `
            <ul>
                <li>Learn the basics: Create web pages using HTML (the structure), CSS (the style), and JavaScript (the interactive elements).</li>
                <li>Start simple: Make your first webpage with text, images, and links.</li>
                <li>Get stylish: Use Bootstrap to make your site look professional without much effort.</li>
                <li>Track your progress: Use Git/GitHub to save versions of your work and see how it develops over time.</li>
            </ul>
        `,
    },
    {
      title: 'Level 2 - Intermediate Frontend Development',
      content: `
            <ul>
                <li>Build on what you know: Use more features from Git/GitHub to manage bigger projects.</li>
                <li>Make your website pretty: Learn advanced techniques to style your site with HTML and CSS.</li>
                <li>Add magic to your site: Use JavaScript to make your website respond to user actions.</li>
                <li>Make it modern: Use Tailwind CSS to design beautiful, responsive layouts easily.</li>
                <li>Connect to the world: Learn how to use APIs to display weather, maps, or social media feeds on your site.</li>
                <li>Think like a programmer: Start using Object-Oriented Programming with JavaScript to write cleaner, more effective code.</li>
                <li>Explore AI: Begin to use AI-powered features like chatbots on your site.</li>
            </ul>
        `,
    },
    {
      title: 'Level 3 - Advanced Developer',
      content: `
            <ul>
                <li>Become a pro: Learn Node.js to handle server-side operations—where your website's data processing happens.</li>
                <li>Upgrade your frontend skills: Use React and Next.js to make interactive and dynamic websites.</li>
                <li>Handle data like a champ: Use Firebase to manage real-time data and handle user logins securely.</li>
                <li>Launch online: Put everything together to build complete applications that are ready for visitors.</li>
            </ul>
        `,
    },
    {
      title: 'Level 4 - Backend Developer',
      content: `
            <ul>
                <li>Control the backend: Learn to create server applications with Express, where you manage what happens on the server when someone visits your site.</li>
                <li>Store information: Use MongoDB to keep track of user data, posts, settings, and more.</li>
                <li>Tie it all together: Learn how to connect your server and frontend so they work smoothly together.</li>
                <li>Scale up: Use AWS to make your applications robust and handle lots of users and data.</li>
                <li>From start to finish: Build and launch a full application using everything you've learned.</li>
            </ul>
        `,
    },
  ];

  const accordion = document.getElementById('accordion');

  data.forEach((item, index) => {
    const div = document.createElement('div');
    div.className = 'bg-white rounded shadow p-4 mb-4';

    const h2 = document.createElement('h2');
    h2.className = 'font-semibold text-lg cursor-pointer';
    h2.textContent = item.title;
    h2.onclick = function () {
      const content = this.nextElementSibling;
      content.style.display =
        content.style.display === 'block' ? 'none' : 'block';
    };

    const content = document.createElement('div');
    content.className = 'text-gray-700 mt-2';
    content.style.display = 'none'; // Start with the content hidden
    content.innerHTML = item.content; // Use innerHTML to render the list

    div.appendChild(h2);
    div.appendChild(content);
    accordion.appendChild(div);
  });
});
