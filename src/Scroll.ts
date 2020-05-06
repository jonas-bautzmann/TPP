import * as $ from "jquery";
import {waitUntilElementVanished} from "./Util";

export const scrollToLastTagged = () => {
    const reviews = $(".reviews .review");
    const tagItems = reviews.find(".tags .tags__item");

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
    const emptyTagbars = reviews.find(".tags:not(:has(.tags__item))");

    if (emptyTagbars.length) {
        let review = emptyTagbars[0].closest(".review");
        review && review.scrollIntoView({block: "center"});
    } else {
        reviews[reviews.length - 1].scrollIntoView({block: "center"});
        waitUntilLoaderVanished(scrollToLastUntagged);
    }

};

const waitUntilLoaderVanished = (callback: () => void) => {
    waitUntilElementVanished(".reviews > :not(.review)", callback);
};