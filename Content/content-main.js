import { ClassListExtender } from "./api/Modules/ClassListExtender.js";
import { Page } from "./api/Page.js";

function main() {
    console.log("Hello world");
    let page = new Page({ classListBlock: '.oak' });
    page.onChildListMutations(".page-content > .container > .row > .col-75",
        function (addedNodes, removedNodes) {
            addedNodes.forEach(function (mutationNode) {
                console.log('added mutationNode :>> ', mutationNode);
            });
            removedNodes.forEach(function (mutationNode) {
                console.log('removed mutationNode :>> ', mutationNode);
            })
        })
}

export { main };