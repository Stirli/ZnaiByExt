export class Page {

    #classListBlock;
    #mainMenuBlock;
    #infoBlock;
    #contentButtonsBlock;
    #contentBlock;

    /**
     * @typedef {Object} ParamsObject
     * @property {string} classListBlock
     * @property {string} mainMenuBlock
     * @property {string} infoBlock
     * @property {string} contentButtonsBlock
     * @property {string} contentBlock
     */
    /** 
     * @param {ParamsObject} params 
     */
    constructor(params) {
        this.#classListBlock = params.classListBlock;
        this.#mainMenuBlock = params.mainMenuBlock;
        this.#infoBlock = params.infoBlock;
        this.#contentButtonsBlock = params.contentButtonsBlock;
        this.#contentBlock = params.contentBlock;
    }

    get classListBlock() { return $(this.#classListBlock); }
    get mainMenuBlock() { return $(this.#mainMenuBlock); }
    get infoBlock() { return $(this.#infoBlock); }
    get contentButtonsBlock() { return $(this.#contentButtonsBlock); }
    get contentBlock() { return $(this.#contentBlock); }

    /**
     * Callback for waiting for mutations
     * 
     * @callback mutationsCallback
     * @param {Node[]} addedNodes,
     * @param {Node[]} removedNodes
     */
    /**
     * 
     * @param {string} elementSelector 
     * @param {mutationsCallback} mutationsCallback,
     * @param {predicate} filter
     */
    onChildListMutations(elementSelector, mutationsCallback) {
        let mutationObserver = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                mutationsCallback(mutation.addedNodes, mutation.removedNodes);
            });
        });
        let elements = document.querySelectorAll(elementSelector);
        elements.forEach(function (element) {
            mutationObserver.observe(element, {childList: true});
        });
    }
}