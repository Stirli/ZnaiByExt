export class EditClassModifier {
    /**
    * @typedef {import('../Page.js').Page} Page
    */

    /**
     * 
     * @param {Page} page 
     */
    constructor(page) {
        page.onChildListMutations(".popup_wrap",
            function (addedNodes, removedNodes) {
                addedNodes.forEach(function (mutationNode) {
                    console.log('added mutationNode :>> ', mutationNode.nodeName);
                    if (mutationNode instanceof HTMLElement) {
                        let popupName = mutationNode.getElementsByClassName('popup_name')[0].textContent;
                        if (popupName == "Редактировать класс") {
                            let footer = mutationNode.querySelector("div.popup_footer");
                            let btn = document.createElement("div");
                            btn.innerHTML = "На след. год";
                            btn.classList = "button-design-02 icon_close";
                            footer.prepend(btn);
                        }
                    }
                });
                removedNodes.forEach(function (mutationNode) {
                    console.log('removed mutationNode :>> ', mutationNode);
                })
            }
        );
    }
}