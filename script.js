// Get the banner text container
const bannerText = document.querySelector('.banner-text');

// Clone the text multiple times to fill the container
const textContent = bannerText.innerHTML; // Grab the inner HTML of the span

// Define how many times you want to repeat the content
const repeatCount = 100;

for (let i = 0; i < repeatCount; i++) {
  // Clone the content and append it to the banner text container
  const newSpan = document.createElement('span');
  newSpan.innerHTML = textContent;
  bannerText.appendChild(newSpan);
}
