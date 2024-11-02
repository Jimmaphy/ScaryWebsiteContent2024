export class CookieManager {
    static cookieExists() {
        return (document.cookie);
    }
    static createCookie() {
        document.cookie = `1`;
    }
    static hasAcceptedCookies() {
        if (!this.cookieExists()) {
            return false;
        }
        return document.cookie[0] === '1';
    }
}
//# sourceMappingURL=cookies.js.map