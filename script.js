const mainImage = document.getElementById("main-section-picture");
const mainText = document.getElementById("main-text");
const headerText = document.getElementById("header-text");

const sideImage1 = document.getElementById("side-image1");
const sideImage2 = document.getElementById("side-image2");
const sideImage3 = document.getElementById("side-image3");
const sideImage4 = document.getElementById("side-image4");

function changeImage1() {
  mainImage.src = "src/1.jpg";
  headerText.textContent = "Judul 1";
  mainText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur enim eget enim gravida dignissim. Morbi imperdiet aliquet euismod. Fusce a risus quis massa vulputate placerat. Donec et ultricies velit. Donec faucibus quis augue a suscipit. Donec lacinia viverra ligula scelerisque aliquet. Donec gravida pretium dui sit amet elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In congue elit et egestas pellentesque. Proin tristique tincidunt purus sed scelerisque. Aliquam erat volutpat. Proin maximus porttitor lacus, ut accumsan magna congue vel. Phasellus aliquet porta facilisis.";
}

function changeImage2() {
  headerText.textContent = "Judul 2";
  mainImage.src = "src/2.jpg";
  mainText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur enim eget enim gravida dignissim. Morbi imperdiet aliquet euismod. Fusce a risus quis massa vulputate placerat. Donec et ultricies velit. Donec faucibus quis augue a suscipit. Donec lacinia viverra ligula scelerisque aliquet. Donec gravida pretium dui sit amet elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In congue elit et egestas pellentesque. Proin tristique tincidunt purus sed scelerisque. Aliquam erat volutpat. Proin maximus porttitor lacus, ut accumsan magna congue vel. Phasellus aliquet porta facilisis. Donec ornare nibh at libero tincidunt viverra. Duis vitae enim tortor. Nulla viverra ligula risus, sit amet feugiat erat mollis sit amet. Vivamus sit amet dui fringilla quam congue accumsan ac eget ipsum. Nam malesuada laoreet maximus. Nulla sit amet velit ex. Sed a tincidunt augue. Maecenas rutrum porttitor ante, blandit ornare enim viverra vel. Proin elementum fringilla dapibus. Aliquam vehicula auctor elit, non tristique justo iaculis non. Vivamus ut viverra libero. Etiam a volutpat est. Aenean nec nibh et ligula convallis ullamcorper. Quisque accumsan nisl a malesuada viverra.";
}

function changeImage3() {
  headerText.textContent = "Judul 3";
  mainImage.src = "src/3.jpg";
  mainText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur enim eget enim gravida dignissim. Morbi imperdiet aliquet euismod. Fusce a risus quis massa vulputate placerat. Donec et ultricies velit. Donec faucibus quis augue a suscipit. Donec lacinia viverra ligula scelerisque aliquet. Donec gravida pretium dui sit amet elementum.";
}

function changeImage4() {
  headerText.textContent = "Judul 4";
  mainImage.src = "src/4.jpg";
  mainText.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam consectetur enim eget enim gravida dignissim. Morbi imperdiet aliquet euismod. Fusce a risus quis massa vulputate placerat. Donec et ultricies velit. Donec faucibus quis augue a suscipit. Donec lacinia viverra ligula scelerisque aliquet. Donec gravida pretium dui sit amet elementum. Interdum et malesuada fames ac ante ipsum primis in faucibus. In congue elit et egestas pellentesque. Proin tristique tincidunt purus sed scelerisque. Aliquam erat volutpat. Proin maximus porttitor lacus, ut accumsan magna congue vel. Phasellus aliquet porta facilisis. Donec ornare nibh at libero tincidunt viverra. Duis vitae enim tortor.";
}

console.log(mainImage);
