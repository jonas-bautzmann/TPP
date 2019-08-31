import * as $ from "jquery";

export const scrollToLastTagged = () => {
    const reviews = $(".reviews .review");
    const tagItems = reviews.find(".tag-bar .tag-item");

    if (tagItems.length) {
        let review = tagItems[0].closest(".review");
        review && review.scrollIntoView({block: "center"});
    } else {
        reviews[reviews.length - 1].scrollIntoView({block: "center"});
        waitUntilLoaderVanished(scrollToLastTagged);
    }
};

export const scrollToLastUntagged = () => {
    const reviews = $(".reviews .review");
    const emptyTagbars = reviews.find(".tag-bar:not(:has(-tag-item))");

    if (emptyTagbars.length) {
        let review = emptyTagbars[0].closest(".review");
        review && review.scrollIntoView({block: "center"});
    } else {
        reviews[reviews.length - 1].scrollIntoView({block: "center"});
        waitUntilLoaderVanished(scrollToLastUntagged);
    }

};

const waitUntilLoaderVanished = (callback: () => void) => {
    setTimeout(() => {
        const isLoaderVisible = $(".reviews > :not(.review)").length >= 1;

        if(isLoaderVisible) {
            waitUntilLoaderVanished(callback);
        } else {
            callback();
        }
    }, 500);
};