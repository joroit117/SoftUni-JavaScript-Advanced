function solve(arr){
    let array = JSON.parse(arr);

    let outputArr = ['<table>'];
    outputArr.push(makeKeyRow(array));
    arr.forEach((obj) => outputArr.push(makeValueRow(obj)));
    outputArr.push('</table>');
    console.log(outputArr.join('\n'));

    function makeKeyRow(arr){
        let result = ' <tr>';
        Object.keys(arr[0]).forEach(key =>{
            result += `<th>${escapeHtml(key)}</th>`;
        });
        result += '</tr>';
        return result;
    }

    function makeValueRow(obj){
        let result = ' <tr>';
        Object.values(obj).forEach(value =>{
            result += `<td>${escapeHtml(value)}</td>`;
        });
        result += '/tr';
        return result;
    }

    function escapeHtml(str) {
        // html escape from Underscore.js https://coderwall.com/p/ostduq/escape-html-with-javascript
        let entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#x2F;'
        };
        return str.replace(/[&<>"'\/]/g, (s) => entityMap[s]);
    }
}
solve(`[{'Name':'Pesho',
    'Score':4,
    ' Grade':8},
    {'Name':'Gosho',
    'Score':5,
    ' Grade':8},
    {'Name':'Angel',
    'Score':5.50,
    ' Grade':10}]`);