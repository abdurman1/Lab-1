import { toElement } from "../utils/toElement";

function toDoItemTemplate(data) {
    const template = `
    <div class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
        ${data}
    </div>
    `;

    return toElement(template);
}

export { toDoItemTemplate };
