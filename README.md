# Belly Button Challenge

---

[Deployment](https://kaileycar.github.io/belly-button-challenge/)

---

Build your own interactive dashboard to explore the [Belly Button Biodiversity](https://robdunnlab.com/projects/belly-button-biodiversity/).   This dataset shows of a microbial species (OTUs) that were present in more than 70% of people. This assignment  
consists of three graphs (bar, bubble, and guage *optional*) with a demographic information box and a dropdown  
menu to see all the individuals in this dataset.   

---

## About

Using JavaScript and HTML, you will be creating an interactive dashboard and deploy this repo in GitHub Pages.  
We are looking at OUT's (operational taxonomic units) that were present in over 70% of people, while the rest  
had almost none. Using the graphs, we can see what factors play into this microbial species in people. You will  
be setting up a horizontal bar chart that lists the top 10 OTUs found in that individual. Using the same   
information, create a bubble chart that displays each sample. The hover text for both graphs should be the  
`otu_labels`. Finally, an individuals information will be created to show the metadata about that individual.   
All of these graphs should be able to update when a new sample is selected from the `dropdown` menu.    

  *OPTIONAL*: Create a gauge that plots the weekly washing frequency of that individual. 

---

## Getting Started

  1. Create a new repository called `belly-button-challenge`
  2. Clone the new repo to your computer
  3. Inside you local repo, clone the files from the [Starter_Code](https://github.com/Kaileycar/belly-button-challenge/files/12323780/Starter_Code.zip)
  4. Push the above changes to GitHub
  5. Deploy the new repository to GitHub Pages

---

## Usage

### Bar Chart

  * Use the D3 library to read in the `samples.json` from the [URL](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json)
  * Create a **horizontal** bar chart that displays the top 10 OTUs found in that individual
      * Use `sample_values` as the values  
      * Use `otu_ids` as the labels  
      * Use `otu_labels` as the hovertext  
  * Make sure to use the `reverse()` function  
  * The bar chart should look like this:  
    ![alt text](https://github.com/Kaileycar/belly-button-challenge/blob/main/data/bar.png "Bar Chart")


### Bubble Chart

  * Use the D3 library to read in the `samples.json` from the [URL](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json)
  * Create a  bubble chart that displays:
      * `otu_ids` for the x values
      * `sample_values` for the y values
      * `sample_values` for the marker size
      * `otu_ids` for the marker colors
      * `otu_labels` for the hovertext
  * The bubble chart should look like this:  
    ![alt text](https://github.com/Kaileycar/belly-button-challenge/blob/main/data/bubble.png "Bubble Chart")


### Demographic Information 

  * Use the D3 library to read in the `samples.json` from the [URL](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json)
  * Grab the `metadata` from the json  
  * Make sure to clear the id *sample-metadata* so when you switch individuals, nothing copies over
  * Grab the key:value pair and display the text  
  * The demographic information should look like this:    
  ![alt text](https://github.com/Kaileycar/belly-button-challenge/blob/main/data/demographics.png "Demographics")


### Dropdown Menu

  * Use the D3 library to read in the `samples.json` from the [URL](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json)
  * Use D3 to select the id *selDataset* and set it to a variable
  * Grab each name
  * Loop through each name and append it to the dropdown variable
      * Make sure to append `option` and text `name`
  * The dropdown menu should look like this:  
    ![alt text](https://github.com/Kaileycar/belly-button-challenge/blob/main/data/dropdown.png "Dropdown")


### Gauge Chart

  * Use the D3 library to read in the `samples.json` from the [URL](https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json)
  * Grab the `metadata` from the json and then grab the `wfreq`
  * Use the [Gauge Chart](https://plotly.com/javascript/gauge-charts/) to find out the properties needed
  * Plot the weekly washing frequency of that individual
  * The gauge chart should look like this:  
    ![alt text](https://github.com/Kaileycar/belly-button-challenge/blob/main/data/gauge.png)


### Initializing and Updating Charts

  * Make sure to initialize the plots for the default page (with a function)
  * Make sure to update the plots when a new individual is selected (with a function)

---

## Help

* Huddled with Pan Marbibi on Wednesday 08/09/23

---

## Links

* [forEach function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)  
* [X Axis Labels](https://plotly.com/javascript/figure-labels/)  
* [Object.entries function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)  
* [Plotly Charts](https://plotly.com/javascript/bubble-charts/)  
* [Colors for charts](https://www.schemecolor.com/light-pink-pastels-gradient.php)  
* [HTML Bakground Colors](https://www.w3schools.com/html/html_colors.asp)  
* [HTML Color Names](https://www.w3schools.com/colors/colors_names.asp)  
* [Gauge Charts](https://plotly.com/javascript/gauge-charts/)  
* [Tickmarks for Gauge](https://www.grapecity.com/wijmo/demos/Gauge/GaugeElements/Tickmarks/purejs)
