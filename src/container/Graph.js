import React, { Component } from "react";
import CanvasJSReact from "../assets/js/canvasjs.react";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: [],
    };
  }
  componentDidMount() {
    if (this.props.data) {
      const result = this.props.data.map((item) => {
        return {
          label: item.title,
          y: Number(item.price.split("$")[1]),
        };
      });

      this.setState({ bookData: result });
    }
  }
  render() {
    const options = {
      animationEnabled: true,
      theme: "light2", //"light1", "dark1", "dark2"
      height: 400,
      axisY: {
        includeZero: true,
      },
      data: [
        {
          type: "column",
          indexLabelFontColor: "#5A5757",
          indexLabelPlacement: "outside",
          dataPoints: this.state.bookData,
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default Graph;
