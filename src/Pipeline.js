import React, { Component, useContext } from "react";
import PropTypes from "prop-types";
import Popover from "antd/lib/popover";
import "antd/lib/popover/style/css";
import _ from "lodash";

import "./pipeline.css";

import { TwoArrow } from "./svg";
/**
 * 自适应pipeline图形的参数
 */
const pipelineWidth = (document.documentElement.clientWidth * 0.8) >> 0,
  columnWidth = 120,
  columnHeight = 44,
  marginLR = 20,
  marginTB = 5,
  pipelineMargin = 50;
const rowNum = (pipelineWidth / (columnWidth + marginLR * 2)) >> 0;

const MyContext = React.createContext();

function Job({ text }) {
  const init = useContext(MyContext);
  return (
    <a
      style={{
        height: init.columnHeight,
        border: "1px solid #e5e5e5",
        borderRadius: "30px",
        display: "inline-block",
        padding: "10px"
      }}
      title={text}
    >
      <span className="skipped">
        <TwoArrow />
      </span>
      <span className="ci-status-text">{text}</span>
    </a>
  );
}
JobDiv.propTypes = {
  text: PropTypes.string.isRequired
};
function JobDiv({ text, style }) {
  const init = useContext(MyContext);
  const css = {
    width: init.columnWidth,
    height: init.columnHeight,
    margin: `${init.marginTB}px ${init.marginLR}px`
  };
  return (
    <div className="pipeline" style={Object.assign({}, css, style)}>
      <Job text={text} />
    </div>
  );
}
JobDiv.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object.isRequired
};
function Stage({ text, data }) {
  const init = useContext(MyContext);
  const content = data.checkPoints.map(item => {
    return (
      <JobDiv
        key={item.id}
        text={item.alias || item.value}
        style={{ width: "auto" }}
      />
    );
  });

  return (
    <Popover content={content} trigger="click">
      <div
        className="inline"
        style={{
          width: init.columnWidth,
          height: init.columnHeight,
          margin: `${init.marginTB}px ${init.marginLR}px`
        }}
      >
        <Job className="inline" text={text} />
      </div>
    </Popover>
  );
}
Stage.propTypes = {
  text: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};
function VLine() {
  const init = useContext(MyContext);
  return (
    <div
      className="inline v-line"
      style={{ width: init.columnWidth + init.marginLR * 2 }}
    />
  );
}
/**
 * @return
 * <div class='line'>
 *    <Job/>
 *    <Job/>
 *    <Job/>
 * </div>
 * <div class='line'>
 *    <VLine/>
 *    <Job/>
 *    <Job/>
 * </div>
 */
function PipelineGraph({ graph = [] }) {
  return (
    <div className="pipeline">
      {graph.map((subArr, j) => (
        <div key={j} className="line">
          {subArr.map((item, i) =>
            typeof item === "string" ? (
              <VLine key={i + j} />
            ) : (
              <Stage
                key={item.doneDefinition}
                text={item.alias || item.doneDefinition}
                data={item}
              />
            )
          )}
        </div>
      ))}
    </div>
  );
}
PipelineGraph.propTypes = {
  graph: PropTypes.array.isRequired
};

export default class Pipeline extends Component {
  constructor(props) {
    super(props);

    const graph = this.props.graph || [];
    for (let i = 0; i < 30; i++) {
      graph.push({
        _id: i,
        phase: "phase" + (i % 10),
        order: i,
        name: "name" + i
      });
    }
    this.state = { graph: this.genGraph(graph) };
  }

  chunkSplit = (array, num) => {
    if (array.length < 1) {
      return [];
    }
    let chunk = [];
    while (array.length) {
      chunk.push(array.splice(0, num));
    }
    // 奇数行按照顺序排，偶数行按照反序排
    chunk = chunk.map((subArr, i) => (i % 2 ? subArr.reverse() : subArr));

    if (chunk.length % 2 === 0) {
      const lastChunk = chunk[chunk.length - 1];
      let rest = num - lastChunk.length;
      while (rest) {
        lastChunk.unshift("vLine");
        rest--;
      }
      // 去除最后一行第一个元素的虚线
      document.styleSheets[0].insertRule(
        '.pipeline .line:last-child::before{content: ""; width: 0!important; height: 0!important;}'
      );
    } else {
      // 如果是奇数行，则去除最后一个元素的虚线
      document.styleSheets[0].insertRule(
        '.pipeline .line:last-child::after{content: ""; width: 0!important; height: 0!important;}'
      );
    }
    return chunk;
  };

  genGraph = items => {
    const graph = [];
    for (const item of items) {
      const obj = graph.find(e => e.doneDefinition === item.phase);
      if (obj) {
        obj.checkPoints.push({
          id: item._id,
          value: item.name,
          order: +item.order
        });
      } else {
        graph.push({
          doneDefinition: item.phase,
          order: +item.order,
          checkPoints: [
            {
              id: item._id,
              value: item.name,
              order: +item.order
            }
          ]
        });
      }
    }
    return graph;
  };

  render() {
    const graph = this.chunkSplit(_.cloneDeep(this.state.graph), rowNum);
    return (
      <MyContext.Provider
        value={
          this.props.css || {
            pipelineWidth,
            columnWidth,
            columnHeight,
            marginLR,
            marginTB,
            pipelineMargin,
            rowNum
          }
        }
      >
        <PipelineGraph graph={graph} />
      </MyContext.Provider>
    );
  }
}
Pipeline.propTypes = {
  graph: PropTypes.array,
  css: PropTypes.object
};
