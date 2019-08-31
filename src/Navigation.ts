import * as $ from "jquery";

let hide = false;

export const hideNavigation = () => {
    const navigation = $(".navigation-layout");
    navigation.hide();
    hide = true;
};

export const showNavigation = () => {
    const navigation = $(".navigation-layout");
    navigation.show();
    hide = false;
};

export const toggleNavigation = () => {
    hide ? showNavigation() : hideNavigation();
};