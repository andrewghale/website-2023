// Define a function that creates the HTML content for the nested page
function createNestedPageContent() {
  const container = document.createElement('div');
  container.innerHTML = `
    <header>
      <h1>Welcome to the Nested Page!</h1>
    </header>
    <main>
      <p>This is the content of the nested page. Feel free to add any elements and styles you want here.</p>
    </main>
  `;
  return container;
}

// Wait for the DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
  // Get the root element where you want to append the content (e.g., a div with id="app")
  const rootElement = document.getElementById('app');

  // Create the HTML content dynamically
  const nestedPageContent = createNestedPageContent();

  // Append the content to the root element
  if (rootElement) {
    rootElement.appendChild(nestedPageContent);
  }
});
