import {appendIcon} from "./src/Icon";
import {appendPanel} from "./src/Panel";
import {addListenersToReviews} from "./src/Tag";
import {hideTagInput} from "./src/TagInput";
import {waitUntilElementIsVisible} from "./src/Util";

import "./style/index.scss";
import {appendModal} from "./src/ExportModal";

let observerOptions = {
    childList: true,
    attributes: false,
    subtree: false
};
let loadingObserver = new MutationObserver(() => {
    if (document.querySelector(".reviews")) {
        addListenersToReviews();
    }
});

const initialize = () => {
    if (window.location.hash.indexOf("reviews") >= 0 || window.location.pathname.indexOf("reviews") >= 0) {
        waitUntilElementIsVisible(".reviews .review", () => {
            appendIcon();
            appendPanel();
            appendModal();
            addListenersToReviews();
            hideTagInput();

            let reviews = document.querySelector(".reviews");
            reviews && loadingObserver.observe(reviews.parentElement!, observerOptions);
        });
    }
};

let targetNode = document.querySelector(".ServiceReviewsApp") || document.querySelector("#react-app");

let initObserver = new MutationObserver(() => {
    if (!document.querySelector(".reviews")) {
        initialize();
    }
});
targetNode && initObserver.observe(targetNode, observerOptions);


window.addEventListener("hashchange", initialize, false);

initialize();