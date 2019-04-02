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
    //url = 'https://docs.google.com/spreadsheets/d/178wQJLSyrXWNBx5Zkgs1JvwvYH0m_hTaskaBQAG19DE/gviz/tq=SELECT%20A%2C%20B%2C%20C%2C%20D%20label%20A%20%22Name%22%2C%20B%20%22City%22%2C%20C%20%22Website%22%2C%20D%20%22Address%22';
    url = 'https://docs.google.com/spreadsheets/d/178wQJLSyrXWNBx5Zkgs1JvwvYH0m_hTaskaBQAG19DE/edit?usp=sharing';
    var query = new google.visualization.Query(url);
    query.setQuery('SELECT A, B, C label A "Name", B "City", C "Address"');
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('There was a problem with your query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }
    var data = response.getDataTable();
    visualization = new google.visualization.Table(document.getElementById('table'));
    visualization.draw(data, {
        allowHtml: true,
        legend: 'bottom',
        showRowNumber: true,
        width: '100%',
        height: '100%',
        alternatingRowStyle: true
    });
}
google.setOnLoadCallback(drawVisualization);
