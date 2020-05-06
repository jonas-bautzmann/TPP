import * as $ from "jquery";

const modal = $("<div class='export-modal'></div>");
export const appendModal = () => {
    if ($('.export-modal').length) {
        return;
    }

    let container = $("<div class='container'></div>");

    let header = $("<h3>Export data</h3>");
    container.append(header);

    let datePickerBox = $("<div class='date-picker-box'></div>");


    let nowString = (new Date()).toISOString().split("T")[0];
    let fromInput = $("<input type='date' id='data-from-time' value='" + nowString + "'/>");
    fromInput.on("change", (e: JQuery.TriggeredEvent) => console.log(e.currentTarget.value));
    datePickerBox.append(fromInput);

    let toInput = $("<input type='date' id='data-to-time' value='" + nowString + "'/>");
    toInput.on("change", (e: JQuery.TriggeredEvent) => console.log(e.currentTarget.value));
    datePickerBox.append(toInput);

    container.append(datePickerBox);

    let exportButton = $("<button class='export-button'>Export</button>");
    exportButton.on("click", (e: JQuery.TriggeredEvent) => console.log(e.currentTarget.value));
    container.append(exportButton);

    modal.append(container);
    $("body").append(modal);
};