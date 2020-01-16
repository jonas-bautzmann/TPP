import {appendIcon} from "./src/Icon";
import {appendPanel} from "./src/Panel";
import {addListenersToReviews} from "./src/Tag";
import {hideTagInput} from "./src/TagInput";
import {waitUntilElementIsVisible} from "./src/Util";

import "./style/index.scss";

const initialize = () => {
    if (window.location.hash.indexOf("reviews") >= 0 || window.location.pathname.indexOf("reviews") >= 0) {
        waitUntilElementIsVisible(".reviews .review", () => {
            appendIcon();
            appendPanel();
            addListenersToReviews();
            hideTagInput();
            
            var reviews = document.querySelector(".reviews");
            reviews && loadingObserver.observe(reviews.parentElement!, observerOptions);
        });
    }
};

var targetNode = document.querySelector(".ServiceReviewsApp") || document.querySelector("#react-app");
var observerOptions = {
    childList: true,
    attributes: false,
    subtree: false
};

var initObserver = new MutationObserver(() => {
    if (!document.querySelector(".reviews")) {
        initialize();
    }
});
targetNode && initObserver.observe(targetNode, observerOptions);

var loadingObserver = new MutationObserver(() => {
    if (document.querySelector(".reviews")) {
        addListenersToReviews();
    }
});



window.addEventListener("hashchange", initialize, false);

initialize();