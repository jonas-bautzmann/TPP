export const waitUntilElementVanished = (selector: string, callback: () => void) => {
    setTimeout(() => {
        const isElementVisible = $(selector).length >= 1;

        if (isElementVisible) {
            waitUntilElementVanished(selector, callback);
        } else {
            callback();
        }
    }, 500);
};

export const waitUntilElementIsVisible = (selector: string, callback: () => void) => {
    setTimeout(() => {
        const isElementVisible = $(selector).length >= 1;

        if (isElementVisible) {
            callback();
        } else {
            waitUntilElementIsVisible(selector, callback);
        }
    }, 1000);
};
