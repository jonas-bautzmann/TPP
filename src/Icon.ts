import * as $ from "jquery";
import {showPanel} from "./Panel";

const Icon = $("<svg class=\"icon-plugin\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\" width=\"20px\" height=\"20px\" viewBox=\"0 0 535.5 535.5\" xml:space=\"preserve\"><path d=\"M471.75,255H433.5V153c0-28.05-22.95-51-51-51h-102V63.75C280.5,28.05,252.45,0,216.75,0S153,28.05,153,63.75V102H51c-28.05,0-51,22.95-51,51v96.9h38.25c38.25,0,68.85,30.6,68.85,68.85S76.5,387.6,38.25,387.6H0v96.9c0,28.05,22.95,51,51,51h96.9v-38.25c0-38.25,30.6-68.85,68.85-68.85s68.85,30.6,68.85,68.85v38.25h96.9c28.05,0,51-22.95,51-51v-102h38.25c35.7,0,63.75-28.05,63.75-63.75S507.45,255,471.75,255z\"/></svg>");

export const appendIcon = () => {
    if($('.icon-wrapper').length) {
        return;
    }

    const iconWrapper = $("<div class='icon-wrapper'></div>");
    iconWrapper.append(Icon);
    iconWrapper.on("click", showPanel);
    $("body").append(iconWrapper);

};

