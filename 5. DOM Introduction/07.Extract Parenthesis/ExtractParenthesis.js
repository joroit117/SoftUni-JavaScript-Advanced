function extract(content) {
    let text = document.getElementById(content);

    let pattern = /\((.*?)\)/g;

    let matches = text.textContent.matchAll(pattern);
    let result = [];
    for (const match of matches) {
        result.push(match[0]);
    }

    return result.join('; ');
}