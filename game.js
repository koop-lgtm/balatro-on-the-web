
// 判断是否为移动端（宽度小于 768px）
const _isMobile = window.innerWidth <= 100000;

// 根据设备类型设置标题文字
const titleText = _isMobile ? 'Balatro' : 'Play Balatro Online';
// 插入 header HTML
document.write(`
    <header class="balatro-header">
        <nav class="nav-container">
            <a href="/" class="logo-container">
                <img src="/balatro.png" alt="Balatro Logo" class="logo-img">
                <span class="logo-text">${titleText}</span>
            </a>
            <ul class="nav-links">
                <li><a href="/balatro-jokers/index.html">Jokers</a></li>
                <li><a href="/balatro-seeds/index.html">Seeds</a></li>
                <!--<li><a href="/how-to-play/index.html">How to Play</a></li>-->
                <li><a href="/mods/index.html">Balatro Mods</a></li>
                <!--<li><a href="/games/card-games/index.html">Card Games</a></li>-->
                <li><a href="/faq/index.html">FAQ</a></li>
            </ul>
        </nav>
    </header>
`);

// 为固定定位的 header 添加页面内容的上边距
const style = document.createElement('style');
style.textContent = `
    body {
        padding-top: var(--header-height);
    }
`;
document.head.appendChild(style); 
