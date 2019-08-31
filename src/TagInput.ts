import * as $ from "jquery";

const body = $("body");

export const toggleTagInput = () => body.toggleClass("hide-tag-input");

export const hideTagInput = () => body.addClass("hide-tag-input");