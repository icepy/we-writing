import React, { Component } from 'react';
import './style.css';
import bgImage from "../../img/bg.jpeg";
// import meishiImage from "../../img/meishi.png";
// import qixingImage from "../../img/qixing.png";

const bg = { 
  backgroundImage: `url(${bgImage})`,
}

export default class Content extends Component {
  render(){
    return (
      <div>
        <div className="App-Header-Content">
          <div className="App-Header" style={bg}>
            {/* <h1 className="App-My-Tag">五溪</h1> */}
            {/* <div className="App-My-Des">我寄愁心与明月，随风直到夜郎西。</div> */}
          </div>
        </div>
        <div className="App-Content">
          <p>杨花落尽子规啼，闻道龙标过五溪。</p>
          <p>我寄愁心与明月，随风直到夜郎西。</p>
          <p>
            <a
              href="https://github.com/icepy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img 
                src="https://img.shields.io/github/followers/icepy.svg?label=Follow" 
                className="App-Svg"
                alt="github followers"
              />
            </a>
            <img
              src="https://img.shields.io/github/license/icepy/icepy.me.svg" 
              className="App-Svg"
              alt="license"
            />
          </p>
          <p>
            你好，我是<strong>“icepy（五溪）”</strong>。 
          </p>
          <p>  
            2011年开始从事编程的工作，经历了从前端到大前端变革的整个过程，深入理解 <strong>移动跨平台架构领域</strong> 的设计和原理，在 <strong>Web前端，移动Hybrid容器架构，小程序容器体系</strong> 上有着丰富的实践和沉淀，另外对 <strong>前端工程化体系，Node.js，Java，Go</strong> 有一定的涉猎和实践。
          </p>
          <p>在团队管理方面追求务实，有效沟通，有能力带领团队解决问题，完成目标，落实结果。</p>
          <p>
            在生活里，我非常喜欢烹饪食物和折腾摩托车的维修和维护，如果你也热爱摩托车旅行，不妨坐下来和我聊聊。
          </p>
          <p>
            目前我在怀化，从事自己喜欢的工作，快乐认真的生活。
            最后，我想感谢在我的人生旅途中，遇见的每一位朋友。
          </p>
          <p>
            我的微博是 <a
              href="https://weibo.com/2455876310/profile?topnav=1&wvr=6"
              target="_blank"
              rel="noopener noreferrer"
            >@五溪的溪</a>，欢迎来撩。
          </p>
        </div>
      </div>
    );
  }
}