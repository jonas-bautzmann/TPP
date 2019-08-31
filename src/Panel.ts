import * as $ from "jquery";
import {scrollToLastTagged, scrollToLastUntagged} from "./Scroll";
import {toggleNavigation} from "./Navigation";
import {toggleTagInput} from "./TagInput";

const icon = $("<svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"far\" data-icon=\"times-circle\" class=\"icon-close\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path fill=\"currentColor\" d=\"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z\"></path></svg>");

const panel = $("<div class='plugin-panel'></div>");
export const appendPanel = () => {
    if ($('.panel').length) {
        return;
    }

    const buttonList = $("<ul class='button-list'/>");

    const tag = $("<li>Scroll to first tagged Review</li>");
    tag.on("click", scrollToLastTagged);
    buttonList.append(tag);

    const unTag = $("<li>Scroll to first untagged Review</li>");
    unTag.on("click", scrollToLastUntagged);
    buttonList.append(unTag);

    const navigation = $("<li>Toggle Navigation</li>");
    navigation.on("click", toggleNavigation);
    buttonList.append(navigation);

    const tagInput = $("<li>Toggle Tag Input</li>");
    tagInput.on("click", toggleTagInput);
    buttonList.append(tagInput);

    const close = $("<div class='close'></div>");
    close.append(icon);
    close.append("<span>Close</span>");
    close.on("click", closePanel);
    panel.append(close);
    panel.append("<hr/>");

    panel.append(buttonList);
    $("body").append(panel);
};

export const closePanel = () => {
    panel.hide();
};

export const showPanel = () => {
    panel.show();
};

