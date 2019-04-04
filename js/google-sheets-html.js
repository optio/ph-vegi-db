/*!
 * 
 * Google Sheets To HTML v0.9a
 * 
 * To use, simply replace the "tq?key=" value in the
 * URL below with your own unique Google document ID
 * 
 * The Google document's sharing must be set to public
 * 
 */

google.load('visualization', '1', {
    packages: ['table']
});
var visualization;

function drawVisualization() {
    url = 'https://docs.google.com/spreadsheets/d/178wQJLSyrXWNBx5Zkgs1JvwvYH0m_hTaskaBQAG19DE/edit?usp=sharing';
    var query = new google.visualization.Query(url);
    query.setQuery('SELECT A, B, C label A "City", B "Name", C "Address"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var cssClassNames = {
        'headerRow': 'cssHeaderRow',
        'tableRow': 'cssTableRow',
        'oddTableRow': 'cssOddTableRow',
        'selectedTableRow': 'cssSelectedTableRow',
        'hoverTableRow': 'cssHoverTableRow',
        'headerCell': 'cssHeaderCell',
        'tableCell': 'cssTableCell',
        'rowNumberCell': 'cssRowNumberCell'
    };

    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom',
        showRowNumber: true,
        width: '100%',
        height: '100%',
        alternatingRowStyle: true,
        cssClassNames: cssClassNames
    });
}
google.setOnLoadCallback(drawVisualization);
