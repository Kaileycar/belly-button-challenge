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
            orientation: "h"
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

        // clear metadata 
        d3.select("#sample-metadata").html("");

        // Use 'Object.entries' to grab key:value pair
        Object.entries(first).forEach(([key, value]) => {
            d3.select("#sample-metadata").append("h6").text(`${key}: ${value}`);
        });
    });
}

// Update plots function
function optionChanged(arr) {
    barChart(arr);
    bubbleChart(arr);
    demoInfo(arr);
}


init();
    


