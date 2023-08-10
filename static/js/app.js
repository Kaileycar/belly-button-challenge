// set url to a variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

// Initialize  default plots on webpage
function init() {

    // read in json data with d3 library 
    d3.json(url).then((data) => {
        console.log(data);

        // Use D3 to select name id's for dropdown
        let dropdown = d3.select("#selDataset");

        // Grab each name
        let names = data.names;
        
        // Use 'forEach' method instead of looping 
        names.forEach((name) => {
            dropdown.append("option").text(name).property("value", name);
        });

        // Grab first name and set it to a variable
        let firstName = names[0]

        // Call each function for the graphics
        barChart(firstName);
        bubbleChart(firstName);
        demoInfo(firstName);
        gaugeChart(firstName);
    });
}

// Create the bar chart
function barChart(arr) {

    // read in json 
    d3.json(url).then((data) => {
        console.log(data);

        // Grab samples from json
        let samples = data.samples;

        // Filter through the sample data to have id equal arr
        let filterSample = samples.filter(sample => sample.id === arr);

        // Grab the first dictionary in filterSample
        let first = filterSample[0];

        // Trace data and make a horizontal bar chart
        let trace1 = [{

            // Grab first 10 results by slicing
            // Reverse the data so it goes in descending order
            x: first.sample_values.slice(0,10).reverse(),
            y: first.otu_ids.slice(0,10).map((otu_id) => `OTU ${otu_id}`).reverse(),
            text: first.otu_labels.slice(0,10).reverse(),
            type: "bar",
            orientation: "h",
            marker: {
                color: "rgb(243, 83, 144)"
            }
        }];

        // Plot with plotly
        Plotly.newPlot("bar", trace1);
    });
}

// Create the bubble Chart
function bubbleChart(arr) {

    // Read in json
    d3.json(url).then((data) => {
        console.log(data);

       // Grab sample from json
       samples = data.samples 

        // Filter through the sample data to have id equal arr
        let filterSample = samples.filter(sample => sample.id === arr);

        // Grab the first dictionary in filterSample
        let first = filterSample[0];

        // Trace data and make a bubble chart
        let trace2 = [{
            x: first.otu_ids,
            y: first.sample_values,
            text: first.otu_labels,
            mode: "markers",
            marker: {
                color: first.otu_ids,
                size: first.sample_values
            }
        }];

        // Add x axis title
        let layout = {
            xaxis: {
                title: {text: "OTU ID"}
            }
        };

        // Plot with Plotly
        Plotly.newPlot("bubble", trace2, layout);
    });
}

function demoInfo(arr) {

    // Read in json
    d3.json(url).then((data) => {
        console.log(data);

        // Grab metadata from json
        let metadata = data.metadata;

        // Filter through metadata to have id equal arr
        let filterMeta = metadata.filter((mdata) => mdata.id == arr);

        // Grab the first dictionary in metadata
        let first = filterMeta[0];

        // Clear metadata 
        d3.select("#sample-metadata").html("");

        // Use 'Object.entries' to grab key:value pair
        Object.entries(first).forEach(([key, value]) => {
            d3.select("#sample-metadata").append("h6").text(`${key}: ${value}`);
        });
    });
}

function gaugeChart(arr) {

    // Read in Json
    d3.json(url).then((data) => {
        console.log(data);

        // Grab metadata (to grab wfreq) from json
        let metadata = data.metadata;

        // Filter through metadata to have id equal arr
        let filterMeta = metadata.filter((mdata) => mdata.id == arr);

        // Grab the first dictionary in the metadata
        // Only grab the wfreq of the data
        let first = filterMeta[0].wfreq;
        
        // trace the data to make a gauge chart
        trace3 = [{
            type: "indicator",
            //domain: {x: [0, 1], y: [0,1]},
            gauge: {
                steps: [
                    {range: [0, 1], color: "rgb(252, 237, 240)"},
                    {range: [1, 2], color: "rgb(253, 226, 231)"},
                    {range: [2, 3], color: "rgb(253, 215, 222)"},
                    {range: [3, 4], color: "rgb(254, 203, 212)"},
                    {range: [4, 5], color: "rgb(254, 192, 203)"},
                    {range: [5, 6], color: "rgb(255, 181, 194)"},
                    {range: [6, 7], color: "rgb(255, 178, 180)"},
                    {range: [7, 8], color: "rgb(255, 170, 171"},
                    {range: [8, 9], color: "rgb(256, 162, 160"}
                ],
                axis: {range: [0, 9],
                       tickwidth: 1,
                       tickcolor: "rgb(170, 51, 106)",
                       tickvals: [0,1,2,3,4,5,6,7,8,9],
                       ticktext: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                       showticklabels: true,
                       //ticklabels: "inside"
                    },

                bar: {color: "rgb(192, 64, 0)"},
            },
            value: first,
            mode: "gauge+number",
            title: { text: "<b>Belly Button Washing Frequency</b><br>Scrubs per Week"}
        }];

        // Plot with Plotly
        Plotly.newPlot("gauge", trace3);
    });
}




// Update plots function
function optionChanged(arr) {
    barChart(arr);
    bubbleChart(arr);
    demoInfo(arr);
    gaugeChart(arr);
}


init();
    


