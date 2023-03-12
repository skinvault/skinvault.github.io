function downloadSkin() {
  const username = document.getElementById("username-input").value;
  const skinUrl = `https://mc-heads.net/body/${username}`;
  const downloadUrl = `https://mc-heads.net/download/${username}`;

  const skinPreview = document.getElementById("skin-preview");
  skinPreview.innerHTML = `<img src="${skinUrl}"><br><a href="${downloadUrl}" onclick="downloadSkinFile()">Download Skin</a>`;
}

