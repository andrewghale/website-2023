import '@/styles/main.scss';
import '@/nested/nested.ts'
import ahLogo from '../assets/logo.svg'
import ahLogoFilled from '../assets/logo-filled.svg'
import { setupCounter } from './counter.ts'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.figma.com/file/onTK1JinCkzDbAPfIbsnSY/Second-Logo?type=design&mode=design&t=byFP2fiJhG1CJqYt-1" target="_blank">
      <img src="${ahLogoFilled}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.figma.com/file/UKl9qbbAjYKcky6ujwWUNKBz/Main-Logo?type=design&mode=design&t=byFP2fiJhG1CJqYt-1" target="_blank">
      <img src="${ahLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Developer and Max patcher
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

// Event listener for dark mode button click
const darkModeToggle = document.getElementById("darkModeToggle")!;
darkModeToggle.addEventListener("click", toggleDarkMode);
