const layer = document.getElementById("onepieceLayer");

const characterAssets = [
  {
    src: "https://icon2.cleanpng.com/20240219/usz/transparent-one-piece-cartoon-character-in-red-shirt-and-1710872351990.webp",
    wide: false,
    label: "One Piece character"
  },
  {
    src: "https://www.kindpng.com/picc/m/238-2387348_transparent-sanji-png-luffy-zoro-nami-usopp-sanji.png",
    wide: true,
    label: "Straw Hat crew"
  },
  {
    src: "https://icon2.cleanpng.com/20240208/ifs/transparent-one-piece-cartoon-pirate-holding-beer-bottle-with-1710882426908.webp",
    wide: true,
    label: "One Piece pirate cartoon"
  },
  {
    src: "https://icon2.cleanpng.com/lnd/20250110/ug/e08684f809703817cf1084d12bbb7a.webp",
    wide: true,
    label: "One Piece logo"
  },
  {
    src: "https://icon2.cleanpng.com/lnd/20241222/ol/593caa14c45719fd6fc5bd9d8093fc.webp",
    wide: false,
    label: "Straw Hat skull"
  }
];

const fallbackIcons = ["☠️", "👒", "⚓", "🏴‍☠️", "💰", "🔥", "⚡", "✨"];

const layout = [
  { x: 5, y: 13, size: 112, asset: 0 },
  { x: 22, y: 9, size: 126, asset: 1 },
  { x: 42, y: 15, size: 95, asset: 4 },
  { x: 63, y: 8, size: 142, asset: 2 },
  { x: 82, y: 18, size: 110, asset: 0 },
  { x: 92, y: 39, size: 118, asset: 4 },
  { x: 7, y: 43, size: 132, asset: 3 },
  { x: 25, y: 54, size: 108, asset: 0 },
  { x: 73, y: 51, size: 136, asset: 1 },
  { x: 86, y: 70, size: 118, asset: 2 },
  { x: 11, y: 75, size: 102, asset: 4 },
  { x: 35, y: 80, size: 134, asset: 1 },
  { x: 57, y: 77, size: 104, asset: 0 },
  { x: 71, y: 87, size: 116, asset: 3 },
  { x: 49, y: 39, size: 82, asset: 4 },
  { x: 17, y: 31, size: 84, asset: 2 },
  { x: 67, y: 31, size: 85, asset: 0 },
  { x: 3, y: 88, size: 88, asset: 3 }
];

function createFallback(index) {
  const fallback = document.createElement("span");
  fallback.className = "character-fallback";
  fallback.textContent = fallbackIcons[index % fallbackIcons.length];
  return fallback;
}

function addBackgroundCharacters() {
  layout.forEach((item, index) => {
    const asset = characterAssets[item.asset % characterAssets.length];
    const card = document.createElement("div");
    card.className = `character-card${asset.wide ? " is-wide" : ""}`;
    card.style.left = `${item.x}%`;
    card.style.top = `${item.y}%`;
    card.style.setProperty("--size", `${item.size}px`);
    card.style.setProperty("--delay", `${index * 0.33}s`);
    card.style.setProperty("--duration", `${4.2 + (index % 5) * 0.48}s`);

    const image = document.createElement("img");
    image.src = asset.src;
    image.alt = asset.label;
    image.loading = "eager";
    image.decoding = "async";
    image.onerror = () => {
      image.replaceWith(createFallback(index));
    };

    card.appendChild(image);
    layer.appendChild(card);
  });
}

function setupTelegramFallback() {
  const joinButton = document.querySelector("[data-join-group]");

  joinButton.addEventListener("click", () => {
    const fallbackUrl = "https://t.me/+tasc9CEInas0ZjBl";

    window.setTimeout(() => {
      if (!document.hidden) {
        window.location.href = fallbackUrl;
      }
    }, 900);
  });
}

addBackgroundCharacters();
setupTelegramFallback();
