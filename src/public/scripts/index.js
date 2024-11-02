import { CookieManager } from "./cookies.js";
function startGame() {
    console.log('Game started');
}
window.onload = () => {
    if (CookieManager.hasAcceptedCookies()) {
        console.log('Cookie found');
        return;
    }
    let startButton = document.getElementById('start-game');
    startButton.onclick = () => {
        CookieManager.createCookie();
        startGame();
    };
};
//# sourceMappingURL=index.js.map