import { EditClassModifier } from "./api/Modules/EditClassModifier.js";
import { Page } from "./api/Page.js";

function main() {
    console.log("Hello world");
    let page = new Page({ classListBlock: '.oak' });
    //".page-content > .container > .row > .col-75"
    let ecm  = new EditClassModifier(page);
}

export { main };