
Codementor Office Hours
====

Better D3 Charts with TDD
---

Code example for an skeleton to a charting npm package.

AMD modules containing D3.js graphs written with the Reusable API methodology.

Setup
----

Requirements: node and npm

While on your selected folder within a command line terminal type:

    git clone https://github.com/Golodhros/codementor.git
    npm install
    npm install -g karma-cli

Charts
----

The code for the charts is ubicated in src/chart


Chart Instantiation
----

Create a new chart by calling the method, then configure it via the API and call it with the right data set. Example:

    barChart = chart();
    barChart.width(600).margin({left: 10, top: 20});
    d3.select('.dom-container').datum(dataset).call(barChart);


Testing
----

We are using Karma as a test runner. Just type:

    karma start

[Karma Configuration File Docs](https://karma-runner.github.io/0.12/config/configuration-file.html)


Thanks
----

* Developing a D3.js Edge (Bleeding edge press)
* Mastering D3 (Packt Publishing)
* D3.js community in general